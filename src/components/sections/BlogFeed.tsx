import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Introducing MasterDEX: Your All-in-One DeFi Gateway",
    excerpt: "Discover how MasterDEX is revolutionizing decentralized trading with AI-powered insights and multichain capabilities.",
    date: "Dec 2024",
    category: "Announcement"
  },
  {
    title: "Understanding Cross-Chain Swaps: A Complete Guide",
    excerpt: "Learn how cross-chain swaps work and why they're essential for navigating the multichain DeFi landscape.",
    date: "Dec 2024",
    category: "Education"
  },
  {
    title: "AI in DeFi: How Smart Discovery Changes Trading",
    excerpt: "Explore how artificial intelligence is transforming token discovery and market analysis in decentralized finance.",
    date: "Nov 2024",
    category: "Insights"
  }
];

const BlogFeed = () => {
  return (
    <section className="section-container relative">
      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Latest from <span className="gradient-text">MasterDEX</span>
          </h2>
          <p className="section-subheading mx-auto">
            Stay updated with the latest news, insights, and announcements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="glass-card glow-border p-6 group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-[10px] font-semibold bg-primary/15 text-primary rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {post.date}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center text-sm text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Read more
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://blog.masterdex.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mdex-button inline-flex items-center gap-2"
          >
            View All Blogs
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogFeed;
