import React from 'react'
import HTML from '../img/html.png'
import CSS from '../img/css.png'
import JAVASCRIPT from '../img/js.png'
import GITHUB from '../img/github.svg'
import REACT_IMG from '../img/react.png'
import TAILWIND from '../img/tailwind.png'
import NEXTJS from '../img/next.svg'
import ANT from '../img/ant.png'
import CHAKRA from '../img/chakra_ui.png'
import TYPESCRIPT from '../img/typescript.svg'

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JAVASCRIPT,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: REACT_IMG,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: TAILWIND,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: NEXTJS,
      title: "Next js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: TYPESCRIPT,
      title: "Typescript",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: GITHUB,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 9,
      src: ANT,
      title: "Ant Design",
      style: "shadow-red-400",
    },
    {
      id: 10,
      src: CHAKRA,
      title: "Chakra UI",
      style: "shadow-sky-400",
    },
  ];


  return (
    <div
      name="experience"
      className='bg-gradient-to-b from-gray-800 to to-black w-full h-full py-14 md:py-20 px-3 md:px-0'
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Experience</p>
          <p className="py-6">Technology i have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">{techs.map(({ id, src, title, style }) => (
          <div 
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" 
              className='w-20 mx-auto'
            />
            <p className="mt-4">{title}</p>
          </div>

        ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
