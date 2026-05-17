import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft, Heart, Share2, ShoppingBag, Star, Truck, ShieldCheck,
  RefreshCcw, Sparkles, Eye, Check, MessageCircle, ChevronRight,
} from "lucide-react";
import { getProduct, relatedProducts, PRODUCTS, type Product } from "@/lib/products";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — iLens Eyewear` },
      { name: "description", content: loaderData?.product.description ?? "Premium eyewear by iLens." },
      { property: "og:title", content: `${loaderData?.product.name} — iLens Eyewear` },
      { property: "og:description", content: loaderData?.product.description ?? "" },
      { property: "og:image", content: loaderData?.product.img ?? "" },
    ],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-ink">Product not found</h1>
        <p className="mt-2 text-muted-foreground">The frame you're looking for has flown off our shelf.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-ink text-background px-5 py-2.5 text-sm font-semibold">
          Back to home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="min-h-screen grid place-items-center px-4 text-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Something went wrong</h1>
          <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
          <button onClick={() => { router.invalidate(); reset(); }} className="mt-5 rounded-full bg-ink text-background px-5 py-2.5 text-sm font-semibold">
            Try again
          </button>
        </div>
      </div>
    );
  },
});

const WA_NUMBER = "919999999999";
const MAPS_LINK = "https://maps.app.goo.gl/KhgY2g92bH2Ht5b6A?g_st=ic";

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const gallery = useMemo(
    () => product.gallery && product.gallery.length ? product.gallery : [product.img, product.img, product.img],
    [product]
  );
  const [active, setActive] = useState(0);
  const [color, setColor] = useState(product.colors[0]?.name);
  const [lens, setLens] = useState<"frame" | "single" | "blue" | "progressive">(product.freeLens ? "blue" : "frame");
  const [qty, setQty] = useState(1);
  const [wished, setWished] = useState(false);

  const lensOptions = [
    { id: "frame", label: "Only Frame", price: 0, desc: "Just the frame" },
    { id: "single", label: "Single Vision", price: 299, desc: "Standard prescription lens" },
    { id: "blue", label: "Blue Cut + AR", price: product.freeLens ? 0 : 499, desc: "Blocks blue light · anti-glare" },
    { id: "progressive", label: "Progressive", price: 1499, desc: "Multi-distance vision" },
  ] as const;

  const total = (product.price + (lensOptions.find((l) => l.id === lens)?.price ?? 0)) * qty;

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi iLens! I'd like to order:\n${product.name}\nColor: ${color}\nLens: ${lens}\nQty: ${qty}\nTotal: ₹${total}`
  )}`;

  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [product.slug]);

  const related = relatedProducts(product.slug, 4);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      {/* breadcrumb */}
      <div className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground min-w-0">
            <Link to="/" className="hover:text-ink shrink-0">Home</Link>
            <ChevronRight className="size-3 shrink-0" />
            <span className="shrink-0">{product.category}</span>
            <ChevronRight className="size-3 shrink-0" />
            <span className="text-ink font-medium truncate">{product.name}</span>
          </div>
          <Link to="/" className="hidden sm:inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-ink">
            <ArrowLeft className="size-4" /> Back
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 md:py-12 grid lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <div>
          <div className="relative overflow-hidden rounded-3xl bg-beige-soft ring-1 ring-border aspect-square group">
            <span className="absolute top-4 left-4 z-10 rounded-full bg-ink text-background text-[11px] font-bold tracking-wider px-3 py-1.5">
              {off}% OFF
            </span>
            {product.freeLens && (
              <span className="absolute top-4 right-4 z-10 rounded-full bg-primary/90 text-ink text-[11px] font-bold tracking-wider px-3 py-1.5 inline-flex items-center gap-1">
                <Sparkles className="size-3" /> Free Lens
              </span>
            )}
            <img
              src={gallery[active]}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-contain p-8 md:p-16 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative aspect-square rounded-xl bg-beige-soft ring-1 overflow-hidden transition ${
                  active === i ? "ring-2 ring-ink" : "ring-border hover:ring-foreground/40"
                }`}
              >
                <img src={g} alt="" className="absolute inset-0 h-full w-full object-contain p-3" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:pl-4">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{product.tag}</div>
          <h1 className="mt-2 font-display text-3xl md:text-5xl font-extrabold leading-tight text-ink">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
            </div>
            <span className="text-sm text-muted-foreground">4.9 · 1,200+ reviews</span>
          </div>

          <p className="mt-5 text-foreground/75 leading-relaxed">{product.description}</p>

          {/* price */}
          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-3xl font-extrabold text-ink">₹{product.price.toLocaleString("en-IN")}</span>
            <span className="text-base text-muted-foreground line-through">₹{product.mrp.toLocaleString("en-IN")}</span>
            <span className="rounded-full bg-sky-soft text-ink text-xs font-bold px-2.5 py-1 ring-1 ring-sky/40">Save ₹{(product.mrp - product.price).toLocaleString("en-IN")}</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">Inclusive of all taxes</div>

          {/* meta */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <Meta label="Shape" value={product.shape} />
            <Meta label="Material" value={product.material} />
            <Meta label="Best for" value={product.gender} />
          </div>

          {/* color */}
          <div className="mt-7">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-ink">Color · <span className="text-foreground/70 font-normal">{color}</span></h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  className={`group relative size-11 rounded-full ring-2 ring-offset-2 ring-offset-background transition ${
                    color === c.name ? "ring-ink" : "ring-border hover:ring-foreground/40"
                  }`}
                  style={{ background: c.hex }}
                  aria-label={c.name}
                >
                  {color === c.name && <Check className="size-4 text-background absolute inset-0 m-auto drop-shadow" />}
                </button>
              ))}
            </div>
          </div>

          {/* lens */}
          <div className="mt-7">
            <h3 className="text-sm font-semibold text-ink">Choose your lens</h3>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {lensOptions.map((l) => {
                const isFree = l.id === "blue" && product.freeLens;
                return (
                  <button
                    key={l.id}
                    onClick={() => setLens(l.id)}
                    className={`text-left rounded-2xl p-3.5 ring-1 transition relative ${
                      lens === l.id
                        ? "bg-sky-soft ring-ink"
                        : "bg-background ring-border hover:ring-foreground/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-ink text-sm">{l.label}</div>
                      {isFree ? (
                        <span className="text-[10px] font-bold tracking-wider text-primary">FREE</span>
                      ) : l.price > 0 ? (
                        <span className="text-xs font-semibold text-ink">+₹{l.price}</span>
                      ) : null}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{l.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* qty + actions */}
          <div className="mt-7 flex items-center gap-3">
            <div className="flex items-center rounded-full ring-1 ring-border bg-background">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="size-10 grid place-items-center text-lg font-semibold text-foreground/70 hover:text-ink">−</button>
              <span className="w-8 text-center font-semibold text-ink">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="size-10 grid place-items-center text-lg font-semibold text-foreground/70 hover:text-ink">+</button>
            </div>
            <button
              onClick={() => setWished((w) => !w)}
              className={`size-11 grid place-items-center rounded-full ring-1 transition ${
                wished ? "bg-sky-soft ring-primary text-ink" : "bg-background ring-border text-foreground/70 hover:text-ink"
              }`}
              aria-label="Wishlist"
            >
              <Heart className={`size-5 ${wished ? "fill-current" : ""}`} />
            </button>
            <button
              onClick={() => navigator.share?.({ title: product.name, url: window.location.href }).catch(() => {})}
              className="size-11 grid place-items-center rounded-full bg-background ring-1 ring-border text-foreground/70 hover:text-ink"
              aria-label="Share"
            >
              <Share2 className="size-5" />
            </button>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href={waLink} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-background px-6 py-3.5 text-sm font-semibold hover:bg-ink/85 transition-colors">
              <ShoppingBag className="size-4" /> Order on WhatsApp · ₹{total.toLocaleString("en-IN")}
            </a>
            <a href={MAPS_LINK} className="inline-flex items-center justify-center gap-2 rounded-full bg-background ring-1 ring-border px-6 py-3.5 text-sm font-semibold hover:bg-surface transition-colors">
              <Eye className="size-4" /> Try in Store
            </a>
          </div>

          {/* trust */}
          <div className="mt-7 grid grid-cols-3 gap-2 text-xs">
            <Trust icon={Truck} label="Free shipping" />
            <Trust icon={ShieldCheck} label="ISO certified" />
            <Trust icon={RefreshCcw} label="Easy returns" />
          </div>
        </div>
      </div>

      {/* details */}
      <section className="bg-beige-soft py-14">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm text-primary font-semibold">Crafted with care</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Built for everyday brilliance.</h2>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Each iLens frame is hand-finished in our Bishnupur workshop. We pair lightweight, durable materials with anti-glare prescription lenses so your eyes feel as good as you look — from your morning commute to late-night reads.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              {[
                "Lightweight " + product.material + " — barely there feel",
                "Free anti-glare blue-cut lens on featured frames",
                "Fits all standard prescriptions up to ±6.00",
                "1-year manufacturing warranty · 14-day easy returns",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="size-5 text-primary mt-0.5 shrink-0" /> <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-border bg-background aspect-[4/3]">
            <img src={product.img} alt={product.name} className="h-full w-full object-contain p-10" />
          </div>
        </div>
      </section>

      {/* related */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-sm text-primary font-semibold">You'll also love</p>
              <h2 className="mt-1 font-display text-3xl md:text-4xl font-bold text-ink">More from iLens</h2>
            </div>
            <Link to="/" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-ink hover:gap-2 transition-all">
              View all <ChevronRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((r) => {
              const ro = Math.round(((r.mrp - r.price) / r.mrp) * 100);
              return (
                <Link key={r.slug} to="/product/$slug" params={{ slug: r.slug }} className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-beige-soft aspect-square ring-1 ring-border">
                    {ro > 0 && (
                      <span className="absolute top-3 left-3 z-10 rounded-full bg-ink text-background text-[10px] font-bold px-2.5 py-1">{ro}% OFF</span>
                    )}
                    <img src={r.img} alt={r.name} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="mt-3 px-1">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{r.tag}</div>
                    <div className="mt-0.5 font-medium text-ink line-clamp-1">{r.name}</div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-bold text-ink">₹{r.price.toLocaleString("en-IN")}</span>
                      <span className="text-xs text-muted-foreground line-through">₹{r.mrp.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* mobile sticky bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border p-3 flex items-center gap-3">
        <div className="flex-1">
          <div className="text-xs text-muted-foreground">Total</div>
          <div className="font-display text-lg font-bold text-ink leading-none">₹{total.toLocaleString("en-IN")}</div>
        </div>
        <a href={waLink} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-background px-5 py-3 text-sm font-semibold flex-[1.4]">
          <MessageCircle className="size-4" /> Order Now
        </a>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-background ring-1 ring-border p-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold text-ink truncate">{value}</div>
    </div>
  );
}

function Trust({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-background ring-1 ring-border px-3 py-2.5">
      <Icon className="size-4 text-primary shrink-0" />
      <span className="font-medium text-foreground/80">{label}</span>
    </div>
  );
}

// reference to satisfy unused import in some bundlers
void PRODUCTS;
