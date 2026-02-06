export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Artisan Leather Tote",
    description: "Hand-stitched Italian leather tote with gold-plated hardware. Each piece is crafted by master artisans with decades of experience.",
    price: 1850,
    originalPrice: 2200,
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop"
    ],
    category: "Bags",
    tags: ["leather", "handmade", "luxury"],
    inStock: true,
    featured: true
  },
  {
    id: "2",
    name: "Cashmere Wrap Coat",
    description: "Pure Mongolian cashmere coat with silk lining. Timeless elegance meets unparalleled comfort.",
    price: 3200,
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop"
    ],
    category: "Outerwear",
    tags: ["cashmere", "winter", "luxury"],
    inStock: true,
    featured: true
  },
  {
    id: "3",
    name: "Swiss Automatic Watch",
    description: "18k rose gold case with sapphire crystal. Swiss-made automatic movement with 72-hour power reserve.",
    price: 12500,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop"
    ],
    category: "Watches",
    tags: ["swiss", "gold", "automatic"],
    inStock: true,
    featured: true
  },
  {
    id: "4",
    name: "Diamond Tennis Bracelet",
    description: "4.5 carat total weight, VS clarity diamonds set in platinum. Each stone hand-selected for brilliance.",
    price: 8900,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop"
    ],
    category: "Jewelry",
    tags: ["diamond", "platinum", "luxury"],
    inStock: true,
    featured: true
  },
  {
    id: "5",
    name: "Silk Evening Dress",
    description: "Hand-draped mulberry silk gown with crystal embellishments. Made-to-measure available.",
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop"
    ],
    category: "Dresses",
    tags: ["silk", "evening", "formal"],
    inStock: true
  },
  {
    id: "6",
    name: "Alligator Leather Belt",
    description: "Genuine American alligator with 18k gold buckle. Each belt is a unique piece of art.",
    price: 980,
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&auto=format&fit=crop"
    ],
    category: "Accessories",
    tags: ["leather", "exotic", "luxury"],
    inStock: true
  },
  {
    id: "7",
    name: "Merino Wool Suit",
    description: "Super 150s wool, fully canvassed construction. Tailored in Italy by master craftsmen.",
    price: 3800,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop"
    ],
    category: "Suits",
    tags: ["wool", "tailored", "italian"],
    inStock: true
  },
  {
    id: "8",
    name: "Pearl Strand Necklace",
    description: "South Sea pearls, 12-14mm, with 18k white gold clasp. Lustrous perfection.",
    price: 15000,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop"
    ],
    category: "Jewelry",
    tags: ["pearls", "gold", "classic"],
    inStock: true
  }
];

export const categories = [
  "All",
  "Bags",
  "Outerwear",
  "Watches",
  "Jewelry",
  "Dresses",
  "Accessories",
  "Suits"
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}
