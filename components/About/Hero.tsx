import React from 'react'

const Hero = () => {
  return (
    <div className=' min-h-screen w-full'>
      <video autoPlay muted loop playsInline className=' object-cover h-screen w-full'>
        <source src='https://ik.imagekit.io/99y1fc9mh/TIC_Globe/videos/Render.mp4'></source>
      </video>
    </div>
  )
}

export default Hero
