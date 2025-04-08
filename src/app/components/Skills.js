"use client";
import React from 'react';
import { Audiowide } from 'next/font/google';
const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export default function Skills() {
  const skills = [
    { icon: "fas fa-mobile-alt", name: "React Native" },
    { icon: "fas fa-database", name: "PostgreSQL" },
    { icon: "fa-solid fa-bug", name: "Selenium" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fab fa-html5", name: "HTML5" },
    { icon: "fab fa-css3-alt", name: "CSS" },
    { icon: "fab fa-git-alt", name: "Git" }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className={`${audiowide.className} text-center display-4 mb-5`}
              style={{ fontWeight: 'bold',color: '#eb0a64',
               }}>Skills</h2>
        <div className="row justify-content-center g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="custom-card text-center hover-scale h-100">
                <i className={`${skill.icon} text-primary-color fs-1 mb-3`}></i>
                <p className="mb-0 fs-5">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center">
              <h3 className={`${audiowide.className} h4 mb-4`}
              style={{ fontWeight: 'bold',color: '#f8bdd5',
               }}>Additional Technical Skills</h3>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <span className="badge bg-dark-section py-2 px-3 fs-6">Flask</span>
                <span className="badge bg-dark-section py-2 px-3 fs-6">Javascript</span>
                <span className="badge bg-dark-section py-2 px-3 fs-6">Postman</span>
                <span className="badge bg-dark-section py-2 px-3 fs-6">Swagger</span>
                <span className="badge bg-dark-section py-2 px-3 fs-6">Automation Testing</span>
                <span className="badge bg-dark-section py-2 px-3 fs-6">REST APIs</span>
                <span className="badge bg-dark-section py-2 px-3 fs-6">Bootstrap</span>
                <span className="badge bg-dark-section py-2 px-3 fs-6">Mannual Testing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
