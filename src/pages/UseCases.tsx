import PageLayout from "@/components/PageLayout";
import UseCasesSection from "@/components/UseCasesSection";

export default function UseCases() {
  return (
    <PageLayout>
      <div className="px-4 -mt-[25px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00fd7a]/30 bg-[#00fd7a]/5 text-[#00fd7a] text-xs font-bold uppercase tracking-widest mb-4">
            Applications
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Use <span className="text-[#00fd7a]">Cases</span>
          </h1>

        </div>
        <UseCasesSection />
      </div>
    </PageLayout>
  );
}
