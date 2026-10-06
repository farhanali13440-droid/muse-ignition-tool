import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/psychologists-hub-logo.webp.asset.json";

export const bookingUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ZyhQLcJqWKZrOjH0JbukyyXGnVTNbfAbDpIE3aRat2IZZIsgU_PR7AuRuT_n9XQ4nrRx8Oj";
export const phone = "+92 346 1555542";
export const email = "contact@psychologistshub.com.pk";

export function Logo({ light = false }: { light?: boolean }) {
  return <Link to="/" aria-label="Psychologists Hub home" className={`inline-flex items-center gap-3 shrink-0 ${light ? "text-primary-foreground" : "text-foreground"}`}>
    <span className={`flex items-center justify-center shrink-0 ${light ? "bg-background rounded-sm p-1.5 size-12" : "size-11"}`}>
      <img src={logoAsset.url} alt="" width={44} height={40} className="w-full h-full object-contain" />
    </span>
    <span className="font-display text-[21px] leading-[.8] font-semibold">Psychologists<br/><span className={`text-[18px] italic font-normal ${light ? "text-sage" : "text-leaf"}`}>Hub</span></span>
  </Link>;
}

export const sectionLinks = [
  ["#problem", "Is this for me?"],
  ["#session", "The session"],
  ["#approach", "Why start here"],
  ["#about", "Dr. Halima"],
  ["#faq", "FAQ"],
] as const;
const whatsapp = "https://wa.me/923461555542";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
    <div className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-14 h-[72px] md:h-[84px] flex items-center justify-between gap-6">
      <Logo />
      <nav aria-label="Section navigation" className="hidden lg:flex items-center gap-8">
        {sectionLinks.map(([href, label]) => <a key={href} href={href} className="relative text-sm py-2 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-sage-deep after:transition-all hover:after:w-full hover:text-sage-deep transition-colors">{label}</a>)}
      </nav>
      <div className="hidden lg:flex items-center gap-3">
        <a href="tel:+923461555542" className="flex items-center gap-2 text-sm hover:text-sage-deep"><Phone size={16} className="text-sage-deep"/>{phone}</a>
        <Button asChild variant="editorial" size="spacious"><a href="#booking">Book · PKR 900 <ArrowUpRight /></a></Button>
      </div>
      <Button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </Button>
    </div>
    {open && <nav aria-label="Mobile section navigation" className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg px-5 pt-4 pb-6 max-h-[calc(100vh-72px)] overflow-y-auto">
      <div className="grid divide-y divide-border">
        {sectionLinks.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)} className="py-4 font-display text-2xl flex justify-between items-center hover:text-sage-deep">{label}<ArrowUpRight size={18} className="text-sage-deep"/></a>)}
      </div>
      <div className="grid grid-cols-2 gap-3 mt-6">
        <Button asChild variant="editorial" size="spacious"><a href="tel:+923461555542" onClick={() => setOpen(false)}><Phone/> Call</a></Button>
        <Button asChild variant="editorialOutline" size="spacious"><a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}><MessageCircle/> WhatsApp</a></Button>
      </div>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-foreground text-background">
    <div className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 pt-16 md:pt-20 pb-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_1fr_1fr] gap-12 pb-14 border-b border-background/15">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-sm leading-7 text-background/70">Private, one-to-one psychological care in Islamabad and online.</p>
        </div>
        <div>
          <p className="eyebrow text-sage mb-5">On this page</p>
          <ul className="space-y-3">{sectionLinks.map(([href, label]) => <li key={href}><a href={href} className="text-sm text-background/75 hover:text-sage">{label}</a></li>)}</ul>
        </div>
        <div>
          <p className="eyebrow text-sage mb-5">Contact</p>
          <ul className="space-y-3 text-sm">
            <li><a href="tel:+923461555542" className="flex items-center gap-2 hover:text-sage"><Phone size={15} className="text-sage"/>+92-346-1555542</a></li>
            <li><a href="tel:+923315579476" className="flex items-center gap-2 hover:text-sage"><Phone size={15} className="text-sage"/>+92-331-5579476</a></li>
            <li><a href={whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sage"><MessageCircle size={15} className="text-sage"/>WhatsApp</a></li>
            <li><a href={`mailto:${email}`} className="flex items-center gap-2 break-all hover:text-sage"><Mail size={15} className="text-sage shrink-0"/>{email}</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-sage mb-5">Visit</p>
          <p className="flex gap-2 text-sm text-background/75 leading-7"><MapPin size={15} className="text-sage shrink-0 mt-1.5"/><span>Office # M-1, Mezzanine Floor,<br/>Paris Business Center, Soan Garden,<br/>Islamabad, Pakistan</span></p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-7 text-xs text-background/55">
        <p>© {new Date().getFullYear()} Psychologists Hub. All rights reserved.</p>
        <a href="#top" className="hover:text-sage">Back to top ↑</a>
      </div>
    </div>
  </footer>;
}

export function BookingLink({ children = "Book an appointment", light = false, outline = false }: { children?: React.ReactNode; light?: boolean; outline?: boolean }) {
  return <Button asChild size="spacious" variant={light ? "editorialLight" : outline ? "editorialOutline" : "editorial"}><a href="#booking">{children} <ArrowUpRight /></a></Button>;
}

export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return <section className="bg-primary text-primary-foreground relative overflow-hidden"><div className="hero-arc"/><div className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 py-20 md:py-28 relative z-10"><p className="eyebrow text-sage mb-8">{label}</p><h1 className="display text-[clamp(3.8rem,8vw,8rem)] max-w-[950px]">{title}</h1><p className="mt-8 max-w-xl text-primary-foreground/75 leading-8 text-base md:text-lg">{description}</p></div></section>;
}

export function SectionHeading({ label, title, aside }: { label: string; title: React.ReactNode; aside?: string }) {
  return <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-5 items-start"><p className="eyebrow text-sage-deep pt-3">{label}</p><h2 className="display text-5xl md:text-6xl xl:text-7xl">{title}</h2>{aside && <p className="text-sm leading-7 text-muted-foreground md:pt-3">{aside}</p>}</div>;
}

export function ConsultationBand() {
  return <section className="bg-lavender"><div className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 py-20 md:py-28 flex flex-col md:flex-row md:items-end justify-between gap-10"><div><p className="eyebrow text-sage-deep mb-6">A step toward feeling better</p><h2 className="display text-5xl md:text-7xl max-w-2xl">You don’t have to figure it out <em className="font-normal">alone.</em></h2></div><BookingLink>Let’s talk</BookingLink></div></section>;
}