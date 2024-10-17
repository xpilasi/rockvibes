import React from 'react'

const Filter = ({filterText, optionsArray}) => {
  return (
  
        <select name="" id="" className='py-3 xl:w-52 lg:w-44 lg:gap-0 md:w-36 w-full border-mainGray border bg-white text-textMainText font-riftDemi px-5 flex flex-row justify-between'>
          {optionsArray.map(option=>{
            return(
                    <option value="uno">{option}</option>
            )
            
          })}
        </select>
  )
}

export default Filter