
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TrendingUp, ListCheck } from "lucide-react";

const ProgressBar = ({ value, color }: { value: number, color: string }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 mt-2">
      <div 
        className={`h-2.5 rounded-full ${color}`} 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

const PerformanceIndicators = () => {
  const indicators = [
    {
      goal: "دعوة غير المسلمين",
      kpis: [
        { name: "عدد الزيارات للمنصة", value: 75, target: "200,000 زيارة سنوياً" },
        { name: "نسبة التفاعل مع المحتوى", value: 65, target: "50%" },
        { name: "عدد المحادثات مع غير المسلمين", value: 60, target: "15,000 محادثة سنوياً" }
      ]
    },
    {
      goal: "رعاية المسلمين الجدد",
      kpis: [
        { name: "عدد المسلمين الجدد المسجلين", value: 70, target: "5,000 مسلم جديد" },
        { name: "معدل الاستمرار في البرامج التعليمية", value: 60, target: "75%" },
        { name: "نسبة الرضا عن برامج الرعاية", value: 85, target: "90%" }
      ]
    },
    {
      goal: "نشر الوعي",
      kpis: [
        { name: "عدد المنشورات والمقالات", value: 80, target: "500 منشور سنوياً" },
        { name: "مدى الوصول عبر منصات التواصل", value: 65, target: "5 مليون مشاهدة" },
        { name: "معدل مشاركة المحتوى", value: 50, target: "15%" }
      ]
    },
    {
      goal: "التدريب والتأهيل",
      kpis: [
        { name: "عدد المتدربين من الدعاة", value: 60, target: "200 داعية سنوياً" },
        { name: "عدد الدورات التدريبية", value: 75, target: "24 دورة سنوياً" },
        { name: "نسبة التحسن في مهارات الدعاة", value: 70, target: "80%" }
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-amiri text-center mb-4 text-teal">مؤشرات الأداء</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 font-scheherazade">
          نعمل على تحقيق أهدافنا من خلال متابعة مؤشرات أداء دقيقة لضمان التأثير المطلوب
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-100 shadow-md overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {indicators.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-amiri text-lg">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-teal ml-2" strokeWidth={1.5} />
                    <span>{item.goal}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-4 border-t border-gray-100">
                  {item.kpis.map((kpi, idx) => (
                    <div key={idx} className="mb-6">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <ListCheck className="w-4 h-4 text-gold ml-2" strokeWidth={1.5} />
                          <span className="font-amiri text-gray-700">{kpi.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 font-scheherazade">الهدف: {kpi.target}</span>
                      </div>
                      <ProgressBar 
                        value={kpi.value} 
                        color={kpi.value >= 75 ? "bg-gold" : kpi.value >= 50 ? "bg-teal" : "bg-gray-400"} 
                      />
                      <div className="flex justify-between text-sm">
                        <span className="font-bold">{kpi.value}%</span>
                        <span className="text-gray-500">100%</span>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PerformanceIndicators;
