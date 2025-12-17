"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = {
  fr: [
    {
      name: "Marie-Claude Tremblay",
      child: "Emma, 3 ans",
      rating: 5,
      photo: "/Classe-juliettelea-12.jpg",
      text: "Ma fille Emma adore aller à la garderie JulietteLea ! L'équipe est exceptionnelle et la communication est excellente. Je reçois des photos chaque semaine et je vois vraiment les progrès de ma fille. L'approche bilingue est un vrai plus.",
      highlight: "Communication exceptionnelle",
    },
    {
      name: "David Chen",
      child: "Lucas, 2 ans",
      rating: 5,
      photo: "/Classe-juliettelea-13.jpg",
      text: "En tant que parent, la sécurité est ma priorité. La garderie JulietteLea dépasse mes attentes avec leur système de surveillance et leur équipe formée. Lucas s'épanouit vraiment ici et apprend tellement chaque jour.",
      highlight: "Sécurité et confiance",
    },
    {
      name: "Sophie Dubois",
      child: "Chloé, 4 ans",
      rating: 5,
      photo: "/Classe-juliettelea-16.jpg",
      text: "Depuis que Chloé fréquente la garderie JulietteLea, elle a fait des progrès incroyables ! L'approche HighScope est fantastique et les activités sont toujours stimulantes. L'équipe est attentionnée et professionnelle.",
      highlight: "Progrès remarquables",
    },
    {
      name: "Marc-André Bouchard",
      child: "Thomas, 18 mois",
      rating: 5,
      photo: "/Classe-juliettelea-18.jpg",
      text: "La transition pour Thomas a été parfaite. L'équipe a su créer un environnement rassurant et chaleureux. Les repas sont délicieux et variés, et je vois que mon fils est heureux d'y aller chaque matin.",
      highlight: "Transition en douceur",
    },
    {
      name: "Isabelle Moreau",
      child: "Léa, 5 ans",
      rating: 5,
      photo: "/Classe-juliettelea-20.jpg",
      text: "Léa termine sa dernière année à la garderie JulietteLea et je suis tellement reconnaissante pour tout ce qu'elle y a appris. L'immersion bilingue l'a préparée parfaitement pour l'école. Une équipe dévouée et un environnement exceptionnel !",
      highlight: "Préparation scolaire",
    },
  ],
  en: [
    {
      name: "Marie-Claude Tremblay",
      child: "Emma, 3 years",
      rating: 5,
      photo: "/Classe-juliettelea-12.jpg",
      text: "My daughter Emma loves going to JulietteLea Daycare! The team is exceptional and communication is excellent. I receive photos every week and I can really see my daughter's progress. The bilingual approach is a real plus.",
      highlight: "Exceptional communication",
    },
    {
      name: "David Chen",
      child: "Lucas, 2 years",
      rating: 5,
      photo: "/Classe-juliettelea-13.jpg",
      text: "As a parent, security is my priority. JulietteLea Daycare exceeds my expectations with their surveillance system and trained team. Lucas really thrives here and learns so much every day.",
      highlight: "Security and trust",
    },
    {
      name: "Sophie Dubois",
      child: "Chloé, 4 years",
      rating: 5,
      photo: "/Classe-juliettelea-16.jpg",
      text: "Since Chloé has been attending JulietteLea Daycare, she has made incredible progress! The HighScope approach is fantastic and the activities are always stimulating. The team is caring and professional.",
      highlight: "Remarkable progress",
    },
    {
      name: "Marc-André Bouchard",
      child: "Thomas, 18 months",
      rating: 5,
      photo: "/Classe-juliettelea-18.jpg",
      text: "The transition for Thomas has been perfect. The team has managed to create a reassuring and warm environment. The meals are delicious and varied, and I can see that my son is happy to go there every morning.",
      highlight: "Smooth transition",
    },
    {
      name: "Isabelle Moreau",
      child: "Léa, 5 years",
      rating: 5,
      photo: "/Classe-juliettelea-20.jpg",
      text: "Léa is finishing her last year at JulietteLea Daycare and I am so grateful for everything she has learned there. The bilingual immersion has prepared her perfectly for school. A dedicated team and an exceptional environment!",
      highlight: "School preparation",
    },
  ],
};

export default function Testimonials() {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentTestimonials =
    testimonials[language as keyof typeof testimonials];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentTestimonials.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentTestimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + currentTestimonials.length) % currentTestimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="temoignages"
      className="py-22 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden"
    >
      {/* Playful illustrated background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-pink-200 rounded-full opacity-30 blur-2xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-30 blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-blue-200 rounded-full opacity-30 blur-2xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-2xl animate-blob animation-delay-1000"></div>
      </div>

      {/* Hero area */}
      <div className="relative z-10 flex flex-col items-center mb-16 px-4 mx-auto max-w-6xl">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center mb-6 shadow-2xl">
          <FaHeart className="text-white text-3xl drop-shadow" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg text-center">
          {t("testimonials.title")}
        </h2>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-900 font-semibold text-lg shadow mb-4">
          <FaStar className="text-pink-400" />
          {t("testimonials.subtitle")}
        </div>
        <p className="text-xl text-slate-700 max-w-2xl text-center mb-2">
          {t("testimonials.description")}
        </p>
      </div>

      {/* Wavy divider */}
      <div className="-mt-10 mb-12">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16"
        >
          <path
            fill="url(#testimonials-wave)"
            d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z"
          />
          <defs>
            <linearGradient
              id="testimonials-wave"
              x1="0"
              x2="1440"
              y1="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fce7f3" />
              <stop offset="0.5" stopColor="#e9d5ff" />
              <stop offset="1" stopColor="#dbeafe" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative z-10 max-w-3xl mx-auto mb-16 px-4">
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 items-center justify-center text-pink-600 hover:text-pink-700 hidden md:flex"
            aria-label="Témoignage précédent"
          >
            <FaChevronLeft className="text-lg" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 items-center justify-center text-pink-600 hover:text-pink-700 hidden md:flex"
            aria-label="Témoignage suivant"
          >
            <FaChevronRight className="text-lg" />
          </button>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border-2 border-white/60"
              >
                <div className="text-center">
                  {/* Quote icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <FaQuoteLeft className="text-white text-lg" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(currentTestimonials[currentSlide].rating)].map(
                      (_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg" />
                      )
                    )}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-slate-700 leading-relaxed text-base md:text-lg mb-4 italic">
                    &quot;{currentTestimonials[currentSlide].text}&quot;
                  </blockquote>

                  {/* Highlight */}
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {currentTestimonials[currentSlide].highlight}
                    </span>
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-slate-200 pt-3">
                    <div className="font-bold text-slate-800 text-lg">
                      {currentTestimonials[currentSlide].name}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {t("testimonials.parent_of")}{" "}
                      {currentTestimonials[currentSlide].child}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {currentTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-pink-500 scale-125"
                    : "bg-pink-300 hover:bg-pink-400"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Wavy divider */}
      <div className="mb-16">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16"
        >
          <path
            fill="url(#testimonials-wave2)"
            d="M0,40 C360,120 1080,0 1440,40 L1440,120 L0,120 Z"
          />
          <defs>
            <linearGradient
              id="testimonials-wave2"
              x1="0"
              x2="1440"
              y1="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#dbeafe" />
              <stop offset="0.5" stopColor="#e9d5ff" />
              <stop offset="1" stopColor="#fce7f3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
