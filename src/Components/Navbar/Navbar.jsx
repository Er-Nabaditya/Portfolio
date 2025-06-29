import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // <-- Add FaEnvelope

const Navbar = () => {
  const menuitems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Send Message" },
  ];

  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll background effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md backdrop-saturate-150 border-b border-amber-100/10 shadow-lg"
          : "bg-transparent"
      }`}
      style={{ WebkitBackdropFilter: "blur(12px) saturate(150%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg md:text-xl font-semibold cursor-pointer flex-shrink-0 text-nowrap">
          <span className="text-amber-500">&lt;</span>
          <span className="text-white">Nabaditya</span>
          <span className="text-amber-500">/</span>
          <span className="text-white">Bhutia</span>
          <span className="text-amber-500">&gt;</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-1 justify-center space-x-8 text-white text-base ">
          {menuitems.map((item) => (
            <li key={item.id} className="relative group ">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-200 pb-1 text-white hover:text-amber-500`}
              >
                {item.label}
                <span
                  className={`
          absolute left-0 -bottom-0.5 h-0.5 bg-amber-500
          transition-all duration-300
          ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}
        `}
                  style={{ borderRadius: 2 }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="https://github.com/Er-Nabaditya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-500 text-xl transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nabaditya-bhutia-254370237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-500 text-xl transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:bhutianabaditya@gmail.com"
            className="text-white hover:text-amber-500 text-xl transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-white hover:text-amber-500 transition"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur z-40">
          <ul className="flex flex-col items-center py-6 space-y-6 text-lg">
            {menuitems.map((item) => (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors duration-200 pb-1 text-white hover:text-amber-500`}
                >
                  {item.label}
                  <span
                    className={`
                      absolute left-0 -bottom-0.5 h-0.5 bg-amber-500
                      transition-all duration-300
                      ${
                        active === item.id ? "w-full" : "w-0 group-hover:w-full"
                      }
                    `}
                    style={{ borderRadius: 2 }}
                  />
                </button>
              </li>
            ))}
            <li className="flex space-x-6 pt-2">
              <a
                href="https://github.com/Er-Nabaditya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-500 text-2xl transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nabaditya-bhutia-254370237/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-500 text-2xl transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:bhutianabaditya@gmail.com"
                className="text-white hover:text-amber-500 text-2xl transition"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
