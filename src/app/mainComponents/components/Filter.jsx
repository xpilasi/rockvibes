import React from 'react'

const Filter = ({filterText, optionsArray}) => {
  return (

        <div className=' border-gray-400 border pr-3 flex flex-row align-middle text-sm'>

        <select name="" id="" className='font-soleilRegular py-3 xl:w-52 lg:w-44 lg:gap-0 w-full bg-white text-textMainText px-5 flex flex-row justify-between'>
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