import React from 'react'

const Filter = ({filterText, optionsArray, showFilter}) => {
  console.log(`SHOWFILTER = ${showFilter}`)
    
  return (
    
        <div className={showFilter ? 'border-gray-200 border pr-3 flex flex-row align-middle text-sm transition-all duration-500 ease-in-out' : 'hidden'}>

        <select name="" id="" 
          className={
            showFilter
            ?`font-soleilRegular py-3 xl:w-52 lg:w-44 lg:gap-0 w-full bg-white text-textMainText px-5 flex flex-row justify-between`
            : `font-soleilRegular hidden py-3 w-0 bg-white text-textMainText px-5  flex-row justify-between`   }>
          {optionsArray.map(option=>{
            return(
                    <option value="uno" key=''>{option}</option>
            )
            
          })}
        </select>
        </div>
  )
}

export default Filter