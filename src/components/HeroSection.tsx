import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, BarChart2, Shield, Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.svg";

const HERO_IMG = heroImg;

const stats = [
  { value: "500+", label: "Physiotherapists" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "3×", label: "Faster Recovery" },
];

export default function HeroSection() {
  useScrollReveal();
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Animated grid bg */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(hsl(222.2 84% 4.9% / 0.8) 1px, transparent 1px), linear-gradient(90deg, hsl(222.2 84% 4.9% / 0.8) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Soft Ambient Radiance */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-neon/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="reveal-on-scroll reveal-left">

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-foreground mb-6">
              Built for Rehab Professionals for{" "}
              <span className="text-neon-green glow-text-green">Smarter & Enhanced</span>{" "}
              Patient Outcomes
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              Ensuring patients adhere to protocols and keeping them motivated is challenging. Our solution leverages sensor AI synergy, gamified rehab protocols, and digital records to engage patients and drive meaningful outcomes.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact">
                <Button size="lg"
                  className="bg-gradient-neon text-background font-bold text-base px-8 py-6 transition-all duration-300 hover:scale-105">
                  Book A Demo <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg"
                className="group bg-[#00fd7a] text-[#060b19] hover:bg-[#FF5F1F] hover:text-white font-bold text-base px-8 py-6 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#FF5F1F] group-hover:bg-[#00fd7a] flex items-center justify-center mr-3 transition-colors duration-300">
                  <Play className="w-3 h-3 text-white group-hover:text-[#060b19] ml-0.5 transition-colors duration-300" />
                </div>
                Watch Video
              </Button>
            </div>

            <div className="flex flex-wrap gap-10 p-6 rounded-3xl w-fit"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}>
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-3xl font-extrabold text-[#00fd7a] [text-shadow:0_0_20px_rgba(0,253,122,0.6),0_0_40px_rgba(0,253,122,0.3)]">{s.value}</span>
                  <span className="text-sm text-muted-foreground mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — real hero image */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[600px] reveal-on-scroll reveal-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-sm md:max-w-md p-4 mx-auto">
              <img src={HERO_IMG} alt="SPOT sensor in rehabilitation session"
                className="w-full h-auto max-h-[450px] object-contain drop-shadow-2xl"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>

            {/* Floating weekday chart card */}
            <div className="absolute top-300 right-10 bg-white/10 rounded-xl shadow-lg p-4 border border-border min-w-[150px]"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)"
              }}>
              <p className="text-xs text-[#00fd7a] mb-2 font-medium">Weekdays</p>
              <div className="flex items-end gap-1 h-12">
                {[71, 84, 56, 37, 82, 60].map((h, i) => (
                  <div key={i} className="bg-[#00fd7a] rounded-sm flex-1 transition-all"
                    style={{ height: `${(h / 84) * 100}% ` }} />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <span key={i} className="text-[10px] text-[#00fd7a] font-medium">{d}</span>
                ))}
              </div>
            </div>

            {/* Floating session progress card */}
            <div className="absolute bottom-6 left-4 bg-white/10 rounded-xl shadow-lg p-4 border border-border flex items-center gap-3"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)"
              }}>
              <div className="w-9 h-9 rounded-full bg-primary/20 border border-neon/30 flex items-center justify-center">
                <BarChart2 className="w-5 h-5 text-[#00fd7a]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#00fd7a]">Session Progress</div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-[#00fd7a] rounded-full" style={{ width: "60%" }} />
                  </div>
                  <span className="text-xs text-[#00fd7a] font-bold">6/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
