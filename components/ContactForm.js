function ContactForm() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      organization: '',
      partnershipType: '',
      message: ''
    });
    const [submitted, setSubmitted] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    // Your Formspree endpoint
    const formspreeEndpoint = "https://formspree.io/f/xanrjyjo";

    // Formspree submission handler
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            organization: formData.organization,
            partnershipType: formData.partnershipType,
            message: formData.message,
            _subject: `Partnership Inquiry: ${formData.partnershipType}`,
            _format: "plain"
          }),
        });
        
        if (response.ok) {
          setSubmitted(true);
          setFormData({
            name: '',
            email: '',
            organization: '',
            partnershipType: '',
            message: ''
          });
          
          // Reset form after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        } else {
          const data = await response.json();
          setError(data.error || 'There was an error submitting the form. Please try again.');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setError('Network error. Please check your connection and try again.');
      } finally {
        setLoading(false);
      }
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
      // Clear any previous errors when user starts typing
      if (error) setError('');
    };

    return (
      <section className="py-20 bg-gray-50" data-name="contact-form" data-file="components/ContactForm.js">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to partner with AgriLink? Fill out the form below and we'll get back to you soon.
            </p>
            <p className="mt-2 text-gray-500 text-sm">
              For quick inquiries, email us at <a href="mailto:agrilink.ai.gh@gmail.com" className="text-green-600 hover:underline">agrilink.ai.gh@gmail.com</a>
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                    placeholder="John Doe"
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                    placeholder="john@example.com"
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Organization / Company
                </label>
                <input 
                  type="text" 
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Your company name (if applicable)"
                  disabled={loading}
                />
              </div>
              <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    contact <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                    placeholder="123456789"
                    disabled={loading}
                  />
                </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Partnership Interest <span className="text-red-500">*</span>
                </label>
                <select 
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  required
                  disabled={loading}
                >
                  <option value="">Select an option</option>
                  <option value="investment">Investment </option>
                  <option value="distribution">Distribution Partnership</option>
                  <option value="corporate">Corporate Sponsorship</option>
                  <option value="ngo">NGO Collaboration</option>
                  <option value="government">Government Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                  placeholder="Tell us about your partnership interests, timeline, and any specific questions..."
                  disabled={loading}
                ></textarea>
              </div>
              
              {/* Formspree honeypot field (optional but recommended) */}
              <input type="text" name="_gotcha" style={{display: 'none'}} />
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="consent"
                  required
                  className="mt-1 mr-3"
                  disabled={loading}
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I consent to AgriLink collecting and storing my data from this form for partnership communication purposes. I understand I can unsubscribe at any time.
                </label>
              </div>
              
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    {error}
                  </div>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all ${loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'} text-white`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center">
                  <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    Thank you! Your message has been sent successfully. We'll get back to you within 24-48 hours.
                  </div>
                </div>
              )}
            </form>
            
            {/* Alternative contact methods */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-center">Other Ways to Connect</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a 
                  href="mailto:agrilink.ai.gh@gmail.com"
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mb-2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span className="font-medium">Email Us</span>
                  <span className="text-sm text-gray-500">agrilink.ai.gh@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+233542067945"
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mb-2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span className="font-medium">Call Us</span>
                  
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>+233 54 206 7945</li>
                    <li>+233 59 467 1403</li>
                  </ul>
                </a>
                
                <a 
                  href="https://wa.me/233542067945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mb-2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <span className="font-medium">WhatsApp</span>
                  <span className="text-sm text-gray-500">Message us directly</span>
                </a>
              </div>
            </div>
            
            {/* Formspree Integration Note */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <p className="text-sm text-blue-700">
                <strong>Powered by agrilink</strong> - Your form submission is secured and will be delivered directly to our team.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ContactForm component error:', error);
    return null;
  }
}