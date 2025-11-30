export default function AboutSection() {
  const stats = [
    { number: "2011", unit: "ปี", label: "ก่อตั้ง" },
    { number: "3,700,000", unit: "ชุด", label: "กำลังการผลิต" },
    { number: "29,000", unit: "ตร.ม.", label: "ขนาดโรงงานเวียดนาม" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-16">
          {/* Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                เกี่ยวกับ Gushine
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              ผู้ให้บริการโซลูชันการจัดการพลังงานมืออาชีพ
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-6">
                Gushine Electronics (珠海市古鑫電子科技有限会社) ก่อตั้งขึ้นในปี 2011 
                มีประสบการณ์หลายสิบปีในอุตสาหกรรมแบตเตอรี่ เป็นบริษัทเทคโนโลยีชั้นสูงที่รวมการวิจัยและพัฒนา 
                การผลิต และการขายเข้าด้วยกัน เราให้บริการแบตเตอรี่ลิเธียม เครื่องชาร์จอัจฉริยะ 
                และโซลูชันที่มีประสิทธิภาพสูงและปลอดภัยแก่ลูกค้า
              </p>
              
              <p className="mb-6">
                ด้วยความเชี่ยวชาญที่สั่งสมมาหลายปี Gushine ตอบสนองความต้องการของลูกค้า 
                และด้วยความได้เปรียบในการแข่งขันที่ครอบคลุมในด้านการวิจัยและพัฒนาผลิตภัณฑ์ 
                การผลิตที่ยืดหยุ่น และการควบคุมคุณภาพ เราให้บริการที่มีคุณภาพและมีประสิทธิภาพสูงแก่ลูกค้า
              </p>
              
              <p>
                ผลิตภัณฑ์ของเราใช้งานอย่างแพร่หลายในสาขา "เทอร์มินัลการสื่อสารไร้สายเฉพาะทาง" 
                "สถานีฐานการสื่อสาร" "เทอร์มินัลการรวบรวมข้อมูลอุตสาหกรรม" 
                "เทอร์มินัลการสื่อสารทางการแพทย์" และอื่นๆ
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              เรียนรู้เพิ่มเติม
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>

          {/* Video/Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="https://www.gushine.com/jp/uploads/image/20241106/048e4a0eeee12be10b4427e70ed2b4bd.webp"
                alt="Gushine Factory Overview"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <i className="ri-play-fill text-3xl text-blue-600 ml-1"></i>
                </div>
              </div>
              
              {/* Video Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-semibold">
                  ภาพรวมโรงงาน Gushine ที่เมืองจูไห่
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                    <sup className="text-2xl text-gray-500 ml-1">{stat.unit}</sup>
                  </div>
                  <div className="text-gray-700 font-medium text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}