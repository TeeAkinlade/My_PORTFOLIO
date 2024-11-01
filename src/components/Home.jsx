import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import heroImage from '../img/image1.jpg'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home"
        className='h-full lg:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white md:px-16 lg:px-28 py-20 md:py-0'
    >
        <div className="mx-auto flex flex-col lg:items-center justify-between h-full lg:px-[30px] px-4 lg:flex-row pt-20">
            <div className="flex flex-col h-full">
                <h2 className='text-6xl sm:text-7xl md:mt-20 lg:mt-0 font-bold text-white'>
                    I'm a <span className='text-cyan-300'>Frontend</span> <br /> Developer
                </h2>
                <p className="text-gray-400 py-6 max-w-md md:max-w-lg text-lg">
                    Dedicated Front-End Developer with proven years of experience translating UI/UX design 
                    concepts into high-quality code. Proficient in HTML, CSS, Tailwind CSS, JavaScript and Typscript with a 
                    deep understanding of front-end frameworks like React and Next.js. Proven track record of 
                    delivering responsive visually appealing and intuitive user interfaces for diverse web applications.
                </p>
                <div className="mt-4 sm:mt-8">
                    <Link to='portfolio' smooth duration={500}
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-700 cursor-pointer mb-10 md:mb-0'
                    >
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300 ml-2">
                            <FaArrowRight size={25}/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="md:py-8 lg:py-0">
                <img src={heroImage} alt="heroImage"
                    className='rounded-2xl w-full'
                />
            </div>
        </div>

    </div>
  )
}

export default Home
