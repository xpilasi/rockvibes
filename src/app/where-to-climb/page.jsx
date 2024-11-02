'use client'
import React from 'react'
import Layout from '../Layout.jsx'
import ArnesImg from '../../../public/assets/img/img-blog/arnes.jpg'
import PiesDeGatoImg from '../../../public/assets/img/img-blog/pies-de-gato.jpg'
import MagnesioImg from '../../../public/assets/img/img-blog/magnesio.jpg'
import CardClimbingPlace from './CardClimbingPlace';
import Filters from '../mainComponents/components/home/Filters';

const DondeEscalar = () => {

   const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, non hic animi, quas sint officia nihil accusantium voluptatibus quasi dicta repudiandae vero! Adipisci quibusdam obcaecati dolore repellendus ipsa in harum?'
  return (

    <Layout>
    <div className=" bg-white z-10">
      
      <div className='lg:min-h-screen min-h-[calc(100vh-4rem)]   text-base text-textMainText  w-full pt-24 lg:px-20 px-5 flex flex-col  '>
        
        <div className='text-8xl font-riftBold pt-7 pb-5 '>Dónde escalar</div>
        <div className='py-5'>
        <Filters/>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 w-full '>

        
          <CardClimbingPlace date={'Octubre, 2024'} title={'Sharma Climbing BCN'} description={subtitle} srcImg={ArnesImg}/>
          <CardClimbingPlace date={'Septiembre, 2024'} title={'Block Disctrict'} description={subtitle} srcImg={PiesDeGatoImg}/>
          <CardClimbingPlace date={'Septiembre, 2024'} title={'Can Boquet'} description={subtitle} srcImg={MagnesioImg}/>
          <CardClimbingPlace date={'Octubre, 2024'} title={'Mono Block'} description={subtitle} srcImg={ArnesImg}/>
          <CardClimbingPlace date={'Septiembre, 2024'} title={'La Foixarda'} description={subtitle} srcImg={PiesDeGatoImg}/>
          <CardClimbingPlace date={'Septiembre, 2024'} title={'Sharma Climbing Gavá'} description={subtitle} srcImg={MagnesioImg}/>
          <CardClimbingPlace date={'Septiembre, 2024'} title={'Indorwall El Clot'} description={subtitle} srcImg={MagnesioImg}/>
          <CardClimbingPlace date={'Septiembre, 2024'} title={'La Guinaueta'} description={subtitle} srcImg={MagnesioImg}/>
        
        </div>  
        </div>
      
      
      
    </div>
    </Layout>
  );

}

export default DondeEscalar