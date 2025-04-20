
import React from 'react';
import { MessageSquare, BookOpen, Flag, CircleUser, Building, Star } from 'lucide-react';

interface DepartmentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DepartmentCard = ({ icon, title, description }: DepartmentCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-md p-6 hover:shadow-lg transition-shadow duration-300 group hover:border-teal/30">
      <div className="bg-teal/10 group-hover:bg-teal/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto transition-colors duration-300">
        <div className="text-teal w-8 h-8">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold font-amiri text-center mb-2 text-teal">{title}</h3>
      <p className="text-gray-600 text-center font-scheherazade">{description}</p>
    </div>
  );
};

const Departments = () => {
  const departments = [
    {
      icon: <MessageSquare strokeWidth={1.5} />,
      title: "الدعاة",
      description: "فريق من الدعاة المؤهلين للتواصل مع غير المسلمين بلغات مختلفة"
    },
    {
      icon: <BookOpen strokeWidth={1.5} />,
      title: "التعليم",
      description: "دورات متخصصة لتعليم أساسيات الإسلام للمسلمين الجدد"
    },
    {
      icon: <Flag strokeWidth={1.5} />,
      title: "النشر",
      description: "إنتاج محتوى دعوي بصيغ مختلفة ولغات متعددة"
    },
    {
      icon: <Star strokeWidth={1.5} />,
      title: "التصميم",
      description: "فريق متخصص في تصميم المواد البصرية الدعوية"
    },
    {
      icon: <CircleUser strokeWidth={1.5} />,
      title: "التدريب",
      description: "تأهيل وتدريب الدعاة والمتطوعين على منهجية الدعوة"
    },
    {
      icon: <Building strokeWidth={1.5} />,
      title: "التقني",
      description: "تطوير وتحديث منصات الدعوة الإلكترونية"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-amiri text-center mb-4 text-teal">أقسام المنصة</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 font-scheherazade">
          تتكون منصة هداية من فرق متخصصة تعمل معاً لتحقيق رسالة الدعوة إلى الإسلام
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <DepartmentCard 
              key={index}
              icon={dept.icon}
              title={dept.title}
              description={dept.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
