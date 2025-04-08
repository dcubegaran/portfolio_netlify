"use client";
import React from 'react';
import { Audiowide } from 'next/font/google';
const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  style: 'normal'
});

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="navbar navbar-expand-md fixed-top" style={{ backgroundColor: 'var(--dark-bg)' }}>
      <div className="container">
        <div className="d-flex align-items-center">
          <a
            href="https://www.linkedin.com/in/devadharani-d-dcube"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link me-3 text-light"
          >
            <i className="fab fa-linkedin fs-4"></i>
          </a>
          <a
            href="mailto:2003devadharani@gmail.com"
            className="nav-link me-3 text-light"
          >
            <i className="fas fa-envelope fs-4"></i>
          </a>
          <a
            href="https://github.com/dcubegaran"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link me-3 text-light"
          >
            <i className="fab fa-github fs-4"></i>
          </a>
        </div>

        <button
          className="navbar-toggler text-light border-0"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} fs-4`}></i>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className={`${audiowide.className} nav-link  px-3 nav-button`}
              style={{ fontWeight: 'bold',color: '#a10d48'}}
              >Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className={`${audiowide.className} nav-link  px-3 nav-button`}
              style={{ fontWeight: 'bold',color: '#a10d48'}}>About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className={`${audiowide.className} nav-link  px-3 nav-button`}
              style={{ fontWeight: 'bold',color: '#a10d48'}}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#experience" className={`${audiowide.className} nav-link  px-3 nav-button`}
              style={{ fontWeight: 'bold',color: '#a10d48'}}>Experience</a>
            </li>
            <li className="nav-item">
              <a href="#education" className={`${audiowide.className} nav-link  px-3 nav-button`}
              style={{ fontWeight: 'bold',color: '#a10d48'}}>Education</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className={`${audiowide.className} nav-link  px-3 nav-button`}
              style={{ fontWeight: 'bold',color: '#a10d48'}}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className={`${audiowide.className} nav-link  px-3 nav-button`}
              style={{ fontWeight: 'bold',color: '#a10d48'}}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
