import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900/90 border-t border-amber-300/20 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* About & Address */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-amber-300 font-bold text-lg mb-2">Nabaditya Bhutia</h3>
          <p className="text-gray-300 text-sm mb-2">
            Bhubaneswar, Odisha, India
          </p>
          <p className="text-gray-300 text-sm mb-2">
            <span className="font-semibold text-amber-300">Current Location:</span> Mumbai, Maharashtra
          </p>
          <p className="flex items-center justify-center md:justify-start text-gray-400 text-sm mb-2">
            <FaEnvelope className="mr-2 text-amber-300" />
            nabaditya.bhutia@email.com
          </p>
          <p className="flex items-center justify-center md:justify-start text-gray-400 text-sm">
            <FaMapMarkerAlt className="mr-2 text-amber-300" />
            Address: 123 Main Street, Bhubaneswar, Odisha
          </p>
        </div>
        {/* Services */}
        <div className="flex-1 flex flex-col items-center md:items-center">
          <h4 className="text-amber-300 font-bold text-lg mb-2">Services</h4>
          <ul className="text-gray-300 text-sm space-y-1 text-center">
            <li>Web Development</li>
            <li>Frontend Design</li>
            <li>Backend Development</li>
            <li>UI/UX Consulting</li>
            <li>Data Analysis</li>
          </ul>
        </div>
        {/* Moto & Social Links */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <p className="italic text-gray-300 text-center max-w-xs mb-3 mt-10">
            "Turning ideas into reality through code and creativity. Let's build something amazing together!"
          </p>
          <div className="flex space-x-5 ">
            <a
              href="https://github.com/Er-Nabaditya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-white text-2xl transition "
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nabaditya-bhutia-254370237/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-white text-2xl transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/im_mr_bicky/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-white text-2xl transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:bhutianabaditya@gmail.com"
              className="text-amber-300 hover:text-white text-2xl transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      {/* All rights reserved centered below */}
      <div className="w-full flex justify-center mt-6">
        <div className="text-gray-400 text-xs text-center">
          © {new Date().getFullYear()} Nabaditya Bhutia. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
export default Footer;