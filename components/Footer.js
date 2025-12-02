function Footer() {
  // Add state for subscription functionality
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  
  // Formspree subscription endpoint
  const subscriptionEndpoint = "https://formspree.io/f/manrjybo";
  const gmailAddress = "agrilink.ai.gh@gmail.com";
  
  // Handle subscription with Formspree
  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setError('');
    
    if (!email.trim() || !validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch(subscriptionEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          formType: 'newsletter_subscription',
          _subject: 'New Newsletter Subscription: AgriLink Updates',
          _format: "plain",
          timestamp: new Date().toISOString(),
          source: 'Website Footer Subscription',
          subscription: 'true'
        }),
      });
      
      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        
        // Reset subscription status after 5 seconds
        setTimeout(() => {
          setIsSubscribed(false);
        }, 5000);
      } else {
        const data = await response.json();
        setError(data.error || 'There was an error with your subscription. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  // Handle contact click
  const handleContactClick = () => {
    const contactBody = "Hello AgriLink team,\n\nI would like to get in touch regarding: \n\n[Please enter your message here]\n\nBest regards,\n[Your Name]";
    const contactLink = `mailto:${gmailAddress}?subject=${encodeURIComponent('Contact from AgriLink Website')}&body=${encodeURIComponent(contactBody)}`;
    window.location.href = contactLink;
  };
  
  // Detect if we're on the blog page (for search functionality)
  const [isBlogPage, setIsBlogPage] = React.useState(false);
  
  React.useEffect(() => {
    const pathname = window.location.pathname || '';
    const href = window.location.href || '';
    const title = document.title || '';
    
    const checkIfBlogPage = () => {
      return (
        pathname.includes('blog') || 
        href.includes('blog') ||
        title.toLowerCase().includes('blog')
      );
    };
    
    setIsBlogPage(checkIfBlogPage());
  }, []);

  try {
    return (
      <footer className="bg-gray-900 text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subscription Section - Shows on all pages */}
          <div className="mb-12 bg-gray-800 rounded-xl p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-2">Stay Updated with AgriLink</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to get the latest agricultural insights, market trends, and AgriLink updates directly to your inbox
              </p>
              
              <form onSubmit={handleSubscribe} className="w-full">
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
                  <div className="flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 text-base rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className={`px-6 py-3 bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap flex items-center justify-center min-h-[48px] ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing...
                      </div>
                    ) : isSubscribed ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="M20 6 9 17l-5-5"/>
                        </svg>
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="m4 6 8 4 8-4"/>
                          <path d="M20 10v6"/>
                          <path d="M4 10v10l8 4 8-4V10"/>
                        </svg>
                        Subscribe
                      </>
                    )}
                  </button>
                </div>
                
                {/* Error message */}
                {error && (
                  <div className="mt-3 p-3 bg-red-900/30 border border-red-700 text-red-300 rounded-lg text-sm">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      {error}
                    </div>
                  </div>
                )}
                
                {/* Success message */}
                {isSubscribed && (
                  <div className="mt-3 p-3 bg-green-900/30 border border-green-700 text-green-300 rounded-lg text-sm">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      Success! You've been subscribed to AgriLink updates. Check your email for confirmation.
                    </div>
                  </div>
                )}
              </form>
              
              <p className="mt-4 text-gray-400 text-sm">
                We respect your privacy. Unsubscribe at any time. Powered by agriLink.
              </p>
            </div>
          </div>

          {/* Search Bar Section - ONLY SHOWS ON BLOG PAGE */}
          {isBlogPage && (
            <div className="mb-12">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-center mb-4">Search Blog Articles</h3>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Search blog articles, topics, or keywords..."
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button 
                    type="button"
                    className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 whitespace-nowrap flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Search Blog
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="images/agrlink200.png"
                  loading="lazy"
                  alt="AgriLink Logo"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <span className="text-2xl font-bold">AgriLink</span>
              </div>
              <p className="text-gray-400 mb-4">
                Smart Digital Bridge for Ghana's Farmers
              </p>
              <p className="text-gray-400 text-sm">
                Digitizing Agriculture, Together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="index.html" className="hover:text-green-400 transition-colors block py-1">Home</a></li>
                <li><a href="features.html" className="hover:text-green-400 transition-colors block py-1">Features</a></li>
                <li><a href="impact.html" className="hover:text-green-400 transition-colors block py-1">Impact</a></li>
                <li><a href="about.html" className="hover:text-green-400 transition-colors block py-1">About</a></li>
                <li><a href="blog.html" className="hover:text-green-400 transition-colors block py-1">Blog</a></li>
              </ul>
            </div>

            {/* Support & Resources */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li>
                  <button 
                    onClick={handleContactClick}
                    className="hover:text-green-400 transition-colors block py-1 text-left w-full"
                  >
                    Contact Us
                  </button>
                </li>
                <li><a href="partner.html" className="hover:text-green-400 transition-colors block py-1">Partner With Us</a></li>
              </ul>
              
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors block py-1">Help Center</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors block py-1">FAQs</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors block py-1">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors block py-1">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mt-1 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Volta Region, Ho, Ghana</span>
                </li>
                <li className="flex items-start">
             <svg className="w-4 h-4 mt-1 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
             </svg>
             <div className="flex flex-col">
             <a href="tel:+233542067945" className="hover:text-green-400 transition-colors hover:underline">
               +233 54 206 7945
                    </a>
                    <span className="text-gray-500 text-sm mt-1"></span>
                  <a href="tel:+233592671403" className="hover:text-green-400 transition-colors hover:underline">
                    +233 59 267 1403
                  </a>
                  </div>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a 
                    href={`mailto:${gmailAddress}?subject=Inquiry from AgriLink Website`}
                    className="hover:text-green-400 transition-colors"
                  >
                    {gmailAddress}
                  </a>
                </li>
              </ul>

              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/profile.php?id=61583512637183" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="https://x.com/AgrilinkA58702" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/agrilink-ai-707774396/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <path d="M2 17h4v4H2z"/>
                    <path d="M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/agrilink.ai.gh/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AgriLink. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Contact us at: <a href={`mailto:${gmailAddress}`} className="text-green-400 hover:underline">{gmailAddress}</a>
            </p>
            <p className="mt-2 text-xs text-gray-500">
              
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}