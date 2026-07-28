import { useState, useEffect } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Search, Users, MessageCircle, Star, Calendar, ChevronLeft, ChevronRight, ArrowRight, Menu, X } from "lucide-react";

import logoFull from "@/imports/LinkUo_Ath_logo_with_name.png";
import homeScreen from "@/imports/Screenshot_2026-07-01_at_5.57.32_PM.png";
import lockerRoom from "@/imports/Screenshot_2026-07-01_at_5.48.15_PM.png";
import profileScreen from "@/imports/Screenshot_2026-07-01_at_5.49.59_PM.png";
import ratingsScreen from "@/imports/Screenshot_2026-07-01_at_6.14.53_PM.png";
import chatScreen from "@/imports/Screenshot_2026-07-01_at_6.17.53_PM.png";
import sessionModal from "@/imports/Screenshot_2026-07-01_at_5.56.53_PM_2.png";

const APP_STORE = "https://apps.apple.com/us/app/linkup-athletics/id6773773504";
const GREEN = "#4ade80";
const GREEN_MID = "#16a34a";
const NAVY = "#060f1e";
const CARD = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.08)";

const HERO_IMG = "https://images.unsplash.com/photo-1755877956621-5fac2eae4ebb?w=1600&h=900&fit=crop&auto=format";
const SPORT_IMG = "https://images.unsplash.com/photo-1562519819-016930ada31b?w=800&h=600&fit=crop&auto=format";
const TRACK_IMG = "https://images.unsplash.com/photo-1760114852702-9c65fe257a52?w=800&h=600&fit=crop&auto=format";

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const h = size === "sm" ? 36 : 44;
  const fs1 = size === "sm" ? 24 : 30;
  const fs2 = size === "sm" ? 10 : 12;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
      <div style={{ width: Math.round(h * 0.93), height: h, overflow: "hidden", flexShrink: 0, border: "none", outline: "none" }}>
        <img src={logoFull} alt="LinkUp Athletics mark" style={{ height: h, width: "auto", maxWidth: "none", display: "block", filter: "invert(1)", border: "none", outline: "none" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: fs1, lineHeight: 1, letterSpacing: "-0.5px", color: "white" }}>LINKUP</span>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 400, fontSize: fs2, lineHeight: 1, letterSpacing: "5px", color: "rgba(255,255,255,0.6)" }}>ATHLETICS</span>
      </div>
    </div>
  );
}

