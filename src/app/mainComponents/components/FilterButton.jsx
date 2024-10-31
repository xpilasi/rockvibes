import React from 'react'

const FilterButton = ({buttonText}) => {
  return (
    <button 
      
      className='py-3 lg:w-28 md:w-28 xl:w-40 bg-gradient-to-r from-CustomPink to-CustomDarkPink text-white font-riftDemi px-5 flex flex-row justify-center w-full'>

        <div className=''>{buttonText}</div>
        

        
    </button>
  )
}

export default FilterButton