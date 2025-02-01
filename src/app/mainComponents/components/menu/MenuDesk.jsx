import React from 'react';
import Link from 'next/link';
import { useEffect,useState } from 'react';


const MenuDesk = () => {



  return (
    <div>
      <ul className='flex lg:flex-row flex-col justify-center items-center font-rift-demi text-main-gray tracking-tight '>
        <li className='py-2 lg:py-0 px-2 hover:text-Custom-pink transition-all duration-200 ease-in-out '><Link href='/where-to-climb'>Dónde escalar</Link></li>
        <li className='py-2 lg:py-0 px-2 hover:text-Custom-pink transition-all duration-200 ease-in-out '><Link href='/add-place'>Add Place</Link></li>
        <li className='py-2 lg:py-0 px-2 hover:text-Custom-pink transition-all duration-200 ease-in-out '><Link href='/blog'>Blog</Link></li>
        <li className='py-2 lg:py-0 px-2 hover:text-Custom-pink transition-all duration-200 ease-in-out '><Link href='/grades-converter'>Convertidor de Grados</Link></li>
        
        </ul>
    </div>
  )
}

export default MenuDesk