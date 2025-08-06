"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaBaby,
  FaPuzzlePiece,
  FaCar,
  FaPaintBrush,
  FaDice,
  FaBicycle,
} from "react-icons/fa";
import {
  GiToyMallet,
  GiBalloonDog,
  GiDuck,
  GiCube,
  GiHorseHead,
  GiBabyBottle,
} from "react-icons/gi";
import { MdToys, MdChildCare } from "react-icons/md";

const decorVariants = {
  float: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
  },
};

// Slideshow images
const slideshowImages = [
  {
    src: "/hero-1.jpg",
    alt: "Hero image 1 - Garderie Aimée",
  },
  {
    src: "/hero-2.jpg",
    alt: "Hero image 2 - Garderie Aimée",
  },
  {
    src: "/hero-3.jpg",
    alt: "Hero image 3 - Garderie Aimée",
  },
  {
    src: "/hero-4.jpg",
    alt: "Hero image 4 - Garderie Aimée",
  },
  {
    src: "/hero-5.jpg",
    alt: "Hero image 5 - Garderie Aimée",
  },
];

export default function Hero() {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
  const navLinks = React.useMemo(() => [
    { href: "#presentation", label: t("nav.presentation") },
    { href: "#programme", label: t("nav.program") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "#admission", label: t("nav.admission") },
    { href: "#contact", label: t("nav.contact") },
  ], [t]);
  
  const [active, setActive] = useState(navLinks[0].href);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Active section logic
  React.useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map((link) => {
        // Only try to query elements that are valid CSS selectors (hash links)
        if (link.href.startsWith("#")) {
          const el = document.querySelector(link.href);
          return el ? el.getBoundingClientRect().top : Infinity;
        }
        return Infinity; // Skip non-hash links like /gallery
      });
      const idx = offsets.findIndex((top) => top > 80);
      setActive(navLinks[Math.max(0, idx - 1)].href);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  // Floating toys data (using icon components)
  const floatingToys = [
    {
      icon: <FaBaby />,
      bg: "bg-pink-200",
      text: "text-pink-600",
      size: "w-10 h-10",
      style: "left-10 top-32",
      opacity: "opacity-40",
      show: "md:block",
    },
    {
      icon: <GiBabyBottle />,
      bg: "bg-yellow-200",
      text: "text-yellow-600",
      size: "w-8 h-8",
      style: "right-16 top-40",
      opacity: "opacity-40",
      show: "md:block",
    },
    {
      icon: <FaPuzzlePiece />,
      bg: "bg-green-200",
      text: "text-green-600",
      size: "w-6 h-6",
      style: "left-1/2 top-16",
      opacity: "opacity-40",
      show: "md:block",
    },
    {
      icon: <GiCube />,
      bg: "bg-purple-200",
      text: "text-purple-600",
      size: "w-8 h-8",
      style: "left-20 top-60",
      opacity: "opacity-30",
      show: "md:block",
    },
    {
      icon: <FaCar />,
      bg: "bg-orange-200",
      text: "text-orange-600",
      size: "w-12 h-12",
      style: "right-32 top-60",
      opacity: "opacity-30",
      show: "md:block",
    },
    {
      icon: <GiToyMallet />,
      bg: "bg-pink-200",
      text: "text-pink-600",
      size: "w-6 h-6",
      style: "left-8 top-80",
      opacity: "opacity-30",
      show: "md:block",
    },
    {
      icon: <FaBicycle />,
      bg: "bg-blue-200",
      text: "text-blue-600",
      size: "w-10 h-10",
      style: "right-8 top-80",
      opacity: "opacity-30",
      show: "md:block",
    },
    {
      icon: <GiHorseHead />,
      bg: "bg-indigo-200",
      text: "text-indigo-600",
      size: "w-7 h-7",
      style: "left-40 top-40",
      opacity: "opacity-30",
      show: "md:block",
    },
    {
      icon: <FaPaintBrush />,
      bg: "bg-teal-200",
      text: "text-teal-600",
      size: "w-9 h-9",
      style: "right-40 top-20",
      opacity: "opacity-30",
      show: "md:block",
    },
    {
      icon: <MdToys />,
      bg: "bg-rose-200",
      text: "text-rose-600",
      size: "w-5 h-5",
      style: "left-1/4 top-24",
      opacity: "opacity-30",
      show: "md:block",
    },
    {
      icon: <FaDice />,
      bg: "bg-amber-200",
      text: "text-amber-600",
      size: "w-8 h-8",
      style: "right-1/4 top-28",
      opacity: "opacity-30",
      show: "md:block",
    },
    {
      icon: <GiBalloonDog />,
      bg: "bg-cyan-200",
      text: "text-cyan-600",
      size: "w-6 h-6",
      style: "left-16 top-96",
      opacity: "opacity-30",
      show: "md:block",
    },
    {
      icon: <GiDuck />,
      bg: "bg-lime-200",
      text: "text-lime-600",
      size: "w-9 h-9",
      style: "right-24 top-96",
      opacity: "opacity-30",
      show: "md:block",
    },
    // Center area toys
    {
      icon: <MdChildCare />,
      bg: "bg-pink-100",
      text: "text-pink-500",
      size: "w-8 h-8",
      style: "left-1/3 top-1/2",
      opacity: "opacity-25",
      show: "md:block",
    },
    {
      icon: <GiBabyBottle />,
      bg: "bg-blue-100",
      text: "text-blue-500",
      size: "w-6 h-6",
      style: "right-1/3 top-1/2",
      opacity: "opacity-25",
      show: "md:block",
    },
    {
      icon: <FaPuzzlePiece />,
      bg: "bg-green-100",
      text: "text-green-500",
      size: "w-7 h-7",
      style: "left-1/2 top-1/3",
      opacity: "opacity-25",
      show: "md:block",
    },
    {
      icon: <GiCube />,
      bg: "bg-yellow-100",
      text: "text-yellow-500",
      size: "w-5 h-5",
      style: "right-1/2 top-2/3",
      opacity: "opacity-25",
      show: "md:block",
    },
    {
      icon: <FaBaby />,
      bg: "bg-purple-100",
      text: "text-purple-500",
      size: "w-9 h-9",
      style: "left-2/3 top-1/2",
      opacity: "opacity-25",
      show: "md:block",
    },
    {
      icon: <FaCar />,
      bg: "bg-orange-100",
      text: "text-orange-500",
      size: "w-6 h-6",
      style: "right-2/3 top-1/3",
      opacity: "opacity-25",
      show: "md:block",
    },
    {
      icon: <FaPaintBrush />,
      bg: "bg-teal-100",
      text: "text-teal-500",
      size: "w-8 h-8",
      style: "left-1/2 top-1/2",
      opacity: "opacity-25",
      show: "md:block",
    },
    {
      icon: <GiHorseHead />,
      bg: "bg-indigo-100",
      text: "text-indigo-500",
      size: "w-7 h-7",
      style: "left-3/4 top-1/2",
      opacity: "opacity-25",
      show: "md:block",
    },
    {
      icon: <MdToys />,
      bg: "bg-rose-100",
      text: "text-rose-500",
      size: "w-5 h-5",
      style: "right-1/4 top-1/2",
      opacity: "opacity-25",
      show: "md:block",
    },
    {
      icon: <FaDice />,
      bg: "bg-cyan-100",
      text: "text-cyan-500",
      size: "w-6 h-6",
      style: "left-1/4 top-2/3",
      opacity: "opacity-25",
      show: "md:block",
    },
    {
      icon: <GiBalloonDog />,
      bg: "bg-lime-100",
      text: "text-lime-500",
      size: "w-8 h-8",
      style: "right-3/4 top-2/3",
      opacity: "opacity-25",
      show: "md:block",
    },
    // Mobile toys
    {
      icon: <FaBaby />,
      bg: "bg-yellow-200",
      text: "text-yellow-600",
      size: "w-8 h-8",
      style: "left-4 top-20",
      opacity: "opacity-40",
      show: "md:hidden",
    },
    {
      icon: <GiBabyBottle />,
      bg: "bg-red-200",
      text: "text-red-600",
      size: "w-6 h-6",
      style: "right-4 top-32",
      opacity: "opacity-40",
      show: "md:hidden",
    },
    {
      icon: <FaPuzzlePiece />,
      bg: "bg-green-200",
      text: "text-green-600",
      size: "w-7 h-7",
      style: "left-8 top-48",
      opacity: "opacity-40",
      show: "md:hidden",
    },
    {
      icon: <GiCube />,
      bg: "bg-purple-200",
      text: "text-purple-600",
      size: "w-5 h-5",
      style: "right-8 top-56",
      opacity: "opacity-40",
      show: "md:hidden",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Animated Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slideshowImages[currentSlide].src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Navbar */}
      <Navbar open={mobileNavOpen} setOpen={setMobileNavOpen} active={active} />

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-black/80 bg-opacity-80 backdrop-blur-sm"
            onClick={() => setMobileNavOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-72 bg-white/95 shadow-xl z-[100] flex flex-col pt-6 px-6 pb-8 rounded-l-3xl"
            style={{
              borderTopLeftRadius: "2rem",
              borderBottomLeftRadius: "2rem",
            }}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-blue-50 hover:bg-blue-100 shadow focus:outline-none"
              aria-label="Fermer le menu"
              onClick={() => setMobileNavOpen(false)}
            >
              <FaTimes className="text-2xl text-blue-900" />
            </button>
            <nav className="flex flex-col gap-6 mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`block text-xl font-bold px-4 py-3 rounded-lg transition-colors duration-200 ${
                    active === link.href
                      ? "text-blue-700 bg-blue-100"
                      : "text-blue-900 hover:text-blue-700"
                  }`}
                  onClick={() => setMobileNavOpen(false)}
                  tabIndex={0}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Decorative Elements */}
      {floatingToys.map((toy, i) => (
        <motion.div
          key={i}
          variants={decorVariants}
          animate="float"
          className={`absolute ${toy.style} hidden ${toy.show} z-20`}
        >
          <div
            className={`${toy.size} ${toy.bg} rounded-full flex items-center justify-center shadow-lg ${toy.opacity}`}
          >
            <span className={`${toy.text} text-xl md:text-2xl`}>
              {toy.icon}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            {t("hero.title")}
            <br />
            <span
              className="font-bold bg-gradient-to-r from-[#36B6DF] via-[#FFD43B] via-40% to-red-600 text-transparent bg-clip-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, #36B6DF 0%, #FFD43B 40%, #dc2626 100%)",
              }}
            >
              {t("hero.subtitle")}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, type: "spring" }}
            className="text-lg md:text-xl text-slate-200 mb-6 max-w-xl mx-auto md:mx-0"
          >
            {t("hero.description")}
          </motion.p>
          {/* Badge/Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/80 border border-blue-100 rounded-full px-4 py-2 mb-6 shadow text-blue-700 text-sm font-medium"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" fill="#60A5FA" />
              <text x="10" y="15" textAnchor="middle" fontSize="13" fill="#fff">
                ★
              </text>
            </svg>
            {t("hero.recommended")}
          </motion.div>
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, type: "spring" }}
            className="flex flex-col md:items-start items-center sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#admission"
              className="inline-block font-semibold px-8 py-3 rounded-full shadow text-white text-lg bg-gradient-to-r from-orange-700 via-[#7B3FA0] via-60% to-[#F06292] hover:brightness-110 hover:scale-105 transition-all duration-200 w-fit"
            >
              {t("hero.cta")}
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image with Blob Mask removed as requested */}
      </div>
    </section>
  );
}
