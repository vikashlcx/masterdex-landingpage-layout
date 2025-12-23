import { Layers, Search, PieChart } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "Fragmented Liquidity",
    problem: "Liquidity scattered across chains makes trading inefficient",
    solution: "Unified multichain access with optimized routing"
  },
  {
    icon: Search,
    title: "Manual Discovery",
    problem: "Finding new tokens and pairs requires endless manual searching",
    solution: "AI-powered discovery surfaces opportunities automatically"
  },
  {
    icon: PieChart,
    title: "Scattered Portfolios",
    problem: "Tracking assets across wallets and chains is exhausting",
    solution: "One dashboard to monitor everything in real-time"
  }
];

const WhatIsMasterDEX = () => {
  return (
    <section className="section-container relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            What is <span className="gradient-text">MasterDEX</span>?
          </h2>
          <p className="section-subheading mx-auto">
            MasterDEX is a multichain decentralized exchange platform that combines AI-powered token discovery, 
            a comprehensive DEX explorer, portfolio tracking, and seamless cross-chain swaps — all in one unified interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card glow-border p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Built for DeFi Traders & Investors</h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're an active trader hunting the next gem, a long-term investor monitoring your portfolio, 
              or a DeFi explorer discovering new protocols — MasterDEX gives you the tools to navigate the 
              decentralized ecosystem with confidence.
            </p>
          </div>
          <div className="glass-card glow-border p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">All-in-One DeFi Command Center</h3>
            <p className="text-muted-foreground leading-relaxed">
              Stop juggling multiple platforms. MasterDEX consolidates discovery, analytics, and trading into 
              a single powerful interface. Get AI-driven insights, track your entire portfolio, and execute 
              trades across chains — without leaving the platform.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-8">Problems We Solve</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="feature-icon mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">
                <span className="text-destructive/80">Problem:</span> {item.problem}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary">Solution:</span> {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsMasterDEX;
