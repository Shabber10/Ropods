import { Check, Wifi, Battery, Shield, Smartphone, LineChart, Users, Bluetooth, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

import hardwareImg from "@/assets/spot-closeup.jpg";
import softwareImg from "@/assets/app-dashboard.png";
import playImg from "@/assets/playstore.png";
import appleImg from "@/assets/apple.png";
import gallery1 from "@/assets/SPOTfocusinpolemount.jpg";
import gallery2 from "@/assets/spot3.png";
import gallery3 from "@/assets/GlowSPOTwithsideview.jpg";
import gallery4 from "@/assets/v1.jpg";
import gallery5 from "@/assets/spot-outdoor.jpg";
import gallery6 from "@/assets/Carrycase&6lighted SPOTs.jpg";
import gallery7 from "@/assets/spot-lineup.jpg";
import gallery8 from "@/assets/SPOTinsidecarrycase.jpg";
import heroSvg from "@/assets/hero.svg";

const HARDWARE_IMG = hardwareImg;
const SOFTWARE_IMG = softwareImg;

export default function ProductSection() {
  useScrollReveal();
  return (
    <section id="spot" className="pt-2 pb-2 relative overflow-hidden">
      {/* Background glow for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[100%] mx-auto mt-0 px-6 relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch ">

          {/* HARDWARE CARD */}
          <div className="group relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 flex flex-col transition-all duration-500 hover:bg-white/[0.05] hover:border-[#00fd7a]/30 shadow-2xl reveal-on-scroll reveal-left">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
              <div className="flex-1">
                <span className="text-[#00fd7a] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Hardware Layer</span>
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
                  Meet <span className="text-[#00fd7a] glow-text">SPOT</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-4 font-medium">
                  The future of movement intelligence. Precision sensors packed into a medical-grade portable device.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00fd7a]">
                      <Bluetooth className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Bluetooth</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00fd7a]">
                      <Battery className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">8h Battery</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00fd7a]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Clinical</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative flex justify-center">
                <div className="absolute inset-0 bg-[#00fd7a]/10 rounded-full blur-3xl" />
                <img src={HARDWARE_IMG} alt="SPOT sensor"
                  className="relative w-full max-w-[280px] h-auto object-contain drop-shadow-[0_0_30px_rgba(0,253,122,0.3)] group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placeholder.com/hardware.png"; }} />
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/5 flex-grow">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#00fd7a]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#00fd7a]" />
                </div>
                <span className="text-white/70 text-md font-medium leading-snug">Sensor-based, wireless devices for movement tracking.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#00fd7a]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#00fd7a]" />
                </div>
                <span className="text-white/70 text-md font-medium leading-snug">Real-time biofeedback for correct patient motion.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#00fd7a]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#00fd7a]" />
                </div>
                <span className="text-white/70 text-md font-medium leading-snug">Gamified protocols for high rehabilitation engagement.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#00fd7a]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#00fd7a]" />
                </div>
                <span className="text-white/70 text-md font-medium leading-snug">Portable design for clinical or home-care use.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#00fd7a]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#00fd7a]" />
                </div>
                <span className="text-white/70 text-md font-medium leading-snug">Seamless data sync with the SynapMove app.</span>
              </div>
            </div>

            <div className="mt-4 flex items-center">
              <Link to="/buy"
                className="group/link inline-flex items-center gap-2 bg-[#00fd7a] text-[#060b19] font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,253,122,0.3)] text-sm">
                Explore & Buy <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* SOFTWARE CARD */}
          <div className="group relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 flex flex-col transition-all duration-500 hover:bg-white/[0.05] hover:border-[#fe019a]/30 shadow-2xl reveal-on-scroll reveal-right">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
              <div className="flex-1">
                <span className="text-[#fe019a] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Software Layer</span>
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
                  <span className="text-[#fe019a] glow-text">SynapMove</span> App
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-4 font-medium">
                  The brain of your practice. Intelligent protocols, real-time analytics, and seamless patient management.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fe019a]">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Universal</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fe019a]">
                      <LineChart className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">AI Insights</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fe019a]">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Multi-Hub</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative flex justify-center">
                <div className="absolute inset-0 bg-[#fe019a]/10 rounded-full blur-3xl opacity-50" />
                <img src={SOFTWARE_IMG} alt="SynapMove app"
                  className="relative w-full max-w-auto h-[300px] object-contain drop-shadow-[0_0_30px_rgba(254,1,154,0.2)] group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.5"; }} />
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/5 flex-grow">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#fe019a]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#fe019a]" />
                </div>
                <span className="text-white/70 text-md font-medium leading-snug">Smart scheduling tools for clinical efficiency.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#fe019a]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#fe019a]" />
                </div>
                <span className="text-white/70 text-md font-medium leading-snug">Comprehensive exercise library with protocols.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#fe019a]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#fe019a]" />
                </div>
                <span className="text-white/70 text-md font-medium leading-snug">Gamified interaction to motivate patients.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#fe019a]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#fe019a]" />
                </div>
                <span className="text-white/70 text-md font-medium leading-snug">Detailed analytics for outcome tracking.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#fe019a]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#fe019a]" />
                </div>
                <span className="text-white/70 text-md font-medium leading-snug">Full patient history and trend visualization.</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a href="https://play.google.com/store/apps/details?id=com.ropods.spotpt&hl=en_IN" target="_blank" rel="noopener noreferrer"
                className="group/link flex-1 min-w-[140px] bg-[#fe019a] text-white font-bold px-4 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(254,1,154,0.3)] flex items-center justify-center gap-2 text-sm">
                <img src={playImg} alt="Play Store" className="w-5 h-5 brightness-0 invert" />
                Play Store
              </a>
              <a href="https://apps.apple.com/in/app/synapmove/id6752775216" target="_blank" rel="noopener noreferrer"
                className="group/link flex-1 min-w-[140px] bg-[#fe019a] text-white font-bold px-4 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(254,1,154,0.3)] flex items-center justify-center gap-2 text-sm">
                <img src={appleImg} alt="App Store" className="w-5 h-5 brightness-0 invert" />
                App Store
              </a>
            </div>
          </div>

        </div>

        <ImageGallery3D />
      </div>
    </section>
  );
}

