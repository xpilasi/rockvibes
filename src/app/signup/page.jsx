import React from 'react';
import Layout from '../layout.jsx';
import Image from 'next/image';

const SignUpPage = () => {
  return (
    <Layout>

        <div className='min-h-screen z-50  min-h-[calc(100vh-4rem)]text-base text-textMainText   w-full flex flex-col justify-center items-center align-middle g:px-20 px-5'>

            <h1 className='font-riftBold text-6xl pb-16'>Regístrate</h1>
            <section id='login'className='flex flex-col gap-5 lg:w-1/3 md:w-1/2 w-full'>

            <button type='submit' className='bg-white border border-gray-400 text-textBigTitleGraphite  py-2 flex flex-row justify-center px-5 gap-5 align-middle items-center'>
            <svg className='bg-white' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                <div>Sign up with Google</div>
            </button>
                <form action="" className='flex flex-col gap-5 w'>
                    <input type="text" placeholder='Email' className='bg-white py-5 px-5 border border-gray-400 '  />
                    <input type="password" placeholder='Contraseña' className='bg-white py-5 px-5 border border-gray-400' />
                    <input type="password" placeholder='Confirmar Contraseña' className='bg-white py-5 px-5 border border-gray-400' />
                    <button type='submit' className='bg-gradient-to-r  from-CustomPink to-CustomDarkPink text-white  py-5'>Registrarme</button>
                </form>

            </section>
        
        </div>
    </Layout>
  )
}

export default SignUpPage