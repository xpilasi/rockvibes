'use client'
import React from 'react';
import Image from 'next/image';
import MenuDesk from './components/menu/MenuDesk';
import MenuRight from './components/menu/MenuRight';
import MenuLogSign from './components/menu/MenuLogSign';
import Language from './components/menu/Language';
import MenuBurger from './components/menu/MenuBurger';
import { useState,useRef,useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navRef = useRef(null)
  const logoNavRef = useRef(null)
  const loginNavRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (navRef.current) {
      if (window.scrollY > 0) {
        
        navRef.current.classList.remove('lg:h-20');
        navRef.current.classList.add('lg:h-11');
        logoNavRef.current.classList.remove('lg:w-52');
        logoNavRef.current.classList.add('lg:w-32');
        loginNavRef.current.classList.remove('lg:w-52');
        loginNavRef.current.classList.add('lg:w-32');
      } else {
        navRef.current.classList.add('lg:h-20');
        navRef.current.classList.remove('lg:h-11');
        logoNavRef.current.classList.add('lg:w-52');
        logoNavRef.current.classList.remove('lg:w-32');
        loginNavRef.current.classList.add('lg:w-52');
        loginNavRef.current.classList.remove('lg:w-32');
      }
    }
  };

  useEffect(() => {
    console.log(navRef.current.classList);
    console.log('TESTING');
   // Asegúrate de que el código del scroll solo se ejecute en el lado del cliente
   if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
    }
  };
  }, []);

  const handleNavigation = (path) => {
    setIsMenuOpen(false); // Close mobile menu if open
    router.push(path);
  };

  return (
    <header id='full-header' className='fixed top-0 w-full z-50 bg-gray-100'>
       <div className='lg:hidden bg-white h-16 flex py-3 flex-row justify-start pl-5 items-center fixed top-0 w-full z-50'>
        <div className='w-24'>
          {/* <Link src='/' alt=''> */}
          <a href="/">
          <svg className='w-32'  viewBox="0 0 285 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M82.153 53H74.719L69.112 35.423H65.458V53H58.15V8.9H69.553C76.231 8.9 80.641 11.546 80.641 18.224V26.099C80.641 30.32 78.877 32.966 75.853 34.289L82.153 53ZM65.458 15.326V29.123H69.301C71.695 29.123 73.333 28.241 73.333 25.091V19.358C73.333 16.208 71.695 15.326 69.301 15.326H65.458ZM85.9527 17.72C85.9527 10.979 90.3627 8.396 97.0407 8.396H97.5447C104.223 8.396 108.633 11.042 108.633 17.72V44.18C108.633 50.858 104.223 53.504 97.5447 53.504H97.0407C90.3627 53.504 85.9527 50.858 85.9527 44.18V17.72ZM93.2607 43.046C93.2607 46.196 94.8987 47.078 97.2927 47.078C99.6867 47.078 101.325 46.196 101.325 43.046V18.854C101.325 15.704 99.6867 14.822 97.2927 14.822C94.8987 14.822 93.2607 15.704 93.2607 18.854V43.046ZM136.74 35.045V44.18C136.74 50.984 132.33 53.504 125.652 53.504H125.526C118.848 53.504 114.438 51.047 114.438 44.18V17.72C114.438 11.168 118.848 8.396 125.526 8.396H125.652C132.33 8.396 136.74 11.168 136.74 17.72V25.784H129.432V18.854C129.432 15.767 127.92 14.822 125.589 14.822C123.258 14.822 121.746 15.767 121.746 18.854V43.046C121.746 46.133 123.258 47.078 125.589 47.078C127.92 47.078 129.432 46.133 129.432 43.046V35.045H136.74ZM166.626 53H159.192L153.144 33.848L149.868 40.274V53H142.56V8.9H149.868V28.745L158.184 8.9H165.87L157.428 25.469L166.626 53ZM191.188 8.9L182.872 53H174.808L166.492 8.9H173.926L179.029 41.597L184.132 8.9H191.188ZM202.415 53H195.107V8.9H202.415V53ZM231.057 23.138C231.057 26.288 229.671 29.627 226.143 30.068C229.986 30.698 231.309 33.659 231.309 37.061V44.306C231.309 49.85 227.025 53 220.347 53H208.944V8.9H220.473C227.151 8.9 231.057 12.05 231.057 17.594V23.138ZM216.252 15.2V27.107H220.347C222.426 27.107 223.749 26.036 223.749 23.705V18.602C223.749 16.271 222.426 15.2 220.347 15.2H216.252ZM224.001 36.683C224.001 34.352 222.678 33.281 220.599 33.281H216.252V46.7H220.599C222.678 46.7 224.001 45.629 224.001 43.298V36.683ZM256.283 53H236.753V8.9H256.094V15.326H244.061V27.422H254.141V33.848H244.061V46.574H256.283V53ZM281.97 24.65H274.788V18.476C274.788 15.704 273.213 14.696 271.071 14.696C268.929 14.696 267.354 15.704 267.354 18.476V21.5C267.354 23.768 268.11 24.776 270.189 25.973L275.355 28.871C279.576 31.265 282.096 33.218 282.096 37.943V44.306C282.096 51.11 277.875 53.504 271.197 53.504H271.071C264.393 53.504 260.172 51.173 260.172 44.306V36.62H267.354V43.298C267.354 46.007 268.929 47.204 271.134 47.204C273.339 47.204 274.914 46.007 274.914 43.298V39.833C274.914 37.565 274.221 36.431 272.016 35.234L266.913 32.336C262.629 29.879 260.172 27.863 260.172 23.264V17.468C260.172 10.916 264.96 8.396 271.008 8.396H271.134C277.182 8.396 281.97 10.916 281.97 17.468V24.65Z" fill="#2D2D2D"/>
                          <path d="M9.71247 47.3232L2 33.3016L12.2495 18.2926V10.1957L19.1501 2L43.8097 18.2926L45.129 32.9066L50 41.991L29.8055 57L9.71247 47.3232Z" fill="white"/>
                          <path d="M9.71247 47.3232L2 33.3016L12.2495 18.2926M9.71247 47.3232L29.8055 57M9.71247 47.3232L15.1924 44.8546L16.0042 41.2011M29.8055 57L50 41.991M29.8055 57L32.444 41.991M50 41.991L45.129 32.9066M50 41.991H32.444M45.129 32.9066L43.8097 18.2926M45.129 32.9066L29.3996 30.0431M43.8097 18.2926L19.1501 2M43.8097 18.2926L32.0381 23.0323M19.1501 2L12.2495 10.1957V18.2926M19.1501 2L32.0381 23.0323M12.2495 18.2926L16.7146 21.6499L18.8457 28.9569L21.1797 30.9318M32.0381 23.0323L29.3996 30.0431M29.3996 30.0431L32.444 41.991" stroke="#E5427B" strokeWidth="3"/>
          </svg>
          </a>
          
          {/* </Link> */}
          

        </div>
        
       </div>


          {/* Menu Burger */}
          <MenuBurger
              showMenu={showMenu}
              setShowMenu={setShowMenu}
          />

          {/* Barra de navegación responsive */}
          <nav 
            id='full-nav'
            ref={navRef}
            className={showMenu 
                        ?` bg-bg-custom-gray pointer-events-auto  fixed lg:sticky top-0 lg:top-0 right-0 left-0  lg:h-20 min-h-screen lg:min-h-20 pt-32 pb-52 lg:py-0 text-textMainText font-riftDemi text-lg flex lg:flex-row flex-col justify-between lg:px-20 px-10 items-center transition-opacity duration-200 ease-in-out`
                        :' opacity-0 lg:pointer-events-auto pointer-events-none lg:opacity-100 bg-bgCustomGray  fixed lg:sticky top-0 lg:top-0 right-0 left-0  lg:h-20   pt-32 pb-52 lg:py-0 text-textMainText font-riftDemi text-lg flex lg:flex-row flex-col justify-between lg:px-20 px-10 items-center transition-all duration-200 ease-in-out'}>
                    
                      {/* Rockvibes logo */}
                      <a href="/">
                        <div
                          ref={logoNavRef}
                          id='logo-rock-vibes-menu' 
                          className='lg:w-52  lg:flex lg:flex-row justify-center lg:justify-start hidde transition-all ease-in-out duration-200 '>
                            
                          
                          <svg 
                            className='w-70 lg:w-52'  viewBox="0 0 285 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M82.153 53H74.719L69.112 35.423H65.458V53H58.15V8.9H69.553C76.231 8.9 80.641 11.546 80.641 18.224V26.099C80.641 30.32 78.877 32.966 75.853 34.289L82.153 53ZM65.458 15.326V29.123H69.301C71.695 29.123 73.333 28.241 73.333 25.091V19.358C73.333 16.208 71.695 15.326 69.301 15.326H65.458ZM85.9527 17.72C85.9527 10.979 90.3627 8.396 97.0407 8.396H97.5447C104.223 8.396 108.633 11.042 108.633 17.72V44.18C108.633 50.858 104.223 53.504 97.5447 53.504H97.0407C90.3627 53.504 85.9527 50.858 85.9527 44.18V17.72ZM93.2607 43.046C93.2607 46.196 94.8987 47.078 97.2927 47.078C99.6867 47.078 101.325 46.196 101.325 43.046V18.854C101.325 15.704 99.6867 14.822 97.2927 14.822C94.8987 14.822 93.2607 15.704 93.2607 18.854V43.046ZM136.74 35.045V44.18C136.74 50.984 132.33 53.504 125.652 53.504H125.526C118.848 53.504 114.438 51.047 114.438 44.18V17.72C114.438 11.168 118.848 8.396 125.526 8.396H125.652C132.33 8.396 136.74 11.168 136.74 17.72V25.784H129.432V18.854C129.432 15.767 127.92 14.822 125.589 14.822C123.258 14.822 121.746 15.767 121.746 18.854V43.046C121.746 46.133 123.258 47.078 125.589 47.078C127.92 47.078 129.432 46.133 129.432 43.046V35.045H136.74ZM166.626 53H159.192L153.144 33.848L149.868 40.274V53H142.56V8.9H149.868V28.745L158.184 8.9H165.87L157.428 25.469L166.626 53ZM191.188 8.9L182.872 53H174.808L166.492 8.9H173.926L179.029 41.597L184.132 8.9H191.188ZM202.415 53H195.107V8.9H202.415V53ZM231.057 23.138C231.057 26.288 229.671 29.627 226.143 30.068C229.986 30.698 231.309 33.659 231.309 37.061V44.306C231.309 49.85 227.025 53 220.347 53H208.944V8.9H220.473C227.151 8.9 231.057 12.05 231.057 17.594V23.138ZM216.252 15.2V27.107H220.347C222.426 27.107 223.749 26.036 223.749 23.705V18.602C223.749 16.271 222.426 15.2 220.347 15.2H216.252ZM224.001 36.683C224.001 34.352 222.678 33.281 220.599 33.281H216.252V46.7H220.599C222.678 46.7 224.001 45.629 224.001 43.298V36.683ZM256.283 53H236.753V8.9H256.094V15.326H244.061V27.422H254.141V33.848H244.061V46.574H256.283V53ZM281.97 24.65H274.788V18.476C274.788 15.704 273.213 14.696 271.071 14.696C268.929 14.696 267.354 15.704 267.354 18.476V21.5C267.354 23.768 268.11 24.776 270.189 25.973L275.355 28.871C279.576 31.265 282.096 33.218 282.096 37.943V44.306C282.096 51.11 277.875 53.504 271.197 53.504H271.071C264.393 53.504 260.172 51.173 260.172 44.306V36.62H267.354V43.298C267.354 46.007 268.929 47.204 271.134 47.204C273.339 47.204 274.914 46.007 274.914 43.298V39.833C274.914 37.565 274.221 36.431 272.016 35.234L266.913 32.336C262.629 29.879 260.172 27.863 260.172 23.264V17.468C260.172 10.916 264.96 8.396 271.008 8.396H271.134C277.182 8.396 281.97 10.916 281.97 17.468V24.65Z" fill="#2D2D2D"/>
                          <path d="M9.71247 47.3232L2 33.3016L12.2495 18.2926V10.1957L19.1501 2L43.8097 18.2926L45.129 32.9066L50 41.991L29.8055 57L9.71247 47.3232Z" fill="white"/>
                          <path d="M9.71247 47.3232L2 33.3016L12.2495 18.2926M9.71247 47.3232L29.8055 57M9.71247 47.3232L15.1924 44.8546L16.0042 41.2011M29.8055 57L50 41.991M29.8055 57L32.444 41.991M50 41.991L45.129 32.9066M50 41.991H32.444M45.129 32.9066L43.8097 18.2926M45.129 32.9066L29.3996 30.0431M43.8097 18.2926L19.1501 2M43.8097 18.2926L32.0381 23.0323M19.1501 2L12.2495 10.1957V18.2926M19.1501 2L32.0381 23.0323M12.2495 18.2926L16.7146 21.6499L18.8457 28.9569L21.1797 30.9318M32.0381 23.0323L29.3996 30.0431M29.3996 30.0431L32.444 41.991" stroke="#E5427B" strokeWidth="3"/>
                          </svg>
                          

                        </div>
                      </a>

                      {/*  */}
                      <div className='lg:text-md text-3xl lg:text-lg  w-full lg:w-auto '>
                      <MenuDesk/>

                      </div>

                      <div
                        ref={loginNavRef} 
                        className='lg:w-52 flex flex-col lg:flex-row justify-end lg:text-lg text-3xl w-full h-24 lg:items-center transition-all ease-in-out duration-200'>
                        <MenuLogSign/>
                        {/* <Language/> */}
                        
                        
                      </div>
                  

          </nav>

    </header>

    
  )
}

export default Nav