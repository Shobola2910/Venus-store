"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { products } from "@/data/products";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const featured = products.filter((item) => item.featured);

  return (
    <main>
      <Header />

      <section className="container-main grid gap-8 py-10 md:grid-cols-2 md:py-16">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700">
            ✨ Venus Store
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Zamonaviy va nafis <span className="text-pink-700">ro‘mollar</span> do‘koni
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            Premium ko‘rinish, qulay savat, tez checkout va telefon uchun mos e-commerce tajribasi.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#catalog" className="btn-primary">Katalogni ko‘rish</a>
            <a href="/admin" className="btn-secondary">Admin panel</a>
          </div>
        </div>

        <div className="card flex min-h-[320px] items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100 p-8 text-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-500">New Collection</p>
            <h2 className="mt-3 text-3xl font-semibold">Elegant Scarf Experience</h2>
            <p className="mt-3 text-slate-600">Instagram, Telegram va web savdoni bir joyga jamlash uchun MVP.</p>
          </div>
        </div>
      </section>

      <section className="container-main py-4">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold">Tanlangan mahsulot</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="container-main py-10 md:py-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">Katalog</h2>
            <p className="mt-2 text-slate-600">Kategoriya bo‘yicha filter qiling va mahsulotni oching.</p>
          </div>
        </div>

        <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
