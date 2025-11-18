import { useEffect, useState } from 'react'
import { apiGet } from '../lib/api'

export default function Seasonal() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const data = await apiGet('/api/products', { featured: true })
        if (mounted) setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  if (loading) return (
    <section className="py-24 bg-emerald-950">
      <div className="mx-auto max-w-7xl px-6 text-amber-100/80">Loading seasonal collection…</div>
    </section>
  )
  if (error) return (
    <section className="py-24 bg-emerald-950">
      <div className="mx-auto max-w-7xl px-6 text-amber-100/80">{error}</div>
    </section>
  )

  return (
    <section className="relative z-10 py-24 md:py-32 bg-gradient-to-b from-emerald-900/20 via-emerald-900/30 to-emerald-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-amber-100/80 mb-2">Seasonal Collection</p>
            <h2 className="text-3xl md:text-4xl text-amber-50 font-light">Emerald Capsule</h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full bg-emerald-900/40 px-5 py-2 text-amber-100/90 ring-1 ring-inset ring-amber-100/20 hover:bg-emerald-900/60">
            View all
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((p) => (
            <article key={p._id} className="group relative overflow-hidden rounded-2xl bg-emerald-900/30 ring-1 ring-amber-50/10">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.images?.[0]?.url} alt={p.images?.[0]?.alt || p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-amber-100/80">{p.gender}</p>
                    <h3 className="text-amber-50 text-lg font-medium">{p.title}</h3>
                  </div>
                  <span className="rounded-full bg-amber-300 px-3 py-1 text-emerald-950 text-sm">${'{'}p.price{'}'}</span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-emerald-950/80 via-emerald-900/30 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
