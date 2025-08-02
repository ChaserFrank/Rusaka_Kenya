import React from 'react';
import { Phone, Mail, MapPin, Building, Users, FileText, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: 'Phone Numbers',
      details: ['+254 720 978383', '+254 718 077 444']
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: 'Email Address',
      details: ['rusakakenyaltd@yahoo.com']
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: 'Physical Address',
      details: ['Gatei - Gathaiti Rd', 'LR NO Kiganjo/Gatei/2742']
    },
    {
      icon: <Building className="w-6 h-6 text-primary-600" />,
      title: 'Postal Address',
      details: ['P.O. Box 223-01004', 'Thika']
    }
  ];

  const companyInfo = [
    {
      icon: <Building className="w-6 h-6 text-primary-600" />,
      title: 'Registered Name',
      value: 'Rusaka Kenya Limited'
    },
    {
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      title: 'Company Type',
      value: 'Private Limited'
    },
    {
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      title: 'Registration Number',
      value: 'CPR/2015/187813'
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary-600" />,
      title: 'Year Established',
      value: '2015'
    }
  ];

  const directors = [
    'Francis Kanja Kinyanjui',
    'Jane Watihira Kariuki',
    'Amos Kariuki Kanja'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Reach out to our team for professional services in general supplies, construction, and civil works
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-secondary-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-50 rounded-full p-2 mr-3">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900">{info.title}</h3>
                </div>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-secondary-700">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Company Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyInfo.map((info, index) => (
              <div key={index} className="bg-secondary-50 rounded-lg p-6 hover:bg-secondary-100 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-50 rounded-full p-2 mr-3">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900">{info.title}</h3>
                </div>
                <p className="text-secondary-700 font-medium">{info.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Directors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Company Directors
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary-600 mr-4" />
                <h3 className="text-2xl font-semibold text-secondary-900">Board of Directors</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {directors.map((director, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <div className="bg-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-secondary-900">{director}</h4>
                    <p className="text-secondary-600 text-sm mt-1">Director</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-secondary-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your general supplies, construction, or civil works needs. 
            Our experienced team is ready to deliver professional, efficient service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+254 720 978383</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>rusakakenyaltd@yahoo.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;