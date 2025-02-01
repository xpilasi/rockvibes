import React from 'react'

const FilterButton = ({buttonText, showFilter}) => {
  return (
    <button 
      className="py-3 px-7 w-full bg-linear-to-r from-CustomPink to-CustomDarkPink text-white text-sm font-soleilBold flex flex-row justify-center"
    >
      <div>{buttonText}</div>
    </button>
  )
}

export default FilterButton