const CAROUSEL_CSS = `
.carousel-wrapper {
  --carousel-transition-duration: 250ms;
  --carousel-transition-ease: ease-out;
  --carousel-bg-color-rgb: 6, 11, 25;
  --carousel-shadow-color-rgb: 128, 128, 128;
  --carousel-item-width: 14rem;
  --carousel-item-height: 20rem;
  --carousel-item-hover-effect: 1.075;
  --carousel-item-reflection-blur: 0.25rem;
  --carousel-item-empty-color-rgb: 255, 255, 255;
  --carousel-item-glow-color-rgb: 255, 255, 255;
  --carousel-item-glow-size: 3rem;
  --carousel-diameter: 75rem;
  --carousel-3d-perspective: 1000px;
  --carousel-3d-perspective-origin: 50% 20%;
  --carousel-control-color-rgb: 0, 253, 122;
  --carousel-animation-duration: 25s;
  --carousel-animation-play-state: running;
  --carousel-direction-animation-play-state: paused;
  --carousel-scale-factor: 1;
}

@media only screen and (max-width: 48rem) {
  .carousel-wrapper {
    --carousel-scale-factor: 0.75;
  }
}

@media only screen and (max-width: 32rem) {
  .carousel-wrapper {
    --carousel-scale-factor: 0.5; /* Smoother scaling for phones */
  }
}

@media only screen and (max-width: 16rem) {
  .carousel-wrapper {
    --carousel-scale-factor: 0.25;
  }
}

.carousel {
  --_diameter: calc(var(--carousel-diameter) * var(--carousel-scale-factor));
  --_radius: calc(var(--_diameter) / 2);
  --_item-width: calc(var(--carousel-item-width) * var(--carousel-scale-factor));
  --_item-height: calc(var(--carousel-item-height) * var(--carousel-scale-factor));
  perspective: var(--carousel-3d-perspective);
  perspective-origin: var(--carousel-3d-perspective-origin);
  width: var(--_diameter);
  height: var(--_diameter);
  position: relative;
  transform-style: preserve-3d;
  margin-top: calc(-1 * (var(--_radius) - (var(--_item-height) / 2)) + (150px * var(--carousel-scale-factor)));
  margin-bottom: calc(-1 * (var(--_radius) - (var(--_item-height) / 2)) + (250px * var(--carousel-scale-factor)));
  pointer-events: none;
}

.carousel .carousel-rotation-direction {
  --_direction-animation-play-state: var(--carousel-direction-animation-play-state);
  --_z: calc(var(--_radius) * -1);
  transform: translateZ(var(--_z));
  transform-style: preserve-3d;
  animation: carousel-rotation-reverse calc(var(--carousel-animation-duration) / 2) reverse linear infinite var(--_direction-animation-play-state);
  transition: all var(--carousel-transition-duration) var(--carousel-transition-ease);
  width: 100%;
  height: 100%;
  pointer-events: none;
}

@keyframes carousel-rotation-reverse {
  from {transform: translateZ(var(--_z)) rotateY(0deg);}
  to {transform: translateZ(var(--_z)) rotateY(360deg);}
}

@keyframes carousel-rotation-normal {
  from {transform: rotateY(0deg);}
  to {transform: rotateY(360deg);}
}

.carousel .carousel-item-wrapper {
  transform-style: inherit;
  width: inherit;
  height: inherit;
  list-style-type: none;
  position: relative;
  animation: carousel-rotation-normal var(--carousel-animation-duration) normal linear infinite var(--carousel-animation-play-state);
  transition: all var(--carousel-transition-duration) var(--carousel-transition-ease);
  pointer-events: none;
}



.carousel .carousel-item {
  --_width: var(--_item-width);
  --_height: var(--_item-height);
  --_rotation: calc(360 / var(--_num-elements) * var(--_index) * 1deg);
  left: calc(var(--_radius) - var(--_item-width) / 2);
  top: calc(var(--_radius) - var(--_item-height) / 2);
  transform: rotateY(var(--_rotation)) translateZ(var(--_radius));
  transform-style: inherit;
  width: var(--_width);
  height: var(--_height);
  transition: all var(--carousel-transition-duration) var(--carousel-transition-ease);
  box-shadow: 0 0 var(--carousel-item-glow-size) transparent;
  position: absolute;
  border-radius: 12px;
  pointer-events: auto;
  cursor: pointer;
}

.carousel .carousel-item:hover,
.carousel .carousel-item:active {
  box-shadow: 0 0 var(--carousel-item-glow-size) rgba(var(--carousel-item-glow-color-rgb), 0.6);
  transform: rotateY(var(--_rotation)) translateZ(calc(var(--_radius) * var(--carousel-item-hover-effect)));
}

.carousel .carousel-item a {
  display: block;
  width: inherit;
  height: inherit;
  text-indent: -9999px;
  background-color: rgba(var(--carousel-item-empty-color-rgb), 0.5);
  background-image: var(--_image-url);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 12px;
}

.carousel .carousel-item::before {
  content: '';
  width: inherit;
  height: inherit;
  background-color: rgba(var(--carousel-item-empty-color-rgb), 0.5);
  background-image: 
    linear-gradient(to top, rgba(var(--carousel-bg-color-rgb), 0.25) 0%, rgba(var(--carousel-bg-color-rgb), 1.0) 75%), 
    var(--_image-url);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  pointer-events: none;
  filter: blur(var(--carousel-item-reflection-blur));
  transform-style: inherit;
  transform-origin: center bottom;
  transform: rotateX(90deg) rotateZ(180deg) rotateY(180deg);
  position: absolute;
  border-radius: 12px;
}

.carousel .carousel-ground {
  --_width: var(--_diameter);
  --_height: var(--_diameter);
  --_rotation: 90deg;
  left: calc(var(--_radius) - var(--_width) / 2);
  top: calc(var(--_radius) - var(--_height) / 2);
  transform: rotateX(var(--_rotation)) translateZ(calc(var(--_item-height) / -2));
  width: var(--_width);
  height: var(--_height);
  border-radius: 50%;
  background: radial-gradient(rgba(var(--carousel-shadow-color-rgb), 0.75) 15% , rgba(var(--carousel-bg-color-rgb), 0) 60%);
  opacity: 0.5;
  transition: opacity var(--carousel-transition-duration) var(--carousel-transition-ease);
  position: absolute;
}

.carousel .carousel-item-wrapper:has(.carousel-item:hover) .carousel-ground {
  opacity: 0.75;
}
`;

