import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BriefcaseBusiness, HeartHandshake, Presentation, UsersRound } from "lucide-react";
import { ConsultationBand, PageIntro, SectionHeading } from "@/components/site-chrome";

export const Route = createFileRoute("/corporate-services")({ head: () => ({ meta: [
  { title: "Corporate Mental Health & Workplace Wellness | Psychologists Hub" }, { name: "description", content: "Workplace wellbeing programmes, employee counselling, stress management workshops and leadership training from Psychologists Hub in Pakistan." },
  { property: "og:title", content: "Corporate Services | Psychologists Hub" }, { property: "og:description", content: "Thoughtful workplace wellbeing, employee counselling and mental health training for organisations." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Corporate });

const offers = [
  { icon: HeartHandshake, title: "Employee counselling", text: "Confidential one-to-one support for employees, onsite or virtually." },
  { icon: Presentation, title: "Workshops & training", text: "Interactive sessions on stress, resilience, communication, emotional intelligence, and more." },
  { icon: UsersRound, title: "Leadership & HR support", text: "Helping managers create more psychologically aware and supportive teams." },
  { icon: BriefcaseBusiness, title: "Wellness retreats", text: "Tailored experiences for team renewal, connection, and wellbeing." },
];

function Corporate() { return <main><PageIntro label="Corporate services / 04" title="Better workplaces begin with people." description="Practical, people-centred mental health support for organisations that want their teams to truly thrive."/>
  <section className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 py-20 md:py-28"><SectionHeading label="Working better together" title={<>Wellbeing is everyone’s <em className="font-normal text-sage-deep">business.</em></>} aside="We partner with organisations to build healthier, more resilient workplace cultures."/><div className="grid md:grid-cols-2 mt-16 border-t border-l border-border">{offers.map((offer,i)=><div key={offer.title} className="border-r border-b border-border p-8 md:p-10 min-h-[260px] flex flex-col justify-between"><div className="flex justify-between"><span className="text-xs text-muted-foreground">0{i+1} / 04</span><offer.icon size={29} strokeWidth={1.2} className="text-sage-deep"/></div><div><h3 className="font-display text-3xl md:text-4xl">{offer.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground max-w-md">{offer.text}</p></div></div>)}</div></section>
  <section className="bg-surface"><div className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 py-20 md:py-28 grid md:grid-cols-2 gap-16"><div><p className="eyebrow text-sage-deep mb-7">A considered approach</p><h2 className="display text-5xl md:text-7xl">Support that fits your <em className="font-normal">organisation.</em></h2></div><div className="flex flex-col justify-end"><p className="text-muted-foreground leading-8">From burnout prevention and stress management to stronger communication and emotional intelligence, our programmes are shaped around the needs of your people and your workplace.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold border-b border-primary pb-2 self-start">Discuss your needs <ArrowUpRight size={17}/></Link></div></div></section><ConsultationBand/></main>; }