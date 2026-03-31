import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card overflow-hidden">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-[4/5] w-full bg-pink-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="space-y-3 p-4">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-slate-500">
            {product.category} • {product.material}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-pink-700">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice ? (
            <span className="text-sm text-slate-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          ) : null}
        </div>

        <div className="flex gap-2">
          <Link href={`/product/${product.slug}`} className="btn-secondary w-full">
            Ko‘rish
          </Link>
          <Link href="/cart" className="btn-primary w-full">
            Savatga
          </Link>
        </div>
      </div>
    </div>
  );
}
