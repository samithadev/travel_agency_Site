import React from 'react'
import { Link } from 'react-scroll'
import Button from '../layouts/Button'
import hero from '../asserts/heroImage.jpg'

function Home() {

    const backgroundColor = 'bg-secondary'
    return (
        <div>
            <div className=' min-h-screen lg:min-h-[90vh] flex flex-col lg:flex-row justify-center items-center mx-5 md:mx-32'>
            <div className='flex flex-col text-center lg:text-start gap-5 w-1/2'>
                <h1 className='font-semibold text-5xl leading-tight'>Explore the World with TravelMe</h1>
                <p>Discover dream destinations, plan seamless getaways, and create memories that last a lifetime with our curated travel experiences. Whether you seek sandy shores, historic landmarks, or vibrant cityscapes, embark on your next journey with us.</p>
                <div className=' mt-10'>
                    <Link>
                        <Button title='Start Exploring' backgroundColor={backgroundColor} />
                    </Link>
                </div>
            </div>

            <div className='mt-14 lg:mt-0 w-full lg:w-3/5'>
                <img src={hero} alt='img' />
            </div>
            </div>
        </div>
    )
}

export default Home