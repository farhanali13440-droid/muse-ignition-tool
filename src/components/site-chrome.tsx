import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
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

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="relative z-30 bg-background">
    <div className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-14 h-[78px] md:h-[94px] flex items-center justify-between gap-6">
      <Logo />
      <div className="hidden lg:block">
        <Button asChild variant="editorial" size="spacious"><a href="#booking">Book an appointment <ArrowUpRight /></a></Button>
      </div>
      <Button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </Button>
    </div>
    {open && <nav aria-label="Mobile navigation" className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg px-5 py-5">
      <Button asChild variant="editorial" size="spacious" className="w-full"><a href="#booking" onClick={() => setOpen(false)}>Book an appointment <ArrowUpRight /></a></Button>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-primary text-primary-foreground">
    <div className="max-w-[1500px] mx-auto px-5 md:px-10 xl:px-14 pt-16 md:pt-24 pb-8">
      <div className="grid md:grid-cols-[1.3fr_.7fr_.8fr] gap-12 md:gap-14 pb-20 border-b border-primary-foreground/20">
        <div>
          <Logo light />
          <p className="mt-7 max-w-sm text-sm leading-7 text-primary-foreground/70">Compassionate, confidential care for the life you want to live. In Islamabad and wherever you are.</p>
          <Button asChild variant="editorialLight" size="spacious" className="mt-8"><a href="#booking">Start your journey <ArrowUpRight /></a></Button>
        </div>
        <div>
          <p className="eyebrow text-sage mb-6">Start here</p>
          <a href="#booking" className="text-sm text-primary-foreground/75 hover:text-primary-foreground">Book an appointment</a>
          <a href="tel:+923461555542" className="block mt-3 text-sm text-primary-foreground/75 hover:text-primary-foreground">{phone}</a>
        </div>
        <div>
          <p className="eyebrow text-sage mb-6">Get in touch</p>
          <a className="block text-sm hover:underline" href="tel:+923461555542">{phone}</a>
          <a className="block mt-3 text-sm break-all hover:underline" href={`mailto:${email}`}>{email}</a>
          <p className="text-sm text-primary-foreground/65 leading-7 mt-6">Office # M-1, Mezzanine Floor,<br/>Paris Business Center, Soan Garden,<br/>Islamabad, Pakistan</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-7 text-xs text-primary-foreground/55">
        <p>© {new Date().getFullYear()} Psychologists Hub. All rights reserved.</p>
        <p>Care begins with a conversation.</p>
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