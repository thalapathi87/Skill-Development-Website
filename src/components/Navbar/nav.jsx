import { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome, IoLogoJavascript, IoChevronDown } from "react-icons/io5";
import { FaCode, FaServer, FaEnvelope, FaHtml5, FaCss3Alt, FaReact, FaJava, FaBars, FaTimes } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const frontendLinks = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, path: "/Html" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, path: "/Css" },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400" />, path: "/JavaScript" },
    { name: "React", icon: <FaReact className="text-cyan-400" />, path: "/React" },
  ];

  const backendLinks = [
    { name: "Java", icon: <FaJava className="text-red-500" />, path: "/Java" },
    { name: "Spring Boot", icon: <BiLogoSpringBoot className="text-green-500" />, path: "/springboot" },
    { name: "SQL", icon: <GrMysql className="text-blue-400" />, path: "/sql" },
  ];

  // Helper to handle clicks on mobile vs hover on desktop
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-slate-900 text-slate-100 sticky top-0 z-50 shadow-2xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-sky-400">
          <FaCode className="text-3xl" />
          <span>Skills<span className="text-white">Dev</span></span>
        </Link>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-2xl p-2 hover:bg-slate-800 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* NAVIGATION */}
        <nav className={`
          absolute md:static top-20 left-0 w-full md:w-auto
          bg-slate-900 md:bg-transparent border-t border-slate-800 md:border-none
          transition-all duration-300 ease-in-out
          ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto"}
        `}>
          <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 p-6 md:p-0">
            
            <li>
              <Link to="/" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-sky-400 transition" onClick={() => setMenuOpen(false)}>
                <IoHome /> Home
              </Link>
            </li>

            {/* DROPDOWN TEMPLATE */}
            {[
              { id: 'frontend', label: 'Frontend', icon: <FaCode />, links: frontendLinks },
              { id: 'backend', label: 'Backend', icon: <FaServer />, links: backendLinks }
            ].map((section) => (
              <li 
                key={section.id}
                className="relative"
                onMouseEnter={() => window.innerWidth > 768 && setActiveDropdown(section.id)}
                onMouseLeave={() => window.innerWidth > 768 && setActiveDropdown(null)}
              >
                <button 
                  onClick={() => toggleDropdown(section.id)}
                  className={`w-full flex items-center justify-between gap-2 px-4 py-2 rounded-lg transition ${activeDropdown === section.id ? 'bg-slate-800 text-sky-400' : 'hover:bg-slate-800 hover:text-sky-400'}`}
                >
                  <span className="flex items-center gap-2">{section.icon} {section.label}</span>
                  <IoChevronDown className={`transition-transform duration-300 ${activeDropdown === section.id ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <div className={`
                  md:absolute top-full left-0 md:pt-2 w-full md:w-52
                  transition-all duration-200
                  ${activeDropdown === section.id ? "block opacity-100 visible" : "hidden md:block md:opacity-0 md:invisible md:translate-y-2"}
                `}>
                  <ul className="bg-slate-800 md:border md:border-slate-700 rounded-xl overflow-hidden shadow-2xl">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          to={link.path} 
                          className="flex items-center gap-3 px-5 py-3 hover:bg-slate-700 transition"
                          onClick={() => { setMenuOpen(false); setActiveDropdown(null); }}
                        >
                          <span className="text-xl">{link.icon}</span> 
                          <span className="font-medium">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}

            <li>
              <Link to="/contact" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-sky-400 transition" onClick={() => setMenuOpen(false)}>
                <FaEnvelope /> Contact
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;