import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pointer-events-none flex min-h-[90vh] items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.35em] text-xs text-white/80 mb-6">Limited Capsule</p>
            <h1 className="text-5xl md:text-7xl font-light text-white/95 leading-[1.05] mb-6">
              A study in silhouette and substance
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10">
              Tailored pieces with architectural lines, crafted in premium fabrics. Designed for the discerning.
            </p>
            <div className="pointer-events-auto flex items-center gap-4">
              <a href="#collection" className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-slate-900 hover:bg-white">
                Explore Collection
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#story" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white/90 ring-1 ring-inset ring-white/30 hover:bg-white/15">
                The Story
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80"></div>
    </section>
  )
}
