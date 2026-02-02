import Navbar from "./components/Navbar"

import Hero from "./sections/Hero"
import Intro from "./sections/Intro"
import Products from "./sections/Products"
import CTA from "./sections/CTA"
import Roadmap from "./sections/Roadmap"
import Footer from "./sections/Footer"
import AboutUs from "./sections/AboutUs"
import Newsletter from "./sections/Newsletter"

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <Hero />
        <CTA />
        <Products />
        <AboutUs />
        
        <Roadmap />
        <Intro />
        
        
        
      </main>
<Newsletter />
      <Footer />
    </div>
  )
}
