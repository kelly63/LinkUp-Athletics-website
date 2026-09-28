import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Nav, Footer, APP_STORE, GREEN, NAVY, CARD, BORDER } from "@/app/App";

// Served from public/kelly-lopinto.jpg; until that file exists the initials card shows instead.
const FOUNDER_PHOTO = "/kelly-lopinto.jpg";
// Served from public/kelly-lopinto-college.jpg; hidden until that file exists.
const COLLEGE_PHOTO = "/kelly-lopinto-college.jpg";

function FounderPhoto() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden"
      style={{ aspectRatio: "4 / 5", background: "linear-gradient(135deg, rgba(22,163,74,0.18) 0%, rgba(6,15,30,0.9) 100%)", border: `1px solid rgba(74,222,128,0.2)`, boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-black" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "5rem", color: GREEN, letterSpacing: "-0.04em" }}>KL</span>
        </div>
      ) : (
        <img src={FOUNDER_PHOTO} alt="Kelly LoPinto, founder of LinkUp Athletics, holding a basketball on an outdoor court"
          className="absolute inset-0 w-full h-full object-cover object-top" onError={() => setFailed(true)} />
      )}
    </div>
  );
}

function CollegePhoto() {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure className="my-12">
      <img src={COLLEGE_PHOTO} alt="Kelly LoPinto playing basketball for Fairfield University"
        className="w-full rounded-3xl object-cover" style={{ aspectRatio: "2 / 1", border: `1px solid ${BORDER}` }}
        onError={() => setFailed(true)} />
      <figcaption className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter',sans-serif" }}>
        Kelly during her playing days at Fairfield University.
      </figcaption>
    </figure>
  );
}

const highlights = [
  { val: "College Athlete", label: "Fairfield University" },
  { val: "Coach", label: "Girls' basketball teams, camps, clinics & private lessons" },
  { val: "More Reps", label: "Better with a partner, every time" },
];

export default function FounderPage() {
  return (
    <div style={{ background: NAVY, minHeight: "100vh" }}>
      <Nav home="/" />

      <main>
        {/* Intro */}
        <section className="relative overflow-hidden px-6 md:px-12 pt-32 pb-20" style={{ background: NAVY }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 30% 40%, rgba(22,163,74,0.08) 0%, transparent 70%)" }} />
          <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20">
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GREEN, fontFamily: "'Inter',sans-serif" }}>Meet the Founder</p>
              <h1 className="font-black leading-none mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2.6rem,6.5vw,4.8rem)", color: "#fff", letterSpacing: "-0.04em" }}>
                Kelly LoPinto
              </h1>
              <p className="text-lg font-semibold mb-8" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Founder, LinkUp Athletics
              </p>
              <p className="text-xl leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter',sans-serif" }}>
                Former college athlete and coach, now dedicated to helping athletes reach the potential she was never physically able to reach herself.
              </p>
            </div>
            <div className="flex-1 w-full">
              <FounderPhoto />
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 px-6 md:px-12" style={{ background: "#030a12" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GREEN, fontFamily: "'Inter',sans-serif" }}>Her Story</p>
            <h2 className="font-black leading-tight mb-8" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", color: "#fff", letterSpacing: "-0.03em" }}>
              Always looking for<br />more reps.
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter',sans-serif" }}>
              <p>
                Kelly LoPinto is a former college athlete at Fairfield University and a former coach, married to a former college baseball player. In his off-seasons, he was always looking for training partners, and finding them was his biggest blocker. Training has always been part of Kelly's life, and she has always been looking for ways to get more reps in.
              </p>
              <CollegePhoto />
              <p>
                From the time she turned 17, Kelly faced injury after injury. They kept her from reaching her full potential as an athlete, and taught her how much every healthy, productive session is worth.
              </p>
              <p>
                As a coach, Kelly coached girls' basketball teams, ran camps and clinics, and gave a lot of private lessons. Again and again, she saw what happens when athletes work out with someone else: they push harder, stay accountable, and get better.
              </p>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>
                That is why she built LinkUp Athletics: to help athletes maximize their potential, something she was never able to physically do herself.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
              {highlights.map((h, i) => (
                <div key={i} className="rounded-2xl p-6 flex flex-col gap-1" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <span className="font-black text-xl" style={{ color: GREEN, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{h.val}</span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif" }}>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-24 px-6 md:px-12" style={{ background: NAVY }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-black leading-tight mb-4" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", letterSpacing: "-0.03em" }}>
              Find your next training partner.
            </h2>
            <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif" }}>
              LinkUp Athletics connects college and pro athletes for lifting, drills, and 1-on-1 training — wherever you are.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base"
                style={{ background: GREEN, color: "#051a0a", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 0 40px rgba(74,222,128,0.25)" }}>
                Download on the App Store
              </a>
              <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base"
                style={{ background: CARD, border: `1px solid ${BORDER}`, color: "rgba(255,255,255,0.7)", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Get in touch <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer home="/" />
    </div>
  );
}
