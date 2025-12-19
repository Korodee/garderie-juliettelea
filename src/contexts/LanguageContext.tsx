"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  fr: {
    // Hero Section
    "hero.title": "Garderie JulietteLea",
    "hero.subtitle": "Une garderie de qualité",
    "hero.description":
      "Depuis 1987, nous offrons un environnement sécuritaire, stimulant et bienveillant où chaque enfant peut grandir, apprendre et s'épanouir à son propre rythme.",
    "hero.recommended": "Recommandé par les parents depuis 35+ ans",
    "hero.cta": "Inscrire mon enfant",
    "hero.video": "Watch video",

    // Navigation
    "nav.presentation": "Présentation",
    "nav.program": "Programme",
    "nav.gallery": "Galerie",
    "nav.admission": "Admission",
    "nav.contact": "Contact",
    "nav.main_navigation": "Navigation principale",
    "nav.open_menu": "Ouvrir le menu",
    "nav.close_menu": "Fermer le menu",

    // About Section
    "about.since": "Depuis 1987",
    "about.history": "Notre Histoire",
    "about.history.description":
      "Plus de trois décennies d'excellence éducative, de passion et d'engagement envers le développement harmonieux de chaque enfant.",
    "about.mission": "Notre Mission",
    "about.mission.description":
      "Offrir un environnement sécuritaire, stimulant et bienveillant où chaque enfant peut grandir, apprendre, s'épanouir à son propre rythme et développer chaque jour davantage son autonomie.",
    "about.vision": "Notre Vision",
    "about.vision.description":
      "Faire avec excellence afin de former des citoyens autonomes, compatissants, curieux et prêts pour l'avenir.",
    "about.values": "Nos Valeurs Fondamentales",
    "about.values.description":
      "Les principes qui guident chacune de nos actions et interactions quotidiennes",
    "about.journey": "Notre Parcours",
    "about.journey.description":
      "Plus de 35 ans d'évolution et d'engagement envers l'excellence éducative",
    "about.regulatory.title": "Conformité Réglementaire",
    "about.regulatory.description":
      "Notre engagement envers l'excellence éducative s'accompagne d'une conformité rigoureuse aux normes gouvernementales.",
    "about.regulatory.legal.title": "Cadre Légal",
    "about.regulatory.legal.law":
      "Loi sur les services de garde éducatifs à l'enfance",
    "about.regulatory.legal.regulation":
      "Règlement sur les services de garde éducatifs à l'enfance",
    "about.regulatory.legal.reducedContribution":
      "Règlement sur la contribution réduite",
    "about.regulatory.mfa.title": "Reconnaissance MFA",
    "about.regulatory.mfa.description":
      "Qualité éducative reconnue par le Ministère de la famille depuis 1995",
    "about.regulatory.parentsCommittee.title": "Comité de Parents",
    "about.regulatory.parentsCommittee.description":
      "Conformément à l'article 31, comité de 5 parents élus. Assemblée annuelle avant le 15 octobre. Un parent employé ou propriétaire ne peut pas en faire partie.",
    "about.professionalSupport.title": "Équipe de Professionnels Spécialisés",
    "about.professionalSupport.description":
      "Afin d'assurer un développement complet et harmonieux, la garderie collabore avec une équipe multidisciplinaire de professionnels qui interviennent au besoin.",
    "about.professionalSupport.psychopedagogue.name": "Psychoéducatrice",
    "about.professionalSupport.psychopedagogue.desc":
      "Soutien au développement socio-affectif",
    "about.professionalSupport.ergotherapist.name": "Ergothérapeute",
    "about.professionalSupport.ergotherapist.desc":
      "Développement des habiletés motrices",
    "about.professionalSupport.orthophonist.name": "Orthophoniste",
    "about.professionalSupport.orthophonist.desc":
      "Développement du langage et communication",
    "about.professionalSupport.physiotherapist.name": "Physiothérapeute",
    "about.professionalSupport.physiotherapist.desc":
      "Développement moteur et postural",

    // Stats
    "stats.experience": "Années d'expérience",
    "stats.children": "Enfants accueillis",
    "stats.educators": "Éducatrices qualifiées",
    "stats.team": "Équipe stable et expérimentée",
    "stats.security": "Sécurité",
    "stats.environment": "Environnement protégé",

    // Values
    "values.education.title": "Éducation",
    "values.education.description":
      "Excellence éducative reconnue par le Ministère de la famille",
    "values.compassion.title": "Compassion",
    "values.compassion.description":
      "Accompagnement bienveillant et empathique de chaque enfant",
    "values.love.title": "Amour",
    "values.love.description":
      "Chaque enfant est accueilli avec affection et bienveillance",
    "values.respect.title": "Respect",
    "values.respect.description":
      "Respect de l'individualité et du rythme de chaque enfant",
    "values.autonomy.title": "Autonomie",
    "values.autonomy.description":
      "Développement de l'indépendance et de la confiance en soi",
    "values.creativity.title": "Créativité",
    "values.creativity.description":
      "Encouragement de l'expression artistique et imaginative",

    // Timeline
    "timeline.1987.title": "Fondation",
    "timeline.1987.description":
      "Création de Garderie JulietteLea avec une vision bilingue et une approche centrée sur le développement global de l'enfant",
    "timeline.1995.title": "Reconnaissance MFA",
    "timeline.1995.description":
      "Obtention de la reconnaissance officielle du Ministère de la famille avec qualité éducative reconnue",
    "timeline.2010.title": "Expansion",
    "timeline.2010.description":
      "Agrandissement des installations pour accueillir 80 enfants (15 poupons + 65 enfants)",
    "timeline.2025.title": "Rénovation Complète",
    "timeline.2025.description":
      "Rénovation intérieure complète des espaces éducatifs pour offrir un environnement moderne et stimulant",

    // Program Section
    "program.title": "Programme éducatif québécois",
    "program.subtitle":
      "Apprendre en s'amusant, chaque jour, en français et en anglais.",
    "program.approach": "Approche",
    "program.approach.description":
      "Les enfants sont encouragés à explorer, à poser des questions, à faire des choix et à apprendre à travers leurs intérêts. Les éducatrices jouent un rôle actif dans l'observation, le soutien et l'enrichissement des expériences des enfants.",
    "program.capacity": "Capacité de 80 enfants",
    "program.babies": "15 bébés",
    "program.children": "65 enfants",
    "program.ratios.babies": "Bébés",
    "program.ratios.toddlers": "2 à 4 ans",
    "program.ratios.preschool": "4 à 5 ans",

    // Activities
    "activities.sensory": "Activités sensorielles, motrices et artistiques",
    "activities.sensory.desc":
      "Exploration tactile, motrice, artistique et auditive.",
    "activities.music": "Chansons, histoires et jeux symboliques",
    "activities.music.desc":
      "Chansons, histoires, jeux de rôle, blocs, coin lecture.",
    "activities.motor": "Motricité fine et globale",
    "activities.motor.desc":
      "Ateliers et jeux extérieurs quotidiens (cour sécurisée).",
    "activities.outings": "Sorties éducatives et journées thématiques",
    "activities.outings.desc": "Découvertes, sorties et journées à thème.",
    "activities.fundamentals": "Apprentissages fondamentaux",
    "activities.fundamentals.desc":
      "Introduction aux chiffres, lettres, formes et couleurs.",
    "activities.bilingual": "Activités bilingues quotidiennes",
    "activities.bilingual.desc":
      "Intégration du français et de l'anglais chaque jour.",

    // Environment Section
    "environment.title": "Un environnement bilingue, actif et joyeux",
    "environment.quote":
      "Chaque journée est une aventure pleine de découvertes.",
    "environment.organization.title": "Organisation de l'environnement",
    "environment.organization.list1":
      "Coins thématiques pour chaque type d'activité",
    "environment.organization.list2":
      "Matériel accessible et organisé par les enfants",
    "environment.organization.list3":
      "Espaces pour activités individuelles et de groupe",
    "environment.bilingual.title": "Intégration bilingue",
    "environment.bilingual.description":
      "Français et anglais intégrés dans les routines, jeux, chansons, histoires et interactions quotidiennes.",
    "environment.growth.title": "Épanouissement global",
    "environment.growth.description":
      "Immersion linguistique naturelle favorisant le développement cognitif, langagier et social.",

    // Communication Section
    "communication.reports.title": "Rapports de Développement",
    "communication.reports.description":
      "Deux fois par année, nous remettons aux parents un rapport du développement global de leur enfant, comprenant :",
    "communication.reports.list1":
      "Des observations précises effectuées par l'éducatrice",
    "communication.reports.list2":
      "Des photos illustrant les progrès dans différents domaines",
    "communication.reports.list3":
      "Suivi motricité, langage, socialisation, etc.",
    "communication.reports.list4":
      "Évaluation des compétences cognitives et socio-affectives",
    "communication.reports.list5":
      "Recommandations pour le développement continu",
    "communication.email.title": "Courriel Hebdomadaire",
    "communication.email.description":
      "Chaque vendredi, nous envoyons un courriel informatif aux parents, comprenant :",
    "communication.email.list1": "Des photos de la semaine",
    "communication.email.list2":
      "Les activités thématiques préparées et animées par nos éducatrices",
    "communication.email.list3":
      "Un aperçu des apprentissages vécus par les enfants",
    "communication.email.list4":
      "Informations importantes pour la semaine suivante",
    "communication.kaymbu.title": "Application Kaymbu",
    "communication.kaymbu.description":
      "Plateforme sécurisée qui permet aux parents d'accéder à :",
    "communication.kaymbu.list1":
      "Le rapport quotidien de leur enfant (repas, toilette, humeur, sieste, etc.)",
    "communication.kaymbu.list2": "Des observations sur les activités du jour",
    "communication.kaymbu.list3": "Un suivi personnalisé au quotidien",
    "communication.kaymbu.preview": "Aperçu de l'application parent",
    "communication.testimonial":
      "Grâce à la communication régulière de la garderie, je me sens toujours impliqué(e) dans la journée de mon enfant !",

    // Team Section
    "team.title": "Notre équipe",
    "team.subtitle":
      "Des professionnelles attentionnées, engagées auprès des enfants et des familles.",
    "team.excellence": "Une équipe dédiée à l'excellence",

    // Team Sections
    "team.sections.direction.title": "Direction",
    "team.sections.pouponniere.title": "Pouponnière",
    "team.sections.pouponniere.subtitle": "0-18 mois",
    "team.sections.trottineurs.title": "Trottineurs",
    "team.sections.trottineurs.subtitle": "18-36 mois",
    "team.sections.bambins.title": "Bambins",
    "team.sections.bambins.subtitle": "3-4 ans",
    "team.sections.prescolaire.title": "Préscolaire",
    "team.sections.prescolaire.subtitle": "4-5 ans",
    "team.sections.soutien.title": "Soutien",

    // Team Roles
    "team.roles.directrice": "Directrice",
    "team.roles.pouponniere.0_8": "0-8 mois",
    "team.roles.pouponniere.9_12": "9-12 mois",
    "team.roles.pouponniere.12_18": "12-18 mois",
    "team.roles.trottineurs.18_24": "18-24 mois",
    "team.roles.trottineurs.24_30": "24-30 mois",
    "team.roles.trottineurs.30_36": "30-36 mois",
    "team.roles.educatrice": "Éducatrice",
    "team.roles.cuisiniere": "Cuisinière",
    "team.roles.remplacante": "Remplaçante",

    // Testimonials
    "testimonials.title": "Témoignages des parents",
    "testimonials.subtitle": "Recommandé par les familles",
    "testimonials.description":
      "Découvrez ce que les parents disent de leur expérience à la garderie JulietteLea.",
    "testimonials.parent_of": "Parent de",

    // Contact
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Nous sommes là pour répondre à vos questions",
    "contact.address": "Adresse",
    "contact.phone": "Téléphone",
    "contact.email": "Courriel",
    "contact.hours": "Heures d'ouverture",
    "contact.hours.value": "Lundi au vendredi, 7h à 18h",
    "contact.address_title": "Notre Adresse",
    "contact.street": "6230 boulevard Decarie",
    "contact.city": "Montréal (Québec)",
    "contact.map_title": "Carte de la Garderie JulietteLea",
    "contact.online_registration": "Inscription en ligne",

    // Footer
    "footer.brand": "Garderie JulietteLea",
    "footer.tagline": "Une garderie de qualité",
    "footer.description":
      "Depuis 1987, nous offrons un environnement sécuritaire et stimulant pour le développement harmonieux de votre enfant.",
    "footer.contact": "Contact",
    "footer.hours": "Lun-Ven: 7h00 - 18h00",
    "footer.services": "Nos Services",
    "footer.services.garderie": "Garderie éducative",
    "footer.services.program": "Programme éducatif québécois",
    "footer.services.activities": "Activités stimulantes",
    "footer.services.nutrition": "Nutrition équilibrée",
    "footer.quick_links": "Liens rapides",
    "footer.links.about": "À propos",
    "footer.links.program": "Programme",
    "footer.links.gallery": "Galerie",
    "footer.links.contact": "Contact",
    "footer.links.presentation": "Présentation",
    "footer.links.admission": "Admission",
    "footer.rights": "Tous droits réservés.",
    "footer.made_with": "Fait avec",
    "footer.in_canada": "au Canada",

    // Footer Contact
    "footer.contact.title": "Contact",
    "footer.contact.phone": "Téléphone",
    "footer.contact.email": "Courriel",
    "footer.contact.address": "Adresse",
    "footer.contact.fax": "Télécopieur",

    // Footer Quick Links
    "footer.quick_links.title": "Liens rapides",

    // Footer Hours
    "footer.hours.title": "Horaires",
    "footer.hours.opening_hours": "Horaires d'ouverture",
    "footer.hours.schedule": "Lundi - Vendredi",
    "footer.hours.time": "7h00 - 18h00",

    // Footer Copyright
    "footer.copyright": "Tous droits réservés.",

    // Footer Branding
    "footer.branding.tagline": "Une garderie de qualité",
    "footer.branding.description":
      "Depuis 1987, nous offrons un environnement sécuritaire et stimulant pour le développement harmonieux de votre enfant.",

    // Admission Section
    "admission.title": "Admission & inscription",
    "admission.subtitle": "Garderie subventionnée",
    "admission.description": "Inscription simple et rapide via La Place 0-5.",
    "admission.cta_button": "Accéder à La Place 0-5",
    "admission.process_title": "Processus d'Inscription",
    "admission.calculator_title": "Contribution réduite",
    "admission.calculator_description_1":
      "La garderie est subventionnée, et les parents paient uniquement la contribution réduite fixée par le gouvernement du Québec.",
    "admission.calculator_description_2":
      "Aucun frais supplémentaire n'est exigé, sauf en cas de services occasionnels ou spéciaux.",
    "admission.calculator_button": "Calculer ma contribution",
    "admission.info_title": "Infos clés",
    "admission.advantages_title": "Avantages de Notre Garderie",

    // Admission Process Steps
    "admission.process.step1.title": "Inscription en ligne",
    "admission.process.step1.description":
      "Inscriptions exclusivement via www.laplace0-5.com",
    "admission.process.step2.title": "Demande enregistrée",
    "admission.process.step2.description":
      "Votre demande est enregistrée sur La Place 0-5",
    "admission.process.step3.title": "Liste d'attente",
    "admission.process.step3.description":
      "Placement selon l'ordre de la liste d'attente",
    "admission.process.step4.title": "Contact automatique",
    "admission.process.step4.description":
      "Nous vous contactons dès qu'une place correspondant à votre demande devient disponible",

    // Admission Info Items
    "admission.info.online_registration":
      "Inscription en ligne via La Place 0-5",
    "admission.info.open_year_round":
      "Ouvert toute l'année (sauf congés fériés)",
    "admission.info.children_0_5": "Accueil des enfants de 0 à 5 ans",
    "admission.info.reduced_contribution":
      "Contribution réduite fixée par le gouvernement",

    // Admission Advantages
    "admission.advantages.experience.title": "35+ années d'expérience",
    "admission.advantages.experience.description":
      "Excellence reconnue depuis 1987",
    "admission.advantages.team.title": "Équipe qualifiée",
    "admission.advantages.team.description":
      "Éducatrices diplômées et expérimentées",
    "admission.advantages.approach.title": "Approche bienveillante",
    "admission.advantages.approach.description":
      "Développement à son propre rythme",

    // Gallery Section
    'gallery.header.badge': 'Notre Garderie',
    'gallery.title': 'Nos espaces en images',
    'gallery.subtitle': 'Découvrez un cadre pensé pour le bien-être et la curiosité des enfants.',
    'gallery.filter.all': 'Tout Voir',
    'gallery.bottom_accent': 'Un lieu qui inspire chaque jour',

    // Gallery Categories
    'gallery.categories.entrance.title': 'Entrée & Accueil',
    'gallery.categories.entrance.subtitle': 'Notre espace d\'accueil chaleureux',
    'gallery.categories.classrooms.title': 'Salles de Classe',
    'gallery.categories.classrooms.subtitle': 'Espaces d\'apprentissage stimulants',
    'gallery.categories.outdoor.title': 'Espace Extérieur',
    'gallery.categories.outdoor.subtitle': 'Notre cour de jeux sécurisée',
    'gallery.categories.facilities.title': 'Installations',
    'gallery.categories.facilities.subtitle': 'Nos équipements et aménagements',
    'gallery.categories.nursery.title': 'Chambre de Bébé',
    'gallery.categories.nursery.subtitle': 'Espace de repos pour les tout-petits',
  },
  en: {
    // Hero Section
    "hero.title": "JulietteLea Daycare",
    "hero.subtitle": "A Quality Daycare",
    "hero.description":
      "Since 1987, we have offered a safe, stimulating, and nurturing environment where each child can grow, learn, and thrive at their own pace.",
    "hero.recommended": "Recommended by parents for 35+ years",
    "hero.cta": "Register my child",
    "hero.video": "Watch video",

    // Navigation
    "nav.presentation": "Presentation",
    "nav.program": "Program",
    "nav.gallery": "Gallery",
    "nav.admission": "Admission",
    "nav.contact": "Contact",
    "nav.main_navigation": "Main Navigation",
    "nav.open_menu": "Open Menu",
    "nav.close_menu": "Close Menu",

    // About Section
    "about.since": "Since 1987",
    "about.history": "Our History",
    "about.history.description":
      "Over three decades of educational excellence, passion, and commitment to the harmonious development of each child.",
    "about.mission": "Our Mission",
    "about.mission.description":
      "To provide a safe, stimulating, and nurturing environment where each child can grow, learn, thrive at their own pace and develop greater autonomy each day.",
    "about.vision": "Our Vision",
    "about.vision.description":
      "To excel in forming autonomous, compassionate, curious citizens ready for the future.",
    "about.values": "Our Core Values",
    "about.values.description":
      "The principles that guide each of our daily actions and interactions",
    "about.journey": "Our Journey",
    "about.journey.description":
      "Over 35 years of evolution and commitment to educational excellence",
    "about.regulatory.title": "Regulatory Compliance",
    "about.regulatory.description":
      "Our commitment to educational excellence is accompanied by rigorous regulatory compliance.",
    "about.regulatory.legal.title": "Legal Framework",
    "about.regulatory.legal.law": "Law on educational childcare services",
    "about.regulatory.legal.regulation":
      "Regulation on educational childcare services",
    "about.regulatory.legal.reducedContribution":
      "Reduced contribution regulation",
    "about.regulatory.mfa.title": "MFA Recognition",
    "about.regulatory.mfa.description":
      "Educational quality recognized by the Ministry of Family since 1995",
    "about.regulatory.parentsCommittee.title": "Parents Committee",
    "about.regulatory.parentsCommittee.description":
      "In accordance with Article 31, a committee of 5 elected parents. Annual general meeting before October 15. An employee or owner parent cannot be a member.",
    "about.professionalSupport.title": "Team of Specialized Professionals",
    "about.professionalSupport.description":
      "To ensure a complete and harmonious development, the daycare collaborates with a multidisciplinary team of professionals who intervene as needed.",
    "about.professionalSupport.psychopedagogue.name": "Psychopedagogue",
    "about.professionalSupport.psychopedagogue.desc":
      "Social-emotional support",
    "about.professionalSupport.ergotherapist.name": "Ergotherapist",
    "about.professionalSupport.ergotherapist.desc":
      "Development of motor skills",
    "about.professionalSupport.orthophonist.name": "Orthophonist",
    "about.professionalSupport.orthophonist.desc":
      "Language development and communication",
    "about.professionalSupport.physiotherapist.name": "Physiotherapist",
    "about.professionalSupport.physiotherapist.desc":
      "Motor and postural development",

    // Stats
    "stats.experience": "Years of experience",
    "stats.children": "Children welcomed",
    "stats.educators": "Qualified educators",
    "stats.team": "Stable and experienced team",
    "stats.security": "Security",
    "stats.environment": "Protected environment",

    // Values
    "values.education.title": "Education",
    "values.education.description":
      "Educational excellence recognized by the Ministry of Family",
    "values.compassion.title": "Compassion",
    "values.compassion.description":
      "Warm and empathetic accompaniment of each child",
    "values.love.title": "Love",
    "values.love.description":
      "Each child is welcomed with affection and kindness",
    "values.respect.title": "Respect",
    "values.respect.description":
      "Respect for individuality and the rhythm of each child",
    "values.autonomy.title": "Autonomy",
    "values.autonomy.description":
      "Development of independence and self-confidence",
    "values.creativity.title": "Creativity",
    "values.creativity.description":
      "Encouragement of artistic and imaginative expression",

    // Timeline
    "timeline.1987.title": "Foundation",
    "timeline.1987.description":
      "Creation of JulietteLea Daycare with a bilingual vision and an approach centered on the holistic development of the child",
    "timeline.1995.title": "MFA Recognition",
    "timeline.1995.description":
      "Official recognition of the Ministry of Family with recognized educational quality",
    "timeline.2010.title": "Expansion",
    "timeline.2010.description":
      "Expansion of facilities to accommodate 80 children (15 babies + 65 children)",
    "timeline.2025.title": "Complete Renovation",
    "timeline.2025.description":
      "Complete interior renovation of educational spaces to offer a modern and stimulating environment",

    // Program Section
    "program.title": "Quebec Educational Program",
    "program.subtitle":
      "Learning through play, every day, in French and English.",
    "program.approach": "Approach",
    "program.approach.description":
      "Children are encouraged to explore, ask questions, make choices, and learn through their interests. Educators play an active role in observing, supporting, and enriching children's experiences.",
    "program.capacity": "Capacity of 80 children",
    "program.babies": "15 babies",
    "program.children": "65 children",
    "program.ratios.babies": "Babies",
    "program.ratios.toddlers": "2 to 4 years",
    "program.ratios.preschool": "4 to 5 years",

    // Activities
    "activities.sensory": "Sensory, motor, and artistic activities",
    "activities.sensory.desc":
      "Tactile, motor, artistic, and auditory exploration.",
    "activities.music": "Songs, stories, and symbolic play",
    "activities.music.desc":
      "Songs, stories, role-playing, blocks, reading corner.",
    "activities.motor": "Fine and gross motor skills",
    "activities.motor.desc":
      "Daily workshops and outdoor games (secure courtyard).",
    "activities.outings": "Educational outings and themed days",
    "activities.outings.desc": "Discoveries, outings, and themed days.",
    "activities.fundamentals": "Fundamental learning",
    "activities.fundamentals.desc":
      "Introduction to numbers, letters, shapes, and colors.",
    "activities.bilingual": "Daily bilingual activities",
    "activities.bilingual.desc": "Integration of French and English each day.",

    // Environment Section
    "environment.title": "A bilingual, active, and joyful environment",
    "environment.quote": "Every day is an adventure full of discoveries.",
    "environment.organization.title": "Environment Organization",
    "environment.organization.list1": "Thematic coins for each activity type",
    "environment.organization.list2":
      "Accessible and organized materials by children",
    "environment.organization.list3":
      "Spaces for individual and group activities",
    "environment.bilingual.title": "Bilingual Integration",
    "environment.bilingual.description":
      "French and English integrated into routines, games, songs, stories, and daily interactions.",
    "environment.growth.title": "Global Development",
    "environment.growth.description":
      "Natural immersion in language fostering cognitive, linguistic, and social development.",

    // Communication Section
    "communication.reports.title": "Development Reports",
    "communication.reports.description":
      "Twice a year, we provide parents with a comprehensive development report, including:",
    "communication.reports.list1": "Precise observations made by the educator",
    "communication.reports.list2":
      "Photos illustrating progress in various areas",
    "communication.reports.list3":
      "Motor skills tracking, language, socialization, etc.",
    "communication.reports.list4":
      "Cognitive and socio-emotional skill evaluations",
    "communication.reports.list5": "Continued development recommendations",
    "communication.email.title": "Weekly Email",
    "communication.email.description":
      "Every Friday, we send an informative email to parents, including:",
    "communication.email.list1": "Photos of the week",
    "communication.email.list2":
      "Thematic activities prepared and led by our educators",
    "communication.email.list3":
      "An overview of the learning experiences of the children",
    "communication.email.list4": "Important information for the following week",
    "communication.kaymbu.title": "Kaymbu Application",
    "communication.kaymbu.description":
      "Secure platform allowing parents to access:",
    "communication.kaymbu.list1":
      "Daily report of their child (meals, toilet, mood, nap, etc.)",
    "communication.kaymbu.list2": "Observations on activities of the day",
    "communication.kaymbu.list3": "Personalized daily follow-up",
    "communication.kaymbu.preview": "Parent application preview",
    "communication.testimonial":
      "Thanks to regular communication with the daycare, I feel always involved in my child's day!",

    // Team Section
    "team.title": "Our Team",
    "team.subtitle": "Caring professionals committed to children and families.",
    "team.excellence": "A team dedicated to excellence",

    // Team Sections
    "team.sections.direction.title": "Management",
    "team.sections.pouponniere.title": "Nursery",
    "team.sections.pouponniere.subtitle": "0-18 months",
    "team.sections.trottineurs.title": "Toddlers",
    "team.sections.trottineurs.subtitle": "18-36 months",
    "team.sections.bambins.title": "Preschool",
    "team.sections.bambins.subtitle": "3-4 years",
    "team.sections.prescolaire.title": "Pre-K",
    "team.sections.prescolaire.subtitle": "4-5 years",
    "team.sections.soutien.title": "Support",

    // Team Roles
    "team.roles.directrice": "Director",
    "team.roles.pouponniere.0_8": "0-8 months",
    "team.roles.pouponniere.9_12": "9-12 months",
    "team.roles.pouponniere.12_18": "12-18 months",
    "team.roles.trottineurs.18_24": "18-24 months",
    "team.roles.trottineurs.24_30": "24-30 months",
    "team.roles.trottineurs.30_36": "30-36 months",
    "team.roles.educatrice": "Educator",
    "team.roles.cuisiniere": "Cook",
    "team.roles.remplacante": "Substitute",

    // Testimonials
    "testimonials.title": "Parent Testimonials",
    "testimonials.subtitle": "Recommended by families",
    "testimonials.description":
      "Discover what parents say about their experience at JulietteLea Daycare.",
    "testimonials.parent_of": "Parent of",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We are here to answer your questions",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Opening Hours",
    "contact.hours.value": "Monday to Friday, 7am to 6pm",
    "contact.address_title": "Our Address",
    "contact.street": "6230 boulevard Decarie",
    "contact.city": "Montreal, QC",
    "contact.map_title": "Map of JulietteLea Daycare",
    "contact.online_registration": "Online Registration",

    // Footer
    "footer.brand": "JulietteLea Daycare",
    "footer.tagline": "A Quality Daycare",
    "footer.description":
      "Since 1987, we have offered a safe, stimulating, and nurturing environment where each child can grow, learn, and thrive at their own pace.",
    "footer.contact": "Contact",
    "footer.hours": "Mon-Fri: 7am - 6pm",
    "footer.services": "Our Services",
    "footer.services.garderie": "Educational Daycare",
    "footer.services.program": "Quebec Educational Program",
    "footer.services.activities": "Stimulating Activities",
    "footer.services.nutrition": "Balanced Nutrition",
    "footer.quick_links": "Quick Links",
    "footer.links.about": "About",
    "footer.links.program": "Program",
    "footer.links.gallery": "Gallery",
    "footer.links.contact": "Contact",
    "footer.links.presentation": "Presentation",
    "footer.links.admission": "Admission",
    "footer.rights": "All rights reserved.",
    "footer.made_with": "Made with",
    "footer.in_canada": "in Canada",

    // Footer Contact
    "footer.contact.title": "Contact",
    "footer.contact.phone": "Phone",
    "footer.contact.email": "Email",
    "footer.contact.address": "Address",
    "footer.contact.fax": "Fax",

    // Footer Quick Links
    "footer.quick_links.title": "Quick Links",

    // Footer Hours
    "footer.hours.title": "Hours",
    "footer.hours.opening_hours": "Opening Hours",
    "footer.hours.schedule": "Mon - Fri",
    "footer.hours.time": "7am - 6pm",

    // Footer Copyright
    "footer.copyright": "All rights reserved.",

    // Footer Branding
    "footer.branding.tagline": "A Quality Daycare",
    "footer.branding.description":
      "Since 1987, we have offered a safe, stimulating, and nurturing environment where each child can grow, learn, and thrive at their own pace.",

    // Admission Section
    "admission.title": "Admission & Registration",
    "admission.subtitle": "Subsidized Daycare",
    "admission.description": "Simple and fast registration via La Place 0-5.",
    "admission.cta_button": "Access La Place 0-5",
    "admission.process_title": "Registration Process",
    "admission.calculator_title": "Reduced Contribution",
    "admission.calculator_description_1":
      "The daycare is subsidized, and parents only pay the reduced contribution set by the Government of Quebec.",
    "admission.calculator_description_2":
      "No additional fees are required, except for occasional or special services.",
    "admission.calculator_button": "Calculate my contribution",
    "admission.info_title": "Key Information",
    "admission.advantages_title": "Advantages of Our Daycare",

    // Admission Process Steps
    "admission.process.step1.title": "Online Registration",
    "admission.process.step1.description":
      "Registration exclusively via www.laplace0-5.com",
    "admission.process.step2.title": "Request Registered",
    "admission.process.step2.description":
      "Your request is registered on La Place 0-5",
    "admission.process.step3.title": "Waiting List",
    "admission.process.step3.description":
      "Placement according to waiting list order",
    "admission.process.step4.title": "Automatic Contact",
    "admission.process.step4.description":
      "We contact you as soon as a spot matching your request becomes available",

    // Admission Info Items
    "admission.info.online_registration":
      "Online registration via La Place 0-5",
    "admission.info.open_year_round": "Open year-round (except holidays)",
    "admission.info.children_0_5": "Welcoming children from 0 to 5 years old",
    "admission.info.reduced_contribution":
      "Reduced contribution set by the government",

    // Admission Advantages
    "admission.advantages.experience.title": "35+ years of experience",
    "admission.advantages.experience.description":
      "Recognized excellence since 1987",
    "admission.advantages.team.title": "Qualified team",
    "admission.advantages.team.description":
      "Diplomaed and experienced educators",
    "admission.advantages.approach.title": "Caring approach",
    "admission.advantages.approach.description":
      "Development at their own pace",

    // Gallery Section
    'gallery.header.badge': 'Our Daycare',
    'gallery.title': 'Our spaces in images',
    'gallery.subtitle': 'Discover an environment designed for children\'s well-being and curiosity.',
    'gallery.filter.all': 'View All',
    'gallery.bottom_accent': 'A place that inspires every day',

    // Gallery Categories
    'gallery.categories.entrance.title': 'Entrance & Welcome',
    'gallery.categories.entrance.subtitle': 'Our warm welcome space',
    'gallery.categories.classrooms.title': 'Classrooms',
    'gallery.categories.classrooms.subtitle': 'Stimulating learning spaces',
    'gallery.categories.outdoor.title': 'Outdoor Space',
    'gallery.categories.outdoor.subtitle': 'Our secure playground',
    'gallery.categories.facilities.title': 'Facilities',
    'gallery.categories.facilities.subtitle': 'Our equipment and amenities',
    'gallery.categories.nursery.title': 'Baby Room',
    'gallery.categories.nursery.subtitle': 'Rest space for little ones',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
