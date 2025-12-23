import { Search, Compass, LayoutDashboard, ArrowLeftRight } from "lucide-react";

const stats = [
  { label: "Networks", value: "8" },
  { label: "DEX Protocols", value: "93" },
  { label: "Tokens", value: "2.3M+" },
  { label: "Pairs", value: "1M+" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-background">
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top gradient orb */}
        <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-3xl" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Stats bar */}
      <div className="absolute top-0 left-0 right-0 py-3 bg-background/80 backdrop-blur-md border-b border-border/30 z-20">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-3 md:gap-6 text-xs">
          {stats.map((stat, index) => (
            <div key={index} className="stats-pill flex items-center gap-1.5">
              <span className="text-muted-foreground">{stat.label}:</span>
              <span className="font-semibold text-foreground">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mt-12">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-pink-500/20 rounded-full blur-2xl" />
            <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
              <defs>
                <linearGradient id="logoGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(263, 90%, 65%)" />
                  <stop offset="100%" stopColor="hsl(300, 70%, 65%)" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="30" r="22" fill="none" stroke="url(#logoGradHero)" strokeWidth="3" />
              <circle cx="30" cy="65" r="22" fill="none" stroke="url(#logoGradHero)" strokeWidth="3" />
              <circle cx="70" cy="65" r="22" fill="none" stroke="url(#logoGradHero)" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-5 tracking-tight">
          Master<span className="gradient-text">DEX</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium">
          All-in-One Gateway to Decentralized Trading
        </p>

        {/* Search bar - Uniswap style */}
        <div className="glass-card glow-border p-2 max-w-xl mx-auto mb-12">
          <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-secondary/50">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tokens, pairs, or paste addresses..."
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
            />
            <kbd className="hidden sm:inline-flex px-2.5 py-1 text-xs bg-muted rounded-lg text-muted-foreground font-mono">/</kbd>
          </div>
        </div>

        {/* Action buttons - Clean modern style */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="mdex-button flex items-center justify-center gap-3 group">
            <Compass className="w-5 h-5 text-primary" />
            <span>DEX Explorer</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Discover</span>
          </button>
          <button className="mdex-button flex items-center justify-center gap-3 group">
            <LayoutDashboard className="w-5 h-5 text-primary" />
            <span>Portfolio</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Monitor</span>
          </button>
          <button className="mdex-button flex items-center justify-center gap-3 group">
            <ArrowLeftRight className="w-5 h-5 text-primary" />
            <span>Swap</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Trade</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
