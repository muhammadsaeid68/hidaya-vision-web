
import React from 'react';
import { Globe } from 'lucide-react';

const GlobalReach = () => {
  // Sample data of regions and countries
  const regions = [
    {
      name: "آسيا",
      countries: ["ماليزيا", "إندونيسيا", "باكستان", "الهند", "الفلبين", "اليابان", "الصين", "تايلاند"]
    },
    {
      name: "أفريقيا",
      countries: ["نيجيريا", "كينيا", "جنوب أفريقيا", "مصر", "المغرب", "تنزانيا", "غانا", "إثيوبيا"]
    },
    {
      name: "أوروبا",
      countries: ["المملكة المتحدة", "فرنسا", "ألمانيا", "إسبانيا", "إيطاليا", "هولندا", "بلجيكا", "السويد"]
    },
    {
      name: "أمريكا الشمالية",
      countries: ["الولايات المتحدة", "كندا", "المكسيك", "جامايكا"]
    },
    {
      name: "أمريكا الجنوبية",
      countries: ["البرازيل", "الأرجنتين", "كولومبيا", "تشيلي"]
    }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden bg-teal/5">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cGF0aCBkPSJNMiAxMmgyMCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMiAyYTkuOTQgOS45NCAwIDAgMSA3LjUgMTcuNzciPjwvcGF0aD48cGF0aCBkPSJNMTIgMmE5Ljk0IDkuOTQgMCAwIDAtNy41IDE3Ljc3Ij48L3BhdGg+PHBhdGggZD0iTTEyIDIyYTkuOTQgOS45NCAwIDAgMCA3LjUtMTcuNzciPjwvcGF0aD48cGF0aCBkPSJNMTIgMjJhOS45NCA5Ljk0IDAgMCAxLTcuNS0xNy43NyI+PC9wYXRoPjwvc3ZnPg==')" 
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold font-amiri text-center mb-4 text-teal">الوصول العالمي</h2>
        <div className="flex justify-center items-center mb-8">
          <Globe className="text-gold w-8 h-8 ml-2" strokeWidth={1.5} />
          <p className="text-xl font-amiri text-gray-700">
            أكثر من 40 دولة اعتنق أشخاص فيها الإسلام عبر منصة هداية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {regions.map((region, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="bg-teal text-white py-3 px-4 font-amiri text-lg font-bold text-center">
                {region.name}
              </div>
              <div className="p-4">
                <ul className="space-y-2 font-scheherazade">
                  {region.countries.map((country, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gold ml-2"></div>
                      <span>{country}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
