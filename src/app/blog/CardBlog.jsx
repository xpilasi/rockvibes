import React from 'react'
import Image from 'next/image';

const CardBlog = ({

    date,
    title,
    subtitle,
    srcImg,
}) => {
  return (
    <div className='flex flex-col  gap-0 hover:scale-105 hover:cursor-pointer transition-all duration-500ease-in-out '>
        
        {/* Imagen */}
        <div className="relative h-72 w-full"> {/* Contenedor de la imagen */}
        <Image
          src={srcImg}
          alt=""
          fill
          className="object-cover" // Ajusta la imagen al contenedor
        //   sizes="(max-width: 768px) 100vw, 600px" // Ajuste para pantallas pequeñas
        />
      </div>
            
        {/* Descripción */}
        <div className='pb-5 flex flex-col  '>
            <div className='pt-5 text-gray-400'>{date}</div>
            <div className='py-1 font-semibold text-2xl h-12 '>{title} </div>
            <div className='font-soleilLight text-gray-500'>{subtitle}</div>

        </div>
        
    </div>
  )
}

export default CardBlog