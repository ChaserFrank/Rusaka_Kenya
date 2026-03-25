import React, { useState, useEffect } from 'react';
import { CheckCircle, Target, Eye, Heart, Users, Award, Package, Hammer, Loader as Road, Phone, Mail, MapPin, Building, FileText, Calendar, ChevronUp} from 'lucide-react';

const Home: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whyChooseUs = [
    'Attention to detail',
    'Consistent project delivery',
    'Quality products and services',
    'Strong client relationships'
  ];

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: 'Integrity',
      description: 'Ethical and honest in all dealings'
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: 'Empowerment',
      description: 'Supporting community and tackling poverty'
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: 'Excellence',
      description: 'High benchmarks and consistent delivery'
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: 'Community',
      description: 'Collaboration with local partners'
    },
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: 'Good Stewardship',
      description: 'Responsible use of resources'
    }
  ];

  const services = [
    {
      icon: <Package className="w-12 h-12 text-primary-600" />,
      title: 'General Supplies',
      description: 'Provision of high-quality supplies to individuals, institutions, and government bodies.',
      image: 'https://i.pinimg.com/1200x/0d/6b/a4/0d6ba46206341de5ec07e4ac1368fc41.jpg'
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-600" />,
      title: 'Construction',
      description: 'Execution of structural and property development projects across Kenya.',
      image: 'https://i.pinimg.com/736x/6e/2f/c4/6e2fc4a6c37277591418399611f9934f.jpg'
    },
    {
      icon: <Road className="w-12 h-12 text-primary-600" />,
      title: 'Civil Works',
      description: 'Infrastructure services including Cabro installation services, drainage systems, and related projects.',
      image: 'https://cdn.standardmedia.co.ke/images/thursday/rkjkaxw8mbshqnenolw5b5064cb4a414.jpg'
    }
  ];

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
    'Jane Waithira Kariuki',
    'Amos Kariuki Kanja'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Rusaka Kenya Limited
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              "Committed to meeting customers' needs with professionalism, proficiency, and efficiency."
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                <div className="text-2xl font-bold">2015</div>
                <div className="text-sm text-primary-200">Established</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-primary-200">Core Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                <div className="text-2xl font-bold">Country wide</div>
                <div className="text-sm text-primary-200">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              About the Company
            </h2>
            <p className="text-lg text-secondary-700 leading-relaxed">
              Rusaka Kenya Limited was established in 2015 to meet the growing demand in general supplies, 
              construction, and civil works. Since then, the company has built a reputation for delivering 
              quality services and building strong client trust.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-6">
                Why Choose Us
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-secondary-100">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <p className="text-secondary-800 font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-6">
                Core Values
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-primary-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-secondary-900 mb-2">{value.title}</h4>
                  <p className="text-secondary-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="bg-primary-600 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <Eye className="w-10 h-10 mr-4" />
                  <h3 className="text-2xl font-bold">Vision Statement</h3>
                </div>
                <p className="text-lg text-primary-100 leading-relaxed">
                  To be the company of choice in general supplies, construction, civil works, and related 
                  services across East Africa, driven by customer confidence and trust.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <Target className="w-10 h-10 mr-4" />
                  <h3 className="text-2xl font-bold">Mission Statement</h3>
                </div>
                <p className="text-lg text-primary-100 leading-relaxed">
                  To meet customer needs through professional, proficient, and efficient service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Professional services delivered with excellence and integrity across Kenya and East Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-50 rounded-full p-3 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900">{service.title}</h3>
                  </div>
                  <p className="text-secondary-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Professional Service Delivery
              </h3>
              <p className="text-lg text-secondary-700 max-w-4xl mx-auto leading-relaxed">
                At Rusaka Kenya Limited, we combine years of experience with modern techniques to deliver 
                exceptional results. Our commitment to quality, attention to detail, and customer satisfaction 
                has established us as a trusted partner for individuals, institutions, and government bodies 
                across Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Reach out to our team for professional services in general supplies, construction, and civil works
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-secondary-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-50 rounded-full p-2 mr-3">
                      {info.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-secondary-900">{info.title}</h4>
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
            <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
              Company Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyInfo.map((info, index) => (
                <div key={index} className="bg-secondary-50 rounded-lg p-6 hover:bg-secondary-100 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-50 rounded-full p-2 mr-3">
                      {info.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-secondary-900">{info.title}</h4>
                  </div>
                  <p className="text-secondary-700 font-medium">{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
              Company Directors
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary-50 rounded-lg p-8">
                <div className="flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary-600 mr-4" />
                  <h4 className="text-xl font-semibold text-secondary-900">Board of Directors</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {directors.map((director, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                      <div className="bg-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h5 className="text-lg font-semibold text-secondary-900">{director}</h5>
                      <p className="text-secondary-600 text-sm mt-1">Director</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Company Profile Download */}
          <div className="bg-secondary-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Work With Us?</h3>
            <p className="text-xl text-secondary-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your general supplies, construction, or civil works needs. 
              Our experienced team is ready to deliver professional, efficient service.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+254 720 978383</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>rusakakenyaltd@yahoo.com</span>
              </div>
            </div>
            {/* <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Company Profile</span>
            </button> */}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 md:hidden"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Home;