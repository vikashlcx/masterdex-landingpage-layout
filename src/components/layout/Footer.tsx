import { Twitter, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 100 100" className="w-7 h-7">
              <defs>
                <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(263, 84%, 65%)" />
                  <stop offset="100%" stopColor="hsl(280, 70%, 75%)" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="32" r="20" fill="none" stroke="url(#footerGrad)" strokeWidth="2.5" />
              <circle cx="32" cy="62" r="20" fill="none" stroke="url(#footerGrad)" strokeWidth="2.5" />
              <circle cx="68" cy="62" r="20" fill="none" stroke="url(#footerGrad)" strokeWidth="2.5" />
            </svg>
            <span className="font-semibold text-lg">
              Master<span className="gradient-text">DEX</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">DEX Explorer</a>
            <a href="#" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#" className="hover:text-primary transition-colors">Swap</a>
            <a href="https://blog.masterdex.xyz/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Blog</a>
            <a href="#" className="hover:text-primary transition-colors">Docs</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MasterDEX. All rights reserved. Non-custodial. Decentralized.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
