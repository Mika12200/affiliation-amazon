const TAG = "meilleursappa-21";

function amzLink(asin) {
  return `https://www.amazon.fr/dp/${asin}?tag=${TAG}`;
}

// ===== TOP PICKS =====
const topPicks = [
  {
    rank: 1,
    label: "Meilleur air fryer 2026",
    emoji: "ðŸŸ",
    name: "Ninja AF160EU Air Fryer XL",
    sub: "6,2L â€” IdÃ©al famille",
    rating: 4.7, reviews: 12400,
    price: "129,99â‚¬", priceOld: "179,99â‚¬", save: "-28%",
    pros: ["Grande capacitÃ© 6,2L", "Cuisson ultra rapide", "Facile Ã  nettoyer"],
    cons: ["Encombrant sur le plan de travail"],
    asin: "B0C1GF88DS",
    img: "https://m.media-amazon.com/images/I/51ctVYliSOL._AC_SX679_.jpg"
  },
  {
    rank: 2,
    label: "Meilleure machine Ã  cafÃ© 2026",
    emoji: "â˜•",
    name: "De'Longhi Magnifica Evo",
    sub: "Grain Ã  tasse â€” Expresso & cappuccino",
    rating: 4.6, reviews: 8750,
    price: "449,99â‚¬", priceOld: "599,99â‚¬", save: "-25%",
    pros: ["Grain Ã  tasse automatique", "Moulin intÃ©grÃ© silencieux", "Interface intuitive"],
    cons: ["Investissement initial Ã©levÃ©"],
    asin: "B0BF5YXTMX",
    img: "https://m.media-amazon.com/images/I/51+rwYUs2QL._AC_SX679_.jpg"
  },
  {
    rank: 3,
    label: "Meilleur aspirateur robot 2026",
    emoji: "ðŸ¤–",
    name: "Roborock S8 Pro Ultra",
    sub: "Aspiration + lavage â€” Vidage automatique",
    rating: 4.8, reviews: 5200,
    price: "699,99â‚¬", priceOld: "899,99â‚¬", save: "-22%",
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
    emoji: "ðŸŸ", brand: "Ninja", badge: "Best-seller",
    name: "Ninja AF160EU Air Fryer XL 6,2L",
    desc: "Friture sans huile avec 6 modes de cuisson. Parfait pour les familles.",
    price: "129,99â‚¬", priceOld: "179,99â‚¬",
    rating: 4.7, asin: "B0C1GF88DS",
    img: "https://m.media-amazon.com/images/I/51ctVYliSOL._AC_SX679_.jpg"
  },
  {
    id: "c2", subcat: "airfryer",
    emoji: "ðŸ—", brand: "Philips", badge: "-20%",
    name: "Philips HD9280/70 Airfryer XXL",
    desc: "1,4 kg de capacitÃ©. Technologie RapidAir pour une cuisson homogÃ¨ne.",
    price: "149,99â‚¬", priceOld: "189,99â‚¬",
    rating: 4.5, asin: "B0BKGJWJDT",
    img: "https://m.media-amazon.com/images/I/51AHfXBhknL._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "c3", subcat: "airfryer",
    emoji: "ðŸ¥”", brand: "Cosori", badge: "Nouveau",
    name: "Cosori Air Fryer Pro LE 5,5L",
    desc: "130 recettes dans l'app. Ã‰cran tactile et 12 fonctions de cuisson.",
    price: "89,99â‚¬", priceOld: "109,99â‚¬",
    rating: 4.6, asin: "B09T73PJXB",
    img: "https://m.media-amazon.com/images/I/41sYBQPNBoL._AC_.jpg"
  },
  {
    id: "c4", subcat: "cafe",
    emoji: "â˜•", brand: "De'Longhi", badge: "Top",
    name: "De'Longhi Magnifica Evo ECAM290.61",
    desc: "Machine grain Ã  tasse entiÃ¨rement automatique. Moulin cÃ©ramique intÃ©grÃ©.",
    price: "449,99â‚¬", priceOld: "599,99â‚¬",
    rating: 4.6, asin: "B0BF5YXTMX",
    img: "https://m.media-amazon.com/images/I/51+rwYUs2QL._AC_SX679_.jpg"
  },
  {
    id: "c5", subcat: "cafe",
    emoji: "ðŸ«–", brand: "Krups", badge: "",
    name: "Krups EA8108 Essential",
    desc: "Espresso grain automatique compact. Mousseur Ã  lait intÃ©grÃ©.",
    price: "299,99â‚¬", priceOld: "389,99â‚¬",
    rating: 4.4, asin: "B00INSX904",
    img: "https://m.media-amazon.com/images/I/61Ai9Gk8aYL._AC_SX679_.jpg"
  },
  {
    id: "c6", subcat: "cafe",
    emoji: "â˜•", brand: "Nespresso", badge: "Best-seller",
    name: "Nespresso Vertuo Pop",
    desc: "Design compact, 5 tailles de tasses. Technologie Centrifusion.",
    price: "79,99â‚¬", priceOld: "99,99â‚¬",
    rating: 4.7, asin: "B0C3P9P7B3",
    img: "https://m.media-amazon.com/images/I/610oGrfG35L._AC_SX679_.jpg"
  },
  {
    id: "c7", subcat: "robot",
    emoji: "ðŸ¥˜", brand: "Moulinex", badge: "Top",
    name: "Moulinex Cuisine Companion XL HF80CB10",
    desc: "Robot cuiseur 5,5L avec balance intÃ©grÃ©e. 6 programmes automatiques.",
    price: "599,99â‚¬", priceOld: "799,99â‚¬",
    rating: 4.5, asin: "B084ZP1H7Z",
    img: "https://m.media-amazon.com/images/I/61VjyRHbreL._AC_SX679_.jpg"
  },
  {
    id: "c8", subcat: "robot",
    emoji: "ðŸ²", brand: "Robicook", badge: "",
    name: "Robicook XL Robot Cuiseur ConnectÃ©",
    desc: "Robot cuiseur multifonctions connectÃ©. Balance intÃ©grÃ©e et Ã©cran tactile.",
    price: "399,99â‚¬", priceOld: "499,99â‚¬",
    rating: 4.3, asin: "B0BHXKF81H",
    img: "https://m.media-amazon.com/images/I/81BpjYrT2ML._AC_SX679_.jpg"
  },
  {
    id: "c9", subcat: "blender",
    emoji: "ðŸ¥¤", brand: "Ninja", badge: "Best-seller",
    name: "Ninja BN750EU Detect Duo",
    desc: "Blender professionnel 2 en 1. DÃ©tection automatique des aliments.",
    price: "149,99â‚¬", priceOld: "199,99â‚¬",
    rating: 4.7, asin: "B08CRTKLX4",
    img: "https://m.media-amazon.com/images/I/71m0uVGpbNL._AC_SX679_.jpg"
  },
  {
    id: "c10", subcat: "blender",
    emoji: "ðŸ¹", brand: "Vitamix", badge: "",
    name: "Vitamix E310 Explorian",
    desc: "Blender professionnel ultra-puissant. 10 vitesses + pulse.",
    price: "399,99â‚¬", priceOld: "449,99â‚¬",
    rating: 4.8, asin: "B07BFXKNM2",
    img: "https://www.vitamix.com/us/en_us/products/media_9bda4788608eabaa7bbbf3bfa59803af269b7f77.jpg"
  },
  {
    id: "c11", subcat: "plancha",
    emoji: "ðŸ¥©", brand: "Lebenlang", badge: "Nouveau",
    name: "Lebenlang Plancha Ã‰lectrique 2400W",
    desc: "Plancha XXL inox pour intÃ©rieur et extÃ©rieur. Chauffe rapide et homogÃ¨ne.",
    price: "109,99â‚¬", priceOld: "149,99â‚¬",
    rating: 4.4, asin: "B0DFH999LH",
    img: "https://m.media-amazon.com/images/I/81-mJfRjaeL._AC_SX679_.jpg"
  },
  {
    id: "c12", subcat: "pain",
    emoji: "ðŸž", brand: "Panasonic", badge: "Top",
    name: "Panasonic SD-YR2550 Machine Ã  Pain",
    desc: "Machine Ã  pain automatique avec distributeur. 31 programmes dont sans gluten.",
    price: "167,99â‚¬", priceOld: "219,99â‚¬",
    rating: 4.6, asin: "B0921SL9SV",
    img: "https://m.media-amazon.com/images/I/71wv4EjIo-L._AC_SX679_.jpg"
  },
  {
    id: "c13", subcat: "multicuiseur",
    emoji: "ðŸ«•", brand: "Instant Pot", badge: "Best-seller",
    name: "Instant Pot Duo Multicuiseur 11-en-1",
    desc: "Autocuiseur, friteuse Ã  air, cuisson lente, vapeur... 5,7L polyvalent.",
    price: "187,99â‚¬", priceOld: "249,99â‚¬",
    rating: 4.5, asin: "B0979HKNRH",
    img: "https://m.media-amazon.com/images/I/617xNqXzjSL._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "c15", subcat: "extracteur",
    emoji: "ðŸ§ƒ", brand: "Hurom", badge: "Top",
    name: "Hurom H310A Extracteur de Jus Ã  Froid",
    desc: "Pression Ã  froid 220ml. PrÃ©serve les vitamines et nutriments. Sans BPA, 100W silencieux.",
    price: "399,99â‚¬", priceOld: "499,99â‚¬",
    rating: 4.6, asin: "B09ZBL4PTZ",
    img: "https://m.media-amazon.com/images/I/61YiecFIw7L._AC_SY879_.jpg"
  },
  {
    id: "c16", subcat: "extracteur",
    emoji: "ðŸŠ", brand: "Fretta", badge: "Best-seller",
    name: "Fretta Extracteur de Jus Grande Ouverture 108mm",
    desc: "Fruits et lÃ©gumes entiers. Pression Ã  froid, 1L de capacitÃ©. Facile Ã  nettoyer, 200W.",
    price: "89,99â‚¬", priceOld: "129,99â‚¬",
    rating: 4.4, asin: "B0G3WP3KZ2",
    img: "https://m.media-amazon.com/images/I/71f29NUkuIL._AC_SX679_.jpg"
  },
  {
    id: "c17", subcat: "extracteur",
    emoji: "ðŸ¥•", brand: "Moulinex", badge: "",
    name: "Moulinex Frutelia Plus Centrifugeuse 350W",
    desc: "Centrifugeuse 950ml, 2 vitesses. Goulot 6cm, filtre inox. Compacte et efficace.",
    price: "54,99â‚¬", priceOld: "79,99â‚¬",
    rating: 4.3, asin: "B07NW8995F",
    img: "https://m.media-amazon.com/images/I/61i4sDp9SZL._AC_SX679_.jpg"
  },
  {
    id: "c18", subcat: "extracteur",
    emoji: "ðŸ", brand: "Kuvings", badge: "Nouveau",
    name: "Kuvings AUTO6 Extracteur Mains Libres",
    desc: "DÃ©coupe automatique des fruits entiers. Panier 1,7L, nettoyage facile.",
    price: "599,99â‚¬", priceOld: "699,99â‚¬",
    rating: 4.5, asin: "B0F32DQB9W",
    img: "https://m.media-amazon.com/images/I/51ByHYFfryL._AC_SX679_.jpg"
  },
  {
    id: "c14", subcat: "raclette",
    emoji: "ðŸ§€", brand: "H.Koenig", badge: "",
    name: "H.Koenig Raclette 8 Personnes WOD360",
    desc: "Appareil raclette, fondue et pierre granit. Socle pivotant 180Â°. 1400W.",
    price: "59,99â‚¬", priceOld: "79,99â‚¬",
    rating: 4.5, asin: "B0BXM45KK4",
    img: "https://m.media-amazon.com/images/I/71YWTfMSvpL._AC_SX679_.jpg"
  },
  {
    id: "c19", subcat: "cafe",
    emoji: "â˜•", brand: "Krups", badge: "Best-seller",
    name: "Krups Dolce Gusto Genio S Plus",
    desc: "Machine Ã  capsules compacte et design. Pression 15 bars, 30+ boissons chaudes et froides.",
    price: "49,99â‚¬", priceOld: "79,99â‚¬",
    rating: 4.5, asin: "B0CF57ZPC9",
    img: "https://m.media-amazon.com/images/I/61JcWhQi1tL._AC_SX679_.jpg"
  },
  {
    id: "c20", subcat: "cafe",
    emoji: "â˜•", brand: "Bosch", badge: "-30%",
    name: "Bosch Tassimo Happy TAS1002N",
    desc: "Machine Ã  dosettes T-Disc ultra simple. Plus de 40 boissons disponibles. Compacte.",
    price: "34,99â‚¬", priceOld: "49,99â‚¬",
    rating: 4.3, asin: "B0DB1SCPHN",
    img: "https://m.media-amazon.com/images/I/41qDK0ShkyL._AC_SX679_.jpg"
  },
  {
    id: "c21", subcat: "cafe",
    emoji: "â˜•", brand: "Bosch", badge: "",
    name: "Bosch Tassimo My Way TAS6502",
    desc: "Personnalisation via bouton My Way : intensitÃ©, tempÃ©rature et volume. Ã‰cran tactile.",
    price: "89,99â‚¬", priceOld: "129,99â‚¬",
    rating: 4.4, asin: "B0857Z91PY",
    img: "https://m.media-amazon.com/images/I/719E9xgZMaL._AC_SY879_.jpg"
  },
  {
    id: "c22", subcat: "cafe",
    emoji: "â˜•", brand: "Philips", badge: "",
    name: "Philips Senseo CSA240 Machine Ã  Dosettes",
    desc: "Technologie Crema Plus. RÃ©servoir 0,9L, 2 tasses simultanÃ©es. Simple et rapide.",
    price: "64,99â‚¬", priceOld: "89,99â‚¬",
    rating: 4.4, asin: "B08T9XRF91",
    img: "https://m.media-amazon.com/images/I/51zQXE4AsSL._AC_SX679_.jpg"
  },
  {
    id: "c23", subcat: "cafe",
    emoji: "â˜•", brand: "Philips", badge: "Nouveau",
    name: "Philips L'OR Barista Sublime LM9012",
    desc: "Capsules Nespresso & L'OR. Double capsule pour 2 cafÃ©s simultanÃ©s. 19 bars.",
    price: "59,99â‚¬", priceOld: "89,99â‚¬",
    rating: 4.5, asin: "B09B166BMD",
    img: "https://m.media-amazon.com/images/I/61UX+C7ymZL._AC_SX679_.jpg"
  },
  {
    id: "c24", subcat: "cafe",
    emoji: "â˜•", brand: "KOTLIE", badge: "",
    name: "KOTLIE AC-513HF Machine 5-en-1 Multi-Capsules",
    desc: "Compatible Nespresso, Dolce Gusto, ESE, cafÃ© moulu et A Modo Mio. 19 bars, chaud & froid.",
    price: "54,99â‚¬", priceOld: "79,99â‚¬",
    rating: 4.3, asin: "B0CLZRPSHT",
    img: "https://m.media-amazon.com/images/I/71IqN8S6TxL._AC_SX679_.jpg"
  },
  {
    id: "c25", subcat: "cafe",
    emoji: "â˜•", brand: "Philips", badge: "Top",
    name: "Philips SÃ©rie 800 EP0824 Grain Ã  Tasse",
    desc: "Broyeur cÃ©ramique intÃ©grÃ©, 15 bars. Mousseur Ã  lait classique. EntrÃ©e de gamme grain automatique.",
    price: "249,99â‚¬", priceOld: "329,99â‚¬",
    rating: 4.4, asin: "B0CHQP4DZF",
    img: "https://m.media-amazon.com/images/I/61cKTt9tWKL._AC_SX679_.jpg"
  },
];

