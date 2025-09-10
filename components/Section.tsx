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
