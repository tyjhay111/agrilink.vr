const TransformSection = () => {
    const comparisonData = [
        {
            feature: "Market Access",
            agriLink: "Direct, AI-optimized connections to multiple buyers",
            others: "Limited to specific pre-arranged buyers or local markets",
            icon: "lucide-bar-chart-3"
        },
        {
            feature: "Pricing",
            agriLink: "Dynamic, real-time pricing based on market data",
            others: "Fixed, often below-market rates set by middlemen",
            icon: "lucide-dollar-sign"
        },
        {
            feature: "Logistics",
            agriLink: "Integrated, optimized, and trackable logistics network",
            others: "Farmer-arranged or unreliable third-party transport",
            icon: "lucide-truck"
        },
        {
            feature: "Payment",
            agriLink: "Instant digital payments upon delivery confirmation",
            others: "Delayed cash payments, often weeks or months later",
            icon: "lucide-smartphone"
        },
        {
            feature: "Data Insights",
            agriLink: "AI-powered yield prediction and market trend analysis",
            others: "Basic SMS alerts, often generic and not personalized",
            icon: "lucide-brain-circuit"
        },
        {
            feature: "Accessibility",
            agriLink: "USSD, SMS, and simple smartphone app for all literacy levels",
            others: "Often requires smartphone and digital literacy",
            icon: "lucide-universal-access"
        }
    ];

    return (
        <section id="transform" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="section-title">How AgriLink Transforms the Value Chain</h2>
                <p className="section-subtitle">
                    A side-by-side look at how our AI-powered platform creates unprecedented value compared to existing solutions.
                </p>
                <div className="overflow-x-auto animate-slide-up">
                    <table className="w-full min-w-[800px] text-left border-collapse">
                        <thead>
                            <tr className="bg-[var(--bg-light)]">
                                <th className="p-4 text-lg font-semibold text-[var(--text-dark)] rounded-tl-lg">Feature</th>
                                <th className="p-4 text-lg font-semibold text-white bg-[var(--primary-color)] text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <i className="lucide lucide-star text-white"></i>
                                        AgriLink
                                    </div>
                                </th>
                                <th className="p-4 text-lg font-semibold text-[var(--text-dark)] rounded-tr-lg">Others</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((item, index) => (
                                <tr key={index} className="border-b border-gray-200 group">
                                    <td className="p-4 font-medium transition-colors duration-300 group-hover:bg-gray-50">
                                        <div className="flex items-center gap-3">
                                            <i className={`lucide ${item.icon} text-[var(--primary-color)]`}></i>
                                            {item.feature}
                                        </div>
                                    </td>
                                    <td className="p-4 bg-emerald-50 text-[var(--text-dark)] font-medium text-center transition-transform duration-300 group-hover:scale-105">
                                        {item.agriLink}
                                    </td>
                                    <td className="p-4 text-[var(--text-light)] transition-colors duration-300 group-hover:bg-gray-50">
                                        {item.others}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};