import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium mb-6">Contact</h2>
          <div className="space-y-2 text-gray-400">
            <div className="flex items-center space-x-2">
              <FaGithub />
              <span>UzaibBashir</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaLinkedin />
              <span>Uzaib Bashir</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail />
              <a href="mailto:youremail@example.com" className="inline-block  border border-neutral-700 px-4  rounded-full hover:bg-neutral-700 hover:text-white transition">Email</a>
            </div>
            
          </div>
      </div>

      <div className="flex gap-4 text-2xl">

    </div>
      </section>
  )
}

export default Contact
