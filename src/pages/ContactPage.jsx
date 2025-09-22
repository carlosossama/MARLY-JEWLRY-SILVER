import React from "react";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-gray-300">
          Contact Us
        </h1>

        {/* Contact Info */}
        <div className="space-y-4 text-lg text-gray-200">
          <p>📍 <strong>Location:</strong> Madinaty East Hub, G12</p>
          <p>📧 <strong>Email:</strong> contact@marlyjewelry.com</p>
          <p>📞 <strong>Phone:</strong> +201289060777</p>
          <p>⏰ <strong>Working Hours:</strong> Everyday, 12:00 PM – 12:00 AM</p>
        </div>

        {/* Google Map */}
        <div className="mt-10 w-full h-80 rounded-xl overflow-hidden border border-white/30 shadow-lg">
          <iframe
            title="Google Map — East Hub Madinaty"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3452.765872147221!2d31.6615698!3d30.0722449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f5f34949a8c1%3A0x1e5fecb783d04feb!2sEAST%20HUB%20-%20MADINATY!5e0!3m2!1sen!2seg!4v1758472011542!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
