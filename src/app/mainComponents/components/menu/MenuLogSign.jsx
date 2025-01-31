
import React from 'react';
import Link from 'next/link';

const MenuLogSign = () => {
  return (
    <div className='flex flex-row justify-center gap-2 font-rift-demi'>
      <div className=' hover:text-textBigTitlePink transition-all duration-200 ease-in-out '>
        <Link href='/login'>Login</Link>
        </div>

      <div className='flex flex-row justify-center '>/</div>
        
        

      <div className='flex flex-row justify-center hover:text-textBigTitlePink transition-all duration-200 ease-in-out '>
        <Link href='/signup'>SignUp</Link>
      
      </div>
    </div>
  )
}

export default MenuLogSign