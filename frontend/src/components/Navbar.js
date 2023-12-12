import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Button from '../layouts/Button'
import { AiOutlineMenu } from 'react-icons/ai'

function Navbar() {

    const backgroundColor = 'bg-white'

    const [menu, setmenu] = useState(false)

    const handleChange = () => {
        setmenu(!menu)
    }

    return (
        <div>
            <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-main text-white '>
                <div className='flex items-center'>
                    <Link><h1 className='font-bold text-xl cursor-pointer'>TravelMe</h1></Link>
                </div>
                <nav className='hidden lg:flex flex-row items-center gap-5 '>
                    <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>Home</Link>
                    <Link to='features' spy={true} smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>features</Link>
                    <Link to='destinations' spy={true} smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>destinations</Link>
                    <Link to='aboutUs' spy={true} smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>About</Link>
                    <Link to='contact' spy={true} smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>Contact Us</Link>
                </nav>
                <div className='hidden lg:flex items-center gap-5'>
                    <h1 className='transition-all cursor-pointer'>Register</h1>
                    <Button title='Login' backgroundColor={backgroundColor} />
                </div>

                <div className='lg:hidden flex items-center' onClick={handleChange}>
                    <AiOutlineMenu size={25} />
                </div>

                <div className={`${menu ? "translate-x-0": "-translate-x-full"} lg:hidden flex flex-col absolute bg-main text-white left-0 top-20 text-center pt-8 pb-4 gap-4 w-full h-fit transition-transform duration-500` }>
                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>Home</Link>
                        <Link to='features' spy={true} smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>features</Link>
                        <Link to='destinations' spy={true} smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>destinations</Link>
                        <Link to='aboutUs' spy={true} smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>About</Link>
                        <Link to='contact' spy={true} smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>Contact Us</Link>
                    
                    <div className='flex flex-col lg:flex lg:items-center gap-5'>
                    <h1 className='transition-all cursor-pointer'>Register</h1>
                        <Button title='Login' backgroundColor={backgroundColor} />
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Navbar