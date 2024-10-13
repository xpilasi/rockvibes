import React from 'react';
import BannerHome from './components/home/BannerHome';


const MainDefault = () => {
  return (
    
    <div 
      className='lg:min-h-screen   min-h-[calc(100vh-4rem)]   text-base text-textMainText bg-red-200 w-full  flex-col  '>
        {/* BANNER */}
        <BannerHome/>
         
          
                
    </div>
  )
}

export default MainDefault