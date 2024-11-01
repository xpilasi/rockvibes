import React from 'react'
import Image from 'next/image';

const CardBlog = () => {
  return (
    <div className='flex flex-col  gap-0'>
        
        {/* Imagen */}
        <div className=' '>
            <Image className='object-cover' src='/assets/img/img-blog/arnes.jpg'  width={300} height={200}  layout='responsive'  alt=''></Image>
        
        </div>
            
        {/* Descripción */}
        <div className='pb-5 flex flex-col bg-red-200 '>
            <div className=''>Octubre, 24</div>
            <div>Título</div>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quis, eos magni maxime similique ea quisquam saepe beatae, optio tempore sapiente maiores culpa. Nesciunt tenetur quibusdam amet sunt, aspernatur sit.</div>

        </div>
        
    </div>
  )
}

export default CardBlog