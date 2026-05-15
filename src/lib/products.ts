export type Product = {
  slug: string;
  name: string;
  img: string;
  gallery?: string[];
  price: number;
  mrp: number;
  tag: string;
  category: "Eyeglasses" | "Sunglasses" | "Computer" | "Kids";
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
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const relatedProducts = (slug: string, limit = 4) =>
  PRODUCTS.filter((p) => p.slug !== slug).slice(0, limit);
