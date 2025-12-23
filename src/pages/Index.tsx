import HeroSection from "@/components/sections/HeroSection";
import WhatIsMasterDEX from "@/components/sections/WhatIsMasterDEX";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductCapabilities from "@/components/sections/ProductCapabilities";
import SupportedNetworks from "@/components/sections/SupportedNetworks";
import CallToAction from "@/components/sections/CallToAction";
import FAQ from "@/components/sections/FAQ";
import BlogFeed from "@/components/sections/BlogFeed";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MasterDEX | All-in-One Gateway to Decentralized Trading</title>
        <meta 
          name="description" 
          content="MasterDEX is a multichain DEX platform with AI-powered token discovery, portfolio tracking, and cross-chain swaps. Trade across Ethereum, Base, and Polygon." 
        />
        <meta name="keywords" content="DEX, decentralized exchange, DeFi, multichain, swap, crypto trading, portfolio tracker, Ethereum, Base, Polygon" />
        <link rel="canonical" href="https://masterdex.xyz" />
        
        {/* Open Graph */}
        <meta property="og:title" content="MasterDEX | All-in-One Gateway to Decentralized Trading" />
        <meta property="og:description" content="AI-powered multichain DEX platform for token discovery, portfolio tracking, and cross-chain swaps." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masterdex.xyz" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MasterDEX | All-in-One Gateway to Decentralized Trading" />
        <meta name="twitter:description" content="AI-powered multichain DEX platform for token discovery, portfolio tracking, and cross-chain swaps." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "MasterDEX",
            "description": "Multichain decentralized exchange platform with AI-powered token discovery, portfolio tracking, and cross-chain swaps",
            "url": "https://masterdex.xyz",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <HeroSection />
        <WhatIsMasterDEX />
        <HowItWorks />
        <ProductCapabilities />
        <SupportedNetworks />
        <CallToAction />
        <FAQ />
        <BlogFeed />
        <Footer />
      </main>
    </>
  );
};

export default Index;
