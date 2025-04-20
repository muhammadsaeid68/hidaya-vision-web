
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Circle, CircleCheck } from "lucide-react";

const FeaturesAccordion = () => {
  const features = [
    {
      title: "منصة متخصصة",
      description: "منصة متخصصة في دعوة غير المسلمين للإسلام ومتابعة المسلمين الجدد"
    },
    {
      title: "لغات متعددة",
      description: "دعم للغات متعددة للوصول إلى مختلف الثقافات والشعوب"
    },
    {
      title: "تواصل مباشر",
      description: "إمكانية التواصل المباشر مع الدعاة المتخصصين على مدار الساعة"
    },
    {
      title: "محتوى تعليمي",
      description: "توفير محتوى تعليمي مناسب لغير المسلمين والمسلمين الجدد"
    },
    {
      title: "تقنيات حديثة",
      description: "استخدام أحدث التقنيات للوصول والتواصل مع المستفيدين"
    },
    {
      title: "بيئة آمنة",
      description: "توفير بيئة آمنة للحوار والنقاش حول الإسلام"
    },
    {
      title: "دعم مستمر",
      description: "متابعة ودعم مستمر للمسلمين الجدد في رحلتهم الإيمانية"
    },
    {
      title: "شراكات عالمية",
      description: "التعاون مع مؤسسات عالمية لتوسيع نطاق الدعوة"
    },
    {
      title: "منهجية علمية",
      description: "اعتماد منهجية علمية وإسلامية صحيحة في الدعوة والتعليم"
    },
    {
      title: "التطوير المستمر",
      description: "التطوير المستمر للمحتوى والأساليب الدعوية"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-amiri text-center mb-4 text-teal">السمات العشر</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 font-scheherazade">
          الخصائص التي تميز منصة هداية وتجعلها فريدة في مجال الدعوة
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-100 shadow-md overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {features.map((feature, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-amiri text-lg">
                  <div className="flex items-center">
                    <CircleCheck className="w-5 h-5 text-gold ml-2" />
                    <span>{feature.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-4 font-scheherazade text-gray-600 border-t border-gray-100">
                  {feature.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
