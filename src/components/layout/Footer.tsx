import { Twitter, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 100 100" className="w-8 h-8">
              <defs>
                <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(270, 70%, 60%)" />
                  <stop offset="100%" stopColor="hsl(185, 70%, 50%)" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="35" r="18" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="3" />
              <circle cx="35" cy="60" r="18" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="3" />
              <circle cx="65" cy="60" r="18" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="3" />
            </svg>
            <span className="font-display font-bold text-xl">
              Master<span className="gradient-text">DEX</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">DEX Explorer</a>
            <a href="#" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#" className="hover:text-primary transition-colors">Swap</a>
            <a href="https://blog.masterdex.xyz/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Blog</a>
            <a href="#" className="hover:text-primary transition-colors">Docs</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MasterDEX. All rights reserved. Non-custodial. Decentralized.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
