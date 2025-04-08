"use client";
import React from 'react';

export default function Animations() {
  return (
    <style jsx global>{`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fadeIn {
        animation: fadeIn 1s ease-in;
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      .animate-pulse {
        animation: pulse 3s infinite;
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      .animate-float {
        animation: float 5s ease-in-out infinite;
      }
      .transform-3d {
        transform-style: preserve-3d;
        perspective: 1000px;
      }
      .rotate-3d {
        transition: transform 0.5s;
      }
      .rotate-3d:hover {
        transform: rotateY(10deg) rotateX(10deg);
      }
    `}</style>
  );
}
