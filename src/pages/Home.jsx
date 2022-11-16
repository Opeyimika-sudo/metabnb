import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Inspirations from '../components/Inspirations'
import Logos from '../components/Logos'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Logos />
      <Inspirations />
      <Cta />
      <Footer />
    </div>
  )
}
