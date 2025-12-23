import { Button } from "@/components/ui/button";
import { Search, Compass, LayoutDashboard, ArrowLeftRight } from "lucide-react";

const stats = [
  { label: "Networks", value: "8" },
  { label: "DEX Protocols", value: "93" },
  { label: "Tokens", value: "2.3M+" },
  { label: "Pairs", value: "1M+" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
        {/* Particle effect simulation */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/50 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute top-0 left-0 right-0 py-3 bg-secondary/50 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto flex justify-center gap-6 md:gap-12 text-sm">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-muted-foreground">{stat.label}:</span>
              <span className="font-semibold text-foreground">{stat.value}</span>
              {index < stats.length - 1 && <span className="text-border ml-4 md:ml-8">|</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mt-16">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
            <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(270, 70%, 60%)" />
                  <stop offset="100%" stopColor="hsl(185, 70%, 50%)" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="35" r="18" fill="none" stroke="url(#logoGradient)" strokeWidth="3" />
              <circle cx="35" cy="60" r="18" fill="none" stroke="url(#logoGradient)" strokeWidth="3" />
              <circle cx="65" cy="60" r="18" fill="none" stroke="url(#logoGradient)" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 tracking-tight">
          Master<span className="gradient-text">DEX</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          All-in-One Gateway to Decentralized Trading
        </p>

        {/* Search bar */}
        <div className="glass-card glow-border p-2 max-w-2xl mx-auto mb-10">
          <div className="flex items-center gap-3 px-4 py-3">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tokens, pairs, or paste addresses..."
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
            />
            <kbd className="hidden sm:inline-flex px-2 py-1 text-xs bg-secondary rounded text-muted-foreground">/</kbd>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="glass-card glow-border bg-transparent hover:bg-primary/10 border-primary/50 text-foreground font-semibold px-8 py-6"
          >
            <Compass className="w-5 h-5 mr-2 text-primary" />
            <span>DEX Explorer</span>
            <span className="ml-2 text-xs text-muted-foreground uppercase tracking-wider">Discover</span>
          </Button>
          <Button 
            size="lg"
            className="glass-card glow-border bg-transparent hover:bg-primary/10 border-primary/50 text-foreground font-semibold px-8 py-6"
          >
            <LayoutDashboard className="w-5 h-5 mr-2 text-primary" />
            <span>Portfolio</span>
            <span className="ml-2 text-xs text-muted-foreground uppercase tracking-wider">Monitor</span>
          </Button>
          <Button 
            size="lg"
            className="glass-card glow-border bg-transparent hover:bg-primary/10 border-primary/50 text-foreground font-semibold px-8 py-6"
          >
            <ArrowLeftRight className="w-5 h-5 mr-2 text-primary" />
            <span>Swap</span>
            <span className="ml-2 text-xs text-muted-foreground uppercase tracking-wider">Trade</span>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
