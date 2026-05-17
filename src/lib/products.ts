export type Product = {
  slug: string;
  name: string;
  img: string;
  gallery?: string[];
  price: number;
  mrp: number;
  tag: string;
  category: "Eyeglasses" | "Sunglasses" | "Computer" | "Kids" | "Reading";
  shape: "Round" | "Square" | "Cat Eye" | "Aviator" | "Rectangle" | "Geometric" | "Clubmaster";
  gender: "Men" | "Women" | "Unisex" | "Kids";
  material: string;
  colors: { name: string; hex: string }[];
  freeLens: boolean;
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "ilens-emmy",
    name: "ILENS Emmy",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/SDN07703-300x300.jpg",
    price: 350, mrp: 500, tag: "Bestseller",
    category: "Eyeglasses", shape: "Rectangle", gender: "Unisex",
    material: "Lightweight TR90",
    colors: [{ name: "Matte Black", hex: "#1a1a1a" }, { name: "Tortoise", hex: "#7a4b2a" }],
    freeLens: false,
    description: "A timeless rectangle frame that pairs effortlessly with every outfit. Built from lightweight TR90 for all-day comfort.",
  },
  {
    slug: "ilens-woww-1",
    name: "ILENS Woww",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn07040-300x300.jpg",
    price: 1500, mrp: 2000, tag: "Free Lens",
    category: "Eyeglasses", shape: "Round", gender: "Unisex",
    material: "Premium Acetate",
    colors: [{ name: "Crystal Clear", hex: "#e8eef2" }, { name: "Honey", hex: "#c89060" }],
    freeLens: true,
    description: "Round and refined. The Woww is for the dreamer — soft curves, premium acetate and a feather-light feel.",
  },
  {
    slug: "ilens-putu",
    name: "ILENS Putu",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/SDN06154-scaled-300x300.jpg",
    price: 1000, mrp: 1500, tag: "Free Lens",
    category: "Eyeglasses", shape: "Geometric", gender: "Women",
    material: "Hand-polished Acetate",
    colors: [{ name: "Rose Beige", hex: "#d6a48e" }, { name: "Black", hex: "#0e0e0e" }],
    freeLens: true,
    description: "Soft geometric lines designed to flatter every face shape. Hand-polished and ready to turn heads.",
  },
  {
    slug: "ilens-woww-2",
    name: "ILENS Woww — Trending",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/SDN07226-300x300.jpg",
    price: 1500, mrp: 2000, tag: "Trending",
    category: "Eyeglasses", shape: "Round", gender: "Unisex",
    material: "Premium Acetate",
    colors: [{ name: "Black", hex: "#0e0e0e" }, { name: "Brown", hex: "#5a3a22" }],
    freeLens: true,
    description: "The trending edition of our cult favourite. Bolder lines, the same iconic comfort.",
  },
  {
    slug: "ilens-wing-1",
    name: "ILENS Wing",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08804-300x300.jpg",
    price: 1000, mrp: 1500, tag: "New",
    category: "Eyeglasses", shape: "Cat Eye", gender: "Women",
    material: "Acetate + Metal",
    colors: [{ name: "Tortoise", hex: "#7a4b2a" }, { name: "Wine", hex: "#5e1f2a" }],
    freeLens: true,
    description: "Lift your look with this gentle cat-eye silhouette — the modern muse of our Wing series.",
  },
  {
    slug: "ilens-wing-2",
    name: "ILENS Wing — Crystal",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08772-300x300.jpg",
    price: 1000, mrp: 1500, tag: "New",
    category: "Eyeglasses", shape: "Cat Eye", gender: "Women",
    material: "Acetate + Metal",
    colors: [{ name: "Crystal", hex: "#dde6ea" }, { name: "Rose", hex: "#cf8aa0" }],
    freeLens: true,
    description: "A translucent take on the Wing — light, airy and effortlessly chic.",
  },
  {
    slug: "ilens-wing-cateye",
    name: "ILENS Wing — Cat Eye",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08764-300x300.jpg",
    price: 1000, mrp: 1500, tag: "Cat Eye",
    category: "Eyeglasses", shape: "Cat Eye", gender: "Women",
    material: "Acetate",
    colors: [{ name: "Black", hex: "#0e0e0e" }, { name: "Caramel", hex: "#a06a3a" }],
    freeLens: true,
    description: "A statement cat-eye for the bold. Sharp uplift, soft contours.",
  },
  {
    slug: "ilens-wing-sale-1",
    name: "ILENS Wing Lite",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08750-300x300.jpg",
    price: 800, mrp: 1000, tag: "Sale",
    category: "Eyeglasses", shape: "Rectangle", gender: "Unisex",
    material: "TR90",
    colors: [{ name: "Black", hex: "#0e0e0e" }, { name: "Grey", hex: "#5a5a5a" }],
    freeLens: false,
    description: "The everyday Wing — engineered for comfort, priced to love.",
  },
  {
    slug: "ilens-wing-sale-2",
    name: "ILENS Wing Lite II",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08738-300x300.jpg",
    price: 800, mrp: 1000, tag: "Sale",
    category: "Eyeglasses", shape: "Square", gender: "Unisex",
    material: "TR90",
    colors: [{ name: "Tortoise", hex: "#7a4b2a" }, { name: "Black", hex: "#0e0e0e" }],
    freeLens: false,
    description: "Squared, refined, ready. A sharper take on our daily-driver Wing.",
  },
  {
    slug: "ilens-hoston",
    name: "ILENS Hoston",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/sdn08695-300x300.jpg",
    price: 1500, mrp: 2000, tag: "Cat Eye",
    category: "Eyeglasses", shape: "Cat Eye", gender: "Women",
    material: "Premium Acetate",
    colors: [{ name: "Bordeaux", hex: "#5e1f2a" }, { name: "Black", hex: "#0e0e0e" }],
    freeLens: true,
    description: "Architectural lines, runway-ready. The Hoston is unapologetically you.",
  },
  {
    slug: "ilens-sunrush",
    name: "ILENS Sunrush",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/04/Untitled-design-86.png",
    price: 899, mrp: 1299, tag: "Polarized",
    category: "Sunglasses", shape: "Aviator", gender: "Men",
    material: "UV400 Polycarbonate",
    colors: [{ name: "Ocean Black", hex: "#111827" }, { name: "Smoke Blue", hex: "#3f6078" }],
    freeLens: false,
    description: "A confident UV400 sunglass with a light aviator profile, made for bright days, drives and weekend styling.",
  },
  {
    slug: "ilens-aura-sun",
    name: "ILENS Aura Sun",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/04/Untitled-design-87.png",
    price: 999, mrp: 1499, tag: "Sunglasses",
    category: "Sunglasses", shape: "Cat Eye", gender: "Women",
    material: "Gradient UV Lens",
    colors: [{ name: "Champagne", hex: "#d8b98c" }, { name: "Rose Smoke", hex: "#b88291" }],
    freeLens: false,
    description: "Soft glamour with protective tinted lenses — an elevated sunglass for daily city wear and travel.",
  },
  {
    slug: "ilens-screen-ease",
    name: "ILENS Screen Ease",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/modern-space.png",
    price: 799, mrp: 1199, tag: "Blue Cut",
    category: "Computer", shape: "Rectangle", gender: "Unisex",
    material: "Featherlight TR90",
    colors: [{ name: "Graphite", hex: "#30363d" }, { name: "Clear Mist", hex: "#dce8ee" }],
    freeLens: true,
    description: "A clean screen-time frame with blue-cut anti-glare lenses for work, study and late-night scrolling.",
  },
  {
    slug: "ilens-tiny-star",
    name: "ILENS Tiny Star",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/Kids-Eyewear.png",
    price: 650, mrp: 999, tag: "Kids",
    category: "Kids", shape: "Round", gender: "Kids",
    material: "Flexible Kids TR90",
    colors: [{ name: "Sky Pop", hex: "#8cc7e8" }, { name: "Berry", hex: "#c65d7b" }],
    freeLens: false,
    description: "Flexible, playful and comfortable for growing faces — made for school days and everyday adventures.",
  },
  {
    slug: "ilens-reader-pro",
    name: "ILENS Reader Pro",
    img: "https://ilenseyewear.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-13-at-11.47.57-PM-2.jpeg",
    price: 550, mrp: 850, tag: "Reading",
    category: "Reading", shape: "Rectangle", gender: "Unisex",
    material: "Comfort Acetate",
    colors: [{ name: "Coffee", hex: "#5a3a22" }, { name: "Matte Black", hex: "#111111" }],
    freeLens: false,
    description: "A practical reader with a polished finish, balanced temples and clear everyday comfort.",
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const relatedProducts = (slug: string, limit = 4) =>
  PRODUCTS.filter((p) => p.slug !== slug).slice(0, limit);

export type Collection = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
};

