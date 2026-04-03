import PageLayout from "@/components/PageLayout";
import BlogSection from "@/components/BlogSection";

export default function Resources() {
  return (
    <PageLayout>
      <div className="px-4 pt-4">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight -mt-[40px]">
            Our <span className="text-[#00fd7a]">Resources</span>
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed font-medium">
            Clinical insights, product news, and research from the ROPODS team.
          </p>
        </div>
        <BlogSection />
      </div>
    </PageLayout>
  );
}
