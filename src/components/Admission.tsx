"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaEnvelopeOpenText,
  FaDollarSign,
  FaInfoCircle,
  FaStar,
  FaUsers,
  FaHeart,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Admission = () => {
  const { t } = useLanguage();

  const process = [
    {
      title: t("admission.process.step1.title"),
      description: t("admission.process.step1.description"),
    },
    {
      title: t("admission.process.step2.title"),
      description: t("admission.process.step2.description"),
    },
    {
      title: t("admission.process.step3.title"),
      description: t("admission.process.step3.description"),
    },
    {
      title: t("admission.process.step4.title"),
      description: t("admission.process.step4.description"),
    },
  ];

  return (
    <section
      id="admission"
      className="py-32 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50 relative overflow-hidden"
    >
      {/* Hero area with animated envelope/checklist */}
      <div className="relative z-10 flex flex-col items-center mb-20">
        <motion.div
          initial={{ scale: 0.8, rotate: -8 }}
          animate={{ scale: [0.8, 1.05, 1], rotate: [0, 8, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="w-28 h-28 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-400 flex items-center justify-center mb-6 shadow-2xl"
        >
          <FaEnvelopeOpenText className="text-white text-5xl drop-shadow" />
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-600 via-emerald-500 to-amber-500 bg-clip-text text-transparent drop-shadow-lg text-center">
          {t("admission.title")}
        </h2>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-900 font-semibold text-lg shadow mb-4">
          <FaInfoCircle className="text-orange-400" />
          {t("admission.subtitle")}
        </div>
        <p className="text-xl text-slate-700 max-w-2xl text-center mb-2">
          {t("admission.description")}
        </p>
        <a
          href="https://www.laplace0-5.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
        >
          {t("admission.cta_button")}
        </a>
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
            fill="url(#admission-wave)"
            d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z"
          />
          <defs>
            <linearGradient
              id="admission-wave"
              x1="0"
              x2="1440"
              y1="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fdba74" />
              <stop offset="0.5" stopColor="#fbcfe8" />
              <stop offset="1" stopColor="#fef9c3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Vertical Stepper/Timeline for Process */}
      <div className="relative z-10 max-w-3xl mx-auto mb-24">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-8 text-teal-700 flex items-center gap-2">
            <FaEnvelopeOpenText className="text-teal-400" />{" "}
            {t("admission.process_title")}
          </h3>
          <div className="relative w-full">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-teal-200 to-amber-200 rounded-full"></div>
            <ul className="space-y-12 pl-16">
              {process.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-10 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-emerald-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white">
                    {i + 1}
                  </div>
                  <div className="bg-white/90 rounded-2xl p-6 shadow border border-orange-100">
                    <div className="text-xl font-bold text-orange-700 mb-1">
                      {step.title}
                    </div>
                    <div className="text-slate-700 text-base">
                      {step.description}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contribution Calculator Card */}
      <div className="relative z-10 max-w-xl mx-auto mb-24">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-3xl p-4 py-8 md:py-10 md:p-10 shadow-2xl border-2 border-white/60 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-teal-800 flex items-center gap-2">
            <FaDollarSign className="text-teal-500" />{" "}
            {t("admission.calculator_title")}
          </h3>
          <p className="text-lg text-slate-700 mb-4 text-center">
            {t("admission.calculator_description_1")}
          </p>
          <p className="text-lg text-slate-700 mb-4 text-center">
            {t("admission.calculator_description_2")}
          </p>
          <a
            href="https://www.laplace0-5.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
          >
            {t("admission.calculator_button")}
          </a>
        </div>
      </div>

      {/* Contact and Info Cards */}
      <div className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mb-8">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 text-white shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaInfoCircle className="text-white/80" />{" "}
              {t("admission.info_title")}
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <FaCheckCircle className="text-md mr-3 mt-1 flex-shrink-0 text-green-200" />
                <span className="text-[16px]">
                  {t("admission.info.online_registration")}
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-md mr-3 mt-1 flex-shrink-0 text-green-200" />
                <span className="text-[16px]">
                  {t("admission.info.open_year_round")}
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-md mr-3 mt-1 flex-shrink-0 text-green-200" />
                <span className="text-[16px]">
                  {t("admission.info.children_0_5")}
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-md mr-3 mt-1 flex-shrink-0 text-green-200" />
                <span className="text-[16px]">
                  {t("admission.info.reduced_contribution")}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-white/80" />{" "}
              {t("admission.advantages_title")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaStar className="text-xl mr-4 text-yellow-300" />
                <div>
                  <div className="font-semibold">
                    {t("admission.advantages.experience.title")}
                  </div>
                  <div className="text-sm opacity-90">
                    {t("admission.advantages.experience.description")}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-xl mr-4 text-blue-200" />
                <div>
                  <div className="font-semibold">
                    {t("admission.advantages.team.title")}
                  </div>
                  <div className="text-sm opacity-90">
                    {t("admission.advantages.team.description")}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <FaHeart className="text-xl mr-4 text-emerald-200" />
                <div>
                  <div className="font-semibold">
                    {t("admission.advantages.approach.title")}
                  </div>
                  <div className="text-sm opacity-90">
                    {t("admission.advantages.approach.description")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
