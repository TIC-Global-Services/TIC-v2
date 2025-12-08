import Amae from '@/components/Design/Amae'
import Attar from '@/components/Design/Attar'
import Caara from '@/components/Design/Caara'
import Hero from '@/components/Design/Hero'
import Horizontal from '@/components/Design/Horizontal'
import HouseOfRuth from '@/components/Design/HouseOfRuth'
import Projects from '@/components/Design/Projects'
import SummrAndVesenex from '@/components/Design/Summr'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <Projects />
        <HouseOfRuth />
        <Horizontal />
        <Caara />
        <SummrAndVesenex />
        <Amae />
        <Attar />
    </div>
  )
}

export default page