import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { ConsultationBand, PageIntro, SectionHeading } from "@/components/site-chrome";

export const Route = createFileRoute("/events")({ head: () => ({ meta: [
  { title: "Events & Mental Health Workshops | Psychologists Hub" }, { name: "description", content: "Explore past mental health workshops, workplace trainings and community events from Psychologists Hub in Islamabad." },
  { property: "og:title", content: "Events & Workshops | Psychologists Hub" }, { property: "og:description", content: "Sharing knowledge and making mental health conversations part of everyday life." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Events });

const events = [
  { date: "23 Dec 2025", category: "Corporate training", title: "Stress management at Mira Power Limited", text: "A six-hour training session in Islamabad exploring workplace stress, emotional awareness, resilience, and practical coping strategies." },
  { date: "12 Feb 2024", category: "University seminar", title: "Positive teacher–student relationships", text: "An interactive seminar at IBADAAT University, Islamabad, focused on communication, empathy, trust, and connection in education." },
];

function Events() { return <main><PageIntro label="Events / 05" title="Conversations that move us forward." description="Workshops, trainings, and community moments that make mental wellbeing part of the conversation."/>
  <section className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 py-20 md:py-28"><SectionHeading label="From our community" title={<>Learning, together.</>} aside="A look at some of the conversations and learning experiences we’ve shared."/><div className="mt-16 border-t border-border">{events.map((event,i)=><article key={event.title} className="py-9 md:py-12 border-b border-border grid md:grid-cols-[.45fr_1.3fr_.8fr] gap-5 md:gap-12"><div><span className="eyebrow text-sage-deep">0{i+1} / Past event</span><div className="flex items-center gap-2 mt-5 text-sm text-muted-foreground"><CalendarDays size={16}/>{event.date}</div></div><h3 className="font-display text-4xl md:text-5xl max-w-xl">{event.title}</h3><div><p className="eyebrow text-sage-deep mb-4">{event.category}</p><p className="text-sm leading-7 text-muted-foreground">{event.text}</p></div></article>)}</div></section>
  <section className="bg-surface"><div className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 py-20 md:py-24 flex flex-col md:flex-row justify-between gap-8 md:items-end"><div><p className="eyebrow text-sage-deep mb-6">Bring the conversation to you</p><h2 className="display text-5xl md:text-6xl max-w-2xl">Let’s create space for <em className="font-normal">wellbeing.</em></h2></div><Link to="/contact" className="inline-flex items-center gap-3 text-sm font-semibold border-b border-primary pb-2 self-start md:self-auto shrink-0">Get in touch <ArrowUpRight size={17}/></Link></div></section><ConsultationBand/></main>; }