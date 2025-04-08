"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-4 bg-dark-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center">
              <div className="mb-4">
                <a href="#home" className="text-decoration-none text-light">
                  <i className="fas fa-arrow-up text-primary-color me-2"></i>
                  Back to Top
                </a>
              </div>
              {/* <div className="mb-4">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="text-light mx-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fs-4"></i>
                </a>
                <a
                  href="https://github.com/yourusername"
                  className="text-light mx-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fs-4"></i>
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="text-light mx-3"
                >
                  <i className="fas fa-envelope fs-4"></i>
                </a>
              </div> */}
              <p className="mb-0 text-light">
                &copy; {new Date().getFullYear()} Devadharani. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
