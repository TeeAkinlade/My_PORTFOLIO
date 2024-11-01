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
                      Dedicated Front-End Developer with proven years of experience translating UI/UX design 
                      concepts into high-quality code. Proficient in HTML, CSS, Tailwind CSS and JavaScript, with a 
                      deep understanding of front-end frameworks like React and Next.js. Proven track record of 
                      delivering visually appealing and intuitive user interfaces for diverse web applications.
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