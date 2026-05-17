import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, MessageCircle, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { getCollection, getCollectionProducts } from "@/lib/products";

export const Route = createFileRoute("/collection/$slug")({
  loader: ({ params }) => {
    const collection = getCollection(params.slug);
    if (!collection) throw notFound();
    return { collection, products: getCollectionProducts(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.collection.title} — iLens Eyewear` },
      { name: "description", content: loaderData?.collection.description ?? "Shop premium iLens eyewear collections." },
      { property: "og:title", content: `${loaderData?.collection.title} — iLens Eyewear` },
      { property: "og:description", content: loaderData?.collection.description ?? "" },
      { property: "og:image", content: loaderData?.collection.image ?? "" },
    ],
  }),
  component: CollectionPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-4 bg-background text-center">
      <div>
        <h1 className="font-display text-3xl font-bold text-ink">Collection not found</h1>
        <p className="mt-2 text-muted-foreground">This iLens edit is not available right now.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-ink text-background px-5 py-2.5 text-sm font-semibold">Back to home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="min-h-screen grid place-items-center px-4 bg-background text-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">This collection didn't load</h1>
          <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
          <button onClick={() => { router.invalidate(); reset(); }} className="mt-5 rounded-full bg-ink text-background px-5 py-2.5 text-sm font-semibold">Try again</button>
        </div>
      </div>
    );
  },
});

const WA_LINK = "https://wa.me/919999999999?text=Hi%20iLens%2C%20I%20need%20help%20choosing%20frames";

function CollectionPage() {
  const { collection, products } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
            <ArrowLeft className="size-4" /> Home
          </Link>
          <a href={WA_LINK} className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-4 py-2 text-xs font-bold shadow-lg shadow-whatsapp/20">
            <MessageCircle className="size-4" /> WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-beige-soft">
          <div className="mx-auto max-w-7xl px-4 py-10 md:py-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
            <div className="relative z-10">
              <p className="text-sm font-semibold text-primary">{collection.kicker}</p>
              <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold leading-tight text-ink">{collection.title}</h1>
              <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-foreground/75">{collection.description}</p>
              <div className="mt-7 grid grid-cols-3 max-w-xl gap-3 text-sm">
                {[
                  [Truck, "Free shipping"],
                  [ShieldCheck, "ISO certified"],
                  [Sparkles, "Premium lens"],
                ].map(([Icon, label]) => (
                  <div key={label as string} className="rounded-2xl bg-background/80 ring-1 ring-border p-3 font-semibold text-ink">
                    <Icon className="mb-2 size-5 text-primary" /> {label as string}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-3xl bg-background ring-1 ring-border animate-soft-pulse">
              <img src={collection.image} alt={collection.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/85 via-background/10 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-background/90 px-4 py-3 ring-1 ring-border backdrop-blur">
                <div className="text-xs text-muted-foreground">Starting from</div>
                <div className="font-display text-2xl font-extrabold text-ink">₹350</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-18">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">Curated by iLens</p>
                <h2 className="mt-1 font-display text-3xl md:text-4xl font-bold text-ink">Premium picks for you</h2>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-soft px-4 py-2 text-xs font-bold text-ink ring-1 ring-sky/40">
                <Star className="size-4 fill-current text-primary" /> {products.length} styles available
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((p) => {
                const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
                return (
                  <Link key={p.slug} to="/product/$slug" params={{ slug: p.slug }} className="group block rounded-3xl bg-background p-2 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-beige-soft">
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold text-background">{off}% OFF</span>
                      {p.freeLens && <span className="absolute right-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-ink">Free Lens</span>}
                      <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-3">
                      <div className="text-xs text-muted-foreground">{p.tag} · {p.shape}</div>
                      <h3 className="mt-1 line-clamp-1 font-display text-lg font-bold text-ink">{p.name}</h3>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="font-bold text-ink">₹{p.price.toLocaleString("en-IN")}</span>
                        <span className="text-xs text-muted-foreground line-through">₹{p.mrp.toLocaleString("en-IN")}</span>
                      </div>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ink">View details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-sky-soft py-12">
          <div className="mx-auto max-w-7xl px-4 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink">Need help choosing?</h2>
              <p className="mt-2 text-foreground/70">Send us your face shape or prescription and the iLens team will recommend the right frame.</p>
            </div>
            <a href={WA_LINK} className="inline-flex w-fit items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-whatsapp-foreground shadow-xl shadow-whatsapp/20">
              <MessageCircle className="size-4" /> Chat with iLens
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}