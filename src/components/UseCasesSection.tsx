import { Brain, Zap, Activity, Dumbbell } from "lucide-react";

import neuromotorImg from "@/assets/usecase-neuromotor.png";
import neurocognitionImg from "@/assets/usecase-neurocognition.png";
import mskImg from "@/assets/usecase-msk.png";
import sportsImg from "@/assets/usecase-sports.png";

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="pb-2 relative z-10 bg-transparent flex flex-col justify-center w-full">
      <div className="max-w-[95%] mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-[#00fd7a] text-[15px] font-bold tracking-[0.3em] uppercase">
            One Platform, Numerous Possibilities
          </span>
          <h2 className="text-xl md:text-5xl font-black text-white mt-1 tracking-tight">
            Designed for Every Rehab Specialty
          </h2>
          <p className="text-white/50 text-xs max-w-2xl mx-auto mt-1 leading-relaxed font-medium">
            Our solution is designed to adapt to diverse rehabilitation pathways across specialties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[25px]">
          {/* Neuro-Motor Rehab */}
          <div className="rounded-[25px] border border-white/5 backdrop-blur-2xl p-[25px] flex flex-col h-full shadow-2xl transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden bg-[#088bfe]/10 hover:border-[#088bfe]/40">
            <div className="relative w-full aspect-[2/1] rounded-[16px] overflow-hidden border border-white/10 shadow-lg mb-4">
              <img src={neuromotorImg} alt="Neuro-Motor Rehab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12 bg-[#088bfe]/20">
                <Brain className="w-4 h-4 text-[#088bfe]" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-black mb-3 leading-tight text-[#088bfe]">Neuro-Motor Rehab</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#088bfe]" style={{ boxShadow: '0 0 6px #088bfe' }} />
                  Stroke (hemiplegia, weakness)
                </li>
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#088bfe]" style={{ boxShadow: '0 0 6px #088bfe' }} />
                  Parkinson's (bradykinesia, rigidity)
                </li>
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#088bfe]" style={{ boxShadow: '0 0 6px #088bfe' }} />
                  Cerebral Palsy (motor delays)
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-3 border-t border-white/5">
              <a href="https://ropods.com/usecases?tab=neuro-motor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-black uppercase tracking-wider text-[11px] text-[#088bfe] group/link">
                Know More <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Neuro-Cognition Rehab */}
          <div className="rounded-[25px] border border-white/5 backdrop-blur-2xl p-[25px] flex flex-col h-full shadow-2xl transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden bg-[#fe019a]/10 hover:border-[#fe019a]/40">
            <div className="relative w-full aspect-[2/1] rounded-[16px] overflow-hidden border border-white/10 shadow-lg mb-4">
              <img src={neurocognitionImg} alt="Neuro-Cognition Rehab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12 bg-[#fe019a]/20">
                <Zap className="w-4 h-4 text-[#fe019a]" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-black mb-3 leading-tight text-[#fe019a]">Neuro-Cognition Rehab</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#fe019a]" style={{ boxShadow: '0 0 6px #fe019a' }} />
                  Dev Disorders (ADHD, learning)
                </li>
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#fe019a]" style={{ boxShadow: '0 0 6px #fe019a' }} />
                  Traumatic Brain Injury (TBI)
                </li>
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#fe019a]" style={{ boxShadow: '0 0 6px #fe019a' }} />
                  Dementia / Alzheimer's
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-3 border-t border-white/5">
              <a href="https://ropods.com/usecases?tab=neuro-cognition" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-black uppercase tracking-wider text-[11px] text-[#fe019a] group/link">
                Know More <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Musculoskeletal Rehab */}
          <div className="rounded-[25px] border border-white/5 backdrop-blur-2xl p-[25px] flex flex-col h-full shadow-2xl transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden bg-[#fad000]/10 hover:border-[#fad000]/40">
            <div className="relative w-full aspect-[2/1] rounded-[16px] overflow-hidden border border-white/10 shadow-lg mb-4">
              <img src={mskImg} alt="Musculoskeletal Rehab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12 bg-[#fad000]/20">
                <Activity className="w-4 h-4 text-[#fad000]" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-black mb-3 leading-tight text-[#fad000]">Musculoskeletal Rehab</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#fad000]" style={{ boxShadow: '0 0 6px #fad000' }} />
                  Rotator Cuff / Shoulder Impingement
                </li>
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#fad000]" style={{ boxShadow: '0 0 6px #fad000' }} />
                  TKR / THR Rehab
                </li>
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#fad000]" style={{ boxShadow: '0 0 6px #fad000' }} />
                  Lower Back Pain / Spondylosis
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-3 border-t border-white/5">
              <a href="https://ropods.com/usecases?tab=musculoskeletal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-black uppercase tracking-wider text-[11px] text-[#fad000] group/link">
                Know More <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Sports Rehab */}
          <div className="rounded-[25px] border border-white/5 backdrop-blur-2xl p-[25px] flex flex-col h-full shadow-2xl transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden bg-[#00fd7a]/10 hover:border-[#00fd7a]/40">
            <div className="relative w-full aspect-[2/1] rounded-[16px] overflow-hidden border border-white/10 shadow-lg mb-4">
              <img src={sportsImg} alt="Sports Rehab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12 bg-[#00fd7a]/20">
                <Dumbbell className="w-4 h-4 text-[#00fd7a]" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-black mb-3 leading-tight text-[#00fd7a]">Sports Rehab</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#00fd7a]" style={{ boxShadow: '0 0 6px #00fd7a' }} />
                  ACL Tear / Post-ACL Surgery
                </li>
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#00fd7a]" style={{ boxShadow: '0 0 6px #00fd7a' }} />
                  Concussion Rehab
                </li>
                <li className="flex items-start gap-2 text-white/80 text-md font-medium leading-snug italic">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 shadow-lg bg-[#00fd7a]" style={{ boxShadow: '0 0 6px #00fd7a' }} />
                  Return-to-Sport Agility Training
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-3 border-t border-white/5">
              <a href="https://ropods.com/usecases?tab=sports" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-black uppercase tracking-wider text-[11px] text-[#00fd7a] group/link">
                Know More <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
