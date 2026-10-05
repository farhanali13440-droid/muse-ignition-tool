import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Check, X, Compass, MessageCircle, Map, CalendarCheck, MapPin, Monitor, ShieldCheck, Clock, Wallet, Globe, Phone } from "lucide-react";
import { BookingLink } from "@/components/site-chrome";
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

const steps = [
  { icon: CalendarCheck, title: "Book a time", text: "Choose a slot that suits you through our booking calendar — in person or online." },
  { icon: MessageCircle, title: "Talk it through", text: "Share what's been happening at your own pace. Dr. Qureshi listens, asks, and helps make sense of it." },
  { icon: Compass, title: "Get clarity", text: "Understand what you may be experiencing and which kind of support could genuinely help." },
  { icon: Map, title: "Leave with a plan", text: "Walk away with a clear, practical next step — whether that's therapy, an assessment, or something else." },
];

const audience = [
  "You feel anxious, low, or overwhelmed but can't name why",
  "You've never been to therapy and don't know what to expect",
  "You're struggling with relationships, family, or work stress",
  "Something difficult happened and it still weighs on you",
  "You've tried therapy before and want a fresh, clearer start",
  "You're overseas and want support from a psychologist you can trust",
];

const takeaways = [
  "A clearer understanding of what you're going through",
  "An honest view of which approach may suit you — such as CBT, EMDR or IFS-informed work",
  "A recommended next step and what it would involve",
  "Space to ask anything about therapy, confidentiality and cost",
];

