const Header = () => {
    const [isSolid, setIsSolid] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState('');
    const menuRef = React.useRef(null);
    const navLinks = [
        { href: 'index.html', text: 'Home' },
        { href: 'features.html', text: 'Features' },
        { href: 'impact.html', text: 'Impact' },
        { href: 'about.html', text: 'About' },
        { href: 'blog.html', text: 'Blog' },
    ];

    // Detect current page by filename
    React.useEffect(() => {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        setCurrentPage(path);
    }, []);

    // Throttled scroll listener for header background
    React.useEffect(() => {
        let t = null;
        const handleScroll = () => {
            if (t) return;
            t = setTimeout(() => {
                setIsSolid(window.scrollY > 50);
                clearTimeout(t);
                t = null;
            }, 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (t) clearTimeout(t);
        };
    }, []);

    // Accessibility: close menu on Escape
    React.useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    // Accessibility: close menu on outside click
    React.useEffect(() => {
        const onPointer = (e) => {
            if (!isMenuOpen) return;
            if (menuRef.current && !menuRef.current.contains(e.target)) setIsMenuOpen(false);
        };
        document.addEventListener('pointerdown', onPointer);
        return () => document.removeEventListener('pointerdown', onPointer);
    }, [isMenuOpen]);

    return (
        <header
            className={`sticky top-0 z-40 transition-all duration-300 ${isSolid ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
            data-name="header"
            data-file="components/Header.js"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="index.html" className="flex items-center space-x-2">
                        <img
                            src="images/agrlink.jpg"
                            alt="AgriLink Logo"
                            loading="lazy"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <span className="text-2xl font-bold text-[var(--text-dark)]">AgriLink</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6" aria-label="Primary navigation">
                        {navLinks.map((link) => {
                            const isActive = currentPage === link.href;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`pb-1 ${
                                        isActive
                                            ? 'text-[var(--primary-color)] font-semibold border-b-2 border-[var(--primary-color)]'
                                            : 'text-gray-600 hover:text-[var(--primary-color)] font-medium transition-colors'
                                    }`}
                                >
                                    {link.text}
                                </a>
                            );
                        })}
                        <a href="partner.html" className={`btn-secondary !px-4 !py-2 ${currentPage === 'partner.html' ? 'bg-emerald-50' : ''}`}>Partner With Us</a>
                    </nav>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button aria-label="Toggle menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((s) => !s)} className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div ref={menuRef} className={`md:hidden fixed top-20 right-4 z-50 w-64 bg-white shadow-lg rounded-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`} role="dialog" aria-modal="true">
                <nav className="flex flex-col p-4 space-y-2" aria-label="Mobile navigation">
                    {navLinks.map((link) => {
                        const isActive = currentPage === link.href;
                        return (
                            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={`block rounded-md px-3 py-2 text-base font-medium ${isActive ? 'text-[var(--primary-color)] bg-emerald-50' : 'text-gray-700 hover:text-[var(--primary-color)] hover:bg-gray-50'}`}>
                                {link.text}
                            </a>
                        );
                    })}
                    <a href="partner.html" onClick={() => setIsMenuOpen(false)} className="mt-2 btn-primary w-full text-center">Partner With Us</a>
                </nav>
            </div>
        </header>
    );
};

