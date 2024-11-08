import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
    <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
    <p className="text-lg text-center mb-12">
      Have any questions or feedback? We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
    </p>
    
    <div className="max-w-3xl mx-auto">
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Your Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              style={{ backgroundColor: "hsl(var(--card))", color: "hsl(var(--card-foreground))", borderColor: "hsl(var(--border))" }}
              placeholder="Enter your name"
            />
          </div>
        </div>
  
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <div className="mt-1">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              style={{ backgroundColor: "hsl(var(--card))", color: "hsl(var(--card-foreground))", borderColor: "hsl(var(--border))" }}
              placeholder="Enter your email"
            />
          </div>
        </div>
  
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Your Message
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              style={{ backgroundColor: "hsl(var(--card))", color: "hsl(var(--card-foreground))", borderColor: "hsl(var(--border))" }}
              placeholder="Write your message here"
            />
          </div>
        </div>
  
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 rounded-md transition duration-300"
            style={{ backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default Contact;
