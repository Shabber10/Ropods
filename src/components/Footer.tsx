import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const links = {
  Product: [
    { label: "Features", href: "#" },
    { label: "SPOT Sensor", href: "#spot" },
    { label: "SynapMove App", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Solutions: [
    { label: "Neurological Rehab", href: "#" },
    { label: "Sports Medicine", href: "#" },
    { label: "MSK", href: "#" },
    { label: "Cognitive Rehab", href: "#" },
  ],
  ROPODS: [
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "/contact", isRoute: true },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-neon/10 pt-10 pb-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 group">
              <img alt="ROPODS" width="120" height="32" decoding="async" data-nimg="1" className="w-auto h-5 sm:h-7 lg:h-8" src="https://www.ropods.com/ropods/ropodsblack.svg?dpl=dpl_HTbrjxqXuDxDeL29nppVBx2TkV9g" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Motion intelligence for faster, smarter rehabilitation.
            </p>
          </div>
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h5 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3">{cat}</h5>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.isRoute ? (
                      <Link to={item.href} className="text-sm text-muted-foreground hover:text-neon transition-colors duration-200">
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-neon transition-colors duration-200">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-neon/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ROPODS Ltd. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Built with <span className="text-neon">♥</span> for clinicians worldwide</p>
        </div>
      </div>
    </footer>
  );
}
