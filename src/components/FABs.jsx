import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function FABs() {
    const links = [
        {
            id: 1, 
            child: (
                     <FaLinkedin className="text-cyan-600 " />
            ),
            href: 'https://www.linkedin.com/in/akinlade-taiye-733a8120a/',
        },
        {
            id: 2, 
            child: (
                     <FaGithub className="text-cyan-600 " />
            ),
            href: 'https://github.com/TeeAkinlade'
        },
        {
            id: 3, 
            child: (
                     <GrMail className="text-cyan-600 " />
            ),
            href: 'mailto:taiye.akinlade1@gmail.com'
        },
        {
            id: 4, 
            child: (
                   <BsFillPersonLinesFill className="text-cyan-600 " />
            ),
            href: '/Taiye Akinlade.pdf',
            download: true,
        },
    ]
  return (
    <>
      <div className="fixed bottom-8 right-8 z-40">
        <div className="group flex flex-col-reverse gap-2">
          <button className="group relative z-50 inline-flex h-12 items-center justify-center gap-2 self-center whitespace-nowrap rounded bg-cyan-700 px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-cyan-600 focus:bg-cyan-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:bg-cyan-300 disabled:shadow-none">
            <span className="relative transition duration-300 only:-mx-6 group-hover:rotate-45">
              <span className="sr-only">Button description</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
                aria-label="Plus icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
          {links.map(({ id, child, href, download }) =>(
             <a 
             href={href}
             key={id}
             className='flex justify-between items-center w-full text-white'
             download={download}
             target='_blank'
             rel='noreferrer'
            >
                <button className="inline-flex h-0 w-0 translate-y-2 items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded bg-white px-6 text-sm font-medium tracking-wide opacity-0 transition duration-300 hover:bg-[#ececec] hover:text-cyan-700 focus:text-cyan-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:bg-cyan-100 disabled:text-cyan-400 disabled:shadow-none group-hover:h-12 group-hover:w-12 group-hover:translate-y-0 group-hover:opacity-100"
            >
                <span className="relative only:-mx-6">
                <span className="sr-only">Button description</span>
               
                        {child}   
                </span>
                </button>
            </a>
          ))}
         
        </div>
      </div>
    </>
  )
}
