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
