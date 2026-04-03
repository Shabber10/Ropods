import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";

export default function About() {
  return (
    <PageLayout>
      <div className="px-4 pt-[-20px]">
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00fd7a]/30 bg-[#00fd7a]/5 text-[#00fd7a] text-xs font-bold uppercase tracking-widest mb-4">
            Who We Are
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            About <span className="text-[#00fd7a]">ROPODS</span>
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed font-medium">
            Redefining recovery and performance in clinical practice.
          </p>
        </div>
        <AboutSection />
        <PartnersSection />
      </div>
    </PageLayout>
  );
}
