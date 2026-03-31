import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-pink-100 bg-white/90 backdrop-blur">
      <div className="container-main flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-pink-700">
          Venus Store
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/">Bosh sahifa</Link>
          <Link href="/catalog">Katalog</Link>
          <Link href="/cart">Savat</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
      </div>
    </header>
  );
}
