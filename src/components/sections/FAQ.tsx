import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is MasterDEX?",
    answer: "MasterDEX is a multichain decentralized exchange platform that combines AI-powered token discovery, a comprehensive DEX explorer, portfolio tracking, and seamless cross-chain swaps. It's designed to be your all-in-one gateway to decentralized trading."
  },
  {
    question: "Is MasterDEX a DEX aggregator?",
    answer: "MasterDEX goes beyond traditional DEX aggregation. While it does aggregate liquidity and find optimal swap routes across multiple DEXs, it also provides AI-powered market insights, portfolio analytics, token discovery tools, and a unified interface for exploring the entire DeFi ecosystem."
  },
  {
    question: "Which blockchains does MasterDEX support?",
    answer: "MasterDEX currently supports Ethereum, Base, and Polygon networks. We're continuously expanding our multichain support to include more active DeFi ecosystems, ensuring you can access liquidity and opportunities across the decentralized landscape."
  },
  {
    question: "Is MasterDEX non-custodial?",
    answer: "Yes, MasterDEX is completely non-custodial. You always maintain full control of your assets. We never hold your funds — you simply connect your wallet, and all transactions are executed directly on-chain with your approval."
  },
  {
    question: "What is Prep DEX?",
    answer: "Prep DEX is our upcoming advanced trading feature designed for professional traders. It will include enhanced charting tools, advanced order types, and professional-grade analytics. Stay tuned for the launch announcement."
  }
];

const FAQ = () => {
  return (
    <section className="section-container bg-secondary/40">
      <div className="text-center mb-10">
        <h2 className="section-heading">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="section-subheading mx-auto">
          Everything you need to know about MasterDEX.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-card border-border rounded-xl px-5 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-primary py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
