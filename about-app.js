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

function AboutApp() {
  try {
    const missionPillars = [
      {
        number: "01",
        title: "Connect the value chain",
        description: "Bring farmers, buyers, traders, transporters, and agricultural service providers onto coordinated digital pathways that reduce information gaps and friction."
      },
      {
        number: "02",
        title: "Turn data into decisions",
        description: "Use accessible market information, reliable analytics, and intelligent forecasts to help agricultural actors plan, negotiate, and trade with greater confidence."
      },
      {
        number: "03",
        title: "Build inclusive growth",
        description: "Design practical technology for Ghana's languages, devices, networks, and operating realities so that digital agriculture remains useful beyond major cities."
      }
    ];

    const impactStats = [
      { value: "24/7", label: "Digital market access" },
      { value: "10K+", label: "Projected jobs across the value chain" },
      { value: "500K+", label: "Target farmers, traders, and agribusinesses" }
    ];

    return (
      <div className="min-h-screen bg-white" data-name="about-app" data-file="about-app.js">
        <Header />

        <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 py-24 text-white md:py-32">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-lime-300/10 blur-3xl" aria-hidden="true"></div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                About AgriLink
              </span>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Digitizing Agriculture. Connecting Opportunities.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50 md:text-xl">
                AgriLink is building a practical digital bridge between Ghanaian farmers, markets, transport networks, buyers, and the data that supports better decisions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="services.html" className="rounded-lg bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50">
                  Explore Services
                </a>
                <a href="contact.html" className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Contact AgriLink
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
              <p className="text-sm font-bold uppercase tracking-widest text-green-200">Our direction</p>
              <p className="mt-4 text-2xl font-semibold leading-relaxed">
                A connected agricultural ecosystem where every stakeholder can access clearer information, stronger markets, and fairer opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-700">Our mission</p>
              <h2 className="section-title">Three pillars guide everything we build</h2>
              <p className="section-subtitle mb-0">
                AgriLink connects practical agricultural needs with responsible technology, local knowledge, and sustainable business operations.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {missionPillars.map((pillar) => (
                <article key={pillar.number} className="rounded-2xl border border-gray-100 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-xl">
                  <span className="text-sm font-bold text-green-700">{pillar.number}</span>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">{pillar.title}</h3>
                  <p className="mt-4 leading-7 text-gray-600">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-end gap-10 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-green-400">Our impact</p>
                <h2 class="mt-3 text-3xl font-bold md:text-4xl">Built for measurable scale</h2>
              </div>
              <p className="max-w-2xl leading-8 text-gray-300 md:justify-self-end">
                We measure progress by stronger market access, reduced coordination failures, new digital employment, and the time and income saved across agricultural communities.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">
              {impactStats.map((stat) => (
                <div key={stat.label} className="bg-gray-950 px-6 py-10 text-center md:py-14">
                  <strong className="block text-5xl font-bold text-green-400">{stat.value}</strong>
                  <span className="mt-3 block text-sm font-medium text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BusinessModel />
        <TeamSection />

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-green-700 px-6 py-14 text-center text-white md:px-12 md:py-16">
              <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/10" aria-hidden="true"></div>
              <div className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-emerald-300/10" aria-hidden="true"></div>
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-widest text-green-100">Grow with AgriLink</p>
                <h2 class="mt-3 text-3xl font-bold md:text-4xl">Ready to grow with us?</h2>
                <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-50">
                  Partner with us to improve market access, strengthen agricultural operations, and build practical technology with lasting community impact.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a href="partner.html" className="rounded-lg bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50">
                    Become a Partner
                  </a>
                  <a href="contact.html" className="rounded-lg border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                    Talk to Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('AboutApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <AboutApp />
  </ErrorBoundary>
);