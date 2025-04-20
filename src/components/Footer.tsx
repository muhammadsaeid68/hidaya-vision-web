
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto">
              <span className="text-teal text-2xl font-bold font-amiri">هـ</span>
            </div>
          </div>
          <h3 className="text-xl font-bold font-amiri mb-2">منصة هداية</h3>
          <p className="text-sm text-white/80 mb-6 text-center font-scheherazade">
            منصة متخصصة في دعوة غير المسلمين للإسلام ورعاية المسلمين الجدد
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse mb-6">
            {["تواصل معنا", "حول المنصة", "الخدمات", "الدعم", "الشراكات"].map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="text-white/80 hover:text-gold transition-colors duration-300 font-amiri"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="w-full h-px bg-white/20 my-6"></div>
          <p className="text-sm text-white/60 font-scheherazade text-center">
            جميع الحقوق محفوظة © منصة هداية {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
