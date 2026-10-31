const ServicesApp = () => (
  <div className="flex min-h-screen flex-col bg-white" data-name="services-app">
    <Header />
    <main className="flex-1">
      <ServicesList />
    </main>
    <Footer />
  </div>
);

const servicesRoot = document.getElementById('root');

if (servicesRoot) {
  ReactDOM.createRoot(servicesRoot).render(<ServicesApp />);
}