export const COLLECTIONS: Collection[] = [
  { slug: "new-arrivals", title: "New Arrivals", kicker: "Fresh drops", description: "The latest iLens frames, lenses and statement styles in one premium collection.", image: "https://ilenseyewear.com/wp-content/uploads/2026/05/modern-space.png" },
  { slug: "eyeglasses", title: "Eyeglasses", kicker: "Daily vision", description: "Prescription-ready frames for work, study, travel and everyday confidence.", image: "https://ilenseyewear.com/wp-content/uploads/2026/05/mens-Eyewear-1.png" },
  { slug: "sunglasses", title: "Sunglasses", kicker: "UV style", description: "Protective sun styles with premium shapes for men and women.", image: "https://ilenseyewear.com/wp-content/uploads/2026/04/Untitled-design-86.png" },
  { slug: "power-sunglasses", title: "Power Sunglasses", kicker: "Power + shade", description: "Sunglass styling with prescription comfort and outdoor clarity.", image: "https://ilenseyewear.com/wp-content/uploads/2026/04/Untitled-design-87.png" },
  { slug: "kids-glasses", title: "Kids Glasses", kicker: "For little faces", description: "Flexible, safe and cheerful frames built for school and play.", image: "https://ilenseyewear.com/wp-content/uploads/2026/05/Kids-Eyewear.png" },
  { slug: "computer-glasses", title: "Computer Glasses", kicker: "Screen comfort", description: "Blue-cut, anti-glare styles for long screen days and focused nights.", image: "https://ilenseyewear.com/wp-content/uploads/2026/05/modern-space.png" },
  { slug: "reading-glasses", title: "Reading Glasses", kicker: "Clear close-up", description: "Comfortable readers with refined finishes and easy daily wear.", image: "https://ilenseyewear.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-13-at-11.47.57-PM-2.jpeg" },
  { slug: "men", title: "Men's Eyewear", kicker: "Sharp profiles", description: "Clean, confident frames selected for modern everyday style.", image: "https://ilenseyewear.com/wp-content/uploads/2026/05/mens-Eyewear-1.png" },
  { slug: "women", title: "Women's Eyewear", kicker: "Elegant fits", description: "Soft, expressive and premium frames that flatter beautifully.", image: "https://ilenseyewear.com/wp-content/uploads/2026/05/Womens-Eyewear-2.png" },
  { slug: "kids", title: "Kids Eyewear", kicker: "Light + safe", description: "Comfortable frames made for active children and growing prescriptions.", image: "https://ilenseyewear.com/wp-content/uploads/2026/05/Kids-Eyewear.png" },
  { slug: "classics", title: "Forever Classics", kicker: "Timeless shapes", description: "Rectangle, round and square frames that never go out of style.", image: "https://ilenseyewear.com/wp-content/uploads/2026/05/Untitled-design-2026-05-07T103254.405.png" },
  { slug: "premium-lens", title: "Premium Lens Picks", kicker: "Lens-first comfort", description: "Featured frames eligible for anti-glare, blue-cut and prescription lens upgrades.", image: "https://ilenseyewear.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-13-at-11.47.57-PM-2.jpeg" },
  ...["round", "rectangle", "geometric", "clubmaster", "square", "cat-eye", "aviator"].map((slug) => ({
    slug,
    title: `${slug.replace("-", " ").replace(/\b\w/g, (m) => m.toUpperCase())} Frames`,
    kicker: "Shop by shape",
    description: "A curated iLens edit based on the frame silhouette you selected.",
    image: "https://ilenseyewear.com/wp-content/uploads/2026/05/modern-space.png",
  })),
];

