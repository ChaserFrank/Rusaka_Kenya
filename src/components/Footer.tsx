import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Rusaka Kenya Limited</h3>
                <p className="text-sm text-secondary-300">Est. 2015</p>
              </div>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Committed to meeting customers' needs with professionalism, proficiency, and efficiency 
              in general supplies, construction, and civil works.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-secondary-300">
              <li>General Supplies</li>
              <li>Construction Services</li>
              <li>Civil Works</li>
              <li>Infrastructure Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-secondary-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+254 720 978383</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>rusakakenyaltd@yahoo.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Gatei - Gathaiti Rd, Thika</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-sm text-secondary-400">
          <p>&copy; 2025 Rusaka Kenya Limited. All rights reserved. | Registration: CPR/2015/187813</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;