import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Eye, Glasses, Sun, Baby, Stethoscope, Sparkles, ShieldCheck,
  Award, Clock, Tag, Star, Quote, MapPin, Phone, MessageCircle,
  Navigation, Instagram, ChevronDown, ArrowRight, Check, Calendar,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "iLens Eyewear — Bishnupur's Style-First Optical Store" },
      { name: "description", content: "Premium eyewear, expert eye testing, prescription lenses, sunglasses & contact lenses in Bishnupur. Book your free eye test today." },
    ],
  }),
});

const WA_LINK = "https://www.instagram.com/ilenseyewear";
const MAPS_LINK = "https://maps.app.goo.gl/KhgY2g92bH2Ht5b6A?g_st=ic";
const SHOP_LINK = "https://ilenseyewear.com/shop/";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <HowItWorks />
        <Stats />
        <WhyUs />
        <Proof />
        <Reviews />
        <Brands />
        <Trust />
        <OfferBanner />
        <Gallery />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBar />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-1 font-display font-bold text-xl tracking-tight">
      <span className={light ? "text-white" : "text-primary-deep"}>iLens</span>
      <span className="size-2 rounded-full bg-bubblegum" />
      <span className={`text-sm font-medium ${light ? "text-white/70" : "text-muted-foreground"}`}>Eyewear</span>
    </a>
  );
}

