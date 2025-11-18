import { useState } from 'react'
import { Menu, ShoppingBag, Search, User } from 'lucide-react'

function NavLink({ children }) {
  return (
    <a href="#" className="text-sm md:text-[15px] tracking-wide text-white/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-white/70 to-white/20 shadow-inner ring-1 ring-white/30 flex items-center justify-center">
                <span className="text-xs font-semibold tracking-widest text-slate-900 mix-blend-screen">LX</span>
              </div>
              <span className="text-lg font-semibold tracking-[0.2em] text-white">LUXEWARE</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink>New</NavLink>
              <NavLink>Women</NavLink>
              <NavLink>Men</NavLink>
              <NavLink>Accessories</NavLink>
              <NavLink>Stories</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-4 text-white/80">
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Search">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Account">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Bag">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-white/90 hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-3 bg-white/5">
              <div className="grid grid-cols-2 gap-3">
                {['New','Women','Men','Accessories','Stories'].map(i => (
                  <a key={i} href="#" className="rounded-lg bg-white/5 px-4 py-3 text-white/80 hover:bg-white/10">
                    {i}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-white/90">Search</button>
                <button className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-white/90">Account</button>
                <button className="rounded-lg bg-white/10 p-2 text-white/90">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
