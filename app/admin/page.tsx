import AdminSidebar from "@/components/AdminSidebar";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";

const mockOrders = [
  { id: "#1001", customer: "Malika", total: 129000, status: "Yangi" },
  { id: "#1002", customer: "Muslima", total: 278000, status: "Tasdiqlandi" },
  { id: "#1003", customer: "Shahnoza", total: 149000, status: "Yetkazib berishda" }
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#fff8fb]">
      <div className="container-main grid gap-6 py-8 lg:grid-cols-[260px_1fr]">
        <AdminSidebar />

        <section className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card p-5">
              <p className="text-sm text-slate-500">Bugungi buyurtmalar</p>
              <h2 className="mt-2 text-3xl font-bold">12</h2>
            </div>
            <div className="card p-5">
              <p className="text-sm text-slate-500">Mahsulotlar</p>
              <h2 className="mt-2 text-3xl font-bold">{products.length}</h2>
            </div>
            <div className="card p-5">
              <p className="text-sm text-slate-500">Haftalik tushum</p>
              <h2 className="mt-2 text-3xl font-bold">2 450 000 so'm</h2>
            </div>
          </div>

          <div className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">So‘nggi orderlar</h2>
              <button className="btn-primary">Yangi mahsulot qo‘shish</button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-pink-100 text-slate-500">
                    <th className="px-4 py-3">Order</th>
                    <th className="px-4 py-3">Mijoz</th>
                    <th className="px-4 py-3">Summa</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockOrders.map((order) => (
                    <tr key={order.id} className="border-b border-pink-50">
                      <td className="px-4 py-3 font-medium">{order.id}</td>
                      <td className="px-4 py-3">{order.customer}</td>
                      <td className="px-4 py-3">{formatPrice(order.total)}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-700">
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold">Mahsulotlar ro‘yxati</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <div key={product.id} className="rounded-2xl border border-pink-100 p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{product.category}</p>
                  <p className="mt-3 font-medium text-pink-700">{formatPrice(product.price)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
