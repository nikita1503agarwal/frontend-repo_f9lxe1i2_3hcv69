import { useState, useEffect } from 'react'
import { Menu, ShoppingBag, Search, User } from 'lucide-react'

function NavLink({ children }) {
  return (
    <a href="#" className="text-sm md:text-[15px] tracking-wide text-amber-100/80 hover:text-amber-50 transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mt-6 rounded-2xl border border-amber-50/10 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] ${isScrolled ? 'bg-emerald-900/60' : 'bg-emerald-900/30'}`}>
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-300/70 to-amber-200/20 shadow-inner ring-1 ring-amber-200/40 flex items-center justify-center">
                <span className="text-xs font-semibold tracking-widest text-emerald-950 mix-blend-screen">LX</span>
              </div>
              <span className="text-lg font-semibold tracking-[0.2em] text-amber-50">LUXEWARE</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink>Women</NavLink>
              <NavLink>Men</NavLink>
              <NavLink>Kids</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-4 text-amber-100/80">
              <button className="p-2 rounded-lg hover:bg-amber-50/10 transition-colors" aria-label="Search">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-amber-50/10 transition-colors" aria-label="Account">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-amber-50/10 transition-colors" aria-label="Bag">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-amber-100 hover:bg-amber-50/10">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-amber-50/10 px-4 py-3 space-y-3 bg-emerald-900/60">
              <div className="grid grid-cols-3 gap-3">
                {['Women','Men','Kids'].map(i => (
                  <a key={i} href="#" className="rounded-lg bg-emerald-800/40 px-4 py-3 text-amber-100/80 hover:bg-emerald-800/60">
                    {i}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 rounded-lg bg-emerald-800/50 px-4 py-2 text-amber-100">Search</button>
                <button className="flex-1 rounded-lg bg-emerald-800/50 px-4 py-2 text-amber-100">Account</button>
                <button className="rounded-lg bg-emerald-800/50 p-2 text-amber-100">
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
