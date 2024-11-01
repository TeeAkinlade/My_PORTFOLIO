import React from "react";
import { FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr';
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-white text-white pt-10 md:py-20 bg-gradient-to-b from-black to-gray-800 lg:px-28 md:px-16"
    >
      <div className="flex flex-col p-6 mx-auto h-full pb-8">
        <div className="pb-8">
          <p className="text-4xl px-2 font-bold inline border-b-4 border-slate-500 ">
            Contact
          </p>
          <p className="py-6 px-2 font-semibold">Get in touch with me</p>
         <div className="w-full flex md:flex-row flex-col flex-wrap justify-center gap-10 lg:gap-[2rem] pt-8 md:pt-16 px-8">
            <div className="flex flex-col w-full md:w-[40%] lg:w-[30%] rounded-[2rem] p-8 shadow-lg border border-cyan-500">
                <GrMail size={38} className="mb-2" />
                   <h3 className="font-bold text-xl">Email</h3>
                   <p className="py-2 text-sm">taiye.akinlade1@gmail.com</p>
                   <a
                    className="button-85 mt-5 text-md lg:text-lg"
                    role="button"
                    target="_blank"
                    href="mailto:taiye.akinlade1@gmail.com"
                   >
                    Send an email
                </a>
            </div>
            <div className="flex flex-col w-full md:w-[40%] lg:w-[30%] rounded-[2rem] p-8 shadow-lg border border-cyan-500">
            <FaWhatsapp size={38} className="mb-2" />
                <h3 className="font-bold text-xl">WhatsApp</h3>
                <p className="py-2 text-sm">+2348149062746</p>
                <a
                    className="button-85 mt-5 text-md lg:text-lg"
                    role="button"
                    target="_blank"
                    href="https://wa.me/+2348149062746"
                >
                    WhatsApp Me.
                </a>
            </div>
            <div className="flex flex-col w-full md:w-[40%] lg:w-[30%] rounded-[2rem] p-8 shadow-lg border border-cyan-500">
            <FaLinkedin size={38} className="mb-2" />
                <h3 className="font-bold text-xl">Linkedin</h3>
                <p className="py-2 text-sm">Taiye Akinlade</p>
                <a
                    className="button-85 mt-5 text-md lg:text-lg"
                    role="button"
                    target="_blank"
                    href="https://www.linkedin.com/in/akinlade-taiye-733a8120a/"
                >
                    Send a Message
                </a>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
} 

export default Contact
