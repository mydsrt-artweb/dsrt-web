#!/bin/bash
# DSRT Landing Page Setup Script

echo "🚀 Membuat project Next.js 15 untuk DSRT..."

# 1. Buat project baru Next.js 15
npx create-next-app@latest dsrt-landing --ts --eslint --tailwind --app --src-dir --import-alias "@/*"

cd dsrt-landing

echo "📦 Install tambahan dependencies..."
# 2. Install Framer Motion untuk animasi
npm install framer-motion

echo "🛠 Membuat struktur folders..."
# 3. Buat folder components
mkdir -p components

# 4. Tulis file Section.tsx
cat << 'EOF' > components/Section.tsx
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
      className="max-w-3xl mx-auto my-8 p-6 
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

# 5. Replace globals.css
cat << 'EOF' > app/globals.css
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

.animate-wave-slow {
  animation: wave 30s ease-in-out infinite;
}

.animate-wave-mid {
  animation: wave 20s ease-in-out infinite;
}

.animate-wave-fast {
  animation: wave 10s ease-in-out infinite;
}
EOF

# 6. Replace layout.tsx
cat << 'EOF' > app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'DSRT Landing Page',
  description: 'Digital Smart Revise Technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-gray-800 overflow-x-hidden">
        {/* Background gradien + waves */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 animate-gradientMove"></div>
          
          {/* Layer 3 - jauh */}
          <svg className="absolute bottom-0 left-0 w-[200%] h-48 animate-wave-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff33" d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,197.3C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96V320H0Z"></path>
          </svg>

          {/* Layer 2 - tengah */}
          <svg className="absolute bottom-0 left-0 w-[200%] h-48 animate-wave-mid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff66" d="M0,192L60,176C120,160,240,128,360,117.3C480,107,600,117,720,128C840,139,960,149,1080,154.7C1200,160,1320,160,1380,160L1440,160V320H0Z"></path>
          </svg>

          {/* Layer 1 - dekat */}
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

# 7. Replace page.tsx
cat << 'EOF' > app/page.tsx
import Section from "@/components/Section"

export default function Page() {
  return (
    <main>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 
                      bg-white/70 backdrop-blur-md border border-gray-300/50 
                      shadow-md sticky top-0 z-50">
        <div className="font-bold text-lg">DSRT</div>
        <button className="text-2xl">☰</button>
      </nav>

      {/* HOME */}
      <Section>
        <h1 className="text-3xl font-bold mb-2">DSRT</h1>
        <p className="text-lg font-semibold mb-4">Digital Smart Revise Technology</p>
        <p className="mb-2">Innovating the future with intelligent<br />solutions for digital growth.</p>
        <p>Empowering businesses to thrive<br />in the digital transformation era.</p>
      </Section>

      {/* FEATURES */}
      <Section title="FEATURES">
        <div className="space-y-3">
          <div className="p-3 border border-gray-300/50 rounded bg-white/60">Ai Generate</div>
          <div className="p-3 border border-gray-300/50 rounded bg-white/60">Editing Video</div>
          <div className="p-3 border border-gray-300/50 rounded bg-white/60">Editing Photos</div>
          <div className="p-3 border border-gray-300/50 rounded bg-white/60">All Removed</div>
        </div>
      </Section>

      {/* ABOUT US */}
      <Section title="ABOUT US">
        <p>We are DSRT, dedicated to delivering intelligent<br />
           digital solutions that empower businesses in their growth.</p>
      </Section>

      {/* FOLLOW US */}
      <Section title="FOLLOW US">
        <div className="flex justify-center gap-6">
          <a href="https://instagram.com" target="_blank"
             className="w-12 h-12 flex items-center justify-center 
                        border border-gray-300/50 rounded-full bg-white/60
                        hover:scale-110 hover:bg-sky-100 transition transform">📸</a>
          <a href="https://github.com" target="_blank"
             className="w-12 h-12 flex items-center justify-center 
                        border border-gray-300/50 rounded-full bg-white/60
                        hover:scale-110 hover:bg-sky-100 transition transform">🐙</a>
          <a href="https://facebook.com" target="_blank"
             className="w-12 h-12 flex items-center justify-center 
                        border border-gray-300/50 rounded-full bg-white/60
                        hover:scale-110 hover:bg-sky-100 transition transform">📘</a>
        </div>
      </Section>

      {/* FOOTER */}
      <Section>
        <p>© 2025 DSRT. All rights reserved.</p>
      </Section>
    </main>
  )
}
EOF

echo "✅ Setup selesai! Jalankan project dengan:"
echo "   cd dsrt-landing"
echo "   npm run dev"
