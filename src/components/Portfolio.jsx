import React from 'react'
import work from '../img/work.png'
import work1 from '../img/work1.png'
import work2 from '../img/work2.png'
import work3 from '../img/work3.png'
import work4 from '../img/work4.png'
import work5 from '../img/work5.png'

const Portfolio = () => {
const portfolios =[ 
    {
        id: 1,
        src: work,
        href: 'https://r-store.vercel.app/'
    },
    {
        id: 2,
        src: work1,
        href: 'https://reality-clone.vercel.app/'

    },
    {
        id: 3,
        src: work2,
        href: 'https://sales-track-website.vercel.app/'
    },
    {
        id: 4,
        src: work3,
        href: 'https://admin-dashboard-iota-kohl.vercel.app/'
    },
    {
        id: 5,
        src: work4,
        href: 'https://realtor-clone-react-ruby.vercel.app/'
    },
    {
        id: 6,
        src: work5,
        href: 'https://boldo-website.vercel.app/'
    },
]

  return (
      <div name="portfolio" 
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full py-16"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work below</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map(({ id, src, href }) => (
                    <a 
                        href={href}
                        key={id}
                        target='_blank'
                        className="shadow-md shadow-gray-600 rounded-lg hover:scale-125 duration-300 mb-8">
                        <img 
                            src={src} 
                            alt="" 
                            className='rounded-md duration-200 w-full'
                        />
                        <div className="flex items-center justify-center">
                            {/* <button className='w-1/2 px-6 py-2 m-1 duration-200 hover:scale-105 text-sm'>Demo</button> */}
                            {/* <button className='w-1/2 px-6 m-4 duration-200 hover:scale-105'>Code</button> */}
                        </div>
                    </a>
                ))}
            </div>
        </div>
        <div className="flex place-items-center justify-center hover:translate-y-2 duration-500">
            <button className='bg-gradient-to-r from-cyan-500 to-blue-700 px-4 py-1.5 mt-10 rounded-md shadow-lg'>See More</button>
        </div>
    </div>
  )
}

export default Portfolio