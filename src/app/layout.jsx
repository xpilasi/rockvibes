import './styles/globals.css'
import Nav from './mainComponents/Nav'
import Footer from './mainComponents/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-soleil-regular">
        <div className="min-h-screen ">
          <Nav />
          <main className="flex-grow relative" key={Math.random()}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}