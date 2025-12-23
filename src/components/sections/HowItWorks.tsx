import { Wallet, Search, Sparkles, BarChart3, ArrowLeftRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Wallet,
    title: "Connect Wallet",
    description: "Link your non-custodial wallet securely. You maintain full control."
  },
  {
    number: "02",
    icon: Search,
    title: "Discover Tokens",
    description: "AI-powered search finds trending tokens and hidden opportunities."
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI Insights",
    description: "Get intelligent suggestions and trend analysis for trading."
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Track Portfolio",
    description: "Monitor your multichain portfolio with real-time metrics."
  },
  {
    number: "05",
    icon: ArrowLeftRight,
    title: "Swap Chains",
    description: "Execute optimized swaps with best-rate routing."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-container bg-card/30">
      <div className="text-center mb-16">
        <h2 className="section-heading">
          How <span className="gradient-text">It Works</span>
        </h2>
        <p className="section-subheading mx-auto">
          From wallet connection to cross-chain trading — five simple steps.
        </p>
      </div>

      <div className="relative">
        {/* Connection line */}
        <div className="hidden lg:block absolute top-[5.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="glass-card glow-border p-6 text-center h-full">
                <div className="step-number mx-auto mb-5 group-hover:scale-110 transition-all duration-300">
                  {step.number}
                </div>
                <div className="feature-icon mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
