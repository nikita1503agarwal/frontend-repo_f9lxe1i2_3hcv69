import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Seasonal from './components/Seasonal'
import Collection from './components/Collection'
import Story from './components/Story'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 selection:bg-amber-300/30 selection:text-emerald-950">
      <Navbar />
      <Hero />
      <Seasonal />
      <Collection />
      <Story />
      <Footer />
    </div>
  )
}

export default App
