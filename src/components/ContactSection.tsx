import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-16 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Banner */}
        <div className="relative rounded-[30px] overflow-hidden bg-[#00fd7a]/5 backdrop-blur-3xl p-8 md:p-14 text-center border border-[#00fd7a]/20 shadow-[0_0_50px_-12px_rgba(0,253,122,0.1)] mb-12">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "linear-gradient(#00fd7a 1px, transparent 1px), linear-gradient(90deg, #00fd7a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to <span className="text-[#00fd7a]">Transform</span> Your Clinic?
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-medium">
              Join 500+ physiotherapists delivering smarter, data-driven rehabilitation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/buy">
                <Button size="lg" className="bg-[#00fd7a] text-[#060b19] font-black hover:scale-105 transition-all duration-300 px-6 h-12 rounded-full shadow-[0_0_30px_-5px_rgba(0,253,122,0.5)]">
                  Buy Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 font-bold px-6 h-12 rounded-full backdrop-blur-md">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div className="bg-white/5 backdrop-blur-2xl rounded-[30px] border border-white/10 p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Get in Touch</h3>
            <p className="text-white/40 mb-8 font-medium italic">Have a question? We'd love to hear from you.</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First name" className="bg-white/5 border-white/10 focus:border-[#00fd7a] h-14 rounded-2xl px-6 text-white placeholder:text-white/20" />
                <Input placeholder="Last name" className="bg-white/5 border-white/10 focus:border-[#00fd7a] h-14 rounded-2xl px-6 text-white placeholder:text-white/20" />
              </div>
              <Input type="email" placeholder="Email address" className="bg-white/5 border-white/10 focus:border-[#00fd7a] h-14 rounded-2xl px-6 text-white placeholder:text-white/20" />
              <Input placeholder="Clinic / Organisation" className="bg-white/5 border-white/10 focus:border-[#00fd7a] h-14 rounded-2xl px-6 text-white placeholder:text-white/20" />
              <Textarea placeholder="How can we help you?" rows={4} className="bg-white/5 border-white/10 focus:border-[#00fd7a] rounded-2xl p-6 text-white placeholder:text-white/20 resize-none" />
              <Button type="submit" className="w-full bg-[#fe019a] text-white font-black h-12 rounded-[12px] shadow-[0_0_30px_-5px_rgba(254,1,154,0.4)] hover:scale-[1.01] transition-all text-sm">
                {sent ? "Message Sent ✓" : "Book A Demo Now"}
              </Button>
            </form>
          </div>

          {/* Info Side */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#fe019a]/5 backdrop-blur-2xl rounded-[24px] border border-[#fe019a]/20 p-6 shadow-xl">
              <h4 className="font-black text-[#fe019a] text-base uppercase tracking-widest mb-4">Contact Info</h4>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "hello@ropods.com", color: "pink" },
                  { icon: Phone, text: "+44 (0) 20 1234 5678", color: "pink" },
                  { icon: MapPin, text: "London, United Kingdom", color: "pink" },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-4 text-sm text-white/70 font-medium group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-[#fe019a]/10 border border-[#fe019a]/20 flex items-center justify-center shrink-0 transition-all group-hover:scale-110 group-hover:bg-[#fe019a]/20">
                      <Icon className="w-4 h-4 text-[#fe019a]" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#00fd7a]/5 backdrop-blur-2xl rounded-[24px] border border-[#00fd7a]/20 p-6 shadow-xl">
              <h4 className="font-black text-[#00fd7a] text-base uppercase tracking-widest mb-2">Stay Updated</h4>
              <p className="text-xs text-white/40 mb-4 font-medium italic">Clinical insights & product news.</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="your@email.com" className="bg-white/5 border-white/10 focus:border-[#00fd7a] h-11 rounded-xl px-4 text-white text-sm placeholder:text-white/20" />
                <Button className="bg-[#00fd7a] text-[#060b19] font-black h-11 rounded-xl px-6 shadow-lg shrink-0 text-xs">Subscribe</Button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl rounded-[24px] border border-white/10 p-6 shadow-xl">
              <h4 className="font-black text-white text-base uppercase tracking-widest mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, label: "Twitter", color: "#00fd7a" },
                  { icon: Linkedin, label: "LinkedIn", color: "#fe019a" },
                  { icon: Youtube, label: "YouTube", color: "#fad000" }
                ].map(({ icon: Icon, label, color }) => (
                  <button key={label} title={label}
                    className="w-12 h-12 rounded-[14px] border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg group"
                    style={{ '--hover-color': color } as React.CSSProperties}
                  >
                    <Icon className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_var(--hover-color)]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
