import React from 'react'

const About = () => {
  return (
    <div>
        <div name="about" 
            className="w-full h-min bg-white text-black md:h-max pt-6 px-3 lg:px-28 md:px-16 md:py-20">
            <div className="p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-black'>About</p>
                    <p className=" text-lg md:text-xl font-medium mt-20 px-6 md:px-12 leading-10 lg:px-16">
                      My name is Taiye Akinlade, a passionate Frontend Developer with a keen eye for creating intuitive, visually appealing, and user-friendly digital experiences. I specialize in translating design concepts into responsive, efficient, and scalable code, ensuring that each project not only looks great but performs seamlessly. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I continuously strive to stay at the forefront of web development trends and best practices. I believe in the power of clean, accessible code and a user-first approach to build meaningful digital solutions that make a difference.

                      P>Let’s bring ideas to life, pixel by pixel!
                    </p>
                    <br />
                    <p className='text-xl'></p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default About