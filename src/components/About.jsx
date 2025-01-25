import { motion } from "motion/react";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <motion.div
          initial={{opacity: 0, translateX: "100%"}}
          whileInView={{opacity: 1, translateX: 0}} 
          transition={{duration: 3}}
          >
          <div name="about" 
              className="w-full h-min bg-secondary md:h-max pt-6 px-3 lg:px-28 md:px-16 md:py-20 text-primary overflow-x-hidden">
              <div className="p-4 mx-auto flex flex-col justify-center w-full h-full">
                  <div className="pb-8">
                      <p className='text-4xl font-bold inline border-b-4 border-primary'>About</p>
                      <p className=" text-base md:text-xl mt-20 px-6 md:px-12 leading-7 lg:px-16 font-light">
                        My name is Taiye Akinlade, a passionate Frontend Developer with a keen eye for creating intuitive, visually appealing, and user-friendly digital experiences. I specialize in translating design concepts into responsive, efficient, and scalable code, ensuring that each project not only looks great but performs seamlessly. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I continuously strive to stay at the forefront of web development trends and best practices. I believe in the power of clean, accessible code and a user-first approach to build meaningful digital solutions that make a difference.

                        <p className='pt-3'>Let’s bring ideas to life, pixel by pixel!</p>
                      </p>
                      <br />
                      <p className='text-xl'></p>
                  </div>
              </div>
          </div>
      </motion.div>
    </div>
    
  )
}

export default About