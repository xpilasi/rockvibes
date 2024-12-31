"use client";
import React from 'react'
import Layout from '../Layout.jsx'
import { useState } from 'react';

const Page = () => {

  const preset_name = "rockvibes_foto";                         //16 Pegamos el "name" rescatado en el punto 24
    const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME                          //16.2 Pegamos el cloud_name rescatado en punto 20

    const [ imageUrl, setImage ] = useState('');       //12 Creamos estado local que guarde la url de la imagen subida
    const [ loading, setLoading ] = useState(false) //7 Creamos un estado local con valor incial boolean "false" para saber si la imagen esta cargando.
  

    const uploadImage = async (e)=>{            //2 Preparamos para recibir el evento al ejecutarse la función async
        const files = e.target.files            //3 recuperamos el array de e.target.files
        const data = new FormData()             //4 Creamos/Instanciamos un FormData objeto con nombre data
        data.append('file', files[0])           //5 Utilizando metodo append() agregamos al data el archivo desde files[0]
        data.append('upload_preset',preset_name)  //6 Como prop "upload preset" le pasamos la variable de la linea 6 (punto 16.2).

        setLoading(true)                        //8 Ponemos en true el estado local que indica que la imagen esta cargándose.

        try {
            //10 enviamos el pedido de upload con el data en body 
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                method: 'POST',
                body: data
            });

            const file = await response.json();     //11 Traducimos la respuesta de JSON
            setImage(file.secure_url);              //13 Recuperamos la url de la imagen en estado local
            setLoading(false);                      //14 Dejamos el loading en false para que intente mostrar la magen
            //await actions.sendPhoto(file.secure_url) //15 Enviamos la url a un action para hacer algo en back. Lo dejamos bloqueado para que no de error de importacion de Context actions o de la función.
            console.log(imageUrl);
            
        } catch (error) {
            console.error('Error uploading image:', error);
            setLoading(false);
        }

    }

    const handleData = ()=>{

      //Aquí mandamos la data con la url de la imagen 
    }

  return (
    <Layout>
    <div className=" bg-white z-10">
      
      <div className='lg:min-h-screen min-h-[calc(100vh-4rem)]   text-base text-textMainText  w-full pt-24 lg:px-20 px-5 flex flex-col  '>
        
        <div className='lg:text-6xl text-3xl  md:text-5xl font-riftBold '>ADD PLACE</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full py-5 '>

       
          
        
        </div> 

        {loading ? (
            <h3>Loading...</h3>
        ) : (
          <div className='w-80'>
             <img src={imageUrl} alt="imagen subida" className=''/>
          </div>
       
        )} 
        <div className='flex flex-row gap-2'>
        <div className='flex flex-col gap-2'>

          <input   type="text" placeholder='Nombre lugar' className=' border h-10 py-3 px-3' />
          <div className="bg-red-300">
            <label for="file-upload" className="cursor-pointer w-full  bg-blue-500 text-white px-4 py-2  hover:bg-blue-600">
              Upload image
            </label>
            <input 
            id="file-upload" 
            type="file" 
            class="sr-only"
            name="file"
            placeholder='upload image'
            onChange={(e)=>uploadImage(e)} 
            />
        </div>
          {/* <input
            className='w-full bg-red-200 py-3 px-3'
            name="file"
            type="file" 
            placeholder='upload image'
            onChange={(e)=>uploadImage(e)} /> */}
            <button 
            className='h-full bg-pink-300 hover:bg-CustomPink text-white'
            name='upload-image'
            onClick={(e)=>uploadImage(e)} 
            >Guardar</button>
        </div>
          <textarea placeholder='Describe el lugar' className='border h-40 w-full py-3 px-3'/>
        </div>
        </div>
        
      
      
      
    </div>
    </Layout>
  )
}

export default Page