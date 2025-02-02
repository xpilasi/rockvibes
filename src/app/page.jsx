'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, HashNavigation } from 'swiper/modules';
import ParallaxSlide from '@/components/ParallaxSlide';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const slides = [
    {
      title: "Urban Adventure",
      subtitle: "Explore the City",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imageSrc: "/assets/img/fondos/ropes-pink.jpg",
      hash: "slide2"
    },
    {
      title: "Nature's Beauty",
      subtitle: "Discover the Wilderness",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageSrc: "/assets/img/fondos/fondo-rocas-bn.jpg",
      hash: "slide1"
    },
    
    {
      title: "Mountain Escape",
      subtitle: "Reach New Heights",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      imageSrc: "/assets/img/fondos/rocks-sunset.jpg",
      hash: "slide3"
    }
  ];

  return (
    <div className="h-screen">
      <Swiper
        modules={[Navigation, Pagination, HashNavigation]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        hashNavigation={{
          watchState: true,
        }}
        speed={1000}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} data-hash={slide.hash}>
            <ParallaxSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 