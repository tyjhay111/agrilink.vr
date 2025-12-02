function PartnershipOptions() {
  try {
    const options = [
      {
        icon: 'trending-up',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-2xl text-gray-900"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
        title: 'Invest in Impact',
        description: 'Support a platform that generates both financial returns and measurable social impact across Ghana\'s farming communities.',
        color: 'from-green-500 to-emerald-600'
      },
      {
        icon: 'rocket',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket text-2xl text-gray-900"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.0-3.1-.69-.8-2.2-.8-3.1.0z"/><path d="m12 15-3-3a9 9 0 0 1 3-7 9 9 0 0 1 7 3l-3 3a9 9 0 0 1-7 3z"/><path d="m18 15-3-3"/><path d="m21.5 4.5-3 3"/></svg>,
        title: 'Scale Together',
        description: 'Help us reach 500,000+ farmers and transform Ghana\'s agricultural economy into a model for digital innovation in Africa.',
        color: 'from-blue-500 to-cyan-600'
      },
      {
        icon: 'handshake',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake text-2xl text-gray-900"><path d="M11 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/><path d="M7 17v-6.17a3 3 0 0 1 .88-2.12l3.12-3.12a3 3 0 0 1 4.24 0L19 9.59a3 3 0 0 1 0 4.24l-3.12 3.12a3 3 0 0 1-2.12.88z"/><path d="m18 14 1-1"/><path d="m15 11-1-1"/></svg>,
        title: 'Strategic Partnership',
        description: 'Collaborate on technology integration, market expansion, and capacity building to create lasting agricultural transformation.',
        color: 'from-purple-500 to-pink-600'
      }
    ];

    return (
      <section className="py-20 bg-white" data-name="partnership-options" data-file="components/PartnershipOptions.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Partnership Opportunities</h2>
          <p className="section-subtitle">
            Multiple ways to collaborate and drive agricultural innovation in Ghana
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {options.map((option, index) => (
              <div key={index} className={`bg-gradient-to-br ${option.color} text-white p-8 rounded-xl shadow-lg`}>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6">
                  {option.svg}
                </div>
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-white text-opacity-90">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('PartnershipOptions component error:', error);
    return null;
  }
}