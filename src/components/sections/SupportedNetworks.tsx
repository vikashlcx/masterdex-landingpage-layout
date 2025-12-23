const networks = [
  {
    name: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
    color: "from-blue-400/20 to-blue-600/20"
  },
  {
    name: "Base",
    logo: "https://avatars.githubusercontent.com/u/108554348?s=200&v=4",
    color: "from-blue-500/20 to-indigo-600/20"
  },
  {
    name: "Polygon",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
    color: "from-purple-400/20 to-purple-600/20"
  }
];

const SupportedNetworks = () => {
  return (
    <section className="section-container bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="section-heading">
          Supported <span className="gradient-text">Networks</span>
        </h2>
        <p className="section-subheading mx-auto">
          Expanding support across the most active DeFi ecosystems.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {networks.map((network, index) => (
          <div 
            key={index}
            className="glass-card glow-border p-8 flex flex-col items-center group hover:scale-105 transition-all duration-300"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${network.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <img 
                src={network.logo} 
                alt={`${network.name} logo`}
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-foreground">{network.name}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-10 text-sm">
        More networks coming soon — building the ultimate multichain DeFi hub.
      </p>
    </section>
  );
};

export default SupportedNetworks;
