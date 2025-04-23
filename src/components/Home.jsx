import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import heroImage from '../img/Hero2.png'
import { Link } from 'react-scroll'
import FABs from './FABs'
import { motion } from "framer-motion";

const Home = () => {
    const word = "Frontend";

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
    
      const letterVariants = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: {
          y: 0, 
          opacity: 1,
          transition: { type: "spring", stiffness: 100, damping: 10 },
        },
      };

  return (
    <div name="home"
        className='h-full md:h-[101vh] w-full bg-primary text-black md:px-16 lg:px-28 py-20 md:py-0'
    >
        <div className="mx-auto flex flex-col items-center justify-between h-full lg:px-[30px] px-8 lg:flex-row pt-20">
            <div className="">
                <h2 className='text-6xl sm:text-[4.5rem] md:mt-20 lg:mt-0 font-bold text-secondary'>
                    I'm a{" "}
                    <motion.span
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex text-cyan-700"
                    >
                        {word.split("").map((letter, index) => (
                        <motion.span key={index} variants={letterVariants}>
                            {letter}
                        </motion.span>
                        ))}
                    </motion.span>{""}
                    Developer
                </h2>
                <p className="py-6 max-w-md md:max-w-lg text-lg font-bold text-cyan-700">
                    Got an idea? Let's bring it to Life!
                </p>
                <div className="mt-4 sm:mt-8">
                    <Link to='portfolio' smooth duration={500}
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-cyan-500 cursor-pointer mb-10 md:mb-0'
                    >
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300 ml-2">
                            <FaArrowRight size={25}/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="rounded-full sm:z-10">
                <img src={heroImage} alt="heroImage"
                    className='w-full md:h-[453px] lg:h-full lg:w-[446px] rounded-full border p-3 border-cyan-700'
                />
            </div>
        </div>
        <div className="md:hidden">
            <FABs />
        </div>
    </div>
  )
}

export default Home
