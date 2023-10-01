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
                    Self motivated graduate with Higher National Diploma certificate in Computer Science and critical experience in Frontend programming languages with ability to translate business requirements into technical solutions. I am looking to start a career as an entry-level employee with a reputed firm driven by technology.
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