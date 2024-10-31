import React from 'react';
import BannerHome from './components/home/BannerHome';
import Filters from './components/home/Filters';
import TitleArticle from './components/titles/TitleArticle';


const MainDefault = () => {
  return (
    
    <div 
      className='lg:min-h-screen   min-h-[calc(100vh-4rem)]   text-base text-textMainText  w-full  flex-col  '>
        {/* BANNER m */}
        <BannerHome/>
        <TitleArticle titleArticle='Busca lugares de escalada'/>
        <Filters/>

         
          
                
    </div>
  )
}

export default MainDefault