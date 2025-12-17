"use client";

import { motion } from "framer-motion";
import {
  FaBaby,
  FaChild,
  FaUserFriends,
  FaGraduationCap,
  FaStar,
  FaCrown,
  FaHeart,
} from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();

  const teamSections = [
    {
      title: t("team.sections.direction.title"),
      icon: <FaCrown className="text-white" />,
      color: "from-amber-400 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      members: [
        {
          name: "Mayara",
          role: t("team.roles.directrice"),
          image: "/Equipe-staff-board.jpg",
        },
        {
          name: "Natasha",
          role: t("team.roles.directrice"),
          image: "/Equipe-staff-board.jpg",
        },
      ],
    },
    {
      title: t("team.sections.pouponniere.title"),
      subtitle: t("team.sections.pouponniere.subtitle"),
      icon: <FaBaby className="text-white" />,
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      members: [
        {
          name: "Simranjit",
          role: t("team.roles.pouponniere.0_8"),
          image: "/Classe-juliettelea-21.jpg",
        },
        {
          name: "Kristin",
          role: t("team.roles.pouponniere.9_12"),
          image: "/Classe-juliettelea-22.jpg",
        },
        {
          name: "Carmen",
          role: t("team.roles.pouponniere.12_18"),
          image: "/Classe-juliettelea-23.jpg",
        },
      ],
    },
    {
      title: t("team.sections.trottineurs.title"),
      subtitle: t("team.sections.trottineurs.subtitle"),
      icon: <FaChild className="text-white" />,
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      members: [
        {
          name: "Daphney",
          role: t("team.roles.trottineurs.18_24"),
          image: "/Classe-juliettelea-24.jpg",
        },
        {
          name: "Souad",
          role: t("team.roles.trottineurs.24_30"),
          image: "/Classe-juliettelea-25.jpg",
        },
        {
          name: "Li",
          role: t("team.roles.trottineurs.30_36"),
          image: "/Classe-juliettelea-26.jpg",
        },
      ],
    },
    {
      title: t("team.sections.bambins.title"),
      subtitle: t("team.sections.bambins.subtitle"),
      icon: <FaUserFriends className="text-white" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      members: [
        {
          name: "Fiona",
          role: t("team.roles.educatrice"),
          image: "/Classe-juliettelea-15.jpg",
        },
        {
          name: "Stéphanie",
          role: t("team.roles.educatrice"),
          image: "/Classe-juliettelea-10.jpg",
        },
        {
          name: "Drissia",
          role: t("team.roles.educatrice"),
          image: "/Classe-juliettelea-8.jpg",
        },
      ],
    },
    {
      title: t("team.sections.prescolaire.title"),
      subtitle: t("team.sections.prescolaire.subtitle"),
      icon: <FaGraduationCap className="text-white" />,
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      members: [
        {
          name: "Popi",
          role: t("team.roles.educatrice"),
          image: "/Classe-juliettelea-5.jpg",
        },
        {
          name: "Bassma",
          role: t("team.roles.educatrice"),
          image: "/Classe-juliettelea-4.jpg",
        },
      ],
    },
    {
      title: t("team.sections.soutien.title"),
      icon: <FaHeart className="text-white" />,
      color: "from-teal-400 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      members: [
        {
          name: "Silvie",
          role: t("team.roles.cuisiniere"),
          image: "/Cuisine-principale-2.jpg",
        },
        {
          name: "Khadidja",
          role: t("team.roles.remplacante"),
          image: "/Classe-juliettelea-9.jpg",
        },
        {
          name: "Amani",
          role: t("team.roles.remplacante"),
          image: "/Classe-juliettelea-6.jpg",
        },
      ],
    },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`relative rounded-2xl bg-gradient-to-br ${section.bgColor} p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-white/50`}
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center text-white shadow-md`}
                  >
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      {section.title}
                    </h3>
                    {section.subtitle && (
                      <p className="text-sm text-gray-600">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Team Members */}
                <div className="space-y-3">
                  {section.members.map((member, memberIndex) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: memberIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 bg-white/70 rounded-xl hover:bg-white/90 transition-colors duration-200"
                    >
                      {/* Avatar */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-white">
                          {member.image.endsWith(".svg") ? (
                            <Image
                              src={member.image}
                              alt={`${member.name} - ${member.role}`}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Image
                              src={member.image}
                              alt={`${member.name} - ${member.role}`}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r ${section.color} border-2 border-white`}
                        ></div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm truncate">
                          {member.name}
                        </h4>
                        <p className="text-xs text-gray-600 truncate">
                          {member.role}
                        </p>
                      </div>

                      {/* Decorative Element */}
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} opacity-60`}
                      ></div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
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
