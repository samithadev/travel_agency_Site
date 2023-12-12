import React from 'react'
import img from '../asserts/feature.jpg'
import pic1 from '../asserts/user.png'
import pic2 from '../asserts/service.png'
import pic3 from '../asserts/wallet.png'

function Features() {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14'>
            <div className='w-full lg:w-2/4'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-medium text-center md:text-start leading-tight'>Get ready for explore</h1>

                    <p>Discover the Best Holiday Experiences with TripPixie! We're
                        dedicated to curating the latest and greatest destinations from
                        around the world, ensuring you always get the ultimate travel
                        experience.</p>
                </div>

                <div className='w-full lg:w-3/5 mt-10 lg:ml-14'>
                    <img className='rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ' src={img} alt='img' />
                </div>
            </div>

            <div className='w-full lg:w-2/4 space-y-10'>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row items-center w-24'>
                        <img src={pic1} alt='pic1' />
                    </div>

                    <div className='space-y-3'>
                        <h1 className='font-semibold text-xl'>Friendly Service</h1>
                        <p className='text-[#3a3d3a]'>We will provide excellent and friendly service for the sake of our
                            customers.</p>
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row items-center w-24'>
                        <img src={pic2} alt='pic2' />
                    </div>

                    <div className='space-y-3'>
                        <h1 className='font-semibold text-xl'>Friendly Service</h1>
                        <p className='text-[#3a3d3a]'>We will provide excellent and friendly service for the sake of our
                            customers.</p>
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row items-center w-24'>
                        <img src={pic3} alt='pic3' />
                    </div>

                    <div className='space-y-3'>
                        <h1 className='font-semibold text-xl'>Friendly Service</h1>
                        <p className='text-[#3a3d3a]'>We will provide excellent and friendly service for the sake of our
                            customers.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features