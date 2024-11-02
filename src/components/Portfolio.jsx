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
            about: 'A user-friendly comprehensive Real Estate Management System designed to streamline property listings.',
            technology: "React, Tailwind, Firebase, moment-timezone",
        },
        
        {
            id: 2,
            src: work2,
            href: 'https://sales-track-website.vercel.app/',
            code: 'https://github.com/solyakin/sales_track_website',
            title: 'Sale Track',
            about: 'E-Commerce platform aimed at enhancing the online shopping experience and streamlining the management of products, orders, and customer relationships',
            technology: "React, Redux, Chakra UI, Formik"

        },
        {
            id: 3,
            src: work3,
            href: 'https://seemless-pos-assessment.vercel.app/',
            code: 'https://github.com/TeeAkinlade/SeemlessPos_Assessment',
            about: 'A Clothing E-Commerce platform aimed at enhancing the online shopping experience and streamlining the management of products, orders, and customer relationships.',
            title: 'E-Store',
            technology: " React, Redux, Tailwind, Rapid API"
        },
        {
            id: 4,
            src: work6,
            href: 'https://sumz-api-summerizer.vercel.app/',
            code: 'https://github.com/TeeAkinlade/sumz_Api_summerizer',
            title: 'Sumz API summerizer',
            about: 'The project aimed to enhance content consumption efficiency for users by providing quick and accurate summaries of extensive textual data.',
            technology: " React, Redux, Tailwind, Rapid API",
        },
        {
            id: 6,
            src: work,
            href: 'https://r-store.vercel.app/',
            code: 'https://github.com/TeeAkinlade/E-commerce-app',
            title: 'R-store',
            about: 'A Clothing E-Commerce platform aimed at enhancing the online shopping experience and streamlining the management of products, orders, and customer relationships.',
            technology: "HTML, CSS, JavaScript, Api"
        },
        {
            id: 9,
            src: work7,
            href: 'https://movie-box-amber.vercel.app/',
            code: 'https://github.com/TeeAkinlade/Movie_box',
            title: 'Movie Box',
            about: 'A movie website that show the latest movies ans details about the movie',
            technology: "NextJs, Tailwind, Dummy Api"
        },
        {
            id: 7,
            src: work1,
            href: 'https://reality-clone.vercel.app/',
            code: 'https://github.com/TeeAkinlade/Reality_clone',
            title: 'Reality Clone',
            about:'A responsive UI interafce that shows the interior of properties for sales',
            technology: "React, Tailwind, react-modal-video"

        },
        {
            id: 8,
            src: work5,
            href: 'https://boldo-website.vercel.app/',
            code: 'https://github.com/TeeAkinlade/Boldo_website',
            title: 'Blodo clone',
            about: 'A Responsive Boldo clone website with amazing UI',
            technology: "React, Tailwind"
        },
    ]
  return (
      <div name="portfolio" 
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full py-16 px-3 md:px-16 lg:px-28"
      >
        <div className="p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work below</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16 md:px-8 w-[330px] sm:w-[600px] md:w-full">
                    {portfolios.map(({ id, src, href, code, title, about, technology
                    }) => (
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
                            className="p-4 rounded-lg shadow-sm shadow-white" key={id}
                        >
                            <div className="flex items-center justify-between">
                                <a 
                                    href={href}
                                    target='_blank'
                                    className='w-1/2 pb-2 hover:text-cyan-100 text-sm'>
                                        Demo
                                </a>
                                <a 
                                    href={code}
                                    target='_blank'
                                    className='w-1/2 pb-2 hover:text-cyan-100 text-end text-sm'>
                                        Code
                                </a>
                                
                            </div>
                                <div className="relative group">
                                    <img src={src} alt="project-image" className='rounded-md ease-in-out duration-200 w-full hover:shadow-cyan-500 hover:shadow-sm' />
                                    <div className="hidden group-hover:block">
                                        <div className="bg-black opacity-80 w-full h-full absolute top-0 z-10 transition-all ease-in-out rounded-md">
                                            <div className="p-3 lg:p-7 text-left lg:mt-4 z-30">
                                                <h3 className='font-semibold text-sm mb-1'>{title}</h3>
                                                <p className="md:text-xs text-[10px] text-white">{about}</p>
                                                <p className="md:text-xs text-[10px] pt-2 text-white"><strong>Technology: </strong>{technology}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </motion.div>
                    ))}
                </div>
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
