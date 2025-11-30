import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1>
              <a href="/" className="flex items-center">
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo_hd.jpg" 
                  alt="Maruyasu Umbrella Co., Ltd. | Handcrafted Japanese Umbrellas"
                  className="h-12"
                />
              </a>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">Home</a>
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Products</span>
                <i className={`ri-arrow-down-s-line transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                  <div className="py-2">
                    <Link 
                      to="/products/silent-umbrella" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Silent Umbrella
                    </Link>
                    <Link 
                      to="/products/braid-umbrella" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Miyabi-Zakura Braided Long Umbrella
                    </Link>
                    <Link 
                      to="/products/folding-umbrella" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Rain Pocket Folding Umbrella
                    </Link>
                    <Link 
                      to="/products/parasol" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Rain & Sun Parasol
                    </Link>
                    <Link 
                      to="/products/koshu-weaving" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Koshu Weaving
                    </Link>
                    <Link 
                      to="/products/others" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Others
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/repair" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              Repair Service
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">About Us</Link>
            <Link to="/news" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">News</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">Contact</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              <a href="/" className="block text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <div>
                <div className="text-gray-700 font-medium mb-2">Products</div>
                <div className="pl-4 space-y-2">
                  <Link to="/products/silent-umbrella" className="block text-sm text-gray-600 hover:text-blue-600">- Silent Umbrella</Link>
                  <Link to="/products/braid-umbrella" className="block text-sm text-gray-600 hover:text-blue-600">- Miyabi Sakura Braided Long Umbrella</Link>
                  <Link to="/products/folding-umbrella" className="block text-sm text-gray-600 hover:text-blue-600">- Rain Pocket Folding Umbrella</Link>
                  <Link to="/products/parasol" className="block text-sm text-gray-600 hover:text-blue-600">- Sun & Rain Parasol</Link>
                  <Link to="/products/koshu-weaving" className="block text-sm text-gray-600 hover:text-blue-600">- Koshu-ori</Link>
                  <Link to="/products/others" className="block text-sm text-gray-600 hover:text-blue-600">- Others</Link>
                </div>
              </div>
              <Link to="/repair" className="block text-gray-700 hover:text-blue-600 font-medium">Repair Service</Link>
              <Link to="/about" className="block text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
              <Link to="/news" className="block text-gray-700 hover:text-blue-600 font-medium">News</Link>
              <div className="pt-4 border-t">
                <div className="flex items-center text-blue-600 mb-2">
                  <i className="ri-phone-line mr-2"></i>
                  <span className="font-mono">06-6713-8308</span>
                </div>
                <Link to="/contact" className="flex items-center text-blue-600">
                  <i className="ri-mail-line mr-2"></i>
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;