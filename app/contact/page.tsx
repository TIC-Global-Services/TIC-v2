import React from 'react'
import Getintouch from '@/components/contact/getintouch'
import Container from '@/components/Reusbale/Container'
import SocialsCard from '@/components/contact/socialsCard'
import Contacts from '@/components/contact/Contacts'

const page = () => {
  return (
    <div className='bg-[#F5F5F5]' >
        <Container>
          <Getintouch/> 
          <SocialsCard/>
          <Contacts/>
        </Container>
       
    </div>
  )
}

export default page