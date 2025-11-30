
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

const RepairPage: React.FC = () => {
  const [showMoreTestimonials, setShowMoreTestimonials] = useState(false);

  const testimonials = [
    {
      name: "S.S from Chiba Prefecture",
      content: "The umbrella I requested arrived today. It was beautifully repaired, and I am very happy. I will continue to use it with care. Thank you very much."
    },
    {
      name: "Y.H from Kanagawa Prefecture", 
      content: "I received the umbrella yesterday. Thank you for the repair. The dirty center pole was shiny, and the fabric was crisp - it was like new. If there's another opportunity, please take care of it again."
    },
    {
      name: "A.M from Saitama Prefecture",
      content: "Thank you for quickly handling the repair of my long-cherished umbrella. I was surprised that it was delivered in 5 days after sending it. I have never used one umbrella for such a long time. I will continue to use it with care for a long time. Thank you very much."
    },
    {
      name: "N.S from Nagano Prefecture",
      content: "The umbrella arrived safely the day before yesterday. I'm happy that it came back so clean. The stains that remained on the fabric remind me that it's mine, and I feel attached to it. I will continue to use it with care. Thank you."
    },
    {
      name: "S.E from Osaka Prefecture",
      content: "Thank you for the prompt repair. I will continue to use it with care."
    },
    {
      name: "U.K from Hiroshima Prefecture",
      content: "Thank you for your help. It's just one umbrella, but it's a memorable one that I couldn't bear to throw away and kept by my side for a long time. I'm grateful that we had this connection and you repaired it."
    }
  ];

  const hiddenTestimonials = [
    {
      name: "K.K from Kanagawa Prefecture",
      content: "The umbrella arrived just now. Thank you for your quick response. When the rib color changes, it becomes very elegant. I think my daughter will be pleased."
    },
    {
      name: "S.T from Ehime Prefecture", 
      content: "I was on a business trip and returned home last night to see the repaired umbrella. I am very happy that it was repaired so beautifully. Thank you very much. I will continue to use it with care. Please continue to take care of us in the future. Thank you."
    },
    {
      name: "O.S from Kagawa Prefecture",
      content: "Thank you very much for your great help. I am very grateful that it became like new."
    },
    {
      name: "N.K from Tokyo",
      content: "Thank you for your very quick and beautiful work. This umbrella changed my feelings about umbrellas since I received it as a gift, and I started to take care of them. I will ask for maintenance again, so please take care of it then."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Repair Service</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Repair Service</span>
          </nav>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation Links */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#repair" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Repair Service
            </a>
            <a href="#testimonials" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Customer Testimonials
            </a>
            <a href="#facebook" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Facebook
            </a>
          </div>
        </section>

        {/* Repair Information */}
        <section id="repair" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Repair Service
            <span className="block text-lg font-normal text-blue-600 mt-2">REPAIR</span>
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">About Umbrella Repairs</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If you wish to have your umbrella repaired, please fill out the repair request form attached to your umbrella and send it to our company via courier service.
                If you don't have the repair request form, you can send just the umbrella (shipping to our company is at the customer's expense).
                Once your umbrella arrives at our company, our staff will contact you. Repair costs vary depending on the type and condition of the umbrella.
                After examining the umbrella, we will contact you by phone with the repair cost. (If ribs or parts have been updated, they may be changed.)
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">About Delivery Time</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Repairs take approximately 10 days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">About Payment</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                After the repair is completed, we will send a postal transfer form along with the umbrella, so please transfer the payment later.
                (Transfer fees are covered by our company.)
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">Important Notice</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We only repair umbrellas manufactured domestically by our company.
                We do not accept products from other companies because the parts used and specifications differ, and the fabric tension varies due to different standards.
                Our umbrellas have a white label with our address and phone number sewn inside the fabric.
                Please check this. (If you send us an umbrella from another company for repair, we will return it to you by cash on delivery.)
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">Shipping Address</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                〒545-0001 2-6-15 Tennoji-cho Kita, Abeno-ku, Osaka City<br/>
                Maruyasu Umbrella Co., Ltd. Attention: Kawaguchi<br/>
                TEL: 06-6713-8308
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">Main Repair Price List</span>
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>Return shipping fee: ¥660 (tax included) (Hokkaido and remote islands have an additional ¥1,600 surcharge)</p>
                <p>Rib replacement: ¥3,300-¥4,400 (tax included) (varies by material and number of ribs)</p>
                <p>Parts replacement: ¥1,100-¥1,650 (tax included)</p>
                <p>Handle replacement: from ¥1,650 (tax included)</p>
                <p>Strong water repellent treatment: ¥1,100 (tax included)</p>
              </div>
            </div>
          </div>

          {/* Before/After Images */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 justify-center">
            <div className="text-center">
              <p className="text-lg font-bold mb-4">Before</p>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img01.png" 
                alt="Before repair" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-4">After</p>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img02.png" 
                alt="After repair" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section id="testimonials" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Customer Testimonials
            <span className="block text-lg font-normal text-blue-600 mt-2">VOICE</span>
          </h2>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-3">
                  <span className="text-green-600">{testimonial.name}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
              </div>
            ))}

            {showMoreTestimonials && hiddenTestimonials.map((testimonial, index) => (
              <div key={`hidden-${index}`} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-3">
                  <span className="text-green-600">{testimonial.name}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
              </div>
            ))}

            <div className="text-center">
              <button
                onClick={() => setShowMoreTestimonials(!showMoreTestimonials)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {showMoreTestimonials ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        </section>

        {/* Facebook Section */}
        <section id="facebook" className="mb-16">
          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-gray-800 mb-4">
              \Facebook Updated Regularly/
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E4%25B8%25B8%25E5%25AE%2589%25E6%25B4%258B%25E5%2582%2598-%25E6%25A0%25AA%25E5%25BC%258F%25E4%25BC%259A%25E7%25A4%25BE-106929541003855%2F&tabs=timeline&width=500&height=650&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%" 
                height="650" 
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-16 -mx-4">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Contact Us
              <span className="block text-lg font-normal text-blue-600 mt-2">CONTACT</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    <i className="ri-phone-line mr-2"></i>06-6713-8308
                  </p>
                  <p className="text-gray-600">Business Hours: 10:00-17:00 (Closed: Sat, Sun, Holidays)</p>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <i className="ri-mail-line mr-2"></i>
                  Email Inquiry
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <a 
                href="https://maruyasu19.thebase.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" 
                  alt="Visit our online store" 
                  className="max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RepairPage;
