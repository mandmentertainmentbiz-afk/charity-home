import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/ehcalg.PNG";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrolled(scrollY > 50);
      setScrollProgress((scrollY / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
  ];

  return (
    <>
      {/* 🔥 SCROLL PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-1 bg-yellow-400 z-[60] transition-all"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 🔥 NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          scrolled
            ? "bg-white/10 backdrop-blur-lg shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-16 text-white">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="logo"
              className="h-10 md:h-12"
              animate={{
                scale: scrolled ? 0.85 : 1,
                rotate: scrolled ? 360 : 0,
              }}
              transition={{ duration: 0.6 }}
            />

            <span className="font-bold text-xl md:text-2xl">
              EHCA NGO
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-10 font-medium">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={i}
                  to={link.path}
                  className="relative group"
                >
                  <span
                    className={`transition ${
                      isActive ? "text-yellow-400" : ""
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* HAMBURGER */}
          <div
            className="md:hidden cursor-pointer z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : {}}
                className="block w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : {}}
                className="block w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : {}}
                className="block w-6 h-0.5 bg-white"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* 🔥 MOBILE MENU WITH BACKDROP */}
      {menuOpen && (
        <>
          {/* BACKDROP */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* MENU PANEL */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-black text-white z-50 p-8 flex flex-col gap-8"
          >
            <h2 className="text-2xl font-bold">Menu</h2>

            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-yellow-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </>
      )}
    </>
  );
}