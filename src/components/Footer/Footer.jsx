import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterVariantOne = () => {
  return (
    <footer className="w-full bg-green-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center gap-6">
            <li><a href="/" className="hover:text-green-200">Home</a></li>
            <li><a href="/gallery" className="hover:text-green-200">Gallery</a></li>
            <li><a href="/events" className="hover:text-green-200">Events</a></li>
            <li><a href="/news" className="hover:text-green-200">News</a></li>
            <li><a href="/about" className="hover:text-green-200">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-200">Contact Us</a></li>
          </ul>
        </nav>

        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <FaPhone className="text-green-200" />
            <span>+91 XXXX XXXX XX</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-green-200" />
            <span>contact@mahaforest.gov.in</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-200" />
            <span>Maharashtra Forest Department, Mumbai</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-4">
          <a href="https://facebook.com" className="text-white hover:text-green-200">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-green-200">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-green-200">
            <FaInstagram size={24} />
          </a>
        </div>

        <div className="text-sm text-gray-300">
          © Maharashtra Forest Department | Maintained by NIC<br />
          Last updated on: 02/04/2025
        </div>
      </div>
    </footer>
  );
};

const FooterVariantTwo = () => {
  return (
    <footer className="w-full bg-green-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green-300">Home</a></li>
            <li><a href="/gallery" className="hover:text-green-300">Gallery</a></li>
            <li><a href="/events" className="hover:text-green-300">Events</a></li>
            <li><a href="/news" className="hover:text-green-300">News</a></li>
            <li><a href="/about" className="hover:text-green-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-300">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p><FaPhone className="inline mr-2" /> +91 XXXX XXXX XX</p>
          <p><FaEnvelope className="inline mr-2" /> contact@mahaforest.gov.in</p>
          <p><FaMapMarkerAlt className="inline mr-2" /> Maharashtra Forest Department, Mumbai</p>
        </div>
      </div>
    </footer>
  );
};

const FooterVariantThree = () => {
  return (
    <footer className="w-full bg-green-700 text-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-bold">About Us</h3>
          <p className="text-sm text-gray-200 mt-2">Maharashtra Forest Department is committed to protecting and conserving forests and wildlife.</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 mt-2">
            <li><a href="/events" className="hover:text-green-300">Events</a></li>
            <li><a href="/news" className="hover:text-green-300">News</a></li>
            <li><a href="/gallery" className="hover:text-green-300">Gallery</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-green-300"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-green-300"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-green-300"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterVariantFour = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-green-900 to-green-600 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">© Maharashtra Forest Department, Government of Maharashtra</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-200"><FaFacebook size={20} /></a>
          <a href="#" className="hover:text-green-200"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-green-200"><FaInstagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export { FooterVariantOne, FooterVariantTwo, FooterVariantThree, FooterVariantFour };
