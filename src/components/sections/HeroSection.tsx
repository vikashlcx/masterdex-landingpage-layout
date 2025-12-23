import { Search, Compass, LayoutDashboard, ArrowLeftRight } from "lucide-react";

const stats = [
  { label: "Networks", value: "8" },
  { label: "DEX Protocols", value: "93" },
  { label: "Tokens", value: "2,337,719" },
  { label: "Pairs", value: "1,066,885" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-background">
      {/* Particle wave background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        
        {/* Particle dots - simulating the wave */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => {
            const row = Math.floor(i / 10);
            const col = i % 10;
            const baseY = 55 + Math.sin((col * 0.8) + (row * 0.3)) * 15;
            return (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-foreground/30 rounded-full"
                style={{
                  left: `${5 + col * 10}%`,
                  top: `${baseY + row * 4}%`,
                  opacity: 0.1 + Math.random() * 0.3,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute top-0 left-0 right-0 py-2.5 bg-background border-b border-border/30">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 md:gap-8 text-xs md:text-sm">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <span className="text-muted-foreground">{stat.label}:</span>
              <span className="font-medium text-foreground ml-1">{stat.value}</span>
              {index < stats.length - 1 && (
                <span className="text-border ml-4 md:ml-8">|</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mt-8">
        {/* Logo - Trinity knot style */}
        <div className="mb-6 animate-float">
          <div className="w-20 h-20 mx-auto relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(263, 84%, 65%)" />
                  <stop offset="100%" stopColor="hsl(280, 70%, 75%)" />
                </linearGradient>
              </defs>
              {/* Three interlocking circles forming trinity knot */}
              <circle cx="50" cy="32" r="20" fill="none" stroke="url(#logoGrad)" strokeWidth="2.5" />
              <circle cx="32" cy="62" r="20" fill="none" stroke="url(#logoGrad)" strokeWidth="2.5" />
              <circle cx="68" cy="62" r="20" fill="none" stroke="url(#logoGrad)" strokeWidth="2.5" />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 tracking-tight">
          Master<span className="gradient-text">DEX</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          All-in-One Gateway to Decentralized Trading
        </p>

        {/* Search bar */}
        <div className="glass-card glow-border p-1.5 max-w-2xl mx-auto mb-10">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary/50">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tokens, pairs, or paste addresses..."
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm"
            />
            <kbd className="hidden sm:inline-flex px-2 py-1 text-xs bg-muted rounded text-muted-foreground font-mono">/</kbd>
          </div>
        </div>

        {/* Action buttons - matching MasterDEX exactly */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="mdex-button flex items-center justify-center gap-2 group">
            <Compass className="w-5 h-5 text-primary group-hover:text-primary" />
            <span>DEX Explorer</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest ml-1">Discover</span>
          </button>
          <button className="mdex-button flex items-center justify-center gap-2 group">
            <LayoutDashboard className="w-5 h-5 text-primary group-hover:text-primary" />
            <span>Portfolio</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest ml-1">Monitor</span>
          </button>
          <button className="mdex-button flex items-center justify-center gap-2 group">
            <ArrowLeftRight className="w-5 h-5 text-primary group-hover:text-primary" />
            <span>Swap</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest ml-1">Trade</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
