"use client";

import { motion } from "framer-motion";
import { FaCamera, FaBuilding, FaChild, FaDoorOpen, FaStar, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    {
      id: "entrance",
      title: t('gallery.categories.entrance.title'),
      subtitle: t('gallery.categories.entrance.subtitle'),
      icon: <FaDoorOpen className="text-white" />,
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      images: [
        "/Entree-juliettelea-1.jpg",
        "/Entree-juliettelea-2.jpg",
        "/Entree-juliettelea-3.jpg",
        "/Entree-juliettelea-4.jpg",
        "/Entree-juliettelea-5.jpg",
        "/Entree3.jpg",
        "/Equipe-staff-board.jpg",
        "/Reception-cubbies.jpg",
        "/Reception-desk-1.jpg",
        "/Reception-desk-2.jpg"
      ]
    },
    {
      id: "classrooms",
      title: t('gallery.categories.classrooms.title'),
      subtitle: t('gallery.categories.classrooms.subtitle'),
      icon: <FaBuilding className="text-white" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      images: [
        "/Classe-juliettelea-1.jpg",
        "/Classe-juliettelea-2.jpg",
        "/Classe-juliettelea-3.jpg",
        "/Classe-juliettelea-4.jpg",
        "/Classe-juliettelea-5.jpg",
        "/Classe-juliettelea-6.jpg",
        "/Classe-juliettelea-7.jpg",
        "/Classe-juliettelea-8.jpg",
        "/Classe-juliettelea-9.jpg",
        "/Classe-juliettelea-10.jpg",
        "/Classe-juliettelea-11.jpg",
        "/Classe-juliettelea-12.jpg",
        "/Classe-juliettelea-13.jpg",
        "/Classe-juliettelea-14.jpg",
        "/Classe-juliettelea-15.jpg",
        "/Classe-juliettelea-16.jpg",
        "/Classe-juliettelea-17.jpg",
        "/Classe-juliettelea-18.jpg",
        "/Classe-juliettelea-19.jpg",
        "/Classe-juliettelea-20.jpg",
        "/Classe-juliettelea-21.jpg",
        "/Classe-juliettelea-22.jpg",
        "/Classe-juliettelea-23.jpg",
        "/Classe-juliettelea-24.jpg",
        "/Classe-juliettelea-25.jpg",
        "/Classe-juliettelea-26.jpg",
        "/Classe-juliettelea-27.jpg"
      ]
    },
    {
      id: "facilities",
      title: t('gallery.categories.facilities.title'),
      subtitle: t('gallery.categories.facilities.subtitle'),
      icon: <FaChild className="text-white" />,
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      images: [
        "/Couloir1.jpg",
        "/Couloir2.jpg",
        "/Couloir3.jpg",
        "/Couloir4.jpg",
        "/Couloir5.jpg",
        "/Couloir6.jpg",
        "/Couloir7.jpg",
        "/Couloir8.jpg",
        "/Couloir9.jpg",
        "/Couloir10.jpg",
        "/Couloir11.jpg",
        "/Couloir-cubbies-1.jpg",
        "/Couloir-cubbies-2.jpg",
        "/Couloir-cubbies-3.jpg",
        "/Couloir-cubbies-4.jpg",
        "/Bureau-admin-1.jpg",
        "/Bureau-admin-2.jpg",
        "/Toilette-adultes.jpg",
        "/Toilette-enfants.jpg",
        "/Toilette-enfants-2.jpg",
        "/Toilette-enfants-3.jpg",
        "/Buanderie.jpg"
      ]
    },
    {
      id: "nursery",
      title: t('gallery.categories.nursery.title'),
      subtitle: t('gallery.categories.nursery.subtitle'),
      icon: <FaStar className="text-white" />,
      color: "from-yellow-400 to-amber-500",
      bgColor: "from-yellow-50 to-amber-50",
      images: [
        "/Chambre-bebe-1.jpg",
        "/Chambre-bebe-2.jpg",
        "/Chambre-bebe-3.jpg",
        "/Chambre-bebe-4.jpg",
        "/Chambre-bebe-5.jpg",
        "/Cuisine-multipurpose.jpg",
        "/Cuisine-staff.jpg",
        "/Cuisine-staff-2.jpg",
        "/Cuisine-staff-3.jpg",
        "/Cuisine-principale-1.jpg",
        "/Cuisine-principale-2.jpg",
        "/Cuisine-principale-3.jpg",
        "/Pouponniere-activite-1.jpg",
        "/Pouponniere-activite-2.jpg",
        "/Pouponniere-activite-3.jpg",
        "/Pouponniere-activite-4.jpg"
      ]
    }
  ];

  const filteredCategories = selectedCategory === "all" 
    ? galleryCategories 
    : galleryCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="galerie" className="relative py-20 bg-gradient-to-br from-slate-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #3b82f6 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 md:px-0 text-center mt-6 md:mt-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-white text-sm font-medium shadow-lg">
            <FaCamera className="text-xs" />
            {t('gallery.header.badge')}
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          {t('gallery.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          {t('gallery.subtitle')}
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
            }`}
          >
            {t('gallery.filter.all')}
          </button>
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="space-y-12">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`rounded-2xl bg-gradient-to-br ${category.bgColor} p-6 shadow-lg border border-white/50`}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-md`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-xl">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.subtitle}</p>
                  </div>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.images.map((image, imageIndex) => (
                    <motion.div
                      key={image}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: imageIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                        <Image
                          src={image}
                          alt={`${category.title} - Image ${imageIndex + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                            <FaCamera className="text-gray-700 text-sm" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors z-10"
            >
              <FaTimes />
            </button>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={selectedImage}
                alt="Gallery Image"
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Bottom Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mt-12"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-white font-medium shadow-lg">
          <FaCamera className="text-sm" />
          <span className="text-sm">{t('gallery.bottom_accent')}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery; 