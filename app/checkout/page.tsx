import Header from "@/components/Header";

export default function CheckoutPage() {
  return (
    <main>
      <Header />
      <section className="container-main py-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="mt-2 text-slate-600">Mijoz ma’lumotlari va to‘lov usuli shu yerda olinadi.</p>

          <form className="card mt-6 space-y-4 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-pink-200 px-4 py-3 outline-none" placeholder="Ism" />
              <input className="rounded-2xl border border-pink-200 px-4 py-3 outline-none" placeholder="Telefon raqam" />
            </div>

            <textarea className="min-h-[110px] w-full rounded-2xl border border-pink-200 px-4 py-3 outline-none" placeholder="Manzil" />

            <div>
              <h2 className="mb-3 text-lg font-semibold">To‘lov usuli</h2>
              <div className="grid gap-3 md:grid-cols-3">
                <button type="button" className="rounded-2xl border border-pink-200 bg-white px-4 py-3 text-left">Paynet ulash (placeholder)</button>
                <button type="button" className="rounded-2xl border border-pink-200 bg-white px-4 py-3 text-left">Uzum Bank ulash (placeholder)</button>
                <button type="button" className="rounded-2xl border border-pink-200 bg-white px-4 py-3 text-left">Click ulash (placeholder)</button>
              </div>
            </div>

            <button className="btn-primary w-full">Buyurtmani yuborish</button>
          </form>
        </div>
      </section>
    </main>
  );
}
