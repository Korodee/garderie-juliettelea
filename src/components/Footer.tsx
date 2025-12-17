import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { href: "#presentation", label: t("footer.links.presentation") },
    { href: "#programme", label: t("footer.links.program") },
    { href: "#admission", label: t("footer.links.admission") },
    { href: "/gallery", label: t("footer.links.gallery") },
    { href: "#contact", label: t("footer.links.contact") },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#f8fafc] to-[#eaf1fb] pt-14 pb-8 text-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Garderie JulietteLea Logo"
                width={80}
                height={80}
                className="w-13 h-13 object-contain drop-shadow-md"
                priority
              />
              <div>
                <h2 className="font-bold text-xl text-slate-900">
                  {t("footer.brand")}
                </h2>
                <p className="text-sm text-slate-500">
                  {t("footer.branding.tagline")}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t("footer.branding.description")}
            </p>
          </div>

          {/* Contact Cards */}
          <div>
            <h3 className="font-semibold text-lg text-slate-900 mb-4">
              {t("footer.contact.title")}
            </h3>
            <div className="flex flex-col md:flex-row flex-wrap gap-4">
              <a
                href="tel:5148377070"
                className="flex-1 min-w-[140px] bg-white rounded-xl shadow p-4 flex items-center gap-3 hover:shadow-md transition group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition">
                  <FaPhoneAlt className="text-blue-600 text-xl" />
                </span>
                <div>
                  <div className="font-semibold text-slate-900">
                    {t("footer.contact.phone")}
                  </div>
                  <div className="text-sm text-slate-500">514 837-7070</div>
                </div>
              </a>
              <a
                href="mailto:garderiejuliettelea@gmail.com"
                className="flex-1 min-w-[140px] bg-white rounded-xl shadow p-4 flex items-center gap-3 hover:shadow-md transition group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </span>
                <div>
                  <div className="font-semibold text-slate-900">
                    {t("footer.contact.email")}
                  </div>
                  <div className="text-sm text-slate-500 truncate">
                    garderiejuliettelea@gmail.com
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-4 bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </span>
              <div>
                <div className="font-semibold text-slate-900">
                  {t("footer.contact.address")}
                </div>
                <div className="text-sm text-slate-500 leading-tight">
                  6230 boulevard Decarie
                  <br />
                  Montréal (Québec)
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50">
                <FaPhoneAlt className="text-blue-600 text-xl" />
              </span>
              <div>
                <div className="font-semibold text-slate-900">
                  {t("footer.contact.fax")}
                </div>
                <div className="text-sm text-slate-500">514 747-2695</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-slate-900 mb-4">
              {t("footer.quick_links")}
            </h3>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 bg-white rounded-xl shadow p-3 hover:shadow-md transition group"
                >
                  <FaChevronRight className="text-blue-400 text-base group-hover:text-blue-600 transition" />
                  <span className="text-slate-700 group-hover:text-blue-700 font-medium transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg text-slate-900 mb-4">
              {t("footer.hours.title")}
            </h3>
            <div className="bg-white rounded-xl shadow p-4">
              <div className="font-semibold text-slate-900 mb-1">
                {t("footer.hours.opening_hours")}
              </div>
              <div className="text-sm text-slate-500">
                {t("footer.hours.schedule")}
                <br />
                {t("footer.hours.time")}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {t("footer.brand")}.{" "}
            {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
