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
      name: "Software Engineering Lead",
      role: "Product & Engineering",
      initials: "SE",
      image: "images/team/software-engineering-lead.jpg",
      biography: "Owns the technical direction of the AgriLink platform. Converts product requirements into maintainable system architecture, prioritizes engineering work, reviews implementations, and coordinates secure delivery across web, mobile, messaging, and backend services.",
      skills: ["System Architecture", "React", "JavaScript", "API Design", "Technical Leadership"]
    },
    {
      name: "Backend Software Engineer",
      role: "Platforms & Data Systems",
      initials: "BE",
      image: "images/team/backend-software-engineer.jpg",
      biography: "Builds reliable services that connect farmers, buyers, logistics providers, market data, and payments. Designs validated REST APIs, database models, authentication flows, background jobs, and integrations designed for low-connectivity environments.",
      skills: ["Node.js", "PostgreSQL", "REST APIs", "Authentication", "Cloud Services"]
    },
    {
      name: "Frontend Software Engineer",
      role: "Digital Experience",
      initials: "FE",
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
    <section id="team" className="bg-white py-20" data-name="team-section" data-file="components/TeamSection.js">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
            Leadership & Engineering
          </span>
          <h2 className="section-title">The People Building AgriLink</h2>
          <p className="section-subtitle mb-0">
            Our leadership and engineering team turn agricultural research and farmer feedback into dependable software, practical operations, and measurable community impact.
          </p>
        </div>

        <article className="mb-12 overflow-hidden rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-emerald-50 shadow-sm">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[220px_1fr] md:p-10">
            <div className="relative mx-auto flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border-8 border-white bg-green-600 text-3xl font-bold text-white shadow-lg" aria-label={`${leadership.name} profile image`}>
              <span aria-hidden="true">{leadership.initials}</span>
              <img
                src={leadership.image}
                alt={leadership.name}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => { event.currentTarget.style.display = "none"; }}
              />
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-green-700">Chief Executive</span>
              <h3 className="mt-2 text-3xl font-bold text-gray-900">{leadership.name}</h3>
              <p className="mt-1 text-lg font-semibold text-green-700">{leadership.role}</p>
              <p className="mt-5 max-w-3xl leading-8 text-gray-600">{leadership.biography}</p>
              <p className="mt-5 text-sm font-semibold text-gray-800">{leadership.focus}</p>
              <a href={leadership.link} className="btn-primary mt-6 inline-flex" aria-label="Contact AgriLink leadership">
                Contact Leadership
              </a>
            </div>
          </div>
        </article>

        <div className="mb-8 flex items-end justify-between gap-5 border-b border-gray-200 pb-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">Technology Team</p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900">Engineering behind the platform</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <article key={member.role} className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl">
              <div className="mb-5 flex items-center gap-4">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-green-600 text-lg font-bold text-white transition-transform duration-300 group-hover:rotate-3">
                  <span aria-hidden="true">{member.initials}</span>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(event) => { event.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                  <p className="mt-1 text-sm font-semibold text-green-700">{member.role}</p>
                </div>
              </div>

              <p className="flex-1 text-sm leading-7 text-gray-600">{member.biography}</p>

              <div className="mt-5 border-t border-gray-100 pt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">Core expertise</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
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
