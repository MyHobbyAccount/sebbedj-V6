import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4 md:pl-4">
            <h3 className="text-xl font-semibold mb-4">Företagsinformation</h3>
            <p>Passaparola AB - Innehar F-skattsedel</p>
            <p>
              <a
                href="tel:0721571439"
                className="hover:text-gray-300 transition-colors"
              >
                Tel: 072-157 14 39
              </a>
            </p>
            <p>
              <a
                href="mailto:boka@sebbedj.se"
                className="hover:text-gray-300 transition-colors"
              >
                boka@sebbedj.se
              </a>
            </p>
          </div>

          {/* Follow Us */}
          <div className="space-y-4 md:pl-4">
            <h3 className="text-xl font-semibold mb-4">Följ Oss</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/sebbedj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/sebbedj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 transition-colors"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
