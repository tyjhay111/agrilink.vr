const ProblemSection = () => {
    const problems = [
        {
            icon: "lucide-trending-down",
            title: "Market Inefficiency",
            description: "Farmers suffer from low prices and exploitation due to multiple intermediaries and a lack of direct market access."
        },
        {
            icon: "lucide-x-circle",
            title: "Post-Harvest Losses",
            description: "An estimated 30-40% of produce is lost due to poor logistics, lack of storage, and delayed market connections."
        },
        {
            icon: "lucide-dollar-sign",
            title: "Financial Exclusion",
            description: "Limited access to fair credit and delayed payments from buyers create a cycle of debt and financial instability for farmers."
        },
        {
            icon: "lucide-cloud-off",
            title: "Information Asymmetry",
            description: "Farmers lack access to real-time market data, weather forecasts, and best practices, leading to suboptimal decisions."
        }
    ];

    return (
        <section id="problem" className="py-20 bg-[var(--bg-light)]" data-name="problem-section" data-file="components/ProblemSection.js">
            <div className="container mx-auto px-4">
                <h2 className="section-title">The Challenge Facing Farmers</h2>
                <p className="section-subtitle">
                    Ghana's agricultural backbone is strong, but systemic issues prevent farmers from realizing their full potential.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((problem, index) => (
                        <div 
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-slide-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <i className={`lucide ${problem.icon} text-4xl text-[var(--primary-color)] mb-4`}></i>
                            <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                            <p className="text-[var(--text-light)]">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};