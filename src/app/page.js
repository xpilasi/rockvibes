 'use client'
import Image from "next/image";
import Nav from "./screens/Nav";
import MainDefault from "./screens/MainDefault";
import Footer from "./screens/Footer";
import { useState } from "react";
import Layout from './Layout.jsx'


export default function Home() {

  

  return (
    <Layout className="">
     
      <MainDefault/>
    
    </Layout>
  );
}
