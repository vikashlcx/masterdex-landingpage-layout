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
    <section className="section-container bg-card/30">
      <div className="text-center mb-12">
        <h2 className="section-heading">
          Supported <span className="gradient-text">Networks</span>
        </h2>
        <p className="section-subheading mx-auto">
          Expanding across the most active DeFi ecosystems.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {networks.map((network, index) => (
          <div 
            key={index}
            className="glass-card glow-border px-10 py-8 flex flex-col items-center group hover:scale-105 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-2xl bg-secondary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <img 
                src={network.logo} 
                alt={`${network.name} logo`}
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-base font-semibold text-foreground">{network.name}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-10 text-sm">
        More networks coming soon — building the ultimate multichain hub.
      </p>
    </section>
  );
};

export default SupportedNetworks;
