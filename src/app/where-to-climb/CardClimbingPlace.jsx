import React from 'react'
import Image from 'next/image';


const CardClimbingPlace = ({

    date,
    title,
    description,
    srcImg,
}) => {

  const desc = `${description.substring(0,65)}...`

  return (
    <div className='flex flex-col z-10 gap-0 hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in-out  '>
        
        {/* Imagen */}
        <div className="relative z-0 h-40 w-full">
        <Image
          src={srcImg}
          alt=""
          fill
          className="object-cover z-0" // Ajusta la imagen al contenedor
        
        />
      </div>
            
        {/* Descripción */}
        <div className='pb-5 flex flex-col   '>
            {/* <div className='pt-5 text-gray-400'>{date}</div> */}
            <div className=' font-semibold text-sm py-2 '>{title} </div>
            <div className='font-soleilLight text-sm text-gray-500 leading-5'>{desc}</div>

        </div>
        
    </div>
  )
}

export default CardClimbingPlace