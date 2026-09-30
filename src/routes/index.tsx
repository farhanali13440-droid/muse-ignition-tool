import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { BookingLink, ConsultationBand, SectionHeading } from "@/components/site-chrome";
import { services, values } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Psychologists Hub | Therapy & Mental Health Care in Islamabad" },
    { name: "description", content: "Compassionate, confidential therapy in Islamabad and online. Explore individual therapy, assessments and workplace wellbeing with Psychologists Hub." },
    { property: "og:title", content: "Psychologists Hub | Therapy & Mental Health Care in Islamabad" },
    { property: "og:description", content: "A thoughtful space for feeling better. Confidential therapy in Islamabad and online." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return <main>
    <section className="hero-field text-primary-foreground min-h-[660px] md:min-h-[680px] flex items-center">
      <div className="hero-arc" aria-hidden="true" />
      <div className="max-w-[1500px] mx-auto w-full px-5 md:px-10 xl:px-14 py-24 md:py-20 relative z-10">
        <div className="flex gap-12 xl:gap-24 items-start">
          <div className="hidden xl:block self-stretch pt-2"><span className="side-index eyebrow text-sage/75">Psychologists Hub · Islamabad</span></div>
          <div className="max-w-[970px] reveal">
            <p className="eyebrow text-sage mb-9">A space to feel like yourself again</p>
            <h1 className="display text-[clamp(4.4rem,10.3vw,10.7rem)] leading-[.85]">A little space<br/>to <span className="hero-word">feel better.</span></h1>
            <div className="mt-10 md:mt-14 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
              <p className="text-sm md:text-base leading-7 text-primary-foreground/75 max-w-[355px]">Compassionate, confidential psychological care—here in Islamabad and online, wherever life finds you.</p>
              <BookingLink light>Book an appointment</BookingLink>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-16 pt-5 border-t border-primary-foreground/20 flex items-center justify-between text-[11px] uppercase tracking-[.15em] text-primary-foreground/60"><span>Care for every chapter</span><span className="flex gap-2 items-center">Explore below <ArrowDown size={14}/></span></div>
      </div>
    </section>

    <section className="bg-cream"><div className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 py-20 md:py-28 grid md:grid-cols-[.8fr_1.2fr] gap-8 md:gap-24 items-start">
      <div><p className="eyebrow text-sage-deep">Welcome to Psychologists Hub</p><div className="mt-8 w-20 h-px bg-sage-deep"/></div>
      <div><h2 className="display text-5xl md:text-6xl xl:text-[5.5rem]">Taking care of your mind is a <em className="font-normal text-sage-deep">beautiful beginning.</em></h2><div className="mt-9 flex flex-col md:flex-row gap-8 md:gap-14 items-start"><p className="text-muted-foreground leading-8 max-w-xl">Life can feel heavy sometimes. You deserve a place to pause, be heard, and explore what comes next. Our female-led practice offers thoughtful, evidence-informed support in a setting grounded in empathy and privacy.</p><Link to="/about" className="shrink-0 inline-flex items-center gap-3 text-sm font-semibold border-b border-primary pb-2 hover:text-sage-deep">Get to know us <ArrowUpRight size={17}/></Link></div></div>
    </div></section>

    <section className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 py-20 md:py-28"><SectionHeading label="How we can help" title={<>Support for the <em className="font-normal text-sage-deep">whole you.</em></>} aside="Every journey is different. We’ll meet you where you are and find a way forward together."/>
      <div className="mt-14 md:mt-20 grid md:grid-cols-2 xl:grid-cols-3 border-t border-l border-border">
        {services.map((item, i) => <Link to="/services" key={item.title} className="service-card border-r border-b border-border p-7 md:p-9 min-h-[260px] flex flex-col justify-between group"><div className="flex justify-between items-start"><span className="text-xs text-muted-foreground">0{i+1} / 06</span><item.icon size={26} strokeWidth={1.2} className="text-sage-deep"/></div><div><div className="flex items-center justify-between gap-2"><h3 className="font-display text-[32px] leading-none">{item.title}</h3><ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"/></div><p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p></div></Link>)}
      </div><div className="mt-8 text-right"><Link to="/services" className="inline-flex items-center gap-3 text-sm font-semibold border-b border-primary pb-2">Explore all services <ArrowRight size={17}/></Link></div>
    </section>

    <section className="bg-surface"><div className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 py-20 md:py-28 grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center"><div><p className="eyebrow text-sage-deep mb-8">Therapy, on your terms</p><h2 className="display text-6xl md:text-7xl xl:text-[6rem]">The right support,<br/><em className="font-normal">wherever you are.</em></h2><p className="text-muted-foreground leading-8 max-w-lg mt-8 mb-9">Meaningful connection doesn’t depend on being in the same room. Meet with a psychologist online from a space that feels comfortable to you.</p><Link to="/online-therapy" className="inline-flex items-center gap-3 text-sm font-semibold border-b border-primary pb-2">Explore online therapy <ArrowUpRight size={17}/></Link></div><div className="relative min-h-[390px] md:min-h-[520px] bg-sage overflow-hidden flex items-center justify-center"><div className="absolute border border-primary/25 rounded-full size-[420px] md:size-[550px] translate-x-20 -translate-y-24"/><div className="absolute border border-primary/25 rounded-full size-[340px] md:size-[450px] translate-x-20 -translate-y-24"/><div className="absolute border border-primary/25 rounded-full size-[260px] md:size-[350px] translate-x-20 -translate-y-24"/><div className="relative bg-background w-[66%] max-w-[330px] aspect-[.82] p-8 flex flex-col justify-between shadow-xl"><span className="text-xs uppercase tracking-[.15em] text-sage-deep">A quieter moment</span><span className="font-display italic text-5xl md:text-6xl leading-[.9]">Wherever<br/>you are,<br/>we’re here.</span><span className="flex items-center justify-between border-t border-border pt-4 text-xs uppercase tracking-[.1em]">Online care <MoveUpRight size={17}/></span></div></div></div></section>

    <section className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 py-20 md:py-28"><SectionHeading label="The way we care" title={<>It starts with <em className="font-normal text-sage-deep">feeling safe.</em></>}/><div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-16">{values.map((v,i)=><div key={v.title} className="number-rule pt-6"><div className="flex justify-between items-start"><span className="text-xs text-muted-foreground">0{i+1}</span><v.icon size={28} strokeWidth={1.2} className="text-sage-deep"/></div><h3 className="font-display text-3xl mt-16">{v.title}</h3><p className="text-sm text-muted-foreground leading-7 mt-4 max-w-xs">{v.description}</p></div>)}</div></section>
    <ConsultationBand />
  </main>;
}