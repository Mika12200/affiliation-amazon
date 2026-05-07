const TAG = "meilleursappa-21";

function amzLink(asin) {
  return `https://www.amazon.fr/dp/${asin}?tag=${TAG}`;
}

// ===== TOP PICKS =====
const topPicks = [
  {
    rank: 1,
    label: "Meilleur air fryer 2026",
    emoji: "✨",
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
    aliLink: "https://s.click.aliexpress.com/e/_c4djF7HL",
    img: "https://m.media-amazon.com/images/I/61K9Ci2sU6L._AC_SY300_SX300_QL70_ML2_.jpg"
  }
];

// ===== CUISINE =====
const cuisineProducts = [
  {
    id: "c1", subcat: "airfryer",
    emoji: "✨", brand: "Ninja", badge: "Best-seller",
    name: "Ninja AF160EU Air Fryer XL 6,2L",
    desc: "Friture sans huile avec 6 modes de cuisson. Parfait pour les familles.",
    price: "129,99€", priceOld: "179,99€",
    rating: 4.7, asin: "B0C1GF88DS",
    img: "https://m.media-amazon.com/images/I/51ctVYliSOL._AC_SX679_.jpg"
  },
  {
    id: "c2", subcat: "airfryer",
    emoji: "✨", brand: "Philips", badge: "-20%",
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
    emoji: "✨", brand: "Robicook", badge: "",
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
    emoji: "✨", brand: "Vitamix", badge: "",
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
    emoji: "✨", brand: "Panasonic", badge: "Top",
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
    id: "c15", subcat: "extracteur",
    emoji: "🧃", brand: "Hurom", badge: "Top",
    name: "Hurom H310A Extracteur de Jus à Froid",
    desc: "Pression à froid 220ml. Préserve les vitamines et nutriments. Sans BPA, 100W silencieux.",
    price: "399,99€", priceOld: "499,99€",
    rating: 4.6, asin: "B09ZBL4PTZ",
    img: "https://m.media-amazon.com/images/I/61YiecFIw7L._AC_SY879_.jpg"
  },
  {
    id: "c16", subcat: "extracteur",
    emoji: "✨", brand: "Fretta", badge: "Best-seller",
    name: "Fretta Extracteur de Jus Grande Ouverture 108mm",
    desc: "Fruits et légumes entiers. Pression à froid, 1L de capacité. Facile à nettoyer, 200W.",
    price: "89,99€", priceOld: "129,99€",
    rating: 4.4, asin: "B0G3WP3KZ2",
    img: "https://m.media-amazon.com/images/I/71f29NUkuIL._AC_SX679_.jpg"
  },
  {
    id: "c17", subcat: "extracteur",
    emoji: "🥕", brand: "Moulinex", badge: "",
    name: "Moulinex Frutelia Plus Centrifugeuse 350W",
    desc: "Centrifugeuse 950ml, 2 vitesses. Goulot 6cm, filtre inox. Compacte et efficace.",
    price: "54,99€", priceOld: "79,99€",
    rating: 4.3, asin: "B07NW8995F",
    img: "https://m.media-amazon.com/images/I/61i4sDp9SZL._AC_SX679_.jpg"
  },
  {
    id: "c18", subcat: "extracteur",
    emoji: "✨", brand: "Kuvings", badge: "Nouveau",
    name: "Kuvings AUTO6 Extracteur Mains Libres",
    desc: "Découpe automatique des fruits entiers. Panier 1,7L, nettoyage facile.",
    price: "599,99€", priceOld: "699,99€",
    rating: 4.5, asin: "B0F32DQB9W",
    img: "https://m.media-amazon.com/images/I/51ByHYFfryL._AC_SX679_.jpg"
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
  {
    id: "c19", subcat: "cafe",
    emoji: "☕", brand: "Krups", badge: "Best-seller",
    name: "Krups Dolce Gusto Genio S Plus",
    desc: "Machine à capsules compacte et design. Pression 15 bars, 30+ boissons chaudes et froides.",
    price: "49,99€", priceOld: "79,99€",
    rating: 4.5, asin: "B0CF57ZPC9",
    img: "https://m.media-amazon.com/images/I/61JcWhQi1tL._AC_SX679_.jpg"
  },
  {
    id: "c20", subcat: "cafe",
    emoji: "☕", brand: "Bosch", badge: "-30%",
    name: "Bosch Tassimo Happy TAS1002N",
    desc: "Machine à dosettes T-Disc ultra simple. Plus de 40 boissons disponibles. Compacte.",
    price: "34,99€", priceOld: "49,99€",
    rating: 4.3, asin: "B0DB1SCPHN",
    img: "https://m.media-amazon.com/images/I/41qDK0ShkyL._AC_SX679_.jpg"
  },
  {
    id: "c21", subcat: "cafe",
    emoji: "☕", brand: "Bosch", badge: "",
    name: "Bosch Tassimo My Way TAS6502",
    desc: "Personnalisation via bouton My Way : intensité, température et volume. Écran tactile.",
    price: "89,99€", priceOld: "129,99€",
    rating: 4.4, asin: "B0857Z91PY",
    img: "https://m.media-amazon.com/images/I/719E9xgZMaL._AC_SY879_.jpg"
  },
  {
    id: "c22", subcat: "cafe",
    emoji: "☕", brand: "Philips", badge: "",
    name: "Philips Senseo CSA240 Machine à Dosettes",
    desc: "Technologie Crema Plus. Réservoir 0,9L, 2 tasses simultanées. Simple et rapide.",
    price: "64,99€", priceOld: "89,99€",
    rating: 4.4, asin: "B08T9XRF91",
    img: "https://m.media-amazon.com/images/I/51zQXE4AsSL._AC_SX679_.jpg"
  },
  {
    id: "c23", subcat: "cafe",
    emoji: "☕", brand: "Philips", badge: "Nouveau",
    name: "Philips L'OR Barista Sublime LM9012",
    desc: "Capsules Nespresso & L'OR. Double capsule pour 2 cafés simultanés. 19 bars.",
    price: "59,99€", priceOld: "89,99€",
    rating: 4.5, asin: "B09B166BMD",
    img: "https://m.media-amazon.com/images/I/61UX+C7ymZL._AC_SX679_.jpg"
  },
  {
    id: "c24", subcat: "cafe",
    emoji: "☕", brand: "KOTLIE", badge: "",
    name: "KOTLIE AC-513HF Machine 5-en-1 Multi-Capsules",
    desc: "Compatible Nespresso, Dolce Gusto, ESE, café moulu et A Modo Mio. 19 bars, chaud & froid.",
    price: "54,99€", priceOld: "79,99€",
    rating: 4.3, asin: "B0CLZRPSHT",
    img: "https://m.media-amazon.com/images/I/71IqN8S6TxL._AC_SX679_.jpg"
  },
  {
    id: "c25", subcat: "cafe",
    emoji: "☕", brand: "Philips", badge: "Top",
    name: "Philips Série 800 EP0824 Grain à Tasse",
    desc: "Broyeur céramique intégré, 15 bars. Mousseur à lait classique. Entrée de gamme grain automatique.",
    price: "249,99€", priceOld: "329,99€",
    rating: 4.4, asin: "B0CHQP4DZF",
    img: "https://m.media-amazon.com/images/I/61cKTt9tWKL._AC_SX679_.jpg"
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
    aliLink: "https://s.click.aliexpress.com/e/_c4djF7HL",
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
    emoji: "✨", brand: "Ecovacs", badge: "-30%",
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
    id: "m28", subcat: "enceinte",
    emoji: "🔊", brand: "Amazon", badge: "Nouveau",
    name: "Amazon Echo Pop Enceinte Compacte Alexa",
    desc: "Son puissant dans un format ultra-compact. Contrôle vocal Alexa, Bluetooth et WiFi. Idéale petite pièce.",
    price: "29,99€", priceOld: "49,99€",
    rating: 4.6, asin: "B09ZX7MS5B",
    img: "https://m.media-amazon.com/images/I/41mjJlfUTSL._AC_SX679_.jpg"
  },
  {
    id: "m29", subcat: "enceinte",
    emoji: "🎶", brand: "Amazon", badge: "Top",
    name: "Amazon Echo Studio Dolby Atmos",
    desc: "Son immersif Dolby Atmos et audio spatial. Hub connecté intégré, WiFi et Bluetooth. Notre meilleur son.",
    price: "199,99€", priceOld: "249,99€",
    rating: 4.7, asin: "B09M5QKDH4",
    img: "https://m.media-amazon.com/images/I/51Rb6l3VFVL._AC_SX679_.jpg"

  },
  {
    id: "m30", subcat: "enceinte",
    emoji: "🎵", brand: "Google", badge: "",
    name: "Google Nest Mini 2ème Génération",
    desc: "Enceinte connectée Google Assistant. Son riche, commande vocale, contrôle domotique. Compacte.",
    price: "29,99€", priceOld: "49,99€",
    rating: 4.5, asin: "B0CGYFYY34",
    img: "https://m.media-amazon.com/images/I/71TeLBggnwL._AC_SX425_.jpg"
  },
  {
    id: "m6", subcat: "camera",
    emoji: "📷", brand: "Ring", badge: "Top",
    name: "Ring Video Doorbell 4",
    desc: "Sonnette vidéo HD. Détection de mouvement et vision nocturne couleur.",
    price: "149,99€", priceOld: "179,99€",
    rating: 4.4, asin: "B08NY19G4C",
    aliLink: "https://s.click.aliexpress.com/e/_c4FHbRWV",
    img: "https://m.media-amazon.com/images/I/51kQwdEkmaL._SY450_.jpg"
  },
  {
    id: "m7", subcat: "camera",
    emoji: "✨", brand: "Tapo", badge: "-25%",
    name: "Tapo C200 Caméra intérieure",
    desc: "Caméra Wi-Fi 360°. Rotation motorisée et vision nocturne. Compatible Alexa.",
    price: "24,99€", priceOld: "34,99€",
    rating: 4.5, asin: "B07XLML2YS",
    img: "https://m.media-amazon.com/images/I/418Hc+TDWjL._AC_SX679_.jpg"
  },
  {
    id: "m8", subcat: "camera",
    emoji: "✨", brand: "Arlo", badge: "",
    name: "Arlo Pro 5 Caméra extérieure 2K",
    desc: "Caméra 2K sans fil. Détection de personnes, véhicules et animaux.",
    price: "199,99€", priceOld: "249,99€",
    rating: 4.4, asin: "B0D6GYK1LX",
    aliLink: "https://s.click.aliexpress.com/e/_c3PxMHvL",
    img: "https://m.media-amazon.com/images/I/61Gmp5rUhwL._AC_SX679_.jpg"
  },
  {
    id: "m9", subcat: "lumiere",
    emoji: "💡", brand: "Philips Hue", badge: "Best-seller",
    name: "Philips Hue White & Color Starter Kit",
    desc: "3 ampoules E27 + pont de connexion. 16 millions de couleurs.",
    price: "129,99€", priceOld: "169,99€",
    rating: 4.7, asin: "B099NRLRG3",
    aliLink: "https://s.click.aliexpress.com/e/_c2yLyHGh",
    aliLink: "https://s.click.aliexpress.com/e/_c2yLyHGh",
    img: "https://m.media-amazon.com/images/I/61DQTO5VJbL._AC_SX342_SY445_QL70_ML2_.jpg"
  },
  {
    id: "m10", subcat: "lumiere",
    emoji: "🌈", brand: "Govee", badge: "",
    name: "Govee Ampoules WiFi Intelligentes E27",
    desc: "Lot de 2 ampoules RGBWW connectées. Compatible Alexa et Google Home.",
    price: "22,99€", priceOld: "34,99€",
    rating: 4.4, asin: "B0C3VLCFJR",
    aliLink: "https://s.click.aliexpress.com/e/_c4N4YmF7",
    aliLink: "https://s.click.aliexpress.com/e/_c4N4YmF7",
    img: "https://m.media-amazon.com/images/I/61FQ3FVoTeL._AC_SX679_.jpg"
  },
  {
    id: "m35", subcat: "lumiere",
    emoji: "💡", brand: "Tapo", badge: "Best-seller",
    name: "Tapo L530E Ampoule LED E27 WiFi Multicolore",
    desc: "8,7W 806Lm, 16 millions de couleurs, dimmable. Compatible Alexa et Google Home. Sans hub.",
    price: "9,99€", priceOld: "14,99€",
    rating: 4.5, asin: "B08GDC99PX",
    aliLink: "https://s.click.aliexpress.com/e/_c3pwsjCh",
    aliLink: "https://s.click.aliexpress.com/e/_c3pwsjCh",
    img: "https://m.media-amazon.com/images/I/619EduJE1kL._AC_SX679_.jpg"
  },
  {
    id: "m36", subcat: "lumiere",
    emoji: "💡", brand: "AISIRER", badge: "",
    name: "AISIRER Ampoule WiFi E27 RGB Lot de 2",
    desc: "10W 1000LM, multicolore RGB. Compatible Alexa, Google Home et Siri. Sans hub requis.",
    price: "13,99€", priceOld: "21,99€",
    rating: 4.4, asin: "B07S7B7KCR",
    aliLink: "https://s.click.aliexpress.com/e/_c3CXBiNX",
    aliLink: "https://s.click.aliexpress.com/e/_c3CXBiNX",
    img: "https://m.media-amazon.com/images/I/61IPEBQ0A-L._AC_SX679_.jpg"
  },
  {
    id: "m37", subcat: "lumiere",
    emoji: "💡", brand: "Philips Hue", badge: "Top",
    name: "Philips Hue GU10 White & Color Lot de 2",
    desc: "Ampoules LED GU10 350 lumens Bluetooth. 16 millions de couleurs. Alexa, Google, HomeKit.",
    price: "79,99€", priceOld: "109,99€",
    rating: 4.6, asin: "B099NS75JX",
    aliLink: "https://s.click.aliexpress.com/e/_c35HjJE9",
    aliLink: "https://s.click.aliexpress.com/e/_c35HjJE9",
    img: "https://m.media-amazon.com/images/I/61ygXLfC-vL._AC_SX679_.jpg"
  },
  {
    id: "m38", subcat: "lumiere",
    emoji: "💡", brand: "GY", badge: "-40%",
    name: "GY Ampoule Connectée GU10 WiFi Lot de 6",
    desc: "7W 500LM RGB + blanc chaud/froid. Dimmable, Smart Life. Compatible Alexa et Google. Lot de 6.",
    price: "29,99€", priceOld: "49,99€",
    rating: 4.3, asin: "B09M3677F7",
    aliLink: "https://s.click.aliexpress.com/e/_c3dvyqYH",
    img: "https://m.media-amazon.com/images/I/61qQFgHkkaL._AC_SX679_.jpg"
  },
  {
    id: "m39", subcat: "lumiere",
    emoji: "🌈", brand: "iFEEL", badge: "",
    name: "iFEEL Ampoule Connectée E27 Multicolore",
    desc: "LED dimmable RGB, télécommande incluse. Compatible Alexa et Google Home. WiFi, sans hub.",
    price: "8,99€", priceOld: "14,99€",
    rating: 4.3, asin: "B0C66HQRGF",
    aliLink: "https://s.click.aliexpress.com/e/_c3tdRgBb",
    img: "https://m.media-amazon.com/images/I/51ik0clOLuL._AC_SX679_.jpg"
  },
  {
    id: "m40", subcat: "lumiere",
    emoji: "💡", brand: "LIFX", badge: "Nouveau",
    name: "LIFX GU10 Ampoule WiFi Multicolore",
    desc: "Sans hub ni pont requis. Multicolore ajustable. Compatible Alexa, HomeKit et Google Assistant.",
    price: "29,99€", priceOld: "44,99€",
    rating: 4.4, asin: "B075411FZ2",
    aliLink: "https://s.click.aliexpress.com/e/_c34alsUN",
    aliLink: "https://s.click.aliexpress.com/e/_c34alsUN",
    img: "https://m.media-amazon.com/images/I/41ryn1wlthL._AC_SX679_.jpg"
  },
  {
    id: "m41", subcat: "lumiere",
    emoji: "💡", brand: "GY", badge: "Best-seller",
    name: "GY Ampoule E27 WiFi 23W 2400LM Globe G150",
    desc: "Puissante 23W, 2400 lumens. RGB + blanc chaud/froid. Idéale grandes pièces. Alexa et Google.",
    price: "16,99€", priceOld: "24,99€",
    rating: 4.4, asin: "B09Y1TVBWN",
    aliLink: "https://s.click.aliexpress.com/e/_c4sR1HlF",
    aliLink: "https://s.click.aliexpress.com/e/_c4sR1HlF",
    img: "https://m.media-amazon.com/images/I/51UWVVBV+KL._AC_SX679_.jpg"
  },
  {
    id: "m42", subcat: "lumiere",
    emoji: "💡", brand: "ANOOPSYCHE", badge: "",
    name: "ANOOPSYCHE Ampoule WiFi E27 9W Lot de 2",
    desc: "Équivaut à 75W. Blanc chaud à froid 2700K-6500K. Compatible Alexa, Echo et Google Home.",
    price: "11,99€", priceOld: "19,99€",
    rating: 4.3, asin: "B07KWPQMHH",
    aliLink: "https://s.click.aliexpress.com/e/_c3XGw1Vb",
    aliLink: "https://s.click.aliexpress.com/e/_c3XGw1Vb",
    img: "https://m.media-amazon.com/images/I/61DwrfxOIlL._AC_SX679_.jpg"
  },
  {
    id: "m11", subcat: "thermostat",
    emoji: "✨", brand: "Meross", badge: "Nouveau",
    name: "Meross Thermostat Connecté Matter",
    desc: "Thermostat WiFi compatible HomeKit, Alexa et Google Home. Programmable.",
    price: "59,99€", priceOld: "79,99€",
    rating: 4.5, asin: "B0F3CSW5BJ",
    img: "https://m.media-amazon.com/images/I/61xJzmlVAZL._AC_SX679_.jpg"
  },
  {
    id: "m43", subcat: "thermostat",
    emoji: "✨", brand: "Meross", badge: "Best-seller",
    name: "Meross Thermostat Encastrable WiFi Chaudière",
    desc: "Compatible Apple HomeKit, Alexa et Google Home. Pour chaudière gaz et chauffage au sol. Écran tactile.",
    price: "49,99€", priceOld: "69,99€",
    rating: 4.5, asin: "B0B8SDLTKC",
    img: "https://m.media-amazon.com/images/I/61OxlQ1YAtL._AC_SX679_.jpg"
  },
  {
    id: "m44", subcat: "thermostat",
    emoji: "✨", brand: "MOES", badge: "Top",
    name: "MOES Thermostat Connecté Matter WiFi",
    desc: "Protocole Matter. Compatible Alexa, Google Home, SmartThings et Tuya. Programmable, chauffage eau.",
    price: "39,99€", priceOld: "59,99€",
    rating: 4.3, asin: "B0DK3FK4XC",
    img: "https://m.media-amazon.com/images/I/5133UDzLkpL._AC_SX679_.jpg"
  },
  {
    id: "m45", subcat: "thermostat",
    emoji: "✨", brand: "SALCAR", badge: "",
    name: "SALCAR Thermostat WiFi Programmable avec Humidité",
    desc: "Chaudière gaz et chauffage sol. Affiche humidité, programmation hebdo. Compatible Alexa et Google.",
    price: "29,99€", priceOld: "44,99€",
    rating: 4.3, asin: "B0DBKYL8GX",
    img: "https://m.media-amazon.com/images/I/61sm7-bLmPL._AC_SX679_.jpg"
  },
  {
    id: "m46", subcat: "thermometre",
    emoji: "✨", brand: "Govee", badge: "Best-seller",
    name: "Govee WiFi Thermomètre Hygromètre Intérieur",
    desc: "Haute précision, alertes sur app. Historique 2 ans exportable CSV. Cave, serre, chambre bébé.",
    price: "12,99€", priceOld: "19,99€",
    rating: 4.5, asin: "B08Y8PQ7XZ",
    img: "https://m.media-amazon.com/images/I/61jlJmDShhL._AC_SX679_.jpg"
  },
  {
    id: "m47", subcat: "thermometre",
    emoji: "✨", brand: "Konyks", badge: "Top",
    name: "Konyks Termo Thermomètre Hygromètre Wi-Fi",
    desc: "Lecture à distance, déclenche d'autres appareils Konyks. Compatible Alexa et Google Home.",
    price: "24,99€", priceOld: "34,99€",
    rating: 4.4, asin: "B09GS2MQ1D",
    img: "https://m.media-amazon.com/images/I/71-Izq9m6-L._AC_SX679_.jpg"
  },
  {
    id: "m48", subcat: "thermometre",
    emoji: "✨", brand: "GHome", badge: "",
    name: "GHome Smart Thermomètre Hygromètre WiFi",
    desc: "Capteur température et humidité en temps réel. Alertes app, compatible Alexa. Cave à vin, intérieur.",
    price: "9,99€", priceOld: "16,99€",
    rating: 4.3, asin: "B0CRB2R5PJ",
    img: "https://m.media-amazon.com/images/I/61A-gn0KoIL._AC_SX679_.jpg"
  },
  {
    id: "m49", subcat: "thermometre",
    emoji: "✨", brand: "ORIA", badge: "Nouveau",
    name: "Thermomètre Hygromètre WiFi avec Sonde Externe",
    desc: "Écran LCD, sonde externe incluse. Alertes app, idéal serre, cave à vin et garage.",
    price: "15,99€", priceOld: "24,99€",
    rating: 4.3, asin: "B0BGSQ7DL3",
    img: "https://m.media-amazon.com/images/I/613zrmeq2mL._AC_SX679_.jpg"
  },
  {
    id: "m50", subcat: "thermometre",
    emoji: "✨", brand: "Otio", badge: "",
    name: "Otio Thermomètre Hygromètre Connecté WiFi",
    desc: "Compatible Alexa et Google Home. Monitoring température et humidité. App OtioHome.",
    price: "19,99€", priceOld: "29,99€",
    rating: 4.2, asin: "B08427M1S6",
    img: "https://m.media-amazon.com/images/I/51E-DbzpubL._AC_SX679_.jpg"
  },
  {
    id: "m12", subcat: "prise",
    emoji: "🔌", brand: "Tapo", badge: "Best-seller",
    name: "Tapo P100 Prise Connectée WiFi",
    desc: "Prise intelligente compatible Alexa et Google Home. Contrôle à distance.",
    price: "18,99€", priceOld: "24,99€",
    rating: 4.6, asin: "B08HKV28ZR",
    aliLink: "https://s.click.aliexpress.com/e/_c3yQBvPn",
    img: "https://m.media-amazon.com/images/I/51BMTMSlG0L._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "m31", subcat: "prise",
    emoji: "🔌", brand: "EIGHTREE", badge: "Best-seller",
    name: "EIGHTREE Mini Prise Connectée WiFi 16A",
    desc: "Suivi consommation d'énergie. Compatible Alexa, Google Home et SmartThings. 3680W, compacte.",
    price: "12,99€", priceOld: "19,99€",
    rating: 4.4, asin: "B0BTDTLJGC",
    aliLink: "https://s.click.aliexpress.com/e/_c3m3Dz65",
    img: "https://m.media-amazon.com/images/I/612PajKC7FL._AC_SX679_.jpg"
  },
  {
    id: "m32", subcat: "prise",
    emoji: "🔌", brand: "Amazon", badge: "",
    name: "Amazon Smart Plug Prise Connectée WiFi",
    desc: "Prise officielle Amazon avec Alexa intégré. Configuration simple, contrôle vocal et à distance.",
    price: "24,99€", priceOld: "34,99€",
    rating: 4.5, asin: "B082YTPXR6",
    aliLink: "https://s.click.aliexpress.com/e/_c4FunRJX",
    img: "https://m.media-amazon.com/images/I/710m4DwTK2L._AC_SX679_.jpg"
  },
  {
    id: "m33", subcat: "prise",
    emoji: "🔌", brand: "ANTELA", badge: "-30%",
    name: "ANTELA Prise Connectée WiFi Lot de 2 avec Conso",
    desc: "Mesure consommation en temps réel. 16A 3680W, compatible Alexa et Google Home. Lot de 2.",
    price: "17,99€", priceOld: "25,99€",
    rating: 4.3, asin: "B0D4Z3DNGJ",
    aliLink: "https://s.click.aliexpress.com/e/_c32NcRON",
    img: "https://m.media-amazon.com/images/I/51avh1-8nzL._AC_SX679_.jpg"
  },
  {
    id: "m34", subcat: "prise",
    emoji: "🔌", brand: "Refoss", badge: "Top",
    name: "Refoss Prise Connectée HomeKit Lot de 4",
    desc: "Compatible Apple HomeKit, Siri, Alexa et Google Home. Programmable, commande vocale. Lot de 4.",
    price: "35,99€", priceOld: "49,99€",
    rating: 4.4, asin: "B0B874LX24",
    aliLink: "https://s.click.aliexpress.com/e/_c3R8ntQN",
    img: "https://m.media-amazon.com/images/I/61UkniNlPbL._AC_SX679_.jpg"
  },
  {
    id: "m51", subcat: "solaire",
    emoji: "✨", brand: "FOMYHEARD", badge: "Best-seller",
    name: "FOMYHEARD Bornes Solaires Jardin Lot de 8",
    desc: "Lumière chaude + 7 couleurs RGB. IP65 étanche. Éclairage chemins et décoration jardin.",
    price: "19,99€", priceOld: "29,99€",
    rating: 4.4, asin: "B0CS3276FR",
    img: "https://m.media-amazon.com/images/I/71B4ol8pU9L._AC_SX679_.jpg"
  },
  {
    id: "m52", subcat: "solaire",
    emoji: "✨", brand: "Vanranger", badge: "Top",
    name: "Vanranger Lampe Murale Solaire 248 LED Lot de 4",
    desc: "Détecteur mouvement, 270° éclairage sécurité. IP65 étanche, sans fil. Lot de 4.",
    price: "25,99€", priceOld: "39,99€",
    rating: 4.4, asin: "B0D6724RJM",
    img: "https://m.media-amazon.com/images/I/81kfDrn5gjL._AC_SX679_.jpg"
  },
  {
    id: "m53", subcat: "solaire",
    emoji: "✨", brand: "Nipify", badge: "",
    name: "Nipify Lampe Solaire 172 LED avec Câble 5M",
    desc: "3 modes, détecteur mouvement. Câble 5m panneau séparé. IP65, idéal garage et jardin.",
    price: "15,99€", priceOld: "24,99€",
    rating: 4.3, asin: "B0CGCKQ9P6",
    img: "https://m.media-amazon.com/images/I/7121-L6rpDL._AC_SX679_.jpg"
  },
  {
    id: "m54", subcat: "solaire",
    emoji: "✨", brand: "OUILA", badge: "Best-seller",
    name: "OUILA Spot Solaire 185 LED Lot de 2",
    desc: "3 modes, détecteur mouvement. IP65 étanche, projecteur pour jardin, garage et patio.",
    price: "16,99€", priceOld: "25,99€",
    rating: 4.4, asin: "B09TP1GD93",
    img: "https://m.media-amazon.com/images/I/71Dw5r6gcUL._AC_SX679_.jpg"
  },
  {
    id: "m55", subcat: "solaire",
    emoji: "✨", brand: "LOTMOS", badge: "",
    name: "LOTMOS Projecteur Solaire 342 LED Télécommande",
    desc: "342 LED ultra puissant, télécommande incluse. 3 modes, IP65. Idéal garage et cour.",
    price: "14,99€", priceOld: "22,99€",
    rating: 4.3, asin: "B0D179RV6Z",
    img: "https://m.media-amazon.com/images/I/715lCuVvpnL._AC_SX679_.jpg"
  },
  {
    id: "m56", subcat: "solaire",
    emoji: "✨", brand: "ARTINABS", badge: "Top",
    name: "ARTINABS Spot Solaire 88 LED 360° Lot de 2",
    desc: "Ultra puissant, réglable 360°. Détecteur mouvement, IP65. Sans fil, pour chemin et allée.",
    price: "18,99€", priceOld: "29,99€",
    rating: 4.4, asin: "B09LTXL3YL",
    img: "https://m.media-amazon.com/images/I/91TdzCMXOAL._AC_SX679_.jpg"
  },
  {
    id: "m57", subcat: "solaire",
    emoji: "✨", brand: "Pxwaxpy", badge: "Nouveau",
    name: "Pxwaxpy Spot Solaire 204 LED 2000LM Câble 5M",
    desc: "3 modes, 2000 lumens. Câble 5m panneau séparé. IP65, pour jardin et garage.",
    price: "13,99€", priceOld: "21,99€",
    rating: 4.3, asin: "B0C6FGWWL8",
    img: "https://m.media-amazon.com/images/I/71i6iruj4bL._AC_SX679_.jpg"
  },
  {
    id: "m58", subcat: "solaire",
    emoji: "✨", brand: "OUILA", badge: "-30%",
    name: "OUILA Lampe Solaire 185 LED Lot de 4",
    desc: "3 modes avec détecteur. IP65 étanche. Lot de 4 pour couvrir tout le jardin.",
    price: "24,99€", priceOld: "35,99€",
    rating: 4.5, asin: "B09F6PLJT6",
    img: "https://m.media-amazon.com/images/I/812dLxnDAYL._AC_SX679_.jpg"
  },
  {
    id: "m59", subcat: "solaire",
    emoji: "✨", brand: "Peasur", badge: "",
    name: "Projecteur Solaire 238 LED 2000LM Télécommande",
    desc: "238 LED, 2000 lumens. 3 modes, télécommande, batterie 2200mAh. IP65 pour extérieur.",
    price: "12,99€", priceOld: "19,99€",
    rating: 4.3, asin: "B0CN6GH98G",
    img: "https://m.media-amazon.com/images/I/71zQUZp19OL._AC_SX679_.jpg"
  },
  {
    id: "m60", subcat: "solaire",
    emoji: "✨", brand: "Nifipfy", badge: "",
    name: "Nifipfy Lampe Solaire 168 LED Blanc Chaud",
    desc: "3 modes, capteur mouvement. IP65, lumière blanc chaud pour jardin, garage et mur.",
    price: "11,99€", priceOld: "18,99€",
    rating: 4.3, asin: "B0FVFKHVPZ",
    img: "https://m.media-amazon.com/images/I/71eIDE6dzeL._AC_SX679_.jpg"
  },
  {
    id: "m61", subcat: "fontaine",
    emoji: "⛲", brand: "SZMP", badge: "Best-seller",
    name: "SZMP Fontaine Solaire 3.5W LED Batterie 2000mAh",
    desc: "Flottante, 8 buses, LED intégrée. Batterie rechargeable, câble 5m. Bain d'oiseaux, étang, jardin.",
    price: "19,99€", priceOld: "29,99€",
    rating: 4.4, asin: "B0BRC2KFDX",
    img: "https://m.media-amazon.com/images/I/81yl0UEKysL._AC_SX679_.jpg"
  },
  {
    id: "m62", subcat: "fontaine",
    emoji: "⛲", brand: "Jsdoin", badge: "",
    name: "Jsdoin Fontaine Solaire 7 Buses Flottante",
    desc: "Pompe solaire avec 7 buses interchangeables. Pour bain d'oiseaux, étang et patio.",
    price: "9,99€", priceOld: "15,99€",
    rating: 4.3, asin: "B08XQC2R23",
    img: "https://m.media-amazon.com/images/I/71KrPATAtnS._AC_SX679_.jpg"
  },
  {
    id: "m63", subcat: "fontaine",
    emoji: "⛲", brand: "AISITIN", badge: "Top",
    name: "AISITIN Fontaine Solaire Flottante 3.5W 6 Buses",
    desc: "Panneau solaire haute efficacité. Fonctionne même par faible ensoleillement. Bain d'oiseaux.",
    price: "15,99€", priceOld: "22,99€",
    rating: 4.4, asin: "B08S348HQ2",
    img: "https://m.media-amazon.com/images/I/81Q1RBznmQL._AC_SX679_.jpg"
  },
  {
    id: "m64", subcat: "fontaine",
    emoji: "⛲", brand: "Mademax", badge: "",
    name: "Mademax Fontaine Solaire Flottante 1.4W",
    desc: "Version améliorée, 4 buses. Idéale petit bassin, abreuvoir oiseaux, piscine.",
    price: "8,99€", priceOld: "14,99€",
    rating: 4.3, asin: "B085C5LQN3",
    img: "https://m.media-amazon.com/images/I/81tHGlkRpML._AC_SX679_.jpg"
  },
  {
    id: "m65", subcat: "fontaine",
    emoji: "⛲", brand: "Amur", badge: "Nouveau",
    name: "Amur Fontaine Bouddha Solaire LED Cascade",
    desc: "Fontaine décorative zen avec cascade et LED. Batterie Li-Ion intégrée. Terrasse, balcon, jardin.",
    price: "39,99€", priceOld: "59,99€",
    rating: 4.4, asin: "B08WH9PYV3",
    img: "https://m.media-amazon.com/images/I/81HB2WIJbfL._AC_SX679_.jpg"
  },
  {
    id: "m66", subcat: "fontaine",
    emoji: "⛲", brand: "AISITIN", badge: "Best-seller",
    name: "AISITIN Fontaine Solaire 3.5W avec Batterie",
    desc: "Batterie intégrée, fonctionne même à l'ombre. 6 buses, pour étang et bain d'oiseaux.",
    price: "16,99€", priceOld: "24,99€",
    rating: 4.5, asin: "B083FN31P6",
    img: "https://m.media-amazon.com/images/I/81z2VpIjqfL._AC_SX679_.jpg"
  },
  {
    id: "m67", subcat: "fontaine",
    emoji: "⛲", brand: "VITCOCO", badge: "",
    name: "VITCOCO Fontaine Solaire 3.5W Batterie 18cm",
    desc: "Panneau intégré avec batterie. 6 buses, flottante compacte 18cm. Petit étang et décoration.",
    price: "14,99€", priceOld: "21,99€",
    rating: 4.3, asin: "B07SGCKS8J",
    img: "https://m.media-amazon.com/images/I/815iRkP6S+L._AC_SX679_.jpg"
  },
  {
    id: "m68", subcat: "fontaine",
    emoji: "⛲", brand: "AISITIN", badge: "-30%",
    name: "AISITIN Fontaine Solaire 3.5W Batterie 6 Buses",
    desc: "Pompe solaire flottante avec batterie rechargeable. 6 styles de jets. Bain d'oiseaux, jardin.",
    price: "13,99€", priceOld: "19,99€",
    rating: 4.4, asin: "B083BPVBH2",
    img: "https://m.media-amazon.com/images/I/81hqJnwETTL._AC_SX679_.jpg"
  },
  {
    id: "m69", subcat: "fontaine",
    emoji: "⛲", brand: "AISITIN", badge: "Top",
    name: "AISITIN Fontaine Solaire 6.5W Batterie 1500mAh",
    desc: "Plus puissante 6.5W, batterie 1500mAh. 6 styles de fontaines. Jet jusqu'à 70cm.",
    price: "21,99€", priceOld: "32,99€",
    rating: 4.5, asin: "B083BPQ717",
    img: "https://m.media-amazon.com/images/I/816e0KeKTxL._AC_SX679_.jpg"
  },
  {
    id: "m70", subcat: "fontaine",
    emoji: "⛲", brand: "Primrose", badge: "",
    name: "Primrose Fontaine Bain d'Oiseau Pizzaro LED",
    desc: "Fontaine décorative H80cm avec éclairage LED solaire. Bain d'oiseaux intégré. Pierre effet bronze.",
    price: "89,99€", priceOld: "119,99€",
    rating: 4.3, asin: "B003MQ6AQM",
    img: "https://m.media-amazon.com/images/I/41wXVvmKoFL._AC_SX679_.jpg"
  },
  {
    id: "m71", subcat: "panneau",
    emoji: "🔋", brand: "FlexSolar", badge: "",
    name: "FlexSolar Chargeur Solaire Portable 20W USB",
    desc: "USB-A QC3.0 + USB-C, pliable étanche. Idéal randonnée, camping, recharge téléphone.",
    price: "21,99€", priceOld: "29,99€",
    rating: 4.3, asin: "B0C55CNCJW",
    img: "https://m.media-amazon.com/images/I/61Iha4YgBsL._AC_SX679_.jpg"
  },
  {
    id: "m72", subcat: "panneau",
    emoji: "🔋", brand: "ECO-WORTHY", badge: "",
    name: "ECO-WORTHY Kit Panneau Solaire 25W 12V",
    desc: "Kit complet : panneau 25W + contrôleur 10A + câble SAE. Pour voiture, camping-car, bateau.",
    price: "39,99€", priceOld: "54,99€",
    rating: 4.4, asin: "B0C9Q3MSP4",
    img: "https://m.media-amazon.com/images/I/71RtRTFAQRL._AC_SX679_.jpg"
  },
  {
    id: "m73", subcat: "panneau",
    emoji: "🔋", brand: "DOKIO", badge: "Best-seller",
    name: "DOKIO Panneau Solaire Pliable 100W 12V",
    desc: "Monocristallin pliable, 2 ports USB. Léger et portable, idéal camping et plein air.",
    price: "79,99€", priceOld: "109,99€",
    rating: 4.4, asin: "B0CSXP44GV",
    img: "https://m.media-amazon.com/images/I/81LaBu3F21L._AC_SX679_.jpg"
  },
  {
    id: "m74", subcat: "panneau",
    emoji: "🔋", brand: "BigBlue", badge: "Top",
    name: "BigBlue Solarpowa100 Panneau Pliable 100W IP68",
    desc: "24V/4.16A avec supports. IP68 étanche, compatible la plupart des générateurs. Camping.",
    price: "119,99€", priceOld: "159,99€",
    rating: 4.5, asin: "B0C534PK15",
    img: "https://m.media-amazon.com/images/I/81m8cW-O5PL._AC_SX679_.jpg"
  },
  {
    id: "m75", subcat: "panneau",
    emoji: "🔋", brand: "DOKIO", badge: "",
    name: "DOKIO Kit Panneau Solaire Pliable 200W",
    desc: "Monocristallin portable, 2 ports USB. Pour station électrique, camping-car et plein air.",
    price: "169,99€", priceOld: "219,99€",
    rating: 4.4, asin: "B0BNN62CM6",
    img: "https://m.media-amazon.com/images/I/71+-zB9GGfL._AC_SX679_.jpg"
  },
  {
    id: "m76", subcat: "panneau",
    emoji: "🔋", brand: "ECO-WORTHY", badge: "Best-seller",
    name: "ECO-WORTHY Kit Panneau Solaire 240W 12V",
    desc: "Kit complet : panneau 240W + régulateur 30A + câbles + fixations. Camping-car, maison.",
    price: "219,99€", priceOld: "279,99€",
    rating: 4.5, asin: "B0C9PZ211H",
    img: "https://m.media-amazon.com/images/I/71L100gokzL._AC_SX679_.jpg"
  },
  {
    id: "m77", subcat: "panneau",
    emoji: "🔋", brand: "DOKIO", badge: "-25%",
    name: "DOKIO Panneau Solaire Pliable 240W Contrôleur 20A",
    desc: "Pliable portable 240W avec contrôleur 20A. USB 12V/24V, pour station et camping-car.",
    price: "259,99€", priceOld: "349,99€",
    rating: 4.3, asin: "B09D7943QZ",
    img: "https://m.media-amazon.com/images/I/71NiNNw7hpL._AC_SX679_.jpg"
  },
  {
    id: "m78", subcat: "panneau",
    emoji: "🔋", brand: "EcoFlow", badge: "Nouveau",
    name: "EcoFlow Panneau Solaire Portable 400W IP68",
    desc: "Pliable avec mallette, IP68. Haute efficacité, compatible stations EcoFlow et autres.",
    price: "549,99€", priceOld: "699,99€",
    rating: 4.5, asin: "B0B129KSKL",
    img: "https://m.media-amazon.com/images/I/71R13HlYowL._AC_SX679_.jpg"
  },
  {
    id: "m79", subcat: "panneau",
    emoji: "🔋", brand: "EcoFlow", badge: "Top",
    name: "EcoFlow STREAM Kit Solaire Balcon 800W",
    desc: "Micro-onduleur 800W + 2 panneaux 400W. Autoconsommation plug & play, app WiFi. Balcon, jardin, toit.",
    price: "999,99€", priceOld: "1299,99€",
    rating: 4.5, asin: "B0F1CVD47Z",
    img: "https://m.media-amazon.com/images/I/61cRp9EtwmL._AC_SX679_.jpg"
  },
  {
    id: "m80", subcat: "panneau",
    emoji: "🔋", brand: "EcoFlow", badge: "Premium",
    name: "EcoFlow DELTA 2 Max 2048Wh + Panneau 400W",
    desc: "Station 2048Wh LFP + panneau 400W. 3100W AC, charge 0-80% en 53min. Camping, maison, secours.",
    price: "1899,99€", priceOld: "2299,99€",
    rating: 4.6, asin: "B0C4KXT2HM",
    img: "https://m.media-amazon.com/images/I/61QOl650cJL._AC_SX679_.jpg"
  },
  {
    id: "m13", subcat: "serrure",
    emoji: "✨", brand: "Nuki", badge: "Top",
    name: "Nuki Smart Lock Go 2025",
    desc: "Serrure connectée Bluetooth & Matter. Ouverture via smartphone ou code.",
    price: "146,99€", priceOld: "179,99€",
    rating: 4.4, asin: "B0DVLYQWXX",
    img: "https://m.media-amazon.com/images/I/61VfnvIPpmL._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "m15", subcat: "tondeuse",
    emoji: "🌿", brand: "Mammotion", badge: "Nouveau",
    name: "Mammotion YUKA Mini 2 Robot Tondeuse 500m²",
    desc: "Sans fil périphérique. IA 3 caméras, cartographie automatique multi-zones. Jusqu'à 500m².",
    price: "499,99€", priceOld: "599,99€",
    rating: 4.5, asin: "B0GCCLW2PL",
    img: "https://m.media-amazon.com/images/I/714OOSg6fFL._AC_SX679_.jpg"
  },
  {
    id: "m16", subcat: "tondeuse",
    emoji: "🌱", brand: "Segway", badge: "Best-seller",
    name: "Segway Navimow i105E Robot Tondeuse 500m²",
    desc: "Sans fil périphérique. Navigation GPS précise, contrôle via app. Silencieux.",
    price: "599,99€", priceOld: "749,99€",
    rating: 4.4, asin: "B0CXDNFZLL",
    img: "https://m.media-amazon.com/images/I/61ZG5yYGOML._AC_SX679_.jpg"
  },
  {
    id: "m17", subcat: "tondeuse",
    emoji: "✨", brand: "Mammotion", badge: "Top",
    name: "Mammotion LUBA 3 AWD 3000 Robot Tondeuse",
    desc: "LiDAR + RTK + IA Vision. Pentes 80%, 30 zones, jusqu'à 3000m². Tout-terrain.",
    price: "1499,99€", priceOld: "1799,99€",
    rating: 4.6, asin: "B0GCZSSZRZ",
    img: "https://m.media-amazon.com/images/I/61LlViRj0RL._AC_SX679_.jpg"
  },
  {
    id: "m18", subcat: "tondeuse",
    emoji: "✨", brand: "RoboUP", badge: "",
    name: "RoboUP Raccoon 2 SE Robot Tondeuse 600m²",
    desc: "Prêt à l'emploi, tonte parallèle. Batterie 5Ah, 150 min d'autonomie. Sans RTK.",
    price: "349,99€", priceOld: "449,99€",
    rating: 4.3, asin: "B0G7XC4QLH",
    img: "https://m.media-amazon.com/images/I/6157-xaxiqL._AC_SX679_.jpg"
  },
  {
    id: "m19", subcat: "purificateur",
    emoji: "✨", brand: "Winix", badge: "Best-seller",
    name: "Winix 5500-2 Purificateur d'Air HEPA 99m²",
    desc: "CADR 390m³/h, filtre HEPA + charbon actif + PlasmaWave. Capteur intelligent, mode auto.",
    price: "249,99€", priceOld: "349,99€",
    rating: 4.6, asin: "B01D8DAYII",
    img: "https://m.media-amazon.com/images/I/61UqpOlddiL._AC_SX679_.jpg"
  },
  {
    id: "m20", subcat: "purificateur",
    emoji: "💨", brand: "Levoit", badge: "Top",
    name: "Levoit Purificateur d'Air HEPA Chambre",
    desc: "Filtration efficace allergies et odeurs. Silencieux, idéal chambre et bureau.",
    price: "89,99€", priceOld: "119,99€",
    rating: 4.5, asin: "B0CGDJHJP6",
    img: "https://m.media-amazon.com/images/I/61jSLBgfvXL._AC_SX679_.jpg"
  },
  {
    id: "m21", subcat: "purificateur",
    emoji: "🌀", brand: "Winix", badge: "Nouveau",
    name: "Winix T500 Purificateur Connecté WiFi 50m²",
    desc: "CADR 250m³/h, contrôle via app et Alexa. HEPA + charbon actif. Compact.",
    price: "179,99€", priceOld: "229,99€",
    rating: 4.4, asin: "B0FQBSFWRJ",
    img: "https://m.media-amazon.com/images/I/71ZlgezVxoL._AC_SX679_.jpg"
  },
  {
    id: "m22", subcat: "purificateur",
    emoji: "✨", brand: "Coway", badge: "",
    name: "Coway Airmega 150 Purificateur ECARF",
    desc: "Certifié ECARF anti-allergies. Mode sommeil ultra silencieux. Design compact.",
    price: "139,99€", priceOld: "179,99€",
    rating: 4.5, asin: "B08YZF8LJS",
    img: "https://m.media-amazon.com/images/I/81W0igDvSpL._AC_SX679_.jpg"
  },
  {
    id: "m23", subcat: "camera",
    emoji: "✨", brand: "GALAYOU", badge: "Best-seller",
    name: "GALAYOU 2K Caméra Solaire Extérieure WiFi",
    desc: "Panneau solaire intégré, batterie rechargeable. 2K, détection PIR, vision nocturne, IP65. Compatible Alexa.",
    price: "39,99€", priceOld: "59,99€",
    rating: 4.4, asin: "B0BX2L7JGJ",
    aliLink: "https://s.click.aliexpress.com/e/_c3GTrUiZ",
    img: "https://m.media-amazon.com/images/I/61N7fCbfQgL._AC_SX679_.jpg"
  },
  {
    id: "m24", subcat: "camera",
    emoji: "✨", brand: "aosu", badge: "Top",
    name: "aosu 2K Caméra Solaire 360° PTZ Extérieure",
    desc: "Panneau solaire, rotation 360°, suivi automatique. Vision nocturne couleur, alarme sirène. IP66.",
    price: "49,99€", priceOld: "69,99€",
    rating: 4.3, asin: "B0C1C5WS81",
    aliLink: "https://s.click.aliexpress.com/e/_c4Nesz0t",
    img: "https://m.media-amazon.com/images/I/61FLcj1JA1L._AC_SX679_.jpg"
  },
  {
    id: "m25", subcat: "camera",
    emoji: "✨", brand: "Imou", badge: "",
    name: "Imou 2K Caméra Solaire 360° Batterie 15000mAh",
    desc: "Batterie longue durée 15000mAh + panneau solaire. PTZ 360°, détection IA, audio bidirectionnel. IP66.",
    price: "59,99€", priceOld: "89,99€",
    rating: 4.4, asin: "B0CGZWCK5T",
    img: "https://m.media-amazon.com/images/I/61+g2ltpAvL._AC_SX679_.jpg"
  },
  {
    id: "m26", subcat: "camera",
    emoji: "📷", brand: "Tapo", badge: "Best-seller",
    name: "Tapo C210 Caméra Intérieure 2K 3MP WiFi",
    desc: "Rotation 360°, détection de personnes et pleurs bébé. Vision nocturne, stockage SD 512Go. Alexa.",
    price: "27,99€", priceOld: "39,99€",
    rating: 4.5, asin: "B095CLQ1PT",
    aliLink: "https://s.click.aliexpress.com/e/_c31Azpz7",
    img: "https://m.media-amazon.com/images/I/61z9kf65e6L._AC_SX679_.jpg"
  },
  {
    id: "m27", subcat: "camera",
    emoji: "📷", brand: "Imou", badge: "",
    name: "Imou 2K Caméra Intérieure 360° Détection IA",
    desc: "Rotation 360°, suivi intelligent IA. Audio bidirectionnel, sirène intégrée. Idéale bébé et animaux.",
    price: "24,99€", priceOld: "39,99€",
    rating: 4.4, asin: "B08X6DCJT2",
    img: "https://m.media-amazon.com/images/I/51WuJ7EZ1uL._AC_SX679_.jpg"
  },
  {
    id: "m14", subcat: "securite",
    emoji: "🚨", brand: "X-Sense", badge: "",
    name: "X-Sense Détecteur Fumée & CO Connecté",
    desc: "Détecteur 2-en-1 fumée et monoxyde de carbone WiFi. Alertes sur smartphone.",
    price: "49,99€", priceOld: "69,99€",
    rating: 4.5, asin: "B0DDL1V686",
    aliLink: "https://s.click.aliexpress.com/e/_c2RD0YPx",
    img: "https://m.media-amazon.com/images/I/71poEV2HnjL._AC_SX679_.jpg"
  },
  {
    id: "m81", subcat: "alarme",
    emoji: "🚨", brand: "AGSHOME", badge: "Best-seller",
    name: "AGSHOME Alarme Maison WiFi 15 Pièces",
    desc: "Kit complet 120dB : capteurs portes/fenêtres + détecteurs mouvement. Compatible Alexa et Google.",
    price: "49,99€", priceOld: "79,99€",
    rating: 4.4, asin: "B09GVQLPTY",
    aliLink: "https://s.click.aliexpress.com/e/_c3hH5RBr",
    img: "https://m.media-amazon.com/images/I/61l8-ogy66L._AC_SX679_.jpg"
  },
  {
    id: "m82", subcat: "alarme",
    emoji: "🚨", brand: "TECPEAK", badge: "",
    name: "TECPEAK Kit Alarme WiFi + GSM Sans Fil",
    desc: "Double connexion WiFi et GSM. Sirène, détecteurs et télécommandes. App mobile, sans abonnement.",
    price: "89,99€", priceOld: "129,99€",
    rating: 4.3, asin: "B08DCJZJPN",
    aliLink: "https://s.click.aliexpress.com/e/_c3874ak9",
    img: "https://m.media-amazon.com/images/I/610jWLHmr6L._AC_SX679_.jpg"
  },
  {
    id: "m83", subcat: "alarme",
    emoji: "🚨", brand: "tiiwee", badge: "",
    name: "tiiwee A1 Alarme Maison Sans Fil Autonome",
    desc: "Système à piles, 120dB. Capteurs portes/fenêtres + télécommandes. Simple, sans WiFi requis.",
    price: "29,99€", priceOld: "44,99€",
    rating: 4.3, asin: "B08MQR67SM",
    img: "https://m.media-amazon.com/images/I/71EvFmGTxeL._AC_SX679_.jpg"
  },
  {
    id: "m84", subcat: "alarme",
    emoji: "🚨", brand: "Generic", badge: "-30%",
    name: "Kit Alarme Sans Fil 115dB 9 Pièces Complet",
    desc: "4 capteurs porte/fenêtre + 2 détecteurs mouvement + sirène + 2 télécommandes. 115dB.",
    price: "34,99€", priceOld: "49,99€",
    rating: 4.3, asin: "B0BXCN287S",
    aliLink: "https://s.click.aliexpress.com/e/_c3418QtJ",
    img: "https://m.media-amazon.com/images/I/712xuwxEH2L._AC_SX679_.jpg"
  },
  {
    id: "m85", subcat: "alarme",
    emoji: "🚨", brand: "Somfy", badge: "Top",
    name: "Somfy Home Alarm Système Connecté",
    desc: "Alarme connectée Somfy Protect. IntelliTAG anti-intrusion. Compatible Alexa, Google et Tahoma.",
    price: "349,99€", priceOld: "449,99€",
    rating: 4.5, asin: "B0718W696D",
    aliLink: "https://s.click.aliexpress.com/e/_c4azch7n",
    img: "https://m.media-amazon.com/images/I/41t1EJFyOTL._AC_SX679_.jpg"
  },
  {
    id: "m86", subcat: "alarme",
    emoji: "🚨", brand: "Somfy", badge: "Nouveau",
    name: "Somfy Home Alarm Essential Plus Integral",
    desc: "Détection pré-intrusion IntelliTAG + détecteurs mouvement. Télésurveillance optionnelle. Made in France.",
    price: "449,99€", priceOld: "549,99€",
    rating: 4.5, asin: "B0C6V5D5T5",
    aliLink: "https://s.click.aliexpress.com/e/_c4azch7n",
    img: "https://m.media-amazon.com/images/I/61ikpB1keDL._AC_SX679_.jpg"
  },
  {
    id: "m87", subcat: "alarme",
    emoji: "🚨", brand: "Somfy", badge: "",
    name: "Somfy Home Alarm Essential WiFi",
    desc: "3 IntelliTAG + 1 détecteur mouvement + 2 badges. Compatible Alexa, Google et Tahoma.",
    price: "279,99€", priceOld: "349,99€",
    rating: 4.4, asin: "B0C6V6T9SS",
    aliLink: "https://s.click.aliexpress.com/e/_c4azch7n",
    img: "https://m.media-amazon.com/images/I/61F4BmTb3uL._AC_SX679_.jpg"
  },
  {
    id: "m88", subcat: "alarme",
    emoji: "🚨", brand: "Ajax", badge: "Premium",
    name: "Ajax Hub 2 Kit Alarme Sans Fil Pro",
    desc: "Système professionnel Ajax. Double connexion, vérification photo. Fiabilité anti-brouillage.",
    price: "599,99€", priceOld: "749,99€",
    rating: 4.6, asin: "B08B3DZ89L",
    aliLink: "https://s.click.aliexpress.com/e/_c3XANj6N",
    img: "https://m.media-amazon.com/images/I/61myLj9nt+L._AC_SX679_.jpg"
  },
  {
    id: "m89", subcat: "alarme",
    emoji: "🚨", brand: "Lacoramo", badge: "",
    name: "Kit Alarme WiFi + GSM Domotique Sans Frais",
    desc: "WiFi + ligne mobile GSM. Contrôle total via app. Sans abonnement, pour maison et entreprise.",
    price: "129,99€", priceOld: "179,99€",
    rating: 4.3, asin: "B08LK1K13V",
    img: "https://m.media-amazon.com/images/I/41xTMojSA+L._AC_SX679_.jpg"
  },
  {
    id: "m90", subcat: "alarme",
    emoji: "🚨", brand: "Somfy", badge: "Top",
    name: "Somfy One+ Alarme Tout-en-Un avec Caméra",
    desc: "Caméra Full HD + détecteur mouvement + sirène 90dB. Vision 130°, volet vie privée. Badge inclus.",
    price: "249,99€", priceOld: "329,99€",
    rating: 4.4, asin: "B071V7LF94",
    img: "https://m.media-amazon.com/images/I/61tLRel7DLL._AC_SX679_.jpg"
  },
  // ── Sécurité enfant ──
  {
    id: "m91", subcat: "enfant",
    emoji: "🚧", brand: "Safety 1st", badge: "Top",
    name: "Safety 1st Easy Close Barrière Escalier Métal",
    desc: "Barrière 73-80cm extensible 108cm. Fermeture 1 main, double verrouillage, sans perçage.",
    price: "34,99€", priceOld: "",
    rating: 4.4, asin: "B0177W8HBW",
    img: "https://m.media-amazon.com/images/I/61Fz+dBX4EL._AC_SX679_.jpg"
  },
  {
    id: "m92", subcat: "enfant",
    emoji: "🔌", brand: "Bébéalis", badge: "Best",
    name: "Bébéalis Cache Prise Bébé Français x20",
    desc: "20 caches-prises sans clé ni adhésif. 100% fabriqué en France, amovible facilement.",
    price: "9,99€", priceOld: "",
    rating: 4.5, asin: "B08L3YVM7S",
    img: "https://m.media-amazon.com/images/I/81vHyBnH2ZL._AC_SX425_.jpg"
  },
  {
    id: "m93", subcat: "enfant",
    emoji: "🔌", brand: "Bébéalis", badge: "",
    name: "Bébéalis Cache Prise Bébé x20 Version 2",
    desc: "Version améliorée, 100% Made in France. Sans clé ni colle, retrait avec prise électrique.",
    price: "10,99€", priceOld: "",
    rating: 4.5, asin: "B09TL1HX9Q",
    img: "https://m.media-amazon.com/images/I/81mlPlk0N1L._AC_SX425_.jpg"
  },
  {
    id: "m94", subcat: "enfant",
    emoji: "✨", brand: "Générique", badge: "Best",
    name: "Kit Sécurité Bébé Complet 40 Pièces",
    desc: "12 caches-prises + 3 clés, 16 protège-coins de table, 12 loquets de sécurité.",
    price: "15,99€", priceOld: "",
    rating: 3.9, asin: "B09Q17FJ71",
    img: "https://m.media-amazon.com/images/I/71UJE9I55mL._AC_SX679_.jpg"
  },
  {
    id: "m95", subcat: "enfant",
    emoji: "🔶", brand: "KIHONI", badge: "",
    name: "KIHONI Protection Coin de Table Bébé x20",
    desc: "20 protège-coins PVC transparent avec colle renforcée. Sans BPA, pour tables et meubles.",
    price: "8,99€", priceOld: "",
    rating: 4.3, asin: "B0BD23M1CN",
    img: "https://m.media-amazon.com/images/I/71PUH4I-CAL._AC_SX425_PIbundle-20,TopRight,0,0_SH20_.jpg"
  },
  {
    id: "m96", subcat: "enfant",
    emoji: "🚪", brand: "BillyBath", badge: "",
    name: "BillyBath Bloc Porte Sécurité Bébé x6",
    desc: "6 bloque-tiroirs/placards transparents. Double verrouillage, adhésif 3M, sans perçage.",
    price: "11,99€", priceOld: "",
    rating: 4.1, asin: "B0968L57QB",
    img: "https://m.media-amazon.com/images/I/61+9kMQvQBL._AC_SX425_.jpg"
  },
  {
    id: "m97", subcat: "enfant",
    emoji: "✨", brand: "HUOLE", badge: "Top",
    name: "HUOLE Barrière de Lit Anti-Chute 150cm",
    desc: "24 hauteurs réglables, filet respirant lavable, double verrouillage. Acier carbone.",
    price: "35,99€", priceOld: "",
    rating: 4.2, asin: "B0CM1XJVTT",
    img: "https://m.media-amazon.com/images/I/71AoVEUzvPL._AC_SX679_.jpg"
  },
  {
    id: "m98", subcat: "enfant",
    emoji: "🧲", brand: "NODI", badge: "Best",
    name: "NODI Serrures Magnétiques Placards x12 + 3 Clés",
    desc: "12 bloque-tiroirs magnétiques invisibles + 3 clés. Sans perçage, design caché.",
    price: "29,99€", priceOld: "",
    rating: 4.4, asin: "B07YTWLFYX",
    img: "https://m.media-amazon.com/images/I/71yyzPxNIML._AC_SX425_.jpg"
  },
  {
    id: "m99", subcat: "enfant",
    emoji: "👶", brand: "HelloBaby", badge: "Top",
    name: "HelloBaby HB6339 Babyphone Caméra 3.2\"",
    desc: "Écran IPS 3.2\", vision nocturne, audio bidirectionnel, 305m portée, 8 berceuses.",
    price: "49,99€", priceOld: "",
    rating: 4.4, asin: "B0CB8MNFXF",
    img: "https://m.media-amazon.com/images/I/6154F4imrgL._AC_SX679_.jpg"
  },
  {
    id: "m100", subcat: "enfant",
    emoji: "🔌", brand: "Safety 1st", badge: "",
    name: "Safety 1st Cache-Prises avec Clé x12",
    desc: "12 caches-prises blancs avec clé rotative incluse. Adapté aux prises françaises.",
    price: "7,99€", priceOld: "",
    rating: 4.3, asin: "B01LRS24E8",
    img: "https://m.media-amazon.com/images/I/412QMxhB5wL._AC_SX425_.jpg"
  },
];

// ===== TECH & GADGETS =====
const techProducts = [
  // --- Montres connectées ---
  {
    id: "t1", subcat: "montre",
    emoji: "⌚", brand: "Apple", badge: "Top",
    name: "Apple Watch SE (2e gén.) 40mm GPS",
    desc: "Écran Retina OLED, détection accidents, suivi santé & sport, étanche 50m.",
    price: "269,00€", priceOld: "299,00€",
    rating: 4.7, asin: "B0DGHY3PRT",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-8se-2022.jpg"
  },
  {
    id: "t2", subcat: "montre",
    emoji: "⌚", brand: "Samsung", badge: "Best-seller",
    name: "Samsung Galaxy Watch6 44mm Bluetooth",
    desc: "Écran saphir, suivi santé avancé, IP68 + 5ATM, Wear OS by Google.",
    price: "229,00€", priceOld: "319,00€",
    rating: 4.5, asin: "B0C89G7S58",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"
  },
  {
    id: "t3", subcat: "montre",
    emoji: "⌚", brand: "Garmin", badge: "",
    name: "Garmin Venu Sq 2 GPS Multisport",
    desc: "Écran AMOLED, GPS intégré, +25 sports, fréquence cardiaque, SpO2, 11 jours d'autonomie.",
    price: "199,99€", priceOld: "269,99€",
    rating: 4.4, asin: "B0B7MSV1YX",
    img: "https://fdn.gsmarena.com/imgroot/news/22/09/garmin-venu-sq-2-venu-sq-2-music-edition-official/inline/-1200/gsmarena_001.jpg"
  },
  {
    id: "t4", subcat: "montre",
    emoji: "⌚", brand: "Amazfit", badge: "-30%",
    name: "Amazfit GTS 4 Mini Montre Connectée",
    desc: "Alexa intégrée, 120+ sports, GPS, SpO2, 15 jours d'autonomie. Ultra légère.",
    price: "89,90€", priceOld: "129,90€",
    rating: 4.4, asin: "B0B9WPLJP3",
    img: "https://fdn.gsmarena.com/imgroot/news/22/07/amazfit-gts4-mini-ofic/inline/-1200/gsmarena_002.jpg"
  },
  // --- Écouteurs Bluetooth ---
  {
    id: "t5", subcat: "ecouteur",
    emoji: "🎧", brand: "Apple", badge: "Top",
    name: "Apple AirPods Pro 2 (USB-C)",
    desc: "Réduction de bruit active, audio spatial, boîtier USB-C MagSafe, 6h d'autonomie.",
    price: "229,00€", priceOld: "279,00€",
    rating: 4.7, asin: "B0CHWZ9TZS",
    img: "https://www.apple.com/newsroom/images/2023/09/apple-introduces-new-airpods-pro-2nd-generation/article/Apple-AirPods-Pro-2nd-generation-USB-C-connection-230912_inline.jpg.large.jpg"
  },
  {
    id: "t6", subcat: "ecouteur",
    emoji: "🎧", brand: "Sony", badge: "Best-seller",
    name: "Sony WF-1000XM5 Intra-auriculaires",
    desc: "Meilleure réduction de bruit, LDAC Hi-Res, 24h d'autonomie totale, IPX4.",
    price: "249,00€", priceOld: "319,00€",
    rating: 4.6, asin: "B0C4TLFZSZ",
    img: "https://fdn.gsmarena.com/imgroot/news/23/09/sony-wf-1000-xm5-review/gsmarena_100.jpg"
  },
  {
    id: "t7", subcat: "ecouteur",
    emoji: "🎧", brand: "Samsung", badge: "-45%",
    name: "Samsung Galaxy Buds FE",
    desc: "ANC, son AKG, 3 micros, résistant à l'eau IPX2, jusqu'à 30h avec boîtier.",
    price: "59,00€", priceOld: "109,00€",
    rating: 4.4, asin: "B0CHBPHSPC",
    img: "https://fdn.gsmarena.com/imgroot/news/23/09/samsung-galaxy-buds-fe-full-renders/black/gsmarena_001.jpg"
  },
  {
    id: "t8", subcat: "ecouteur",
    emoji: "🎧", brand: "JBL", badge: "Nouveau",
    name: "JBL Tune Buds Bluetooth 5.3",
    desc: "Réduction de bruit, JBL Pure Bass, 48h d'autonomie, charge rapide, IP54.",
    price: "49,99€", priceOld: "79,99€",
    rating: 4.3, asin: "B0C346BVDN",
    img: "https://www.soundguys.com/wp-content/uploads/2024/04/JBL-Tune-Buds-hero.jpg"
  },
  // --- Tablettes ---
  {
    id: "t9", subcat: "tablette",
    emoji: "📱", brand: "Apple", badge: "Top",
    name: "Apple iPad 10,9\" (10e gén.) 64 Go Wi-Fi",
    desc: "Puce A14, écran Liquid Retina, USB-C, Wi-Fi 6, Touch ID, Apple Pencil compatible.",
    price: "349,00€", priceOld: "409,00€",
    rating: 4.7, asin: "B0DK3ZCSRH",
    img: "https://www.apple.com/newsroom/images/product/ipad/standard/Apple-iPad-10th-gen-hero-221018_Full-Bleed-Image.jpg.large.jpg"
  },
  {
    id: "t10", subcat: "tablette",
    emoji: "📱", brand: "Samsung", badge: "Best-seller",
    name: "Samsung Galaxy Tab A9+ 11\" Wi-Fi 64 Go",
    desc: "Écran FHD+ 1920×1200, son 3D Dolby Atmos, multitâche, longue autonomie. Version FR.",
    price: "219,00€", priceOld: "289,00€",
    rating: 4.4, asin: "B0CNGR8WBC",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-a9-plus.jpg"
  },
  {
    id: "t11", subcat: "tablette",
    emoji: "📱", brand: "Samsung", badge: "-25%",
    name: "Samsung Galaxy Tab A9 8,7\" Wi-Fi 64 Go",
    desc: "Compact et léger, idéal famille, double haut-parleur, Samsung Knox, USB-C.",
    price: "149,00€", priceOld: "199,00€",
    rating: 4.3, asin: "B0CN5LBKLL",
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-a9.jpg"
  },
  {
    id: "t12", subcat: "tablette",
    emoji: "📱", brand: "Samsung", badge: "",
    name: "Samsung Galaxy Tab A9+ 11\" 128 Go Wi-Fi",
    desc: "128 Go de stockage, chargeur 25W inclus, écran FHD+, son surround, anthracite.",
    price: "269,00€", priceOld: "339,00€",
    rating: 4.5, asin: "B0CNRRKYTJ",
    img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-tab-a9-plus-1.jpg"
  },
  // --- Liseuses ---
  {
    id: "t13", subcat: "liseuse",
    emoji: "📖", brand: "Amazon", badge: "Nouveau",
    name: "Kindle Paperwhite 2024 (16 Go) 7\"",
    desc: "Écran anti-reflet 7\", le Kindle le plus rapide, sans pub, semaines d'autonomie.",
    price: "169,99€", priceOld: "189,99€",
    rating: 4.7, asin: "B0CFPWLGF2",
    img: "https://assets.aboutamazon.com/39/5d/fecd31c9434a913d40a92c55dd0b/paperwhite-hero-v1.jpeg"
  },
  {
    id: "t14", subcat: "liseuse",
    emoji: "📖", brand: "Amazon", badge: "Top",
    name: "Kindle Paperwhite Signature Edition 32 Go",
    desc: "Éclairage auto-adaptatif, charge sans fil Qi, 32 Go, métal noir, sans pub.",
    price: "199,99€", priceOld: "229,99€",
    rating: 4.7, asin: "B0CFPN47NY",
    img: "https://assets.aboutamazon.com/39/5d/fecd31c9434a913d40a92c55dd0b/paperwhite-hero-v1.jpeg"
  },
  {
    id: "t15", subcat: "liseuse",
    emoji: "📖", brand: "Kobo", badge: "",
    name: "Kobo Clara BW 6\" (2024) 16 Go",
    desc: "Écran E Ink anti-reflet, ComfortLight Pro, mode sombre, étanche, audiobooks.",
    price: "129,99€", priceOld: "",
    rating: 4.5, asin: "B0CZXYV8GT",
    img: "https://us.kobobooks.com/cdn/shop/products/1-Spa-BW-EN-Device_Front_1080x1080_c775875b-0b4d-4867-9831-6df68d9f3347_700x700.png?v=1710271891"
  },
  {
    id: "t16", subcat: "liseuse",
    emoji: "📖", brand: "Kobo", badge: "Couleur",
    name: "Kobo Clara Colour 6\" (2024) 16 Go",
    desc: "Premier écran E Ink couleur Kaleido 3, ComfortLight Pro, étanche, 12 000 eBooks.",
    price: "149,99€", priceOld: "",
    rating: 4.4, asin: "B0CZY1LRT4",
    img: "https://us.kobobooks.com/cdn/shop/files/2-Front-CA-US_1080x1080_7c398a1a-b9ce-47ee-b62a-f604c119b29b_700x700.png?v=1757383709"
  },
  // --- Trackers fitness ---
  {
    id: "t17", subcat: "tracker",
    emoji: "💪", brand: "Fitbit", badge: "Top",
    name: "Fitbit Charge 6 Tracker d'Activité",
    desc: "6 mois Premium inclus, GPS, fréquence cardiaque, SpO2, Google Wallet, 7j d'autonomie.",
    price: "119,99€", priceOld: "159,95€",
    rating: 4.3, asin: "B0CJVNRMQK",
    img: "https://fdn.gsmarena.com/imgroot/news/23/09/fitbit-charge-6-ofic/inline/-x500/gsmarena_003.jpg"
  },
  {
    id: "t18", subcat: "tracker",
    emoji: "💪", brand: "Xiaomi", badge: "Best-seller",
    name: "Xiaomi Smart Band 8 AMOLED 1,62\"",
    desc: "150+ sports, SpO2, VO2max, 16 jours d'autonomie, 5ATM. Meilleur rapport qualité/prix.",
    price: "29,99€", priceOld: "39,99€",
    rating: 4.5, asin: "B0CD2MP728",
    img: "https://fdn.gsmarena.com/imgroot/news/23/10/xiaomi-smart-band-8-review/gsmarena_101.jpg"
  },
  {
    id: "t19", subcat: "tracker",
    emoji: "💪", brand: "Xiaomi", badge: "-40%",
    name: "Xiaomi Smart Band 8 Active",
    desc: "Écran TFT 1,47\", charge rapide 1h, 50 sports, 14 jours d'autonomie, 5ATM.",
    price: "19,99€", priceOld: "34,99€",
    rating: 4.3, asin: "B0CTLZJZJ6",
    img: "https://thewearify.com/wp-content/uploads/2023/11/Xiaomi-Smart-Band-8-Active-Review.jpg"
  },
  {
    id: "t20", subcat: "tracker",
    emoji: "💪", brand: "Fitbit", badge: "",
    name: "Fitbit Charge 6 Corail / Or Champagne",
    desc: "Google Wallet & Maps, 40+ sports, ECG, température cutanée, Fitbit Premium inclus.",
    price: "129,99€", priceOld: "159,95€",
    rating: 4.3, asin: "B0CHN2F11G",
    img: "https://fdn.gsmarena.com/imgroot/news/23/09/fitbit-charge-6-ofic/inline/-1200/gsmarena_001.jpg"
  },
];

// ===== GUIDES =====
const guides = [
  {
    icon: "🍟",
    cat: "Guide d'achat",
    title: "Quel air fryer choisir en 2026 ?",
    desc: "Capacité, puissance, fonctions… tout ce qu'il faut savoir avant d'acheter votre friteuse à air.",
    link: "#cuisine", section: "cuisine", subcat: "airfryer"
  },
  {
    icon: "☕",
    cat: "Guide d'achat",
    title: "Machine à café grain : notre sélection",
    desc: "Du café de barista à domicile. On compare les meilleures machines automatiques.",
    link: "#cuisine", section: "cuisine", subcat: "cafe"
  },
  {
    icon: "🤖",
    cat: "Comparatif",
    title: "Roborock vs iRobot vs Ecovacs",
    desc: "Quelle marque d'aspirateur robot choisir ? Comparatif complet des 3 leaders du marché.",
    link: "#maison", section: "maison", subcat: "aspirateur"
  },
  {
    icon: "💡",
    cat: "Guide débutant",
    title: "Démarrer avec la maison connectée",
    desc: "Alexa, Google Home ou Apple HomeKit ? On vous aide à choisir votre écosystème domotique.",
    link: "#maison", section: "maison", subcat: "all"
  },
  {
    icon: "📷",
    cat: "Comparatif",
    title: "Caméra de surveillance : intérieure vs extérieure",
    desc: "Ring, Arlo, Tapo… lequel offre le meilleur rapport qualité/prix en 2026 ?",
    link: "#maison", section: "maison", subcat: "camera"
  },
  {
    icon: "🥘",
    cat: "Guide d'achat",
    title: "Robot cuiseur : vaut-il le prix ?",
    desc: "Alternative au Thermomix ? On compare les robots cuiseurs à moins de 600€.",
    link: "#cuisine", section: "cuisine", subcat: "robot"
  },
];


