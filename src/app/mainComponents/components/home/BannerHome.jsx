import React from 'react';
import Image from 'next/image';
import womanClimber from '../../../../../public/assets/img/climbers/fondo-rv-1.png';
// import rocksSunset from '../../../../../public/assets/img/fondos/rocks-sunset-jpg';
import RegisterButton from '../../components/FilterButton'
import FilterButton from '../../components/FilterButton';

const BannerHome = () => {
  return (

    <div className='lg:pt-20  pt-16 mt-16 lg:mt-0 text-base text-textMainText  w-full flex flex-col lg:h-screen   h-[calc(100vh-4rem)]'>

      {/* top */}
      
      <div 
        className=' lg:grid lg:grid-cols-2 h-2/3 '>
          {/* TEXT BANNER */}
            <div className="bg-white pt-5 lg:px-20 px-5" >
              
              <h1 className='text-3xl font-riftBold text-textBigTitleGraphite '>Welcome to the RockVibes</h1>
              <h2 className='text-5xl font-riftBold text-textBigTitlePink '>NEW FEATURES FOR CLIMBERS</h2>
              <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam minus recusandae officiis, itaque reprehenderit sapiente laborum, sit doloremque consequuntur, iusto quo. Iste perspiciatis unde necessitatibus dicta doloremque quod quam?
              </p>
              
            </div>
            {/* IMAGE BANNER */}
            <div className='bg-whitw bg-cover'>
              
              {/* <Image src={womanClimber} alt=''></Image> */}
              </div>
            
            
                  
      </div>

      {/* bottom */}
      <div className='h-1/3 bg-pink-ropes bg-cover flex lg:flex-row flex-col  items-center justify-center w-full'>
        <h2 className='text-white font-riftDemi text-5xl lg:pr-10 lg:pb-2 pb-3 '>Newsletter</h2>
        {/* <h3>Suscríbete para recibir noticias de escalada</h3> */}
        <form action="
        
        " className='flex flex-col  lg:flex-row justify-center gap-2 lg:px-0 px-5 w-full md:w-1/2 '>
          <input type="text"  className='lg:w-56 w-full h-10 px-4 'placeholder='Nombre'/>
          <input type="email"  className='lg:w-56 h-10 w-ful px-4 'placeholder='tu@email.com'/>
          {/* <input type="text"  className='w-56 py-2 px-4 'placeholder='tu@email.com'/> */}
          <FilterButton buttonText={'Registrarse'}/>

        </form>
      </div>

    </div>
  )
}

export default BannerHome