import React from 'react'
import Image from 'next/image';


const CardClimbingPlace = ({

    date,
    title,
    description,
    srcImg,
}) => {

  const desc = `${description.substring(0,65)}...`
  const widthSvg = '15'

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
            <div className='flex flex-row justify-between text-sm tracking-tight  text-gray-400 font-soleilLight'>

              {/* location row */}
              <div className='flex flex-row justify-start gap-1 py-3  '>
              <svg width={widthSvg} height={widthSvg} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.26313 13.002L11.4968 19.4628C11.9155 20.6739 13.6134 20.7143 14.0893 19.5246L20.4975 3.5065C20.9433 2.39218 19.8561 1.27752 18.731 1.69539L2.30186 7.79726C1.10127 8.24317 1.0986 9.94034 2.29777 10.39L9.26313 13.002Z" stroke="#FF469D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                <div className=''>Poblenou</div>
              </div>

              {/* comments row */}
              <div className='flex flex-row justify-start gap-1 py-3  '>
                <svg width={widthSvg} height={widthSvg}viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.67816 20.6L10.6869 15.5913H18.5999C19.7045 15.5913 20.5999 14.6959 20.5999 13.5913V3.40002C20.5999 2.29545 19.7045 1.40002 18.5999 1.40002H3.3999C2.29533 1.40002 1.3999 2.29545 1.3999 3.40002V13.5913C1.3999 14.6959 2.29533 15.5913 3.3999 15.5913H5.67816V20.6Z" stroke="#FF469D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


                <div className=''>103</div>
              </div>

              {/* likes row */}
              <div className='flex flex-row justify-start gap-1 py-3  '>
                <svg width={widthSvg} height={widthSvg} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8065 3.20659C3.70663 2.30673 4.92731 1.80122 6.2001 1.80122C7.47288 1.80122 8.69356 2.30673 9.5937 3.20659L11.0001 4.61179L12.4065 3.20659C12.8493 2.74815 13.3789 2.38247 13.9646 2.13091C14.5502 1.87934 15.18 1.74693 15.8174 1.74139C16.4547 1.73585 17.0868 1.8573 17.6767 2.09865C18.2666 2.34 18.8025 2.69641 19.2532 3.1471C19.7039 3.59778 20.0603 4.13371 20.3016 4.72361C20.543 5.31352 20.6644 5.94558 20.6589 6.58292C20.6534 7.22026 20.5209 7.85012 20.2694 8.43574C20.0178 9.02136 19.6521 9.55101 19.1937 9.99379L11.0001 18.1886L2.8065 9.99379C1.90664 9.09366 1.40112 7.87298 1.40112 6.60019C1.40112 5.32741 1.90664 4.10673 2.8065 3.20659V3.20659Z" stroke="#FF469D" stroke-width="2" stroke-linejoin="round"/>
                </svg>

                <div className=''>34</div>
              </div>
            </div>

        </div>
        
    </div>
  )
}

export default CardClimbingPlace