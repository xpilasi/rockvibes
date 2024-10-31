'use client'
import React, { useEffect, useState } from 'react';

const MenuBurger = ({ showMenu, setShowMenu }) => {






    return (
     
      <div className={`fixed lg:hidden z-40 top-5 right-5  text-black`}>
      <div 
          className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer "
          onClick={() => {setShowMenu(!showMenu);console.log(`show Menu Burger = ${showMenu}`);}
          }
      >
          <span 
              className={`absolute top-1.5 w-8   h-1 bg-bgCustomPink transition-all duration-300 ease-in-out transform ${
                  showMenu ? 'rotate-45 translate-y-1.5 translate-x-0.5 w-9' : 'rotate-0'
              }`}
          ></span>
          <span 
              className={`absolute top-5 left-1/2 w-4 h-1  bg-bgCustomPink transition-all duration-300 ease-in-out transform ${
                  showMenu ? '-rotate-45 -translate-y-2 w-9 -translate-x-4' : 'rotate-0'
              }`}
          ></span>
      </div>
    </div>
      
        
    );
};

export default MenuBurger;