'use client'
import React from 'react'
import Layout from '../Layout.jsx'
import ArnesImg from '../../../public/assets/img/img-blog/arnes.jpg'
import PiesDeGatoImg from '../../../public/assets/img/img-blog/pies-de-gato.jpg'
import MagnesioImg from '../../../public/assets/img/img-blog/magnesio.jpg'
import CardClimbingPlace from './CardClimbingPlace';
import Filters from '../mainComponents/components/home/Filters';
import Sharma from '../../../public/assets/img/places/StockCake-Indoor Climbing Gym_1730730764.jpg'
import ClimbingCenter from '../../../public/assets/img/places/StockCake-Vibrant Climbing Gym_1730731561.jpg'
import BlockDistrict from '../../../public/assets/img/places/block-district.jpg'
import Rock1 from '../../../public/assets/img/places/rock-q.jpg'
import Monoblock from '../../../public/assets/img/places/monoblock.jpg'
import Foixarda from '../../../public/assets/img/places/foixarda.jpg'
import SharmaGava from '../../../public/assets/img/places/sharma-gava.jpg'
import IndorwallClot from '../../../public/assets/img/places/indorwall-clot.jpg'
import Center from '../../../public/assets/img/places/center.jpg'

const DondeEscalar = () => {


   const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, non hic animi, quas sint officia nihil accusantium voluptatibus quasi dicta repudiandae vero! Adipisci quibusdam obcaecati dolore repellendus ipsa in harum?'
  
   const climbingPlaces = [
    {
      creationDate : 'Octubre, 2024',
      title: 'Sharma Climbing BCN',
      description: subtitle,
      scrImg : Sharma
    },
    {
      creationDate : 'Octubre, 2024',
      title: 'Mono Block',
      description: subtitle,
      scrImg : Monoblock
    },
    {
      creationDate : 'Septiembre, 2024',
      title: 'Block District',
      description: subtitle,
      scrImg : BlockDistrict
    },
    {
      creationDate : 'Septiembre, 2024',
      title: 'Can Boquet',
      description: subtitle,
      scrImg : Rock1
    },
    {
      creationDate : 'Septiembre, 2024',
      title: 'La Foixarda',
      description: subtitle,
      scrImg : Foixarda
    },
    {
      creationDate : 'Septiembre, 2024',
      title: 'Sharma Climbing Gavá',
      description: subtitle,
      scrImg : SharmaGava
    },
    {
      creationDate : 'Septiembre, 2024',
      title: 'Indorwall El Clot',
      description: subtitle,
      scrImg : IndorwallClot
    },
    {
      creationDate : 'Septiembre, 2024',
      title: 'La Guinaueta',
      description: subtitle,
      scrImg : MagnesioImg
    },
    {
      creationDate : 'Septiembre, 2024',
      title: 'World Climbing center',
      description: subtitle,
      scrImg : ClimbingCenter
    },
    {
      creationDate : 'Septiembre, 2024',
      title: 'New Block',
      description: subtitle,
      scrImg : Center
    },
  ]
   return (

    <Layout>
    <div className=" bg-white z-10">
      
      <div className='lg:min-h-screen min-h-[calc(100vh-4rem)]   text-base text-textMainText  w-full pt-24 lg:px-20 px-5 flex flex-col  '>
        
        <div className='lg:text-6xl text-3xl  md:text-5xl font-riftBold  '>Dónde escalar</div>
        <div className='lg:py-5'>
        <Filters/>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 w-full '>

        {
          climbingPlaces.map(item=>(
            // console.log(item.title)
            
            <CardClimbingPlace date={item.creationDate} title={item.title} description={item.description} srcImg={item.scrImg} key={item.title}/>
          ))
        }
         
        
        </div>  
        </div>
      
      
      
    </div>
    </Layout>
  );

}

export default DondeEscalar