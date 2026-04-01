const TAG = "meilleursappa-21";

function amzLink(asin) {
  return `https://www.amazon.fr/dp/${asin}?tag=${TAG}`;
}

// ===== TOP PICKS =====
const topPicks = [
  {
    rank: 1,
    label: "Meilleur air fryer 2026",
    emoji: "🍟",
    name: "Ninja AF160EU Air Fryer XL",
    sub: "6,2L — Idéal famille",
    rating: 4.7, reviews: 12400,
    price: "129,99€", priceOld: "179,99€", save: "-28%",
    pros: ["Grande capacité 6,2L", "Cuisson ultra rapide", "Facile à nettoyer"],
    cons: ["Encombrant sur le plan de travail"],
    asin: "B0C1GF88DS"
  },
  {
    rank: 2,
    label: "Meilleure machine à café 2026",
    emoji: "☕",
    name: "De'Longhi Magnifica Evo",
    sub: "Grain à tasse — Expresso & cappuccino",
    rating: 4.6, reviews: 8750,
    price: "449,99€", priceOld: "599,99€", save: "-25%",
    pros: ["Grain à tasse automatique", "Moulin intégré silencieux", "Interface intuitive"],
    cons: ["Investissement initial élevé"],
    asin: "B0BF5YXTMX"
  },
  {
    rank: 3,
    label: "Meilleur aspirateur robot 2026",
    emoji: "🤖",
    name: "Roborock S8 Pro Ultra",
    sub: "Aspiration + lavage — Vidage automatique",
    rating: 4.8, reviews: 5200,
    price: "699,99€", priceOld: "899,99€", save: "-22%",
    pros: ["Aspiration 6000Pa", "Lavage vadrouille rotatif", "Vidage automatique"],
    cons: ["Prix premium"],
    asin: "B0BSL98D73"
  }
];

// ===== CUISINE =====
const cuisineProducts = [
  {
    id: "c1", subcat: "airfryer",
    emoji: "🍟", brand: "Ninja", badge: "Best-seller",
    name: "Ninja AF160EU Air Fryer XL 6,2L",
    desc: "Friture sans huile avec 6 modes de cuisson. Parfait pour les familles.",
    price: "129,99€", priceOld: "179,99€",
    rating: 4.7, asin: "B09WBTQS6P"
  },
  {
    id: "c2", subcat: "airfryer",
    emoji: "🍗", brand: "Philips", badge: "-20%",
    name: "Philips HD9280/70 Airfryer XXL",
    desc: "1,4 kg de capacité. Technologie RapidAir pour une cuisson homogène.",
    price: "149,99€", priceOld: "189,99€",
    rating: 4.5, asin: "B0BKGJWJDT"
  },
  {
    id: "c3", subcat: "airfryer",
    emoji: "🥔", brand: "Cosori", badge: "Nouveau",
    name: "Cosori Air Fryer Pro LE 5,5L",
    desc: "130 recettes dans l'app. Écran tactile et 12 fonctions de cuisson.",
    price: "89,99€", priceOld: "109,99€",
    rating: 4.6, asin: "B09T73PJXB"
  },
  {
    id: "c4", subcat: "cafe",
    emoji: "☕", brand: "De'Longhi", badge: "Top",
    name: "De'Longhi Magnifica Evo ECAM290.61",
    desc: "Machine grain à tasse entièrement automatique. Moulin céramique intégré.",
    price: "449,99€", priceOld: "599,99€",
    rating: 4.6, asin: "B0BF5YXTMX"
  },
  {
    id: "c5", subcat: "cafe",
    emoji: "🫖", brand: "Krups", badge: "",
    name: "Krups EA8108 Essential",
    desc: "Espresso grain automatique compact. Mousseur à lait intégré.",
    price: "299,99€", priceOld: "389,99€",
    rating: 4.4, asin: "B00INSX904"
  },
  {
    id: "c6", subcat: "cafe",
    emoji: "☕", brand: "Nespresso", badge: "Best-seller",
    name: "Nespresso Vertuo Pop",
    desc: "Design compact, 5 tailles de tasses. Technologie Centrifusion.",
    price: "79,99€", priceOld: "99,99€",
    rating: 4.7, asin: "B0C3P9P7B3"
  },
  {
    id: "c7", subcat: "robot",
    emoji: "🥘", brand: "Moulinex", badge: "Top",
    name: "Moulinex Cuisine Companion XL HF80CB10",
    desc: "Robot cuiseur 5,5L avec balance intégrée. 6 programmes automatiques.",
    price: "599,99€", priceOld: "799,99€",
    rating: 4.5, asin: "B084ZP1H7Z"
  },
  {
    id: "c8", subcat: "robot",
    emoji: "🍲", brand: "Kenwood", badge: "",
    name: "Kenwood kCook Multi Smart CCL450SI",
    desc: "Robot cuiseur connecté. Application avec +1000 recettes.",
    price: "449,99€", priceOld: "549,99€",
    rating: 4.3, asin: "B07W6Z3Q5R"
  },
  {
    id: "c9", subcat: "blender",
    emoji: "🥤", brand: "Ninja", badge: "Best-seller",
    name: "Ninja BN750EU Detect Duo",
    desc: "Blender professionnel 2 en 1. Détection automatique des aliments.",
    price: "149,99€", priceOld: "199,99€",
    rating: 4.7, asin: "B08CRTKLX4"
  },
  {
    id: "c10", subcat: "blender",
    emoji: "🍹", brand: "Vitamix", badge: "",
    name: "Vitamix E310 Explorian",
    desc: "Blender professionnel ultra-puissant. 10 vitesses + pulse.",
    price: "399,99€", priceOld: "449,99€",
    rating: 4.8, asin: "B07BFXKNM2"
  },
];

