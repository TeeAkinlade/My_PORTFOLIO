import React from 'react'

const About = () => {
  return (
    <div>
        <div name="about" 
            className="w-full h-min bg-gradient-to-b from-gray-800 to-black text-white md:h-max md:py-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                    <p className="text-xl mt-20">
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