// ===== MAISON CONNECTÃ‰E =====
const maisonProducts = [
  {
    id: "m1", subcat: "aspirateur",
    emoji: "ðŸ¤–", brand: "Roborock", badge: "Top",
    name: "Roborock S8 Pro Ultra",
    desc: "Aspiration + lavage simultanÃ©s. Station de vidage et lavage automatique.",
    price: "699,99â‚¬", priceOld: "899,99â‚¬",
    rating: 4.8, asin: "B0BSL98D73",
    img: "https://m.media-amazon.com/images/I/61K9Ci2sU6L._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "m2", subcat: "aspirateur",
    emoji: "ðŸ§¹", brand: "iRobot", badge: "Best-seller",
    name: "iRobot Roomba j7+",
    desc: "Ã‰vitement d'obstacles intelligent. Vidage automatique de la corbeille.",
    price: "499,99â‚¬", priceOld: "699,99â‚¬",
    rating: 4.5, asin: "B09CCNQDJS",
    img: "https://m.media-amazon.com/images/I/71EizGxyh5L._AC_SX679_.jpg"
  },
  {
    id: "m3", subcat: "aspirateur",
    emoji: "ðŸ ", brand: "Ecovacs", badge: "-30%",
    name: "Ecovacs Deebot T20 Omni",
    desc: "Aspiration + serpilliÃ¨re. Station tout-en-un avec sÃ©chage Ã  l'air chaud.",
    price: "549,99â‚¬", priceOld: "799,99â‚¬",
    rating: 4.4, asin: "B0C2VH6X31",
    img: "https://m.media-amazon.com/images/I/51BsLJ96R2L._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "m4", subcat: "enceinte",
    emoji: "ðŸ”Š", brand: "Amazon", badge: "Best-seller",
    name: "Amazon Echo Dot (Nouvelle gÃ©nÃ©ration)",
    desc: "Enceinte connectÃ©e Alexa compacte. Son amÃ©liorÃ© et dÃ©tection de prÃ©sence.",
    price: "44,99â‚¬", priceOld: "59,99â‚¬",
    rating: 4.7, asin: "B09B8X9RGM",
    img: "https://m.media-amazon.com/images/I/71wQobPqbyL._AC_SY741_.jpg"
  },
  {
    id: "m5", subcat: "enceinte",
    emoji: "ðŸŽµ", brand: "Amazon", badge: "",
    name: "Amazon Echo Spot (Nouvelle gÃ©nÃ©ration)",
    desc: "RÃ©veil connectÃ© avec Alexa et Ã©cran. Son de qualitÃ© premium.",
    price: "59,99â‚¬", priceOld: "79,99â‚¬",
    rating: 4.6, asin: "B0C2S2J7JP",
    img: "https://m.media-amazon.com/images/I/61oDE1Wg+oL._AC_SX300_SY300_QL70_ML2_.jpg"
  },
  {
    id: "m28", subcat: "enceinte",
    emoji: "ðŸ”Š", brand: "Amazon", badge: "Nouveau",
    name: "Amazon Echo Pop Enceinte Compacte Alexa",
    desc: "Son puissant dans un format ultra-compact. ContrÃ´le vocal Alexa, Bluetooth et WiFi. IdÃ©ale petite piÃ¨ce.",
    price: "29,99â‚¬", priceOld: "49,99â‚¬",
    rating: 4.6, asin: "B09ZX7MS5B",
    img: "https://m.media-amazon.com/images/I/41mjJlfUTSL._AC_SX679_.jpg"
  },
  {
    id: "m29", subcat: "enceinte",
    emoji: "ðŸŽ¶", brand: "Amazon", badge: "Top",
    name: "Amazon Echo Studio Dolby Atmos",
    desc: "Son immersif Dolby Atmos et audio spatial. Hub connectÃ© intÃ©grÃ©, WiFi et Bluetooth. Notre meilleur son.",
    price: "199,99â‚¬", priceOld: "249,99â‚¬",
    rating: 4.7, asin: "B09M5QKDH4",
    img: "https://m.media-amazon.com/images/I/51Rb6l3VFVL._AC_SX679_.jpg"

  },
  {
    id: "m30", subcat: "enceinte",
    emoji: "ðŸŽµ", brand: "Google", badge: "",
    name: "Google Nest Mini 2Ã¨me GÃ©nÃ©ration",
    desc: "Enceinte connectÃ©e Google Assistant. Son riche, commande vocale, contrÃ´le domotique. Compacte.",
    price: "29,99â‚¬", priceOld: "49,99â‚¬",
    rating: 4.5, asin: "B0CGYFYY34",
    img: "https://m.media-amazon.com/images/I/71TeLBggnwL._AC_SX425_.jpg"
  },
  {
    id: "m6", subcat: "camera",
    emoji: "ðŸ“·", brand: "Ring", badge: "Top",
    name: "Ring Video Doorbell 4",
    desc: "Sonnette vidÃ©o HD. DÃ©tection de mouvement et vision nocturne couleur.",
    price: "149,99â‚¬", priceOld: "179,99â‚¬",
    rating: 4.4, asin: "B08NY19G4C",
    aliLink: "https://s.click.aliexpress.com/e/_c4FHbRWV",
    img: "https://m.media-amazon.com/images/I/51kQwdEkmaL._SY450_.jpg"
  },
  {
    id: "m7", subcat: "camera",
    emoji: "ðŸ”", brand: "Tapo", badge: "-25%",
    name: "Tapo C200 CamÃ©ra intÃ©rieure",
    desc: "CamÃ©ra Wi-Fi 360Â°. Rotation motorisÃ©e et vision nocturne. Compatible Alexa.",
    price: "24,99â‚¬", priceOld: "34,99â‚¬",
    rating: 4.5, asin: "B07XLML2YS",
    img: "https://m.media-amazon.com/images/I/418Hc+TDWjL._AC_SX679_.jpg"
  },
  {
    id: "m8", subcat: "camera",
    emoji: "ðŸ¡", brand: "Arlo", badge: "",
    name: "Arlo Pro 5 CamÃ©ra extÃ©rieure 2K",
    desc: "CamÃ©ra 2K sans fil. DÃ©tection de personnes, vÃ©hicules et animaux.",
    price: "199,99â‚¬", priceOld: "249,99â‚¬",
    rating: 4.4, asin: "B0D6GYK1LX",
    aliLink: "https://s.click.aliexpress.com/e/_c3PxMHvL",
    img: "https://m.media-amazon.com/images/I/61Gmp5rUhwL._AC_SX679_.jpg"
  },
  {
    id: "m9", subcat: "lumiere",
    emoji: "ðŸ’¡", brand: "Philips Hue", badge: "Best-seller",
    name: "Philips Hue White & Color Starter Kit",
    desc: "3 ampoules E27 + pont de connexion. 16 millions de couleurs.",
    price: "129,99â‚¬", priceOld: "169,99â‚¬",
    rating: 4.7, asin: "B099NRLRG3",
    aliLink: "https://s.click.aliexpress.com/e/_c2yLyHGh",
    aliLink: "https://s.click.aliexpress.com/e/_c2yLyHGh",
    img: "https://m.media-amazon.com/images/I/61DQTO5VJbL._AC_SX342_SY445_QL70_ML2_.jpg"
  },
  {
    id: "m10", subcat: "lumiere",
    emoji: "ðŸŒˆ", brand: "Govee", badge: "",
    name: "Govee Ampoules WiFi Intelligentes E27",
    desc: "Lot de 2 ampoules RGBWW connectÃ©es. Compatible Alexa et Google Home.",
    price: "22,99â‚¬", priceOld: "34,99â‚¬",
    rating: 4.4, asin: "B0C3VLCFJR",
    aliLink: "https://s.click.aliexpress.com/e/_c4N4YmF7",
    aliLink: "https://s.click.aliexpress.com/e/_c4N4YmF7",
    img: "https://m.media-amazon.com/images/I/61FQ3FVoTeL._AC_SX679_.jpg"
  },
  {
    id: "m35", subcat: "lumiere",
    emoji: "ðŸ’¡", brand: "Tapo", badge: "Best-seller",
    name: "Tapo L530E Ampoule LED E27 WiFi Multicolore",
    desc: "8,7W 806Lm, 16 millions de couleurs, dimmable. Compatible Alexa et Google Home. Sans hub.",
    price: "9,99â‚¬", priceOld: "14,99â‚¬",
    rating: 4.5, asin: "B08GDC99PX",
    aliLink: "https://s.click.aliexpress.com/e/_c3pwsjCh",
    aliLink: "https://s.click.aliexpress.com/e/_c3pwsjCh",
    img: "https://m.media-amazon.com/images/I/619EduJE1kL._AC_SX679_.jpg"
  },
  {
    id: "m36", subcat: "lumiere",
    emoji: "ðŸ’¡", brand: "AISIRER", badge: "",
    name: "AISIRER Ampoule WiFi E27 RGB Lot de 2",
    desc: "10W 1000LM, multicolore RGB. Compatible Alexa, Google Home et Siri. Sans hub requis.",
    price: "13,99â‚¬", priceOld: "21,99â‚¬",
    rating: 4.4, asin: "B07S7B7KCR",
    aliLink: "https://s.click.aliexpress.com/e/_c3CXBiNX",
    aliLink: "https://s.click.aliexpress.com/e/_c3CXBiNX",
    img: "https://m.media-amazon.com/images/I/61IPEBQ0A-L._AC_SX679_.jpg"
  },
  {
    id: "m37", subcat: "lumiere",
    emoji: "ðŸ’¡", brand: "Philips Hue", badge: "Top",
    name: "Philips Hue GU10 White & Color Lot de 2",
    desc: "Ampoules LED GU10 350 lumens Bluetooth. 16 millions de couleurs. Alexa, Google, HomeKit.",
    price: "79,99â‚¬", priceOld: "109,99â‚¬",
    rating: 4.6, asin: "B099NS75JX",
    aliLink: "https://s.click.aliexpress.com/e/_c35HjJE9",
    aliLink: "https://s.click.aliexpress.com/e/_c35HjJE9",
    img: "https://m.media-amazon.com/images/I/61ygXLfC-vL._AC_SX679_.jpg"
  },
  {
    id: "m38", subcat: "lumiere",
    emoji: "ðŸ’¡", brand: "GY", badge: "-40%",
    name: "GY Ampoule ConnectÃ©e GU10 WiFi Lot de 6",
    desc: "7W 500LM RGB + blanc chaud/froid. Dimmable, Smart Life. Compatible Alexa et Google. Lot de 6.",
    price: "29,99â‚¬", priceOld: "49,99â‚¬",
    rating: 4.3, asin: "B09M3677F7",
    aliLink: "https://s.click.aliexpress.com/e/_c3dvyqYH",
    img: "https://m.media-amazon.com/images/I/61qQFgHkkaL._AC_SX679_.jpg"
  },
  {
    id: "m39", subcat: "lumiere",
    emoji: "ðŸŒˆ", brand: "iFEEL", badge: "",
    name: "iFEEL Ampoule ConnectÃ©e E27 Multicolore",
    desc: "LED dimmable RGB, tÃ©lÃ©commande incluse. Compatible Alexa et Google Home. WiFi, sans hub.",
    price: "8,99â‚¬", priceOld: "14,99â‚¬",
    rating: 4.3, asin: "B0C66HQRGF",
    aliLink: "https://s.click.aliexpress.com/e/_c3tdRgBb",
    img: "https://m.media-amazon.com/images/I/51ik0clOLuL._AC_SX679_.jpg"
  },
  {
    id: "m40", subcat: "lumiere",
    emoji: "ðŸ’¡", brand: "LIFX", badge: "Nouveau",
    name: "LIFX GU10 Ampoule WiFi Multicolore",
    desc: "Sans hub ni pont requis. Multicolore ajustable. Compatible Alexa, HomeKit et Google Assistant.",
    price: "29,99â‚¬", priceOld: "44,99â‚¬",
    rating: 4.4, asin: "B075411FZ2",
    aliLink: "https://s.click.aliexpress.com/e/_c34alsUN",
    aliLink: "https://s.click.aliexpress.com/e/_c34alsUN",
    img: "https://m.media-amazon.com/images/I/41ryn1wlthL._AC_SX679_.jpg"
  },
  {
    id: "m41", subcat: "lumiere",
    emoji: "ðŸ’¡", brand: "GY", badge: "Best-seller",
    name: "GY Ampoule E27 WiFi 23W 2400LM Globe G150",
    desc: "Puissante 23W, 2400 lumens. RGB + blanc chaud/froid. IdÃ©ale grandes piÃ¨ces. Alexa et Google.",
    price: "16,99â‚¬", priceOld: "24,99â‚¬",
    rating: 4.4, asin: "B09Y1TVBWN",
    aliLink: "https://s.click.aliexpress.com/e/_c4sR1HlF",
    aliLink: "https://s.click.aliexpress.com/e/_c4sR1HlF",
    img: "https://m.media-amazon.com/images/I/51UWVVBV+KL._AC_SX679_.jpg"
  },
  {
    id: "m42", subcat: "lumiere",
    emoji: "ðŸ’¡", brand: "ANOOPSYCHE", badge: "",
    name: "ANOOPSYCHE Ampoule WiFi E27 9W Lot de 2",
    desc: "Ã‰quivaut Ã  75W. Blanc chaud Ã  froid 2700K-6500K. Compatible Alexa, Echo et Google Home.",
    price: "11,99â‚¬", priceOld: "19,99â‚¬",
    rating: 4.3, asin: "B07KWPQMHH",
    aliLink: "https://s.click.aliexpress.com/e/_c3XGw1Vb",
    aliLink: "https://s.click.aliexpress.com/e/_c3XGw1Vb",
    img: "https://m.media-amazon.com/images/I/61DwrfxOIlL._AC_SX679_.jpg"
  },
  {
    id: "m11", subcat: "thermostat",
    emoji: "ðŸŒ¡ï¸", brand: "Meross", badge: "Nouveau",
    name: "Meross Thermostat ConnectÃ© Matter",
    desc: "Thermostat WiFi compatible HomeKit, Alexa et Google Home. Programmable.",
    price: "59,99â‚¬", priceOld: "79,99â‚¬",
    rating: 4.5, asin: "B0F3CSW5BJ",
    img: "https://m.media-amazon.com/images/I/61xJzmlVAZL._AC_SX679_.jpg"
  },
  {
    id: "m43", subcat: "thermostat",
    emoji: "ðŸŒ¡ï¸", brand: "Meross", badge: "Best-seller",
    name: "Meross Thermostat Encastrable WiFi ChaudiÃ¨re",
    desc: "Compatible Apple HomeKit, Alexa et Google Home. Pour chaudiÃ¨re gaz et chauffage au sol. Ã‰cran tactile.",
    price: "49,99â‚¬", priceOld: "69,99â‚¬",
    rating: 4.5, asin: "B0B8SDLTKC",
    img: "https://m.media-amazon.com/images/I/61OxlQ1YAtL._AC_SX679_.jpg"
  },
  {
    id: "m44", subcat: "thermostat",
    emoji: "ðŸŒ¡ï¸", brand: "MOES", badge: "Top",
    name: "MOES Thermostat ConnectÃ© Matter WiFi",
    desc: "Protocole Matter. Compatible Alexa, Google Home, SmartThings et Tuya. Programmable, chauffage eau.",
    price: "39,99â‚¬", priceOld: "59,99â‚¬",
    rating: 4.3, asin: "B0DK3FK4XC",
    img: "https://m.media-amazon.com/images/I/5133UDzLkpL._AC_SX679_.jpg"
  },
  {
    id: "m45", subcat: "thermostat",
    emoji: "ðŸŒ¡ï¸", brand: "SALCAR", badge: "",
    name: "SALCAR Thermostat WiFi Programmable avec HumiditÃ©",
    desc: "ChaudiÃ¨re gaz et chauffage sol. Affiche humiditÃ©, programmation hebdo. Compatible Alexa et Google.",
    price: "29,99â‚¬", priceOld: "44,99â‚¬",
    rating: 4.3, asin: "B0DBKYL8GX",
    img: "https://m.media-amazon.com/images/I/61sm7-bLmPL._AC_SX679_.jpg"
  },
  {
    id: "m46", subcat: "thermometre",
    emoji: "ðŸŒ¡ï¸", brand: "Govee", badge: "Best-seller",
    name: "Govee WiFi ThermomÃ¨tre HygromÃ¨tre IntÃ©rieur",
    desc: "Haute prÃ©cision, alertes sur app. Historique 2 ans exportable CSV. Cave, serre, chambre bÃ©bÃ©.",
    price: "12,99â‚¬", priceOld: "19,99â‚¬",
    rating: 4.5, asin: "B08Y8PQ7XZ",
    img: "https://m.media-amazon.com/images/I/61jlJmDShhL._AC_SX679_.jpg"
  },
  {
    id: "m47", subcat: "thermometre",
    emoji: "ðŸŒ¡ï¸", brand: "Konyks", badge: "Top",
    name: "Konyks Termo ThermomÃ¨tre HygromÃ¨tre Wi-Fi",
    desc: "Lecture Ã  distance, dÃ©clenche d'autres appareils Konyks. Compatible Alexa et Google Home.",
    price: "24,99â‚¬", priceOld: "34,99â‚¬",
    rating: 4.4, asin: "B09GS2MQ1D",
    img: "https://m.media-amazon.com/images/I/71-Izq9m6-L._AC_SX679_.jpg"
  },
  {
    id: "m48", subcat: "thermometre",
    emoji: "ðŸŒ¡ï¸", brand: "GHome", badge: "",
    name: "GHome Smart ThermomÃ¨tre HygromÃ¨tre WiFi",
    desc: "Capteur tempÃ©rature et humiditÃ© en temps rÃ©el. Alertes app, compatible Alexa. Cave Ã  vin, intÃ©rieur.",
    price: "9,99â‚¬", priceOld: "16,99â‚¬",
    rating: 4.3, asin: "B0CRB2R5PJ",
    img: "https://m.media-amazon.com/images/I/61A-gn0KoIL._AC_SX679_.jpg"
  },
  {
    id: "m49", subcat: "thermometre",
    emoji: "ðŸŒ¡ï¸", brand: "ORIA", badge: "Nouveau",
    name: "ThermomÃ¨tre HygromÃ¨tre WiFi avec Sonde Externe",
    desc: "Ã‰cran LCD, sonde externe incluse. Alertes app, idÃ©al serre, cave Ã  vin et garage.",
    price: "15,99â‚¬", priceOld: "24,99â‚¬",
    rating: 4.3, asin: "B0BGSQ7DL3",
    img: "https://m.media-amazon.com/images/I/613zrmeq2mL._AC_SX679_.jpg"
  },
  {
    id: "m50", subcat: "thermometre",
    emoji: "ðŸŒ¡ï¸", brand: "Otio", badge: "",
    name: "Otio ThermomÃ¨tre HygromÃ¨tre ConnectÃ© WiFi",
    desc: "Compatible Alexa et Google Home. Monitoring tempÃ©rature et humiditÃ©. App OtioHome.",
    price: "19,99â‚¬", priceOld: "29,99â‚¬",
    rating: 4.2, asin: "B08427M1S6",
    img: "https://m.media-amazon.com/images/I/51E-DbzpubL._AC_SX679_.jpg"
  },
  {
    id: "m12", subcat: "prise",
    emoji: "ðŸ”Œ", brand: "Tapo", badge: "Best-seller",
    name: "Tapo P100 Prise ConnectÃ©e WiFi",
    desc: "Prise intelligente compatible Alexa et Google Home. ContrÃ´le Ã  distance.",
    price: "18,99â‚¬", priceOld: "24,99â‚¬",
    rating: 4.6, asin: "B08HKV28ZR",
    aliLink: "https://s.click.aliexpress.com/e/_c3yQBvPn",
    img: "https://m.media-amazon.com/images/I/51BMTMSlG0L._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "m31", subcat: "prise",
    emoji: "ðŸ”Œ", brand: "EIGHTREE", badge: "Best-seller",
    name: "EIGHTREE Mini Prise ConnectÃ©e WiFi 16A",
    desc: "Suivi consommation d'Ã©nergie. Compatible Alexa, Google Home et SmartThings. 3680W, compacte.",
    price: "12,99â‚¬", priceOld: "19,99â‚¬",
    rating: 4.4, asin: "B0BTDTLJGC",
    aliLink: "https://s.click.aliexpress.com/e/_c3m3Dz65",
    img: "https://m.media-amazon.com/images/I/612PajKC7FL._AC_SX679_.jpg"
  },
  {
    id: "m32", subcat: "prise",
    emoji: "ðŸ”Œ", brand: "Amazon", badge: "",
    name: "Amazon Smart Plug Prise ConnectÃ©e WiFi",
    desc: "Prise officielle Amazon avec Alexa intÃ©grÃ©. Configuration simple, contrÃ´le vocal et Ã  distance.",
    price: "24,99â‚¬", priceOld: "34,99â‚¬",
    rating: 4.5, asin: "B082YTPXR6",
    aliLink: "https://s.click.aliexpress.com/e/_c4FunRJX",
    img: "https://m.media-amazon.com/images/I/710m4DwTK2L._AC_SX679_.jpg"
  },
  {
    id: "m33", subcat: "prise",
    emoji: "ðŸ”Œ", brand: "ANTELA", badge: "-30%",
    name: "ANTELA Prise ConnectÃ©e WiFi Lot de 2 avec Conso",
    desc: "Mesure consommation en temps rÃ©el. 16A 3680W, compatible Alexa et Google Home. Lot de 2.",
    price: "17,99â‚¬", priceOld: "25,99â‚¬",
    rating: 4.3, asin: "B0D4Z3DNGJ",
    aliLink: "https://s.click.aliexpress.com/e/_c32NcRON",
    img: "https://m.media-amazon.com/images/I/51avh1-8nzL._AC_SX679_.jpg"
  },
  {
    id: "m34", subcat: "prise",
    emoji: "ðŸ”Œ", brand: "Refoss", badge: "Top",
    name: "Refoss Prise ConnectÃ©e HomeKit Lot de 4",
    desc: "Compatible Apple HomeKit, Siri, Alexa et Google Home. Programmable, commande vocale. Lot de 4.",
    price: "35,99â‚¬", priceOld: "49,99â‚¬",
    rating: 4.4, asin: "B0B874LX24",
    aliLink: "https://s.click.aliexpress.com/e/_c3R8ntQN",
    img: "https://m.media-amazon.com/images/I/61UkniNlPbL._AC_SX679_.jpg"
  },
  {
    id: "m51", subcat: "solaire",
    emoji: "â˜€ï¸", brand: "FOMYHEARD", badge: "Best-seller",
    name: "FOMYHEARD Bornes Solaires Jardin Lot de 8",
    desc: "LumiÃ¨re chaude + 7 couleurs RGB. IP65 Ã©tanche. Ã‰clairage chemins et dÃ©coration jardin.",
    price: "19,99â‚¬", priceOld: "29,99â‚¬",
    rating: 4.4, asin: "B0CS3276FR",
    img: "https://m.media-amazon.com/images/I/71B4ol8pU9L._AC_SX679_.jpg"
  },
  {
    id: "m52", subcat: "solaire",
    emoji: "â˜€ï¸", brand: "Vanranger", badge: "Top",
    name: "Vanranger Lampe Murale Solaire 248 LED Lot de 4",
    desc: "DÃ©tecteur mouvement, 270Â° Ã©clairage sÃ©curitÃ©. IP65 Ã©tanche, sans fil. Lot de 4.",
    price: "25,99â‚¬", priceOld: "39,99â‚¬",
    rating: 4.4, asin: "B0D6724RJM",
    img: "https://m.media-amazon.com/images/I/81kfDrn5gjL._AC_SX679_.jpg"
  },
  {
    id: "m53", subcat: "solaire",
    emoji: "â˜€ï¸", brand: "Nipify", badge: "",
    name: "Nipify Lampe Solaire 172 LED avec CÃ¢ble 5M",
    desc: "3 modes, dÃ©tecteur mouvement. CÃ¢ble 5m panneau sÃ©parÃ©. IP65, idÃ©al garage et jardin.",
    price: "15,99â‚¬", priceOld: "24,99â‚¬",
    rating: 4.3, asin: "B0CGCKQ9P6",
    img: "https://m.media-amazon.com/images/I/7121-L6rpDL._AC_SX679_.jpg"
  },
  {
    id: "m54", subcat: "solaire",
    emoji: "â˜€ï¸", brand: "OUILA", badge: "Best-seller",
    name: "OUILA Spot Solaire 185 LED Lot de 2",
    desc: "3 modes, dÃ©tecteur mouvement. IP65 Ã©tanche, projecteur pour jardin, garage et patio.",
    price: "16,99â‚¬", priceOld: "25,99â‚¬",
    rating: 4.4, asin: "B09TP1GD93",
    img: "https://m.media-amazon.com/images/I/71Dw5r6gcUL._AC_SX679_.jpg"
  },
  {
    id: "m55", subcat: "solaire",
    emoji: "â˜€ï¸", brand: "LOTMOS", badge: "",
    name: "LOTMOS Projecteur Solaire 342 LED TÃ©lÃ©commande",
    desc: "342 LED ultra puissant, tÃ©lÃ©commande incluse. 3 modes, IP65. IdÃ©al garage et cour.",
    price: "14,99â‚¬", priceOld: "22,99â‚¬",
    rating: 4.3, asin: "B0D179RV6Z",
    img: "https://m.media-amazon.com/images/I/715lCuVvpnL._AC_SX679_.jpg"
  },
  {
    id: "m56", subcat: "solaire",
    emoji: "â˜€ï¸", brand: "ARTINABS", badge: "Top",
    name: "ARTINABS Spot Solaire 88 LED 360Â° Lot de 2",
    desc: "Ultra puissant, rÃ©glable 360Â°. DÃ©tecteur mouvement, IP65. Sans fil, pour chemin et allÃ©e.",
    price: "18,99â‚¬", priceOld: "29,99â‚¬",
    rating: 4.4, asin: "B09LTXL3YL",
    img: "https://m.media-amazon.com/images/I/91TdzCMXOAL._AC_SX679_.jpg"
  },
  {
    id: "m57", subcat: "solaire",
    emoji: "â˜€ï¸", brand: "Pxwaxpy", badge: "Nouveau",
    name: "Pxwaxpy Spot Solaire 204 LED 2000LM CÃ¢ble 5M",
    desc: "3 modes, 2000 lumens. CÃ¢ble 5m panneau sÃ©parÃ©. IP65, pour jardin et garage.",
    price: "13,99â‚¬", priceOld: "21,99â‚¬",
    rating: 4.3, asin: "B0C6FGWWL8",
    img: "https://m.media-amazon.com/images/I/71i6iruj4bL._AC_SX679_.jpg"
  },
  {
    id: "m58", subcat: "solaire",
    emoji: "â˜€ï¸", brand: "OUILA", badge: "-30%",
    name: "OUILA Lampe Solaire 185 LED Lot de 4",
    desc: "3 modes avec dÃ©tecteur. IP65 Ã©tanche. Lot de 4 pour couvrir tout le jardin.",
    price: "24,99â‚¬", priceOld: "35,99â‚¬",
    rating: 4.5, asin: "B09F6PLJT6",
    img: "https://m.media-amazon.com/images/I/812dLxnDAYL._AC_SX679_.jpg"
  },
  {
    id: "m59", subcat: "solaire",
    emoji: "â˜€ï¸", brand: "Peasur", badge: "",
    name: "Projecteur Solaire 238 LED 2000LM TÃ©lÃ©commande",
    desc: "238 LED, 2000 lumens. 3 modes, tÃ©lÃ©commande, batterie 2200mAh. IP65 pour extÃ©rieur.",
    price: "12,99â‚¬", priceOld: "19,99â‚¬",
    rating: 4.3, asin: "B0CN6GH98G",
    img: "https://m.media-amazon.com/images/I/71zQUZp19OL._AC_SX679_.jpg"
  },
  {
    id: "m60", subcat: "solaire",
    emoji: "â˜€ï¸", brand: "Nifipfy", badge: "",
    name: "Nifipfy Lampe Solaire 168 LED Blanc Chaud",
    desc: "3 modes, capteur mouvement. IP65, lumiÃ¨re blanc chaud pour jardin, garage et mur.",
    price: "11,99â‚¬", priceOld: "18,99â‚¬",
    rating: 4.3, asin: "B0FVFKHVPZ",
    img: "https://m.media-amazon.com/images/I/71eIDE6dzeL._AC_SX679_.jpg"
  },
  {
    id: "m61", subcat: "fontaine",
    emoji: "â›²", brand: "SZMP", badge: "Best-seller",
    name: "SZMP Fontaine Solaire 3.5W LED Batterie 2000mAh",
    desc: "Flottante, 8 buses, LED intÃ©grÃ©e. Batterie rechargeable, cÃ¢ble 5m. Bain d'oiseaux, Ã©tang, jardin.",
    price: "19,99â‚¬", priceOld: "29,99â‚¬",
    rating: 4.4, asin: "B0BRC2KFDX",
    img: "https://m.media-amazon.com/images/I/81yl0UEKysL._AC_SX679_.jpg"
  },
  {
    id: "m62", subcat: "fontaine",
    emoji: "â›²", brand: "Jsdoin", badge: "",
    name: "Jsdoin Fontaine Solaire 7 Buses Flottante",
    desc: "Pompe solaire avec 7 buses interchangeables. Pour bain d'oiseaux, Ã©tang et patio.",
    price: "9,99â‚¬", priceOld: "15,99â‚¬",
    rating: 4.3, asin: "B08XQC2R23",
    img: "https://m.media-amazon.com/images/I/71KrPATAtnS._AC_SX679_.jpg"
  },
  {
    id: "m63", subcat: "fontaine",
    emoji: "â›²", brand: "AISITIN", badge: "Top",
    name: "AISITIN Fontaine Solaire Flottante 3.5W 6 Buses",
    desc: "Panneau solaire haute efficacitÃ©. Fonctionne mÃªme par faible ensoleillement. Bain d'oiseaux.",
    price: "15,99â‚¬", priceOld: "22,99â‚¬",
    rating: 4.4, asin: "B08S348HQ2",
    img: "https://m.media-amazon.com/images/I/81Q1RBznmQL._AC_SX679_.jpg"
  },
  {
    id: "m64", subcat: "fontaine",
    emoji: "â›²", brand: "Mademax", badge: "",
    name: "Mademax Fontaine Solaire Flottante 1.4W",
    desc: "Version amÃ©liorÃ©e, 4 buses. IdÃ©ale petit bassin, abreuvoir oiseaux, piscine.",
    price: "8,99â‚¬", priceOld: "14,99â‚¬",
    rating: 4.3, asin: "B085C5LQN3",
    img: "https://m.media-amazon.com/images/I/81tHGlkRpML._AC_SX679_.jpg"
  },
  {
    id: "m65", subcat: "fontaine",
    emoji: "â›²", brand: "Amur", badge: "Nouveau",
    name: "Amur Fontaine Bouddha Solaire LED Cascade",
    desc: "Fontaine dÃ©corative zen avec cascade et LED. Batterie Li-Ion intÃ©grÃ©e. Terrasse, balcon, jardin.",
    price: "39,99â‚¬", priceOld: "59,99â‚¬",
    rating: 4.4, asin: "B08WH9PYV3",
    img: "https://m.media-amazon.com/images/I/81HB2WIJbfL._AC_SX679_.jpg"
  },
  {
    id: "m66", subcat: "fontaine",
    emoji: "â›²", brand: "AISITIN", badge: "Best-seller",
    name: "AISITIN Fontaine Solaire 3.5W avec Batterie",
    desc: "Batterie intÃ©grÃ©e, fonctionne mÃªme Ã  l'ombre. 6 buses, pour Ã©tang et bain d'oiseaux.",
    price: "16,99â‚¬", priceOld: "24,99â‚¬",
    rating: 4.5, asin: "B083FN31P6",
    img: "https://m.media-amazon.com/images/I/81z2VpIjqfL._AC_SX679_.jpg"
  },
  {
    id: "m67", subcat: "fontaine",
    emoji: "â›²", brand: "VITCOCO", badge: "",
    name: "VITCOCO Fontaine Solaire 3.5W Batterie 18cm",
    desc: "Panneau intÃ©grÃ© avec batterie. 6 buses, flottante compacte 18cm. Petit Ã©tang et dÃ©coration.",
    price: "14,99â‚¬", priceOld: "21,99â‚¬",
    rating: 4.3, asin: "B07SGCKS8J",
    img: "https://m.media-amazon.com/images/I/815iRkP6S+L._AC_SX679_.jpg"
  },
  {
    id: "m68", subcat: "fontaine",
    emoji: "â›²", brand: "AISITIN", badge: "-30%",
    name: "AISITIN Fontaine Solaire 3.5W Batterie 6 Buses",
    desc: "Pompe solaire flottante avec batterie rechargeable. 6 styles de jets. Bain d'oiseaux, jardin.",
    price: "13,99â‚¬", priceOld: "19,99â‚¬",
    rating: 4.4, asin: "B083BPVBH2",
    img: "https://m.media-amazon.com/images/I/81hqJnwETTL._AC_SX679_.jpg"
  },
  {
    id: "m69", subcat: "fontaine",
    emoji: "â›²", brand: "AISITIN", badge: "Top",
    name: "AISITIN Fontaine Solaire 6.5W Batterie 1500mAh",
    desc: "Plus puissante 6.5W, batterie 1500mAh. 6 styles de fontaines. Jet jusqu'Ã  70cm.",
    price: "21,99â‚¬", priceOld: "32,99â‚¬",
    rating: 4.5, asin: "B083BPQ717",
    img: "https://m.media-amazon.com/images/I/816e0KeKTxL._AC_SX679_.jpg"
  },
  {
    id: "m70", subcat: "fontaine",
    emoji: "â›²", brand: "Primrose", badge: "",
    name: "Primrose Fontaine Bain d'Oiseau Pizzaro LED",
    desc: "Fontaine dÃ©corative H80cm avec Ã©clairage LED solaire. Bain d'oiseaux intÃ©grÃ©. Pierre effet bronze.",
    price: "89,99â‚¬", priceOld: "119,99â‚¬",
    rating: 4.3, asin: "B003MQ6AQM",
    img: "https://m.media-amazon.com/images/I/41wXVvmKoFL._AC_SX679_.jpg"
  },
  {
    id: "m71", subcat: "panneau",
    emoji: "ðŸ”‹", brand: "FlexSolar", badge: "",
    name: "FlexSolar Chargeur Solaire Portable 20W USB",
    desc: "USB-A QC3.0 + USB-C, pliable Ã©tanche. IdÃ©al randonnÃ©e, camping, recharge tÃ©lÃ©phone.",
    price: "21,99â‚¬", priceOld: "29,99â‚¬",
    rating: 4.3, asin: "B0C55CNCJW",
    img: "https://m.media-amazon.com/images/I/61Iha4YgBsL._AC_SX679_.jpg"
  },
  {
    id: "m72", subcat: "panneau",
    emoji: "ðŸ”‹", brand: "ECO-WORTHY", badge: "",
    name: "ECO-WORTHY Kit Panneau Solaire 25W 12V",
    desc: "Kit complet : panneau 25W + contrÃ´leur 10A + cÃ¢ble SAE. Pour voiture, camping-car, bateau.",
    price: "39,99â‚¬", priceOld: "54,99â‚¬",
    rating: 4.4, asin: "B0C9Q3MSP4",
    img: "https://m.media-amazon.com/images/I/71RtRTFAQRL._AC_SX679_.jpg"
  },
  {
    id: "m73", subcat: "panneau",
    emoji: "ðŸ”‹", brand: "DOKIO", badge: "Best-seller",
    name: "DOKIO Panneau Solaire Pliable 100W 12V",
    desc: "Monocristallin pliable, 2 ports USB. LÃ©ger et portable, idÃ©al camping et plein air.",
    price: "79,99â‚¬", priceOld: "109,99â‚¬",
    rating: 4.4, asin: "B0CSXP44GV",
    img: "https://m.media-amazon.com/images/I/81LaBu3F21L._AC_SX679_.jpg"
  },
  {
    id: "m74", subcat: "panneau",
    emoji: "ðŸ”‹", brand: "BigBlue", badge: "Top",
    name: "BigBlue Solarpowa100 Panneau Pliable 100W IP68",
    desc: "24V/4.16A avec supports. IP68 Ã©tanche, compatible la plupart des gÃ©nÃ©rateurs. Camping.",
    price: "119,99â‚¬", priceOld: "159,99â‚¬",
    rating: 4.5, asin: "B0C534PK15",
    img: "https://m.media-amazon.com/images/I/81m8cW-O5PL._AC_SX679_.jpg"
  },
  {
    id: "m75", subcat: "panneau",
    emoji: "ðŸ”‹", brand: "DOKIO", badge: "",
    name: "DOKIO Kit Panneau Solaire Pliable 200W",
    desc: "Monocristallin portable, 2 ports USB. Pour station Ã©lectrique, camping-car et plein air.",
    price: "169,99â‚¬", priceOld: "219,99â‚¬",
    rating: 4.4, asin: "B0BNN62CM6",
    img: "https://m.media-amazon.com/images/I/71+-zB9GGfL._AC_SX679_.jpg"
  },
  {
    id: "m76", subcat: "panneau",
    emoji: "ðŸ”‹", brand: "ECO-WORTHY", badge: "Best-seller",
    name: "ECO-WORTHY Kit Panneau Solaire 240W 12V",
    desc: "Kit complet : panneau 240W + rÃ©gulateur 30A + cÃ¢bles + fixations. Camping-car, maison.",
    price: "219,99â‚¬", priceOld: "279,99â‚¬",
    rating: 4.5, asin: "B0C9PZ211H",
    img: "https://m.media-amazon.com/images/I/71L100gokzL._AC_SX679_.jpg"
  },
  {
    id: "m77", subcat: "panneau",
    emoji: "ðŸ”‹", brand: "DOKIO", badge: "-25%",
    name: "DOKIO Panneau Solaire Pliable 240W ContrÃ´leur 20A",
    desc: "Pliable portable 240W avec contrÃ´leur 20A. USB 12V/24V, pour station et camping-car.",
    price: "259,99â‚¬", priceOld: "349,99â‚¬",
    rating: 4.3, asin: "B09D7943QZ",
    img: "https://m.media-amazon.com/images/I/71NiNNw7hpL._AC_SX679_.jpg"
  },
  {
    id: "m78", subcat: "panneau",
    emoji: "ðŸ”‹", brand: "EcoFlow", badge: "Nouveau",
    name: "EcoFlow Panneau Solaire Portable 400W IP68",
    desc: "Pliable avec mallette, IP68. Haute efficacitÃ©, compatible stations EcoFlow et autres.",
    price: "549,99â‚¬", priceOld: "699,99â‚¬",
    rating: 4.5, asin: "B0B129KSKL",
    img: "https://m.media-amazon.com/images/I/71R13HlYowL._AC_SX679_.jpg"
  },
  {
    id: "m79", subcat: "panneau",
    emoji: "ðŸ”‹", brand: "EcoFlow", badge: "Top",
    name: "EcoFlow STREAM Kit Solaire Balcon 800W",
    desc: "Micro-onduleur 800W + 2 panneaux 400W. Autoconsommation plug & play, app WiFi. Balcon, jardin, toit.",
    price: "999,99â‚¬", priceOld: "1299,99â‚¬",
    rating: 4.5, asin: "B0F1CVD47Z",
    img: "https://m.media-amazon.com/images/I/61cRp9EtwmL._AC_SX679_.jpg"
  },
  {
    id: "m80", subcat: "panneau",
    emoji: "ðŸ”‹", brand: "EcoFlow", badge: "Premium",
    name: "EcoFlow DELTA 2 Max 2048Wh + Panneau 400W",
    desc: "Station 2048Wh LFP + panneau 400W. 3100W AC, charge 0-80% en 53min. Camping, maison, secours.",
    price: "1899,99â‚¬", priceOld: "2299,99â‚¬",
    rating: 4.6, asin: "B0C4KXT2HM",
    img: "https://m.media-amazon.com/images/I/61QOl650cJL._AC_SX679_.jpg"
  },
  {
    id: "m13", subcat: "serrure",
    emoji: "ðŸ”", brand: "Nuki", badge: "Top",
    name: "Nuki Smart Lock Go 2025",
    desc: "Serrure connectÃ©e Bluetooth & Matter. Ouverture via smartphone ou code.",
    price: "146,99â‚¬", priceOld: "179,99â‚¬",
    rating: 4.4, asin: "B0DVLYQWXX",
    img: "https://m.media-amazon.com/images/I/61VfnvIPpmL._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "m15", subcat: "tondeuse",
    emoji: "ðŸŒ¿", brand: "Mammotion", badge: "Nouveau",
    name: "Mammotion YUKA Mini 2 Robot Tondeuse 500mÂ²",
    desc: "Sans fil pÃ©riphÃ©rique. IA 3 camÃ©ras, cartographie automatique multi-zones. Jusqu'Ã  500mÂ².",
    price: "499,99â‚¬", priceOld: "599,99â‚¬",
    rating: 4.5, asin: "B0GCCLW2PL",
    img: "https://m.media-amazon.com/images/I/714OOSg6fFL._AC_SX679_.jpg"
  },
  {
    id: "m16", subcat: "tondeuse",
    emoji: "ðŸŒ±", brand: "Segway", badge: "Best-seller",
    name: "Segway Navimow i105E Robot Tondeuse 500mÂ²",
    desc: "Sans fil pÃ©riphÃ©rique. Navigation GPS prÃ©cise, contrÃ´le via app. Silencieux.",
    price: "599,99â‚¬", priceOld: "749,99â‚¬",
    rating: 4.4, asin: "B0CXDNFZLL",
    img: "https://m.media-amazon.com/images/I/61ZG5yYGOML._AC_SX679_.jpg"
  },
  {
    id: "m17", subcat: "tondeuse",
    emoji: "ðŸ¡", brand: "Mammotion", badge: "Top",
    name: "Mammotion LUBA 3 AWD 3000 Robot Tondeuse",
    desc: "LiDAR + RTK + IA Vision. Pentes 80%, 30 zones, jusqu'Ã  3000mÂ². Tout-terrain.",
    price: "1499,99â‚¬", priceOld: "1799,99â‚¬",
    rating: 4.6, asin: "B0GCZSSZRZ",
    img: "https://m.media-amazon.com/images/I/61LlViRj0RL._AC_SX679_.jpg"
  },
  {
    id: "m18", subcat: "tondeuse",
    emoji: "ðŸƒ", brand: "RoboUP", badge: "",
    name: "RoboUP Raccoon 2 SE Robot Tondeuse 600mÂ²",
    desc: "PrÃªt Ã  l'emploi, tonte parallÃ¨le. Batterie 5Ah, 150 min d'autonomie. Sans RTK.",
    price: "349,99â‚¬", priceOld: "449,99â‚¬",
    rating: 4.3, asin: "B0G7XC4QLH",
    img: "https://m.media-amazon.com/images/I/6157-xaxiqL._AC_SX679_.jpg"
  },
  {
    id: "m19", subcat: "purificateur",
    emoji: "ðŸŒ¬ï¸", brand: "Winix", badge: "Best-seller",
    name: "Winix 5500-2 Purificateur d'Air HEPA 99mÂ²",
    desc: "CADR 390mÂ³/h, filtre HEPA + charbon actif + PlasmaWave. Capteur intelligent, mode auto.",
    price: "249,99â‚¬", priceOld: "349,99â‚¬",
    rating: 4.6, asin: "B01D8DAYII",
    img: "https://m.media-amazon.com/images/I/61UqpOlddiL._AC_SX679_.jpg"
  },
  {
    id: "m20", subcat: "purificateur",
    emoji: "ðŸ’¨", brand: "Levoit", badge: "Top",
    name: "Levoit Purificateur d'Air HEPA Chambre",
    desc: "Filtration efficace allergies et odeurs. Silencieux, idÃ©al chambre et bureau.",
    price: "89,99â‚¬", priceOld: "119,99â‚¬",
    rating: 4.5, asin: "B0CGDJHJP6",
    img: "https://m.media-amazon.com/images/I/61jSLBgfvXL._AC_SX679_.jpg"
  },
  {
    id: "m21", subcat: "purificateur",
    emoji: "ðŸŒ€", brand: "Winix", badge: "Nouveau",
    name: "Winix T500 Purificateur ConnectÃ© WiFi 50mÂ²",
    desc: "CADR 250mÂ³/h, contrÃ´le via app et Alexa. HEPA + charbon actif. Compact.",
    price: "179,99â‚¬", priceOld: "229,99â‚¬",
    rating: 4.4, asin: "B0FQBSFWRJ",
    img: "https://m.media-amazon.com/images/I/71ZlgezVxoL._AC_SX679_.jpg"
  },
  {
    id: "m22", subcat: "purificateur",
    emoji: "ðŸƒ", brand: "Coway", badge: "",
    name: "Coway Airmega 150 Purificateur ECARF",
    desc: "CertifiÃ© ECARF anti-allergies. Mode sommeil ultra silencieux. Design compact.",
    price: "139,99â‚¬", priceOld: "179,99â‚¬",
    rating: 4.5, asin: "B08YZF8LJS",
    img: "https://m.media-amazon.com/images/I/81W0igDvSpL._AC_SX679_.jpg"
  },
  {
    id: "m23", subcat: "camera",
    emoji: "â˜€ï¸", brand: "GALAYOU", badge: "Best-seller",
    name: "GALAYOU 2K CamÃ©ra Solaire ExtÃ©rieure WiFi",
    desc: "Panneau solaire intÃ©grÃ©, batterie rechargeable. 2K, dÃ©tection PIR, vision nocturne, IP65. Compatible Alexa.",
    price: "39,99â‚¬", priceOld: "59,99â‚¬",
    rating: 4.4, asin: "B0BX2L7JGJ",
    aliLink: "https://s.click.aliexpress.com/e/_c3GTrUiZ",
    img: "https://m.media-amazon.com/images/I/61N7fCbfQgL._AC_SX679_.jpg"
  },
  {
    id: "m24", subcat: "camera",
    emoji: "â˜€ï¸", brand: "aosu", badge: "Top",
    name: "aosu 2K CamÃ©ra Solaire 360Â° PTZ ExtÃ©rieure",
    desc: "Panneau solaire, rotation 360Â°, suivi automatique. Vision nocturne couleur, alarme sirÃ¨ne. IP66.",
    price: "49,99â‚¬", priceOld: "69,99â‚¬",
    rating: 4.3, asin: "B0C1C5WS81",
    aliLink: "https://s.click.aliexpress.com/e/_c4Nesz0t",
    img: "https://m.media-amazon.com/images/I/61FLcj1JA1L._AC_SX679_.jpg"
  },
  {
    id: "m25", subcat: "camera",
    emoji: "â˜€ï¸", brand: "Imou", badge: "",
    name: "Imou 2K CamÃ©ra Solaire 360Â° Batterie 15000mAh",
    desc: "Batterie longue durÃ©e 15000mAh + panneau solaire. PTZ 360Â°, dÃ©tection IA, audio bidirectionnel. IP66.",
    price: "59,99â‚¬", priceOld: "89,99â‚¬",
    rating: 4.4, asin: "B0CGZWCK5T",
    img: "https://m.media-amazon.com/images/I/61+g2ltpAvL._AC_SX679_.jpg"
  },
  {
    id: "m26", subcat: "camera",
    emoji: "ðŸ“·", brand: "Tapo", badge: "Best-seller",
    name: "Tapo C210 CamÃ©ra IntÃ©rieure 2K 3MP WiFi",
    desc: "Rotation 360Â°, dÃ©tection de personnes et pleurs bÃ©bÃ©. Vision nocturne, stockage SD 512Go. Alexa.",
    price: "27,99â‚¬", priceOld: "39,99â‚¬",
    rating: 4.5, asin: "B095CLQ1PT",
    aliLink: "https://s.click.aliexpress.com/e/_c31Azpz7",
    img: "https://m.media-amazon.com/images/I/61z9kf65e6L._AC_SX679_.jpg"
  },
  {
    id: "m27", subcat: "camera",
    emoji: "ðŸ“·", brand: "Imou", badge: "",
    name: "Imou 2K CamÃ©ra IntÃ©rieure 360Â° DÃ©tection IA",
    desc: "Rotation 360Â°, suivi intelligent IA. Audio bidirectionnel, sirÃ¨ne intÃ©grÃ©e. IdÃ©ale bÃ©bÃ© et animaux.",
    price: "24,99â‚¬", priceOld: "39,99â‚¬",
    rating: 4.4, asin: "B08X6DCJT2",
    img: "https://m.media-amazon.com/images/I/51WuJ7EZ1uL._AC_SX679_.jpg"
  },
  {
    id: "m14", subcat: "securite",
    emoji: "ðŸš¨", brand: "X-Sense", badge: "",
    name: "X-Sense DÃ©tecteur FumÃ©e & CO ConnectÃ©",
    desc: "DÃ©tecteur 2-en-1 fumÃ©e et monoxyde de carbone WiFi. Alertes sur smartphone.",
    price: "49,99â‚¬", priceOld: "69,99â‚¬",
    rating: 4.5, asin: "B0DDL1V686",
    aliLink: "https://s.click.aliexpress.com/e/_c2RD0YPx",
    img: "https://m.media-amazon.com/images/I/71poEV2HnjL._AC_SX679_.jpg"
  },
  {
    id: "m81", subcat: "alarme",
    emoji: "ðŸš¨", brand: "AGSHOME", badge: "Best-seller",
    name: "AGSHOME Alarme Maison WiFi 15 PiÃ¨ces",
    desc: "Kit complet 120dB : capteurs portes/fenÃªtres + dÃ©tecteurs mouvement. Compatible Alexa et Google.",
    price: "49,99â‚¬", priceOld: "79,99â‚¬",
    rating: 4.4, asin: "B09GVQLPTY",
    aliLink: "https://s.click.aliexpress.com/e/_c3hH5RBr",
    img: "https://m.media-amazon.com/images/I/61l8-ogy66L._AC_SX679_.jpg"
  },
  {
    id: "m82", subcat: "alarme",
    emoji: "ðŸš¨", brand: "TECPEAK", badge: "",
    name: "TECPEAK Kit Alarme WiFi + GSM Sans Fil",
    desc: "Double connexion WiFi et GSM. SirÃ¨ne, dÃ©tecteurs et tÃ©lÃ©commandes. App mobile, sans abonnement.",
    price: "89,99â‚¬", priceOld: "129,99â‚¬",
    rating: 4.3, asin: "B08DCJZJPN",
    aliLink: "https://s.click.aliexpress.com/e/_c3874ak9",
    img: "https://m.media-amazon.com/images/I/610jWLHmr6L._AC_SX679_.jpg"
  },
  {
    id: "m83", subcat: "alarme",
    emoji: "ðŸš¨", brand: "tiiwee", badge: "",
    name: "tiiwee A1 Alarme Maison Sans Fil Autonome",
    desc: "SystÃ¨me Ã  piles, 120dB. Capteurs portes/fenÃªtres + tÃ©lÃ©commandes. Simple, sans WiFi requis.",
    price: "29,99â‚¬", priceOld: "44,99â‚¬",
    rating: 4.3, asin: "B08MQR67SM",
    img: "https://m.media-amazon.com/images/I/71EvFmGTxeL._AC_SX679_.jpg"
  },
  {
    id: "m84", subcat: "alarme",
    emoji: "ðŸš¨", brand: "Generic", badge: "-30%",
    name: "Kit Alarme Sans Fil 115dB 9 PiÃ¨ces Complet",
    desc: "4 capteurs porte/fenÃªtre + 2 dÃ©tecteurs mouvement + sirÃ¨ne + 2 tÃ©lÃ©commandes. 115dB.",
    price: "34,99â‚¬", priceOld: "49,99â‚¬",
    rating: 4.3, asin: "B0BXCN287S",
    aliLink: "https://s.click.aliexpress.com/e/_c3418QtJ",
    img: "https://m.media-amazon.com/images/I/712xuwxEH2L._AC_SX679_.jpg"
  },
  {
    id: "m85", subcat: "alarme",
    emoji: "ðŸš¨", brand: "Somfy", badge: "Top",
    name: "Somfy Home Alarm SystÃ¨me ConnectÃ©",
    desc: "Alarme connectÃ©e Somfy Protect. IntelliTAG anti-intrusion. Compatible Alexa, Google et Tahoma.",
    price: "349,99â‚¬", priceOld: "449,99â‚¬",
    rating: 4.5, asin: "B0718W696D",
    aliLink: "https://s.click.aliexpress.com/e/_c4azch7n",
    img: "https://m.media-amazon.com/images/I/41t1EJFyOTL._AC_SX679_.jpg"
  },
  {
    id: "m86", subcat: "alarme",
    emoji: "ðŸš¨", brand: "Somfy", badge: "Nouveau",
    name: "Somfy Home Alarm Essential Plus Integral",
    desc: "DÃ©tection prÃ©-intrusion IntelliTAG + dÃ©tecteurs mouvement. TÃ©lÃ©surveillance optionnelle. Made in France.",
    price: "449,99â‚¬", priceOld: "549,99â‚¬",
    rating: 4.5, asin: "B0C6V5D5T5",
    aliLink: "https://s.click.aliexpress.com/e/_c4azch7n",
    img: "https://m.media-amazon.com/images/I/61ikpB1keDL._AC_SX679_.jpg"
  },
  {
    id: "m87", subcat: "alarme",
    emoji: "ðŸš¨", brand: "Somfy", badge: "",
    name: "Somfy Home Alarm Essential WiFi",
    desc: "3 IntelliTAG + 1 dÃ©tecteur mouvement + 2 badges. Compatible Alexa, Google et Tahoma.",
    price: "279,99â‚¬", priceOld: "349,99â‚¬",
    rating: 4.4, asin: "B0C6V6T9SS",
    aliLink: "https://s.click.aliexpress.com/e/_c4azch7n",
    img: "https://m.media-amazon.com/images/I/61F4BmTb3uL._AC_SX679_.jpg"
  },
  {
    id: "m88", subcat: "alarme",
    emoji: "ðŸš¨", brand: "Ajax", badge: "Premium",
    name: "Ajax Hub 2 Kit Alarme Sans Fil Pro",
    desc: "SystÃ¨me professionnel Ajax. Double connexion, vÃ©rification photo. FiabilitÃ© anti-brouillage.",
    price: "599,99â‚¬", priceOld: "749,99â‚¬",
    rating: 4.6, asin: "B08B3DZ89L",
    aliLink: "https://s.click.aliexpress.com/e/_c3XANj6N",
    img: "https://m.media-amazon.com/images/I/61myLj9nt+L._AC_SX679_.jpg"
  },
  {
    id: "m89", subcat: "alarme",
    emoji: "ðŸš¨", brand: "Lacoramo", badge: "",
    name: "Kit Alarme WiFi + GSM Domotique Sans Frais",
    desc: "WiFi + ligne mobile GSM. ContrÃ´le total via app. Sans abonnement, pour maison et entreprise.",
    price: "129,99â‚¬", priceOld: "179,99â‚¬",
    rating: 4.3, asin: "B08LK1K13V",
    img: "https://m.media-amazon.com/images/I/41xTMojSA+L._AC_SX679_.jpg"
  },
  {
    id: "m90", subcat: "alarme",
    emoji: "ðŸš¨", brand: "Somfy", badge: "Top",
    name: "Somfy One+ Alarme Tout-en-Un avec CamÃ©ra",
    desc: "CamÃ©ra Full HD + dÃ©tecteur mouvement + sirÃ¨ne 90dB. Vision 130Â°, volet vie privÃ©e. Badge inclus.",
    price: "249,99â‚¬", priceOld: "329,99â‚¬",
    rating: 4.4, asin: "B071V7LF94",
    img: "https://m.media-amazon.com/images/I/61tLRel7DLL._AC_SX679_.jpg"
  },
  // â”€â”€ SÃ©curitÃ© enfant â”€â”€
  {
    id: "m91", subcat: "enfant",
    emoji: "ðŸš§", brand: "Safety 1st", badge: "Top",
    name: "Safety 1st Easy Close BarriÃ¨re Escalier MÃ©tal",
    desc: "BarriÃ¨re 73-80cm extensible 108cm. Fermeture 1 main, double verrouillage, sans perÃ§age.",
    price: "34,99â‚¬", priceOld: "",
    rating: 4.4, asin: "B0177W8HBW",
    img: "https://m.media-amazon.com/images/I/61Fz+dBX4EL._AC_SX679_.jpg"
  },
  {
    id: "m92", subcat: "enfant",
    emoji: "ðŸ”Œ", brand: "BÃ©bÃ©alis", badge: "Best",
    name: "BÃ©bÃ©alis Cache Prise BÃ©bÃ© FranÃ§ais x20",
    desc: "20 caches-prises sans clÃ© ni adhÃ©sif. 100% fabriquÃ© en France, amovible facilement.",
    price: "9,99â‚¬", priceOld: "",
    rating: 4.5, asin: "B08L3YVM7S",
    img: "https://m.media-amazon.com/images/I/81vHyBnH2ZL._AC_SX425_.jpg"
  },
  {
    id: "m93", subcat: "enfant",
    emoji: "ðŸ”Œ", brand: "BÃ©bÃ©alis", badge: "",
    name: "BÃ©bÃ©alis Cache Prise BÃ©bÃ© x20 Version 2",
    desc: "Version amÃ©liorÃ©e, 100% Made in France. Sans clÃ© ni colle, retrait avec prise Ã©lectrique.",
    price: "10,99â‚¬", priceOld: "",
    rating: 4.5, asin: "B09TL1HX9Q",
    img: "https://m.media-amazon.com/images/I/81mlPlk0N1L._AC_SX425_.jpg"
  },
  {
    id: "m94", subcat: "enfant",
    emoji: "ðŸ›¡ï¸", brand: "GÃ©nÃ©rique", badge: "Best",
    name: "Kit SÃ©curitÃ© BÃ©bÃ© Complet 40 PiÃ¨ces",
    desc: "12 caches-prises + 3 clÃ©s, 16 protÃ¨ge-coins de table, 12 loquets de sÃ©curitÃ©.",
    price: "15,99â‚¬", priceOld: "",
    rating: 3.9, asin: "B09Q17FJ71",
    img: "https://m.media-amazon.com/images/I/71UJE9I55mL._AC_SX679_.jpg"
  },
  {
    id: "m95", subcat: "enfant",
    emoji: "ðŸ”¶", brand: "KIHONI", badge: "",
    name: "KIHONI Protection Coin de Table BÃ©bÃ© x20",
    desc: "20 protÃ¨ge-coins PVC transparent avec colle renforcÃ©e. Sans BPA, pour tables et meubles.",
    price: "8,99â‚¬", priceOld: "",
    rating: 4.3, asin: "B0BD23M1CN",
    img: "https://m.media-amazon.com/images/I/71PUH4I-CAL._AC_SX425_PIbundle-20,TopRight,0,0_SH20_.jpg"
  },
  {
    id: "m96", subcat: "enfant",
    emoji: "ðŸšª", brand: "BillyBath", badge: "",
    name: "BillyBath Bloc Porte SÃ©curitÃ© BÃ©bÃ© x6",
    desc: "6 bloque-tiroirs/placards transparents. Double verrouillage, adhÃ©sif 3M, sans perÃ§age.",
    price: "11,99â‚¬", priceOld: "",
    rating: 4.1, asin: "B0968L57QB",
    img: "https://m.media-amazon.com/images/I/61+9kMQvQBL._AC_SX425_.jpg"
  },
  {
    id: "m97", subcat: "enfant",
    emoji: "ðŸ›ï¸", brand: "HUOLE", badge: "Top",
    name: "HUOLE BarriÃ¨re de Lit Anti-Chute 150cm",
    desc: "24 hauteurs rÃ©glables, filet respirant lavable, double verrouillage. Acier carbone.",
    price: "35,99â‚¬", priceOld: "",
    rating: 4.2, asin: "B0CM1XJVTT",
    img: "https://m.media-amazon.com/images/I/71AoVEUzvPL._AC_SX679_.jpg"
  },
  {
    id: "m98", subcat: "enfant",
    emoji: "ðŸ§²", brand: "NODI", badge: "Best",
    name: "NODI Serrures MagnÃ©tiques Placards x12 + 3 ClÃ©s",
    desc: "12 bloque-tiroirs magnÃ©tiques invisibles + 3 clÃ©s. Sans perÃ§age, design cachÃ©.",
    price: "29,99â‚¬", priceOld: "",
    rating: 4.4, asin: "B07YTWLFYX",
    img: "https://m.media-amazon.com/images/I/71yyzPxNIML._AC_SX425_.jpg"
  },
  {
    id: "m99", subcat: "enfant",
    emoji: "ðŸ‘¶", brand: "HelloBaby", badge: "Top",
    name: "HelloBaby HB6339 Babyphone CamÃ©ra 3.2\"",
    desc: "Ã‰cran IPS 3.2\", vision nocturne, audio bidirectionnel, 305m portÃ©e, 8 berceuses.",
    price: "49,99â‚¬", priceOld: "",
    rating: 4.4, asin: "B0CB8MNFXF",
    img: "https://m.media-amazon.com/images/I/6154F4imrgL._AC_SX679_.jpg"
  },
  {
    id: "m100", subcat: "enfant",
    emoji: "ðŸ”Œ", brand: "Safety 1st", badge: "",
    name: "Safety 1st Cache-Prises avec ClÃ© x12",
    desc: "12 caches-prises blancs avec clÃ© rotative incluse. AdaptÃ© aux prises franÃ§aises.",
    price: "7,99â‚¬", priceOld: "",
    rating: 4.3, asin: "B01LRS24E8",
    img: "https://m.media-amazon.com/images/I/412QMxhB5wL._AC_SX425_.jpg"
  },
];

