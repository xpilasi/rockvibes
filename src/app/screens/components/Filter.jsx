import React from 'react'

const Filter = ({filterText}) => {
  return (
    <div className='py-3 w-52 border-mainGray border bg-white text-textMainText font-riftDemi px-5 flex flex-row justify-between'>

        <div className=''>{filterText}</div>
        <div className='flex items-center  justify-center h-full'>
            
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L6.00081 5.58L11 1" stroke="#4C4C4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>

        
    </div>
  )
}

export default Filter