
import React from 'react';

const PropheticQuote = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white border border-gold/30 rounded-xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 h-20 w-20 bg-gold opacity-10 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 h-20 w-20 bg-gold opacity-10 rounded-tr-full"></div>
          
          <div className="text-gold text-6xl font-amiri absolute top-4 right-8 opacity-20">"</div>
          
          <blockquote className="text-2xl md:text-3xl font-amiri text-gray-800 text-center mb-6 leading-relaxed relative z-10">
            لأَنْ يَهْدِيَ اللَّهُ بِكَ رَجُلًا وَاحِدًا خَيْرٌ لَكَ مِنْ حُمْرِ النَّعَمِ
          </blockquote>
          
          <div className="text-gold text-6xl font-amiri absolute bottom-4 left-8 opacity-20">"</div>
          
          <div className="text-center">
            <div className="inline-block h-px w-12 bg-gold/50 mb-4"></div>
            <p className="text-teal font-scheherazade font-bold">الحديث الشريف</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropheticQuote;
