// Clean, flat image presentation for light theme
import aboutImg from "@/assets/spot1.png";

const ABOUT_VIDEO_THUMB = aboutImg;

export default function AboutSection() {
  return (
    <section id="about" className="pt-2 pb-2 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative flex items-center justify-center p-4 min-h-[250px]">
            <img
              src={ABOUT_VIDEO_THUMB}
              alt="ROPODS rehabilitation technology"
              className="w-full h-auto max-h-[4000px] object-contain drop-shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="backdrop-blur-md rounded-2xl border p-6" style={{ backgroundColor: "#00fd7a1A", borderColor: "#00fd7a33" }}>
            <span className="text-neon text-xs font-bold tracking-widest uppercase">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neon-orange mt-3 mb-6">
              Redefining Recovery in Clinical Practice
            </h2>
            <p className="font-medium leading-relaxed mb-6" style={{ color: "#18dbbdff" }}>
              ROPODS is a rehab tech ROPODS specialising in redefining recovery and performance in clinical practice through a comprehensive hardware and software ecosystem. By integrating intelligent sensors, adaptive protocols, and therapist-first workflows, it offers a smarter way for rehab professionals to improve compliance, access real-time data, and achieve stronger patient recoveries.
            </p>
            <a href="https://ropods.com/aboutus" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neon font-semibold hover:glow-text transition-all">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
