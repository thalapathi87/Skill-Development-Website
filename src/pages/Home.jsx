import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* =========================================================
   CUSTOM SVG ICONS
   ========================================================= */

const Icons = {
  Java: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218"/>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <circle cx="12" cy="12" r="2"/>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" opacity="0.3"/>
      <path d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zm0 2C7.306 3.5 3.5 7.306 3.5 12S7.306 20.5 12 20.5 20.5 16.694 20.5 12 16.694 3.5 12 3.5z"/>
    </svg>
  ),
  Database: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
    </svg>
  ),
  Rocket: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M13.13 22.19l-.69-3.47c-.47-2.37-2.41-4.31-4.78-4.78l-3.47-.69a1 1 0 01.15-1.98l9.95-1.55a1 1 0 011.18 1.18l-1.55 9.95a1 1 0 01-1.98.15zm-8.82-7.18A6 6 0 0113 3.68l.54 2.7c.25 1.26 1.21 2.22 2.47 2.47l2.7.54a6 6 0 01-11.31 8.69z"/>
    </svg>
  ),
  Tools: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
    </svg>
  ),
  Laptop: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5z"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  ),
  Cloud: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
    </svg>
  ),
  Award: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <circle cx="12" cy="8" r="5"/>
      <path d="M15.5 13l1.5 5-5-3-5 3 1.5-5H5v-1h14v1z"/>
    </svg>
  ),
  Quote: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
    </svg>
  ),
  Question: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  ),
  Play: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M8 5v14l11-7z"/>
    </svg>
  ),
  Graduation: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
  ),
  Code: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>
  ),
  Spring: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 01-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21z"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.248-1.827-1.66-2.782-1.688-2.799l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.96-.095 2.9-.28a12.347 12.347 0 003.316-1.246 10.644 10.644 0 002.5-2.074 11.53 11.53 0 002.11-3.93h.186c1.23 0 1.97-.485 2.382-.905.26-.266.447-.564.55-.883l.086-.29-.344-.204z"/>
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.835-.388-.23-1.163-.61-1.163-.61-.422-.174-.73-.41-.923-.71-.172-.275-.258-.588-.258-.942 0-.432.155-.795.465-1.1.31-.302.7-.453 1.168-.453.505 0 .964.115 1.377.345l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.517.07-.7.21a.697.697 0 00-.273.587c0 .32.23.61.648.833.388.23 1.163.61 1.163.61.422.174.73.41.923.71.172.276.258.59.258.944z"/>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  Postman: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"/>
    </svg>
  ),
};

/* =========================================================
   REUSABLE UI COMPONENTS WITH ANIMATIONS
   ========================================================= */

