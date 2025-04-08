"use client";
import React from 'react';
import { Audiowide } from 'next/font/google';
const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-dark-section">
      <div className="container">
        <h2 className={`${audiowide.className} text-center display-4 mb-5`}
              style={{ fontWeight: 'bold',color: '#eb0a64',
               }}>Work Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Project Experience */}
            <div className="custom-card hover-scale mb-5">
              <div className="d-flex flex-column gap-3">
                <div>
                  <h3 className="h4 mb-2">Full Time - Backend Developer</h3>
                  <p className="text-primary-color fs-5 mb-3">
                    TechGenzi Private Limited | Coimbatore | Sept(2024) - Present
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-code text-primary-color me-2"></i>
                      Worked on backend development for CMS, TMS, HRM, and Timesheet Management projects.
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-code text-primary-color me-2"></i>
                      Built RESTful APIs using Python and Flask.
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-code text-primary-color me-2"></i>
                      Designed and managed databases with PostgreSQL and SQLAlchemy.
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-bug text-primary-color me-2"></i>
                      Performed manual testing for the CRM system.
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-bug text-primary-color me-2"></i>
                      Learned automation testing using Python scripts.
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-bug text-primary-color me-2"></i>
                      Used Postman and Swagger for API testing.
                    </li>

                  </ul>
                </div>
              </div>
            </div>
                </div>
              </div>
            </div>
    </section>
  );
}
