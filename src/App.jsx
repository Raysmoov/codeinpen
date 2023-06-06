import { useState } from 'react'
import Header from'./header.jsx'
import Hero from './hero.jsx'
import Destination from './destination.jsx'
import Packages  from './packages.jsx'
import Contact from './contact.jsx'
import Testimonials from './testimonial.jsx'
import Footer from './Footer.jsx'
import './App.css'

const tab = () => {
  setCount(count + 12);
};
//import LovesCoffee from './assets/trying'
function Faven() {
  const [count, setCount] = useState(33)

  return (
    <>
      <Header/>
      <Hero/>
      <Destination/>
      <Packages/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Faven
