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
