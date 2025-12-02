function BusinessModel() {
  try {
    const revenues = [
      {
        number: '01',
        icon: 'package',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package text-xl text-[var(--primary-color)]"><path d="M16.5 9.4 7.5 4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.29 7 8.71 5 8.71-5"/><path d="M12 22.08V12"/></svg>,
        title: 'Subscription Services',
        description: 'Premium insights and advanced analytics for agricultural cooperatives, providing deep market intelligence and strategic planning tools.'
      },
      {
        number: '02',
        icon: 'credit-card',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card text-xl text-[var(--primary-color)]"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>,
        title: 'Transaction Fees',
        description: 'Competitive 0.5-1% fees on payment transactions processed through the platform, creating sustainable revenue as transaction volume grows.'
      },
      {
        number: '03',
        icon: 'database',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database text-xl text-[var(--primary-color)]"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>,
        title: 'Data API Access',
        description: 'Licensing agricultural market data and insights to NGOs, government agencies, and research institutions for policy development.'
      },
      {
        number: '04',
        icon: 'user-check',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check text-xl text-[var(--primary-color)]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
        title: 'Digital Profiles',
        description: 'Farmer digital profiles and aggregated analytics marketplace providing valuable insights to agricultural input suppliers.'
      }
    ];

    return (
      <section className="py-20 bg-gray-50" data-name="business-model" data-file="components/BusinessModel.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">The Business Model</h2>
          <p className="section-subtitle">
            Sustainable revenue streams that grow with farmer success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {revenues.map((revenue, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4 mb-4">
                  <span className="text-3xl font-bold text-[var(--primary-color)]">{revenue.number}</span>
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    {revenue.svg}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{revenue.title}</h3>
                <p className="text-gray-600">{revenue.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4">Youth Empowerment & 24-Hour Economy</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              AgriLink directly supports Ghana's vision for a 24-hour economy by keeping agricultural trade active across all time zones while creating substantial employment opportunities for young Ghanaians.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <p> Jobs projection</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p>Market Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('BusinessModel component error:', error);
    return null;
  }
}