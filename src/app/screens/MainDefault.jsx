import React from 'react';
import BannerHome from './components/home/BannerHome';
import Filters from './components/home/Filters';


const MainDefault = () => {
  return (
    
    <div 
      className='lg:min-h-screen   min-h-[calc(100vh-4rem)]   text-base text-textMainText  w-full  flex-col  '>
        {/* BANNER */}
        <BannerHome/>
        <Filters/>

         
          
                
    </div>
  )
}

export default MainDefault