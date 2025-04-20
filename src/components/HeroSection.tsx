
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-teal/10 to-transparent py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBkPSJNMjUgMGMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHM0LjQ3NyAxMCAxMCAxMCAxMC00LjQ3NyAxMC0xMFMzMC41MjMgMCAyNSAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI5MDJkIiBzdHJva2Utd2lkdGg9IjEiIC8+PC9zdmc+')" 
        }}></div>
      </div>
      <div className="container mx-auto relative z-10 text-center">
        <div className="bg-white bg-opacity-90 p-6 rounded-xl inline-block mb-6">
          <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-3xl font-bold font-amiri">هـ</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-amiri text-teal mb-6 leading-tight">
          منصة هداية لدعوة غير المسلمين للإسلام
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-scheherazade">
          منصة متخصصة في دعوة غير المسلمين للإسلام ورعاية المسلمين الجدد بأحدث الأساليب التقنية
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
