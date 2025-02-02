import React from 'react';

const Title = ({ title, subtitle, text, className = '' }) => {
  return (
    <div className={`flex flex-col items-start justify-start ${className}`}>
      <h2 className="text-5xl font-bold mb-4 font-rift-bold text-main-gray">
        {title}
      </h2>
      <h3 className="text-xl mb-6 font-soleil-regular text-gray-600 tracking-tight">
        {subtitle}
      </h3>
      <p className="max-w-2xl text-center font-soleil-regular">
        {text}
      </p>
    </div>
  );
};

export default Title; 