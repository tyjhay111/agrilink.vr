const Hero = () => {
    // In a real app, you'd fetch this. For now, we'll use the known URL.
    const heroImageUrl = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80";

    return (
        <section className="relative bg-white pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 overflow-hidden" data-name="hero" data-file="components/Hero.js">
            {/* Animated Blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200 rounded-full opacity-50 -translate-x-1/4 -translate-y-1/4 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full opacity-40 translate-x-1/4 translate-y-1/4 animate-blob animation-delay-3000"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-dark)] leading-tight mb-6 animate-slide-in-left">
                            Smart Digital Bridge for <span className="text-[var(--primary-color)]">Ghana's Farmers</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[var(--text-light)] max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-in-left animation-delay-300">
                            AgriLink revolutionizes agricultural commerce by connecting farmers directly to markets through AI-powered intelligence and accessible technology.
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4 animate-slide-in-left animation-delay-600">
                            <a href="features.html" className="btn-primary">Explore Features</a>
                            <a href="partner.html" className="btn-secondary">Partner With Us</a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative animate-slide-in-right">
                        <div className="aspect-w-4 aspect-h-3">
                            <img 
                                src={heroImageUrl} 
                                alt="Ghanaian farmers working in a lush field" 
                                className="rounded-2xl shadow-2xl object-cover w-full h-full animate-float"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};