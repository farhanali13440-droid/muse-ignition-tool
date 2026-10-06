import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/psychologists-hub-logo.webp.asset.json";

export const bookingUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ZyhQLcJqWKZrcrOjH0JbukyyXGnVTNbfAbDpIE3aRat2IZZIsgU_PR7AuRuT_n9XQ4nrRx8Oj";
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
      <div className="hidden lg:block"><Button asChild variant="editorial" size="spacious"><a href="#booking">Book an appointment <ArrowUpRight /></a></Button></div>
      <Button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav aria-label="Mobile navigation" className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg px-5 py-5">
      <Button asChild variant="editorial" size="spacious" className="w-full"><a href="#booking" onClick={() => setOpen(false)}>Book an appointment <ArrowUpRight /></a></Button>
    </nav>}
  </header>;
}<div><p className="eyebrow text-sage mb-6">Start here</p><a href="#booking" className="text-sm text-primary-foreground/75 hover:text-primary-foreground">Book an appointment</a><a href="tel:+923461555542" className="block mt-3 text-sm text-primary-foreground/75 hover:text-primary-foreground">{phone}</a></div>
      <Button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav aria-label="Mobile navigation" className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg px-5 py-5">
      <Button asChild variant="editorial" size="spacious" className="w-full"><a href="#booking" onClick={() => setOpen(false)}>Book an appointment <ArrowUpRight /></a></Button>
    </nav>}
  </header>;
}}