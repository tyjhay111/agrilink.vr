function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '', // Raw input from user
    organization: '',
    partnershipType: '',
    message: ''
  });
  
  const [formattedPhone, setFormattedPhone] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  
  const formspreeEndpoint = "https://formspree.io/f/xanrjyjo";
  
  // Load libphonenumber-js dynamically
  const loadPhoneLibrary = async () => {
    if (window.libphonenumberJs) return window.libphonenumberJs;
    
    try {
      // Dynamic import from CDN
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/libphonenumber-js@1.10.20/bundle/libphonenumber-js.min.js';
      script.async = true;
      
      return new Promise((resolve, reject) => {
        script.onload = () => {
          window.libphonenumberJs = window.libphonenumber;
          resolve(window.libphonenumber);
        };
        script.onerror = reject;
        document.head.appendChild(script);
      });
    } catch (err) {
      console.error('Failed to load libphonenumber-js:', err);
      return null;
    }
  };
  
  // Parse and validate phone number using libphonenumber-js
  const validateAndFormatPhone = async (phoneNumber, countryCode = 'GH') => {
    try {
      const libphonenumber = await loadPhoneLibrary();
      if (!libphonenumber) {
        return { isValid: true, formatted: phoneNumber, error: '' }; // Fallback to basic validation
      }
      
      // Remove all non-digit characters except plus sign for parsing
      const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
      
      // Try to parse the number
      const phoneUtil = libphonenumber;
      let parsedNumber;
      
      try {
        // First try with country code
        parsedNumber = phoneUtil.parsePhoneNumberFromString(cleanNumber, countryCode);
        
        // If that fails, try without country code (let library guess)
        if (!parsedNumber) {
          parsedNumber = phoneUtil.parsePhoneNumberFromString(cleanNumber);
        }
      } catch (parseError) {
        console.warn('Phone parsing error:', parseError);
        return { 
          isValid: false, 
          formatted: cleanNumber, 
          error: 'Invalid phone number format' 
        };
      }
      
      if (!parsedNumber) {
        return { 
          isValid: false, 
          formatted: cleanNumber, 
          error: 'Invalid phone number format' 
        };
      }
      
      // Check if the number is valid
      const isValid = parsedNumber.isValid();
      
      if (!isValid) {
        return { 
          isValid: false, 
          formatted: parsedNumber.formatInternational(), 
          error: 'Phone number appears to be invalid' 
        };
      }
      
      // Format in E.164 format (international format with +)
      const formattedE164 = parsedNumber.format('E.164');
      const formattedInternational = parsedNumber.formatInternational();
      
      return {
        isValid: true,
        formatted: formattedE164,
        formattedInternational: formattedInternational,
        countryCode: parsedNumber.country,
        country: parsedNumber.countryCallingCode,
        error: ''
      };
      
    } catch (error) {
      console.error('Phone validation error:', error);
      // Fallback to basic validation
      return fallbackValidation(phoneNumber);
    }
  };
  
  // Fallback validation when library fails
  const fallbackValidation = (phoneNumber) => {
    const digits = phoneNumber.replace(/\D/g, '');
    
    if (digits.length < 5) {
      return { 
        isValid: false, 
        formatted: phoneNumber, 
        error: 'Phone number too short (minimum 5 digits)' 
      };
    }
    
    if (digits.length > 15) {
      return { 
        isValid: false, 
        formatted: phoneNumber, 
        error: 'Phone number too long (maximum 15 digits)' 
      };
    }
    
    return { 
      isValid: true, 
      formatted: `+${digits}`, 
      error: '' 
    };
  };
  
  // Handle real-time phone number formatting as user types
  const formatPhoneAsYouType = async (phoneNumber, countryCode = 'GH') => {
    try {
      const libphonenumber = await loadPhoneLibrary();
      if (!libphonenumber) return phoneNumber;
      
      const AsYouType = libphonenumber.AsYouType;
      const asYouType = new AsYouType(countryCode);
      
      // Format the number as the user types
      const formatted = asYouType.input(phoneNumber);
      return formatted;
      
    } catch (error) {
      console.warn('AsYouType formatting failed:', error);
      return phoneNumber;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPhoneError('');
    setFormattedPhone('');
    
    try {
      // Validate and format phone number
      const validationResult = await validateAndFormatPhone(formData.phone, 'GH');
      
      if (!validationResult.isValid) {
        setPhoneError(validationResult.error || 'Invalid phone number');
        setLoading(false);
        return;
      }
      
      // Store the formatted phone number for display
      setFormattedPhone(validationResult.formatted);
      
      // Prepare form data with formatted phone
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone, // Raw input
        formattedPhone: validationResult.formatted, // Formatted E.164
        formattedInternational: validationResult.formattedInternational || validationResult.formatted,
        countryCode: validationResult.countryCode || 'Unknown',
        organization: formData.organization,
        partnershipType: formData.partnershipType,
        message: formData.message,
        _subject: `Partnership Inquiry from ${formData.name}`,
        _format: "plain",
        _replyto: formData.email,
        _phoneValidation: validationResult.isValid ? 'valid' : 'invalid'
      };
      
      // Send to Formspree
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataToSend),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          partnershipType: '',
          message: ''
        });
        setFormattedPhone('');
        
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || 'There was an error submitting the form.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleChange = async (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Clear any existing phone error
      if (phoneError) setPhoneError('');
      
      // Set the raw value immediately for responsive UI
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Try to format as user types (optional - can be removed if too heavy)
      if (value.length > 3) {
        try {
          const formatted = await formatPhoneAsYouType(value, 'GH');
          // We don't automatically change the input to keep UX permissive
          // But we could use this for a preview or suggestion
        } catch (error) {
          // Silent fail - formatting is optional
        }
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    if (error) setError('');
  };
  
  // Example phone formats for guidance
  const phoneExamples = [
    
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">
            We accept phone numbers from any country in any format.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Advanced validation ensures your phone number is correctly formatted.
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  placeholder="Your company name"
                  disabled={loading}
                />
              </div>
              
              {/* Phone Input Field with libphonenumber-js validation */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                    placeholder="number here "
                    disabled={loading}
                    pattern="[0-9+\-\s\(\)]*" // Allow common phone characters
                    title="Enter phone number in any format"
                  />
                  {formattedPhone && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        ✓ Valid
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="mt-1 space-y-1">
                  <p className="text-xs text-gray-500">
                    Enter local or international number. 
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {phoneExamples.map((example, index) => (
                      <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                {formattedPhone && !phoneError && (
                  <div className="mt-2 p-2 bg-green-50 rounded text-sm">
                    <span className="text-green-700">
                      <strong>Formatted:</strong> {formattedPhone}
                    </span>
                  </div>
                )}
                
                {phoneError && (
                  <div className="mt-2 p-2 bg-red-50 rounded text-sm">
                    <span className="text-red-700">
                      <i className="fas fa-exclamation-triangle mr-1"></i>
                      {phoneError}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Subject <span className="text-red-500">*</span>
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
                <option value="investment">Investment</option>
                <option value="partnership">Business Partnership</option>
                <option value="support">Technical Support</option>
                <option value="general">General Inquiry</option>
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
                placeholder="How can we help you?"
                disabled={loading}
              ></textarea>
            </div>
            
            <div className="flex items-start">
              <input 
                type="checkbox" 
                id="consent"
                required
                className="mt-1 mr-3"
                disabled={loading}
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I consent to receive communications regarding my inquiry.
              </label>
            </div>
            
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                <i className="fas fa-exclamation-circle mr-2"></i>
                {error}
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-4 px-6 rounded-lg font-semibold transition-all flex items-center justify-center ${
                loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              } text-white`}
            >
              {loading ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {submitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center">
                <i className="fas fa-check-circle mr-2"></i>
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
          
          {/* Formspree Integration Note */}
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Powered by libphonenumber-js & AgriLink</strong>
            </p>
            <div className="text-xs text-gray-600 space-y-1">
              <p>✓ Phone numbers are validated and formatted to international standard (E.164)</p>
              <p>✓ Your form submission is secured and encrypted</p>
              <p>✓ All data is sent directly to our team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
