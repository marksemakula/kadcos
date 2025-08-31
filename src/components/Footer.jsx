import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiClock } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://greta-preview.s3.us-east-2.amazonaws.com/assets/logo.svg" 
                alt="KADCOS Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold font-marcellus">KADCOS</h3>
                <p className="text-gray-400 font-marcellus">Lubaga Cooperative Society Ltd.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 font-marcellus leading-relaxed">
              Financially empowering people of God in Kampala Archdiocese through cooperative effort and savings culture since 2007.
            </p>
            <p className="text-sm text-gray-500 font-marcellus">ACTS 2:45-47</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-marcellus">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Membership', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 font-marcellus"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-marcellus">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="text-primary" />
                <span className="text-gray-400 font-marcellus">0783-077661</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="text-primary" />
                <span className="text-gray-400 font-marcellus">kadcoslubaga.sacco@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="text-primary mt-1" />
                <span className="text-gray-400 font-marcellus">Lubaga Cathedral Administration Building</span>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiClock} className="text-primary mt-1" />
                <div className="text-gray-400 font-marcellus">
                  <p>Mon-Fri: 8:30am - 5:00pm</p>
                  <p>Sat: 8:00am - 1:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-marcellus">
            © 2025 KADCOS Lubaga Cooperative Society Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm font-marcellus">Powered by</span>
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1749836650782-inzozi.png" 
              alt="Inzozi Logo" 
              className="h-10 w-auto brightness-0 invert" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;