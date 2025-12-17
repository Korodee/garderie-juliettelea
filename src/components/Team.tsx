"use client";

import { motion } from "framer-motion";
import { FaStar, FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();

  const teamMembers = [
    { name: "Karina Orellana", image: "/Karina-Orellana.jpg" },
    { name: "Mariem Hermassi", image: "/Mariem-Hermassi.jpg" },
    { name: "Zanat Zanat", image: "/Zanat-Zanat.jpg" },
    { name: "Marla Vicente", image: "/Marla-Vicente-Orthophoniste.jpg" },
    { name: "Coach Pablo", image: "/Coach-Pablo.jpg" },
    { name: "Sheila Layne", image: "/Sheila-Layne.jpg" },
    { name: "Manpreet Kaur", image: "/Manpreet-Kaur.jpg" },
    { name: "Gloria Vega Guzman", image: "/Gloria-Vega-Guzman.jpg" },
    { name: "Xiangling Liao", image: "/Xiangling-Liao.jpg" },
    { name: "Ria Atienza", image: "/Ria-Atienza.jpg" },
    { name: "Madeleine Kouassi", image: "/Madeleine-Kouassi.jpg" },
    { name: "Natasha Cordice", image: "/Natasha-Cordice.jpg" },
    { name: "Regina Boniface", image: "/Regina-Boniface.jpg" },
    { name: "Ximena Alvarez", image: "/Ximena-Alvarez.jpg" },
    { name: "Mary Rose Mandac", image: "/Mary-Rose-Mandac.jpg" },
    { name: "Sampath Shrivatchala", image: "/Sampath-Shrivatchala.jpg" },
    { name: "Rachida Benmansour", image: "/Rachida-Benmansour.jpg" },
    { name: "Firoozeh Karimi Vishkaei", image: "/Firoozeh-Karimi-Vishkaei.jpg" },
    { name: "Asako Tanaka", image: "/Asako-Tanaka.jpg" },
    { name: "Keltoum Sator", image: "/Keltoum-Sator.jpg" },
    { name: "Denise Peasland", image: "/Denise-Peasland.jpg" },
    { name: "Chevorn Arrington", image: "/Chevorn-Arrington.jpg" },
  ];

  return (
    <section
      id="equipe"
      className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full text-white text-sm font-medium shadow-lg">
            <FaStar className="text-xs" />
            {t("team.title")}
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#36B6DF] via-[#FFD43B] via-40% to-[#F06292] text-transparent bg-clip-text drop-shadow"
        >
          {t("team.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          {t("team.subtitle")}
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center bg-white/95 rounded-lg p-2.5 sm:p-3 shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md border border-white ring-2 ring-transparent group-hover:ring-indigo-200 transition">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-800 leading-tight line-clamp-2">
                {member.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mt-12"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full text-white font-medium shadow-lg">
          <FaHeart className="text-sm" />
          <span className="text-sm">{t("team.excellence")}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