const SPOT_BENEFITS = [
  { title: "Delivers Protocol-Driven Care", desc: "Supports structured rehab plans with personalisation and calibration." },
  { title: "Improves Adherence & Motivation", desc: "With visual and audio cues, SPOT helps patients stay engaged and motivated, improving session outcomes." },
  { title: "Biofeedback", desc: "Gain real-time movement insights to correct form instantly, enhance performance, and accelerate recovery." },
  { title: "Versatile & Hands-Free", desc: "Adapts easily to different rehab environments, from clinics, hospitals, home visits and subscription model and supports a wide range of exercises." },
  { title: "Saves Time with Automated Records", desc: "Automated data capture and reporting reduces therapists' burden." },
];

const SPOT_SPECIALTIES = [
  "Musculoskeletal", "Neurological", "Pediatric", "Geriatric", "Sports Rehab", "Post-Surgical"
];

const SPOT_STEPS = [
  { num: "1", title: "Download and Sign Up", desc: "Install the SynapMove app from Play Store or App Store and sign up using Apple ID, Google, or Email." },
  { num: "2", title: "Create Your Profile", desc: "Add your name and a unique username. Patients should sign up as \"Trainee\"." },
  { num: "3", title: "Explore Programs", desc: 'Start with pre-built programs like "ACL Rehab – Advanced" and assign them to trainees/patients.' },
  { num: "4", title: "Add a Trainee/Patient", desc: "Tap the \"+\" icon, fill in mandatory details, schedule sessions, and save." },
  { num: "5", title: "Customize and Manage", desc: "Use \"Drill Settings\" to personalize exercises and manage device settings under \"Manage Spot\"." },
];

