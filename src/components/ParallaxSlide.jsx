import React from 'react';

const ParallaxSlide = ({ title, subtitle, text, imageSrc }) => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
        <h2 className="text-5xl font-bold mb-4 font-rift-bold">
          {title}
        </h2>
        <h3 className="text-2xl mb-6 font-rift-medium">
          {subtitle}
        </h3>
        <p className="max-w-2xl text-center font-soleil-regular">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ParallaxSlide; 