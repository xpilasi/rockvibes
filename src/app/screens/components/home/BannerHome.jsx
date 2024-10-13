import React from 'react';
import Image from 'next/image';
import womanClimber from '../../../../../assets/img/climbers/fondo-rv-1.png';

const BannerHome = () => {
  return (
    <div 
      className='lg:pt-20   pt-16 lg:mt-0 text-base text-textMainText bg-red-200 w-full  flex-col lg:grid lg:grid-cols-2 '>
        {/* TEXT BANNER */}
          <div className="bg-white w-full  bg-no-repeat bg-center bg-cover pt-5 lg:px-20 px-5" >
            
            <h1 className='text-3xl font-riftBold text-textBigTitleGraphite '>Welcome to the RockVibes</h1>
            <h2 className='text-5xl font-riftBold text-textBigTitlePink '>NEW FEATURES FOR CLIMBERS</h2>
            <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam minus recusandae officiis, itaque reprehenderit sapiente laborum, sit doloremque consequuntur, iusto quo. Iste perspiciatis unde necessitatibus dicta doloremque quod quam?
            </p>
            
          </div>
          {/* IMAGE BANNER */}
          <div><Image src={womanClimber}></Image></div>
          
                
    </div>
  )
}

export default BannerHome