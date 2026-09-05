import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  CreditCard,
  Facebook,
  Fuel,
  Instagram,
  Landmark,
  Linkedin,
  Menu,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/fuel-station-hero.jpg";
import { PricingCalculator } from "@/components/PricingCalculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fuel Flow Pro | Petrol Station Management Software Kenya" },
      { name: "description", content: "Manage fuel sales, M-Pesa reconciliation, staff shifts, eTIMS compliance and every branch from one real-time platform. From KES 3,500 per branch." },
      { property: "og:title", content: "Fuel Flow Pro | Petrol Station Management Software Kenya" },
      { property: "og:description", content: "Real-time control for modern Kenyan fuel stations: sales, M-Pesa, staff and eTIMS in one platform." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Fuel Flow Pro" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fuel Flow Pro | Petrol Station Management Software Kenya" },
      { name: "twitter:description", content: "Real-time control for modern Kenyan fuel stations." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Fuel Flow Pro",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Petrol station management platform for Kenyan fuel retailers: sales tracking, M-Pesa reconciliation, staff management and eTIMS compliance.",
          areaServed: "KE",
          offers: [
            { "@type": "Offer", name: "Starter", price: "5000", priceCurrency: "KES" },
            { "@type": "Offer", name: "Growth", price: "4000", priceCurrency: "KES" },
            { "@type": "Offer", name: "Pro", price: "3500", priceCurrency: "KES" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});


const benefits = [
  { icon: Smartphone, title: "M-Pesa at the pump", text: "Accept and reconcile mobile payments instantly, matched directly to each transaction." },
  { icon: BarChart3, title: "Live sales visibility", text: "See litres, revenue and performance across every shift and station in real time." },
  { icon: Building2, title: "Every branch, one view", text: "Run a growing network without travelling to each site. Compare and control centrally." },
  { icon: Users, title: "Accountable teams", text: "Track attendance, shifts and individual attendant sales from wherever you are." },
  { icon: ShieldCheck, title: "Less revenue leakage", text: "Flag discrepancies early and replace manual records with accurate digital workflows." },
  { icon: TrendingUp, title: "Decisions backed by data", text: "Use historical trends and tailored reports to plan prices, stock and growth." },
];

const faqs = [
  ["Can Fuel Flow Pro work across multiple stations?", "Yes. Manage unlimited branches from one dashboard and compare performance in real time."],
  ["How are M-Pesa transactions reconciled?", "Payments are matched to station transactions automatically, reducing manual reconciliation and cash-handling risk."],
  ["Is Fuel Flow Pro KRA compliant?", "Yes. eTIMS integration for automatic KRA-compliant invoicing is included in Pro, and available on Starter and Growth as a flat KSh 3,000/month add-on."],
  ["How much does it cost?", "Starter is KSh 5,000/month for a single station, Growth is KSh 4,000 per branch for 2–5 branches, and Pro is KSh 3,500 per branch from 6 branches. Prepay annually and save 20%."],

  ["Can I see each attendant’s sales?", "Yes. Owners and managers can review attendance, shifts and daily sales performance by attendant."],
  ["Will you help us get started?", "Yes. Our team supports onboarding, branch setup and staff training so your operation can move smoothly."],
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label="Fuel Flow Pro home">
      <span className="grid size-11 place-items-center border border-brand-blue bg-surface/80 shadow-blue-glow transition-transform group-hover:-translate-y-0.5">
        <Fuel className="size-6 text-gold" strokeWidth={1.65} />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-brand text-2xl text-gold-gradient">Fuel Flow Pro</span>
          <span className="mt-1 block text-[0.52rem] uppercase tracking-[0.28em] text-muted-foreground">Convenience at Fingertips</span>
        </span>
      )}
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex" aria-label="Main navigation">
            <a className="nav-link" href="#benefits">Benefits</a><a className="nav-link" href="#platform">Platform</a><a className="nav-link" href="#pricing">Pricing</a><a className="nav-link" href="#faq">FAQ</a>
          </nav>
          <Button asChild className="hidden h-11 rounded-sm px-6 font-semibold lg:inline-flex"><a href="#contact">Book a demo <ArrowRight /></a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden"><div className="flex flex-col gap-4 text-sm"><a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a><a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></div></nav>}
      </header>

      <main>
        <section className="relative flex min-h-[760px] items-end border-b border-border pt-20 lg:min-h-[820px]">
          <img src={heroImage} alt="Modern petrol station illuminated at night" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover object-[64%_center]" />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-28 lg:px-8 lg:pb-24">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 border border-border bg-background/60 px-3 py-2 text-xs uppercase tracking-[0.16em] text-gold backdrop-blur"><span className="size-1.5 bg-success" /> Built for Kenya’s fuel retail market</div>
              <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">The complete fuel station <span className="text-gold-gradient">management system.</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-soft sm:text-lg">Control sales in real time, accept M-Pesa at the pump and see every branch clearly—from one secure platform.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 rounded-sm px-7 text-base font-semibold"><a href="#contact">Book a demo <ArrowRight /></a></Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-sm border-border bg-background/30 px-7 text-base backdrop-blur hover:bg-secondary"><a href="#pricing">See pricing</a></Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground"><span className="flex items-center gap-2"><BadgeCheck className="text-gold" /> Local onboarding</span><span className="flex items-center gap-2"><BadgeCheck className="text-gold" /> KES billing</span><span className="flex items-center gap-2"><BadgeCheck className="text-gold" /> Secure cloud access</span></div>
            </div>
          </div>
        </section>

        <section id="benefits" className="section-shell">
          <div className="section-head"><div><p className="eyebrow">One system. Total control.</p><h2>Run every litre like it matters.</h2></div><p>Replace scattered paperwork, disconnected tills and end-of-day surprises with a clear view of your operation.</p></div>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }, i) => <article key={title} className="group bg-surface p-7 transition-colors hover:bg-card lg:p-8"><div className="mb-8 flex items-center justify-between"><Icon className="size-6 text-gold" strokeWidth={1.5}/><span className="text-xs text-muted-foreground">0{i + 1}</span></div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="section-shell">
            <p className="eyebrow">From forecourt to forecast</p><h2 className="mt-3 max-w-2xl">Simple at the pump. Powerful at the top.</h2>
            <ol className="mt-12 grid gap-8 lg:grid-cols-4">
              {["Record every sale", "Collect payment", "Reconcile instantly", "Act on live insight"].map((step, i) => <li key={step} className="relative border-t border-border pt-6"><span className="text-sm font-semibold text-gold">0{i + 1}</span><h3 className="mt-5 text-lg font-semibold">{step}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{["Attendants capture pump sales on a straightforward interface.", "Receive M-Pesa or record other payment methods securely.", "Transactions and shifts match automatically with fewer errors.", "Owners see trends, exceptions and branch performance live."][i]}</p></li>)}
            </ol>
          </div>
        </section>

        <section id="platform" className="section-shell">
          <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
            <div><p className="eyebrow">Multi-branch command centre</p><h2 className="mt-3">Your entire network, finally in focus.</h2><p className="mt-5 max-w-lg leading-7 text-muted-foreground">Compare stations, monitor volume and catch revenue gaps without waiting for spreadsheets or driving from site to site.</p><ul className="mt-7 space-y-4 text-sm">{["Unlimited branches on one account", "Live sales and fuel volume analytics", "Custom views for owners, managers and accountants"].map(x => <li key={x} className="flex gap-3"><Check className="mt-0.5 size-4 text-gold" />{x}</li>)}</ul></div>
            <DashboardMockup />
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="section-shell grid gap-14 lg:grid-cols-2">
            <div className="staff-panel relative min-h-[420px] overflow-hidden border border-border p-7 sm:p-9"><div className="absolute right-7 top-7 flex items-center gap-2 text-xs text-success"><span className="size-2 rounded-full bg-success" /> Live shift</div><p className="eyebrow">People & shifts</p><h2 className="mt-3 max-w-md">Know who’s on duty—and how they’re doing.</h2><div className="mt-10 space-y-3">{[["JM", "James Mwangi", "KSh 48,240"],["AW", "Akinyi Wanjiru", "KSh 42,810"],["DO", "David Otieno", "KSh 39,650"]].map(([initials,name,value],i)=><div key={name} className="flex items-center gap-4 border border-border bg-background/70 p-4"><span className="grid size-10 place-items-center bg-secondary text-xs font-semibold text-gold">{initials}</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{name}</p><p className="mt-1 text-xs text-muted-foreground">Pump {i+2} · Day shift</p></div><strong className="text-sm font-medium">{value}</strong></div>)}</div></div>
            <div className="flex flex-col justify-center"><p className="eyebrow">Built-in accountability</p><h2 className="mt-3">Better visibility. Stronger teams.</h2><p className="mt-5 leading-7 text-muted-foreground">See attendance and shift activity remotely. Review each attendant’s sales and quickly spot underperformance or discrepancies.</p><div className="mt-8 grid grid-cols-2 gap-4"><div className="border-l-2 border-gold pl-4"><strong className="block text-2xl">Live</strong><span className="text-sm text-muted-foreground">shift activity</span></div><div className="border-l-2 border-brand-blue pl-4"><strong className="block text-2xl">Per staff</strong><span className="text-sm text-muted-foreground">sales reporting</span></div></div></div>
          </div>
        </section>

        <section className="section-shell text-center">
          <p className="eyebrow">Connected to the way Kenya pays</p><h2 className="mx-auto mt-3 max-w-2xl">Integrations that keep business moving.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">{[{i:Smartphone,t:"M-Pesa",s:"Direct payment reconciliation"},{i:Landmark,t:"Banks",s:"Seamless transfers & settlement"},{i:ReceiptText,t:"eTIMS · KRA",s:"Compliant e-invoicing"}].map(({i:Icon,t,s})=><div key={t} className="border border-border bg-surface px-6 py-9"><Icon className="mx-auto size-7 text-gold"/><h3 className="mt-5 font-semibold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{s}</p></div>)}</div>
        </section>

        <section id="pricing" className="border-y border-border bg-surface"><div className="section-shell">
          <div className="section-head"><div><p className="eyebrow">Straightforward plans</p><h2>Priced per branch. Nothing hidden.</h2></div><p>Every plan includes guided onboarding, a free trial on your first branch, no installation fees and support from a team that understands local fuel retail.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <PriceCard name="Starter" price="KSh 5,000" unit="per month · single station" description="Core control for independent station owners." features={["Core dashboard","Sales & fuel tracking","Staff attendance tracking","M-Pesa reconciliation"]}/>
            <PriceCard premium name="Growth" price="KSh 4,000" unit="per branch / month · 2–5 branches" description="For small chains running more than one site." features={["Everything in Starter","Multi-branch dashboard","Cross-branch analytics","Full staff management"]}/>
            <PriceCard name="Pro" price="KSh 3,500" unit="per branch / month · 6+ branches" description="For growing networks and fleet operators." features={["Everything in Growth","eTIMS / KRA integration","API access","Custom reporting & priority support"]}/>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">eTIMS integration is included with Pro, or available on Starter and Growth as a flat KSh 3,000/month add-on. Save 20% when you prepay annually.</p>
          <div className="mt-16"><div className="section-head"><div><p className="eyebrow">Estimate your cost</p><h2>Pricing calculator.</h2></div><p>Move the slider to your number of branches and switch on eTIMS to see your monthly and yearly cost.</p></div>
            <div className="mt-10"><PricingCalculator /></div>
          </div>
        </div></section>


        <section className="section-shell"><div className="grid gap-6 lg:grid-cols-2"><blockquote className="border-l-2 border-gold py-3 pl-7 sm:pl-10"><p className="font-display text-2xl leading-relaxed sm:text-3xl">“We no longer wait until close of business to understand the day. Fuel Flow Pro gives us the numbers while they still matter.”</p><footer className="mt-6 text-sm text-muted-foreground">— Multi-site station operator, Nairobi</footer></blockquote><div className="grid grid-cols-2 gap-px bg-border"><div className="bg-background p-7"><strong className="text-4xl text-gold">24/7</strong><p className="mt-2 text-sm text-muted-foreground">operational visibility</p></div><div className="bg-background p-7"><strong className="text-4xl text-gold">1 view</strong><p className="mt-2 text-sm text-muted-foreground">for every branch</p></div></div></div></section>

        <section id="faq" className="border-t border-border bg-surface"><div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">Frequently asked</p><h2 className="mt-3">Good questions. Clear answers.</h2></div><Accordion type="single" collapsible className="border-t border-border">{faqs.map(([q,a],i)=><AccordionItem key={q} value={`item-${i}`}><AccordionTrigger className="py-6 text-left text-base hover:no-underline">{q}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-6 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

        <section id="contact" className="cta-band border-b border-border"><div className="section-shell text-center"><p className="eyebrow">Ready to take control?</p><h2 className="mx-auto mt-3 max-w-3xl">Run a tighter, smarter fuel business.</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">See how Fuel Flow Pro fits your stations, your team and your growth plans.</p><Button asChild size="lg" className="mt-8 h-12 rounded-sm px-8 text-base font-semibold"><a href="mailto:hello@fuelflowpro.co.ke">Book your demo <ArrowRight /></a></Button></div></section>
      </main>

      <footer className="bg-background"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8"><div><Logo/><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Modern station management, made for the realities of Kenyan fuel retail.</p></div><div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact</p><a href="mailto:hello@fuelflowpro.co.ke" className="mt-4 block text-sm hover:text-gold">hello@fuelflowpro.co.ke</a><p className="mt-2 text-sm text-muted-foreground">Nairobi, Kenya</p></div><div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Follow</p><div className="mt-4 flex gap-3"><a className="social-link" href="#" aria-label="LinkedIn"><Linkedin/></a><a className="social-link" href="#" aria-label="Instagram"><Instagram/></a><a className="social-link" href="#" aria-label="Facebook"><Facebook/></a></div></div></div><div className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between lg:px-8"><span>© 2026 Fuel Flow Pro. All rights reserved.</span><span>Built for Kenyan fuel retailers.</span></div></div></footer>
    </div>
  );
}

