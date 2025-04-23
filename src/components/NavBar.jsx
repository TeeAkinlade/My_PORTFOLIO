import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
    
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 md:px-16 lg:px-28 text-black bg-primary shadow-sm fixed z-50'>
        <div>
            <h1 className='text-5xl font-signature ml-2 text-cyan-700'>Taiye</h1>
        </div>
        <ul className="hidden md:flex">
            {links.map(({ id, link}) => (
                <li key={id} className="px-4 cursor-pointer capitalize font-medium text-secondary hover:scale-105 hover:text-cyan-700 duration-200 hover:underline underline-offset-4">
                    <Link to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            ) )}
        </ul>

        <div 
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-40 text-secondary md:hidden">
            {nav ? <FaTimes size={16} /> : <FaBars  size={26}/>}
        </div>
        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-[95%] h-screen bg-primary text-secondary transition-all duration-300">
                {
                    links.map(({id, link}) =>(
                        <li 
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-xl">
                            <Link
                            className=''
                                onClick={() => setNav(!nav)} to={link} smooth duration={500}
                            >
                                {link}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        )}
    </div>
  )
}

export default NavBar
