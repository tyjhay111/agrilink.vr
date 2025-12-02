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
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function PartnerApp() {
  try {
    return (
      <div className="min-h-screen bg-white" data-name="partner-app" data-file="partner-app.js">
        <Header />
        <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Digitize Agriculture, Together</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in revolutionizing Ghana's agricultural sector through strategic partnerships and collaborative innovation
            </p>
          </div>
        </div>
        <PartnershipOptions />
        <ContactForm />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('PartnerApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <PartnerApp />
  </ErrorBoundary>
);