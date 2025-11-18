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
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
      <div className="aspect-[4/5] overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">{item.tag}</p>
            <h3 className="text-white text-lg font-medium">{item.title}</h3>
          </div>
          <span className="rounded-full bg-white/90 px-3 py-1 text-slate-900 text-sm">{item.price}</span>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
    </div>
  )
}

export default function Collection() {
  return (
    <section id="collection" className="relative z-10 py-24 md:py-32 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl text-white font-light">Curated Essentials</h2>
            <p className="text-white/70 mt-2 max-w-xl">Each piece is constructed with elevated craftsmanship and considered details for a wardrobe that endures.</p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-white/90 ring-1 ring-inset ring-white/20 hover:bg-white/15">
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
