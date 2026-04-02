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
    asin: "B0C1GF88DS",
    img: "https://m.media-amazon.com/images/I/51ctVYliSOL._AC_SX679_.jpg"
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
    asin: "B0BF5YXTMX",
    img: "https://m.media-amazon.com/images/I/51+rwYUs2QL._AC_SX679_.jpg"
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
    asin: "B0BSL98D73",
    img: "https://m.media-amazon.com/images/I/61K9Ci2sU6L._AC_SY300_SX300_QL70_ML2_.jpg"
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
    rating: 4.7, asin: "B0C1GF88DS",
    img: "https://m.media-amazon.com/images/I/51ctVYliSOL._AC_SX679_.jpg"
  },
  {
    id: "c2", subcat: "airfryer",
    emoji: "🍗", brand: "Philips", badge: "-20%",
    name: "Philips HD9280/70 Airfryer XXL",
    desc: "1,4 kg de capacité. Technologie RapidAir pour une cuisson homogène.",
    price: "149,99€", priceOld: "189,99€",
    rating: 4.5, asin: "B0BKGJWJDT",
    img: "https://m.media-amazon.com/images/I/51AHfXBhknL._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "c3", subcat: "airfryer",
    emoji: "🥔", brand: "Cosori", badge: "Nouveau",
    name: "Cosori Air Fryer Pro LE 5,5L",
    desc: "130 recettes dans l'app. Écran tactile et 12 fonctions de cuisson.",
    price: "89,99€", priceOld: "109,99€",
    rating: 4.6, asin: "B09T73PJXB",
    img: "https://m.media-amazon.com/images/I/41sYBQPNBoL._AC_.jpg"
  },
  {
    id: "c4", subcat: "cafe",
    emoji: "☕", brand: "De'Longhi", badge: "Top",
    name: "De'Longhi Magnifica Evo ECAM290.61",
    desc: "Machine grain à tasse entièrement automatique. Moulin céramique intégré.",
    price: "449,99€", priceOld: "599,99€",
    rating: 4.6, asin: "B0BF5YXTMX",
    img: "https://m.media-amazon.com/images/I/51+rwYUs2QL._AC_SX679_.jpg"
  },
  {
    id: "c5", subcat: "cafe",
    emoji: "🫖", brand: "Krups", badge: "",
    name: "Krups EA8108 Essential",
    desc: "Espresso grain automatique compact. Mousseur à lait intégré.",
    price: "299,99€", priceOld: "389,99€",
    rating: 4.4, asin: "B00INSX904",
    img: "https://m.media-amazon.com/images/I/61Ai9Gk8aYL._AC_SX679_.jpg"
  },
  {
    id: "c6", subcat: "cafe",
    emoji: "☕", brand: "Nespresso", badge: "Best-seller",
    name: "Nespresso Vertuo Pop",
    desc: "Design compact, 5 tailles de tasses. Technologie Centrifusion.",
    price: "79,99€", priceOld: "99,99€",
    rating: 4.7, asin: "B0C3P9P7B3",
    img: "https://m.media-amazon.com/images/I/610oGrfG35L._AC_SX679_.jpg"
  },
  {
    id: "c7", subcat: "robot",
    emoji: "🥘", brand: "Moulinex", badge: "Top",
    name: "Moulinex Cuisine Companion XL HF80CB10",
    desc: "Robot cuiseur 5,5L avec balance intégrée. 6 programmes automatiques.",
    price: "599,99€", priceOld: "799,99€",
    rating: 4.5, asin: "B084ZP1H7Z",
    img: "https://m.media-amazon.com/images/I/61VjyRHbreL._AC_SX679_.jpg"
  },
  {
    id: "c8", subcat: "robot",
    emoji: "🍲", brand: "Robicook", badge: "",
    name: "Robicook XL Robot Cuiseur Connecté",
    desc: "Robot cuiseur multifonctions connecté. Balance intégrée et écran tactile.",
    price: "399,99€", priceOld: "499,99€",
    rating: 4.3, asin: "B0BHXKF81H",
    img: "https://m.media-amazon.com/images/I/81BpjYrT2ML._AC_SX679_.jpg"
  },
  {
    id: "c9", subcat: "blender",
    emoji: "🥤", brand: "Ninja", badge: "Best-seller",
    name: "Ninja BN750EU Detect Duo",
    desc: "Blender professionnel 2 en 1. Détection automatique des aliments.",
    price: "149,99€", priceOld: "199,99€",
    rating: 4.7, asin: "B08CRTKLX4",
    img: "https://m.media-amazon.com/images/I/71m0uVGpbNL._AC_SX679_.jpg"
  },
  {
    id: "c10", subcat: "blender",
    emoji: "🍹", brand: "Vitamix", badge: "",
    name: "Vitamix E310 Explorian",
    desc: "Blender professionnel ultra-puissant. 10 vitesses + pulse.",
    price: "399,99€", priceOld: "449,99€",
    rating: 4.8, asin: "B07BFXKNM2",
    img: "https://www.vitamix.com/us/en_us/products/media_9bda4788608eabaa7bbbf3bfa59803af269b7f77.jpg"
  },
  {
    id: "c11", subcat: "plancha",
    emoji: "🥩", brand: "Lebenlang", badge: "Nouveau",
    name: "Lebenlang Plancha Électrique 2400W",
    desc: "Plancha XXL inox pour intérieur et extérieur. Chauffe rapide et homogène.",
    price: "109,99€", priceOld: "149,99€",
    rating: 4.4, asin: "B0DFH999LH",
    img: "https://m.media-amazon.com/images/I/81-mJfRjaeL._AC_SX679_.jpg"
  },
  {
    id: "c12", subcat: "pain",
    emoji: "🍞", brand: "Panasonic", badge: "Top",
    name: "Panasonic SD-YR2550 Machine à Pain",
    desc: "Machine à pain automatique avec distributeur. 31 programmes dont sans gluten.",
    price: "167,99€", priceOld: "219,99€",
    rating: 4.6, asin: "B0921SL9SV",
    img: "https://m.media-amazon.com/images/I/71wv4EjIo-L._AC_SX679_.jpg"
  },
  {
    id: "c13", subcat: "multicuiseur",
    emoji: "🫕", brand: "Instant Pot", badge: "Best-seller",
    name: "Instant Pot Duo Multicuiseur 11-en-1",
    desc: "Autocuiseur, friteuse à air, cuisson lente, vapeur... 5,7L polyvalent.",
    price: "187,99€", priceOld: "249,99€",
    rating: 4.5, asin: "B0979HKNRH",
    img: "https://m.media-amazon.com/images/I/617xNqXzjSL._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "c14", subcat: "raclette",
    emoji: "🧀", brand: "H.Koenig", badge: "",
    name: "H.Koenig Raclette 8 Personnes WOD360",
    desc: "Appareil raclette, fondue et pierre granit. Socle pivotant 180°. 1400W.",
    price: "59,99€", priceOld: "79,99€",
    rating: 4.5, asin: "B0BXM45KK4",
    img: "https://m.media-amazon.com/images/I/71YWTfMSvpL._AC_SX679_.jpg"
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
    rating: 4.8, asin: "B0BSL98D73",
    img: "https://m.media-amazon.com/images/I/61K9Ci2sU6L._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "m2", subcat: "aspirateur",
    emoji: "🧹", brand: "iRobot", badge: "Best-seller",
    name: "iRobot Roomba j7+",
    desc: "Évitement d'obstacles intelligent. Vidage automatique de la corbeille.",
    price: "499,99€", priceOld: "699,99€",
    rating: 4.5, asin: "B09CCNQDJS",
    img: "https://m.media-amazon.com/images/I/71EizGxyh5L._AC_SX679_.jpg"
  },
  {
    id: "m3", subcat: "aspirateur",
    emoji: "🏠", brand: "Ecovacs", badge: "-30%",
    name: "Ecovacs Deebot T20 Omni",
    desc: "Aspiration + serpillière. Station tout-en-un avec séchage à l'air chaud.",
    price: "549,99€", priceOld: "799,99€",
    rating: 4.4, asin: "B0C2VH6X31",
    img: "https://m.media-amazon.com/images/I/51BsLJ96R2L._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "m4", subcat: "enceinte",
    emoji: "🔊", brand: "Amazon", badge: "Best-seller",
    name: "Amazon Echo Dot (Nouvelle génération)",
    desc: "Enceinte connectée Alexa compacte. Son amélioré et détection de présence.",
    price: "44,99€", priceOld: "59,99€",
    rating: 4.7, asin: "B09B8X9RGM",
    img: "https://m.media-amazon.com/images/I/71wQobPqbyL._AC_SY741_.jpg"
  },
  {
    id: "m5", subcat: "enceinte",
    emoji: "🎵", brand: "Amazon", badge: "",
    name: "Amazon Echo Spot (Nouvelle génération)",
    desc: "Réveil connecté avec Alexa et écran. Son de qualité premium.",
    price: "59,99€", priceOld: "79,99€",
    rating: 4.6, asin: "B0C2S2J7JP",
    img: "https://m.media-amazon.com/images/I/61oDE1Wg+oL._AC_SX300_SY300_QL70_ML2_.jpg"
  },
  {
    id: "m6", subcat: "camera",
    emoji: "📷", brand: "Ring", badge: "Top",
    name: "Ring Video Doorbell 4",
    desc: "Sonnette vidéo HD. Détection de mouvement et vision nocturne couleur.",
    price: "149,99€", priceOld: "179,99€",
    rating: 4.4, asin: "B08NY19G4C",
    img: "https://m.media-amazon.com/images/I/51kQwdEkmaL._SY450_.jpg"
  },
  {
    id: "m7", subcat: "camera",
    emoji: "🔍", brand: "Tapo", badge: "-25%",
    name: "Tapo C200 Caméra intérieure",
    desc: "Caméra Wi-Fi 360°. Rotation motorisée et vision nocturne. Compatible Alexa.",
    price: "24,99€", priceOld: "34,99€",
    rating: 4.5, asin: "B07XLML2YS",
    img: "https://m.media-amazon.com/images/I/418Hc+TDWjL._AC_SX679_.jpg"
  },
  {
    id: "m8", subcat: "camera",
    emoji: "🏡", brand: "Arlo", badge: "",
    name: "Arlo Pro 5 Caméra extérieure 2K",
    desc: "Caméra 2K sans fil. Détection de personnes, véhicules et animaux.",
    price: "199,99€", priceOld: "249,99€",
    rating: 4.4, asin: "B0D6GYK1LX",
    img: "https://m.media-amazon.com/images/I/61Gmp5rUhwL._AC_SX679_.jpg"
  },
  {
    id: "m9", subcat: "lumiere",
    emoji: "💡", brand: "Philips Hue", badge: "Best-seller",
    name: "Philips Hue White & Color Starter Kit",
    desc: "3 ampoules E27 + pont de connexion. 16 millions de couleurs.",
    price: "129,99€", priceOld: "169,99€",
    rating: 4.7, asin: "B099NRLRG3",
    img: "https://m.media-amazon.com/images/I/61DQTO5VJbL._AC_SX342_SY445_QL70_ML2_.jpg"
  },
  {
    id: "m10", subcat: "lumiere",
    emoji: "🌈", brand: "Govee", badge: "",
    name: "Govee Ampoules WiFi Intelligentes E27",
    desc: "Lot de 2 ampoules RGBWW connectées. Compatible Alexa et Google Home.",
    price: "22,99€", priceOld: "34,99€",
    rating: 4.4, asin: "B0C3VLCFJR",
    img: "https://m.media-amazon.com/images/I/61FQ3FVoTeL._AC_SX679_.jpg"
  },
  {
    id: "m11", subcat: "thermostat",
    emoji: "🌡️", brand: "Meross", badge: "Nouveau",
    name: "Meross Thermostat Connecté Matter",
    desc: "Thermostat WiFi compatible HomeKit, Alexa et Google Home. Programmable.",
    price: "59,99€", priceOld: "79,99€",
    rating: 4.5, asin: "B0F3CSW5BJ",
    img: "https://m.media-amazon.com/images/I/61xJzmlVAZL._AC_SX679_.jpg"
  },
  {
    id: "m12", subcat: "prise",
    emoji: "🔌", brand: "Tapo", badge: "Best-seller",
    name: "Tapo P100 Prise Connectée WiFi",
    desc: "Prise intelligente compatible Alexa et Google Home. Contrôle à distance.",
    price: "18,99€", priceOld: "24,99€",
    rating: 4.6, asin: "B08HKV28ZR",
    img: "https://m.media-amazon.com/images/I/51BMTMSlG0L._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "m13", subcat: "serrure",
    emoji: "🔐", brand: "Nuki", badge: "Top",
    name: "Nuki Smart Lock Go 2025",
    desc: "Serrure connectée Bluetooth & Matter. Ouverture via smartphone ou code.",
    price: "146,99€", priceOld: "179,99€",
    rating: 4.4, asin: "B0DVLYQWXX",
    img: "https://m.media-amazon.com/images/I/61VfnvIPpmL._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "m14", subcat: "securite",
    emoji: "🚨", brand: "X-Sense", badge: "",
    name: "X-Sense Détecteur Fumée & CO Connecté",
    desc: "Détecteur 2-en-1 fumée et monoxyde de carbone WiFi. Alertes sur smartphone.",
    price: "49,99€", priceOld: "69,99€",
    rating: 4.5, asin: "B0DDL1V686",
    img: "https://m.media-amazon.com/images/I/71poEV2HnjL._AC_SX679_.jpg"
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
