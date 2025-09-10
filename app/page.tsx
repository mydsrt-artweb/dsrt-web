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
      <nav className="flex justify-between items-center px-6 py-4 
                      bg-white/70 backdrop-blur-md border border-gray-300/50 
                      shadow-md sticky top-0 z-50">
        <div className="font-bold text-lg">DSRT</div>
        <button className="text-2xl" onClick={() => setMenuOpen(true)}>☰</button>
      </nav>

      {/* Side Menu (Burger Drawer) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-white/90 backdrop-blur-md 
                       border-l border-gray-300/50 shadow-xl z-50 flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">✕</button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col px-6 space-y-4 text-lg font-medium">
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
        <h1 id="home" className="text-3xl font-bold mb-2">DSRT</h1>
        <p className="text-lg font-semibold mb-4">Digital Smart Revise Technology</p>
        <p className="mb-2">Innovating the future with intelligent<br />solutions for digital growth.</p>
        <p>Empowering businesses to thrive<br />in the digital transformation era.</p>
      </Section>

      {/* FEATURES */}
      <Section title="FEATURES">
        <div id="features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-6 border border-gray-300/50 
                          rounded-xl bg-white/60 hover:shadow-md transition">
            <Bot className="w-10 h-10 mb-3 text-sky-600" />
            <h3 className="font-semibold text-lg mb-2">Ai Generate</h3>
            <p className="text-sm text-gray-600">Generate smart content and ideas powered by AI.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-300/50 
                          rounded-xl bg-white/60 hover:shadow-md transition">
            <Video className="w-10 h-10 mb-3 text-sky-600" />
            <h3 className="font-semibold text-lg mb-2">Editing Video</h3>
            <p className="text-sm text-gray-600">Enhance and edit your videos with advanced tools.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-300/50 
                          rounded-xl bg-white/60 hover:shadow-md transition">
            <Image className="w-10 h-10 mb-3 text-sky-600" />
            <h3 className="font-semibold text-lg mb-2">Editing Photos</h3>
            <p className="text-sm text-gray-600">Transform your photos with smart editing features.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-300/50 
                          rounded-xl bg-white/60 hover:shadow-md transition">
            <Eraser className="w-10 h-10 mb-3 text-sky-600" />
            <h3 className="font-semibold text-lg mb-2">All Removed</h3>
            <p className="text-sm text-gray-600">Easily remove unwanted objects or backgrounds.</p>
          </div>
        </div>
      </Section>

      {/* ABOUT US */}
      <Section title="ABOUT US">
        <p id="about">We are DSRT, dedicated to delivering intelligent<br />
           digital solutions that empower businesses in their growth.</p>
      </Section>

      {/* FOLLOW US */}
      <Section title="FOLLOW US">
        <div id="follow" className="flex justify-center gap-6">
          <a href="https://instagram.com" target="_blank"
             className="w-12 h-12 flex items-center justify-center 
                        border border-gray-300/50 rounded-full bg-white/60
                        hover:scale-110 hover:bg-sky-100 transition transform">
            <FaInstagram className="w-6 h-6 text-pink-500" />
          </a>
          <a href="https://github.com" target="_blank"
             className="w-12 h-12 flex items-center justify-center 
                        border border-gray-300/50 rounded-full bg-white/60
                        hover:scale-110 hover:bg-sky-100 transition transform">
            <FaGithub className="w-6 h-6 text-gray-800" />
          </a>
          <a href="https://facebook.com" target="_blank"
             className="w-12 h-12 flex items-center justify-center 
                        border border-gray-300/50 rounded-full bg-white/60
                        hover:scale-110 hover:bg-sky-100 transition transform">
            <FaFacebook className="w-6 h-6 text-blue-600" />
          </a>
        </div>
      </Section>

      {/* CONTACT */}
      <Section title="CONTACT">
        <p id="contact">Reach us at <a href="mailto:contact@dsrt.com" className="text-sky-600 underline">contact@dsrt.com</a></p>
      </Section>

      {/* FOOTER */}
      <Section>
        <p>© 2025 DSRT. All rights reserved.</p>
      </Section>
    </main>
  )
            }
