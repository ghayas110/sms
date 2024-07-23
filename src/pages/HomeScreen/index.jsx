
import { ScrollUp } from '@/Common'
import React from 'react'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import Video from '../sections/Video'
import Testimonials from '@/pages/sections/Testimonial'
import ContactPage from '../contact'


const HomeScreen = () => {
  return (
    <div>
      <ScrollUp/>
      <Hero/>
      <Features/>
  <Video/>
  <Testimonials/>
  <ContactPage/>
    </div>
  )
}

export default HomeScreen
