const ServicesList = () => {
  const services = [
    { title: 'Agro-Consulting', description: 'Expert guidance...', image: 'images/service1.jpg' },
    { title: 'Crop Processing', description: 'Value-added processing...', image: 'images/service2.jpg' },
    { title: 'Logistics & Distribution', description: 'Reliable transport...', image: 'images/service3.jpg' },
    { title: 'Retail Solutions', description: 'Branding & retail...', image: 'images/service4.jpg' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">Discover the range of services AgriLink provides.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
