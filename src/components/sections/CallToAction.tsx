import { Wallet, ArrowRight, Users } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="relative">
        <div className="glass-card glow-border p-12 md:p-16 text-center max-w-3xl mx-auto">
          <h2 className="section-heading mb-5">
            Start Trading on <span className="gradient-text">MasterDEX</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join thousands of traders discovering, analyzing, and swapping across the decentralized ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="mdex-button-filled flex items-center justify-center gap-2">
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </button>
            <button className="mdex-button flex items-center justify-center gap-2">
              Trade Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="mdex-button flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
