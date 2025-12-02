function ImpactStats() {
  try {
    const impacts = [
      {
        icon: 'clock',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-2xl text-[var(--primary-color)]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
        title: '24-Hour Market Access',
        description: 'Continuous trading across all time zones, maximizing economic efficiency for farmers and traders.'
      },
      {
        icon: 'users',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-2xl text-[var(--primary-color)]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
        title: 'Youth Empowerment',
        description: 'Creating agri-tech opportunities for young Ghanaians in data analytics, logistics, and digital finance.'
      },
      {
        icon: 'briefcase',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase text-2xl text-[var(--primary-color)]"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
        title: 'Job Creation',
        description: 'Generating diverse employment throughout the agricultural value chain, from digital roles to on-field training.'
      },
      {
        icon: 'trending-up',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-2xl text-[var(--primary-color)]"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
        title: 'Regional Growth',
        description: 'Boosting agricultural output and national food security through better market coordination and efficiency.'
      }
    ];

    return (
      <section className="py-20 bg-white" data-name="impact-stats" data-file="components/ImpactStats.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with improved spacing */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transforming Ghana's Agricultural Economy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AgriLink serves as a catalyst for economic transformation across Ghana, starting in the Volta Region.
            </p>
          </div>
          
          {/* Impact cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {impacts.map((impact, index) => (
              <div key={index} className="group bg-green-50 p-8 rounded-xl border-2 border-green-100 hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {impact.svg}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{impact.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{impact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats section with improved visual hierarchy */}
          <div className="mt-20 pt-10 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact by Numbers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-10 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-6xl font-bold mb-4">10K+</div>
                <div className="text-xl font-medium">Jobs projection</div>
                <p className="mt-2 text-green-100 text-sm">Across the agricultural value chain</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-10 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-6xl font-bold mb-4">24/7</div>
                <div className="text-xl font-medium">Market Access</div>
                <p className="mt-2 text-blue-100 text-sm">Round-the-clock trading platform</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-10 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-6xl font-bold mb-4">500K+</div>
                <div className="text-xl font-medium">Target Users</div>
                <p className="mt-2 text-purple-100 text-sm">Farmers, traders, and agribusinesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ImpactStats component error:', error);
    return null;
  }
}