export const getCollection = (slug: string) => COLLECTIONS.find((c) => c.slug === slug);

export const getCollectionProducts = (slug: string) => {
  const byShape = (shape: Product["shape"]) => PRODUCTS.filter((p) => p.shape === shape);
  const filtered = (() => {
    switch (slug) {
      case "eyeglasses": return PRODUCTS.filter((p) => p.category === "Eyeglasses");
      case "sunglasses":
      case "power-sunglasses": return PRODUCTS.filter((p) => p.category === "Sunglasses");
      case "kids-glasses":
      case "kids": return PRODUCTS.filter((p) => p.category === "Kids" || p.gender === "Kids");
      case "computer-glasses": return PRODUCTS.filter((p) => p.category === "Computer");
      case "reading-glasses": return PRODUCTS.filter((p) => p.category === "Reading");
      case "men": return PRODUCTS.filter((p) => p.gender === "Men" || p.gender === "Unisex");
      case "women": return PRODUCTS.filter((p) => p.gender === "Women" || p.gender === "Unisex");
      case "premium-lens": return PRODUCTS.filter((p) => p.freeLens);
      case "round": return byShape("Round");
      case "rectangle": return byShape("Rectangle");
      case "geometric": return byShape("Geometric");
      case "clubmaster": return byShape("Clubmaster");
      case "square": return byShape("Square");
      case "cat-eye": return byShape("Cat Eye");
      case "aviator": return byShape("Aviator");
      default: return PRODUCTS;
    }
  })();

  return filtered.length ? filtered : PRODUCTS;
};
