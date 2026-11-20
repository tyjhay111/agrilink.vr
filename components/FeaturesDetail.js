function FeaturesDetail() {
  try {
    const features = [
      {
        svg: <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="feature-art text-[var(--primary-color)]"><path d="M6 6v28h28"/><path d="M11 27h5M11 21h5M11 15h5" className="feature-market-tick"/><path d="m12 27 7-7 5 4 9-11" className="feature-market-line"/><circle cx="33" cy="13" r="2.5" className="feature-market-dot"/><path d="m29 7 3-3 3 3" className="feature-market-spark"/></svg>,
        title: 'Real-Time Price Dashboard',
        description: 'Comprehensive market intelligence platform providing live commodity prices, historical trends, and regional price variations to help farmers identify the best selling opportunities and maximize their returns.'
      },
      {
        icon: 'brain',
        svg: <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="feature-art text-[var(--primary-color)]"><path d="M20 31V17M20 23c-7 0-10-4-10-9 5 0 9 2 10 7M20 20c1-6 5-9 11-9 0 5-3 9-11 11M9 33h22" className="feature-forecast-sprout"/><path d="M7 29c4 2 7 3 13 3s9-1 13-3" className="feature-forecast-soil"/><circle cx="30" cy="7" r="2" className="feature-forecast-signal"/><circle cx="35" cy="14" r="1.5" className="feature-forecast-signal feature-forecast-signal--late"/><path d="M25 8h-5" className="feature-forecast-signal"/></svg>,
        title: 'AI Demand Forecast',
        description: 'Advanced Prophet Model algorithms analyze market patterns, seasonal trends, and regional demand to predict future commodity needs, enabling farmers to plan production strategically and reduce waste.'
      },
      {
        icon: 'message-circle',
        svg: <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="feature-art text-[var(--primary-color)]"><path d="M7 8h26a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H18l-8 6v-6H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3Z"/><circle cx="13" cy="19" r="1.6" className="feature-message-dot"/><circle cx="20" cy="19" r="1.6" className="feature-message-dot feature-message-dot--middle"/><circle cx="27" cy="19" r="1.6" className="feature-message-dot feature-message-dot--last"/><path d="M30 4v5M27.5 6.5h5" className="feature-message-spark"/></svg>,
        title: 'WhatsApp & SMS Integration',
        description: 'Seamless Twilio-powered communication channels deliver market updates, price alerts, and buyer connections directly through platforms farmers already use daily, eliminating the need for new app downloads.'
      },
      {
        icon: 'credit-card',
        svg: <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="feature-art text-[var(--primary-color)]"><rect x="4" y="9" width="29" height="21" rx="3"/><path d="M4 16h29M9 24h7"/><circle cx="29" cy="29" r="7" className="feature-payment-coin"/><path d="m26 29 2 2 4-5" className="feature-payment-check"/></svg>,
        title: 'Payment Gateway',
        description: 'Integrated Paystack and Flutterwave payment systems enable secure, instant digital transactions, providing farmers with immediate payment upon sale and eliminating cash handling risks.'
      },
      {
        icon: 'languages',
        svg: <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="feature-art text-[var(--primary-color)]"><path d="M5 7h21a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-8l-6 5v-5H5a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3Z"/><path d="M21 25h10l5 4v-4h1a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8" className="feature-language-reply"/><text x="8" y="19" className="feature-language-label">EN</text><text x="27" y="21" className="feature-language-label feature-language-label--local">TWI</text></svg>,
        title: 'Multi-Language Support',
        description: 'Full platform functionality in Ewe, Twi, Ga, Dagbani, Hausa alongside English ensures that every Ghanaian farmer can access AgriLink in their preferred language, breaking down digital literacy barriers.'
      },
      {
        icon: 'truck',
        svg: <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="feature-art text-[var(--primary-color)]"><path d="M4 11h20v18H4zM24 17h7l6 6v6H24z"/><path d="M27 20v5h7M8 15h12v10H8zM12 15v10M16 15v10" className="feature-logistics-crate"/><path d="M3 33h34" className="feature-logistics-route"/><circle cx="11" cy="30" r="3" className="feature-logistics-wheel"/><circle cx="30" cy="30" r="3" className="feature-logistics-wheel"/></svg>,
        title: 'Logistics & Buyer Linkage',
        description: 'Comprehensive network connecting farmers to verified logistics providers and direct buyers, streamlining the supply chain and ensuring produce reaches markets efficiently while maintaining quality and freshness.'
      }
    ];

    return (
      <section className="py-20 bg-white" data-name="features-detail" data-file="components/FeaturesDetail.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-[var(--primary-color)] transition-all hover:shadow-lg">
                <div className="feature-icon-frame w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
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