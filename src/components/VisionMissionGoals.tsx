
import React from 'react';
import { Flag, Star, Building } from 'lucide-react';

const Card = ({ icon, title, content, color }: { icon: React.ReactNode; title: string; content: string; color: string }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1`}>
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-lg ${color.replace('bg-', 'bg-').replace('gold', 'gold/20').replace('teal', 'teal/20')}`}>
            <div className={`w-6 h-6 ${color.replace('bg-', 'text-')}`}>
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold font-amiri mr-3 text-gray-800">{title}</h3>
        </div>
        <p className="font-scheherazade text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const VisionMissionGoals = () => {
  const goals = [
    {
      title: "دعوة غير المسلمين",
      content: "التعريف بالإسلام لغير المسلمين بطرق عصرية تناسب ثقافاتهم"
    },
    {
      title: "رعاية المسلمين الجدد",
      content: "تقديم الدعم والتوجيه للمسلمين الجدد في بداية رحلتهم الإيمانية"
    },
    {
      title: "نشر الوعي",
      content: "نشر الوعي عن الإسلام وتصحيح المفاهيم الخاطئة"
    },
    {
      title: "التدريب والتأهيل",
      content: "تدريب وتأهيل الدعاة والمتطوعين للقيام بدورهم في الدعوة"
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card 
            icon={<Flag strokeWidth={1.5} />}
            title="رؤيتنا"
            content="أن تكون منصة هداية المنصة الرائدة عالمياً في تعريف غير المسلمين بالإسلام ورعاية المسلمين الجدد بأحدث الوسائل التقنية"
            color="bg-gold"
          />
          <Card 
            icon={<Star strokeWidth={1.5} />}
            title="رسالتنا"
            content="تقديم رسالة الإسلام بطريقة معاصرة تناسب مختلف الثقافات، وتوفير بيئة داعمة للمسلمين الجدد تساعدهم على فهم الإسلام والثبات عليه"
            color="bg-teal"
          />
          <Card 
            icon={<Building strokeWidth={1.5} />}
            title="قيمنا"
            content="الإخلاص، الاحترافية، الإبداع، التعاون، الاستدامة، الشمولية، احترام التنوع الثقافي، الوسطية والاعتدال"
            color="bg-gold"
          />
        </div>

        <h2 className="text-3xl font-bold font-amiri text-center mb-8 text-teal">الأهداف الاستراتيجية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-md p-5 flex hover:shadow-lg transition-shadow duration-300">
              <div className="bg-teal/10 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 ml-4">
                <span className="text-teal font-amiri font-bold text-xl">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-amiri mb-2 text-gray-800">{goal.title}</h3>
                <p className="text-gray-600 font-scheherazade">{goal.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionGoals;
