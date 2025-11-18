import { Star } from 'lucide-react'

const items = [
  {
    title: 'Double-Faced Wool Coat',
    price: '$780',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1974&auto=format&fit=crop',
    tag: 'Signature'
  },
  {
    title: 'Satin Column Dress',
    price: '$520',
    image: 'https://images.unsplash.com/photo-1532277801815-2f1788060bbc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYXRpbiUyMENvbHVtbiUyMERyZXNzfGVufDB8MHx8fDE3NjM0NDI0Mzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'New'
  },
  {
    title: 'Pleated Wide Trouser',
    price: '$340',
    image: 'https://images.unsplash.com/photo-1588748570590-a8a5646c5c06?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbGVhdGVkJTIwV2lkZSUyMFRyb3VzZXJ8ZW58MHwwfHx8MTc2MzQ0MjQzOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Bestseller'
  },
  {
    title: 'Cashmere Crew Knit',
    price: '$420',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1974&auto=format&fit=crop',
    tag: 'Limited'
  }
]

function Card({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-emerald-900/30 ring-1 ring-amber-50/10">
      <div className="aspect-[4/5] overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-100/80">{item.tag}</p>
            <h3 className="text-amber-50 text-lg font-medium">{item.title}</h3>
          </div>
          <span className="rounded-full bg-amber-300 px-3 py-1 text-emerald-950 text-sm">{item.price}</span>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-emerald-950/80 via-emerald-900/30 to-transparent" />
    </div>
  )
}

export default function Collection() {
  return (
    <section id="collection" className="relative z-10 py-24 md:py-32 bg-emerald-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl text-amber-50 font-light">Curated Essentials</h2>
            <p className="text-amber-100/80 mt-2 max-w-xl">Each piece is constructed with elevated craftsmanship and considered details for a wardrobe that endures.</p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full bg-emerald-900/40 px-5 py-2 text-amber-100/90 ring-1 ring-inset ring-amber-100/20 hover:bg-emerald-900/60">
            View all
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