const SPOT_STATS = [
  { value: "75%", label: "physiotherapy clinics using SPOT report higher appointment adherence and faster patient progress." },
  { value: "90%", label: "users feel 'more engaged' and motivated throughout their recovery journey after 4 weeks." },
  { value: "300+", label: "clinics, including NIMHANS, Manipal, and Movementology, have onboarded SPOT so far." },
  { value: "25%", label: "improvement in recovery time compared to traditional therapy — based on early data." },
];

const SPOT_PROS = [
  { title: "Boost Patient Engagement", desc: "Turn routine rehab exercises into motivating, interactive sessions with SPOT device and SynapMove app." },
  { title: "Personalize Therapy", desc: "Tailor programs to each patient's unique needs, goals, and progress with customizable SPOT-driven exercises." },
  { title: "Monitor & Optimize", desc: "Track progress in real-time with SynapMove, using live feedback and AI analytics to refine therapy and drive better outcomes." },
  { title: "Enhance Patient Retention", desc: "Keep patients motivated and committed with gamified workouts and visual progress tracking through SPOT technology." },
  { title: "Expand Therapy Options", desc: "Cater to a wide range of patients — from sports injuries to functional decline, pediatric to geriatric — by integrating versatile programs with SPOT and SynapMove." },
  { title: "Elevate Clinic Experience", desc: "Stand out as a modern, tech-driven rehabilitation center that combines evidence-based therapy with the interactive power of SPOT and SynapMove." },
];

const SPOT_FAQS = [
  { q: "What is SPOT, and how does it work?", a: "SPOT is a sensor-based rehab companion built on time-of-flight sensor technology. It tracks patient movements in real time, delivers biofeedback, and syncs all data with the SynapMove app for clinicians to review." },
  { q: "How does SPOT help rehab professionals in patient care?", a: "SPOT supports structured, protocol-driven sessions with automated data capture, outcome tracking, and AI-powered insights — reducing manual effort and improving consistency of care." },
  { q: "How does SPOT improve patient motivation and reduce drop-offs?", a: "Gamified sessions, visual and audio cues, and progress tracking make therapy interactive and rewarding, keeping patients committed to their recovery journey." },
  { q: "Where can I use SPOT?", a: "SPOT is designed for clinics, hospitals, home visits, and subscription-based home care. Its compact, portable design makes it versatile across all rehab environments." },
  { q: "How does a rehab professional track patient progress?", a: "Through the SynapMove app, clinicians can monitor exercises in real time, view session analytics, track performance trends, and make timely adjustments to treatment plans." },
  { q: "Is SPOT compatible with both Android and iOS?", a: "Yes! The SynapMove app is available on both Google Play Store and Apple App Store, compatible with the latest Android and iOS devices." },
];

