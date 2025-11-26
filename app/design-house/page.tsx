import Amae from '@/components/Design/Amae'
import Attar from '@/components/Design/Attar'
import Caara from '@/components/Design/Caara'
import Hero from '@/components/Design/Hero'
import Horizontal from '@/components/Design/Horizontal'
import Projects from '@/components/Design/Projects'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <Projects />
        <Horizontal />
        <Caara />
        <Amae />
        <Attar />
    </div>
  )
}

export default page