import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search, ShoppingBag, Heart, User, Menu, X,
  Eye, Glasses, Sun, Baby, Monitor, BookOpen,
  Truck, ShieldCheck, Tag, RefreshCcw,
  Star, MapPin, Phone, MessageCircle, Navigation,
  Instagram, ChevronRight, Sparkles, ArrowRight, Calendar,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "iLens Eyewear — Smart Vision Starts Here | Bishnupur" },
      { name: "description", content: "Shop premium eyeglasses, sunglasses, computer glasses & kids eyewear at iLens Eyewear, Bishnupur. Free lens, ISO certified, free shipping all over India." },
      { property: "og:title", content: "iLens Eyewear — Smart Vision Starts Here" },
      { property: "og:description", content: "Premium frames from ₹350. Free lens with select frames. Free shipping all over India." },
    ],
  }),
});

const WA_NUMBER = "919999999999"; // placeholder; iLens public contact via Instagram
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%20iLens%2C%20I%27m%20interested%20in%20your%20eyewear`;
const PHONE_LINK = "tel:+919999999999";
const MAPS_LINK = "https://maps.app.goo.gl/KhgY2g92bH2Ht5b6A?g_st=ic";
const INSTAGRAM_LINK = "https://www.instagram.com/ilenseyewear/";
const SHOP_LINK = "https://ilenseyewear.com/shop/";

const IMG = {
  men: "https://ilenseyewear.com/wp-content/uploads/2026/05/mens-Eyewear-1.png",
  women: "https://ilenseyewear.com/wp-content/uploads/2026/05/Womens-Eyewear-2.png",
  kids: "https://ilenseyewear.com/wp-content/uploads/2026/05/Kids-Eyewear.png",
  sunMen: "https://ilenseyewear.com/wp-content/uploads/2026/04/Untitled-design-86.png",
  sunWomen: "https://ilenseyewear.com/wp-content/uploads/2026/04/Untitled-design-87.png",
  hero1: "https://ilenseyewear.com/wp-content/uploads/2026/05/modern-space.png",
  hero2: "https://ilenseyewear.com/wp-content/uploads/2026/05/Untitled-design-2026-05-07T103254.405.png",
  classic: "https://ilenseyewear.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-13-at-11.47.57-PM-2.jpeg",
  shapes: {
    oval: "https://ilenseyewear.com/wp-content/uploads/2026/05/shape1-img1.jpg",
    square: "https://ilenseyewear.com/wp-content/uploads/2026/05/shape2-img2.jpg",
    round: "https://ilenseyewear.com/wp-content/uploads/2026/05/shape3-img2.jpg",
    heart: "https://ilenseyewear.com/wp-content/uploads/2026/05/shape4-img2.jpg",
  },
  frames: {
    Round: "https://ilenseyewear.com/wp-content/uploads/2026/05/Round.png",
    Rectangle: "https://ilenseyewear.com/wp-content/uploads/2026/05/Rectangle.png",
    Geometric: "https://ilenseyewear.com/wp-content/uploads/2026/05/Geometric.png",
    Clubmaster: "https://ilenseyewear.com/wp-content/uploads/2026/05/Clubmaster.png",
    Square: "https://ilenseyewear.com/wp-content/uploads/2026/05/SQUARE-2.png",
    "Cat Eye": "https://ilenseyewear.com/wp-content/uploads/2026/05/Cateye.png",
    Aviator: "https://ilenseyewear.com/wp-content/uploads/2026/05/Aviator.png",
  },
};

const PRODUCTS = [
  { name: "ILENS emmy", img: "https://ilenseyewear.com/wp-content/uploads/2026/05/SDN07703-300x300.jpg", price: 350, mrp: 500, tag: "Eyeglasses", url: "https://ilenseyewear.com/product/ilens-emmy-5/" },
  { name: "ILENS woww (with free lens)", img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn07040-300x300.jpg", price: 1500, mrp: 2000, tag: "Free Lens", url: "https://ilenseyewear.com/product/ilens-wowwwith-free-lens-3/" },
  { name: "ILENS putu (with free lens)", img: "https://ilenseyewear.com/wp-content/uploads/2026/05/SDN06154-scaled-300x300.jpg", price: 1000, mrp: 1500, tag: "Free Lens", url: "https://ilenseyewear.com/product/ilens-putuwith-free-lens-5/" },
  { name: "ILENS woww (with free lens)", img: "https://ilenseyewear.com/wp-content/uploads/2026/05/SDN07226-300x300.jpg", price: 1500, mrp: 2000, tag: "Trending", url: "https://ilenseyewear.com/product/ilens-wowwwith-free-lens-24/" },
  { name: "ILENS wing (with free lens)", img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08804-300x300.jpg", price: 1000, mrp: 1500, tag: "New", url: "https://ilenseyewear.com/product/ilens-wing-with-free-lens-9/" },
  { name: "ILENS wing (with free lens)", img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08772-300x300.jpg", price: 1000, mrp: 1500, tag: "New", url: "https://ilenseyewear.com/product/ilens-wing-with-free-lens-8/" },
  { name: "ILENS wing — Cat Eye", img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08764-300x300.jpg", price: 1000, mrp: 1500, tag: "Cat Eye", url: "https://ilenseyewear.com/product/ilens-wing-with-free-lens-7/" },
  { name: "ILENS wing", img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08750-300x300.jpg", price: 800, mrp: 1000, tag: "Sale", url: "https://ilenseyewear.com/product/ilens-wing-with-free-lens-5/" },
  { name: "ILENS wing", img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08738-300x300.jpg", price: 800, mrp: 1000, tag: "Sale", url: "https://ilenseyewear.com/product/ilens-wing-with-free-lens-4/" },
  { name: "ILENS hoston (with free lens)", img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08695-300x300.jpg", price: 1500, mrp: 2000, tag: "Cat Eye", url: "https://ilenseyewear.com/product/ilens-hoston-with-free-lens-5/" },
];

const CATEGORIES = [
  { name: "Eyeglasses", icon: Glasses, href: "https://ilenseyewear.com/product-category/eyeglasses/" },
  { name: "Sunglasses", icon: Sun, href: "https://ilenseyewear.com/product-category/sunglasses/" },
  { name: "Power Sunglasses", icon: Eye, href: SHOP_LINK },
  { name: "Kids Glasses", icon: Baby, href: "https://ilenseyewear.com/product-category/eyeglasses/kids-eyeglasses/" },
  { name: "Computer Glasses", icon: Monitor, href: SHOP_LINK },
  { name: "Reading Glasses", icon: BookOpen, href: SHOP_LINK },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("reveal-in");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <PromoBar />
      <Navbar />
      <main>
        <Categories />
        <Hero />
        <TrendingProducts />
        <WhyUs />
        <BrowseByShape />
        <CollectionsBanner />
        <FaceShapeGuide />
        <DealsOfWeek />
        <Testimonials />
        <VisitStore />
        <Newsletter />
      </main>
      <Footer />
      <FloatingWA />
      <MobileBar />
    </div>
  );
}

/* -------------------- PROMO + NAV -------------------- */

function PromoBar() {
  return (
    <div className="bg-ink text-background text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-2 overflow-hidden">
        <span className="hidden sm:inline">Free shipping all over India</span>
        <span className="hidden sm:inline">•</span>
        <span>Get 25% OFF on your first purchase — code <strong>ILENS25</strong></span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">ISO Certified</span>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <span className="grid place-items-center size-9 rounded-full bg-primary/40 ring-1 ring-primary/60">
        <Eye className="size-5 text-ink" strokeWidth={2.4} />
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-ink">iLens<span className="text-primary"> .</span></span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "New Arrivals", href: SHOP_LINK },
    { label: "Eyeglasses", href: "https://ilenseyewear.com/product-category/eyeglasses/" },
    { label: "Sunglasses", href: "https://ilenseyewear.com/product-category/sunglasses/" },
    { label: "Computer Glasses", href: SHOP_LINK },
    { label: "Kids", href: "https://ilenseyewear.com/product-category/eyeglasses/kids-eyeglasses/" },
  ];

  return (
    <header className={`sticky top-0 z-40 backdrop-blur transition-all ${scrolled ? "bg-background/90 shadow-sm" : "bg-background/70"}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Menu"><Menu className="size-6" /></button>
        <Logo />

        <div className="hidden md:flex flex-1 max-w-xl ml-6">
          <div className="flex items-center w-full rounded-full bg-surface ring-1 ring-border px-4 py-2.5">
            <Search className="size-4 text-muted-foreground" />
            <input
              placeholder="What are you looking for?"
              className="bg-transparent flex-1 px-3 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-5 ml-auto text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-ink transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="ml-auto md:ml-0 flex items-center gap-2 md:gap-3">
          <a href={INSTAGRAM_LINK} aria-label="Instagram" className="hidden sm:grid place-items-center size-9 rounded-full hover:bg-surface transition-colors">
            <Instagram className="size-5" />
          </a>
          <a href="#account" aria-label="Account" className="grid place-items-center size-9 rounded-full hover:bg-surface transition-colors">
            <User className="size-5" />
          </a>
          <a href="#wishlist" aria-label="Wishlist" className="grid place-items-center size-9 rounded-full hover:bg-surface transition-colors">
            <Heart className="size-5" />
          </a>
          <a href={SHOP_LINK} aria-label="Cart" className="grid place-items-center size-9 rounded-full hover:bg-surface transition-colors">
            <ShoppingBag className="size-5" />
          </a>
        </div>
      </div>

      {/* Mobile search */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center w-full rounded-full bg-surface ring-1 ring-border px-4 py-2.5">
          <Search className="size-4 text-muted-foreground" />
          <input placeholder="Search frames, brands, styles…" className="bg-transparent flex-1 px-3 text-sm outline-none placeholder:text-muted-foreground" />
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-ink/40" onClick={() => setOpen(false)}>
          <div className="absolute left-0 top-0 h-full w-72 bg-background p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <Logo />
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="size-6" /></button>
            </div>
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="px-3 py-3 rounded-lg hover:bg-surface text-foreground">{l.label}</a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------- CATEGORIES -------------------- */

function Categories() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-6">
          {CATEGORIES.map(({ name, icon: Icon, href }) => (
            <a key={name} href={href} className="flex flex-col items-center text-center group" data-reveal>
              <div className="grid place-items-center size-20 sm:size-24 rounded-full bg-sky-soft group-hover:bg-sky transition-colors ring-1 ring-sky/40">
                <Icon className="size-9 sm:size-10 text-ink" strokeWidth={1.6} />
              </div>
              <span className="mt-2 text-xs sm:text-sm font-medium text-foreground/80 group-hover:text-ink">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-10">
        <div className="relative overflow-hidden rounded-3xl bg-beige" data-reveal>
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-14 lg:p-20 z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1 text-xs font-medium ring-1 ring-border">
                <Sparkles className="size-3.5 text-primary" /> New Season Collection
              </span>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-ink">
                Smart Vision <br/>
                <span className="text-primary">Starts Here.</span>
              </h1>
              <p className="mt-5 max-w-md text-foreground/70 text-base md:text-lg">
                Premium eyewear designed for sharp vision, lasting comfort and effortless style — handpicked frames from <strong>₹350</strong>, with free lens on select pairs.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={SHOP_LINK} className="inline-flex items-center gap-2 rounded-full bg-ink text-background px-6 py-3 text-sm font-semibold hover:bg-ink/85 transition-colors">
                  Shop Now <ArrowRight className="size-4" />
                </a>
                <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-background ring-1 ring-border px-6 py-3 text-sm font-semibold hover:bg-surface transition-colors">
                  <Calendar className="size-4" /> Book Eye Test
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-xs text-foreground/70">
                <div><div className="text-lg font-bold text-ink">169+</div> Styles</div>
                <div className="h-8 w-px bg-border" />
                <div><div className="text-lg font-bold text-ink">ISO</div> Certified</div>
                <div className="h-8 w-px bg-border" />
                <div><div className="text-lg font-bold text-ink">Free</div> Shipping</div>
              </div>
            </div>
            <div className="relative h-72 md:h-[520px]">
              <img src={IMG.hero1} alt="iLens hero eyewear" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-beige via-transparent to-transparent md:from-beige/90" />
              <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 rounded-2xl bg-background/90 px-4 py-3 shadow-lg ring-1 ring-border backdrop-blur">
                <div className="grid place-items-center size-10 rounded-full bg-sky-soft">
                  <Tag className="size-5 text-ink" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-ink">25% OFF</div>
                  <div className="text-xs text-muted-foreground">First purchase</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two image cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { img: IMG.men, title: "Men's Eyewear", href: "https://ilenseyewear.com/product-category/eyeglasses/mens-eyeglasses/" },
            { img: IMG.women, title: "Women's Eyewear", href: "https://ilenseyewear.com/product-category/eyeglasses/womens-eyeglasses/" },
            { img: IMG.kids, title: "Kids Eyewear", href: "https://ilenseyewear.com/product-category/eyeglasses/kids-eyeglasses/" },
          ].map((c) => (
            <a key={c.title} href={c.href} className="group relative block overflow-hidden rounded-2xl bg-sky-soft aspect-[4/3]" data-reveal>
              <img src={c.img} alt={c.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <h3 className="text-background text-xl font-bold">{c.title}</h3>
                <span className="grid place-items-center size-9 rounded-full bg-background text-ink"><ArrowRight className="size-4" /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TRENDING -------------------- */

function ProductCard({ p }: { p: (typeof PRODUCTS)[number] }) {
  const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
  return (
    <a href={p.url} className="group block" data-reveal>
      <div className="relative overflow-hidden rounded-2xl bg-beige-soft aspect-square ring-1 ring-border">
        {off > 0 && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-ink text-background text-[10px] font-bold px-2.5 py-1">
            {off}% OFF
          </span>
        )}
        <button className="absolute top-3 right-3 z-10 grid place-items-center size-8 rounded-full bg-background/90 hover:bg-background shadow-sm" aria-label="Wishlist">
          <Heart className="size-4 text-ink" />
        </button>
        <img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="mt-3 px-1">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.tag}</div>
        <div className="mt-0.5 font-medium text-ink line-clamp-1">{p.name}</div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-bold text-ink">₹{p.price.toLocaleString("en-IN")}</span>
          {p.mrp > p.price && (
            <span className="text-xs text-muted-foreground line-through">₹{p.mrp.toLocaleString("en-IN")}</span>
          )}
        </div>
      </div>
    </a>
  );
}

function TrendingProducts() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-8" data-reveal>
          <div>
            <p className="text-sm font-medium text-primary mb-2">Bestsellers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">Trending Eyewear</h2>
          </div>
          <a href={SHOP_LINK} className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-ink hover:gap-2 transition-all">
            View all <ChevronRight className="size-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {PRODUCTS.slice(0, 10).map((p, i) => <ProductCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}

/* -------------------- WHY US -------------------- */

function WhyUs() {
  const items = [
    { icon: Truck, title: "Free Shipping", sub: "All over India" },
    { icon: ShieldCheck, title: "ISO Certified", sub: "Trusted quality" },
    { icon: Tag, title: "Huge Savings", sub: "Up to 33% off" },
    { icon: RefreshCcw, title: "Easy Replacement", sub: "Hassle-free" },
  ];
  return (
    <section className="bg-surface py-10 md:py-14 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, sub }) => (
          <div key={title} className="flex items-center gap-4" data-reveal>
            <div className="grid place-items-center size-14 rounded-2xl bg-sky-soft ring-1 ring-sky/40">
              <Icon className="size-7 text-ink" strokeWidth={1.8} />
            </div>
            <div>
              <div className="font-semibold text-ink">{title}</div>
              <div className="text-sm text-muted-foreground">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- BROWSE BY SHAPE -------------------- */

function BrowseByShape() {
  const shapes = Object.entries(IMG.frames);
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10" data-reveal>
          <p className="text-sm font-medium text-primary mb-2">Shop by style</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Browse by Frame Shape</h2>
          <p className="mt-3 text-foreground/70 max-w-xl mx-auto">From timeless classics to bold statements — find the shape that fits your face and your story.</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {shapes.map(([name, src]) => (
            <a key={name} href={SHOP_LINK} className="group flex flex-col items-center" data-reveal>
              <div className="grid place-items-center w-full aspect-square rounded-2xl bg-beige-soft ring-1 ring-border group-hover:bg-sky-soft transition-colors p-4">
                <img src={src} alt={name} className="max-h-full max-w-full object-contain" />
              </div>
              <span className="mt-2 text-sm font-medium text-ink">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- COLLECTIONS BANNER -------------------- */

function CollectionsBanner() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-4">
        <a href={SHOP_LINK} className="relative overflow-hidden rounded-3xl bg-beige aspect-[16/10] md:aspect-[16/9]" data-reveal>
          <img src={IMG.hero2} alt="Forever classics" className="absolute inset-0 h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-beige/95 to-transparent" />
          <div className="relative z-10 p-8 md:p-12 max-w-sm">
            <p className="text-xs uppercase tracking-widest text-foreground/60">Forever Classics</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-ink">Timeless shapes, modern lens.</h3>
            <p className="mt-3 text-foreground/70">Our heritage shapes — refined for today.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline">
              Explore Collection <ArrowRight className="size-4" />
            </span>
          </div>
        </a>
        <a href={SHOP_LINK} className="relative overflow-hidden rounded-3xl bg-sky-soft aspect-[16/10] md:aspect-[16/9]" data-reveal>
          <img src={IMG.classic} alt="Premium" className="absolute inset-0 h-full w-full object-cover opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky/90 to-transparent" />
          <div className="relative z-10 p-8 md:p-12 max-w-sm">
            <p className="text-xs uppercase tracking-widest text-foreground/60">Premium Lens</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-ink">Free lens on every featured frame.</h3>
            <p className="mt-3 text-foreground/70">Anti-glare, blue-cut, photochromic options available.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline">
              Shop Featured <ArrowRight className="size-4" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

/* -------------------- FACE SHAPE GUIDE -------------------- */

function FaceShapeGuide() {
  const shapes = [
    { name: "Oval", img: IMG.shapes.oval, text: "Versatile and well-proportioned. Almost any frame shape suits — try angular or rounded styles." },
    { name: "Square", img: IMG.shapes.square, text: "Strong jaw and broad forehead. Round or oval frames soften sharp angles beautifully." },
    { name: "Round", img: IMG.shapes.round, text: "Soft cheeks and curves. Geometric, square or rectangular frames add definition." },
    { name: "Heart", img: IMG.shapes.heart, text: "Wider forehead, narrow chin. Soft, rounded or rimless frames balance your features." },
  ];
  return (
    <section className="py-12 md:py-20 bg-beige-soft">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10" data-reveal>
          <p className="text-sm font-medium text-primary mb-2">Frame Finder</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">What's your face shape?</h2>
          <p className="mt-3 text-foreground/70 max-w-xl mx-auto">A quick guide to finding frames that flatter you most.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {shapes.map((s) => (
            <div key={s.name} className="group rounded-2xl bg-background ring-1 ring-border overflow-hidden hover:shadow-lg transition-shadow" data-reveal>
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img src={s.img} alt={s.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-ink">{s.name}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- DEALS -------------------- */

function DealsOfWeek() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-8" data-reveal>
          <div>
            <p className="text-sm font-medium text-primary mb-2">Limited time</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">Deals of the Week</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { img: IMG.sunWomen, label: "Women's Sunglasses", href: "https://ilenseyewear.com/product-category/sunglasses/womens-sunglasses/" },
            { img: IMG.sunMen, label: "Men's Sunglasses", href: "https://ilenseyewear.com/product-category/sunglasses/mens-sunglasses/" },
          ].map((d) => (
            <a key={d.label} href={d.href} className="group relative overflow-hidden rounded-3xl aspect-[16/10]" data-reveal>
              <img src={d.img} alt={d.label} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-ink/0" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-background/80 text-xs uppercase tracking-widest">Up to 33% Off</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-background mt-1">{d.label}</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-background text-ink px-4 py-2 text-sm font-semibold">
                  Shop <ArrowRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */

function Testimonials() {
  const reviews = [
    { name: "Ankita D.", text: "Loved my new pair! Lightweight, stylish and the eye test was so professional. Best optical shop in Bishnupur.", role: "Verified buyer" },
    { name: "Soumyajit M.", text: "Great variety, honest pricing and they delivered exactly when promised. The free lens offer was a sweet bonus.", role: "Verified buyer" },
    { name: "Riya G.", text: "Friendly staff helped me pick a cat-eye that suits my face perfectly. The store has such a good vibe.", role: "Verified buyer" },
  ];
  return (
    <section className="py-12 md:py-20 bg-sky-soft">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10" data-reveal>
          <p className="text-sm font-medium text-ink/70 mb-2">Loved across Bankura</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Real customers, real smiles</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-background p-6 ring-1 ring-border" data-reveal>
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="mt-4 text-foreground/80">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid place-items-center size-10 rounded-full bg-sky-soft text-ink font-bold">{r.name[0]}</div>
                <div>
                  <div className="font-semibold text-ink text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- VISIT STORE -------------------- */

function VisitStore() {
  return (
    <section id="book" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8 items-center">
        <div data-reveal>
          <p className="text-sm font-medium text-primary mb-2">Visit our store</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Pop in for a free eye test</h2>
          <p className="mt-3 text-foreground/70">From the temple town of Bishnupur, iLens Eyewear has been serving thousands with computerized eye testing, premium frames and prescription lenses — all under one roof.</p>
          <ul className="mt-6 space-y-3 text-foreground/80">
            <li className="flex items-start gap-3"><MapPin className="size-5 text-primary mt-0.5" /><span>Bishnupur, Bankura, West Bengal</span></li>
            <li className="flex items-start gap-3"><Phone className="size-5 text-primary mt-0.5" /><span>Open 7 days · 10am — 9pm</span></li>
            <li className="flex items-start gap-3"><ShieldCheck className="size-5 text-primary mt-0.5" /><span>ISO certified · trusted by 1,000+ customers</span></li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={MAPS_LINK} className="inline-flex items-center gap-2 rounded-full bg-ink text-background px-5 py-3 text-sm font-semibold hover:bg-ink/85 transition-colors">
              <Navigation className="size-4" /> Get Directions
            </a>
            <a href={WA_LINK} className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity">
              <MessageCircle className="size-4" /> WhatsApp Us
            </a>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden ring-1 ring-border aspect-[4/3] bg-surface" data-reveal>
          <iframe
            title="iLens Eyewear location"
            src="https://www.google.com/maps?q=Bishnupur,Bankura,West+Bengal&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- NEWSLETTER -------------------- */

function Newsletter() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-3xl bg-beige p-8 md:p-12 text-center" data-reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Get 25% off your first order</h2>
          <p className="mt-2 text-foreground/70">Join our newsletter for new arrivals and exclusive offers.</p>
          <form className="mt-6 max-w-md mx-auto flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-background ring-1 ring-border px-5 py-3 text-sm outline-none focus:ring-primary"
            />
            <button className="rounded-full bg-ink text-background px-6 py-3 text-sm font-semibold hover:bg-ink/85 transition-colors">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */

function Footer() {
  const cols = [
    { title: "Shop", links: [["Eyeglasses", "https://ilenseyewear.com/product-category/eyeglasses/"], ["Sunglasses", "https://ilenseyewear.com/product-category/sunglasses/"], ["Kids", "https://ilenseyewear.com/product-category/eyeglasses/kids-eyeglasses/"], ["New Arrivals", SHOP_LINK]] },
    { title: "Help", links: [["Contact", WA_LINK], ["Track Order", "https://ilenseyewear.com/my-account/"], ["Shipping", "#"], ["Returns", "#"]] },
    { title: "About", links: [["Our Story", "#"], ["ISO Certification", "#"], ["Visit Store", MAPS_LINK], ["Instagram", INSTAGRAM_LINK]] },
  ];
  return (
    <footer className="bg-ink text-background/80">
      <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid place-items-center size-9 rounded-full bg-primary/40 ring-1 ring-primary/60">
              <Eye className="size-5 text-background" strokeWidth={2.4} />
            </span>
            <span className="font-display text-xl font-bold text-background">iLens<span className="text-primary"> .</span></span>
          </div>
          <p className="mt-4 text-sm text-background/70 max-w-xs">Smart vision starts here. Premium eyewear from the temple town of Bishnupur, delivered all over India.</p>
          <div className="mt-5 flex gap-3">
            <a href={INSTAGRAM_LINK} aria-label="Instagram" className="grid place-items-center size-9 rounded-full bg-background/10 hover:bg-background/20 transition-colors"><Instagram className="size-4" /></a>
            <a href={WA_LINK} aria-label="WhatsApp" className="grid place-items-center size-9 rounded-full bg-background/10 hover:bg-background/20 transition-colors"><MessageCircle className="size-4" /></a>
            <a href={PHONE_LINK} aria-label="Call" className="grid place-items-center size-9 rounded-full bg-background/10 hover:bg-background/20 transition-colors"><Phone className="size-4" /></a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-background font-semibold mb-4">{c.title}</div>
            <ul className="space-y-2 text-sm">
              {c.links.map(([label, href]) => (
                <li key={label}><a href={href} className="hover:text-background transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/60">
          <div>© {new Date().getFullYear()} iLens Eyewear. All rights reserved.</div>
          <div>Website by <a href="#" className="text-background hover:underline font-semibold">Pixorra</a></div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- FLOATING + MOBILE BAR -------------------- */

function FloatingWA() {
  return (
    <a
      href={WA_LINK}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 md:bottom-6 right-5 z-40 grid place-items-center size-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}

function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background border-t border-border grid grid-cols-3">
      <a href={PHONE_LINK} className="flex flex-col items-center justify-center py-3 gap-0.5">
        <Phone className="size-5 text-ink" />
        <span className="text-[11px] font-medium text-ink">Call</span>
      </a>
      <a href={WA_LINK} className="flex flex-col items-center justify-center py-3 gap-0.5 bg-[#25D366] text-white">
        <MessageCircle className="size-5" />
        <span className="text-[11px] font-medium">WhatsApp</span>
      </a>
      <a href={MAPS_LINK} className="flex flex-col items-center justify-center py-3 gap-0.5">
        <Navigation className="size-5 text-ink" />
        <span className="text-[11px] font-medium text-ink">Directions</span>
      </a>
    </div>
  );
}