function SpotDetailSection() {
  const [activeTab, setActiveTab] = useState<"benefits" | "specialties">("benefits");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const accentColors = ["#00fd7a", "#fe019a", "#088bfe", "#fad000", "#FF5F1F", "#00fd7a"];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 space-y-28">

      {/* ── Intro ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#00fd7a] text-xs font-black tracking-[0.4em] uppercase mb-4 block">Rehab Companion</span>
          <h2 className="text-6xl md:text-7xl font-black text-white leading-none mb-6">
            <span className="text-[#00fd7a] glow-text">SPOT</span>
          </h2>
          <p className="text-white/80 text-xl md:text-2xl font-bold leading-snug mb-6">
            Smarter Rehab. Powered by Precision.<br />Backed by HCPs.
          </p>
          <p className="text-white/60 text-base leading-relaxed mb-5">
            SPOT is a sensor-based rehab companion designed to support rehab professionals in delivering consistent, measurable, and patient-friendly therapy sessions. Whether you're working in musculoskeletal, neuro, pediatric, or geriatric rehab, SPOT adapts to your treatment protocols — offering real-time movement guidance, progress tracking, and motivation across all stages of recovery.
          </p>
          <p className="text-white/40 text-sm leading-relaxed border-l-2 border-[#00fd7a]/40 pl-4">
            Built on time-of-flight sensor technology and powered by ROPODS' healthcare innovation, SPOT brings the science of precision into the art of care.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-[#00fd7a]/10 rounded-[40px] blur-3xl" />
          <div className="relative rounded-[32px] border border-[#00fd7a]/20 bg-white/[0.03] backdrop-blur-2xl p-10 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00fd7a]/60 to-transparent" />
            <div className="text-[#00fd7a] text-8xl font-black mb-2 glow-text tracking-tighter">SPOT</div>
            <div className="text-white/40 text-sm font-medium mb-8">Sensor-Based Rehab Companion</div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "TOF Sensor", color: "#00fd7a" },
                { label: "Biofeedback", color: "#fe019a" },
                { label: "Gamified", color: "#088bfe" },
              ].map(tag => (
                <div key={tag.label} className="rounded-2xl border py-3 px-2 text-sm font-black"
                  style={{ borderColor: tag.color + "40", color: tag.color, background: tag.color + "10" }}>
                  {tag.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Benefits / Specialties Tabs ── */}
      <div>
        <div className="flex gap-3 mb-10">
          {(["benefits", "specialties"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                ? "bg-[#00fd7a] text-[#060b19] shadow-[0_0_25px_rgba(0,253,122,0.5)]"
                : "border border-white/10 text-white/40 hover:border-[#00fd7a]/40 hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "benefits" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SPOT_BENEFITS.map((b, i) => (
              <div key={i} className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 hover:border-[#00fd7a]/40 hover:bg-[#00fd7a]/5 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${accentColors[i]}, transparent)` }} />
                <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-5 font-black text-lg"
                  style={{ background: accentColors[i] + "15", color: accentColors[i], border: `1px solid ${accentColors[i]}30` }}>
                  {i + 1}
                </div>
                <h4 className="text-white font-black mb-3 text-base leading-snug">{b.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "specialties" && (
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {SPOT_SPECIALTIES.map((s, i) => (
                <div key={i} className="rounded-2xl border border-[#00fd7a]/30 bg-[#00fd7a]/5 px-8 py-4 text-[#00fd7a] font-black text-base hover:bg-[#00fd7a]/15 hover:scale-105 transition-all duration-300 cursor-default">
                  {s}
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">
              <h4 className="text-white font-black text-2xl mb-4">Why SPOT?</h4>
              <p className="text-white/65 text-base leading-relaxed mb-6">
                Rehabilitation is more than just doing the right exercises — it's about doing the exercises right, staying consistently motivated and tracking progress. SPOT enables all these while providing objective performance data. With its compact, portable design, SPOT is ideal for both in-clinic sessions and home care visits. Through the SynapMove app, doctors can monitor exercises in real time, ensuring accountability and timely corrections. With a flexible subscription model, patients can also rent SPOT for home use, extending care beyond the clinic and keeping recovery on track, every step of the way.
              </p>
              <div className="p-5 rounded-2xl bg-[#00fd7a]/5 border border-[#00fd7a]/20 flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#00fd7a] mt-2 shrink-0" />
                <div>
                  <p className="text-[#00fd7a] font-black text-sm mb-1">Backed by ROPODS</p>
                  <p className="text-white/50 text-sm leading-relaxed">With deep expertise in smart sensor technology for healthcare, ROPODS is committed to building tools that amplify your impact, not replace it.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── SPOT Device Steps ── */}
      <div>
        <div className="text-center mb-14">
          <span className="text-[#00fd7a] text-xs font-black tracking-[0.4em] uppercase mb-3 block">Getting Started</span>
          <h3 className="text-4xl md:text-5xl font-black text-white">SPOT Device &amp; Components</h3>
        </div>

        <div className="relative hidden md:block">
          {/* Central vertical spine */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00fd7a]/70 via-[#00fd7a]/30 to-transparent" />

          <div className="grid grid-cols-2 gap-x-8">
            {/* Left column — steps 1, 2, 3 */}
            <div className="flex flex-col gap-5 pr-4">
              {SPOT_STEPS.slice(0, 3).map((step, i) => (
                <div key={i} className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-[#00fd7a]/30 hover:bg-[#00fd7a]/5 transition-all duration-300 overflow-hidden">
                  <div className="absolute -right-3 -bottom-4 text-[96px] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(0,253,122,0.05)" }}>{step.num}</div>
                  {/* Right-side connector dot */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(1rem+3px)] w-3 h-3 rounded-full border-2 border-[#00fd7a] bg-[#060b19] z-10" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl font-black text-base flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ background: "#00fd7a", color: "#060b19", boxShadow: "0 0 16px rgba(0,253,122,0.4)" }}>{step.num}</div>
                    <h4 className="text-white font-black text-base leading-snug">{step.title}</h4>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Right column — steps 4, 5 offset by half a card to sit between left items */}
            <div className="flex flex-col gap-5 pl-4 mt-[calc(50%*0.42)]" style={{ marginTop: "calc((100% / 2 * 0) + 96px)" }}>
              {SPOT_STEPS.slice(3).map((step, i) => (
                <div key={i} className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-[#00fd7a]/30 hover:bg-[#00fd7a]/5 transition-all duration-300 overflow-hidden">
                  <div className="absolute -left-3 -bottom-4 text-[96px] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(0,253,122,0.05)" }}>{step.num}</div>
                  {/* Left-side connector dot */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(1rem+3px)] w-3 h-3 rounded-full border-2 border-[#00fd7a] bg-[#060b19] z-10" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl font-black text-base flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ background: "#00fd7a", color: "#060b19", boxShadow: "0 0 16px rgba(0,253,122,0.4)" }}>{step.num}</div>
                    <h4 className="text-white font-black text-base leading-snug">{step.title}</h4>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile fallback — single column */}
        <div className="flex flex-col gap-5 md:hidden">
          {SPOT_STEPS.map((step, i) => (
            <div key={i} className="group relative flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl font-black text-xl flex items-center justify-center shrink-0" style={{ background: "#00fd7a", color: "#060b19", boxShadow: "0 0 20px rgba(0,253,122,0.4)" }}>{step.num}</div>
              <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-6 py-5">
                <h4 className="text-white font-black text-base mb-2">{step.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Real Outcomes Stats ── */}
      <div>
        <div className="text-center mb-14">
          <span className="text-[#00fd7a] text-xs font-black tracking-[0.4em] uppercase mb-3 block">Real Outcomes</span>
          <h3 className="text-4xl md:text-5xl font-black text-white">Numbers That Speak</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPOT_STATS.map((s, i) => (
            <div key={i} className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center hover:border-[#00fd7a]/40 transition-all duration-400 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(0,253,122,0.08), transparent 70%)" }} />
              <div className="text-5xl md:text-6xl font-black text-[#00fd7a] glow-text mb-4 group-hover:scale-110 transition-transform duration-300">{s.value}</div>
              <p className="text-white/60 text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── For the Recovery Professional ── */}
      <div>
        <div className="text-center mb-14">
          <span className="text-[#00fd7a] text-xs font-black tracking-[0.4em] uppercase mb-3 block">Professional Benefits</span>
          <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">What's in it for the<br />Recovery Professional</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPOT_PROS.map((p, i) => (
            <div key={i} className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-[#00fd7a]/40 hover:bg-[#00fd7a]/5 transition-all duration-400 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 0% 0%, ${accentColors[i]}10, transparent 60%)` }} />
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: accentColors[i] + "15", border: `1px solid ${accentColors[i]}30` }}>
                <Check className="w-6 h-6" style={{ color: accentColors[i] }} />
              </div>
              <h4 className="text-white font-black text-base mb-3 leading-snug">{p.title}</h4>
              <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div>
        <div className="text-center mb-14">
          <span className="text-[#00fd7a] text-xs font-black tracking-[0.4em] uppercase mb-3 block">Support</span>
          <h3 className="text-4xl md:text-5xl font-black text-white">Still Got Questions?</h3>
        </div>
        <div className="max-w-4xl mx-auto space-y-3">
          {SPOT_FAQS.map((faq, i) => (
            <div key={i} className={`rounded-3xl border transition-all duration-300 overflow-hidden ${openFaq === i ? "border-[#00fd7a]/40 bg-[#00fd7a]/5" : "border-white/10 bg-white/[0.03]"
              }`}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left"
              >
                <span className="text-white font-black text-base md:text-lg leading-snug">{faq.q}</span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? "bg-[#00fd7a] text-[#060b19]" : "bg-white/5 text-white/40"
                  }`}>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4" />
                    : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>
              {openFaq === i && (
                <div className="px-8 pb-7">
                  <p className="text-white/65 text-base leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function ImageGallery3D() {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];
  const carouselRef = useRef<HTMLDivElement>(null);
  const lastMoveTime = useRef<number>(0);
  const MOVE_THRESHOLD_MS = 300; // only pause if mouse moved within last 300ms

  useEffect(() => {
    const wrapper = carouselRef.current;
    if (!wrapper) return;

    // Track last time the mouse actually moved inside the carousel area
    const onMove = () => { lastMoveTime.current = Date.now(); };
    wrapper.addEventListener('mousemove', onMove);

    // Pause only when mouse intentionally enters a carousel item
    const onItemEnter = () => {
      if (Date.now() - lastMoveTime.current < MOVE_THRESHOLD_MS) {
        wrapper.style.setProperty('--carousel-animation-play-state', 'paused');
        wrapper.style.setProperty('--carousel-direction-animation-play-state', 'paused');
      }
    };
    // Restore on leave
    const onItemLeave = () => {
      wrapper.style.setProperty('--carousel-animation-play-state', 'running');
      wrapper.style.setProperty('--carousel-direction-animation-play-state', 'running');
    };

    const items = wrapper.querySelectorAll('.carousel-item');
    items.forEach(item => {
      item.addEventListener('mouseenter', onItemEnter);
      item.addEventListener('mouseleave', onItemLeave);
    });

    return () => {
      wrapper.removeEventListener('mousemove', onMove);
      items.forEach(item => {
        item.removeEventListener('mouseenter', onItemEnter);
        item.removeEventListener('mouseleave', onItemLeave);
      });
    };
  }, []);

  return (
    <div ref={carouselRef} className="relative mt-2 mb-20 w-full flex flex-col items-center justify-center overflow-hidden carousel-wrapper">
      <style>{CAROUSEL_CSS}</style>

      <div className="text-center mb-0 z-30 relative py-0 mt-12">
        <span className="text-[#00fd7a] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Visuals</span>
        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Experience <span className="text-[#00fd7a] glow-text">SPOT</span> Ecosystem
        </h3>
      </div>

      {/* 3D Carousel Setup matching exactly the requested structure */}
      <div className="carousel">

        <div className="carousel-rotation-direction">
          <ul className="carousel-item-wrapper" style={{ "--_num-elements": images.length } as React.CSSProperties}>

            {images.map((img, index) => (
              <li
                className="carousel-item"
                key={index}
                style={{ "--_index": index + 1, "--_image-url": `url('${img}')` } as React.CSSProperties}
              >
                <a href="#" target="_blank">Visual {index + 1}</a>
              </li>
            ))}

            <li className="carousel-ground" />
          </ul>
        </div>

        {/* Hero SVG Centered inside the 3D Perspective exactly at the Origin Depth */}
        <div
          className="absolute top-1/2 left-1/2 w-[40%] aspect-square z-20 pointer-events-none"
          style={{ transform: "translate(-50%, calc(-50% - 65px)) translateZ(calc(var(--_radius) * -1))" }}
        >
          <img
            src={heroSvg}
            alt="SPOT Center"
            className="w-full h-full object-contain relative z-10"
          />
        </div>

      </div>
      <SpotDetailSection />
    </div>
  );
}
