"use client";
import React from 'react';
import { Audiowide } from 'next/font/google';
const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

function EducationItem({ degree, institution, period, location, score }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="custom-card hover-scale mb-4">
      <div 
        className="d-flex justify-content-between align-items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      >
        <h3 className="h5 mb-0">{degree}</h3>
        <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"} text-primary-color`}></i>
      </div>
      
      <div className={`mt-4 ${isOpen ? 'd-block' : 'd-none'}`}>
      <p className="mb-1"
            style={{ fontWeight: 'bold'}}>{period}</p>
       
        <p className="mb-1">{institution}</p>
        <p className="mb-0">{location}</p>
        <p className="mb-2">
          <strong className="text-primary-color"
            style={{ fontWeight: 'bold'}}>{score}</strong>
        </p>
        
      </div>
    </div>
  );
}

function EducationHub({ children }) {
  return <div className="d-flex flex-column gap-4">{children}</div>;
}

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <h2 className={`${audiowide.className} text-center display-4 mb-5`}
              style={{ fontWeight: 'bold',color: '#eb0a64',
               }}>Education</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <EducationHub>
              <EducationItem
                degree="Bachelor of Information Technology"
                institution="Saradha Gangadharan Arts and Science College"
                location="Pondicherry University, Velrampet, Puducherry"
                period="2021 - 2024"
                score="CGPA - 7.9"
              />
              <EducationItem
                degree="Higher Secondary Education"
                institution="Aditya Vidhyasharam Residential School"
                period="2020 - 2021"
                location="CBSE, Poraiyur, Puducherry"
                score="PERCENTAGE - 79%"
              />
              <EducationItem
                degree="Secondary Education"
                institution="Aditya Vidhyasharam Residential School"
                period="2018 - 2019"
                location="CBSE, Poraiyur, Puducherry"
                score="PERCENTAGE - 64%"
              />
            </EducationHub>
          </div>
        </div>
      </div>
    </section>
  );
}
