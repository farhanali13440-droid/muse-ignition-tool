import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, MessageCircle, Compass, Map, Phone, ShieldCheck, Clock, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  { q: "What if my problem isn't “serious enough”?", a: "There's no threshold. If something is on your mind, it's worth talking about — that's what this session is for." },
  { q: "Do I need to know what's wrong before booking?", a: "Not at all. You only need to come as you are. Understanding it is part of the session." },
  { q: "Will I be pushed into ongoing therapy?", a: "No. There's no obligation. You'll get a recommendation, and you decide if and when to continue." },
  { q: "Is it confidential?", a: "Yes. Everything you share is strictly private and never shared without your consent." },
  { q: "Can I attend online?", a: "Yes. Sessions are available in person at our Islamabad office or securely online, wherever you are." },
  { q: "Who will I be speaking with?", a: "Dr. Halima S. Qureshi, Clinical Psychologist and founder of Psychologists Hub." },
];

function ConversationVisual() {
  return <figure className="relative w-full max-w-[520px] mx-auto lg:ml-auto" aria-label="Illustration of a calm, friendly conversation between a psychologist and a client">
    <div className="relative aspect-[4/5] bg-primary-foreground/[.06] border border-primary-foreground/15 overflow-hidden">
      <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" role="img" aria-hidden="true">
        {/* window light */}
        <rect x="250" y="40" width="110" height="150" fill="var(--color-sage)" opacity=".18"/>
        <line x1="305" y1="40" x2="305" y2="190" stroke="currentColor" strokeOpacity=".2"/>
        {/* plant */}
        <path d="M200 330 C190 280 170 260 150 250 M200 330 C205 280 225 255 250 245 M200 330 C200 290 200 270 200 240" stroke="var(--color-sage)" strokeWidth="3" fill="none" opacity=".8"/>
        <rect x="185" y="325" width="30" height="40" rx="3" fill="currentColor" opacity=".25"/>
        {/* client (left) */}
        <rect x="30" y="300" width="130" height="120" rx="18" fill="currentColor" opacity=".12"/>
        <circle cx="95" cy="200" r="30" fill="currentColor" opacity=".85"/>
        <path d="M50 330 C50 260 70 240 95 240 C125 240 145 265 140 330 Z" fill="var(--color-sage)" opacity=".9"/>
        {/* psychologist (right) */}
        <rect x="240" y="300" width="130" height="120" rx="18" fill="currentColor" opacity=".12"/>
        <path d="M275 205 C275 170 335 170 335 205 L338 245 L272 245 Z" fill="currentColor" opacity=".55"/>
        <circle cx="305" cy="200" r="28" fill="currentColor" opacity=".85"/>
        <path d="M260 330 C255 265 275 240 305 240 C330 240 352 260 350 330 Z" fill="currentColor" opacity=".35"/>
        <rect x="262" y="290" width="40" height="28" rx="2" fill="currentColor" opacity=".6"/>
        {/* speech */}
        <path d="M130 120 h80 a14 14 0 0 1 14 14 v20 a14 14 0 0 1 -14 14 h-60 l-14 14 v-14 h-6 a14 14 0 0 1 -14 -14 v-20 a14 14 0 0 1 14 -14z" fill="currentColor" opacity=".12"/>
        <circle cx="152" cy="144" r="4" fill="currentColor" opacity=".7"/><circle cx="170" cy="144" r="4" fill="currentColor" opacity=".7"/><circle cx="188" cy="144" r="4" fill="currentColor" opacity=".7"/>
        <line x1="0" y1="420" x2="400" y2="420" stroke="currentColor" strokeOpacity=".2"/>
      </svg>
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
      <Label n="02">What happens in the session</Label>
      <h2 className="display text-5xl md:text-7xl max-w-4xl">Talk <span className="text-sage-deep">→</span> Understand <span className="text-sage-deep">→</span> <em className="font-normal text-sage-deep">Direction.</em></h2>
      <ol className="mt-16 grid md:grid-cols-3 gap-10">{flow.map((s, i) => <li key={s.title} className="number-rule pt-6 relative">
        <div className="flex justify-between items-center"><span className="text-xs text-muted-foreground">0{i+1}</span><s.icon size={28} strokeWidth={1.2} className="text-sage-deep"/></div>
        <h3 className="font-display text-4xl mt-10 flex items-center gap-3">{s.title}{i < flow.length - 1 && <ArrowRight size={20} className="text-sage-deep hidden md:block"/>}</h3>
        <p className="text-sm text-muted-foreground leading-7 mt-3">{s.text}</p>
      </li>)}</ol>
      <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-2"><Clock size={16} className="text-sage-deep"/>30 minutes, one-to-one</span>
        <span className="flex items-center gap-2"><Monitor size={16} className="text-sage-deep"/>In Islamabad or online</span>
        <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-sage-deep"/>Strictly confidential</span>
      </div>
    </div></section>

    {/* New mechanism */}
    <section className="bg-primary text-primary-foreground"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[.9fr_1.1fr] gap-14 lg:gap-24`}>
      <div><p className="eyebrow text-sage mb-6">03 — A different first step</p><h2 className="display text-5xl md:text-7xl">Why start with a <em className="font-normal text-sage">Clarity Session?</em></h2>
        <p className="mt-8 text-primary-foreground/75 leading-8 max-w-md">Most people either keep putting support off, or jump into something that isn't the right fit. The Clarity Session is the step in between: understanding first, decisions after.</p></div>
      <div className="grid sm:grid-cols-2 gap-px bg-primary-foreground/15 self-start">
        <div className="bg-primary p-8"><h3 className="eyebrow text-primary-foreground/60 mb-5">The usual way</h3><ul className="space-y-3 text-primary-foreground/70">{["Guessing what kind of help you need", "Committing before you understand", "Waiting until things feel worse"].map(t => <li key={t}>— {t}</li>)}</ul></div>
        <div className="bg-primary p-8"><h3 className="eyebrow text-sage mb-5">The Clarity Session</h3><ul className="space-y-3">{["Understand your situation first", "Low commitment — one conversation", "A clear, professional next step"].map(t => <li key={t} className="flex gap-3"><Check size={18} className="text-sage mt-1 shrink-0"/>{t}</li>)}</ul></div>
      </div>
    </div></section>

    {/* Trust */}
    <section className="bg-lavender"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[.8fr_1.2fr] gap-14 lg:gap-24 items-center`}>
      <div className="relative aspect-[4/5] max-w-md bg-background flex items-center justify-center overflow-hidden"><div className="absolute size-[80%] rounded-full border border-sage-deep/30"/><div className="absolute size-[58%] rounded-full border border-sage-deep/30"/><div className="relative text-center"><p className="font-display text-8xl text-sage-deep">HQ</p><p className="eyebrow text-muted-foreground mt-4">Clinical Psychologist</p></div></div>
      <div><Label n="04">Your psychologist</Label><h2 className="display text-5xl md:text-7xl">Meet Dr. Halima <em className="font-normal text-sage-deep">Sadia Qureshi.</em></h2>
        <p className="mt-8 text-muted-foreground leading-8">Dr. Halima S. Qureshi is a Clinical Psychologist in Islamabad and the founder of Psychologists Hub, with over a decade of experience across clinical, educational and corporate settings.</p>
        <p className="mt-5 text-muted-foreground leading-8">Specialising in trauma-focused recovery, she integrates evidence-based approaches — including CBT, NLP and Hypnotherapy — with advanced certifications in EMDR and IFS-informed practice.</p>
        <div className="mt-8 flex flex-wrap gap-2">{["10+ years experience", "CBT", "EMDR", "IFS-informed", "NLP", "Trauma-focused"].map(t => <span key={t} className="text-xs uppercase tracking-[.12em] border border-foreground/25 px-3 py-2">{t}</span>)}</div></div>
    </div></section>

    {/* Objections */}
    <section className="bg-cream"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[.8fr_1.2fr] gap-14 lg:gap-24`}>
      <div><Label n="05">Still not sure?</Label><h2 className="display text-5xl md:text-7xl">Still <em className="font-normal text-sage-deep">not sure?</em></h2><p className="mt-8 text-muted-foreground leading-8 max-w-md">That's completely normal. Here are the questions people ask most before booking.</p></div>
      <div className="border-t border-border">{objections.map((f) => <details key={f.q} className="group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-display text-2xl text-left"><span>{f.q}</span><span aria-hidden="true" className="text-sage-deep transition-transform group-open:rotate-45">+</span></summary><p className="pb-6 pr-10 text-muted-foreground leading-7">{f.a}</p></details>)}</div>
    </div></section>

    {/* Final offer */}
    <section className="hero-field text-primary-foreground"><div className={`${wrap} py-24 md:py-32 relative z-10 grid lg:grid-cols-[1.2fr_.8fr] gap-14 items-center`}>
      <div><p className="eyebrow text-sage mb-8">Your first step</p>
        <h2 className="display text-[clamp(3.2rem,7vw,7rem)]">Call or WhatsApp <span className="hero-word">to book.</span></h2>
        <p className="mt-8 text-primary-foreground/75 max-w-lg leading-8">You don't have to have it all figured out. Reach out and we'll find a time that works for you.</p></div>
      <div className="border border-primary-foreground/25 p-8 bg-primary-foreground/5">
        <p className="eyebrow text-sage">First Step Clarity Session</p>
        <p className="font-display text-6xl mt-3">PKR 900</p>
        <ul className="mt-5 space-y-2 text-sm text-primary-foreground/75">{["30 minutes, one-to-one", "In person in Islamabad or online", "Strictly confidential", "No obligation to continue"].map(t => <li key={t} className="flex gap-3"><Check size={16} className="text-sage mt-0.5 shrink-0"/>{t}</li>)}</ul>
        <div className="mt-7"><ContactButtons light/></div>
        <p className="text-xs text-primary-foreground/55 mt-4">+92 346 1555542</p>
      </div>
    </div></section>
  </main>;
}
