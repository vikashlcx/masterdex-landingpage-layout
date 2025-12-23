import { Twitter, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 100 100" className="w-8 h-8">
              <defs>
                <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(263, 90%, 65%)" />
                  <stop offset="100%" stopColor="hsl(300, 70%, 65%)" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="30" r="22" fill="none" stroke="url(#footerGradient)" strokeWidth="3" />
              <circle cx="30" cy="65" r="22" fill="none" stroke="url(#footerGradient)" strokeWidth="3" />
              <circle cx="70" cy="65" r="22" fill="none" stroke="url(#footerGradient)" strokeWidth="3" />
            </svg>
            <span className="font-bold text-xl">
              Master<span className="gradient-text">DEX</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors font-medium">DEX Explorer</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Portfolio</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Swap</a>
            <a href="https://blog.masterdex.xyz/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">Blog</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Docs</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border/50">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border/50">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border/50">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MasterDEX. All rights reserved. Non-custodial. Decentralized.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
