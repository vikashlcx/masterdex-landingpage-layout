import { 
  Sparkles, 
  ArrowLeftRight, 
  Compass, 
  LayoutDashboard, 
  Newspaper, 
  Gift, 
  Rocket 
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Market Insights",
    description: "Smart analysis and trend predictions to inform your trading decisions"
  },
  {
    icon: ArrowLeftRight,
    title: "Multichain Swap",
    description: "Execute optimized trades across multiple blockchains with best-rate routing"
  },
  {
    icon: Compass,
    title: "Multichain DEX Explorer",
    description: "Discover tokens, pairs, and liquidity pools across all supported networks"
  },
  {
    icon: LayoutDashboard,
    title: "Portfolio Dashboard",
    description: "Real-time tracking and analytics for all your DeFi positions"
  },
  {
    icon: Newspaper,
    title: "Cryptomeme",
    description: "Curated DeFi news aggregator to stay informed on market movements"
  },
  {
    icon: Gift,
    title: "Reward Hub",
    description: "Earn rewards through platform engagement and trading activity"
  },
  {
    icon: Rocket,
    title: "Prep DEX",
    description: "Advanced trading features for professional traders",
    comingSoon: true
  }
];

const ProductCapabilities = () => {
  return (
    <section className="section-container relative">
      <div className="absolute inset-0 bg-gradient-radial from-glow-cyan/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            All-in-One <span className="gradient-text">DeFi Toolkit</span>
          </h2>
          <p className="section-subheading mx-auto">
            Everything you need to discover, analyze, and trade in decentralized finance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              {feature.comingSoon && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                    Coming Soon
                  </span>
                </div>
              )}
              <div className="feature-icon mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCapabilities;
