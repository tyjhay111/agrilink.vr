const ServicesList = () => {
      const [activeService, setActiveService] = React.useState(null);
      const [hoveredIndex, setHoveredIndex] = React.useState(null);
      const [loading, setLoading] = React.useState(true);

    const services = [
        {
            id: 1,
            title: "Agro-Consulting",
            category: "Consulting",
            description:
                "Get expert guidance to improve farm productivity, manage resources, and make informed agricultural decisions.",
            details:
                "Agro-consulting helps farmers make better decisions about crop selection, farm planning, soil management, and production methods. The aim is to support productive and sustainable farming.",
            image: null,
            icon: "🌱",
            keywords: ["farm", "advice", "soil", "planning", "consultation"]
        },
        {
            id: 2,
            title: "Crop Processing",
            category: "Processing",
            description:
                "Explore crop processing solutions that help turn harvested produce into valuable agricultural products.",
            details:
                "Crop processing covers activities that prepare agricultural produce for storage, distribution, or further production. Examples include grain milling, drying, sorting, and packaging.",
            image: null,
            icon: "🌾",
            keywords: ["milling", "drying", "packaging", "harvest", "processing"]
        },
        {
            id: 3,
            title: "Logistics & Distribution",
            category: "Logistics",
            description:
                "Explore transport and distribution solutions for moving agricultural produce from farms to markets.",
            details:
                "Agricultural logistics involves coordinating the movement and handling of farm produce. Reliable transport and suitable storage arrangements can help reduce delays and post-harvest losses.",
            image: null,
            icon: "🚚",
            keywords: ["transport", "delivery", "distribution", "storage", "market"]
        },
        {
            id: 4,
            title: "Retail Solutions",
            category: "Marketing",
            description:
                "Discover ways to improve agricultural product presentation, branding, packaging, and market access.",
            details:
                "Retail solutions help agricultural businesses prepare their products for customers. Activities can include product presentation, packaging, branding, and identifying suitable sales channels.",
            image: null,
            icon: "🛒",
            keywords: ["retail", "branding", "sales", "packaging", "marketing"]
        },
        {
            id: 5,
            title: "Farm Equipment & Mechanization",
            category: "Farm Support",
            description:
                "Explore agricultural machinery and equipment solutions for essential farming operations.",
            details:
                "Farm mechanization covers equipment and machinery used for land preparation, planting, harvesting, and other farm operations. Available equipment and hiring arrangements depend on the provider.",
            image: null,
            icon: "🚜",
            keywords: ["tractor", "machinery", "equipment", "ploughing", "harvesting"]
        },
        {
            id: 6,
            title: "Irrigation Solutions",
            category: "Farm Support",
            description:
                "Discover irrigation options that help farmers manage water for crop production.",
            details:
                "Irrigation services can include system planning, installation, maintenance, and water management. The appropriate solution depends on the crop, water source, farm size, and local conditions.",
            image: null,
            icon: "💧",
            keywords: ["water", "irrigation", "dry season", "drip", "watering"]
        },
        {
            id: 7,
            title: "Agricultural Inputs",
            category: "Farm Support",
            description:
                "Find information about seeds, fertilizers, and other essential agricultural production inputs.",
            details:
                "Agricultural inputs support crop production and farm management. Farmers should choose suitable products based on their crops, soil conditions, local recommendations, and applicable safety guidance.",
            image: null,
            icon: "🌿",
            keywords: ["seeds", "fertilizer", "farm supplies", "inputs", "crop production"]
        },
        {
            id: 8,
            title: "Market Access",
            category: "Marketing",
            description:
                "Explore opportunities to connect agricultural produce with buyers and potential markets.",
            details:
                "Market access involves identifying potential buyers, understanding market requirements, preparing produce for sale, and coordinating commercial relationships between agricultural producers and customers.",
            image: null,
            icon: "🤝",
            keywords: ["buyers", "farmers", "sales", "market prices", "trade"]
        }
    ];

    const categories = [
        "All Services",
        "Consulting",
        "Processing",
        "Logistics",
        "Marketing",
        "Farm Support"
    ];

    const [searchTerm, setSearchTerm] = React.useState("");
    const [activeCategory, setActiveCategory] = React.useState("All Services");
    const [selectedService, setSelectedService] = React.useState(null);
    const [visibleCount, setVisibleCount] = React.useState(8);

    // Search and filter services.
    const filteredServices = services.filter((service) => {
        const search = searchTerm.trim().toLowerCase();

        const matchesSearch =
            !search ||
            service.title.toLowerCase().includes(search) ||
            service.description.toLowerCase().includes(search) ||
            service.category.toLowerCase().includes(search) ||
            service.keywords.some((keyword) =>
                keyword.toLowerCase().includes(search)
            );

        const matchesCategory =
            activeCategory === "All Services" ||
            service.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    const displayedServices = filteredServices.slice(0, visibleCount);

    // Reset the number of displayed cards when filters change.
    React.useEffect(() => {
        setVisibleCount(8);
    }, [searchTerm, activeCategory]);

    // Allow users to close the details dialog using Escape.
    React.useEffect(() => {
        if (!selectedService) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedService(null);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedService]);

    const clearFilters = () => {
        setSearchTerm("");
        setActiveCategory("All Services");
        setVisibleCount(8);
    };

    return (
        <section
            id="services"
            className="bg-gray-50 py-16 sm:py-20"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page heading */}
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <span className="mb-3 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                        Supporting Agricultural Growth
                    </span>

                    <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Agricultural Services
                        <span className="block text-emerald-600">
                            Built Around Your Needs
                        </span>
                    </h1>

                    <p className="text-base leading-7 text-gray-600 sm:text-lg">
                        Discover agricultural services designed to support
                        farmers, agricultural businesses, and other
                        participants across the agricultural value chain.
                    </p>
                </div>

                {/* Search */}
                <div className="mx-auto mb-8 max-w-2xl">
                    <label
                        htmlFor="service-search"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                        Search agricultural services
                    </label>

                    <div className="relative">
                        <span
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-xl"
                            aria-hidden="true"
                        >
                            🔎
                        </span>

                        <input
                            id="service-search"
                            type="search"
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                            placeholder="Try irrigation, transport, seeds..."
                            className="w-full rounded-xl border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                        />
                    </div>
                </div>

                {/* Category filters */}
                <div className="mb-10">
                    <p className="mb-4 text-center text-sm font-semibold text-gray-700">
                        Browse by category
                    </p>

                    <div
                        className="flex flex-wrap justify-center gap-3"
                        role="group"
                        aria-label="Filter services by category"
                    >
                        {categories.map((category) => {
                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    aria-pressed={isActive}
                                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                                        isActive
                                            ? "border-emerald-600 bg-emerald-600 text-white shadow"
                                            : "border-gray-200 bg-white text-gray-700 hover:border-emerald-500 hover:text-emerald-700"
                                    }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Results summary */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <p
                        className="text-sm text-gray-600"
                        aria-live="polite"
                    >
                        Showing{" "}
                        <span className="font-bold text-gray-900">
                            {displayedServices.length}
                        </span>{" "}
                        of{" "}
                        <span className="font-bold text-gray-900">
                            {filteredServices.length}
                        </span>{" "}
                        matching services
                    </p>

                    {(searchTerm || activeCategory !== "All Services") && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="text-sm font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
                        >
                            Clear filters
                        </button>
                    )}
                </div>

                {/* Service cards */}
                {displayedServices.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {displayedServices.map((service) => (
                            <article
                                key={service.id}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Service image */}
                                <div className="relative h-48 overflow-hidden bg-emerald-50">
                                    {service.image && (
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    )}

                                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
                                        {service.category}
                                    </span>

                                    <span
                                        className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-md"
                                        aria-hidden="true"
                                    >
                                        {service.icon}
                                    </span>
                                </div>

                                {/* Card content */}
                                <div className="flex flex-1 flex-col p-5">
                                    <h2 className="mb-3 text-lg font-bold leading-snug text-gray-900">
                                        {service.title}
                                    </h2>

                                    <p className="mb-6 flex-1 text-sm leading-6 text-gray-600">
                                        {service.description}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedService(service)
                                        }
                                        className="btn-primary w-full text-sm"
                                        aria-label={`View details for ${service.title}`}
                                    >
                                        Explore Service
                                        <span aria-hidden="true">→</span>
                                    </button>
                                </div>
                            </article>
                        ))}

                    </div>
                ) : (
                    /* Empty search state */
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                        <div className="mb-4 text-5xl" aria-hidden="true">
                            🔍
                        </div>

                        <h2 className="mb-3 text-xl font-bold text-gray-900">
                            No matching services found
                        </h2>

                        <p className="mx-auto mb-6 max-w-md text-gray-600">
                            Try another search term or select a different
                            category to explore the available services.
                        </p>

                        <button
                            type="button"
                            onClick={clearFilters}
                            className="btn-primary"
                        >
                            View All Services
                        </button>
                    </div>
                )}

                {/* Load more */}
                {displayedServices.length < filteredServices.length && (
                    <div className="mt-10 text-center">
                        <button
                            type="button"
                            onClick={() =>
                                setVisibleCount((count) => count + 8)
                            }
                            className="btn-secondary"
                        >
                            Load More Services
                        </button>
                    </div>
                )}

                {/* Service details dialog */}
                {selectedService && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-950/60 p-4"
                        onMouseDown={(event) => {
                            if (event.target === event.currentTarget) {
                                setSelectedService(null);
                            }
                        }}
                    >
                        <section
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="service-dialog-title"
                            className="my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
                        >
                            <div className="flex items-start justify-between gap-4 border-b border-gray-100 p-5 sm:p-6">
                                <div>
                                    <span className="mb-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                                        {selectedService.category}
                                    </span>

                                    <h2
                                        id="service-dialog-title"
                                        className="text-2xl font-bold text-gray-900"
                                    >
                                        {selectedService.title}
                                    </h2>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedService(null)}
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-700 hover:bg-gray-200"
                                    aria-label="Close service details"
                                    autoFocus
                                >
                                    ×
                                </button>
                            </div>

                            <div className="p-5 sm:p-6">
                                <div className="mb-6 flex items-center gap-4 rounded-xl bg-emerald-50 p-4">
                                    <span
                                        className="text-4xl"
                                        aria-hidden="true"
                                    >
                                        {selectedService.icon}
                                    </span>

                                    <p className="text-sm leading-6 text-emerald-950">
                                        {selectedService.description}
                                    </p>
                                </div>

                                <h3 className="mb-3 text-lg font-bold text-gray-900">
                                    About This Service
                                </h3>

                                <p className="mb-6 leading-7 text-gray-600">
                                    {selectedService.details}
                                </p>

                                <p className="mb-6 text-sm leading-6 text-gray-500">
                                    Service availability, pricing, and
                                    provider details must be confirmed
                                    directly with AgriLink or the relevant
                                    service provider.
                                </p>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedService(null)
                                        }
                                        className="btn-secondary w-full"
                                    >
                                        Back to Services
                                    </button>

                                    <a
                                        href="contact.html"
                                        className="btn-primary w-full"
                                    >
                                        Contact AgriLink
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

            </div>
        </section>
    );
};

// Expose the component for the services page entry point.
window.ServicesList = ServicesList;
