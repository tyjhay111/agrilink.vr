function MarketPotential() {
  try {
    const chartData = [
      { label: 'Connected', percent: 25, color: 'var(--primary-color)' },
      { label: 'Limited', percent: 35, color: '#f59e0b' }, // yellow-500
      { label: 'None', percent: 40, color: '#ef4444' }  // red-500
    ];

    return (
      <section className="py-20 bg-gray-50" data-name="market-potential" data-file="components/MarketPotential.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Massive Market Opportunity</h2>
          <p className="section-subtitle">
            Ghana's agricultural sector represents one of the largest untapped digital markets in West Africa.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                <AnimatedNumber target={4300000} text="Total Farmers" isMillion={true} />
                <p className="text-gray-600">Ghana's agricultural workforce represents massive potential for digital transformation.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                <AnimatedNumber target={12000000000} text="Agricultural Value Chain" isMoney={true} />
                <p className="text-gray-600">Operating mostly offline, ready for digital disruption and efficiency gains.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <AnimatedNumber target={500000} text="Target Active Users" isK={true} />
                <p className="text-gray-600">AgriLink aims to onboard within three years of launch.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-6 text-center">Digital Connectivity Gap</h3>
              <DoughnutChart data={chartData} />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('MarketPotential component error:', error);
    return null;
  }
}