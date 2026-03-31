import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) return notFound();

  return (
    <main>
      <Header />

      <section className="container-main py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card relative aspect-[4/5] overflow-hidden bg-pink-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-sm font-medium text-pink-600">
                {product.category}
              </p>
              <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-pink-700">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice ? (
                <span className="text-slate-400 line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              ) : null}
            </div>

            <p className="leading-7 text-slate-600">{product.description}</p>

            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Mavjud ranglar
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="rounded-full border border-pink-200 bg-pink-50 px-3 py-2 text-sm"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Holati:{" "}
                <span className={product.inStock ? "text-green-600" : "text-red-500"}>
                  {product.inStock ? "Sotuvda bor" : "Hozircha yo‘q"}
                </span>
              </p>
            </div>

            <div className="flex gap-3">
              <Link href="/cart" className="btn-primary">
                Savatga qo‘shish
              </Link>
              <Link href="/checkout" className="btn-secondary">
                Tez checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
