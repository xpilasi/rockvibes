import React from 'react'
import Image from 'next/image';

const CardBlog = ({

    date,
    title,
    subtitle,
    srcImg,
}) => {
  return (
    <div className='flex flex-col z-10 gap-0 hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in-out  '>
        
        {/* Imagen */}
        <div className="relative z-0 h-72 w-full"> {/* Contenedor de la imagen */}
        <Image
          src={srcImg}
          alt=""
          fill
          className="object-cover z-0" // Ajusta la imagen al contenedor
        //   sizes="(max-width: 768px) 100vw, 600px" // Ajuste para pantallas pequeñas
        />
      </div>
            
        {/* Descripción */}
        <div className='pb-5 flex flex-col bg-white  '>
            <div className='pt-5 text-gray-400'>{date}</div>
            <div className=' font-semibold text-2xl h-16 '>{title} </div>
            <div className='font-soleilLight text-gray-500'>{subtitle}</div>

        </div>
        
    </div>
  )
}

export default CardBlog