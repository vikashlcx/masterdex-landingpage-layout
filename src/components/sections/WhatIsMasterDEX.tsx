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
    problem: "Finding new tokens and pairs requires endless searching",
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
      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            What is <span className="gradient-text">MasterDEX</span>?
          </h2>
          <p className="section-subheading mx-auto">
            A multichain decentralized exchange platform combining AI-powered token discovery, 
            portfolio tracking, and seamless cross-chain swaps — all in one unified interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="glass-card glow-border p-8">
            <h3 className="text-xl font-bold mb-4 text-foreground">Built for DeFi Traders</h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're an active trader hunting the next gem or a long-term investor — 
              MasterDEX gives you the tools to navigate the decentralized ecosystem with confidence.
            </p>
          </div>
          <div className="glass-card glow-border p-8">
            <h3 className="text-xl font-bold mb-4 text-foreground">All-in-One Command Center</h3>
            <p className="text-muted-foreground leading-relaxed">
              Stop juggling multiple platforms. Get AI-driven insights, track your entire portfolio, 
              and execute trades across chains — without leaving the platform.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">Problems We Solve</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="glass-card glow-border p-7 group"
            >
              <div className="feature-icon mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="text-destructive/70 font-medium">Problem:</span> {item.problem}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">Solution:</span> {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsMasterDEX;
