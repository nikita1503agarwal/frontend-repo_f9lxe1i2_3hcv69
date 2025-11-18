export default function Footer() {
  return (
    <footer className="relative z-10 bg-emerald-950 border-t border-amber-50/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-amber-100/80">
          <div>
            <p className="text-amber-50 font-medium mb-3">Shop</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-50">Women</a></li>
              <li><a href="#" className="hover:text-amber-50">Men</a></li>
              <li><a href="#" className="hover:text-amber-50">Accessories</a></li>
              <li><a href="#" className="hover:text-amber-50">Editorial</a></li>
            </ul>
          </div>
          <div>
            <p className="text-amber-50 font-medium mb-3">About</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-50">Story</a></li>
              <li><a href="#" className="hover:text-amber-50">Craft</a></li>
              <li><a href="#" className="hover:text-amber-50">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <p className="text-amber-50 font-medium mb-3">Help</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-50">Shipping</a></li>
              <li><a href="#" className="hover:text-amber-50">Returns</a></li>
              <li><a href="#" className="hover:text-amber-50">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <p className="text-amber-50 font-medium mb-3">Newsletter</p>
            <p className="text-sm mb-3">Join for early access to capsules and private events.</p>
            <form className="flex gap-2">
              <input placeholder="Email address" className="flex-1 rounded-full bg-emerald-900/50 px-4 py-2 text-amber-50 placeholder:text-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-200/30" />
              <button className="rounded-full bg-amber-300 px-4 py-2 text-emerald-950 hover:bg-amber-200">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-amber-100/60">
          <p>© {new Date().getFullYear()} LUXEWARE — All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-100/80">Privacy</a>
            <a href="#" className="hover:text-amber-100/80">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
