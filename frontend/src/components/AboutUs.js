import React from 'react'
import { Link } from 'react-scroll'
import Button from '../layouts/Button'
import about from '../asserts/about.png'

function AboutUs() {

    const backgroundColor = 'bg-secondary'
  return (
    <div className='min-h-screen  flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 gap-10 bg-main'>
        <div className='w-full lg:w-2/4 space-y-5'>
        <h1 className='font-bold text-4xl text-white leading-tight'>Discover Your World with TravelMe</h1>
        <p className='text-gray pb-5'>
        Embark on a journey with Wanderlust Travels, where every adventure is an opportunity to uncover the extraordinary. Founded by passionate travelers, we're committed to crafting immersive experiences that transcend the ordinary. Our mission is simple: to ignite your wanderlust and curate moments that redefine the way you travel.
        </p>
        <Link>
        <Button title='Contact Us' backgroundColor={backgroundColor}/>
        </Link>
    </div>
    <div className='w-full lg:w-2/4'>
        <img src={about} alt='aboutimg'/>
    </div>
    </div>
  )
}

export default AboutUs