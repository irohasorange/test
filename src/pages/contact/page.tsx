
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    email: '',
    phone: '',
    message: '',
    privacyAgreement: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAgreement) {
      alert('Please agree to the privacy policy.');
      return;
    }

    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const submitData = new URLSearchParams();
      submitData.append('lastName', formData.lastName);
      submitData.append('firstName', formData.firstName);
      submitData.append('lastNameKana', formData.lastNameKana);
      submitData.append('firstNameKana', formData.firstNameKana);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('message', formData.message);
      submitData.append('privacyAgreement', formData.privacyAgreement ? 'Agree to privacy policy' : '');

      const response = await fetch('https://readdy.ai/api/form/submit/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          lastName: '',
          firstName: '',
          lastNameKana: '',
          firstNameKana: '',
          email: '',
          phone: '',
          message: '',
          privacyAgreement: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-green-800" style={{ fontFamily: 'Pacifico, serif' }}>
                logo
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-800 transition-colors">Home</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-800 transition-colors flex items-center">
                  Products
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/products/silent-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Silent Umbrella</Link>
                    <Link to="/products/braid-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Miyabi Sakura Braided Long Umbrella</Link>
                    <Link to="/products/folding-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Rain Pocket Folding Umbrella</Link>
                    <Link to="/products/parasol" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Rain or Shine Parasol</Link>
                    <Link to="/products/koshu-weaving" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Koshu Weaving</Link>
                    <Link to="/products/others" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Others</Link>
                  </div>
                </div>
              </div>
              <Link to="/repair" className="text-gray-700 hover:text-green-800 transition-colors">Repair Service</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-800 transition-colors">About Us</Link>
              <Link to="/news" className="text-gray-700 hover:text-green-800 transition-colors">News</Link>
              <Link to="/contact" className="text-green-800 font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-900">Contact Us</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-lg text-gray-600 uppercase tracking-wider">CONTACT</p>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                For questions, consultations, and other inquiries, please use the form below.<br />
                We also accept inquiries by phone.
              </p>
              <p className="text-gray-700">
                After filling in each field, please click the "Submit" button.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} id="contact-form" data-readdy-form className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium w-1/4">
                      Name <span className="bg-red-600 text-white px-2 py-1 text-xs rounded ml-2">Required</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">Furigana</td>
                    <td className="px-6 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name (Kana)</label>
                          <input
                            type="text"
                            name="lastNameKana"
                            value={formData.lastNameKana}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name (Kana)</label>
                          <input
                            type="text"
                            name="firstNameKana"
                            value={formData.firstNameKana}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">
                      Email Address <span className="bg-red-600 text-white px-2 py-1 text-xs rounded ml-2">Required</span>
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">Phone Number</td>
                    <td className="px-6 py-4">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">
                      Inquiry Content <span className="bg-red-600 text-white px-2 py-1 text-xs rounded ml-2">Required</span>
                    </td>
                    <td className="px-6 py-4">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        maxLength={500}
                        rows={8}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                        placeholder="Please enter your inquiry (maximum 500 characters)"
                      ></textarea>
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {formData.message.length}/500 characters
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">
                      Privacy Policy <span className="bg-red-600 text-white px-2 py-1 text-xs rounded ml-2">Required</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="bg-gray-50 p-6 rounded-lg mb-4 max-h-64 overflow-y-auto">
                        <p className="text-sm text-gray-700 mb-4">
                          Maruyasu Yougasa Co., Ltd. (hereinafter referred to as "the Company") establishes the following privacy policy, builds a personal information protection system, and promotes the protection of personal information by ensuring that all employees recognize the importance of personal information protection and work on it.
                        </p>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">【Personal Information Management】</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          The Company keeps customers' personal information accurate and up-to-date, and takes necessary measures such as maintaining security systems, establishing management systems, and thoroughly educating employees to prevent unauthorized access, loss, damage, falsification, and leakage of personal information, implements safety measures, and strictly manages personal information.
                        </p>

                        <h4 className="font-semibold text-gray-900 mb-2">【Purpose of Use of Personal Information】</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          Personal information received from customers will be used for sending emails and materials as contact from the Company, business guidance, and responses to inquiries.
                        </p>

                        <h4 className="font-semibold text-gray-900 mb-2">【Prohibition of Disclosure and Provision of Personal Information to Third Parties】</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          The Company appropriately manages personal information received from customers and will not disclose personal information to third parties except in the following cases:
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 mb-4 ml-4">
                          <li>When there is customer consent</li>
                          <li>When disclosing to contractors to whom the Company outsources business to provide services desired by customers</li>
                          <li>When disclosure is required by law</li>
                        </ul>

                        <h4 className="font-semibold text-gray-900 mb-2">【Personal Information Security Measures】</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          The Company takes comprehensive security measures to ensure the accuracy and safety of personal information.
                        </p>

                        <h4 className="font-semibold text-gray-900 mb-2">【Inquiry by the Person】</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          When customers wish to inquire, modify, or delete their personal information, we will respond after confirming their identity.
                        </p>

                        <h4 className="font-semibold text-gray-900 mb-2">【Compliance with Laws and Regulations and Review】</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          The Company complies with applicable Japanese laws and other standards regarding personal information held, and strives to improve this policy by reviewing its contents as appropriate.
                        </p>

                        <h4 className="font-semibold text-gray-900 mb-2">【Inquiries】</h4>
                        <p className="text-sm text-gray-700">
                          For inquiries regarding the Company's handling of personal information, please contact us below.<br />
                          Maruyasu Yougasa Co., Ltd.<br />
                          〒545-0001<br />
                          2-6-15 Tennoji-cho Kita, Abeno-ku, Osaka City, Osaka<br />
                          TEL: 06-6713-8308
                        </p>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="privacyAgreement"
                          checked={formData.privacyAgreement}
                          onChange={handleInputChange}
                          required
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-700">
                          I agree to the privacy policy
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="p-6 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-800 text-white px-12 py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg mx-6 mb-6">
                  <p className="text-green-800">Thank you for your inquiry. We will contact you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg mx-6 mb-6">
                  <p className="text-red-800">An error occurred while submitting the form. Please try again.</p>
                </div>
              )}
            </form>
          </section>
        </div>
      </main>

      {/* Contact Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 uppercase tracking-wider">CONTACT</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <i className="ri-phone-line text-2xl text-green-800 mr-3"></i>
                  <span className="text-3xl font-bold text-gray-900">06-6713-8308</span>
                </div>
                <p className="text-gray-600">Business Hours: 10:00-17:00 (Closed: Sat, Sun, Holidays)</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                <i className="ri-mail-line mr-2"></i>
                Email Inquiry
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://maruyasu19.thebase.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" 
                alt="Online Store" 
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="mb-4">
                <Link to="/" className="text-2xl font-bold" style={{ fontFamily: 'Pacifico, serif' }}>
                  logo
                </Link>
              </div>
              <h3 className="text-lg font-semibold mb-2">Maruyasu Yougasa Co., Ltd.</h3>
              <p className="text-gray-400 text-sm">
                〒545-0001<br />
                2-6-15 Tennoji-cho Kita, Abeno-ku, Osaka City, Osaka
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products/silent-umbrella" className="text-gray-400 hover:text-white transition-colors">- Silent Umbrella</Link></li>
                <li><Link to="/products/braid-umbrella" className="text-gray-400 hover:text-white transition-colors">- Miyabi Sakura Braided Long Umbrella</Link></li>
                <li><Link to="/products/folding-umbrella" className="text-gray-400 hover:text-white transition-colors">- Rain Pocket Folding Umbrella</Link></li>
                <li><Link to="/products/parasol" className="text-gray-400 hover:text-white transition-colors">- Rain or Shine Parasol</Link></li>
                <li><Link to="/products/koshu-weaving" className="text-gray-400 hover:text-white transition-colors">- Koshu Weaving</Link></li>
                <li><Link to="/products/others" className="text-gray-400 hover:text-white transition-colors">- Others</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
                <li><Link to="/repair" className="text-gray-400 hover:text-white transition-colors">Repair Service</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              Copyright © Maruyasu Yougasa Co., Ltd. All rights reserved. | 
              <a href="https://readdy.ai/?origin=logo" className="ml-2 hover:text-white transition-colors">Website Builder</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
