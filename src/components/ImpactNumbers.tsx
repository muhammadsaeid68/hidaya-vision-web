
import React, { useEffect, useState } from 'react';
import { Users, Book, ActivitySquare } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  number: number;
  text: string;
}

const StatCard = ({ icon, number, text }: StatProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;
    const increment = Math.ceil(number / steps);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current > number) {
        current = number;
        clearInterval(timer);
      }
      setCount(current);
    }, interval);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 hover:border-gold/50">
      <div className="bg-teal/10 p-4 rounded-full mb-4">
        <div className="text-teal w-10 h-10">
          {icon}
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-lg font-amiri text-gray-700 text-center">
        {text}
      </div>
    </div>
  );
};

const ImpactNumbers = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-amiri text-center mb-12 text-teal">
          أثر المنصة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard 
            icon={<Users strokeWidth={1.5} />} 
            number={150000} 
            text="تعرفوا على الإسلام"
          />
          <StatCard 
            icon={<Book strokeWidth={1.5} />} 
            number={5000} 
            text="اعتنقوا الإسلام"
          />
          <StatCard 
            icon={<ActivitySquare strokeWidth={1.5} />} 
            number={1500} 
            text="مسلم جديد تتم رعايتهم"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
