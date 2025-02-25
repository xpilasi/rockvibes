import React from 'react';
import CardBlog from './CardBlog.jsx';
import ArnesImg from '../../../public/assets/img/img-blog/arnes.jpg'
import PiesDeGatoImg from '../../../public/assets/img/img-blog/pies-de-gato.jpg'
import MagnesioImg from '../../../public/assets/img/img-blog/magnesio.jpg'
import Title from '@/components/Title'

const BlogPage = () => {
  const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, non hic animi, quas sint officia nihil accusantium voluptatibus quasi dicta repudiandae vero! Adipisci quibusdam obcaecati dolore repellendus ipsa in harum?'
  
  return (
    <div className="bg-white z-10">
      <div className='lg:min-h-screen min-h-[calc(100vh-4rem)] text-base text-textMainText w-full pt-24 lg:px-20 px-5 flex flex-col'>
        <Title title="BLOG" subtitle="Blog" text="Blog" />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full py-5'>
          <CardBlog date={'Octubre, 2024'} title={'Cómo elegir tu arnés'} subtitle={subtitle} srcImg={ArnesImg}/>
          <CardBlog date={'Septiembre, 2024'} title={'Mitos sobre los pies de gato'} subtitle={subtitle} srcImg={PiesDeGatoImg}/>
          <CardBlog date={'Septiembre, 2024'} title={'¿Magnesio caro vs barato?'} subtitle={subtitle} srcImg={MagnesioImg}/>
          <CardBlog date={'Octubre, 2024'} title={'Cómo elegir tu arnés'} subtitle={subtitle} srcImg={ArnesImg}/>
          <CardBlog date={'Septiembre, 2024'} title={'Mitos sobre los pies de gato'} subtitle={subtitle} srcImg={PiesDeGatoImg}/>
          <CardBlog date={'Septiembre, 2024'} title={'¿Magnesio caro vs barato?'} subtitle={subtitle} srcImg={MagnesioImg}/>
        </div>  
      </div>
    </div>
  );
}

export default BlogPage;