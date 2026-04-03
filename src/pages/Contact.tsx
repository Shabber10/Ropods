import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone, Youtube } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-4">

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight mt-[-15px]">
            Let's <span className="text-[#00fd7a]">Connect</span>
          </h1>

        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-20">

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-2xl rounded-[30px] border border-white/10 p-8 md:p-10 shadow-2xl">
            <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Get in Touch</h2>

            <form
              className="space-y-4"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/50 font-semibold uppercase tracking-wider pl-1">First name</label>
                  <Input
                    placeholder="e.g. John"
                    className="bg-white/5 border-white/10 focus:border-[#00fd7a] h-14 rounded-2xl px-6 text-white placeholder:text-white/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/50 font-semibold uppercase tracking-wider pl-1">Last name</label>
                  <Input
                    placeholder="e.g. Smith"
                    className="bg-white/5 border-white/10 focus:border-[#00fd7a] h-14 rounded-2xl px-6 text-white placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/50 font-semibold uppercase tracking-wider pl-1">Email address</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-white/5 border-white/10 focus:border-[#00fd7a] h-14 rounded-2xl px-6 text-white placeholder:text-white/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/50 font-semibold uppercase tracking-wider pl-1">Clinic / Organisation</label>
                <Input
                  placeholder="Your clinic or organisation name"
                  className="bg-white/5 border-white/10 focus:border-[#00fd7a] h-14 rounded-2xl px-6 text-white placeholder:text-white/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/50 font-semibold uppercase tracking-wider pl-1">How can we help you?</label>
                <Textarea
                  placeholder="Tell us about your needs..."
                  rows={3}
                  className="bg-white/5 border-white/10 focus:border-[#00fd7a] rounded-2xl p-6 text-white placeholder:text-white/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#fe019a] text-white font-black h-14 rounded-2xl shadow-[0_0_30px_-5px_rgba(254,1,154,0.4)] hover:bg-[#FF5F1F] hover:scale-[1.01] transition-all duration-300 text-base"
              >
                {sent ? "Message Sent ✓" : (
                  <span className="flex items-center justify-center gap-2">
                    Book A Demo Now <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Info Side */}
          <div className="flex flex-col gap-5">

            {/* Contact Info */}
            <div className="bg-[#fe019a]/5 backdrop-blur-2xl rounded-[24px] border border-[#fe019a]/20 p-6 shadow-xl">
              <h3 className="font-black text-[#fe019a] text-base uppercase tracking-widest mb-5">Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "contactus@ropods.com", href: "mailto:contactus@ropods.com" },
                  { icon: Phone, text: "+91 97407 36524", href: "tel:+919740736524" },
                  { icon: MapPin, text: "SOC Optimum Pvt. Ltd. 3rd floor, 1206, 22nd cross, 14th main, sector 3, HSR layout, Bangaluru - 560102", href: "#" },
                ].map(({ icon: Icon, text, href }) => (
                  <a key={text} href={href} className="flex items-start gap-4 text-sm text-white/70 font-medium group cursor-pointer hover:text-white transition-all duration-200">
                    <div className="w-11 h-11 rounded-xl bg-transparent border border-[#fe019a]/50 flex items-center justify-center shrink-0 transition-all group-hover:scale-105 group-hover:bg-[#fe019a] group-hover:border-[#fe019a]">
                      <Icon className="w-4 h-4 text-[#fe019a] group-hover:text-white transition-colors" />
                    </div>
                    <span className="flex-1 pt-3 pb-3 leading-relaxed break-words">{text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Stay Updated */}
            <div className="bg-[#00fd7a]/5 backdrop-blur-2xl rounded-[24px] border border-[#00fd7a]/20 p-6 shadow-xl">
              <h3 className="font-black text-[#00fd7a] text-base uppercase tracking-widest mb-2">Stay Updated</h3>
              <p className="text-xs text-white/40 mb-5 font-medium italic">Clinical insights &amp; product news.</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/10 focus:border-[#00fd7a] h-12 rounded-xl px-4 text-white text-sm placeholder:text-white/20"
                />
                <Button className="bg-[#00fd7a] text-[#060b19] font-black h-12 rounded-xl px-6 shadow-lg shrink-0 text-sm hover:scale-105 hover:bg-[#FF5F1F] hover:text-white transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-[24px] border border-white/10 p-6 shadow-xl">
              <h3 className="font-black text-white text-base uppercase tracking-widest mb-5">Follow Us</h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: XIcon,        label: "X / Twitter", bg: "#000000",  border: "#000000", defaultColor: "rgba(255,255,255,0.55)", hoverColor: "#ffffff", href: "https://twitter.com/ropodsofficial" },
                  { icon: InstagramIcon, label: "Instagram",  bg: "linear-gradient(45deg,#fcaf45,#f77737,#f56040,#e1306c,#c13584,#833ab4)", border: "#c13584", defaultColor: "rgba(255,255,255,0.55)", hoverColor: "#ffffff", href: "https://instagram.com/ropodsofficial" },
                  { icon: Youtube,      label: "YouTube",     bg: "#ff0000",  border: "#ff0000", defaultColor: "rgba(255,255,255,0.55)", hoverColor: "#ffffff", href: "https://www.youtube.com/@ropodsofficial" },
                  { icon: FacebookIcon, label: "Facebook",    bg: "#1877f2",  border: "#1877f2", defaultColor: "rgba(255,255,255,0.55)", hoverColor: "#ffffff", href: "https://www.facebook.com/ropodsofficial" },
                  { icon: LinkedInIcon, label: "LinkedIn",    bg: "#0a66c2",  border: "#0a66c2", defaultColor: "rgba(255,255,255,0.55)", hoverColor: "#ffffff", href: "https://www.linkedin.com/company/ropods" },
                ].map(({ icon: Icon, label, bg, border, defaultColor, hoverColor, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-12 h-12 rounded-[14px] border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = bg;
                      el.style.borderColor = border;
                      const svg = el.querySelector('svg');
                      if (svg) (svg as unknown as HTMLElement).style.color = hoverColor;
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = '';
                      el.style.borderColor = '';
                      const svg = el.querySelector('svg');
                      if (svg) (svg as unknown as HTMLElement).style.color = defaultColor;
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: defaultColor }} />
                  </a>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </PageLayout>
  );
}