function DashboardMockup() {
  return <div className="dashboard-frame"><div className="flex items-center justify-between border-b border-border px-5 py-4"><div><p className="text-xs text-muted-foreground">All branches</p><p className="mt-1 text-sm font-semibold">Performance overview</p></div><span className="flex items-center gap-2 text-xs text-success"><span className="size-1.5 rounded-full bg-success"/>Live</span></div><div className="grid grid-cols-3 gap-px border-b border-border bg-border"><Metric label="Today’s sales" value="KSh 842K"/><Metric label="Fuel sold" value="8,420 L"/><Metric label="Variance" value="0.3%"/></div><div className="grid gap-5 p-5 md:grid-cols-[1.4fr_0.6fr]"><div><p className="mb-5 text-xs text-muted-foreground">Revenue · last 7 days</p><div className="chart h-44"><span/><span/><span/><span/><span/><span/><span/></div></div><div><p className="mb-4 text-xs text-muted-foreground">Branches</p>{[["Waiyaki Way","312K"],["Mombasa Rd","286K"],["Thika Rd","244K"]].map(([n,v])=><div key={n} className="mb-3 border-b border-border pb-3"><p className="text-xs">{n}</p><p className="mt-1 text-sm font-semibold text-gold">KSh {v}</p></div>)}</div></div></div>;
}
function Metric({label,value}:{label:string,value:string}) { return <div className="bg-surface p-4"><p className="text-[0.65rem] text-muted-foreground">{label}</p><strong className="mt-2 block text-base sm:text-xl">{value}</strong></div>; }
function PriceCard({name,price,unit,description,features,premium=false}:{name:string;price:string;unit:string;description:string;features:string[];premium?:boolean}) { return <article className={`relative border p-7 sm:p-9 ${premium ? "border-gold bg-card" : "border-border bg-background"}`}>{premium && <span className="absolute right-5 top-5 bg-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary-foreground">Most popular</span>}<p className="text-sm font-semibold text-gold">{name}</p><h3 className="mt-4 text-3xl font-semibold">{price}</h3><p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{unit}</p><p className="mt-4 text-sm text-muted-foreground">{description}</p><Button asChild variant={premium?"default":"outline"} className="mt-7 h-11 w-full rounded-sm"><a href="#contact">Start free trial <ChevronRight/></a></Button><ul className="mt-7 space-y-4 border-t border-border pt-7 text-sm">{features.map(x=><li key={x} className="flex gap-3"><Check className="size-4 text-gold"/>{x}</li>)}</ul></article>; }