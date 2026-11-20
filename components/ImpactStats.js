function ImpactStats() {
  try {
    const [activeStage, setActiveStage] = React.useState(0);
    const impacts = [
      {
        title: 'Grow',
        detail: 'Start in the field',
        description: 'Market information helps farmers make clearer decisions about what to grow and when to sell.',
        illustration: <svg viewBox="0 0 480 300" className="impact-art" role="img" aria-label="Farmer tending rows of crops"><circle cx="385" cy="58" r="25" fill="#e9b94e"/><path d="M0 180Q95 115 205 171t275-2v131H0Z" fill="#dcefe0"/><path d="M0 215q130-65 250 0t230-3v88H0Z" fill="#92c89e"/><path d="M0 246q120-48 240 0t240-2v56H0Z" fill="#559c6a"/><path d="M155 298q50-65 102 0m-65-1q43-48 86 0m-150 0q32-32 64 0" fill="none" stroke="#f7f4df" strokeWidth="4" strokeLinecap="round"/><circle cx="100" cy="146" r="13" fill="#a95e3b"/><path d="M82 164q18-12 36 0l11 48H74Z" fill="#1e6447"/><path d="m91 206-11 38m33-38 12 38M82 174l-23 27m57-27 21 17" fill="none" stroke="#a95e3b" strokeWidth="8" strokeLinecap="round"/><path d="M264 215v-31m0 14-13-13m13 7 15-15m-15 33 18-13" fill="none" stroke="#1e6447" strokeWidth="5" strokeLinecap="round"/><path d="M250 183q-2-12 8-14 3 10-8 14m17-10q4-11 14-8-3 10-14 8" fill="#70a76c"/></svg>
      },
      {
        title: 'Connect',
        detail: 'Read the market',
        description: 'Price updates and demand signals bring useful market context closer to farming communities.',
        illustration: <svg viewBox="0 0 480 300" className="impact-art" role="img" aria-label="Phone displaying a rising market-price chart"><path d="M72 250h336" stroke="#b9d6bf" strokeWidth="3" strokeLinecap="round"/><rect x="160" y="27" width="160" height="246" rx="25" fill="#183f30"/><rect x="171" y="41" width="138" height="216" rx="16" fill="#fff"/><rect x="220" y="49" width="40" height="5" rx="2.5" fill="#a9c5af"/><text x="190" y="83" fill="#52685a" fontSize="12" fontFamily="sans-serif">MARKET PRICE</text><path d="M190 101h82" stroke="#dce9df" strokeWidth="2"/><path d="M190 215v-67m33 67v-92m33 92v-49m33 49v-119" stroke="#d9ebdc" strokeWidth="12" strokeLinecap="round"/><path d="m190 190 34-28 31 9 34-44" fill="none" stroke="#17834e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M277 127h12v12" fill="none" stroke="#d9982f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="190" cy="190" r="4" fill="#d9982f"/><circle cx="289" cy="127" r="4" fill="#d9982f"/><path d="M123 109h22m-22 14h15m197 63h19m-19 14h31" stroke="#81b78b" strokeWidth="4" strokeLinecap="round"/></svg>
      },
      {
        title: 'Move',
        detail: 'Reach the buyer',
        description: 'Clearer connections between growers, buyers, and transport can help produce move through the value chain.',
        illustration: <svg viewBox="0 0 480 300" className="impact-art" role="img" aria-label="Produce crate moving by truck toward a market"><path d="M45 249h390" stroke="#b9d6bf" strokeWidth="3" strokeLinecap="round"/><path d="M82 210c60-80 126-80 186 0s125 80 188 0" fill="none" stroke="#d9982f" strokeWidth="4" strokeDasharray="7 11" strokeLinecap="round"/><path d="M110 100h190v113H110z" fill="#d8ead8" stroke="#246b48" strokeWidth="4"/><path d="M132 123h146v68H132z" fill="#f2d89a" stroke="#b77b2d" strokeWidth="3"/><path d="M153 123v68m36-68v68m36-68v68m36-68v68" stroke="#b77b2d" strokeWidth="3"/><path d="M300 140h70l39 39v34H300z" fill="#2a7b50"/><path d="M370 151v32h29" fill="#dcefe0"/><circle cx="328" cy="217" r="17" fill="#183f30"/><circle cx="328" cy="217" r="7" fill="#f4f0e2"/><circle cx="380" cy="217" r="17" fill="#183f30"/><circle cx="380" cy="217" r="7" fill="#f4f0e2"/><path d="M154 112q-5-17 8-22 6 14-8 22m22-2q3-16 18-14-2 14-18 14m35-2q-5-17 8-22 6 14-8 22" fill="#74a95f"/><circle cx="82" cy="210" r="7" fill="#d9982f"/><circle cx="456" cy="210" r="7" fill="#d9982f"/></svg>
      },
      {
        title: 'Build',
        detail: 'Create local opportunity',
        description: 'A stronger agricultural network can support new work in logistics, digital services, and local trade.',
        illustration: <svg viewBox="0 0 480 300" className="impact-art" role="img" aria-label="People and local businesses connected by an upward path"><path d="M48 250h384" stroke="#b9d6bf" strokeWidth="3" strokeLinecap="round"/><path d="m87 214 80-50 73 18 115-91" fill="none" stroke="#d9982f" strokeWidth="5" strokeDasharray="8 10" strokeLinecap="round" strokeLinejoin="round"/><path d="M331 91h25v25" fill="none" stroke="#d9982f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="130" cy="138" r="19" fill="#bd7650"/><path d="M95 220v-36q0-24 35-24t35 24v36z" fill="#24724a"/><circle cx="242" cy="156" r="19" fill="#9f6041"/><path d="M207 220v-25q0-24 35-24t35 24v25z" fill="#d9982f"/><circle cx="354" cy="112" r="19" fill="#bd7650"/><path d="M319 220v-82q0-24 35-24t35 24v82z" fill="#4c8f62"/><path d="M118 207h24m88 0h24m88 0h24" stroke="#fff" strokeWidth="4" strokeLinecap="round"/></svg>
      }
    ];

    const targets = [
      { value: '24/7', label: 'Market access goal', note: 'Designed for around-the-clock access to market information.' },
      { value: '10K+', label: 'Projected jobs', note: 'Long-term projection across the agricultural value chain.' },
      { value: '500K+', label: 'Target users', note: 'Farmers, traders, and agribusinesses targeted for onboarding.' }
    ];

    const selectedImpact = impacts[activeStage];

    return (
      <section className="py-20 bg-white" data-name="impact-stats" data-file="components/ImpactStats.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-700">The impact pathway · Volta Region, Ghana</p>
            <h2 className="text-4xl font-bold text-gray-900">From harvest to opportunity</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
            <div className="impact-scene" aria-live="polite">
              <div className="impact-scene-art" key={activeStage}>
                {selectedImpact.illustration}
              </div>
              <div className="mt-6 max-w-xl">
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">{selectedImpact.detail}</p>
                <p className="mt-2 text-lg leading-relaxed text-gray-700">{selectedImpact.description}</p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold text-gray-500">Select a point in the journey</p>
              <div className="impact-stage-list" aria-label="Impact journey stages">
                {impacts.map((impact, index) => (
                  <button
                    key={impact.title}
                    type="button"
                    className="impact-stage-button"
                    aria-pressed={activeStage === index}
                    onClick={() => setActiveStage(index)}
                  >
                    <span className="impact-stage-number">0{index + 1}</span>
                    <span className="impact-stage-title">{impact.title}</span>
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="impact-stage-arrow"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 border-y border-gray-200 py-10" data-name="impact-targets">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">Project goals</p>
                <h3 className="mt-2 text-2xl font-bold text-gray-900">Ambition, not reported results</h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-gray-500">These are AgriLink targets and projections. They are not verified outcomes or current user counts.</p>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {targets.map((target) => (
                <div key={target.label} className="impact-target">
                  <dt className="mt-2 font-semibold text-gray-900">{target.label}</dt>
                  <dd className="text-4xl font-bold text-emerald-800">{target.value}</dd>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{target.note}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ImpactStats component error:', error);
    return null;
  }
}