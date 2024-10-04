 'use client'
import Image from "next/image";
import Nav from "./screens/Nav";
import MainDefault from "./screens/MainDefault";
import Footer from "./screens/Footer";
import { useState } from "react";

export default function Home() {

  const [showMenu,setShowMenu] = useState(false);

  return (
    <div className="">
      <Nav
        showMenu={showMenu} setShowMenu={setShowMenu}
      />
      <MainDefault/>
      <Footer/>
    </div>
  );
}
