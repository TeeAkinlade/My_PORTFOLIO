import work from '../img/lasmab.png'
import work1 from '../img/work1.png'
import work2 from '../img/work2.png'
import work3 from '../img/withJara.png'
import work4 from '../img/work4.png'
import work5 from '../img/work5.png'
import work6 from '../img/sumz.png'
import work7 from '../img/fespris.png'
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";

const Portfolio = () => {
    const portfolios = [
        {
            id: 3,
            src: work3,
            href: 'https://www.withjara.com/',
            code: 'https://github.com/TeeAkinlade',
            about: 'A custom CRM system to streamline customer interactions, sales tracking, and lead management. Developed dashboard analytics to track KPIs such as customer engagement, conversion rates, vendors, delivery riders and sales performance.',
            title: 'WithJara',
            technology: " NextJs, Redux, Tailwind, Api Integration"
        },
        {
            id: 6,
            src: work,
            href: 'https://lasmab.org/',
            code: 'https://github.com/TeeAkinlade',
            title: 'LASMAB',
            about: 'A comprehensive platform designed to streamline operations for teachers, students, administrators, and parents in Anglican schools across Lagos State',
            technology: "Raect, Redux, Api"
        },
        {
            id: 2,
            src: work2,
            href: 'https://subscribe.salestrack.app/',
            code: 'https://github.com/solyakin/sales_track_website',
            title: 'Sale Track',
            about: 'Sale Track is a multi-store Point of Sales(POS) and e-commerce website. Where user can Upload products, inventory control, expenses, manage sales, suppliers and customers. Generate extensive real time reporting and Analytics',
            technology: "React, Redux, Chakra UI, Api, formik"

        },
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
            id: 4,
            src: work6,
            href: 'https://sumz-api-summerizer.vercel.app/',
            code: 'https://github.com/TeeAkinlade',
            title: 'Sumz API summerizer',
            about: 'The project aimed to enhance content consumption efficiency for users by providing quick and accurate summaries of extensive textual data.',
            technology: " React, Redux, Tailwind, Rapid API",
        },
        {
            id: 9,
            src: work7,
            href: 'https://fes-pris-admin-web-portal.vercel.app/overview',
            code: 'https://github.com/TeeAkinlade',
            title: 'Fespris',
            about: 'A digital solution designed to streamline online food ordering, payment processing, and delivery management for restaurants and customers.',
            technology: "React, Tailwind, Redux, ApI, Google Maps"
        },
        {
            id: 7,
            src: work1,
            href: 'https://reality-clone.vercel.app/',
            code: 'https://github.com/TeeAkinlade/Reality_clone',
            title: 'Reality',
            about:'A responsive UI interafce that shows the interior of properties for sales',
            technology: "React, Tailwind, react-modal-video"

        },
        {
            id: 8,
            src: work5,
            href: 'https://boldo-website.vercel.app/',
            code: 'https://github.com/TeeAkinlade/Boldo_website',
            title: 'Blodo',
            about: 'A Responsive Boldo clone website with amazing UI',
            technology: "React, Tailwind"
        },
    ]
  return (
      <div name="portfolio" 
      className="bg-primary w-full text-secondary h-full py-16 px-3 md:px-16 lg:px-28 overflow-x-hidden"
      >
        <div className="p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-secondary">Portfolio</p>
                <p className="py-6 font-medium">Check out some of my work below</p>
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
                            className="p-4 rounded-lg shadow-md shadow-secondary" key={id}
                        >
                            <div className="flex items-center justify-between">
                                <a 
                                    href={href}
                                    target='_blank'
                                    className='w-1/2 pb-2 text-cyan-700 text-base'>
                                        <FiExternalLink />
                                </a>
                                <p className="text-sm whitespace-nowrap font-medium">{title}</p>
                                <a 
                                    href={code}
                                    target='_blank'
                                    className='w-1/2 pb-2 text-cyan-700 text-base flex items-end justify-end'>
                                        <IoCodeSlash />
                                </a>
                                
                            </div>
                                <div className="relative group">
                                    <img src={src} alt="project-image" className='rounded-md ease-in-out duration-200 w-full hover:shadow-cyan-500 hover:shadow-sm' />
                                    <div className="hidden group-hover:block">
                                        <div className="bg-black opacity-80 w-full h-full absolute top-0 z-10 transition-all ease-in-out rounded-md">
                                            <div className="p-3 lg:p-7 text-left lg:mt-4 z-30">
                                                <h3 className='font-semibold text-sm mb-1 text-primary'>{title}</h3>
                                                <p className="md:text-xs text-[10px] text-primary">{about}</p>
                                                <p className="md:text-xs text-[10px] pt-2 text-primary"><strong>Technology: </strong>{technology}</p>
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
                className='bg-gradient-to-r from-cyan-700 to-cyan-500 text-white px-4 py-1.5 mt-10 rounded-md shadow-lg'>See More</a> 

        </div>
    </div>
  )
}

export default Portfolio
