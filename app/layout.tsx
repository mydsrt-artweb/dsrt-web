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
