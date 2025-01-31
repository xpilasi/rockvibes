import React from 'react'
import Layout from '../layout.jsx'
import Image from 'next/image.js'

const page = () => {
  return (
    <Layout>
    
      
      <section className='lg:min-h-screen   min-h-[calc(100vh-4rem)] bg-cover text-base text-textMainText bg-woman-climber-rocks-bn w-full flex flex-col justify-center items-center align-middle'>
       
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full lg:px-20 px-5'>

          <article className='text-white font-riftBold'>
            <div className='text-xl flex flex-col gap-5'>

              <h2 className='text-4xl mb-5'>Boulder</h2>
              <div className='flex flex-row gap-5 '>

                <div className='w-full  bg-white bg-opacity-20 px-4 py-5 flex flex-row justify-between'>

                  <select name="" id="" className='bg-white bg-opacity-0 w-full' >
                    <option value="">Francés</option>
                  </select>
                  </div>
                <div className='w-full  bg-white bg-opacity-20 px-4 py-5 flex flex-row justify-between'>

                  <select name="" id="" className='bg-white bg-opacity-0 w-full' >
                    <option value="">Elige el grado</option>
                  </select>
                  </div>
               
              </div>
              <div className='flex flex-row gap-5'>

                <div className='w-full  bg-white bg-opacity-20 px-4 py-5 flex flex-row justify-between'>

                  <select name="" id="" className='bg-white bg-opacity-0 w-full' >
                    <option value="">USA</option>
                  </select>
                  </div>
                <div className='w-full  bg-white bg-opacity-20 px-4 py-5 flex flex-row justify-between'>

                  <select name="" id="" className='bg-white bg-opacity-0 w-full' >
                    <option value="">Grado equivalente</option>
                  </select>
                  </div>
                
              </div>
            </div>
            

          </article>
          <article className='text-white font-riftBold'>
            <div className='text-xl flex flex-col gap-5'>

              <h2 className='text-4xl mb-5'>Escalada deportiva</h2>
              <div className='flex flex-row gap-5 '>

                <div className='w-full  bg-white bg-opacity-20 px-4 py-5 flex flex-row justify-between'>

                  <select name="" id="" className='bg-white bg-opacity-0 w-full' >
                    <option value="">Francés</option>
                  </select>
                  </div>
                <div className='w-full  bg-white bg-opacity-20 px-4 py-5 flex flex-row justify-between'>

                  <select name="" id="" className='bg-white bg-opacity-0 w-full' >
                    <option value="">Elige el grado</option>
                  </select>
                  </div>
                
              </div>
              <div className='flex flex-row gap-5'>

                <div className='w-full  bg-white bg-opacity-20 px-4 py-5 flex flex-row justify-between'>

                  <select name="" id="" className='bg-white bg-opacity-0 w-full' >
                    <option value="">USA</option>
                  </select>
                  </div>
                <div className='w-full  bg-white bg-opacity-20 px-4 py-5 flex flex-row justify-between'>

                  <select name="" id="" className='bg-white bg-opacity-0 w-full' >
                    <option value="">Grado equivalente</option>
                  </select>
                  </div>
                
              </div>
            </div>
            

          </article>
         
       </div>
      
      </section>  
      
    
    </Layout>
  )
}

export default page