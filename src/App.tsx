import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Why from './components/Why'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Why />
      <Contact />
      <Footer />
    </div>
  )
}
