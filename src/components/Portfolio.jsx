import work from '../img/work.png'
import work1 from '../img/work1.png'
import work2 from '../img/work2.png'
import work3 from '../img/seemless.png'
import work4 from '../img/work4.png'
import work5 from '../img/work5.png'
import work6 from '../img/sumz.png'
import work7 from '../img/movie.png'
import { motion } from "framer-motion";

const Portfolio = () => {
const portfolios = [ 
    {
        id: 1,
        src: work4,
        href: 'https://realtor-clone-react-ruby.vercel.app/',
        code: 'https://github.com/TeeAkinlade/Realtor-clone-react',
        title: 'Realtor web Application',
        about: 'A responsive web application that allows user to create an account and upload houses for sales or lease. This web Application was created with React, Firebase and moment timezone',
    },
    {
        id: 2,
        src: work2,
        href: 'https://sales-track-website.vercel.app/',
        code: 'https://github.com/solyakin/sales_track_website',
        title: 'Sale Track',
        about: 'A responsive web application that allows user to create an account and upload goods.',
    },
    {
        id: 3,
        src: work3,
        href: 'https://seemless-pos-assessment.vercel.app/',
        code: 'https://github.com/TeeAkinlade/SeemlessPos_Assessment',
        about: ''
    },
    {
        id: 4,
        src: work6,
        href: 'https://sumz-api-summerizer.vercel.app/',
        code: 'https://github.com/TeeAkinlade/sumz_Api_summerizer',
        about: ''
    },
    {
        id: 6,
        src: work,
        href: 'https://r-store.vercel.app/',
        code: 'https://github.com/TeeAkinlade/E-commerce-app',
        about: 'A Clothing E-commerce store.'
    },
     {
        id: 9,
        src: work7,
        href: 'https://movie-box-amber.vercel.app/',
        code: 'https://github.com/TeeAkinlade/Movie_box',
        about: ''
    },
    {
        id: 7,
        src: work1,
        href: 'https://reality-clone.vercel.app/',
        code: 'https://github.com/TeeAkinlade/Reality_clone',
        about:''

    },
    {
        id: 8,
        src: work5,
        href: 'https://boldo-website.vercel.app/',
        code: 'https://github.com/TeeAkinlade/Boldo_website',
        about: ''
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
            <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0">
                {portfolios.map(({ id, src, href, code, title, about, }) => (
                    <motion.div
                        initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        x: id % 2 === 0 ? 50 : -50
                        }}
                        whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                            duration: 2 // Animation duration
                        }
                        }}
                        viewport={{ once: false }}
                        className="p-4 md:p-8 rounded-lg shadow-sm shadow-white" key={id}
                    >
                        <div className="flex items-center justify-between">
                            <a 
                                href={href}
                                target='_blank'
                                className='w-1/2 px-1 pb-2 m-1 duration-200 hover:scale-105 text-sm'>
                                    Demo
                            </a>
                            <a 
                                href={code}
                                target='_blank'
                                className='w-1/2 px-1 pb-2 m-1 duration-200 text-end hover:scale-105 text-sm'>
                                    Code
                            </a>
                            
                        </div>
                            <div className="relative group">
                                <img src={src} alt="" className='rounded-md duration-200 w-full hover:shadow-cyan-500 hover:shadow-sm' />
                                {/* <div className="hidden group-hover:block">
                                    <div className="bg-black opacity-80 w-full h-full absolute top-0 z-10 transition-all ease-in-out">
                                        <div className="p-1 lg:p-7 text-center lg:mt-4 z-30">
                                            <h3 className='font-semibold my-2'>{title}</h3>
                                            <p className="text-xs md:text-[14px] text-white">{about}</p>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                    </motion.div>
                ))}
            </div>
        </div>
        <div className="flex place-items-center justify-center hover:translate-y-2 duration-500">
            <a  
                href='https://github.com/TeeAkinlade'
                target='_blank'
                className='bg-gradient-to-r from-cyan-500 to-blue-700 px-4 py-1.5 mt-10 rounded-md shadow-lg'>See More</a> 

        </div>
    </div>
  )
}

export default Portfolio