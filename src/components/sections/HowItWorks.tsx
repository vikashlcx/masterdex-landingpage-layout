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
    description: "Use AI-powered search to find trending tokens, new pairs, and hidden opportunities across chains."
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI Insights",
    description: "Get intelligent suggestions, trend analysis, and smart alerts tailored to your trading style."
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Portfolio & Analytics",
    description: "Track your entire multichain portfolio with real-time performance metrics and detailed analytics."
  },
  {
    number: "05",
    icon: ArrowLeftRight,
    title: "Swap Across Chains",
    description: "Execute optimized swaps with best-rate routing across multiple DEXs and blockchains."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-container bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="section-heading">
          How <span className="gradient-text">MasterDEX</span> Works
        </h2>
        <p className="section-subheading mx-auto">
          From wallet connection to cross-chain trading — a seamless DeFi experience in five simple steps.
        </p>
      </div>

      <div className="relative">
        {/* Connection line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card glow-border p-6 text-center h-full hover:bg-card/80 transition-all duration-300">
                <div className="step-number mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  {step.number}
                </div>
                <div className="feature-icon mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
