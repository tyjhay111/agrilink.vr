function FeaturesDetail() {
  try {
    const features = [
      {
        icon: 'chart-line',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-line-chart text-2xl text-[var(--primary-color)]"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
        title: 'Real-Time Price Dashboard',
        description: 'Comprehensive market intelligence platform providing live commodity prices, historical trends, and regional price variations to help farmers identify the best selling opportunities and maximize their returns.'
      },
      {
        icon: 'brain',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit text-2xl text-[var(--primary-color)]"><path d="M12 2a2.5 2.5 0 0 0-2.5 2.5v.7a2.5 2.5 0 0 1-5 .3v-1a2.5 2.5 0 0 0-5 0v1.2A2.5 2.5 0 0 0 2 8.2V12a2.5 2.5 0 0 0 2.5 2.5h.3a2.5 2.5 0 0 1 .3 5v.7a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 1 5-.3v.7a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-1.2a2.5 2.5 0 0 0-2.5-2.5h-.3a2.5 2.5 0 0 1-.3-5v-.7a2.5 2.5 0 0 0-2.5-2.5h-1zM4.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm15 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-5 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/></svg>,
        title: 'AI Demand Forecast',
        description: 'Advanced Prophet Model algorithms analyze market patterns, seasonal trends, and regional demand to predict future commodity needs, enabling farmers to plan production strategically and reduce waste.'
      },
      {
        icon: 'message-circle',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle text-2xl text-[var(--primary-color)]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>,
        title: 'WhatsApp & SMS Integration',
        description: 'Seamless Twilio-powered communication channels deliver market updates, price alerts, and buyer connections directly through platforms farmers already use daily, eliminating the need for new app downloads.'
      },
      {
        icon: 'credit-card',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card text-2xl text-[var(--primary-color)]"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>,
        title: 'Payment Gateway',
        description: 'Integrated Paystack and Flutterwave payment systems enable secure, instant digital transactions, providing farmers with immediate payment upon sale and eliminating cash handling risks.'
      },
      {
        icon: 'languages',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages text-2xl text-[var(--primary-color)]"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>,
        title: 'Multi-Language Support',
        description: 'Full platform functionality in Ewe, Twi, Ga, Dagbani, Hausa alongside English ensures that every Ghanaian farmer can access AgriLink in their preferred language, breaking down digital literacy barriers.'
      },
      {
        icon: 'truck',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck text-2xl text-[var(--primary-color)]"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4h-8v-4h-4V9Z"/><circle cx="7.5" cy="18.5" r="2.5"/><circle cx="17.5" cy="18.5" r="2.5"/></svg>,
        title: 'Logistics & Buyer Linkage',
        description: 'Comprehensive network connecting farmers to verified logistics providers and direct buyers, streamlining the supply chain and ensuring produce reaches markets efficiently while maintaining quality and freshness.'
      }
    ];

    return (
      <section className="py-20 bg-white" data-name="features-detail" data-file="components/FeaturesDetail.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-[var(--primary-color)] transition-all hover:shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                  {feature.svg}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FeaturesDetail component error:', error);
    return null;
  }
}