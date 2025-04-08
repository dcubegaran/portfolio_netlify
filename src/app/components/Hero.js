"use client";
import React from 'react';
import { Rubik_Glitch } from 'next/font/google';
import { Audiowide } from 'next/font/google';
import {Roboto} from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});
const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});
// Define the font
const rubikGlitch = Rubik_Glitch({
  subsets: ['latin'], // Specify the character subset
  weight: '400',      // Rubik Glitch only supports 400
});
export default function Hero() {
  return (
    <section id="home" className="hero-bg">
    <div className="glowPulse"></div>

      <div className="hero-content">
        <h1 className="hero-title animate-float">
          <span className={`${rubikGlitch.className} text-primary-color  `}
          style={{ fontSize: '70px',
          WebkitTextStroke: '0.3px black'}}>Developer</span>
        </h1>
        <p className={`${audiowide.className} display-6 mb-5 animate-fadeIn `}
           style={{ fontSize: '25px',
           fontFamily:'',}}>
          Turning Ideas into Reality
        </p>
        <a
          href="https://drive.google.com/file/d/1-Z7iOEfgq_Iz8w468NzSPpVh9hZwXEIw/view?usp=drive_link"
          download
          className={`${roboto.className} animate-fadeIn `}
          style={{ textDecoration: "none" ,
                  backgroundColor: "#c3195d",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "rgb(255, 255, 255)",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "50px",
                  transition: "background-color 0.3s ease",
      }}
        >
          Resume
        </a>
      </div>
      <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
        <div className="rounded-circle animate-pulse"
             style={{
               width: '250px',
               height: '250px',
               filter: 'blur(50px)',
               opacity: '0.6',
               backgroundColor: '#a11550',
             }}>
        </div>
      </div>
    </section>
  );
}
