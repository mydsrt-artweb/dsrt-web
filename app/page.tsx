"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Section from "@/components/Section"
import { Bot, Video, Image, Eraser } from "lucide-react"
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa"

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="w-full overflow-x-hidden">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3
                      bg-white/70 backdrop-blur-md border border-gray-300/50
                      shadow-md sticky top-0 z-50">
        <div className="font-bold text-lg sm:text-xl">DSRT</div>
        <button className="text-2xl sm:text-3xl" onClick={() => setMenuOpen(true)}>☰</button>
      </nav>

      {/* Side Menu (Burger Drawer) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[80vw] max-w-xs sm:max-w-sm bg-white/90 
                       backdrop-blur-md border-l border-gray-300/50 shadow-xl z-50 flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="text-xl sm:text-2xl font-bold">✕</button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col px-4 sm:px-6 space-y-4 text-lg font-medium">
              <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-sky-600">Home</a>
              <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-sky-600">Features</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-sky-600">About Us</a>
              <a href="#follow" onClick={() => setMenuOpen(false)} className="hover:text-sky-600">Follow Us</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-sky-600">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HOME */}
      <Section>
        <h1 id="home" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">DSRT</h1>
        <p className="text-md sm:text-lg font-semibold mb-4">Digital Smart Revise Technology</p>
        <p className="mb-2 text-sm sm:text-base">Innovating the future with intelligent<br />solutions for digital growth.</p>
        <p className="text-sm sm:text-base">Empowering businesses to thrive<br />in the digital transformation era.</p>
      </Section>

      {/* FEATURES */}
      <Section title="FEATURES">
        <div id="features" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[{
            icon: <Bot className="w-10 h-10 mb-3 text-sky-600" />,
            title: "Ai Generate",
            desc: "Generate smart content and ideas powered by AI."
          },{
            icon: <Video className="w-10 h-10 mb-3 text-sky-600" />,
            title: "Editing Video",
            desc: "Enhance and edit your videos with advanced tools."
          },{
            icon: <Image className="w-10 h-10 mb-3 text-sky-600" />,
            title: "Editing Photos",
            desc: "Transform your photos with smart editing features."
          },{
            icon: <Eraser className="w-10 h-10 mb-3 text-sky-600" />,
            title: "All Removed",
            desc: "Easily remove unwanted objects or backgrounds."
          }].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 sm:p-6 border border-gray-300/50
                                       rounded-xl bg-white/60 hover:shadow-md transition w-full">
              {item.icon}
              <h3 className="font-semibold text-lg mb-2 text-center">{item.title}</h3>
              <p className="text-sm text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT US */}
      <Section title="ABOUT US">
        <p id="about" className="text-sm sm:text-base md:text-lg text-center md:text-left">
          We are DSRT, dedicated to delivering intelligent<br />
          digital solutions that empower businesses in their growth.
        </p>
      </Section>

      {/* FOLLOW US */}
      <Section title="FOLLOW US">
        <div id="follow" className="flex justify-center gap-4 sm:gap-6">
          <a href="https://instagram.com" target="_blank"
             className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                        border border-gray-300/50 rounded-full bg-white/60
                        hover:scale-110 hover:bg-sky-100 transition transform">
            <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
          </a>
          <a href="https://github.com" target="_blank"
             className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                        border border-gray-300/50 rounded-full bg-white/60
                        hover:scale-110 hover:bg-sky-100 transition transform">
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </a>
          <a href="https://facebook.com" target="_blank"
             className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                        border border-gray-300/50 rounded-full bg-white/60
                        hover:scale-110 hover:bg-sky-100 transition transform">
            <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </a>
        </div>
      </Section>

      {/* CONTACT */}
      <Section title="CONTACT">
        <p id="contact" className="text-center sm:text-left text-sm sm:text-base">
          Reach us at <a href="mailto:contact@dsrt.com" className="text-sky-600 underline">contact@dsrt.com</a>
        </p>
      </Section>

      {/* FOOTER */}
      <Section>
        <p className="text-center text-sm sm:text-base">© 2025 DSRT. All rights reserved.</p>
      </Section>
    </main>
  )
}
