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
    title: "AI-Powered Insights",
    description: "Smart analysis and trend predictions for informed trading"
  },
  {
    icon: ArrowLeftRight,
    title: "Multichain Swap",
    description: "Optimized trades across blockchains with best-rate routing"
  },
  {
    icon: Compass,
    title: "DEX Explorer",
    description: "Discover tokens and pools across all supported networks"
  },
  {
    icon: LayoutDashboard,
    title: "Portfolio Dashboard",
    description: "Real-time tracking and analytics for all your positions"
  },
  {
    icon: Newspaper,
    title: "Cryptomeme",
    description: "Curated DeFi news aggregator for market movements"
  },
  {
    icon: Gift,
    title: "Reward Hub",
    description: "Earn rewards through engagement and trading activity"
  },
  {
    icon: Rocket,
    title: "Prep DEX",
    description: "Advanced trading features for professionals",
    comingSoon: true
  }
];

const ProductCapabilities = () => {
  return (
    <section className="section-container relative">
      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            All-in-One <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="section-subheading mx-auto">
            Everything you need to discover, analyze, and trade in DeFi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card glow-border p-6 group relative overflow-hidden"
            >
              {feature.comingSoon && (
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 text-[10px] font-semibold bg-primary/15 text-primary rounded-full uppercase tracking-wider">
                    Soon
                  </span>
                </div>
              )}
              <div className="feature-icon mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCapabilities;
