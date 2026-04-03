import { Link } from "react-router-dom";
import ben1 from "@/assets/benefit-1.png";
import ben2 from "@/assets/benefit-2.png";
import ben3 from "@/assets/benefit-3.png";
import ben4 from "@/assets/benefit-4.png";
import ben5 from "@/assets/benefit-5.png";
import ben6 from "@/assets/benefit-6.png";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16" style={{ marginTop: "-30px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[#00fd7a] text-lg font-bold tracking-widest uppercase mb-4 block">Ecosystem Benefits</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-1 leading-tight">
            Everything You Need. All in One Place.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Benefit 1 */}
          <div className="backdrop-blur-xl rounded-[30px] border border-white/10 p-7 transition-all duration-400 bg-[#FF5F1F]/5 hover:bg-[#FF5F1F]/10 hover:border-[#FF5F1F]/40 shadow-2xl">
            <div className="w-14 h-14 flex items-center justify-center mb-6">
              <div
                className="w-10 h-10 transition-all duration-300 bg-[#FF5F1F]"
                style={{
                  WebkitMaskImage: `url(${ben1})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${ben1})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </div>
            <h3 className="text-xl font-black mb-3 text-[#FF5F1F]">Boost Patient Engagement</h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
              Interactive SPOT and score-based challenges turn therapy into an enjoyable, rewarding experience.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="backdrop-blur-xl rounded-[30px] border border-white/10 p-7 transition-all duration-400 bg-[#2fff05]/5 hover:bg-[#2fff05]/10 hover:border-[#2fff05]/40 shadow-2xl">
            <div className="w-14 h-14 flex items-center justify-center mb-6">
              <div
                className="w-10 h-10 transition-all duration-300 bg-[#2fff05]"
                style={{
                  WebkitMaskImage: `url(${ben2})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${ben2})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </div>
            <h3 className="text-xl font-black mb-3 text-[#2fff05]">Reduce Patient Drop-Off</h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
              Gamified sessions, real-time feedback, and progress tracking keep patients motivated and consistent.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="backdrop-blur-xl rounded-[30px] border border-white/10 p-7 transition-all duration-400 bg-[#0011fa]/5 hover:bg-[#0011fa]/10 hover:border-[#0011fa]/40 shadow-2xl">
            <div className="w-14 h-14 flex items-center justify-center mb-6">
              <div
                className="w-10 h-10 transition-all duration-300 bg-[#0011fa]"
                style={{
                  WebkitMaskImage: `url(${ben3})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${ben3})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </div>
            <h3 className="text-xl font-black mb-3 text-[#0011fa]">Ensure Continuity of Care</h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
              App-based protocols extend therapy beyond the clinic, enabling structured home programs.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="backdrop-blur-xl rounded-[30px] border border-white/10 p-7 transition-all duration-400 bg-[#fad000]/5 hover:bg-[#fad000]/10 hover:border-[#fad000]/40 shadow-2xl">
            <div className="w-14 h-14 flex items-center justify-center mb-6">
              <div
                className="w-10 h-10 transition-all duration-300 bg-[#fad000]"
                style={{
                  WebkitMaskImage: `url(${ben4})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${ben4})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </div>
            <h3 className="text-xl font-black mb-3 text-[#fad000]">Deliver Measurable Outcomes</h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
              Objective data and analytics replace guesswork with clear, quantifiable progress reports.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="backdrop-blur-xl rounded-[30px] border border-white/10 p-7 transition-all duration-400 bg-[#00fd7a]/5 hover:bg-[#00fd7a]/10 hover:border-[#00fd7a]/40 shadow-2xl">
            <div className="w-14 h-14 flex items-center justify-center mb-6">
              <div
                className="w-10 h-10 transition-all duration-300 bg-[#00fd7a]"
                style={{
                  WebkitMaskImage: `url(${ben5})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${ben5})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </div>
            <h3 className="text-xl font-black mb-3 text-[#00fd7a]">Unified Patient Records</h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
              Digital platform centralizes rehab history, exercise logs, and performance trends.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="backdrop-blur-xl rounded-[30px] border border-white/10 p-7 transition-all duration-400 bg-[#088bfe]/5 hover:bg-[#088bfe]/10 hover:border-[#088bfe]/40 shadow-2xl">
            <div className="w-14 h-14 flex items-center justify-center mb-6">
              <div
                className="w-10 h-10 transition-all duration-300 bg-[#088bfe]"
                style={{
                  WebkitMaskImage: `url(${ben6})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${ben6})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </div>
            <h3 className="text-xl font-black mb-3 text-[#088bfe]">Seamless Tech Integration</h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
              Automated record-keeping and AI-driven insights replace paper notes and manual tracking.
            </p>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative rounded-[40px] overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 md:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00fd7a]/5 to-[#fe019a]/5 opacity-50" />
          <div className="relative">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              Ready to <span className="text-[#00fd7a] glow-text">Level Up</span> Your Practice?
            </h3>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Join 500+ physiotherapists who are already transforming patient outcomes with SPOT.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-[#00fd7a] text-[#060b19] font-black px-10 py-5 rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,253,122,0.3)] text-base uppercase tracking-widest">
              Get Started Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
