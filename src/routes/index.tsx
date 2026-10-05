import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, MessageCircle, Compass, Map, Phone, ShieldCheck, Clock, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/psychologists-hub-hero-2.png.asset.json";
import drPhoto from "@/assets/dr-halima-qureshi.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "First Step Clarity Session | Psychologists Hub Islamabad" },
    { name: "description", content: "Not sure where to start with therapy? Book a First Step Clarity Session with Dr. Halima S. Qureshi — in Islamabad or online — and leave with a clear next step." },
    { property: "og:title", content: "First Step Clarity Session | Psychologists Hub" },
    { property: "og:description", content: "One conversation to understand what you're facing and what to do next. In Islamabad or online." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const wrap = "max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14";

function Label({ n, children }: { n: string; children: string }) {
  return <p className="eyebrow text-sage-deep mb-6 flex items-center gap-3"><span className="text-muted-foreground">{n}</span><span className="w-8 h-px bg-sage-deep"/>{children}</p>;
}

function ContactButtons({ light = false }: { light?: boolean }) {
  const v = light ? "editorialLight" : "editorial";
  return <div className="flex flex-wrap gap-3">
    <Button asChild variant={v} size="spacious"><a href="tel:+923461555542"><Phone/> Call now</a></Button>
    <Button asChild variant={light ? "editorialLight" : "editorialOutline"} size="spacious"><a href="https://wa.me/923461555542" target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp</a></Button>
  </div>;
}

const flow = [
  { icon: MessageCircle, title: "Talk", text: "Share what's been on your mind, at your own pace, in a private and judgement-free space." },
  { icon: Compass, title: "Understand", text: "Make sense of what you may be experiencing with a clinical psychologist's perspective." },
  { icon: Map, title: "Direction", text: "Leave with a clear, practical next step — whether that's therapy, an assessment, or something else." },
];

const objections = [
  { q: "“I don't even know if I need therapy.”", a: "That's exactly why this session exists." },
  { q: "“What if I don't know what to talk about?”", a: "You don't need to prepare a diagnosis or know exactly what to say. Start with what's currently on your mind." },
  { q: "“Do I have to continue therapy afterward?”", a: "No. The session is designed to help you understand possible next steps." },
  { q: "“Is this a screening test?”", a: "No. It's a general consultation focused on understanding your situation and possible direction." },
];

function ConversationVisual() {
  return <figure className="relative w-full max-w-[520px] mx-auto lg:ml-auto">
    <div className="relative aspect-[4/5] border border-primary-foreground/15 overflow-hidden">
      <img src={heroPhoto.url} alt="A psychologist listening warmly to a client during a one-to-one session in a bright, calm room" className="absolute inset-0 w-full h-full object-cover"/>
      <figcaption className="absolute left-5 right-5 bottom-5 bg-background text-foreground p-5 shadow-lg">
        <p className="font-display text-2xl italic leading-snug">“Take your time. Tell me what's been on your mind.”</p>
        <p className="mt-2 text-xs text-muted-foreground flex items-center gap-2"><ShieldCheck size={14} className="text-sage-deep"/>Private, one-to-one, judgement-free</p>
      </figcaption>
    </div>
  </figure>;
}

function Index() {
  return <main>
    {/* Hero */}
    <section className="hero-field text-primary-foreground min-h-[680px] flex items-center">
      <div className="hero-arc" aria-hidden="true"/>
      <div className={`${wrap} w-full py-20 md:py-24 relative z-10 grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-center`}>
        <div className="reveal">
          <p className="eyebrow text-sage mb-7">First Step Clarity Session</p>
          <h1 className="display text-[clamp(3.2rem,6.5vw,6.5rem)] leading-[.9]">Not sure what you <span className="hero-word">need right now?</span></h1>
          <p className="mt-7 font-display text-2xl md:text-3xl text-primary-foreground/90 max-w-2xl">One conversation to understand what you're carrying — and what could help.</p>
          <p className="mt-5 text-base leading-7 text-primary-foreground/75 max-w-[540px]">A private 30-minute 1:1 session with a Consultant Clinical Psychologist.</p>
          <div className="mt-8 inline-flex items-baseline gap-4 border border-primary-foreground/25 bg-primary-foreground/5 px-6 py-4">
            <span className="text-xs uppercase tracking-[.15em] text-primary-foreground/70">30-Minute 1:1 Session</span>
            <span className="font-display text-4xl">PKR 900</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="editorialLight" size="spacious"><a href="tel:+923461555542"><Phone/> Call to book</a></Button>
            <Button asChild variant="editorialLight" size="spacious"><a href="https://wa.me/923461555542" target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp to book</a></Button>
          </div>
          <p className="mt-5 text-[11px] uppercase tracking-[.18em] text-primary-foreground/60">Private • 1:1 • 30 Minutes</p>
        </div>
        <ConversationVisual/>
      </div>
    </section>


    {/* Problem + Desire */}
    <section className="bg-cream"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[1.15fr_.85fr] gap-14 lg:gap-24 items-center`}>
      <div>
        <Label n="01">You're not alone in this</Label>
        <h2 className="display text-5xl md:text-6xl">You don't have to know what's wrong <em className="font-normal text-sage-deep">before you ask for help.</em></h2>
        <p className="mt-8 text-muted-foreground leading-8 max-w-2xl">Maybe you're feeling stuck. Maybe something has been bothering you. Maybe you've thought about therapy but aren't sure if you actually need it.</p>
        <p className="mt-5 text-muted-foreground leading-8 max-w-2xl">You don't have to diagnose yourself first.</p>
        <p className="mt-4 font-display text-3xl italic">Start with a conversation.</p>
        <ul className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { icon: MessageCircle, t: "Talk it through", d: "Share what's currently on your mind." },
            { icon: Compass, t: "Get clarity", d: "Understand what kind of support may fit." },
            { icon: Map, t: "Know your next step", d: "Leave with a personalized direction." },
          ].map(p => <li key={p.t} className="border-t border-sage-deep/30 pt-4">
            <p.icon size={22} strokeWidth={1.4} className="text-sage-deep"/>
            <h3 className="font-display text-2xl mt-3">{p.t}</h3>
            <p className="text-sm text-muted-foreground leading-6 mt-1">{p.d}</p>
          </li>)}
        </ul>
        <Button asChild variant="editorial" size="spacious" className="mt-10"><a href="https://wa.me/923461555542" target="_blank" rel="noreferrer"><MessageCircle/> Book via WhatsApp</a></Button>
      </div>
      <figure className="relative aspect-square max-w-md w-full mx-auto bg-background overflow-hidden" aria-label="Illustration of a person sitting quietly, thinking">
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full text-foreground" aria-hidden="true">
          <circle cx="290" cy="110" r="60" fill="var(--color-sage)" opacity=".2"/>
          <path d="M120 120 q20 -25 45 -10 M260 70 q15 -20 35 -5" stroke="currentColor" strokeOpacity=".25" strokeWidth="2" fill="none"/>
          <rect x="70" y="250" width="200" height="70" rx="16" fill="currentColor" opacity=".1"/>
          <circle cx="165" cy="150" r="28" fill="currentColor" opacity=".85"/>
          <path d="M125 260 C120 200 140 185 165 185 C195 185 210 205 205 260 Z" fill="var(--color-sage)" opacity=".9"/>
          <path d="M185 205 C205 200 205 175 190 165" stroke="var(--color-sage)" strokeWidth="12" strokeLinecap="round" fill="none"/>
          <rect x="280" y="230" width="34" height="34" rx="4" fill="currentColor" opacity=".25"/>
          <path d="M290 230 q5 -12 18 -10" stroke="currentColor" strokeOpacity=".4" strokeWidth="2" fill="none"/>
          <line x1="0" y1="320" x2="400" y2="320" stroke="currentColor" strokeOpacity=".2"/>
          <circle cx="215" cy="115" r="4" fill="currentColor" opacity=".4"/><circle cx="230" cy="98" r="6" fill="currentColor" opacity=".35"/><circle cx="250" cy="80" r="9" fill="currentColor" opacity=".3"/>
        </svg>
        <figcaption className="absolute bottom-6 left-0 right-0 text-center font-display italic text-xl text-muted-foreground">“I'm not sure what I need.”</figcaption>
      </figure>
    </div></section>

    {/* What happens */}
    <section className="bg-surface"><div className={`${wrap} py-20 md:py-28`}>
      <Label n="02">What exactly do I get?</Label>
      <h2 className="display text-5xl md:text-6xl max-w-4xl">What happens in your <em className="font-normal text-sage-deep">30-minute Clarity Session?</em></h2>
      <ol className="mt-16 grid md:grid-cols-3 gap-6 md:gap-0 items-stretch">{[
        { icon: MessageCircle, t: "Talk", d: "Tell us what's going on." },
        { icon: Compass, t: "Understand", d: "Explore what kind of support may be appropriate." },
        { icon: Map, t: "Get direction", d: "Receive personalized guidance toward a possible next step." },
      ].map((s, i) => <li key={s.t} className="relative flex md:flex-col items-start gap-5 md:pr-10">
        <div className="flex items-center w-full gap-4">
          <span className="size-16 shrink-0 rounded-full bg-background border border-sage-deep/40 flex items-center justify-center"><s.icon size={26} strokeWidth={1.3} className="text-sage-deep"/></span>
          {i < 2 && <span className="hidden md:flex flex-1 items-center text-sage-deep"><span className="h-px flex-1 bg-sage-deep/40"/><ArrowRight size={18}/></span>}
        </div>
        <div>
          <p className="text-xs uppercase tracking-[.15em] text-muted-foreground">0{i+1} — {s.t}</p>
          <p className="font-display text-2xl mt-2 leading-snug">{s.d}</p>
        </div>
      </li>)}</ol>
      <div className="mt-16 border-t border-border pt-10">
        <h3 className="eyebrow text-sage-deep mb-5">Your possible next step</h3>
        <ul className="flex flex-wrap gap-3">{["Self-Help", "Short-Term Counseling", "Structured Program", "EMDR", "Referral"].map(o =>
          <li key={o} className="flex items-center gap-2 border border-sage-deep/30 bg-background px-4 py-2 text-sm"><Check size={14} className="text-sage-deep"/>{o}</li>)}</ul>
      </div>
      <Button asChild variant="editorial" size="spacious" className="mt-12"><a href="tel:+923461555542"><Phone/> Call to book</a></Button>
    </div></section>

    {/* New mechanism */}
    <section className="bg-primary text-primary-foreground"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-24 items-center`}>
      <div><p className="eyebrow text-sage mb-6">03 — Why this offer?</p><h2 className="display text-5xl md:text-6xl">You don't have to commit to long-term therapy to <em className="font-normal text-sage">take the first step.</em></h2>
        <p className="mt-8 text-primary-foreground/75 leading-8 max-w-md">The First Step Clarity Session is designed for people who aren't sure what kind of support they need.</p>
        <p className="mt-4 text-primary-foreground/75 leading-8 max-w-md">Instead of trying to figure it all out yourself, you can start with one focused conversation.</p></div>
      <div className="w-full max-w-md mx-auto lg:ml-auto">
        <p className="eyebrow text-primary-foreground/60 mb-4">Instead of</p>
        <ul className="space-y-3">{["Do I need therapy?", "What's wrong with me?", "Who should I see?", "Where do I start?"].map(q =>
          <li key={q} className="border border-primary-foreground/20 px-5 py-3 font-display text-xl italic text-primary-foreground/70">“{q}”</li>)}</ul>
        <div className="flex flex-col items-center my-5 text-sage"><ArrowDown size={28} strokeWidth={1.4}/><span className="eyebrow mt-2">Start here</span></div>
        <div className="bg-primary-foreground text-primary p-7 text-center">
          <Clock size={24} className="mx-auto text-sage-deep"/>
          <p className="font-display text-3xl mt-3">30-Minute Clarity Session</p>
        </div>
      </div>
    </div></section>

    {/* Trust */}
    <section className="bg-lavender"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[1.05fr_.95fr] gap-14 lg:gap-24 items-center`}>
      <div>
        <Label n="04">Who am I talking to?</Label>
        <h2 className="display text-5xl md:text-7xl">Meet Dr. Halima <em className="font-normal text-sage-deep">Sadia Qureshi.</em></h2>
        <p className="mt-5 font-display text-2xl">Consultant Clinical Psychologist</p>
        <p className="text-sm text-muted-foreground">Psychologists Hub — Islamabad</p>
        <p className="mt-7 text-muted-foreground leading-8 max-w-xl">Dr. Halima Sadia Qureshi is a Consultant Clinical Psychologist at Psychologists Hub.</p>
        <p className="mt-4 text-muted-foreground leading-8 max-w-xl">Psychologists Hub provides psychological assessment and therapy services, including trauma therapy, EMDR, CBT, anxiety and mood-related support, stress management and online/in-clinic sessions.</p>
        <div className="mt-8"><ContactButtons/></div>
      </div>
      <figure className="w-full max-w-md mx-auto lg:ml-auto">
        <div className="relative aspect-[4/5] bg-background overflow-hidden"><img src={drPhoto.url} alt="Dr. Halima Sadia Qureshi, Consultant Clinical Psychologist at Psychologists Hub Islamabad" className="absolute inset-0 w-full h-full object-cover"/></div>
        <figcaption className="mt-4 text-center text-[11px] uppercase tracking-[.18em] text-muted-foreground">Professional • Private • 1:1</figcaption>
      </figure>
    </div></section>

    {/* Objections */}
    <section className="bg-cream"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[.8fr_1.2fr] gap-14 lg:gap-24`}>
      <div><Label n="05">Common questions</Label><h2 className="display text-5xl md:text-6xl">Still not sure if this is <em className="font-normal text-sage-deep">for you?</em></h2></div>
      <div className="border-t border-border">{objections.map((f) => <details key={f.q} className="group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-display text-2xl text-left"><span>{f.q}</span><span aria-hidden="true" className="text-sage-deep transition-transform group-open:rotate-45">+</span></summary><p className="pb-6 pr-10 text-muted-foreground leading-7">{f.a}</p></details>)}</div>
    </div></section>

    {/* Final offer */}
    <section className="hero-field text-primary-foreground"><div className={`${wrap} py-24 md:py-32 relative z-10`}>
      <div className="text-center max-w-3xl mx-auto">
        <p className="eyebrow text-sage mb-6">First Step Clarity Session</p>
        <h2 className="display text-[clamp(3rem,6.5vw,6.5rem)]">Start with <span className="hero-word">one conversation.</span></h2>
        <p className="mt-6 text-sm uppercase tracking-[.18em] text-primary-foreground/80">30 Minutes • 1:1 • PKR 900</p>
        <p className="mt-6 font-display text-2xl md:text-3xl text-primary-foreground/90">One conversation to understand what you're carrying — and what could help.</p>
      </div>
      <p className="eyebrow text-sage text-center mt-16 mb-6">Choose how you'd like to book</p>
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center max-w-4xl mx-auto">
        <div className="border border-primary-foreground/25 bg-primary-foreground/5 p-8 text-center">
          <Phone className="mx-auto text-sage" size={28} strokeWidth={1.4}/>
          <h3 className="font-display text-3xl mt-3">Call now</h3>
          <p className="text-sm text-primary-foreground/70 mt-2">Speak directly with Psychologists Hub</p>
          <Button asChild variant="editorialLight" size="spacious" className="mt-6"><a href="tel:+923461555542"><Phone/> Call to book</a></Button>
        </div>
        <span className="eyebrow text-primary-foreground/60 text-center">or</span>
        <div className="border border-primary-foreground/25 bg-primary-foreground/5 p-8 text-center">
          <MessageCircle className="mx-auto text-sage" size={28} strokeWidth={1.4}/>
          <h3 className="font-display text-3xl mt-3">WhatsApp</h3>
          <p className="text-sm text-primary-foreground/70 mt-2">Message us and schedule your session</p>
          <Button asChild variant="editorialLight" size="spacious" className="mt-6"><a href="https://wa.me/923461555542" target="_blank" rel="noreferrer"><MessageCircle/> Book via WhatsApp</a></Button>
        </div>
      </div>
      <div className="mt-14 text-center text-sm text-primary-foreground/75">
        <p className="eyebrow text-sage mb-3">Contact</p>
        <p className="flex flex-wrap justify-center gap-x-8 gap-y-2"><a href="tel:+923315579476" className="hover:text-sage">+92-331-5579476</a><a href="tel:+923461555542" className="hover:text-sage">+92-346-1555542</a></p>
      </div>
    </div></section>
  </main>;
}
