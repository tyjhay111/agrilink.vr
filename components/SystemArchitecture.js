function SystemArchitecture() {
  try {
    const layers = [
      {
        number: '1',
        title: 'User Layer',
        description: 'Farmers and traders interact through multiple accessible channels including WhatsApp, SMS, and web applications.',
        icon: 'users',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-xl text-[var(--primary-color)]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      },
      {
  number: '2',
  title: 'Core Values',
  description: (
    <div className="text-left">
      Our guiding principles:
      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
        <li>Farmer-Centered</li>
        <li>Client Focus & Professionalism</li>
        <li>Innovation & Excellence</li>
        <li>Collaboration</li>
        <li>Integrity & Transparency</li>
        <li>Sustainability &  Modernity </li>
      </ul>
    </div>
  ),
  icon: 'brain',
  svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit text-xl text-[var(--primary-color)]"><path d="M12 2a2.5 2.5 0 0 0-2.5 2.5v.7a2.5 2.5 0 0 1-5 .3v-1a2.5 2.5 0 0 0-5 0v1.2A2.5 2.5 0 0 0 2 8.2V12a2.5 2.5 0 0 0 2.5 2.5h.3a2.5 2.5 0 0 1 .3 5v.7a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 1 5-.3v.7a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-1.2a2.5 2.5 0 0 0-2.5-2.5h-.3a2.5 2.5 0 0 1-.3-5v-.7a2.5 2.5 0 0 0-2.5-2.5h-1zM4.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm15 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-5 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" /></svg>
},
      {
        number: '3',
        title: 'Mission',
        description: 'AgriLink delivers practical digital solutions across the agricultural value chain. We empower farmers with real-time data, reduce post-harvest losses, ensure fair pricing, create digital jobs for youth, and make modern agriculture accessible to all Ghanaians.',
        icon: 'target',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target text-xl text-[var(--primary-color)]"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
      },
    
     {
  number: '4',
  title: 'Vision',
  description: 'AgriLink envisions transforming African agriculture through smart digital tools that empower all stakeholders. We\'re building a future where technology boosts productivity, strengthens food security, reduces losses, and drives sustainable economic growth.',
  icon: 'eye',
  svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-xl text-[var(--primary-color)]"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
}
    ];

    return (
      <section className="py-20 bg-white" data-name="system-architecture" data-file="components/SystemArchitecture.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title"> Overview</h2>
          <p className="section-subtitle">
            A robust, scalable platform built on modern technology infrastructure
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {layers.map((layer, index) => (
              <div key={index} className="relative">
                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[var(--primary-color)] text-white rounded-lg flex items-center justify-center text-2xl font-bold mr-4">
                      {layer.number}
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                      {layer.svg}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{layer.title}</h3>
                  <p className="text-gray-600 text-sm">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('SystemArchitecture component error:', error);
    return null;
  }
}