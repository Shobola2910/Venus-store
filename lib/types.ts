export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number;
  category: string;
  material: string;
  colors: string[];
  image: string;
  images: string[];
  inStock: boolean;
  description: string;
  featured?: boolean;
};

export type CartItem = {
  productId: number;
  quantity: number;
  color: string;
};

export type OrderStatus =
  | "Yangi"
  | "Tasdiqlandi"
  | "Tayyorlanmoqda"
  | "Yetkazib berishda"
  | "Yetkazildi"
  | "Bekor qilindi";