// ===== MAISON CONNECTÉE =====
const maisonProducts = [
  {
    id: "m1", subcat: "aspirateur",
    emoji: "🤖", brand: "Roborock", badge: "Top",
    name: "Roborock S8 Pro Ultra",
    desc: "Aspiration + lavage simultanés. Station de vidage et lavage automatique.",
    price: "699,99€", priceOld: "899,99€",
    rating: 4.8, asin: "B0BSL98D73"
  },
  {
    id: "m2", subcat: "aspirateur",
    emoji: "🧹", brand: "iRobot", badge: "Best-seller",
    name: "iRobot Roomba j7+",
    desc: "Évitement d'obstacles intelligent. Vidage automatique de la corbeille.",
    price: "499,99€", priceOld: "699,99€",
    rating: 4.5, asin: "B09CCNQDJS"
  },
  {
    id: "m3", subcat: "aspirateur",
    emoji: "🏠", brand: "Ecovacs", badge: "-30%",
    name: "Ecovacs Deebot T20 Omni",
    desc: "Aspiration + serpillière. Station tout-en-un avec séchage à l'air chaud.",
    price: "549,99€", priceOld: "799,99€",
    rating: 4.4, asin: "B0C2J2T7ZD"
  },
  {
    id: "m4", subcat: "enceinte",
    emoji: "🔊", brand: "Amazon", badge: "Best-seller",
    name: "Amazon Echo Dot 5ème génération",
    desc: "Enceinte connectée Alexa compacte. Son amélioré et détection de présence.",
    price: "59,99€", priceOld: "69,99€",
    rating: 4.7, asin: "B09B8RF33Y"
  },
  {
    id: "m5", subcat: "enceinte",
    emoji: "🎵", brand: "Amazon", badge: "",
    name: "Amazon Echo (4ème génération)",
    desc: "Son premium 360°. Hub Zigbee intégré pour la maison connectée.",
    price: "99,99€", priceOld: "119,99€",
    rating: 4.6, asin: "B07XKT8CF4"
  },
  {
    id: "m6", subcat: "camera",
    emoji: "📷", brand: "Ring", badge: "Top",
    name: "Ring Video Doorbell 4",
    desc: "Sonnette vidéo HD. Détection de mouvement et vision nocturne couleur.",
    price: "149,99€", priceOld: "179,99€",
    rating: 4.4, asin: "B08NY19G4C"
  },
  {
    id: "m7", subcat: "camera",
    emoji: "🔍", brand: "Tapo", badge: "-25%",
    name: "Tapo C200 Caméra intérieure",
    desc: "Caméra Wi-Fi 360°. Rotation motorisée et vision nocturne. Compatible Alexa.",
    price: "24,99€", priceOld: "34,99€",
    rating: 4.5, asin: "B07XLML2YS"
  },
  {
    id: "m8", subcat: "camera",
    emoji: "🏡", brand: "Arlo", badge: "",
    name: "Arlo Pro 4 Caméra extérieure",
    desc: "Caméra 2K HDR sans fil. Détection de personnes et véhicules.",
    price: "199,99€", priceOld: "249,99€",
    rating: 4.3, asin: "B08QX3FBJZ"
  },
  {
    id: "m9", subcat: "lumiere",
    emoji: "💡", brand: "Philips Hue", badge: "Best-seller",
    name: "Philips Hue White & Color Starter Kit",
    desc: "3 ampoules E27 + pont de connexion. 16 millions de couleurs.",
    price: "129,99€", priceOld: "169,99€",
    rating: 4.7, asin: "B099NRLRG3"
  },
  {
    id: "m10", subcat: "lumiere",
    emoji: "🌈", brand: "IKEA", badge: "",
    name: "IKEA TRÅDFRI Kit de démarrage",
    desc: "Solution domotique économique. Ampoules connectées avec télécommande.",
    price: "49,99€", priceOld: "59,99€",
    rating: 4.2, asin: "B07XQJG5S8"
  },
];

// ===== GUIDES =====
const guides = [
  {
    icon: "🍟",
    cat: "Guide d'achat",
    title: "Quel air fryer choisir en 2026 ?",
    desc: "Capacité, puissance, fonctions… tout ce qu'il faut savoir avant d'acheter votre friteuse à air.",
    link: "#"
  },
  {
    icon: "☕",
    cat: "Guide d'achat",
    title: "Machine à café grain : notre sélection",
    desc: "Du café de barista à domicile. On compare les meilleures machines automatiques.",
    link: "#"
  },
  {
    icon: "🤖",
    cat: "Comparatif",
    title: "Roborock vs iRobot vs Ecovacs",
    desc: "Quelle marque d'aspirateur robot choisir ? Comparatif complet des 3 leaders du marché.",
    link: "#"
  },
  {
    icon: "💡",
    cat: "Guide débutant",
    title: "Démarrer avec la maison connectée",
    desc: "Alexa, Google Home ou Apple HomeKit ? On vous aide à choisir votre écosystème domotique.",
    link: "#"
  },
  {
    icon: "📷",
    cat: "Comparatif",
    title: "Caméra de surveillance : intérieure vs extérieure",
    desc: "Ring, Arlo, Tapo… lequel offre le meilleur rapport qualité/prix en 2026 ?",
    link: "#"
  },
  {
    icon: "🥘",
    cat: "Guide d'achat",
    title: "Robot cuiseur : vaut-il le prix ?",
    desc: "Alternative au Thermomix ? On compare les robots cuiseurs à moins de 600€.",
    link: "#"
  },
];