const faqs = [
  { q: "Is the Clarity Session confidential?", a: "Yes. All sessions at Psychologists Hub are strictly private, and your personal information is never shared without your consent." },
  { q: "Do I need to know what's wrong before booking?", a: "Not at all. That's exactly what this session is for — you only need to come as you are." },
  { q: "Can I attend online?", a: "Yes. Sessions are available in person at our Islamabad office or securely online, wherever you are in Pakistan or abroad." },
  { q: "How much does a session cost?", a: "Our standard session fee is 6,000 PKR for clients in Pakistan and $30 USD for overseas clients." },
  { q: "Who will I be speaking with?", a: "Dr. Halima S. Qureshi, Clinical Psychologist and founder of Psychologists Hub." },
  { q: "What happens after the session?", a: "There is no obligation. You'll leave with a recommendation, and you decide if and when to continue." },
];

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

    {/* Problem */}
    <section className="bg-cream"><div className={`${wrap} py-20 md:py-28`}>
      <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-14 lg:gap-24 items-center">
        <div>
          <Label n="01">Where to start</Label>
          <h2 className="display text-5xl md:text-7xl">Sometimes, you know something isn't right — <em className="font-normal text-sage-deep">but you don't know where to start.</em></h2>
          <p className="mt-8 text-muted-foreground leading-8 max-w-2xl">You may have something on your mind that you haven't been able to make sense of. Maybe you've been thinking about talking to someone, but you're not sure whether you need therapy. Maybe you simply want to understand what's going on before deciding what to do next.</p>
          <p className="mt-5 font-display text-3xl italic">You don't have to figure it all out alone.</p>
          <p className="mt-5 text-muted-foreground leading-8 max-w-2xl">The First Step Clarity Session gives you a private space to talk about what's going on and understand what kind of support may fit your situation.</p>
        </div>
        <div aria-hidden="true" className="relative aspect-square max-w-md w-full mx-auto bg-background flex items-center justify-center overflow-hidden">
          <div className="absolute size-[82%] rounded-full border border-sage-deep/25"/>
          <div className="absolute size-[60%] rounded-full border border-sage-deep/25"/>
          <div className="absolute size-[38%] rounded-full bg-lavender"/>
          <span className="relative font-display text-9xl italic text-sage-deep">?</span>
          <p className="absolute bottom-6 left-0 right-0 text-center font-display italic text-xl text-muted-foreground">“I don't know where to start.”</p>
        </div>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-10">{[
        { t: "Not sure if you need therapy?", d: "Start with a conversation instead of trying to figure everything out yourself." },
        { t: "Not sure what kind of support fits?", d: "Talk through your situation with a professional." },
        { t: "Not sure what to do next?", d: "Leave with a clearer direction." },
      ].map(p => <div key={p.t} className="number-rule pt-6"><h3 className="font-display text-3xl">{p.t}</h3><p className="text-sm text-muted-foreground leading-7 mt-3">{p.d}</p></div>)}</div>
    </div></section>

    {/* What */}
    <section className={`${wrap} py-20 md:py-28 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center`}>
      <div><Label n="02">What is it?</Label><h2 className="display text-5xl md:text-7xl">What is the <em className="font-normal text-sage-deep">Clarity Session?</em></h2></div>
      <div className="space-y-6 text-muted-foreground leading-8"><p>The First Step Clarity Session is a single, focused conversation with a clinical psychologist. It's designed for people who know they want support but aren't sure what kind.</p><p>Together, you'll look at what's been happening, what matters to you, and what support is most likely to help — so your next step is based on understanding, not guesswork.</p></div>
    </section>

    {/* How */}
    <section className="bg-surface"><div className={`${wrap} py-20 md:py-28`}>
      <Label n="03">How it works</Label><h2 className="display text-5xl md:text-7xl max-w-3xl">Four simple <em className="font-normal text-sage-deep">steps.</em></h2>
      <ol className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-10">{steps.map((s, i) => <li key={s.title} className="number-rule pt-6"><div className="flex justify-between"><span className="text-xs text-muted-foreground">Step 0{i+1}</span><s.icon size={28} strokeWidth={1.2} className="text-sage-deep"/></div><h3 className="font-display text-3xl mt-12">{s.title}</h3><p className="text-sm text-muted-foreground leading-7 mt-3">{s.text}</p></li>)}</ol>
    </div></section>

    {/* Who */}
    <section className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[.9fr_1.1fr] gap-14 lg:gap-24`}>
      <div><Label n="04">Who it's for</Label><h2 className="display text-5xl md:text-7xl">Who is this <em className="font-normal text-sage-deep">for?</em></h2><p className="mt-8 text-muted-foreground leading-8 max-w-md">If any of these feel familiar, this session is a gentle place to begin.</p></div>
      <ul className="border-t border-border">{audience.map(a => <li key={a} className="flex gap-5 py-5 border-b border-border"><Check size={20} className="text-leaf shrink-0 mt-1"/><span className="text-lg">{a}</span></li>)}</ul>
    </section>

    {/* Is / isn't */}
    <section className="bg-primary text-primary-foreground"><div className={`${wrap} py-20 md:py-28`}>
      <p className="eyebrow text-sage mb-6">05 — Honest expectations</p><h2 className="display text-5xl md:text-7xl max-w-3xl">What this session is — <em className="font-normal text-sage">and isn't.</em></h2>
      <div className="mt-16 grid md:grid-cols-2 gap-px bg-primary-foreground/15">
        <div className="bg-primary p-8 md:p-10"><h3 className="eyebrow text-sage mb-6">It is</h3><ul className="space-y-4">{["A confidential space to be heard", "A professional view of what may help", "A clear, practical next step", "Pressure-free — you decide what follows"].map(t => <li key={t} className="flex gap-4"><Check size={18} className="text-sage mt-1 shrink-0"/>{t}</li>)}</ul></div>
        <div className="bg-primary p-8 md:p-10"><h3 className="eyebrow text-primary-foreground/60 mb-6">It isn't</h3><ul className="space-y-4 text-primary-foreground/75">{["A full course of therapy", "Emergency or crisis care", "A commitment to ongoing sessions", "A place where you'll be judged"].map(t => <li key={t} className="flex gap-4"><X size={18} className="mt-1 shrink-0"/>{t}</li>)}</ul></div>
      </div>
      <p className="mt-8 text-sm text-primary-foreground/60">If you are in immediate danger, please contact your local emergency services.</p>
    </div></section>

    {/* Takeaway */}
    <section className={`${wrap} py-20 md:py-28 grid lg:grid-cols-2 gap-14 lg:gap-24`}>
      <div><Label n="06">Your takeaway</Label><h2 className="display text-5xl md:text-7xl">What you'll <em className="font-normal text-sage-deep">take away.</em></h2></div>
      <ol className="space-y-8">{takeaways.map((t, i) => <li key={t} className="flex gap-6"><span className="font-display text-5xl text-sage-deep leading-none">{i+1}</span><p className="text-lg leading-8 pt-2">{t}</p></li>)}</ol>
    </section>

    {/* Dr */}
    <section className="bg-lavender"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[.8fr_1.2fr] gap-14 lg:gap-24 items-center`}>
      <div className="relative aspect-[4/5] max-w-md bg-background flex items-center justify-center overflow-hidden"><div className="absolute size-[80%] rounded-full border border-sage-deep/30"/><div className="absolute size-[58%] rounded-full border border-sage-deep/30"/><div className="relative text-center"><p className="font-display text-8xl text-sage-deep">HQ</p><p className="eyebrow text-muted-foreground mt-4">Clinical Psychologist</p></div></div>
      <div><Label n="07">Your psychologist</Label><h2 className="display text-5xl md:text-7xl">Meet Dr. Halima <em className="font-normal text-sage-deep">Sadia Qureshi.</em></h2>
        <p className="mt-8 text-muted-foreground leading-8">Dr. Halima S. Qureshi is a Clinical Psychologist in Islamabad and the founder of Psychologists Hub, with over a decade of experience across clinical, educational and corporate settings.</p>
        <p className="mt-5 text-muted-foreground leading-8">Specialising in trauma-focused recovery, she integrates evidence-based approaches — including CBT, NLP and Hypnotherapy — with advanced certifications in EMDR and IFS-informed practice.</p>
        <div className="mt-8 flex flex-wrap gap-2">{["CBT", "EMDR", "IFS-informed", "NLP", "Hypnotherapy", "Trauma-focused"].map(t => <span key={t} className="text-xs uppercase tracking-[.12em] border border-foreground/25 px-3 py-2">{t}</span>)}</div></div>
    </div></section>

    {/* Why */}
    <section className={`${wrap} py-20 md:py-28`}>
      <Label n="08">Why begin here</Label><h2 className="display text-5xl md:text-7xl max-w-4xl">Why start with a <em className="font-normal text-sage-deep">Clarity Session?</em></h2>
      <div className="mt-16 grid md:grid-cols-3 gap-10">{[
        { t: "Less guesswork", d: "Avoid spending time and money on the wrong kind of support." },
        { t: "Low commitment", d: "One conversation, no obligation to continue." },
        { t: "Real results", d: "85% of our clients report reduced anxiety within six therapy sessions." },
      ].map(v => <div key={v.t} className="number-rule pt-6"><h3 className="font-display text-3xl">{v.t}</h3><p className="text-sm text-muted-foreground leading-7 mt-4">{v.d}</p></div>)}</div>
    </section>

    {/* Details */}
    <section className="bg-surface"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[.9fr_1.1fr] gap-14 lg:gap-24`}>
      <div><Label n="09">Session details</Label><h2 className="display text-5xl md:text-7xl">The <em className="font-normal text-sage-deep">details.</em></h2><div className="mt-10"><BookingLink>Book your session</BookingLink></div></div>
      <dl className="grid sm:grid-cols-2 border-t border-l border-border">{[
        { icon: Clock, k: "Format", v: "One-to-one session" },
        { icon: Monitor, k: "Where", v: "In person in Islamabad, or online" },
        { icon: Wallet, k: "Fee in Pakistan", v: "6,000 PKR" },
        { icon: Globe, k: "Overseas fee", v: "$30 USD" },
        { icon: ShieldCheck, k: "Privacy", v: "Strictly confidential" },
        { icon: CalendarCheck, k: "Booking", v: "Choose a time on our online calendar" },
      ].map(d => <div key={d.k} className="p-7 border-r border-b border-border bg-background"><d.icon size={22} strokeWidth={1.3} className="text-sage-deep"/><dt className="eyebrow text-muted-foreground mt-6">{d.k}</dt><dd className="font-display text-2xl mt-2">{d.v}</dd></div>)}</dl>
    </div></section>

    {/* Space */}
    <section className={`${wrap} py-20 md:py-28 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center`}>
      <div><Label n="10">Our space</Label><h2 className="display text-5xl md:text-7xl">Our space — <em className="font-normal text-sage-deep">Psychologists Hub.</em></h2><p className="mt-8 text-muted-foreground leading-8">Our Islamabad office offers a professional, private setting for in-person sessions. Prefer home? Secure online sessions connect you with us from anywhere in Pakistan or abroad.</p></div>
      <div className="bg-cream p-8 md:p-12"><MapPin size={28} strokeWidth={1.2} className="text-sage-deep"/><p className="font-display text-3xl mt-6 leading-tight">Office # M-1, Mezzanine Floor,<br/>Paris Business Center, Soan Garden,<br/>Islamabad, Pakistan</p><a href="https://maps.google.com/?q=Paris+Business+Center+Soan+Garden+Islamabad" target="_blank" rel="noreferrer" className="inline-block mt-8 text-sm font-semibold border-b border-primary pb-1">Open in Google Maps</a></div>
    </section>

    {/* FAQ */}
    <section className="bg-cream"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-[.8fr_1.2fr] gap-14 lg:gap-24`}>
      <div><Label n="11">FAQs</Label><h2 className="display text-5xl md:text-7xl">Questions, <em className="font-normal text-sage-deep">answered.</em></h2></div>
      <div className="border-t border-border">{faqs.map((f) => <details key={f.q} className="group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-display text-2xl text-left"><span>{f.q}</span><span aria-hidden="true" className="text-sage-deep transition-transform group-open:rotate-45">+</span></summary><p className="pb-6 pr-10 text-muted-foreground leading-7">{f.a}</p></details>)}</div>
    </div></section>

    {/* Final CTA */}
    <section className="hero-field text-primary-foreground"><div className={`${wrap} py-24 md:py-32 relative z-10 text-center`}>
      <p className="eyebrow text-sage mb-8">Your first step</p>
      <h2 className="display text-[clamp(3.4rem,8vw,8rem)] max-w-5xl mx-auto">Start with <span className="hero-word">one conversation.</span></h2>
      <p className="mt-8 text-primary-foreground/75 max-w-lg mx-auto leading-8">You don't have to have it all figured out. Book your Clarity Session and we'll find the way forward together.</p>
      <div className="mt-10 flex justify-center"><BookingLink light>Book your Clarity Session</BookingLink></div>
    </div></section>
  </main>;
}
