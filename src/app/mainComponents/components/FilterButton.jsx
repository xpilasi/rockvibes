import React from 'react'

const FilterButton = ({buttonText}) => {
  return (
    <button 
      
      className='py-3 px-7 lg:w-48  md:w-full xl:w-40 bg-gradient-to-r from-CustomPink to-CustomDarkPink text-white  text-sm font-soleilBoldpx-5 flex flex-row justify-center w-full'>

        <div className=''>{buttonText}</div>
        

        
    </button>
  )
}

export default FilterButton