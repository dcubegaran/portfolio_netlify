"use client";
import React from 'react';
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
  style: 'normal'
});

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-section">
      <div className="container">
        <h2 className={`${audiowide.className} text-center display-4 mb-5`}
        style={{ fontWeight: 'bold',color: '#eb0a64' }}>About Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mb-5">
              <h3 className={`${audiowide.className} h2 mb-4`}
              style={{ fontWeight: 'bold',color: '#f8bdd5',
               }}>WHO AM I ?</h3>
              <p className={`${roboto.className} lead mb-4`}>
                Hi <strong className={`${audiowide.className} text-primary-color`}>I'm Devadharani</strong> I am an enthusiastic 
                and detail-oriented developer 
                with hands-on experience in both
                 front-end and back-end technologies.
                  Passionate about crafting user-friendly, 
                  high-performance web and mobile applications, 
                  I specialize in Python with Flask, for backend services.
                   My expertise extends to database management with PostgreSQL, 
                   ensuring efficient data handling and system scalability.
              </p>
            </div>

            <div className="mb-5">
              <h3 className={`${audiowide.className} h2 mb-4`}
              style={{ fontWeight: 'bold',color: '#f8bdd5',
               }}>MY JOURNEY</h3>
              <p className={`${roboto.className} lead mb-4`}>
                I started my journey in the tech world with a keen interest in
                coding and software development. Over the years, I have honed my
                skills in various programming languages and frameworks. My
                expertise spans across:
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-code text-primary-color me-2"></i>
                  Front-End Development: HTML, CSS, JavaScript
                </li>
                <li className="mb-3">
                  <i className="fas fa-server text-primary-color me-2"></i>
                  Back-End Development: Python
                </li>
                <li className="mb-3">
                  <i className="fas fa-database text-primary-color me-2"></i>
                  Database Management: PostgreSQL, MYSQL
                </li>
                <li className="mb-3">
                  <i className="fas fa-mobile-alt text-primary-color me-2"></i>
                  Mobile App Development: React Native
                </li>
                <li className="mb-3">
                  <i className="fa-solid fa-laptop-code text-primary-color me-2"></i>
                  Framework: Flask, Selenium, Playwright
                </li>
                <li className="mb-3">
                  <i className="fa-solid fa-bug text-primary-color me-2"></i>
                  Testing: Mannual Testing, Automation Testing, API Testing
                </li>
              </ul>
            </div>

            <div>
              <h3 className={`${audiowide.className} h2 mb-4`}
              style={{ fontWeight: 'bold',color: '#f8bdd5',
               }}>WHAT I DO</h3>
              <p className={`${roboto.className} lead mb-4`}>
              I enjoy working on diverse projects, 
              from developing robust backend logic to creating intuitive front-end interfaces.
               Along with manual and automation testing, 
               I focus on delivering high-quality, 
               scalable solutions that ensure reliability and a seamless user experience.
              </p>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="custom-card hover-scale">
                    <i className="fas fa-lightbulb text-primary-color fs-3 mb-3"></i>
                    <h4 style={{ fontWeight: 'bold' }}>Problem-Solving</h4>
                    <p>I love tackling complex problems and finding innovative solutions.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="custom-card hover-scale">
                    <i className="fas fa-search text-primary-color fs-3 mb-3"></i>
                    <h4 style={{ fontWeight: 'bold' }}>Attention to Detail</h4>
                    <p>Ensuring the highest level of accuracy and quality in every project.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="custom-card hover-scale">
                    <i className="fas fa-users text-primary-color fs-3 mb-3"></i>
                    <h4 style={{ fontWeight: 'bold' }}>Collaboration</h4>
                    <p>I thrive in team environments and believe in strong collaboration.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="custom-card hover-scale">
                    <i className="fas fa-book text-primary-color fs-3 mb-3"></i>
                    <h4 style={{ fontWeight: 'bold' }}>Continuous Learning</h4>
                    <p>Staying updated with the latest technologies and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
