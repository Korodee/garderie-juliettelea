"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaStar,
  FaUsers,
  FaGraduationCap,
  FaBaby,
  FaClock,
  FaShieldAlt,
  FaLeaf,
  FaPaintBrush,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Classroom slideshow images
const classroomImages = [
  {
    src: "/Classe-juliettelea-1.jpg",
    alt: "Classe - Garderie JulietteLea",
  },
  {
    src: "/Classe-juliettelea-7.jpg",
    alt: "Classe - Garderie JulietteLea",
  },
  {
    src: "/Classe-juliettelea-14.jpg",
    alt: "Classe - Garderie JulietteLea",
  },
  {
    src: "/Classe-juliettelea-22.jpg",
    alt: "Classe - Garderie JulietteLea",
  },
  {
    src: "/Classe-juliettelea-27.jpg",
    alt: "Classe - Garderie JulietteLea",
  },
];

const About = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % classroomImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % classroomImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + classroomImages.length) % classroomImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const stats = [
    {
      icon: <FaClock className="text-4xl text-blue-500" />,
      number: "35+",
      label: t("stats.experience"),
      description: t("about.since"),
    },
    {
      icon: <FaUsers className="text-4xl text-green-500" />,
      number: "80",
      label: t("stats.children"),
      description: "15 poupons + 65 enfants",
    },
    {
      icon: <GiTeacher className="text-4xl text-purple-500" />,
      number: "11",
      label: t("stats.educators"),
      description: t("stats.team"),
    },
    {
      icon: <FaShieldAlt className="text-4xl text-orange-500" />,
      number: "100%",
      label: t("stats.security"),
      description: t("stats.environment"),
    },
  ];

  const values = [
    {
      icon: <FaGraduationCap className="text-2xl text-white" />,
      title: t("values.education.title"),
      description: t("values.education.description"),
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <FaHeart className="text-2xl text-white" />,
      title: t("values.compassion.title"),
      description: t("values.compassion.description"),
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <FaHeart className="text-2xl text-white" />,
      title: t("values.love.title"),
      description: t("values.love.description"),
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <FaLeaf className="text-2xl text-white" />,
      title: t("values.respect.title"),
      description: t("values.respect.description"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaStar className="text-2xl text-white" />,
      title: t("values.autonomy.title"),
      description: t("values.autonomy.description"),
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FaPaintBrush className="text-2xl text-white" />,
      title: t("values.creativity.title"),
      description: t("values.creativity.description"),
      color: "from-purple-500 to-violet-500",
    },
  ];

  const timeline = [
    {
      year: "1987",
      title: t("timeline.1987.title"),
      description: t("timeline.1987.description"),
    },
    {
      year: "1995",
      title: t("timeline.1995.title"),
      description: t("timeline.1995.description"),
    },
    {
      year: "2010",
      title: t("timeline.2010.title"),
      description: t("timeline.2010.description"),
    },
    {
      year: "2025",
      title: t("timeline.2025.title"),
      description: t("timeline.2025.description"),
    },
  ];

  return (
    <section
      id="presentation"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaBaby className="text-lg" />
            <span>{t("about.since")}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#36B6DF] via-[#FFD43B] via-40% to-[#F06292] text-transparent bg-clip-text drop-shadow">
            {t("about.history")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("about.history.description")}
          </p>
        </motion.div>

        {/* About Photo + Stats Side by Side */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          {/* About Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-2xl relative"
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 flex items-center justify-center text-blue-600 hover:text-blue-700"
              aria-label="Image précédente"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 flex items-center justify-center text-blue-600 hover:text-blue-700"
              aria-label="Image suivante"
            >
              →
            </button>

            <div className="w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={classroomImages[currentSlide].src}
                    alt={classroomImages[currentSlide].alt}
                    width={1200}
                    height={400}
                    className="w-full h-[300px] md:h-[470px] object-cover rounded-3xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slideshow Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {classroomImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-500 scale-125"
                      : "bg-blue-300 hover:bg-blue-400"
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-500">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-24"
        >
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 bg-opacity-20 rounded-xl flex items-center justify-center">
                  <FaHeart className="text-2xl" />
                </div>
                <h3 className="text-3xl font-bold">{t("about.mission")}</h3>
              </div>
              <p className="text-xl leading-relaxed">
                {t("about.mission.description")}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-6 md:p-12 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-opacity-20 rounded-xl flex items-center justify-center">
                  <FaStar className="text-2xl" />
                </div>
                <h3 className="text-3xl font-bold">{t("about.vision")}</h3>
              </div>
              <p className="text-xl leading-relaxed">
                {t("about.vision.description")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#36B6DF] via-[#FFD43B] via-40% to-[#F06292] text-transparent bg-clip-text drop-shadow">
              {t("about.values")}
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t("about.values.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          {/* Playful floating shapes */}
          <div className="absolute -top-16 left-1/4 w-40 h-40 bg-pink-100 rounded-full filter blur-2xl opacity-40 z-0 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-100 rounded-full filter blur-2xl opacity-40 z-0 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-28 h-28 bg-yellow-100 rounded-full filter blur-2xl opacity-40 z-0 animate-blob animation-delay-4000"></div>

          <div className="text-center mb-16 relative z-10">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#36B6DF] via-[#FFD43B] via-40% to-[#F06292] text-transparent bg-clip-text drop-shadow">
              {t("about.journey")}
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t("about.journey.description")}
            </p>
          </div>

          <div className="relative z-10">
            {/* Rainbow timeline line */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-pink-300 via-yellow-200 to-blue-300"></div>
            <div className="block sm:hidden absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-yellow-200 to-blue-300"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => {
                // Playful pastel backgrounds and icons for each milestone
                const pastelBg = [
                  "bg-pink-50",
                  "bg-blue-50",
                  "bg-yellow-50",
                  "bg-green-50",
                ];
                const accentBar = [
                  "bg-pink-300",
                  "bg-blue-300",
                  "bg-yellow-300",
                  "bg-green-300",
                ];
                const icons = [
                  "🏫", // Fondation
                  "🏅", // Reconnaissance
                  "🧸", // Expansion
                  "🎨", // Rénovation
                ];
                const bg = pastelBg[index % pastelBg.length];
                const bar = accentBar[index % accentBar.length];
                const icon = icons[index % icons.length];
                const dotColor = `bg-gradient-to-br from-pink-300 via-yellow-200 to-blue-300`;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex flex-col sm:flex-row items-center sm:items-stretch ${
                      index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-full sm:w-1/2 px-0 sm:${
                        index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                      } mb-6 sm:mb-0`}
                    >
                      <div
                        className={`relative rounded-3xl p-6 sm:p-8 shadow-xl border-0 ${bg} transition-all duration-300 group w-full max-w-md mx-auto sm:max-w-none`}
                      >
                        {/* Accent bar */}
                        <div
                          className={`absolute top-0 ${
                            index % 2 === 0 ? "left-0" : "right-0"
                          } h-full w-1 sm:w-2 ${bar} rounded-3xl`}
                        ></div>
                        {/* Icon and year stacked and centered */}
                        <div className="flex flex-col items-center justify-center mb-3">
                          <span className="text-3xl mb-1">{icon}</span>
                          <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-2 text-center sm:text-left">
                          {item.title}
                        </h4>
                        <p className="text-lg text-slate-700 font-medium text-center sm:text-left">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Playful timeline dot */}
                    <div className="relative z-10 mb-6 sm:mb-0">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${dotColor} rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl animate-pulse mx-auto`}
                      >
                        {icon}
                      </div>
                    </div>

                    <div className="hidden sm:block w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Regulatory Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-3xl p-4 py-8 md:py-12 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500 opacity-10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10 text-center">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-opacity-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <FaShieldAlt className="text-3xl" />
                </div>
                <h3 className="text-4xl font-bold">
                  {t("about.regulatory.title")}
                </h3>
              </div>

              <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
                {t("about.regulatory.description")}
              </p>

              <div className="grid md:grid-cols-3 gap-8 items-stretch min-h-[220px]">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col justify-center h-full text-center">
                  <h4 className="text-2xl font-bold mb-3">
                    {t("about.regulatory.legal.title")}
                  </h4>
                  <ul className="mx-auto text-left max-w-md">
                    <li>• {t("about.regulatory.legal.law")}</li>
                    <li>• {t("about.regulatory.legal.regulation")}</li>
                    <li>• {t("about.regulatory.legal.reducedContribution")}</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col justify-center h-full text-center">
                  <h4 className="text-2xl font-bold mb-3">
                    {t("about.regulatory.mfa.title")}
                  </h4>
                  <p className="text-center">
                    {t("about.regulatory.mfa.description")}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col justify-center h-full text-center">
                  <h4 className="text-2xl font-bold mb-3">
                    {t("about.regulatory.parentsCommittee.title")}
                  </h4>
                  <p className="text-center">
                    {t("about.regulatory.parentsCommittee.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-4 py-8 md:py-12 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 opacity-10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10 text-center">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-opacity-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <FaGraduationCap className="text-3xl" />
                </div>
                <h3 className="text-4xl font-bold">
                  {t("about.professionalSupport.title")}
                </h3>
              </div>

              <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
                {t("about.professionalSupport.description")}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: t("about.professionalSupport.psychopedagogue.name"),
                    desc: t("about.professionalSupport.psychopedagogue.desc"),
                  },
                  {
                    name: t("about.professionalSupport.ergotherapist.name"),
                    desc: t("about.professionalSupport.ergotherapist.desc"),
                  },
                  {
                    name: t("about.professionalSupport.orthophonist.name"),
                    desc: t("about.professionalSupport.orthophonist.desc"),
                  },
                  {
                    name: t("about.professionalSupport.physiotherapist.name"),
                    desc: t("about.professionalSupport.physiotherapist.desc"),
                  },
                ].map((specialist, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow"
                  >
                    <div className="text-2xl font-bold mb-2 text-slate-900">
                      {specialist.name}
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="block w-8 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mb-2"></span>
                      <div className="text-gray-800 text-base font-medium">
                        {specialist.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
