import React from 'react';
import { Package, Hammer, Loader as Road } from 'lucide-react';

const Services: React.FC = () => {
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

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Professional services delivered with excellence and integrity across Kenya and East Africa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
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

        {/* Additional Info */}
        <div className="mt-20 bg-secondary-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Professional Service Delivery
            </h2>
            <p className="text-lg text-secondary-700 max-w-4xl mx-auto leading-relaxed">
              At Rusaka Kenya Limited, we combine years of experience with modern techniques to deliver 
              exceptional results. Our commitment to quality, attention to detail, and customer satisfaction 
              has established us as a trusted partner for individuals, institutions, and government bodies 
              across Kenya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;