const Section = ({ id, children, bg = "bg-white", dark = false }) => (
  <section 
    id={id} 
    className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 ${bg} ${dark ? 'text-white' : 'text-slate-900'}`}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

const Badge = ({ text }) => (
  <span className="bg-gradient-to-r from-sky-500/10 to-indigo-500/10 text-sky-500 text-xs font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] mb-6 inline-block border border-sky-500/30 shadow-lg shadow-sky-500/10 animate-pulse">
    {text}
  </span>
);

/* =========================================================
   ANIMATED BACKGROUND PARTICLES
   ========================================================= */

function AnimatedParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-sky-500/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   1. HERO SECTION WITH ADVANCED ANIMATIONS
   ========================================================= */

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
     
      {/* Dynamic Gradient Orbs with Mouse Tracking */}
      <div 
        className="absolute w-[800px] h-[800px] bg-sky-600/30 blur-[200px] rounded-full transition-all duration-500 pointer-events-none"
        style={{
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
        }}
      />
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-sky-600/20 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/15 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <Badge text="🚀 Comprehensive Developer Track 2025" />
        <h1 className="text-5xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tighter animate-fade-in-up">
          Master the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 animate-gradient-x">
            Full Stack
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The ultimate engineering curriculum. Master HTML, CSS, React, and Java Spring Boot to build 
          <span className="text-sky-400 font-bold"> scalable, production-ready </span>applications.
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button className="group relative bg-gradient-to-r from-sky-500 to-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg overflow-hidden transition-all shadow-[0_20px_60px_rgba(14,165,233,0.4)] hover:shadow-[0_25px_80px_rgba(14,165,233,0.6)] hover:scale-105">
            <span className="relative z-10 flex items-center justify-center gap-2">
              GET STARTED <div className="w-4 h-4"><Icons.Play /></div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
         <Link to="/Roadmap"> <button className="group bg-white/5 border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-bold backdrop-blur-xl hover:bg-white/10 hover:border-sky-500/50 transition-all flex items-center justify-center gap-3">
            VIEW ROADMAP <div className="w-4 h-4 group-hover:translate-x-1 transition-transform"><Icons.ChevronRight /></div>
          </button></Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-500 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 text-sky-500"><Icons.Check /></div> 100% Job Oriented
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 text-sky-500"><Icons.Clock /></div> 400+ Hours Content
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 text-sky-500"><Icons.Graduation /></div> Industry Certified
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ENHANCED STATISTICS BAR
   ========================================================= */

function StatsBar() {
    const stats = [
        { label: "Students Placed", value: "12,000+", icon: Icons.Users },
        { label: "Avg Salary Hike", value: "65%", icon: Icons.Award },
        { label: "Hiring Partners", value: "450+", icon: Icons.Shield },
        { label: "Projects Built", value: "25+", icon: Icons.Rocket }
    ];
    return (
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-indigo-500/5" />
            <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {stats.map((s, i) => (
                    <div key={i} className="group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                        <div className="w-16 h-16 mx-auto text-sky-400 mb-4 group-hover:scale-110 transition-transform"><s.icon /></div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-5xl font-black mb-2">{s.value}</div>
                        <div className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* =========================================================
   2. PROFESSIONAL SKILLS WITH HOVER EFFECTS
   ========================================================= */

function ProfessionalSkills() {
  const modules = [
    {
      title: "Frontend Mastery",
      icon: Icons.Laptop,
      skills: ["HTML5 & Semantics", "Advanced CSS & Flexbox", "JavaScript ES6+", "React 18 & Hooks", "Tailwind CSS Architecture"],
      color: "from-sky-500/10 to-blue-500/10"
    },
    {
      title: "Java Backend",
      icon: Icons.Java,
      skills: ["Core Java 21", "OOPs Principles", "Spring Boot 3.x", "Spring Security & OAuth2", "Microservices & Kafka"],
      color: "from-red-500/10 to-orange-500/10"
    },
    {
      title: "Data & Persistence",
      icon: Icons.Database,
      skills: ["MySQL Database Design", "PostgreSQL", "Hibernate & JPA", "Query Optimization", "Caching with Redis"],
      color: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Cloud & Ops",
      icon: Icons.Cloud,
      skills: ["Docker Containerization", "AWS (EC2, S3, RDS)", "GitHub Actions (CI/CD)", "Monitoring with ELK", "App Deployment"],
      color: "from-orange-500/10 to-amber-500/10"
    }
  ];

  return (
    <Section bg="bg-white">
      <div className="text-center mb-20">
        <Badge text="💼 Skill Set Breakdown" />
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-4">Professional <br/>Curriculum</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">Industry-grade skills that top companies demand</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {modules.map((m, i) => (
          <div key={i} className={`group p-8 bg-gradient-to-br ${m.color} rounded-[2.5rem] border-2 border-slate-100 hover:border-sky-500 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2`}>
            <div className="w-16 h-16 text-sky-400 mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"><m.icon /></div>
            <h3 className="text-2xl font-black mb-6 border-b-2 border-slate-200 pb-4 group-hover:text-sky-600 transition-colors">{m.title}</h3>
            <ul className="space-y-4">
              {m.skills.map((skill, j) => (
                <li key={j} className="flex items-start gap-3 text-slate-700 text-xs font-bold uppercase tracking-wide group-hover:text-slate-900 transition-colors">
                  <div className="w-5 h-5 text-sky-500 flex-shrink-0 group-hover:scale-125 transition-transform"><Icons.Check /></div>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   ENHANCED WEEKLY TIMELINE WITH PROGRESS BAR
   ========================================================= */

function WeeklyTimeline() {
    const weeks = [
        { w: "Weeks 1-4", t: "Frontend Foundations", d: "HTML5, CSS3, JavaScript ES6, and UI/UX Principles.", progress: 25 },
        { w: "Weeks 5-8", t: "React & State Management", d: "Hooks, Context API, Redux Toolkit, and API Integration.", progress: 50 },
        { w: "Weeks 9-12", t: "Java & Spring Core", d: "Core Java, Multithreading, Spring Boot 3, and MySQL.", progress: 75 },
        { w: "Weeks 13-16", t: "System Design & Cloud", d: "Microservices, JWT, Docker, AWS, and Final Capstone Project.", progress: 100 }
    ];
    
    return (
        <Section bg="bg-gradient-to-b from-slate-50 to-white">
            <div className="flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/3">
                    <Badge text="📅 The Schedule" />
                    <h2 className="text-5xl font-black mb-6 leading-tight">Your 16-Week <br/>Evolution</h2>
                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">A rigorous, step-by-step program designed to transform beginners into senior-grade engineers.</p>
                    <div className="p-8 bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl border-l-4 border-sky-500 shadow-lg">
                        <div className="w-8 h-8 text-sky-500 mb-4"><Icons.Quote /></div>
                        <p className="text-sky-900 font-bold italic text-lg">"Over 400 hours of intensive coding and real-world deployment."</p>
                        <p className="text-sky-700 text-sm mt-2">— Course Director</p>
                    </div>
                </div>
                <div className="lg:w-2/3 space-y-6">
                    {weeks.map((week, i) => (
                        <div key={i} className="group flex gap-6 p-8 bg-white rounded-3xl border-2 border-slate-100 hover:border-sky-500 transition-all hover:shadow-xl hover:-translate-x-2">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform">
                                    {i + 1}
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="text-sky-600 font-black text-sm">{week.w}</div>
                                    <div className="text-sky-600 font-bold text-sm">{week.progress}%</div>
                                </div>
                                <h4 className="text-xl font-black mb-2 group-hover:text-sky-600 transition-colors">{week.t}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{week.d}</p>
                                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-1000 group-hover:animate-pulse"
                                        style={{ width: `${week.progress}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* =========================================================
   3. ANIMATED TOOLBOX
   ========================================================= */

function Toolbox() {
  const tools = [
    { n: "Spring Boot", icon: Icons.Spring, color: "text-green-500" },
    { n: "Eclipse", icon: Icons.Code, color: "text-purple-500" },
    { n: "React JS", icon: Icons.React, color: "text-cyan-500" },
    { n: "Tailwind", icon: Icons.Tailwind, color: "text-sky-500" },
    { n: "MySQL", icon: Icons.MySQL, color: "text-blue-500" },
    { n: "GitHub", icon: Icons.GitHub, color: "text-slate-500" },
    { n: "Postman", icon: Icons.Postman, color: "text-orange-500" },
    { n: "Docker", icon: Icons.Docker, color: "text-blue-600" }
  ];

  return (
    <Section bg="bg-gradient-to-b from-slate-950 to-slate-900" dark>
      <div className="text-center mb-20">
        <Badge text="🛠️ Technologies" />
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">Industrial Tooling</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Master the technologies used by engineers at world-class software companies.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {tools.map((t, i) => (
          <div key={i} className="group relative p-10 bg-white/5 border-2 border-white/10 rounded-3xl hover:bg-gradient-to-br hover:from-sky-500/20 hover:to-blue-500/20 hover:border-sky-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-sky-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-blue-500/0 group-hover:from-sky-500/10 group-hover:to-blue-500/10 rounded-3xl transition-all duration-500" />
            <div className={`relative w-20 h-20 mx-auto ${t.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 mb-6`}><t.icon /></div>
            <span className="relative block text-center font-bold text-sm tracking-wider uppercase text-slate-400 group-hover:text-white transition-colors">{t.n}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   CUSTOM CSS ANIMATIONS
   ========================================================= */

const styles = `
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes infinite-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

.animate-float {
  animation: float ease-in-out infinite;
}

.animate-infinite-scroll {
  animation: infinite-scroll 30s linear infinite;
}
`;

function Home() {
  return (
    <>
      <style>{styles}</style>
      <div className="font-sans antialiased bg-white selection:bg-sky-500 selection:text-white overflow-x-hidden">
        <HeroSection />
        
        {/* Enhanced Skill Bar */}
        <div className="py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-y border-white/10 flex overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/5 to-transparent" />
          <div className="flex gap-20 animate-infinite-scroll font-black text-slate-700 text-3xl uppercase tracking-[1em] whitespace-nowrap">
            <span className="hover:text-sky-500 transition-colors cursor-default">HTML5</span> 
            <span className="hover:text-sky-500 transition-colors cursor-default">CSS3</span> 
            <span className="hover:text-sky-500 transition-colors cursor-default">JAVASCRIPT</span> 
            <span className="hover:text-sky-500 transition-colors cursor-default">REACT</span> 
            <span className="hover:text-sky-500 transition-colors cursor-default">TAILWIND</span> 
            <span className="hover:text-sky-500 transition-colors cursor-default">JAVA</span> 
            <span className="hover:text-sky-500 transition-colors cursor-default">SPRING BOOT</span> 
            <span className="hover:text-sky-500 transition-colors cursor-default">MYSQL</span>
            <span className="hover:text-sky-500 transition-colors cursor-default">HTML5</span> 
            <span className="hover:text-sky-500 transition-colors cursor-default">CSS3</span> 
            <span className="hover:text-sky-500 transition-colors cursor-default">JAVASCRIPT</span> 
            <span className="hover:text-sky-500 transition-colors cursor-default">REACT</span>
          </div>
        </div>

        <StatsBar />
        <ProfessionalSkills />
        <WeeklyTimeline />
        <Toolbox />

        {/* ENHANCED CALL TO ACTION */}
        <Section bg="bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600" dark>
          <div className="text-center max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
            <Badge text="⚡ Limited Seats Available" />
            <h2 className="relative text-5xl md:text-7xl font-black mb-6 leading-tight">
              Ready to build your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-200">Developer Career?</span>
            </h2>
            <p className="relative text-sky-100 text-xl mb-10">Join 12,000+ successful developers who transformed their careers</p>
            <button className="relative group bg-white text-sky-600 px-16 py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-[0_30px_100px_rgba(255,255,255,0.3)] hover:scale-110 transition-all overflow-hidden">
              <span className="relative z-10">Apply for 2025 Batch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </Section>

        {/* ENHANCED FOOTER */}
        <footer className="py-24 px-8 bg-gradient-to-b from-slate-950 to-black text-slate-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-sky-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-left">
            <div className="col-span-1 md:col-span-2 text-white">
              <h4 className="font-black text-4xl mb-8 uppercase tracking-widest bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">SkillsDev.</h4>
              <p className="max-w-sm text-slate-400 leading-relaxed mb-6">The only roadmap you need to build scalable applications using the Java Full Stack ecosystem.</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-sky-500/20 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                  <div className="w-5 h-5"><Icons.GitHub /></div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-xs">Technical</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="hover:text-sky-400 transition-colors cursor-pointer">Frontend</li>
                <li className="hover:text-sky-400 transition-colors cursor-pointer">Spring Boot</li>
                <li className="hover:text-sky-400 transition-colors cursor-pointer">SQL</li>
                <li className="hover:text-sky-400 transition-colors cursor-pointer">AWS Cloud</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-xs">Legal</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="hover:text-sky-400 transition-colors cursor-pointer">Privacy</li>
                <li className="hover:text-sky-400 transition-colors cursor-pointer">Terms</li>
                <li className="hover:text-sky-400 transition-colors cursor-pointer">Refunds</li>
              </ul>
            </div>
          </div>
          <div className="relative pt-12 border-t border-white/5 text-center text-xs uppercase tracking-[0.8em] font-black text-slate-700">
            © 2025 SkillsDev Platform  
Built with a focus on clarity, consistency, and career-oriented learning.  
Created by Thalapathi.

          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;