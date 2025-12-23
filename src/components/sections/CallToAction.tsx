import { Button } from "@/components/ui/button";
import { Wallet, ArrowRight, Users } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-glow-purple/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-glow-cyan/10 rounded-full blur-3xl" />
      
      <div className="relative">
        <div className="glass-card glow-border p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="section-heading mb-6">
            Start Trading on <span className="gradient-text">MasterDEX</span>
          </h2>
          <p className="section-subheading mx-auto mb-10">
            Join thousands of traders discovering, analyzing, and swapping across the decentralized ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-border"
            >
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-foreground font-semibold px-8 py-6 text-lg"
            >
              Trade Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="hover:bg-secondary text-muted-foreground hover:text-foreground font-semibold px-8 py-6 text-lg"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
