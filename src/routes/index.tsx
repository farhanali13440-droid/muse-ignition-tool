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

function Index() {
function Index() {
  return <main>
    {/* Hero */}
    <section className="hero-field text-primary-foreground min-h-[680px] flex items-center">
      <div className="hero-arc" aria-hidden="true"/>
      <div className={`${wrap} w-full py-24 relative z-10`}>
        <div className="max-w-[1120px] reveal">
          <p className="eyebrow text-sage mb-9">First Step Clarity Session</p>
          <h1 className="display text-[clamp(3.8rem,8vw,8rem)] leading-[.86]">Not sure what you <span className="hero-word">need right now?</span></h1>
          <p className="mt-9 font-display text-2xl md:text-3xl text-primary-foreground/90 max-w-3xl">One conversation to understand what you're carrying — and what could help.</p>
          <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-8 md:items-end">
            <p className="text-base leading-7 text-primary-foreground/75 max-w-[560px]">A private, 30-minute, one-to-one consultation with a Consultant Clinical Psychologist to help you understand your situation and identify a suitable next step.</p>
            <div className="border border-primary-foreground/25 p-6 md:min-w-[330px] bg-primary-foreground/5">
              <p className="eyebrow text-sage">First Step Clarity Session</p>
              <p className="font-display text-5xl mt-3">PKR 900</p>
              <p className="text-xs text-primary-foreground/65 mt-2">30 minutes · 1:1 · Private consultation</p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button asChild variant="editorialLight" size="spacious"><a href="tel:+923461555542"><Phone/> Call now</a></Button>
                <Button asChild variant="editorialLight" size="spacious"><a href="https://wa.me/923461555542" target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp</a></Button>
              </div>
              <p className="text-[11px] text-primary-foreground/55 mt-4">Prefer to talk? Call us. Prefer messaging? WhatsApp us.</p>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-5 border-t border-primary-foreground/20 flex flex-wrap gap-x-10 gap-y-3 text-[11px] uppercase tracking-[.15em] text-primary-foreground/60"><span>Confidential</span><span>Female-led practice</span><span>10+ years experience</span><span className="ml-auto flex gap-2 items-center">Scroll <ArrowDown size={14}/></span></div>
      </div>
    </section>


    {/* Problem + Desire */}
    <section className="bg-cream"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[1.15fr_.85fr] gap-14 lg:gap-24 items-center`}>
      <div>
        <Label n="01">You're not alone in this</Label>
        <h2 className="display text-5xl md:text-7xl">You don't have to know <em className="font-normal text-sage-deep">what's wrong.</em></h2>
        <p className="mt-8 text-muted-foreground leading-8 max-w-2xl">Maybe you've felt off for a while. Maybe you've thought about talking to someone, but you're not sure whether you need therapy — or what kind of support would even fit.</p>
        <p className="mt-5 text-muted-foreground leading-8 max-w-2xl">What you want is simple: to understand what's going on, and to know what to do next. That's exactly where the Clarity Session begins.</p>
        <p className="mt-6 font-display text-3xl italic">You just need to start the conversation.</p>
      </div>
      <div aria-hidden="true" className="relative aspect-square max-w-md w-full mx-auto bg-background flex items-center justify-center overflow-hidden">
        <div className="absolute size-[82%] rounded-full border border-sage-deep/25"/>
        <div className="absolute size-[60%] rounded-full border border-sage-deep/25"/>
        <div className="absolute size-[38%] rounded-full bg-lavender"/>
        <span className="relative font-display text-9xl italic text-sage-deep">?</span>
        <p className="absolute bottom-6 left-0 right-0 text-center font-display italic text-xl text-muted-foreground">“I don't know where to start.”</p>
      </div>
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
