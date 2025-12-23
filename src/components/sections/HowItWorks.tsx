import { Wallet, Search, Sparkles, BarChart3, ArrowLeftRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Wallet,
    title: "Connect Wallet",
    description: "Link your non-custodial wallet securely. You always maintain full control of your assets."
  },
  {
    number: "02",
    icon: Search,
    title: "Discover Tokens & Pairs",
    description: "Use AI-powered search to find trending tokens, new pairs, and hidden opportunities."
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI Insights",
    description: "Get intelligent suggestions, trend analysis, and smart alerts for your trading."
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Portfolio & Analytics",
    description: "Track your multichain portfolio with real-time performance metrics."
  },
  {
    number: "05",
    icon: ArrowLeftRight,
    title: "Swap Across Chains",
    description: "Execute optimized swaps with best-rate routing across DEXs and blockchains."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-container bg-secondary/40">
      <div className="text-center mb-14">
        <h2 className="section-heading">
          How <span className="gradient-text">MasterDEX</span> Works
        </h2>
        <p className="section-subheading mx-auto">
          From wallet connection to cross-chain trading — a seamless DeFi experience in five simple steps.
        </p>
      </div>

      <div className="relative">
        {/* Connection line */}
        <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-px bg-border" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="glass-card p-5 text-center h-full hover:border-primary/40 transition-all duration-300">
                <div className="step-number mx-auto mb-4 group-hover:bg-primary/30 group-hover:border-primary/60 transition-all">
                  {step.number}
                </div>
                <div className="feature-icon mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