function Navbar() {
  return (
    <header id="top" className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#services" className="hover:text-primary transition">Collections</a>
          <a href="#how" className="hover:text-primary transition">How it works</a>
          <a href="#why" className="hover:text-primary transition">Why iLens</a>
          <a href="#reviews" className="hover:text-primary transition">Reviews</a>
          <a href="#location" className="hover:text-primary transition">Visit us</a>
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-bubblegum px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-pink)] hover:scale-[1.03] transition"
        >
          <Calendar className="size-4" />
          Book Eye Test
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute -top-32 -right-20 size-[480px] rounded-full bg-bubblegum/40 blur-3xl animate-blob -z-10" />
      <div className="absolute bottom-0 -left-20 size-[420px] rounded-full bg-lavender/30 blur-3xl animate-blob -z-10" style={{ animationDelay: "-6s" }} />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-white" data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/20">
              <Sparkles className="size-3.5 text-bubblegum" />
              Bishnupur's style-first optical store
            </span>
            <h1 className="mt-6 font-display font-bold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              See the world{" "}
              <span className="text-bubblegum">clearly.</span>
              <br />
              Wear it{" "}
              <span className="relative">
                <span className="text-lavender">boldly.</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                  <path d="M2 7 Q 50 1, 100 5 T 198 4" stroke="#FF6EB4" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
              Premium frames, expert eye testing, and lenses that actually feel right —
              all curated for the way Bishnupur sees, works, and shows up.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-bubblegum px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-pink)] hover:scale-[1.03] transition"
              >
                Book a Free Eye Test <ArrowRight className="size-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Explore Collections
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-white/85">
              <div className="flex -space-x-2">
                {[0,1,2,3].map((i) => (
                  <div key={i} className="size-9 rounded-full ring-2 ring-primary-deep flex items-center justify-center text-xs font-semibold"
                    style={{ background: ["#FF6EB4","#C084FC","#4A90D9","#FFD166"][i] }}>
                    {["A","R","S","M"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-bubblegum">
                  {[...Array(5)].map((_,i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <p className="text-xs mt-1 text-white/70">Loved by 500+ happy customers in Bishnupur</p>
              </div>
            </div>
          </div>

          {/* Floating frame mockup card */}
          <div className="lg:col-span-5 relative" data-reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 bg-bubblegum/30 blur-3xl rounded-full" />
              <div className="relative rounded-3xl bg-white/95 backdrop-blur p-6 shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary/20 via-bubblegum-soft to-accent flex items-center justify-center relative overflow-hidden">
                  {/* stylised glasses */}
                  <svg viewBox="0 0 220 90" className="w-3/4">
                    <g fill="none" stroke="#0A1F5C" strokeWidth="6">
                      <circle cx="55" cy="45" r="34" fill="#FF6EB4" fillOpacity="0.25" />
                      <circle cx="165" cy="45" r="34" fill="#C084FC" fillOpacity="0.25" />
                      <path d="M89 45 Q 110 35, 131 45" />
                      <path d="M21 30 L 5 22" strokeLinecap="round" />
                      <path d="M199 30 L 215 22" strokeLinecap="round" />
                    </g>
                  </svg>
                  <div className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest text-primary-deep bg-white/80 rounded-full px-2 py-1">NEW</div>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">iLens Signature</p>
                    <p className="font-display font-bold text-lg text-primary-deep">Emmy — Round</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground line-through">₹500</p>
                    <p className="text-bubblegum font-bold">₹350</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white shadow-xl px-4 py-3 rotate-[6deg]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">ISO Certified</p>
                    <p className="text-sm font-semibold text-primary-deep">Premium Lenses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "Expert Eye Testing", "Premium Lenses", "Bishnupur's #1 Eyewear",
    "Free Frame Adjustments", "Blue-Light Protection", "Kids' Eyewear Specialists",
    "Designer Sunglasses", "Contact Lens Fitting", "ISO Certified", "Same-Day Service",
  ];
  return (
    <section className="bg-primary text-white overflow-hidden border-y border-primary-deep/40">
      <div className="flex animate-marquee whitespace-nowrap py-5">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-3 text-base sm:text-lg font-display font-semibold">
            <span className={i % 3 === 0 ? "text-bubblegum" : "text-white"}>{t}</span>
            <Sparkles className="size-4 text-bubblegum" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5" data-reveal>
          <div className="relative">
            <div className="text-[12rem] lg:text-[16rem] font-display font-bold leading-none text-primary/10">01</div>
            <div className="absolute inset-0 flex items-center">
              <div className="rounded-3xl bg-white shadow-[var(--shadow-soft)] p-8 max-w-xs">
                <Eye className="size-8 text-bubblegum" />
                <p className="mt-3 font-display font-bold text-2xl text-primary-deep">Local roots.<br />Global taste.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-bubblegum uppercase">About iLens</p>
          <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl text-primary-deep leading-tight">
            We believe great vision <span className="text-bubblegum">deserves great style.</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
            <p>
              iLens Eyewear was built in Bishnupur for the people of Bishnupur — a neighbourhood
              optical store with the curation, care, and craft of a big-city brand.
            </p>
            <p>
              From precision eye testing to frames sourced from trusted Indian and international
              makers, every pair we send home is fitted, tuned, and guaranteed by our team.
              No upselling, no shortcuts — just clear vision and frames you'll genuinely love wearing.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { k: "500+", v: "Happy customers" },
              { k: "1,000+", v: "Frames in store" },
              { k: "5★", v: "Avg. Google rating" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-white p-4">
                <p className="font-display font-bold text-2xl text-primary">{s.k}</p>
                <p className="text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const items = [
    { icon: Glasses, title: "Eyeglasses", desc: "Forever classics & trending shapes — round, square, cat-eye, geometric." },
    { icon: Sun, title: "Sunglasses", desc: "UV-protected designer sunglasses for men & women, made for Indian sun." },
    { icon: Eye, title: "Contact Lenses", desc: "Daily, monthly & coloured lenses with on-spot fitting and trial." },
    { icon: Stethoscope, title: "Expert Eye Testing", desc: "Computerised eye check with our trained optometrist — under 15 minutes." },
    { icon: Baby, title: "Kids Eyewear", desc: "Lightweight, flexible, drop-friendly frames built for tiny adventurers." },
    { icon: Sparkles, title: "Prescription Lenses", desc: "Anti-glare, blue-light, photochromatic & high-index — fitted in-house." },
  ];
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-bubblegum uppercase">What we do</p>
          <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl text-primary-deep leading-tight">
            Everything your eyes <span className="text-bubblegum">need.</span> Under one roof.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              data-reveal
              className="group relative rounded-3xl border border-border bg-white p-7 hover:border-bubblegum/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[var(--shadow-pink)]"
            >
              <div className="absolute top-5 right-5 text-5xl font-display font-bold text-primary/5 group-hover:text-bubblegum/15 transition">
                0{i + 1}
              </div>
              <div className="size-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-[var(--shadow-soft)]">
                <it.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-primary-deep">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-bubblegum">
                Learn more <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Walk in or book online", d: "Drop a message on Instagram or just stroll in — no waiting, no pressure.", icon: MessageCircle },
    { n: "02", t: "Expert eye check", d: "A 15-minute computerised test with our optometrist. Honest, accurate, gentle.", icon: Stethoscope },
    { n: "03", t: "Pick your perfect pair", d: "Try on as many as you like. We help you choose. You walk out seeing — and looking — sharper.", icon: Glasses },
  ];
  return (
    <section id="how" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-bubblegum uppercase">How it works</p>
          <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl text-primary-deep leading-tight">
            From walk-in to wow — in <span className="text-bubblegum">three simple steps.</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} data-reveal className="relative rounded-3xl bg-white p-8 border border-border">
              <div className="flex items-start justify-between">
                <span className="font-display font-bold text-6xl text-bubblegum/20">{s.n}</span>
                <div className="size-12 rounded-2xl bg-primary-deep flex items-center justify-center text-white">
                  <s.icon className="size-6" />
                </div>
              </div>
              <h3 className="mt-4 font-display font-bold text-2xl text-primary-deep">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
              {i < 2 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 size-6 text-bubblegum" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const stats = [
    { k: "500+", v: "Happy customers" },
    { k: "1,000+", v: "Frames in stock" },
    { k: "5+", v: "Years of experience" },
    { k: "4.9★", v: "Google rating" },
  ];
  return (
    <section className="py-20 bg-primary-deep text-white relative overflow-hidden">
      <div className="absolute -top-20 right-10 size-72 rounded-full bg-bubblegum/20 blur-3xl" />
      <div className="absolute -bottom-20 left-0 size-72 rounded-full bg-lavender/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.v} data-reveal className="text-center">
            <p className="font-display font-bold text-5xl lg:text-6xl text-bubblegum">{s.k}</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-white/70">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    { icon: Stethoscope, t: "Expert eye testing", d: "Trained optometrist. Computerised. Always honest about what you actually need." },
    { icon: Award, t: "Premium frame brands", d: "From iLens originals to top Indian & international houses — only frames we'd wear ourselves." },
    { icon: Tag, t: "Honest pricing", d: "Frames from ₹350. Free lens deals running. Real value, not inflated MRPs." },
    { icon: Clock, t: "Fast lens delivery", d: "Most prescriptions ready in 24–48 hours. Same-day for in-stock powers." },
  ];
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl mb-14" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-bubblegum uppercase">Why iLens</p>
          <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl text-primary-deep leading-tight">
            Four reasons people keep <span className="text-bubblegum">coming back.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.t} data-reveal className="rounded-3xl border-2 border-border bg-white p-7 hover:border-bubblegum transition-colors">
              <div className="size-14 rounded-2xl bg-bubblegum-soft flex items-center justify-center">
                <it.icon className="size-7 text-bubblegum" />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-primary-deep">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROOF / STORIES ---------------- */
function Proof() {
  const stories = [
    { name: "Ananya", frame: "Blue-light glasses for work", result: "Zero eye strain in 2 weeks", quote: "I sit at a screen 9 hours a day. The headaches just… stopped.", color: "bg-bubblegum-soft" },
    { name: "Rohit", frame: "Round acetate, navy", result: "Compliments daily", quote: "Three colleagues asked where I got them in the first week.", color: "bg-accent" },
    { name: "Sushmita", frame: "Cat-eye sunglasses", result: "Travelled all of Bankura UV-safe", quote: "Light, sharp, and they actually fit my face properly.", color: "bg-secondary/20" },
    { name: "Manish", frame: "Kid's flexible frame for Aarav", result: "Survived a full school year", quote: "My son drops everything. These bent and bounced back.", color: "bg-bubblegum-soft" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl mb-14" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-bubblegum uppercase">Style stories</p>
          <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl text-primary-deep leading-tight">
            Real customers. Real frames. <span className="text-bubblegum">Real difference.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stories.map((s) => (
            <article key={s.name} data-reveal className="rounded-3xl bg-white border border-border overflow-hidden hover:-translate-y-1 transition-transform">
              <div className={`${s.color} aspect-[4/3] flex items-center justify-center relative`}>
                <svg viewBox="0 0 200 80" className="w-3/5">
                  <g fill="none" stroke="#0A1F5C" strokeWidth="5">
                    <circle cx="50" cy="40" r="28" />
                    <circle cx="150" cy="40" r="28" />
                    <path d="M78 40 Q 100 32, 122 40" />
                  </g>
                </svg>
                <Quote className="absolute top-4 right-4 size-8 text-primary-deep/30" />
              </div>
              <div className="p-6">
                <p className="font-display font-bold text-lg text-primary-deep">{s.name}</p>
                <p className="text-xs uppercase tracking-wider text-bubblegum font-semibold mt-1">{s.frame}</p>
                <p className="text-sm font-medium text-primary mt-3 flex items-center gap-1.5">
                  <Check className="size-4" /> {s.result}
                </p>
                <p className="mt-3 text-sm text-muted-foreground italic leading-relaxed">"{s.quote}"</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
function Reviews() {
  const revs = [
    { n: "Priyanka D.", r: "Great collection of frames and the eye test was very thorough. The staff helped me pick something that actually suits my face shape." },
    { n: "Soumitra G.", r: "Best optical shop in Bishnupur. Honest pricing and the lenses came in just one day. Highly recommend." },
    { n: "Arpita R.", r: "I bought sunglasses for my husband and glasses for my son. Both are happy. Service is polite and quick." },
    { n: "Debasish M.", r: "Tried Lenskart before, but iLens has better in-person service and the frames feel sturdier. Will return." },
    { n: "Tanmoy S.", r: "Got my contact lenses fitted here. They explained everything patiently. Very comfortable." },
    { n: "Mou C.", r: "Lovely store, trendy frames, and they don't push expensive options. Genuine people." },
  ];
  return (
    <section id="reviews" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14" data-reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-bubblegum uppercase">Google reviews</p>
            <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl text-primary-deep leading-tight">
              Bishnupur talks. We <span className="text-bubblegum">listen.</span>
            </h2>
          </div>
          <div className="rounded-2xl bg-primary-deep text-white px-5 py-4 flex items-center gap-4">
            <div>
              <p className="text-3xl font-display font-bold text-bubblegum">4.9</p>
              <div className="flex text-bubblegum">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
              </div>
            </div>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="text-sm font-semibold underline-offset-4 hover:underline">
              See on Google →
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {revs.map((r) => (
            <div key={r.n} data-reveal className="rounded-3xl border border-border bg-white p-6">
              <div className="flex text-bubblegum mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{r.r}"</p>
              <div className="mt-5 flex items-center justify-between">
                <p className="font-display font-semibold text-primary-deep">{r.n}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold">
                  <ShieldCheck className="size-3.5" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BRANDS ---------------- */
function Brands() {
  const brands = ["iLens", "Ray·Ban", "Vincent Chase", "Oakley", "Carrera", "John Jacobs", "Vogue", "Fastrack"];
  return (
    <section className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-bubblegum uppercase">Frame partners</p>
          <h2 className="mt-3 font-display font-bold text-3xl lg:text-4xl text-primary-deep">
            Brands you trust. Curated <span className="text-bubblegum">in-store.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {brands.map((b) => (
            <div key={b} data-reveal className="rounded-2xl bg-white border border-border h-24 flex items-center justify-center font-display font-bold text-xl text-primary-deep hover:text-bubblegum hover:border-bubblegum transition">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BADGES ---------------- */
function Trust() {
  const items = [
    { icon: Stethoscope, t: "Optometrist Certified" },
    { icon: Award, t: "5+ Years in Bishnupur" },
    { icon: ShieldCheck, t: "Google Verified Store" },
    { icon: Sparkles, t: "Premium Lens Partner" },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.t} data-reveal className="flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4">
            <div className="size-10 rounded-xl bg-bubblegum-soft flex items-center justify-center">
              <it.icon className="size-5 text-bubblegum" />
            </div>
            <p className="text-sm font-semibold text-primary-deep">{it.t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- OFFER BANNER ---------------- */
function OfferBanner() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-bubblegum text-white p-10 lg:p-14" data-reveal>
          <div className="absolute -top-10 -right-10 size-60 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 size-60 rounded-full bg-lavender/30 blur-2xl" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="size-3.5" /> Limited time
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl lg:text-5xl leading-tight">
                Free eye test this month +<br />15% off your first frame.
              </h2>
              <p className="mt-3 text-white/90 max-w-xl">
                Use code <span className="font-bold bg-white/20 rounded px-2 py-0.5">ZENN24</span> in-store or DM us. No appointment needed — just walk in.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-bubblegum px-7 py-4 font-semibold shadow-xl hover:scale-[1.03] transition"
              >
                <MessageCircle className="size-5" /> Claim on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const items = [
    { t: "Men's Frames", c: "from-primary to-secondary" },
    { t: "Women's Frames", c: "from-bubblegum to-lavender" },
    { t: "Kids' Frames", c: "from-secondary to-bubblegum" },
    { t: "Sunglasses", c: "from-primary-deep to-primary" },
    { t: "Contact Lenses", c: "from-lavender to-secondary" },
    { t: "Accessories", c: "from-bubblegum to-secondary" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl mb-14" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-bubblegum uppercase">Inside the store</p>
          <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl text-primary-deep leading-tight">
            Browse the <span className="text-bubblegum">collection.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <a
              key={it.t}
              href={SHOP_LINK}
              target="_blank"
              rel="noreferrer"
              data-reveal
              className={`group relative aspect-[4/5] rounded-3xl bg-gradient-to-br ${it.c} overflow-hidden ${i === 0 || i === 4 ? "lg:row-span-1" : ""}`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-80 transition">
                <svg viewBox="0 0 220 90" className="w-1/2 text-white">
                  <g fill="none" stroke="currentColor" strokeWidth="5">
                    <circle cx="55" cy="45" r="34" />
                    <circle cx="165" cy="45" r="34" />
                    <path d="M89 45 Q 110 35, 131 45" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <span className="text-xs font-semibold uppercase tracking-widest opacity-80">0{i + 1}</span>
                <div>
                  <p className="font-display font-bold text-2xl">{it.t}</p>
                  <p className="text-sm opacity-80 mt-1 inline-flex items-center gap-1">Explore <ArrowRight className="size-4" /></p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const qs = [
    { q: "How much does an eye test cost at iLens?", a: "Eye testing is free with the purchase of any frame. A standalone test is just ₹100 — and we apply it as credit if you buy frames the same visit." },
    { q: "How long does it take to get my prescription glasses?", a: "Most single-vision prescriptions are ready within 24–48 hours. In-stock powers can be done same-day. Progressive and high-index lenses may take 3–5 days." },
    { q: "Do you fit contact lenses for first-time users?", a: "Yes. Our optometrist does a full fitting, teaches you insertion and removal, and gives you a trial pair before you commit." },
    { q: "Do you have eyewear for kids?", a: "Absolutely. We stock lightweight, flexible, drop-friendly frames designed for children, plus blue-light lenses for online classes." },
    { q: "What frame brands do you carry?", a: "iLens originals, Ray-Ban, Vincent Chase, Oakley, Carrera, John Jacobs, Vogue, Fastrack, and rotating designer pieces. New arrivals every month on Instagram." },
    { q: "Do you accept insurance or company eye-care vouchers?", a: "We accept most cashless and reimbursement vouchers from major Indian insurers and corporate eye-care programs. Bring your prescription and we'll handle the paperwork." },
    { q: "Can I return or exchange my frames?", a: "Yes — easy replacement within 7 days for any manufacturing defect, and a 1-year warranty on all iLens frames. Lens scratches are covered for 6 months." },
    { q: "Do you offer home delivery?", a: "Online orders from ilenseyewear.com ship across India with free shipping. Local Bishnupur orders can be delivered same-day on request." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="max-w-2xl mb-12" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-bubblegum uppercase">FAQ</p>
          <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl text-primary-deep leading-tight">
            Quick answers, <span className="text-bubblegum">no jargon.</span>
          </h2>
        </div>
        <div className="space-y-3">
          {qs.map((item) => (
            <details
              key={item.q}
              data-reveal
              className="group rounded-2xl border border-border bg-white p-5 open:bg-surface open:border-bubblegum/40 transition"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                <span className="font-display font-semibold text-primary-deep text-base lg:text-lg">{item.q}</span>
                <ChevronDown className="size-5 text-bubblegum shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm lg:text-base">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center" data-reveal>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-bubblegum px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-pink)] hover:scale-[1.03] transition"
          >
            <MessageCircle className="size-4" /> Still have questions? Message us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */
function Location() {
  return (
    <section id="location" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-bubblegum uppercase">Visit us</p>
          <h2 className="mt-3 font-display font-bold text-4xl lg:text-5xl text-primary-deep leading-tight">
            Pop in. Try frames. <span className="text-bubblegum">Say hi.</span>
          </h2>
          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <div className="size-11 rounded-xl bg-bubblegum-soft flex items-center justify-center shrink-0">
                <MapPin className="size-5 text-bubblegum" />
              </div>
              <div>
                <p className="font-semibold text-primary-deep">iLens Eyewear</p>
                <p className="text-sm text-muted-foreground">Bishnupur, Bankura district, West Bengal</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-11 rounded-xl bg-bubblegum-soft flex items-center justify-center shrink-0">
                <Clock className="size-5 text-bubblegum" />
              </div>
              <div>
                <p className="font-semibold text-primary-deep">Open hours</p>
                <p className="text-sm text-muted-foreground">Mon – Sat · 10:00 AM – 9:00 PM<br />Sunday · 11:00 AM – 7:00 PM</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-11 rounded-xl bg-bubblegum-soft flex items-center justify-center shrink-0">
                <Instagram className="size-5 text-bubblegum" />
              </div>
              <div>
                <p className="font-semibold text-primary-deep">Reach us</p>
                <a href="https://www.instagram.com/ilenseyewear" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-bubblegum">
                  @ilenseyewear on Instagram
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Areas served</p>
              <div className="flex flex-wrap gap-2">
                {["Bishnupur", "Bankura", "Sonamukhi", "Joyrambati", "Kotulpur", "Patrasayer"].map((a) => (
                  <span key={a} className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-primary-deep">{a}</span>
                ))}
              </div>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary-deep px-5 py-3 text-sm font-semibold text-white hover:bg-primary transition"
            >
              <Navigation className="size-4" /> Get directions
            </a>
          </div>
        </div>
        <div className="lg:col-span-7" data-reveal>
          <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)] aspect-[4/3] lg:aspect-auto lg:h-full bg-white">
            <iframe
              title="iLens Eyewear location"
              src="https://www.google.com/maps?q=Bishnupur+Bankura+West+Bengal&output=embed"
              className="w-full h-full min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] p-12 lg:p-20 text-center" style={{ background: "var(--gradient-hero)" }} data-reveal>
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-72 rounded-full bg-bubblegum/30 blur-3xl" />
          <p className="relative text-sm font-semibold tracking-widest text-bubblegum uppercase">Ready when you are</p>
          <h2 className="relative mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Ready to see the world<br /><span className="text-bubblegum">clearly?</span>
          </h2>
          <p className="relative mt-5 text-white/80 max-w-xl mx-auto">
            Walk in today, or book your free eye test on WhatsApp. We'll take care of the rest.
          </p>
          <div className="relative mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-bubblegum px-7 py-4 font-semibold text-white shadow-[var(--shadow-pink)] hover:scale-[1.03] transition"
            >
              <MessageCircle className="size-5" /> Book on WhatsApp
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white hover:bg-white/20 transition"
            >
              <Navigation className="size-5" /> Get directions
            </a>
          </div>
          <p className="relative mt-6 text-xs text-white/60">iLens Eyewear · Bishnupur, West Bengal</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-primary-deep text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 text-sm text-white/70 max-w-sm">
            Bishnupur's style-first optical store. Premium frames, expert eye testing, lenses you'll love.
          </p>
          <a
            href="https://www.instagram.com/ilenseyewear"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-bubblegum transition"
          >
            <Instagram className="size-4" /> @ilenseyewear
          </a>
        </div>
        <div>
          <p className="font-display font-semibold mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#services" className="hover:text-bubblegum">Collections</a></li>
            <li><a href="#how" className="hover:text-bubblegum">How it works</a></li>
            <li><a href="#why" className="hover:text-bubblegum">Why iLens</a></li>
            <li><a href="#reviews" className="hover:text-bubblegum">Reviews</a></li>
            <li><a href="#location" className="hover:text-bubblegum">Visit us</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display font-semibold mb-4">Visit</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Bishnupur, Bankura</li>
            <li>West Bengal, India</li>
            <li className="pt-2">Mon–Sat · 10am – 9pm</li>
            <li>Sunday · 11am – 7pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} iLens Eyewear. All rights reserved.</p>
          <p>Website by <a href="#" className="text-bubblegum hover:underline">Pixorra</a></p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- FLOATING WHATSAPP ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with iLens on WhatsApp"
      className="fixed bottom-20 md:bottom-6 right-5 z-50 flex items-center justify-center size-14 rounded-full text-white shadow-2xl hover:scale-110 transition"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7">
        <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 005.64 1.43h.01c6.54 0 11.84-5.3 11.84-11.84a11.78 11.78 0 00-3.37-8.43zM12.05 21.4h-.01a9.55 9.55 0 01-4.87-1.34l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.55 9.55 0 01-1.46-5.07c0-5.28 4.3-9.58 9.58-9.58 2.56 0 4.96.99 6.77 2.81a9.5 9.5 0 012.81 6.78c0 5.28-4.3 9.58-9.58 9.58zm5.27-7.18c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.21-.45-2.31-1.42-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39 0 1.41 1.02 2.78 1.16 2.97.14.19 2.01 3.07 4.87 4.31.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z"/>
      </svg>
    </a>
  );
}

/* ---------------- MOBILE BAR ---------------- */
function MobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-border shadow-2xl">
      <div className="grid grid-cols-3">
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-3 text-primary-deep">
          <Phone className="size-5" />
          <span className="text-xs font-semibold mt-1">Call</span>
        </a>
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-3 bg-bubblegum text-white">
          <MessageCircle className="size-5" />
          <span className="text-xs font-semibold mt-1">WhatsApp</span>
        </a>
        <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-3 text-primary-deep">
          <Navigation className="size-5" />
          <span className="text-xs font-semibold mt-1">Directions</span>
        </a>
      </div>
    </div>
  );
}
