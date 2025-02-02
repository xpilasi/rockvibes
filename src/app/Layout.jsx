'use client'
import { useState } from 'react'
import React from 'react'
import Nav from './mainComponents/Nav.jsx'
import Footer from './mainComponents/Footer.jsx'
import './styles/globals.css'

export default function RootLayout({ children }) {
  const [showMenu, setShowMenu] = useState(undefined);
  
  return (
    <html lang="en">
      <head>
        <title>Rock Vibes</title>
        <meta name="description" content="Find your next climbing spot" />
      </head>
      <body className="font-soleil-regular">
        <div className="min-h-screen bg-green-200 ">
          <Nav showMenu={showMenu} setShowMenu={setShowMenu} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}