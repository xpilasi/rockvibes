'use client'
import { useState } from 'react'
import React from 'react'
import Nav from './mainComponents/Nav.jsx'
import Footer from './mainComponents/Footer.jsx'
import './globals.css'

export default function RootLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <html lang="en">
      <body className="font-soleil-regular">
        <div className="min-h-screen bg-white">
          <Nav showMenu={showMenu} setShowMenu={setShowMenu} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}