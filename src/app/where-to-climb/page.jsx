'use client'
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
import { useRef, useState, useEffect } from 'react'

const DondeEscalar = () => {

    const filtersRef = useRef(null);
    const [showFilters,setShowFilters] = useState(false)

      useEffect(() => {
        if (filtersRef.current) { // Verifica si filtersRef.current no es null
            if (showFilters) {
                filtersRef.current.classList.remove('lg:-ml-52');
                filtersRef.current.classList.add('lg:ml-0')
            } else {
              filtersRef.current.classList.add('lg:-ml-52')
                filtersRef.current.classList.remove('lg:ml-0')
            }
        }
    }, [showFilters]);

    const handleFilter = () =>{
      setShowFilters(!showFilters)
      console.log(showFilters);
      
    }


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
      
      <div className='lg:h-screen h-[calc(100vh-4rem)]  text-base text-textMainText  w-full pt-24 lg:pr-20 px-5 lg:pl-0 flex flex-col  '>
      

      <div className='lg:text-6xl text-3xl  md:text-5xl font-riftBold lg:pb-5 lg:pl-20  '>Dónde escalar</div>
     

        {/* filters + main */}
        <div className='flex lg:flex-row flex-col'>

          {/* filters */}
          <div className=' transition-all duration-500  lg:h-[calc(100vh-12rem)]  ease-in-out lg:-ml-52   flex flex-col  z-10   lg:px-5 lg:border-r   lg:mr-7  ' ref={filtersRef}>
            <button 
            onClick={()=>handleFilter()}
            className='py-2 px-0 text-pink-200 flex justify-end   '
            ><svg 
            className='transition-all duration-500 ease-in-out '
            width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z" fill="#E5427B"/></svg></button>
            
            <Filters showFilters={showFilters } />
          </div> 

          {/* Main */}
          
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
      
      
      
    </div>
    </Layout>
  );

}

export default DondeEscalar