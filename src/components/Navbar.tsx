"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
// import { GiBabyBottle } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  active: string;
}

export default function Navbar({ open, setOpen, active }: NavbarProps) {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isGalleryPage, setIsGalleryPage] = useState(false);

  const navLinks = [
    { href: "/#presentation", label: t("nav.presentation") },
    { href: "/#programme", label: t("nav.program") },
    { href: "/#admission", label: t("nav.admission") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    // Check if we're on the gallery page after component mounts
    setIsGalleryPage(window.location.pathname === "/gallery");

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg rounded-b-4xl"
          : "bg-transparent"
      }`}
      aria-label={t("nav.main_navigation")}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.svg"
            alt="Garderie JulietteLea Logo"
            width={64}
            height={64}
            className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-md"
            priority
          />
          <div className="flex flex-col ml-1">
            <span
              className={`font-extrabold text-lg leading-tight tracking-tight transition-colors duration-300 ${
                scrolled || isGalleryPage
                  ? "text-black"
                  : "text-white drop-shadow-lg"
              }`}
            >
              {t("footer.brand")}
            </span>
            <span
              className={`text-[11px] font-semibold italic tracking-wide mt-0.5 transition-colors duration-300 ${
                scrolled || isGalleryPage
                  ? "text-gray-700"
                  : "text-white drop-shadow-lg"
              }`}
            >
              {t("footer.tagline")}
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <LanguageSwitcher
              scrolled={scrolled}
              isGalleryPage={isGalleryPage}
            />
          </div>
          <button
            className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow transition-all duration-300 ${
              scrolled ? "bg-white/70" : "bg-white/20 backdrop-blur-sm"
            }`}
            aria-label={open ? t("nav.close_menu") : t("nav.open_menu")}
            onClick={() => setOpen(!open)}
          >
            <FaBars
              className={`text-xl transition-colors duration-300 ${
                scrolled || isGalleryPage ? "text-black" : "text-black/80"
              }`}
            />
          </button>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 items-center text-base font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-3 py-1.5 transition-colors duration-200 focus:outline-none group"
                tabIndex={0}
              >
                <motion.span
                  layoutId={active === link.href ? "nav-pill" : undefined}
                  className={`absolute left-0 top-0 h-full w-full rounded-full transition-all duration-300 ${
                    active === link.href
                      ? "bg-blue-100 shadow-md"
                      : "group-hover:bg-blue-50 group-hover:shadow"
                  } ${active === link.href ? "z-0" : "z-0"}`}
                  style={{ zIndex: 0 }}
                />
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    active === link.href
                      ? "text-blue-700"
                      : scrolled || isGalleryPage
                      ? "text-black group-hover:text-gray-700"
                      : "text-white group-hover:text-gray-800 drop-shadow-lg"
                  }`}
                >
                  {link.label}
                </span>
              </a>
            </li>
          ))}
          <li>
            <LanguageSwitcher
              scrolled={scrolled}
              isGalleryPage={isGalleryPage}
            />
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
