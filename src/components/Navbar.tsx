import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import ropodsLogo from "@/assets/ropods-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "SPOT", href: "/spot" },
  { label: "About Us", href: "/about" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Listen to both window scroll and the home page snap-scroll container
    const scrollContainer = document.getElementById("main-scroll-container");
    const handleScroll = () => {
      const top = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
      setScrolled(top > 10);
    };

    scrollContainer?.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "py-2 border-zinc-200/50 shadow-xl" : "py-2.5 bg-transparent border-white/5"
        }`}
      style={{
        backdropFilter: scrolled ? "blur(100px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(100px)" : "none",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.3)" : "transparent",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95">
          <img
            alt="ROPODS"
            width="160"
            height="50"
            decoding="async"
            className="w-auto h-10 sm:h-10 transition-all duration-300"
            src={ropodsLogo}
            style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-base font-bold tracking-tight transition-all duration-300 relative group hover:scale-105 active:scale-95 hover:text-[#00fd7a] ${isActive ? "text-[#00fd7a]" : scrolled ? "text-[#FF5500]" : "text-white"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#00fd7a] transition-all duration-300 opacity-50 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  style={{ transitionDelay: isActive ? "0s" : "0.1s" }}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/buy">
            <Button
              size="sm"
              className="bg-[#00fd7a] text-[#060b19] font-black rounded-full px-6 transition-all duration-300 hover:scale-105 hover:bg-[#FF5F1F] hover:text-white"
            >
              Buy Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-zinc-800" : "text-white/80"} p-2 hover:bg-white/5 rounded-xl transition-colors`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-[500px] border-b border-white/10" : "max-h-0"
          }`}
      >
        <div className="bg-[#060b19]/95 backdrop-blur-2xl p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-lg font-bold py-2 transition-colors border-b border-white/5 last:border-0 ${isActive ? "text-[#00fd7a]" : "text-white/70 hover:text-[#00fd7a]"
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link to="/buy" onClick={() => setMenuOpen(false)}>
            <Button className="bg-[#00fd7a] text-[#060b19] font-black w-full h-12 rounded-xl mt-4 transition-all duration-300 hover:bg-[#FF5F1F] hover:text-white">
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
