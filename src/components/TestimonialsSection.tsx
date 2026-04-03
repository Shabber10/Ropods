import React from "react";

// Real quote icons from ROPODS.com
const QUOTE_GREEN = "https://ropods.com/home/testimonials/green.svg";

const testimonials = [
  {
    quote: "SPOT is being used once a week, primarily in orthopedic and sports rehab cases, especially for balance and agility training. In ACL rehabilitation, therapists noted that while recovery timelines were comparable to traditional methods, SPOT made the process more engaging and simpler to teach. Patients showed higher motivation with engagement rated 8/10, describing sessions as playful, competitive, and more sport-like.",
    name: "Dr. Nandlal Pathak (PT)",
    clinic: "Synchrony",
    initials: "NP",
    glowColor: "green"
  },
  {
    quote: "Since integrating SPOT into daily therapy sessions, the clinic has applied it across neuro, ortho, sports rehab, post-op, geriatric, and pediatric cases. In ACL rehabilitation, SPOT drills significantly improved proprioception, balance, and agility, resulting in 30–40% faster functional recovery compared to traditional methods. Patient engagement has been exceptionally high, consistently rated at 10/10.",
    name: "Dr. David Arun Kumar J (PT)",
    clinic: "Advanced Physio",
    initials: "DA",
    glowColor: "pink"
  },
  {
    quote: "Since adopting SPOT, we have been integrating it once a week, with 2–3 sessions per day, primarily in pediatric cases including ASD, ADHD, and GDD. Compared to traditional rehab, we have observed 40–50% improvement in patient outcomes, with children showing better flexibility, stability, strengthening, and cognitive response.",
    name: "Dr. P. Sumitha Hemavathy",
    clinic: "Capaar",
    initials: "SH",
    glowColor: "green"
  },
  {
    quote: "SPOT has been used once a week across a wide range of patients — neuro, ortho, sports rehab, post-op, and pediatric — and found to be effective across all. Therapists reported 40–60% improvement in patient outcomes compared to traditional rehab, with engagement levels rated 8/10 and recovery timelines accelerated by 30–40%.",
    name: "Dr. Kiran S Murthy (PT)",
    clinic: "Rayarakirana",
    initials: "KM",
    glowColor: "pink"
  },
];

export default function TestimonialsSection() {
  // Duplicate array 3 times to ensure no gaps even on very wide screens
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 overflow-hidden w-full bg-transparent relative">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-0 px-6">
          <span className="text-[#00fd7a] text-sm font-bold tracking-[0.3em] uppercase">
            Voices of Recovery
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tight">
            What Clinicians Are Saying
          </h2>
        </div>

        {/* Marquee Container with Fade Mask */}
        <div className="relative w-full  overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee gap-8 py-10 px-4 hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((t, idx) => (
              <div
                key={idx}
                className={`
                  w-[350px] md:w-[600px] shrink-0 
                  rounded-[30px] backdrop-blur-xl border border-white/10 
                  p-10 relative flex flex-col justify-between min-h-[400px] 
                  transition-all duration-500 hover:scale-[1.02] cursor-default group
                  ${t.glowColor === "green"
                    ? "bg-[#00fd7a]/5 hover:bg-[#00fd7a]/10 hover:shadow-[0_0_50px_-12px_rgba(0,253,122,0.3)] hover:border-[#00fd7a]/30"
                    : "bg-[#fe019a]/5 hover:bg-[#fe019a]/10 hover:shadow-[0_0_50px_-12px_rgba(254,1,154,0.3)] hover:border-[#fe019a]/30"}
                `}
              >
                {/* Quote Icon */}
                <div className="absolute top-8 left-8">
                  <img
                    src={QUOTE_GREEN}
                    alt="quote"
                    className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="mt-4 mb-0 flex-grow">
                  <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-5 pt-1  border-white/5">
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shrink-0 shadow-lg
                    ${t.glowColor === "green"
                      ? "bg-[#00fd7a] text-[#060b19]"
                      : "bg-[#fe019a] text-white"}
                  `}>
                    {t.initials}
                  </div>
                  <div className="overflow-hidden">
                    <div className="font-bold text-[#00fd7a] text-lg truncate">
                      {t.name}
                    </div>
                    <div className="text-sm text-white/40 font-medium truncate">
                      {t.clinic}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
