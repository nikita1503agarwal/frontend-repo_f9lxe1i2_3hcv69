export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/70">
          <div>
            <p className="text-white font-medium mb-3">Shop</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Women</a></li>
              <li><a href="#" className="hover:text-white">Men</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
              <li><a href="#" className="hover:text-white">Editorial</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium mb-3">About</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Story</a></li>
              <li><a href="#" className="hover:text-white">Craft</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium mb-3">Help</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium mb-3">Newsletter</p>
            <p className="text-sm mb-3">Join for early access to capsules and private events.</p>
            <form className="flex gap-2">
              <input placeholder="Email address" className="flex-1 rounded-full bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <button className="rounded-full bg-white/90 px-4 py-2 text-slate-900 hover:bg-white">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} LUXEWARE — All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
