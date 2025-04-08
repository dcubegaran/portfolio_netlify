// Contact.js
"use client";
import React, { useState } from 'react';
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mqapgbjg", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      if (response.ok) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className={`${audiowide.className} text-center display-4 mb-5`}
          style={{ fontWeight: 'bold', color: '#eb0a64' }}>
          Contact Me
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form className="custom-card p-4" onSubmit={handleSendMessage}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control custom-input"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-control custom-input"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="form-control custom-input"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-custom w-100 hover-scale"
                style={{ fontWeight: 'bold', backgroundColor: '#eb0a64', color: 'white' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Your social icons section remains the same */}
          </div>
        </div>
      </div>
    </section>
  );
}
