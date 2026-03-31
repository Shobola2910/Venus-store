import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Venus Silk Beige",
    slug: "venus-silk-beige",
    price: 129000,
    oldPrice: 149000,
    category: "Silk",
    material: "Artificial Silk",
    colors: ["Beige", "Cream", "Brown"],
    image: "/images/scarf-1.jpg",
    images: ["/images/scarf-1.jpg", "/images/scarf-1.jpg", "/images/scarf-1.jpg"],
    inStock: true,
    description: "Yumshoq, nafis va kundalik hamda bayram uslubi uchun mos premium ro‘mol.",
    featured: true
  },
  {
    id: 2,
    name: "Venus Classic Black",
    slug: "venus-classic-black",
    price: 139000,
    category: "Classic",
    material: "Cotton Blend",
    colors: ["Black", "Gray"],
    image: "/images/scarf-2.jpg",
    images: ["/images/scarf-2.jpg", "/images/scarf-2.jpg"],
    inStock: true,
    description: "Minimal va zamonaviy ko‘rinish uchun klassik qora ro‘mol.",
    featured: true
  },
  {
    id: 3,
    name: "Venus Soft Rose",
    slug: "venus-soft-rose",
    price: 119000,
    category: "Daily",
    material: "Soft Jersey",
    colors: ["Rose", "Pink"],
    image: "/images/scarf-3.jpg",
    images: ["/images/scarf-3.jpg"],
    inStock: true,
    description: "Yengil, qulay va yumshoq fakturali kundalik foydalanish uchun model."
  },
  {
    id: 4,
    name: "Venus Premium White",
    slug: "venus-premium-white",
    price: 149000,
    category: "Premium",
    material: "Premium Satin",
    colors: ["White", "Pearl"],
    image: "/images/scarf-4.jpg",
    images: ["/images/scarf-4.jpg"],
    inStock: false,
    description: "Premium kolleksiya uchun oq rangdagi nafis va yorqin model."
  }
];
