function TeamSection() {
  const leadership = {
    name: "Mawunyo Abali",
    role: "Founder & Chief Executive Officer",
    initials: "MA",
    image: "images/team/mawunyo-abali.jpg",
    biography: "Mawunyo Abali is a Ghanaian technology entrepreneur and IT professional focused on applying technology to solve practical community challenges. With academic training in Information Technology and professional experience in Data Analysis, he combines technical knowledge, entrepreneurship, and an understanding of agricultural operations to create opportunities within Ghana's digital economy.",
    focus: "Technology strategy · Entrepreneurship · Data analysis · Strategic leadership · Agricultural innovation",
    link: "mailto:agrilink.ai.gh@gmail.com"
  };

  const team = [
    {
      name: "Deborah Adebisi Agbabiaka",
      role: "Co-Founder & Deputy MD, Head of Development",
      initials: "D.A.A",
      image: "images/team/software-engineering-lead.jpg",
      biography: "Deborah Adebisi Agbabiaka is a Ghanaian educator, researcher, and entrepreneur driven by practical innovation. Whether mentoring students through academic research or developing impactful visual branding, Deborah focuses on building accessible, real-world solutions that empower learners and organizations across Ghana.",
      skills: ["Research & Development", "Brand Strategy", "Education", "Design Thinking", "Team Leadership"]
    },
    {
      name: "Agroh Felin Jnr",
      role: "Co-Founder & Deputy CTO, Backend Engineer",
      initials: "A.F.J",
      image: "images/team/backend-software-engineer.jpg",
      biography: "Builds reliable services that connect farmers, buyers, logistics providers, market data, and payments. Designs validated REST APIs, database models, authentication flows, background jobs, and integrations designed for low-connectivity environments.",
      skills: ["Node.js", "PostgreSQL", "REST APIs", "Authentication", "Cloud Services"]
    },
    {
      name: "Johnson Attipoe",
      role: "Co-Founder & CTO, Software Engineer",
      initials: "J.A",
      image: "images/team/frontend-software-engineer.jpg",
      biography: "Develops accessible, responsive interfaces for farmers, traders, and AgriLink administrators. Implements reusable React components, clear interaction states, multilingual layouts, and progressive experiences that remain practical on modest devices and variable network connections.",
      skills: ["React", "Tailwind CSS", "Accessibility", "Responsive UI", "Performance"]
    },
    {
      name: "Data & AI Engineer",
      role: "Intelligence Systems",
      initials: "AI",
      image: "images/team/data-ai-engineer.jpg",
      biography: "Designs the data pipelines and forecasting components behind AgriLink market insights. Applies data quality controls, feature engineering, model evaluation, and responsible release practices so predictions remain explainable, monitored, and useful for agricultural decisions.",
      skills: ["Python", "Data Pipelines", "Forecasting", "Model Evaluation", "Analytics"]
    }
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-gray-50" data-name="team-section" data-file="components/TeamSection.js">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-4 block">
            Leadership & Engineering
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6 text-balance">
            The people building AgriLink.
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed text-balance">
            Our team turns agricultural research and farmer feedback into dependable software, practical operations, and measurable community impact.
          </p>
        </div>

        {/* Leadership card - prominent */}
        <article className="mb-20 overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[240px_1fr] md:p-12">
            {/* Avatar */}
            <div className="relative mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-gray-900 text-3xl font-semibold text-white shadow-xl ring-4 ring-white">
              <span aria-hidden="true">{leadership.initials}</span>
              <img
                src={leadership.image}
                alt={leadership.name}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => { event.currentTarget.style.display = "none"; }}
              />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">
                Chief Executive Officer  
              </span>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-2">
                {leadership.name}
              </h3>
              <p className="text-lg font-medium text-gray-500 mb-6">
                {leadership.role}
              </p>
              <p className="text-base leading-relaxed text-gray-600 mb-6 max-w-3xl">
                {leadership.biography}
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-8">
                {leadership.focus}
              </p>
              <a 
                href={leadership.link} 
                className="inline-flex items-center gap-2 text-brand font-medium hover:gap-3 transition-all duration-300"
                aria-label="Contact AgriLink leadership"
              >
                Contact Leadership
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        {/* Team divider */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">
            Technology & Operations Team
          </p>
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Engineering behind the platform
          </h3>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {team.map((member) => (
            <article 
              key={member.name} 
              className="group flex flex-col rounded-3xl bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              {/* Avatar */}
              <div className="mb-6 flex items-center gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gray-900 text-base font-semibold text-white transition-transform duration-300 group-hover:scale-105">
                  <span aria-hidden="true">{member.initials}</span>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(event) => { event.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-semibold text-gray-900 truncate">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-500 truncate">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Biography */}
              <p className="flex-1 text-sm leading-relaxed text-gray-600 mb-6">
                {member.biography}
              </p>

              {/* Skills */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Core expertise
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 border border-gray-200 group-hover:border-brand/20 group-hover:bg-brand-pale group-hover:text-brand-dark transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
