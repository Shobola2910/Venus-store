import Link from "next/link";
import Header from "@/components/Header";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const item = products[0];
  const total = item.price;

  return (
    <main>
      <Header />

      <section className="container-main py-10">
        <h1 className="text-3xl font-bold">Savat</h1>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_0.8fr]">
          <div className="card p-6">
            <div className="flex items-center justify-between border-b border-pink-100 pb-4">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-slate-500">1 dona • Beige</p>
              </div>
              <p className="font-semibold text-pink-700">
                {formatPrice(item.price)}
              </p>
            </div>
          </div>

          <div className="card h-fit p-6">
            <h2 className="text-lg font-semibold">Buyurtma xulosasi</h2>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>

            <div className="mt-2 flex items-center justify-between text-sm">
              <span>Yetkazib berish</span>
              <span>Kelishiladi</span>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-pink-100 pt-4 font-semibold">
              <span>Jami</span>
              <span>{formatPrice(total)}</span>
            </div>

            <Link href="/checkout" className="btn-primary mt-5 w-full">
              Checkout
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
