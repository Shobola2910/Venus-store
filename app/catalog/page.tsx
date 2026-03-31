import Header from "@/components/Header";
import CatalogSection from "@/components/CatalogSection";

export default function CatalogPage() {
  return (
    <main>
      <Header />

      <section className="container-main py-10 md:py-14">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold">Katalog</h1>
          <p className="mt-2 text-slate-600">
            Venus Store ro‘mollari kolleksiyasini ko‘ring.
          </p>
        </div>

        <CatalogSection />
      </section>
    </main>
  );
}