function PhoneFrame({ image, alt, size = 200 }: { image: string; alt: string; size?: number }) {
  const h = Math.round(size * 2.02);
  return (
    <div className="relative mx-auto select-none" style={{ width: size, height: h, flexShrink: 0 }}>
      <div className="absolute inset-0 rounded-[36px]" style={{ background: "linear-gradient(145deg,#3a3a3c 0%,#1c1c1e 50%,#2c2c2e 100%)", boxShadow: "0 0 0 1px rgba(255,255,255,0.12),0 40px 80px rgba(0,0,0,0.8),inset 0 1px 0 rgba(255,255,255,0.14)" }} />
      <div className="absolute rounded-[32px] overflow-hidden" style={{ inset: 3 }}>
        <ImageWithFallback src={image} alt={alt} className="w-full h-full object-cover object-top" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full z-20" style={{ top: 10, width: Math.round(size * 0.33), height: Math.round(size * 0.093) }} />
      <div className="absolute left-[-3px] rounded-l-sm" style={{ top: Math.round(h * 0.2), width: 3, height: Math.round(h * 0.065), background: "linear-gradient(90deg,#1c1c1e,#3a3a3c)" }} />
      <div className="absolute left-[-3px] rounded-l-sm" style={{ top: Math.round(h * 0.29), width: 3, height: Math.round(h * 0.065), background: "linear-gradient(90deg,#1c1c1e,#3a3a3c)" }} />
      <div className="absolute right-[-3px] rounded-r-sm" style={{ top: Math.round(h * 0.24), width: 3, height: Math.round(h * 0.12), background: "linear-gradient(90deg,#3a3a3c,#1c1c1e)" }} />
      <div className="absolute rounded-[32px] pointer-events-none z-10" style={{ inset: 3, background: "linear-gradient(135deg,rgba(255,255,255,0.05) 0%,transparent 45%)" }} />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["About", "Features", "Founding Athletes", "Contact"];
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300"
        style={{ background: scrolled ? "rgba(6,15,30,0.95)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? `1px solid ${BORDER}` : "1px solid transparent" }}>
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-sm font-medium transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
              {l}
            </a>
          ))}
        </div>
        <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200"
          style={{ background: GREEN, color: "#051a0a", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#86efac"; }}
          onMouseLeave={e => { e.currentTarget.style.background = GREEN; }}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
          Download Free
        </a>
        <button className="md:hidden text-white/60" onClick={() => setOpen(o => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-10 gap-6" style={{ background: "rgba(6,15,30,0.98)", backdropFilter: "blur(20px)" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} onClick={() => setOpen(false)}
              className="text-2xl font-bold text-white border-b py-4" style={{ borderColor: BORDER, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              {l}
            </a>
          ))}
          <a href={APP_STORE} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 text-base font-bold px-5 py-3 rounded-full mt-4"
            style={{ background: GREEN, color: "#051a0a", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
            Download Free
          </a>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: NAVY }}>
      {/* Hero bg photo */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Athlete on track" className="w-full h-full object-cover object-center" style={{ opacity: 0.2 }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, rgba(6,15,30,0.7) 50%, rgba(6,15,30,0.95) 100%)` }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(22,163,74,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full">
        {/* Text */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full w-fit" style={{ background: "rgba(74,222,128,0.08)", border: `1px solid rgba(74,222,128,0.2)` }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN, fontFamily: "'Inter',sans-serif" }}>Now Onboarding Founding Athletes</span>
          </div>
          <h1 className="font-black leading-none mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2.8rem,7vw,5.5rem)", color: "#fff", letterSpacing: "-0.04em" }}>
            Your next<br />training partner<br /><span style={{ color: GREEN }}>is out there.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter',sans-serif" }}>
            LinkUp Athletics connects college and pro athletes for lifting, drills, and 1-on-1 training — all off-season, wherever you are.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-base transition-all duration-200"
              style={{ background: GREEN, color: "#051a0a", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 0 40px rgba(74,222,128,0.3)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(74,222,128,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 0 40px rgba(74,222,128,0.3)"; }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              Download on the App Store
            </a>
            <a href="#features" className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-base transition-all duration-200"
              style={{ background: CARD, border: `1px solid ${BORDER}`, color: "rgba(255,255,255,0.7)", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.borderColor = BORDER; }}>
              See the App <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Phones */}
        <div className="flex items-end gap-4 flex-shrink-0">
          <div className="hidden sm:block opacity-60" style={{ transform: "rotate(-5deg) translateY(20px)" }}>
            <PhoneFrame image={lockerRoom} alt="Locker Room" size={160} />
          </div>
          <PhoneFrame image={homeScreen} alt="Home screen" size={210} />
          <div className="hidden sm:block opacity-60" style={{ transform: "rotate(5deg) translateY(20px)" }}>
            <PhoneFrame image={chatScreen} alt="Chat" size={160} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: `linear-gradient(to bottom, transparent, ${NAVY})` }} />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12" style={{ background: "#030a12" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GREEN, fontFamily: "'Inter',sans-serif" }}>Our Mission</p>
          <h2 className="font-black leading-tight mb-6" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", color: "#fff", letterSpacing: "-0.03em" }}>
            No excuses.<br />Just reps.
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif", maxWidth: 480 }}>
            We built LinkUp Athletics on three principles: simplicity, safety, and accountability. Finding a serious training partner should be as easy as opening your phone — and the athletes you train with should push you to be better, every session.
          </p>
          <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200"
            style={{ color: GREEN, fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#86efac")}
            onMouseLeave={e => (e.currentTarget.style.color = GREEN)}>
            Download the app <ArrowRight size={15} />
          </a>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <img src={SPORT_IMG} alt="Athletes training" className="w-full h-52 object-cover rounded-2xl" style={{ gridColumn: "1 / 2" }} />
          <img src={TRACK_IMG} alt="Track and field" className="w-full h-52 object-cover rounded-2xl" style={{ gridColumn: "2 / 3" }} />
          {[
            { val: "Any Sport", label: "Baseball, basketball & more" },
            { val: "Anywhere", label: "Home, traveling, on campus" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl p-6 flex flex-col gap-1" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <span className="font-black text-2xl" style={{ color: GREEN, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{s.val}</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Search, title: "Smart Partner Matching", body: "Search athletes by sport, position, and location. Whether you're training at home or passing through a new city, your next rep partner is nearby.", image: homeScreen, tag: "Find" },
  { icon: Users, title: "Build Your Off-Season Roster", body: "Connect with athletes you want to train with regularly, and follow those who inspire you. Your roster keeps growing all year.", image: profileScreen, tag: "Roster" },
  { icon: MessageCircle, title: "Book Sessions From Chat", body: "Talk it out, then lock it in. Request a workout directly from the conversation — from 'hey' to confirmed in seconds.", image: chatScreen, tag: "Chat" },
  { icon: Star, title: "Accountability Through Ratings", body: "Rate each other after every session. A strong track record speaks louder than any highlight reel.", image: ratingsScreen, tag: "Ratings" },
];

function Features() {
  const [active, setActive] = useState(0);
  const f = features[active];
  return (
    <section id="features" className="py-24 px-6 md:px-12" style={{ background: NAVY }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GREEN, fontFamily: "'Inter',sans-serif" }}>The App</p>
          <h2 className="font-black leading-tight" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", letterSpacing: "-0.03em" }}>
            Everything you need.<br />Nothing you don't.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Feature list */}
          <div className="flex flex-col gap-3 flex-1">
            {features.map((feat, i) => (
              <button key={i} onClick={() => setActive(i)} className="text-left rounded-2xl p-5 transition-all duration-300 w-full"
                style={{
                  background: i === active ? "rgba(74,222,128,0.06)" : CARD,
                  border: `1px solid ${i === active ? "rgba(74,222,128,0.2)" : BORDER}`,
                }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: i === active ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.06)", border: "none", outline: "none" }}>
                    <feat.icon size={15} color={i === active ? GREEN : "rgba(255,255,255,0.4)"} />
                  </div>
                  <span className="font-bold text-sm" style={{ color: i === active ? "#fff" : "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{feat.title}</span>
                </div>
                {i === active && (
                  <p className="text-sm leading-relaxed pl-11" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif" }}>{feat.body}</p>
                )}
              </button>
            ))}
          </div>

          {/* Phone preview */}
          <div className="flex justify-center md:justify-end flex-1">
            <div style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))" }}>
              <PhoneFrame image={f.image} alt={f.title} size={240} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoundingAthletes() {
  return (
    <section id="founding-athletes" className="py-24 px-6 md:px-12 relative overflow-hidden" style={{ background: "#030a12" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(22,163,74,0.07) 0%, transparent 70%)" }} />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(22,163,74,0.08) 0%, rgba(6,15,30,0.8) 100%)", border: `1px solid rgba(74,222,128,0.15)` }}>
          <div className="flex flex-col md:flex-row items-center gap-10 p-10 md:p-14">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full w-fit" style={{ background: "rgba(74,222,128,0.1)", border: `1px solid rgba(74,222,128,0.25)` }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: GREEN }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GREEN, fontFamily: "'Inter',sans-serif" }}>Limited Spots</span>
              </div>
              <h2 className="font-black leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(1.8rem,4vw,3rem)", color: "#fff", letterSpacing: "-0.03em" }}>
                Be the one who<br />brings it to your campus.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter',sans-serif", maxWidth: 420 }}>
                We're onboarding our founding athletes now — college and pro-level athletes who want to lead the movement on their campus. Be the first to bring serious off-season training to your team.
              </p>
              <div className="flex flex-col gap-3">
                {["Early access before public launch", "Shape the features we build next", "Campus ambassador recognition", "Direct line to the founding team"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(74,222,128,0.15)", border: "none", outline: "none" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter',sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <PhoneFrame image={sessionModal} alt="Book a session" size={200} />
            </div>
          </div>
          <div className="px-10 md:px-14 pb-10">
            <div className="flex flex-wrap gap-4">
              <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200"
                style={{ background: GREEN, color: "#051a0a", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 0 40px rgba(74,222,128,0.25)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                Download on the App Store
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200"
                style={{ background: CARD, border: `1px solid ${BORDER}`, color: "rgba(255,255,255,0.7)", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.borderColor = BORDER; }}>
                Become a Campus Ambassador <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", sport: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12" style={{ background: NAVY }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GREEN, fontFamily: "'Inter',sans-serif" }}>Get In Touch</p>
          <h2 className="font-black leading-tight mb-4" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2rem,5vw,3rem)", color: "#fff", letterSpacing: "-0.03em" }}>
            Bring it to your campus.
          </h2>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter',sans-serif" }}>
            Interested in being a campus ambassador or have a question? Drop us a message — we'd love to connect.
          </p>
        </div>

        {sent ? (
          <div className="rounded-2xl p-10 flex flex-col items-center text-center gap-4" style={{ background: "rgba(74,222,128,0.06)", border: `1px solid rgba(74,222,128,0.2)` }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(74,222,128,0.15)", border: "none", outline: "none" }}>
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none"><path d="M2 10L9 17L22 2" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Message sent.</h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif" }}>We'll be in touch soon. In the meantime, download the app and get started.</p>
            <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm mt-2"
              style={{ background: GREEN, color: "#051a0a", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              Download on the App Store
            </a>
          </div>
        ) : (
          <form onSubmit={handle} className="flex flex-col gap-4">
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
              { key: "email", label: "Email", type: "email", placeholder: "jane@university.edu" },
              { key: "sport", label: "Sport & Level", type: "text", placeholder: "e.g. Baseball · NCAA D1" },
            ].map(field => (
              <div key={field.key}>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter',sans-serif" }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                  required
                  className="w-full rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all duration-200"
                  style={{ background: CARD, border: `1px solid ${BORDER}`, fontFamily: "'Inter',sans-serif", fontSize: 15 }}
                  onFocus={e => (e.target.style.borderColor = "rgba(74,222,128,0.35)")}
                  onBlur={e => (e.target.style.borderColor = BORDER)}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter',sans-serif" }}>Message (optional)</label>
              <textarea
                placeholder="Tell us about yourself, your sport, or why you want to be a founding athlete..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                rows={4}
                className="w-full rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all duration-200 resize-none"
                style={{ background: CARD, border: `1px solid ${BORDER}`, fontFamily: "'Inter',sans-serif", fontSize: 15 }}
                onFocus={e => (e.target.style.borderColor = "rgba(74,222,128,0.35)")}
                onBlur={e => (e.target.style.borderColor = BORDER)}
              />
            </div>
            <button type="submit" className="w-full py-4 rounded-2xl font-bold text-base transition-all duration-200 mt-2"
              style={{ background: GREEN, color: "#051a0a", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 0 40px rgba(74,222,128,0.25)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#86efac"; }}
              onMouseLeave={e => { e.currentTarget.style.background = GREEN; }}>
              Send Message
            </button>
            <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Inter',sans-serif" }}>
              Or email us directly at <a href="mailto:support@linkupathletics.com" style={{ color: "rgba(255,255,255,0.4)" }}>support@linkupathletics.com</a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10" style={{ background: "#030a12", borderTop: `1px solid ${BORDER}` }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo size="sm" />
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'Inter',sans-serif" }}>
          © {new Date().getFullYear()} LinkUp Athletics. College Level and Beyond.
        </p>
        <div className="flex items-center gap-6">
          {["About", "Contact", "Privacy", "Terms"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter',sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: NAVY, minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <About />
      <Features />
      <FoundingAthletes />
      <Contact />
      <Footer />
    </div>
  );
}
