import { ClipboardList, Gamepad2, Search } from "lucide-react";
import planImg from "@/assets/spot-desk.jpg";
import guideImg from "@/assets/spot-floating.jpg";
import trackImg from "@/assets/spot-outdoor.jpg";

const steps = [
  {
    icon: ClipboardList,
    title: "PLAN",
    subtitle: "Create Therapy Protocols",
    desc: "Create personalized therapy protocols directly through the app",
    img: planImg,
    num: "01",
  },
  {
    icon: Gamepad2,
    title: "GUIDE",
    subtitle: "Gamified Sensor Experience",
    desc: "Use SPOT, our sensor device, to deliver gamified engagement",
    img: guideImg,
    num: "02",
  },
  {
    icon: Search,
    title: "TRACK",
    subtitle: "Real-Time Data & Analytics",
    desc: "Capture biofeedback and digital records to monitor and refine care",
    img: trackImg,
    num: "03",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16" style={{ marginTop: "-30px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-neon text-base font-bold tracking-widest uppercase">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-3 text-neon-green">
            Simple. Powerful. Effective.
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            It integrates portable movement-sensing hardware with an advanced rehabilitation software, giving you everything you need to manage patients seamlessly.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px neon-line opacity-20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title}
                className="relative backdrop-blur-md rounded-2xl border p-6 group hover:shadow-neon transition-all duration-500"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  backgroundColor: "#0011fa1A", // blue tint 10%
                  borderColor: "#0011fa33"      // blue border 20%
                }}>
                <div className="text-6xl font-black text-neon/8 absolute top-4 right-6 select-none group-hover:text-neon/15 transition-colors">
                  {step.num}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-neon/20 flex items-center justify-center mb-6 group-hover:shadow-neon-sm transition-all duration-300">
                  <Icon className="w-7 h-70 text-neon" />
                </div>
                <div className="text-xl font-black tracking-widest text-neon-green uppercase mb-1">{step.title}</div>
                <h3 className="text-xl font-bold text-neon-orange mb-2">{step.subtitle}</h3>
                <p className="text-[#fe019a] font-medium text-lg leading-relaxed mb-6">{step.desc}</p>

                {/* Dynamically Styled Image Container */}
                <div className="relative w-full h-400 mt-auto flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden p-3 border border-white/20">
                  <img src={step.img} alt={step.title}
                    className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section >
  );
}
