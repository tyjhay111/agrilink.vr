class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Services List Component
const ServicesList = () => {
  const services = [
    {
      title: 'Agro-Consulting',
      description: 'Expert guidance for farmers to improve yield, efficiency, and sustainability.',
      image: 'images/service1.jpg',
    },
    {
      title: 'Crop Processing',
      description: 'Value-added processing solutions to turn raw crops into market-ready products.',
      image: 'images/service2.jpg',
    },
    {
      title: 'Logistics & Distribution',
      description: 'Reliable transport and storage to ensure fresh products reach customers.',
      image: 'images/service3.jpg',
    },
    {
      title: 'Retail Solutions',
      description: 'Branding, packaging, and retail partnerships to expand your market reach.',
      image: 'images/service4.jpg',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">
          Discover the wide range of services AgriLink provides to help you succeed in agriculture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesApp = () => {
  return (
    <div className="min-h-screen bg-white" data-name="services-app" data-file="services-app.js">
      <Header />
      <ServicesList />
      <Footer />
    </div>
  );
};

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ServicesApp />
  </ErrorBoundary>
);