// ===== GUIDES =====
const guides = [
  {
    icon: "ðŸŸ",
    cat: "Guide d'achat",
    title: "Quel air fryer choisir en 2026 ?",
    desc: "CapacitÃ©, puissance, fonctionsâ€¦ tout ce qu'il faut savoir avant d'acheter votre friteuse Ã  air.",
    link: "#cuisine", section: "cuisine", subcat: "airfryer"
  },
  {
    icon: "â˜•",
    cat: "Guide d'achat",
    title: "Machine Ã  cafÃ© grain : notre sÃ©lection",
    desc: "Du cafÃ© de barista Ã  domicile. On compare les meilleures machines automatiques.",
    link: "#cuisine", section: "cuisine", subcat: "cafe"
  },
  {
    icon: "ðŸ¤–",
    cat: "Comparatif",
    title: "Roborock vs iRobot vs Ecovacs",
    desc: "Quelle marque d'aspirateur robot choisir ? Comparatif complet des 3 leaders du marchÃ©.",
    link: "#maison", section: "maison", subcat: "aspirateur"
  },
  {
    icon: "ðŸ’¡",
    cat: "Guide dÃ©butant",
    title: "DÃ©marrer avec la maison connectÃ©e",
    desc: "Alexa, Google Home ou Apple HomeKit ? On vous aide Ã  choisir votre Ã©cosystÃ¨me domotique.",
    link: "#maison", section: "maison", subcat: "all"
  },
  {
    icon: "ðŸ“·",
    cat: "Comparatif",
    title: "CamÃ©ra de surveillance : intÃ©rieure vs extÃ©rieure",
    desc: "Ring, Arlo, Tapoâ€¦ lequel offre le meilleur rapport qualitÃ©/prix en 2026 ?",
    link: "#maison", section: "maison", subcat: "camera"
  },
  {
    icon: "ðŸ¥˜",
    cat: "Guide d'achat",
    title: "Robot cuiseur : vaut-il le prix ?",
    desc: "Alternative au Thermomix ? On compare les robots cuiseurs Ã  moins de 600â‚¬.",
    link: "#cuisine", section: "cuisine", subcat: "robot"
  },
];


