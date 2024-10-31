'use client'
import { useState } from 'react'
import React from 'react'
import Nav from './mainComponents/Nav.jsx'
import Footer from './mainComponents/Footer.jsx'

const Layout = ({children}) => {

    const [showMenu, setShowMenu] = useState(false);
    
  return (
    <div className="">
    <Nav showMenu={showMenu} setShowMenu={setShowMenu} />
    {children}
    <Footer />
  </div>
  )
}

export default Layout