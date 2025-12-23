const networks = [
  {
    name: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  },
  {
    name: "Base",
    logo: "https://avatars.githubusercontent.com/u/108554348?s=200&v=4",
  },
  {
    name: "Polygon",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
  }
];

const SupportedNetworks = () => {
  return (
    <section className="section-container bg-secondary/40">
      <div className="text-center mb-10">
        <h2 className="section-heading">
          Supported <span className="gradient-text">Networks</span>
        </h2>
        <p className="section-subheading mx-auto">
          Expanding support across the most active DeFi ecosystems.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {networks.map((network, index) => (
          <div 
            key={index}
            className="glass-card glow-border p-6 flex flex-col items-center group hover:scale-105 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <img 
                src={network.logo} 
                alt={`${network.name} logo`}
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-sm font-medium text-foreground">{network.name}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-8 text-xs">
        More networks coming soon — building the ultimate multichain DeFi hub.
      </p>
    </section>
  );
};

export default SupportedNetworks;
