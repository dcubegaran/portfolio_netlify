"use client";
import React from 'react';
import { Audiowide } from 'next/font/google';
import { Roboto } from 'next/font/google';
const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export default function Projects() {
  const projects = [
    {
      title: "Fire Shield",
      description: "A Mobile Application, Fire servicing solution with React Native",
      link: "https://github.com/dcubegaran/FireServicing"
    },
    {
      title: "Timesheet",
      description: "Backend API for Timesheet Management System using Flask",
      link: "https://github.com/dcubegaran/Timesheet"
    },
    {
      title: "Calculator",
      description: "A Calculator app using Python and Tkinter",
      link: "https://github.com/dcubegaran/Python-Project"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-section">
      <div className="container">
        <h2 className={`${audiowide.className} text-center display-4 mb-5`}
        style={{ fontWeight: 'bold',color: '#eb0a64', }}>Projects</h2>
        <div className="row justify-content-center g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="custom-card h-100 d-flex flex-column hover-scale">
                <div className="flex-grow-1">
                  <h3 className="h4 mb-3">{project.title}</h3>
                  <p className="text-light opacity-75 mb-4">{project.description}</p>
                </div>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    className="text-primary-color text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-8 text-center">
            <p className={`${roboto.className} lead mb-4`}
            style={{ fontWeight: 'bold'}}>Want to see more of my work?</p>
            <a
              href="https://github.com/dcubegaran"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-custom hover-scale "
              style={{ fontWeight: 'bold', backgroundColor: '#eb0a64'}} >
              <i className="fab fa-github me-2"></i>
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
