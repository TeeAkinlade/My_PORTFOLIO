import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr';
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from 'react-icons/io'
import { BiDownload } from 'react-icons/bi'
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white md:py-20"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full mb-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Get in touch with me</p>
        </div>
         <div className="w-full flex md:flex-row flex-col flex-wrap items-center justify-center gap-10 lg:gap-[5rem] lg:m-[4rem] px-4">
            <div classaNAme="flex flex-col w-full md:w-[40%] rounded-[2rem] p-8 border border-cyan-500">
                <GrMail size={38} className="mb-2"/>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="py-3">taiye.akinlade1@gmail.com</p>
                <a
                    className="button-85"
                    role="button"
                    target="_blank"
                    href="mailto:taiye.akinlade1@gmail.com"
                >
                    Send me an email
                </a>
            </div>
            <div className="flex flex-col w-full md:w-[40%] rounded-[2rem] p-8 border border-cyan-500">
            <FaWhatsapp size={38} className="mb-2" />
                <h3 className="font-bold text-xl">WhatsApp</h3>
                <p className="py-3">+2348149062746</p>
                <a
                    className="button-85"
                    role="button"
                    target="_blank"
                    href="https://wa.me/+2348149062746"
                >
                    WhatsApp Me.
                </a>
            </div>
            <div className="flex flex-col w-full md:w-[40%] rounded-[2rem] p-8 border border-cyan-500">
            <FaLinkedin size={38} className="mb-2" />
                <h3 className="font-bold text-xl">Linkedin</h3>
                <p className="py-3">Taiye Akinlade</p>
                <a
                    className="button-85"
                    role="button"
                    target="_blank"
                    href="https://www.linkedin.com/in/akinlade-taiye-733a8120a/"
                >
                    Send A Message
                </a>
            </div>
        </div>

        {/* <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/e59d0d7a-203b-45e8-ac11-64a307820440"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-400 to-blue-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col justify-start mt-10">
              <div className="flex items-center space-x-5">
                  <GrMail 
                      className="text-gray-500"
                      size={25} 
                  />
                  <p className=" ml-2">taiye.akinlade1@gmail.com</p>
              </div>
              <div className="flex items-center space-x-5 mt-4">
                  <IoIosCall 
                      className="text-gray-500"
                      size={25} 
                  />
                  <p className=" ml-2">+2348149062746</p>
              </div>
              <div className="flex items-center justify-start space-x-5 mt-6">
                <a 
                  href="https://github.com/TeeAkinlade"
                  target='_blank'
                >
                  <FaGithub size={25} 
                    className="text-gray-500 hover:text-cyan-500 duration-200 hover:translate-y-1"
                  />
                </a>
                <a 
                  href="https://www.linkedin.com/in/   akinlade-taiye-733a8120a/"
                  target='_blank'
                >
                  <FaLinkedin size={25} 
                    className="text-gray-500 hover:text-cyan-500 duration-200 hover:translate-y-1"
                  />
                </a>
                  <a 
                    href="mailto:taiye.akinlade1@gmail.com"
                    target='_blank'
                  >
                    <GrMail size={28} 
                    className="text-gray-500 hover:text-cyan-500 duration-200 hover:translate-y-1"
                    />
                  </a>             
              </div>
          </div>
          <div className="flex mt-12">
            <a className="flex items-center text-[18px] py-1.5 px-3 bg-gradient-to-r from-cyan-500 to-blue-800 rounded-md"
              download={true}
              href='/Akinlade  cv.docx.pdf'
            >
              Dowload CV 
              <BiDownload
                size={20} 
                className="ml-3"
              /> 
            </a>
          </div>
        </div> */}
      </div>
    </div>
  )
} 

export default Contact
