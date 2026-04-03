// Real blog images from ROPODS.com CDN
const blogs = [
  {
    title: "Measuring Engagement in Rehab Programs: Why Participation Matters as Much as Prescription",
    date: "January 19, 2026",
    excerpt: "Discover why patient engagement is critical in physiotherapy and how modern rehab tools help measure, improve, and sustain participation.",
    img: "https://cdn.sanity.io/images/u19lik37/production/541b0e589683c4be045198402c2ef9eb22cca6e3-900x512.png?rect=66,0,768,512&w=800&h=533&fit=crop",
    href: "https://ropods.com/blog/a154e1e6-ad6a-4c6c-8be4-c544ead5fa39",
    theme: "rgba(0, 253, 122, 0.1)", // Green
    accent: "#00fd7a",
  },
  {
    title: "Wearables in Physiotherapy: What Clinicians Should Know",
    date: "January 19, 2026",
    excerpt: "Explore how wearable technology is transforming physiotherapy through objective movement tracking, real-time feedback, and data-driven care.",
    img: "https://cdn.sanity.io/images/u19lik37/production/6397e929e951d79173035fcf6fb361a377dad626-908x508.png?rect=73,0,762,508&w=800&h=533&fit=crop",
    href: "https://ropods.com/blog/3685da82-2962-470e-a064-f544c391ab4f",
    theme: "rgba(8, 139, 254, 0.1)", // Cyan/Blue
    accent: "#088bfe",
  },
  {
    title: "Gamification in Rehab: Does It Improve Adherence?",
    date: "January 19, 2026",
    excerpt: "Discover how gamification improves rehab adherence, motivation, and outcomes through interactive, measurable physiotherapy programs.",
    img: "https://cdn.sanity.io/images/u19lik37/production/4305e8a8720e7c926059ea842d8628e7ef9603fd-2242x1598.png?rect=0,52,2242,1495&w=800&h=533&fit=crop",
    href: "https://ropods.com/blog/8cca438d-97de-4b6c-8a4f-67a8903a3f80",
    theme: "rgba(254, 1, 154, 0.1)", // Pink
    accent: "#fe019a",
  },
  {
    title: "Rehab After COVID: Long-Term Functional Recovery",
    date: "January 19, 2026",
    excerpt: "Long-term COVID recovery often requires physiotherapy. Learn how rehab restores strength, breathing, balance, and confidence after COVID.",
    img: "https://cdn.sanity.io/images/u19lik37/production/edd4c20fe62abcc70521e0259784e336dfdfd3e6-772x516.png?rect=0,1,772,515&w=800&h=533&fit=crop",
    href: "https://ropods.com/blog/b980623c-f4db-4727-9a39-bceeda3528ec",
    theme: "rgba(250, 208, 0, 0.1)", // Gold/Yellow
    accent: "#fad000",
  },
];

export default function BlogSection() {
  return (
    <section id="resources" className="py-16 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-2 -mt-[50px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00fd7a]/30 bg-[#00fd7a]/5 text-[#00fd7a] text-xs font-bold uppercase tracking-widest mb-4 -mt-[40px]">
            Blogs & Articles
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Latest from ROPODS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogs.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[24px] overflow-hidden border border-white/5 backdrop-blur-xl transition-all duration-500 group relative flex flex-col h-full hover:scale-[1.02] hover:shadow-2xl"
              style={{
                backgroundColor: post.theme,
              }}
            >
              <div className="h-40 overflow-hidden relative">
                <img src={post.img} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold">{post.date}</p>
                <h3
                  className="text-lg font-black mb-3 leading-tight transition-colors duration-300"
                  style={{ color: post.accent }}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-white/50 line-clamp-3 mb-6 font-medium leading-relaxed italic">{post.excerpt}</p>
                <div className="mt-auto flex items-center gap-2 group/btn">
                  <span className="text-xs font-black uppercase tracking-widest text-white group-hover:underline decoration-2 underline-offset-4" style={{ textDecorationColor: post.accent }}>
                    Read Article
                  </span>
                  <div className="h-[2px] w-4 transition-all duration-300 group-hover:w-8" style={{ backgroundColor: post.accent }} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
