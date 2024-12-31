import React from 'react'

const FilterButton = ({buttonText, showFilter}) => {
  return (
    <button 
      
      className={showFilter ? `py-3 px-7   md:w-full xl:w-full bg-gradient-to-r from-CustomPink to-CustomDarkPink text-white  text-sm font-soleilBoldpx-5 flex flex-row justify-center w-full` : `hidden`}>

        <div className=''>{buttonText}</div>
        

        
    </button>
  )
}

export default FilterButton