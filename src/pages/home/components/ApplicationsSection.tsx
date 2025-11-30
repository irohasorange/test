import { useState } from 'react';

export default function ApplicationsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const applications = [
    {
      id: 1,
      number: "01",
      title: "เทอร์มินัลแบบพกพา",
      icon: "https://www.gushine.com/jp/uploads/image/20250122/f057d69496278c5d7e52bb7dceb7e075.webp",
      image: "https://www.gushine.com/jp/uploads/image/20250609/1e5a0457022b6b96c68eecefabd58695.webp",
      subtitle: "ผู้ให้บริการโซลูชันการจัดการพลังงานมืออาชีพ",
      description: "โซลูชันโมดูลแบตเตอรี่ลิเธียมไอออน",
      detail: "การจ่ายพลังงานที่เสถียร",
      link: "#handheld-terminals"
    },
    {
      id: 2,
      number: "02", 
      title: "อุปกรณ์อัจฉริยะ",
      icon: "https://www.gushine.com/jp/uploads/image/20250122/9f0f8fae94254f856c539eb4c56a9466.webp",
      image: "https://www.gushine.com/jp/uploads/image/20250609/999da79d3d80cfd59989aea83c907899.webp",
      subtitle: "โซลูชันเฉพาะทางสำหรับโมดูลแบตเตอรี่ลิเธียมไอออน",
      description: "โมดูลแบตเตอรี่ลิเธียมไอออนสำหรับอุปกรณ์อัจฉริยะ",
      detail: "เทคโนโลยีล้ำสมัยสำหรับอุปกรณ์อัจฉริยะ",
      link: "#smart-devices"
    },
    {
      id: 3,
      number: "03",
      title: "พลังงานน้ำหนักเบา", 
      icon: "https://www.gushine.com/jp/uploads/image/20250122/aab2926c9d5a87079d7e2011493df3a9.webp",
      image: "https://www.gushine.com/jp/uploads/image/20250609/cebbed1855b8bb571ae97e629eb64a95.webp",
      subtitle: "โซลูชันเฉพาะทางสำหรับโมดูลแบตเตอรี่ลิเธียมไอออน",
      description: "แบตเตอรี่สำหรับระบบช่วยขับขี่ไฟฟ้า",
      detail: "โซลูชันพลังงานน้ำหนักเบาสำหรับการเคลื่อนที่",
      link: "#lightweight-power"
    },
    {
      id: 4,
      number: "04",
      title: "อุปกรณ์การแพทย์",
      icon: "https://www.gushine.com/jp/uploads/image/20250122/5f55d97948f25605ed563c0823ee32eb.webp", 
      image: "https://www.gushine.com/jp/uploads/image/20250609/8151e0fd8304f96506f31bca2b7a61a8.webp",
      subtitle: "โซลูชันเฉพาะทางสำหรับโมดูลแบตเตอรี่ลิเธียมไอออน",
      description: "โมดูลแบตเตอรี่สำหรับอุปกรณ์การแพทย์",
      detail: "พลังงานที่เชื่อถือได้สำหรับอุปกรณ์การแพทย์",
      link: "#medical-equipment"
    }
  ];

  return (
    <section id="applications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs Navigation */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {applications.map((app, index) => (
              <button
                key={app.id}
                onClick={() => setActiveTab(index)}
                className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  activeTab === index 
                    ? 'bg-blue-600 text-white shadow-xl' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="text-2xl font-bold mb-2">{app.number}</div>
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img 
                    src={app.icon} 
                    alt={app.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center font-medium">{app.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {applications.map((app, index) => (
            <div
              key={app.id}
              className={`transition-all duration-500 ${
                activeTab === index 
                  ? 'opacity-100 visible' 
                  : 'opacity-0 invisible absolute inset-0'
              }`}
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-2xl">
                <div className="lg:flex">
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="h-96 lg:h-full relative overflow-hidden">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                        {app.subtitle}
                      </span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                      {app.description}
                    </h3>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {app.detail}
                    </p>
                    <div>
                      <a
                        href={app.link}
                        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                      >
                        เรียนรู้เพิ่มเติม
                        <i className="ri-arrow-right-line ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}