

import './css/global.css'
import Navbar from "./components/navbar"
import Footer from './components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
