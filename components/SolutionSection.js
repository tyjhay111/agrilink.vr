const SolutionSection = () => {
    const solutions = [
        {
            icon: "lucide-database",
            title: "Centralized Digital Platform",
            description: "A unified ecosystem connecting farmers, buyers, logistics providers, and financial institutions in real-time."
        },
        {
            icon: "lucide-brain-circuit",
            title: "AI-Powered Intelligence",
            description: "Leveraging AI for market price forecasting, yield prediction, and optimizing logistics for maximum efficiency."
        },
        {
            icon: "lucide-smartphone",
            title: "Accessible Technology",
            description: "Reaching every farmer through a multi-channel approach including USSD, SMS, WhatsApp, and a simple smartphone app."
        },
        {
            icon: "lucide-shield-check",
            title: "Transparent & Secure Transactions",
            description: "Ensuring prompt, secure digital payments and building a trusted environment for all stakeholders."
        }
    ];

    return (
        <section id="solution" className="py-20 bg-white" data-name="solution-section" data-file="components/SolutionSection.js">
            <div className="container mx-auto px-4">
                <h2 className="section-title">The AgriLink Solution</h2>
                <p className="section-subtitle">
                    We bridge the gap with a comprehensive, technology-driven approach designed for the Ghanaian context.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((solution, index) => (
                        <div 
                            key={index}
                            className="group text-center p-8 rounded-xl border border-gray-200 hover:shadow-2xl hover:border-[var(--primary-color)] transition-all duration-300 animate-scale-in"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <i className={`lucide ${solution.icon} text-5xl text-[var(--primary-color)] mb-5 mx-auto group-hover:-translate-y-2 transition-transform duration-300`}></i>
                            <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                            <p className="text-[var(--text-light)]">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};