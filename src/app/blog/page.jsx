import React from 'react';
import Layout from '../Layout.jsx';
import CardBlog from './CardBlog.jsx';

const page = () => {
  return (
    <Layout>
    <div className="">
      
      <div className='lg:min-h-screen   min-h-[calc(100vh-4rem)]   text-base text-textMainText  w-full pt-24 lg:px-20 px-5 flex flex-col  '>
        
        <div className='text-8xl font-riftBold pb-5 '>BLOG</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full bg-green-400'>

        
          <CardBlog/>
          <CardBlog/>
          <CardBlog/>
          <CardBlog/>
        </div>  
        </div>
      
      
      
    </div>
    </Layout>
  );
  
}

export default page