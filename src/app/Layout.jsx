'use client'
import { useState } from 'react'
import React from 'react'
import Nav from './screens/Nav'
import Footer from './screens/Footer'

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