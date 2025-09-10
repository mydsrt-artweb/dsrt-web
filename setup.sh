#!/bin/bash
set -e

# === SETUP NEXT.JS PROJECT ===
echo "🚀 Membuat project Next.js 15..."
npx create-next-app@latest dsrt-landing --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"

cd dsrt-landing

# === INSTALL DEPENDENCIES TAMBAHAN ===
echo "📦 Install library tambahan..."
npm install framer-motion lucide-react react-icons

# === BUAT FOLDER COMPONENTS ===
mkdir -p components

# === OVERWRITE FILES ===

# globals.css
cat > app/globals.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Background gradien bergerak */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradientMove {
  background-size: 600% 600%;
  animation: gradientMove 20s ease infinite;
}

/* Wave multi-layer */
@keyframes wave {
  0% { transform: translateX(0); }
  50% { transform: translateX(-25%); }
  100% { transform: translateX(0); }
}
.animate-wave-slow { animation: wave 30s ease-in-out infinite; }
.animate-wave-mid { animation: wave 20s ease-in-out infinite; }
.animate-wave-fast { animation: wave 10s ease-in-out infinite; }
EOF

# layout.tsx
cat > app/layout.tsx <<'EOF'
import './globals.css'

export const metadata = {
  title: 'DSRT Landing Page',
  description: 'Digital Smart Revise Technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="w-full min-h-screen text-gray-800 overflow-x-hidden relative">
        {/* Background gradien + waves */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 animate-gradientMove"></div>

          <svg className="absolute bottom-0 left-0 w-[200%] h-48 animate-wave-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff33" d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,197.3C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96V320H0Z"></path>
          </svg>

          <svg className="absolute bottom-0 left-0 w-[200%] h-48 animate-wave-mid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff66" d="M0,192L60,176C120,160,240,128,360,117.3C480,107,600,117,720,128C840,139,960,149,1080,154.7C1200,160,1320,160,1380,160L1440,160V320H0Z"></path>
          </svg>

          <svg className="absolute bottom-0 left-0 w-[200%] h-48 animate-wave-fast" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" d="M0,288L60,272C120,256,240,224,360,192C480,160,600,128,720,112C840,96,960,96,1080,106.7C1200,117,1320,139,1380,149.3L1440,160V320H0Z"></path>
          </svg>
        </div>

        {children}
      </body>
    </html>
  )
}
EOF

# Section.tsx
cat > components/Section.tsx <<'EOF'
"use client"
import { motion } from "framer-motion"

type SectionProps = {
  title?: string
  children: React.ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto my-8 p-6 
                 bg-white/70 backdrop-blur-md 
                 border border-gray-300/50 
                 text-center rounded-2xl shadow-lg
                 hover:shadow-sky-200 transition"
    >
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {children}
    </motion.section>
  )
}
EOF

# page.tsx
cat > app/page.tsx <<'EOF'
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
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">✕</button>
            </div>

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
          <div className="flex flex-col items-center p-6 border border-gray-300/50 rounded-xl bg-white/60 hover:shadow-md transition">
            <Bot className="w-10 h-10 mb-3 text-sky-600" />
            <h3 className="font-semibold text-lg mb-2">Ai Generate</h3>
            <p className="text-sm text-gray-600">Generate smart content and ideas powered by AI.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-300/50 rounded-xl bg-white/60 hover:shadow-md transition">
            <Video className="w-10 h-10 mb-3 text-sky-600" />
            <h3 className="font-semibold text-lg mb-2">Editing Video</h3>
            <p className="text-sm text-gray-600">Enhance and edit your videos with advanced tools.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-300/50 rounded-xl bg-white/60 hover:shadow-md transition">
            <Image className="w-10 h-10 mb-3 text-sky-600" />
            <h3 className="font-semibold text-lg mb-2">Editing Photos</h3>
            <p className="text-sm text-gray-600">Transform your photos with smart editing features.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-300/50 rounded-xl bg-white/60 hover:shadow-md transition">
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
          <a href="https://instagram.com" target="_blank" className="w-12 h-12 flex items-center justify-center border border-gray-300/50 rounded-full bg-white/60 hover:scale-110 hover:bg-sky-100 transition transform">
            <FaInstagram className="w-6 h-6 text-pink-500" />
          </a>
          <a href="https://github.com" target="_blank" className="w-12 h-12 flex items-center justify-center border border-gray-300/50 rounded-full bg-white/60 hover:scale-110 hover:bg-sky-100 transition transform">
            <FaGithub className="w-6 h-6 text-gray-800" />
          </a>
          <a href="https://facebook.com" target="_blank" className="w-12 h-12 flex items-center justify-center border border-gray-300/50 rounded-full bg-white/60 hover:scale-110 hover:bg-sky-100 transition transform">
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
EOF

echo "✅ DSRT Landing setup selesai! Jalankan dengan:"
echo "cd dsrt-landing && npm run dev"
