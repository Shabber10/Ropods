import PageLayout from "@/components/PageLayout";
import ProductSection from "@/components/ProductSection";

export default function Spot() {
  return (
    <PageLayout>
      <div className="px-4 -mt-[35px]">
        <div className="text-center mb-0">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Our <span className="text-[#00fd7a]">Products</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00fd7a]/30 bg-[#00fd7a]/5 text-[#00fd7a] text-xs font-bold uppercase tracking-widest mb-0">
            SPOT & SynapMove
          </div>
        </div>
        <ProductSection />
      </div>
    </PageLayout>
  );
}
