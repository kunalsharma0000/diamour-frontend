const fs = require("fs");

// Parse the JSON files into JavaScript objects.
const productData = [
  {
    id: "1",
    prodName: "The Spiral Serenity",
    prodSubName: "",
    prodCat: "Rings",
    prodPrice: "84360",
    prodImage: "1.jpg",
    prodDesc:
      'The Spiral Serenity ring redefines elegance and allure. Gracefully coiled layers intertwine to form a mesmerizing spiral, adorned with brilliant diamonds that ignite a radiant dance of light. Crafted with meticulous precision, this ring epitomizes the art of refinement. Its enchanting design exudes a sense of serenity, while the gleaming diamonds add an opulent touch, showcasing the perfect balance of luxury and sophistication. Elevate your style and embrace the enchantment of "The Spiral Serenity" – a true celebration of individuality and elegance.',
    prodSlug: "the-spiral-serenity",
    prodImages: {
      gold: ["1-gold-1.jpg", "1-gold-2.jpg", "1-gold-3.jpg"],
      silver: ["1.jpg", "1.jpg", "1-silver-2.jpg"],
      copper: ["1-copper-1.jpg", "1-copper-2.jpg", "1-copper-3.jpg"],
    },
  },
  {
    id: "2",
    prodName: "Aura Fusion Drops",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "97570",
    prodImage: "2.jpg",
    prodDesc:
      "The mesmerizing Aura Fusion Drops earrings is a true marvel of contemporary elegance and artistic finesse. Embrace a new dimension of sophistication with these oval-shaped masterpieces, carefully crafted to captivate every gaze. The earrings boast a seamless fusion of design, featuring a smaller oval nestled within a larger one, exuding a sense of enchanting harmony. As they gracefully dangle, they bestow an air of grace on the wearer, illuminating their aura with an alluring radiance.",
    prodSlug: "aura-fusion-drops",
    prodImages: {
      gold: ["2-gold-1.jpg", "2-gold-2.jpg", "2-gold-3.jpg"],
      silver: ["2.jpg", "2-silver-2.jpg", "2-silver-3.jpg"],
      copper: ["2-copper-1.jpg", "2-copper-2.jpg", "2-copper-3.jpg"],
    },
  },
  {
    id: "3",
    prodName: "Nonagon Enchanté",
    prodSubName: "",
    prodCat: "Rings",
    prodPrice: "49806",
    prodImage: "3.jpg",
    prodDesc:
      "Introducing our exquisite Nonagon Enchanté finger ring—a spellbinding masterpiece that redefines luxury and sophistication. Embrace the allure of a nine-sided polygon design, crafted to captivate hearts with its mesmerizing elegance. Each delicate side of the nonagon shape glimmers with brilliance, elevating your style with an aura of enchantment. As you slip it onto your finger, feel the magical charm that emanates from this timeless piece, ready to captivate the world around you. Whether it's a special occasion or a moment of self-celebration, this ring becomes your statement of individuality.",
    prodSlug: "nonagon-enchante",
    prodImages: {
      gold: ["3-gold-1.jpg", "3-gold-2.jpg", "3-gold-3.jpg"],
      silver: ["3.jpg", "3-silver-2.jpg", "3-silver-3.jpg"],
      copper: ["3-copper-1.jpg", "3-copper-2.jpg", "3-copper-3.jpg"],
    },
  },
  {
    id: "4",
    prodName: "Floral Trinity Royale Ring",
    prodSubName: "",
    prodCat: "Rings",
    prodPrice: "76408",
    prodImage: "4.jpg",
    prodDesc:
      "Our exquisite Floral Trinity Royale Ring is a masterpiece crafted with passion and precision. Embrace the beauty of nature's blossoms in a harmonious fusion of elegance and grace. Three resplendent flowers, each adorned with brilliant diamonds, dance gracefully upon your finger, symbolizing the eternal bond of past, present, and future. With every gleaming petal, this ring captures the celebration of love, light, and life.",
    prodSlug: "floral-trinity-royale-ring",
    prodImages: {
      gold: ["4-gold-1.jpg", "4-gold-2.jpg", "4-gold-3.jpg"],
      silver: ["4.jpg", "4-silver-2.jpg", "4-silver-3.jpg"],
      copper: ["4-copper-1.jpg", "4-copper-2.jpg", "4-copper-3.jpg"],
    },
  },
  {
    id: "5",
    prodName: "Blooming Pink Panache Earrings",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "151384",
    prodImage: "5.jpg",
    prodDesc:
      "Indulge in the timeless elegance of our Blooming Pink Panache Earrings, where elegance meets delicate charm. These exquisite earrings are a testament to the eternal beauty of nature's bloom, intricately designed with passion and adorned with sparkling diamonds, capturing the essence of each intricately crafted petal. Crafted to perfection, these earrings are an ideal companion for any occasion, adding a touch of grace to your ensemble.",
    prodSlug: "blooming-pink-panache-earrings",
    prodImages: {
      gold: ["5-gold-1.jpg", "5-gold-2.jpg", "5-gold-3.jpg"],
      silver: ["5.jpg", "5-silver-2.jpg", "5-silver-3.jpg"],
      copper: ["5-copper-1.jpg", "5-copper-2.jpg", "5-copper-3.jpg"],
    },
  },
  {
    id: "6",
    prodName: "Floral Pink Panache Ring",
    prodSubName: "",
    prodCat: "Rings",
    prodPrice: "65818",
    prodImage: "6.jpg",
    prodDesc:
      'Introducing the "Floral Pink Panache" ring – a captivating testament to the fusion of nature\'s grace and elegant sophistication. This exquisite piece is meticulously crafted, featuring a pink flower-shaped design with five delicate petals, each petal adorned with stunning diamonds. The pink hue of the petals embodies femininity and charm, while the intricate detailing showcases the artistry that goes into its creation. The "Floral Pink Panache" ring is more than just Jewellery; it\'s a statement of your distinctive style and the embodiment of the delicate charm that defines you.',
    prodSlug: "floral-pink-panache-ring",
    prodImages: {
      gold: ["6-gold-1.jpg", "6-gold-2.jpg", "6-gold-3.jpg"],
      silver: ["6.jpg", "6-silver-2.jpg", "6-silver-3.jpg"],
      copper: ["6-copper-1.jpg", "6-copper-2.jpg", "6-copper-3.jpg"],
    },
  },
  {
    id: "7",
    prodName: "Butterfly Cascade Charms",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "93966",
    prodImage: "7.jpg",
    prodDesc:
      "Butterfly Cascade Charms earrings are a charming symphony of elegance and grace that captures the spirit of fluttering butterflies. These exquisite earrings feature a cascade of diamonds, leading to a delicate butterfly adorned with shimmering gems. The gentle sway of the butterfly echoes a sense of freedom and transformation, while the diamonds' brilliance speaks of timeless elegance and sophistication. As you wear these captivating gems, let your spirit take flight, embodying the exquisite beauty that surrounds you. Whether you're attending a soirée or seeking a daily dose of elegance, this ring complements every occasion with its enchanting allure.",
    prodSlug: "butterfly-cascade-charms",
    prodImages: {
      gold: ["7-gold-1.jpg", "7-gold-2.jpg", "7-gold-3.jpg"],
      silver: ["7.jpg", "7-silver-2.jpg", "7-silver-3.jpg"],
      copper: ["7-copper-1.jpg", "7-copper-2.jpg", "7-copper-3.jpg"],
    },
  },
  {
    id: "8",
    prodName: "Pink Panache Trinity",
    prodSubName: "",
    prodCat: "Pendants",
    prodPrice: "64922",
    prodImage: "8.jpg",
    prodDesc:
      'The exquisite "Pink Panache Trinity" pendant is a masterpiece that encapsulates the essence of elegance and natural beauty. This enchanting pendant features three delicate pink flowers, each adorned with sparkling diamonds, forming a harmonious trio. The magic of "Pink Panache Trinity" lies in its meticulous craftsmanship. The pink flowers exude feminine grace, and the diamonds add a touch of radiance, creating a symphony of sophistication and allure. As you wear this enchanting piece, let the flowers\' delicate charm and the diamonds\' brilliance celebrate your unique beauty and refined taste. Indulge in this beauty as a tribute to the perfect blend where floral wonders meet the artistry of diamonds.',
    prodSlug: "pink-panache-trinity",
    prodImages: {
      gold: ["8-gold-1.jpg", "8-gold-2.jpg", "8-gold-3.jpg"],
      silver: ["8.jpg", "8-silver-2.jpg", "8-silver-3.jpg"],
      copper: ["8-copper-1.jpg", "8-copper-2.jpg", "8-copper-3.jpg"],
    },
  },
  {
    id: "9",
    prodName: "Winged Rosy Radiance",
    prodSubName: "",
    prodCat: "Rings",
    prodPrice: "47166",
    prodImage: "9.jpg",
    prodDesc:
      'Introducing the captivating "Winged Rosy Radiance" ring—a symphony of grace and brilliance that transcends elegance. This exquisite piece features beautiful wings adorned with a myriad of sparkling diamonds, surrounding a central stud that radiates captivating allure. The warm rosy hue of the gold complements the luminosity of the diamonds, creating a harmonious union that symbolizes both grace and sophistication. As you wear this captivating masterpiece, let your spirit soar, embodying the enchanting beauty that surrounds you—a celebration of your individuality and style.',
    prodSlug: "winged-rosy-radiance",
    prodImages: {
      gold: ["9-gold-1.jpg", "9-gold-2.jpg", "9-gold-3.jpg"],
      silver: ["9.jpg", "9-silver-2.jpg", "9-silver-3.jpg"],
      copper: ["9-copper-1.jpg", "9-copper-2.jpg", "9-copper-3.jpg"],
    },
  },
  {
    id: "10",
    prodName: "Magnifique Régal Sparklers",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "47504",
    prodImage: "10.jpg",
    prodDesc:
      "Magnifique Regal Sparklers earrings are a harmonious symphony of elegance and brilliance that transports you to a realm of exquisite beauty. These remarkable earrings feature a unique round shape adorned with multiple sides, culminating in a centerpiece that glistens with an array of dazzling diamonds. The intricate geometric design, a perfect blend of triangles and rectangles, creates a mesmerizing dance of light and shadow. The diamonds embedded within the central expanse sparkle like celestial stars. With every glance and every gesture, these earrings capture the essence of luxury, making a profound statement about your unique sense of style.",
    prodSlug: "magnifique-regal-sparklers",
    prodImages: {
      gold: ["10-gold-1.jpg", "10-gold-2.jpg", "10-gold-3.jpg"],
      silver: ["10.jpg", "10-silver-2.jpg", "10-silver-3.jpg"],
      copper: ["10-copper-1.jpg", "10-copper-2.jpg", "10-copper-3.jpg"],
    },
  },
  {
    id: "11",
    prodName: "The Dazzling Halo pendant",
    prodSubName: "",
    prodCat: "Pendants",
    prodPrice: "39324",
    prodImage: "11.jpg",
    prodDesc:
      "The Dazzling Halo pendant is a masterpiece that captures light, beauty, and grace in a harmonious embrace. This exquisite pendant showcases a luminous circle adorned with radiant diamonds, forming a mesmerizing halo of brilliance. The pendant's design creates a luminous aura, with each diamond reflecting and refracting light, evoking a sense of magic and enchantment. It is a testament to your refined taste and appreciation for exceptional craftsmanship. As you wear this exquisite piece, let its brilliance mirror the radiance within you, a sparkling reflection of your unique shine and sophistication",
    prodSlug: "the-dazzling-halo-pendant",
    prodImages: {
      gold: ["11-gold-1.jpg", "11-gold-2.jpg", "11-gold-3.jpg"],
      silver: ["11.jpg", "11-silver-2.jpg", "11-silver-3.jpg"],
      copper: ["11-copper-1.jpg", "11-copper-2.jpg", "11-copper-3.jpg"],
    },
  },
  {
    id: "12",
    prodName: "The Classic Halo pendant",
    prodSubName: "",
    prodCat: "Pendants",
    prodPrice: "28596",
    prodImage: "12.jpg",
    prodDesc:
      "The Classic Halo Pendant is a timeless embodiment of elegance and grace. This exquisite pendant features a delicate line and a circle adorned with a single diamond stud, creating a halo of brilliance that captures the essence of understated beauty. It encapsulates the allure of simplicity. Wear this pendant as a tribute to the elegance of minimalism. Its design reflects a harmonious balance between subtlety and sophistication, making it a versatile and refined accessory for any occasion. With every wear, let this pendant remind you that sometimes the most classic choices are the ones that make you shine the brightest.",
    prodSlug: "the-classic-halo-pendant",
    prodImages: {
      gold: ["12-gold-1.jpg", "12-gold-2.jpg", "12-gold-3.jpg"],
      silver: ["12.jpg", "12-silver-2.jpg", "12-silver-3.jpg"],
      copper: ["12-copper-1.jpg", "12-copper-2.jpg", "12-copper-3.jpg"],
    },
  },
  // {
  //     "id": "13",
  //     "prodName": "The Dazzling Halo earrings",
  //     "prodSubName": "",
  //     "prodCat": "Earrings",
  //     "prodPrice": "39324",
  //     "prodImage": "13-gold-1.jpg",
  //     "prodDesc": "The Dazzling Halo Earrings are an enchanting fusion of elegance and radiance that graces your ears with riveting beauty. These exquisite earrings feature a delicate line and a circle adorned with a luminous array of diamonds, forming a halo of mesmerizing brilliance. These earrings captivate with their intricate play of light. The circle, adorned with an array of diamonds, creates a celestial halo effect that adds depth and allure to the design. Their seamless blend of sophistication and luminosity makes them a versatile choice for enhancing your ensemble, from casual to formal. With every sway and twinkle, these earrings cast a spell of enchantment, celebrating your unique elegance in every moment.",
  //     "prodSlug": "the-dazzling-halo-earrings",
  //     "prodImages": {
  //         "gold": ["13-gold-1.jpg", "13-gold-2.jpg", "13-gold-3.jpg"],
  //         "silver": ["13.jpg", "13-silver-2.jpg", "13-silver-3.jpg"],
  //         "copper": ["13-copper-1.jpg", "13-copper-2.jpg", "13-copper-3.jpg"]
  //     }
  // },
  // {
  //     "id": "14",
  //     "prodName": "Sparkling Swirl Earrings",
  //     "prodSubName": "",
  //     "prodCat": "Earrings",
  //     "prodPrice": "84366",
  //     "prodImage": "14.jpg",
  //     "prodDesc": "Sparkling Swirl Earrings are an exquisite dance of elegance and brilliance that graces your ears with captivating allure. These enchanting earrings feature a graceful spiral adorned with shimmering diamonds, creating a symphony of movement and light. The cascading chains, adorned with diamonds, add depth and radiance to the design, making these earrings a true masterpiece of craftsmanship. Whether you're attending a grand event or simply want to elevate your everyday style, these earrings are a perfect choice to add a touch of sophistication and glamour to any ensemble.",
  //     "prodSlug": "sparkling-swirl-earrings",
  //     "prodImages": {
  //         "gold": ["14-gold-1.jpg", "14-gold-2.jpg", "14-gold-3.jpg"],
  //         "silver": ["14.jpg", "14-silver-2.jpg", "14-silver-3.jpg"],
  //         "copper": ["14-copper-1.jpg", "14-copper-2.jpg", "14-copper-3.jpg"]
  //     }
  // },
  {
    id: "15",
    prodName: "Sparkling Hearts Finesse Earrings",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "93620",
    prodImage: "15.jpg",
    prodDesc:
      "The Sparkling Hearts Finesse Earrings are a harmonious fusion of brilliance and delicate artistry that adorns your ears with timeless elegance. These exquisite earrings feature heart-shaped outlines filled with glistening diamonds, forming a mesmerizing spectacle of light. These earrings capture the essence of refined craftsmanship. The intricate arrangement of diamonds within the heart shapes reflects a meticulous attention to detail, creating a stunning interplay of radiance and grace. Wear these earrings as a symbol of your discerning taste. Adorn yourself with these captivating earrings and let their finesse illuminate your presence, making every moment you wear them a sparkling celebration of your refined style.",
    prodSlug: "sparkling-hearts-finesse",
    prodImages: {
      gold: ["15-gold-1.jpg", "15-gold-2.jpg", "15-gold-3.jpg"],
      silver: ["15.jpg", "15-silver-2.jpg", "15-silver-3.jpg"],
      copper: ["15-copper-1.jpg", "15-copper-2.jpg", "15-copper-3.jpg"],
    },
  },
  {
    id: "16",
    prodName: "Floral Passion Panache Ring",
    prodSubName: "",
    prodCat: "Rings",
    prodPrice: "41184",
    prodImage: "16.jpg",
    prodDesc:
      "The Floral Passion Panache Ring is a masterpiece that marries nature's elegance with heartfelt emotion. At its center, a brilliant diamond stud evokes the radiant pistil of a flower, surrounded by five resplendent red hearts that form petals with an ethereal allure. It is a fitting tribute to romance and style. The vibrant hearts symbolize the blooming of passionate love, while the diamond's luminous sparkle mirrors the eternal flame that will keep illuminating this journey forever. Adorn yourself with this ring, and let its harmonious blend of nature's beauty and emotional depth reflect your unique sense of style. This ring resonates with those who appreciate both the artistry of design and the power of sentiment, offering a wearable masterpiece that speaks volumes of your heart's desires.",
    prodSlug: "Floral-Passion-Panache-Ring",
    prodImages: {
      gold: ["16-gold-1.jpg", "16-gold-2.jpg", "16-gold-3.jpg"],
      silver: ["16.jpg", "16-silver-2.jpg", "16-silver-3.jpg"],
      copper: ["16-copper-1.jpg", "16-copper-2.jpg", "16-copper-3.jpg"],
    },
  },
  {
    id: "17",
    prodName: "Dazzling Drops Hourglass",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "104236",
    prodImage: "17.jpg",
    prodDesc:
      "Introducing the 'Dazzling Drops Hourglass' earrings, a mesmerizing embodiment of elegance and style. At the core of each triangle rests a scintillating diamond stud, radiating brilliance and capturing the eye with every movement. A delicate intersection connects another triangle, adorned with an additional diamond stud, creating an intriguing hourglass-inspired silhouette. The 'Dazzling Drops Hourglass' earrings are a harmonious blend of geometric charm and radiant allure. With an undeniable sense of refinement, these earrings are a statement piece that effortlessly transitions from daytime chic to evening elegance. Let these earrings be a testament to your impeccable taste and love for contemporary elegance.",
    prodSlug: "dazzling-drops-hourglass",
    prodImages: {
      gold: ["17-gold-1.jpg", "17-gold-2.jpg", "17-gold-3.jpg"],
      silver: ["17.jpg", "17-silver-2.jpg", "17-silver-3.jpg"],
      copper: ["17-copper-1.jpg", "17-copper-2.jpg", "17-copper-3.jpg"],
    },
  },
  {
    id: "18",
    prodName: "Sparkling Cinque Symphony Earrings",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "91798",
    prodImage: "18.jpg",
    prodDesc:
      "Presenting the 'Sparkling Cinque Symphony' earrings—an exquisite embodiment of artistry and allure. These distinctive earrings feature a captivating design where two distinct worlds seamlessly intertwine. A lustrous gold triangle elegantly meets a counterpart adorned with glistening diamonds, creating a mesmerizing fusion of precious elements. The diamonds' radiant sparkle beautifully contrasts with the smooth gold, resulting in a visual masterpiece that captivates from every angle. As light dances off the diamonds and gold, these earrings transform into a symphony of brilliance. These earrings are a testament to modern elegance and creative innovation. Let them be a reflection of your discerning taste and appreciation for the extraordinary in design.",
    prodSlug: "sparkling-cinque-symphony-earrings",
    prodImages: {
      gold: ["18-gold-1.jpg", "18-gold-2.jpg", "18-gold-3.jpg"],
      silver: ["18.jpg", "18-silver-2.jpg", "18-silver-3.jpg"],
      copper: ["18-copper-1.jpg", "18-copper-2.jpg", "18-copper-3.jpg"],
    },
  },
  {
    id: "19",
    prodName: "The Floral Serenity Earrings",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "55508",
    prodImage: "19.jpg",
    prodDesc:
      "The Floral Serenity Earrings are a harmonious blend of romance and sophistication. Crafted in exquisite rose gold, these earrings feature a dazzling diamond stud at the center, reminiscent of a delicate pistil, surrounded by five pristine white heart-shaped petals. The tender pink hue symbolizes affection and charm, while the heart-shaped petals evoke sentiments of love. The brilliant diamond at the core adds a touch of radiance that mirrors the eternal flame that will keep illuminating this journey forever. These earrings effortlessly harmonize romance and style, making them a cherished accessory for special occasions or moments of personal indulgence.",
    prodSlug: "the-floral-serenity-earrings",
    prodImages: {
      gold: ["19-gold-1.jpg", "19-gold-2.jpg", "19-gold-3.jpg"],
      silver: ["19.jpg", "19-silver-2.jpg", "19-silver-2.jpg"],
      copper: ["19-copper-1.jpg", "19-copper-2.jpg", "19-copper-3.jpg"],
    },
  },
  {
    id: "20",
    prodName: "Eternal Hearts Fusion Bracelet",
    prodSubName: "",
    prodCat: "Bracelets",
    prodPrice: "98760",
    prodImage: "20.jpg",
    prodDesc:
      "The Eternal Hearts Fusion bracelet is an exquisite embodiment of enduring love and unity. This bracelet holds a poignant symbolism where two hearts, distinct yet inseparable, come together in an eternal embrace. At one end, a larger heart, resplendent in white, signifies the open arms of love. At the other end, a smaller heart nestled within a heart is adorned with a radiant diamond stud, symbolizing the profound connection that sparkles with brilliance. This bracelet is a visual ode to timeless love and shared journeys. As the hearts align, they evoke an emotional resonance, capturing the essence of a bond that transcends time. Let this bracelet adorn your wrist as a symbol of cherished togetherness and the enduring beauty of a love that forever entwines.",
    prodSlug: "eternal-hearts-fusion-bracelet",
    prodImages: {
      gold: ["20-gold-1.jpg", "20-gold-2.jpg", "20-gold-3.jpg"],
      silver: ["20.jpg", "20-silver-2.jpg", "20-silver-3.jpg"],
      copper: ["20-copper-1.jpg", "20-copper-2.jpg", "20-copper-3.jpg"],
    },
  },
  {
    id: "21",
    prodName: "Charming Doll Delight",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "18416",
    prodImage: "21.jpg",
    prodDesc:
      "Presenting the 'Charming Doll Delight' earrings—an enchanting fusion of elegance and playfulness. These earrings capture the essence of a doll's captivating charm, bringing a touch of whimsy to your Jewellery collection. The earrings embody a delicate balance between sophistication and playfulness, making them a versatile addition to both casual and formal ensembles. Adorn yourself with these earrings, and let them remind you to embrace the magic of enchanting moments. Whether you're stepping into a whimsical adventure or a formal affair, these earrings are a testament to the art of charming sophistication.",
    prodSlug: "charming-doll-delight",
    prodImages: {
      gold: ["21-gold-1.jpg", "21-gold-2.jpg", "21-gold-3.jpg"],
      silver: ["21.jpg", "21-silver-2.jpg", "21-silver-3.jpg"],
      copper: ["21-copper-1.jpg", "21-copper-2.jpg", "21-copper-3.jpg"],
    },
  },

  {
    id: "22",
    prodName: "Hamsa Heart Harmony Pendant",
    prodSubName: "",
    prodCat: "Pendants",
    prodPrice: "16036",
    prodImage: "22.jpg",
    prodDesc:
      "The Hamsa Heart Harmony Pendant is a radiant embodiment of spiritual protection and heartfelt love. This exquisite pendant combines the timeless symbolism of the hamsa hand with the eternal grace of a heart and the brilliance of a diamond. The hamsa hand, known for its safeguarding aura, is positioned horizontally, cradling a delicate heart at its center. Within the heart, a shimmering diamond sparkles, representing the luminous bond of love. This harmonious fusion of elements creates a pendant that resonates with both spiritual significance and emotional depth. This pendant encapsulates the delicate balance between the sacred and the sentimental, allowing you to carry a cherished connection to both spirituality and love.",
    prodSlug: "hamsa-heart-harmony-pendant",
    prodImages: {
      gold: ["22-gold-1.jpg", "22-gold-2.jpg", "22-gold-3.jpg"],
      silver: ["22.jpg", "22-silver-2.jpg", "22-silver-3.jpg"],
      copper: ["22-copper-1.jpg", "22-copper-2.jpg", "22-copper-3.jpg"],
    },
  },
  // {
  //     "id": "23",
  //     "prodName": "Ladybug Luck Charm Earrings",
  //     "prodSubName": "",
  //     "prodCat": "Earrings",
  //     "prodPrice": "57380",
  //     "prodImage": "23.jpg",
  //     "prodDesc": "The Ladybug Luck Charm Earrings are a captivating fusion of elegance and fortune. These exquisite earrings feature the beloved ladybug motif, cherished for its symbolic representation of luck and positive energies. At the heart of each earring, three delicate diamonds shimmer like twinkling stars, adding a touch of radiance to the ladybug's charm. These earrings embody the essence of serendipity, offering you a wearable talisman of luck and protection. These earrings are not only a stylish accessory but also a meaningful adornment that celebrates the beauty of the ladybug's symbolism. Wear them with grace, and let the enchanting ladybug bestow its aura of luck upon your journey.",
  //     "prodSlug": "ladybug-luck-charm-earrings",
  //     "prodImages": {
  //         "gold": ["23-gold-1.jpg", "23-gold-2.jpg", "23-gold-3.jpg"],
  //         "silver": ["23.jpg", "23-silver-2.jpg", "23-silver-3.jpg"],
  //         "copper": ["23-copper-1.jpg", "23-copper-2.jpg", "23-copper-3.jpg"]
  //     }
  // },
  {
    id: "23",
    prodName: "Binate Fusion Drops Earrings",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "95740",
    prodImage: "25.jpg",
    prodDesc:
      "Binate Fusion Drops earrings are a mesmerizing blend of elegance and vibrancy. These enchanting earrings feature a unique liquid drop design, with a larger drop adorned with dazzling white diamonds along its edges and a smaller drop within, resplendent with radiant green diamonds. The captivating cascade of gems is suspended from an elegant loop at the top, adding to its grace. These earrings are more than just accessories; they are wearable art that celebrates the fusion of elegance and nature's splendor. Adorn yourself with these exquisite drops and experience the enchanting allure of gems that dance with your every step, reflecting your unique style and vibrant spirit.",
    prodSlug: "binate-fusion-drops-earrings",
    prodImages: {
      gold: ["25-gold-1.jpg", "25-gold-2.jpg", "25-gold-3.jpg"],
      silver: ["25.jpg", "25-silver-2.jpg", "25-silver-3.jpg"],
      copper: ["25-copper-1.jpg", "25-copper-2.jpg", "25-copper-3.jpg"],
    },
  },
  {
    id: "24",
    prodName: "Sparkling Hearts Cascade Earrings",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "68040",
    prodImage: "26.jpg",
    prodDesc:
      "Sparkling Hearts Cascade Earrings are a graceful dance of elegance and emotion. These exquisite earrings feature a delicate ring hoop that holds two hearts in a harmonious embrace. The upper heart, adorned with a radiant diamond stud, symbolizes the spark that ignites love's journey. Below, a larger heart dazzles with an intricate tapestry of diamonds, reflecting the brilliance of your affection. With every movement, the hearts sway gently like a cascading waterfall, captivating onlookers with their enchanting allure. Adorn yourself with these earrings, and let them whisper stories of affection and elegance as they gracefully follow your every step",
    prodSlug: "sparkling-hearts-cascade-earrings",
    prodImages: {
      gold: ["26-gold-1.jpg", "26-gold-2.jpg", "26-gold-3.jpg"],
      silver: ["26.jpg", "26-silver-2.jpg", "26-silver-3.jpg"],
      copper: ["26-copper-1.jpg", "26-copper-2.jpg", "26-copper-3.jpg"],
    },
  },
  {
    id: "25",
    prodName: "Trinity Hearts Cascade Earrings",
    prodSubName: "",
    prodCat: "Earrings",
    prodPrice: "64844",
    prodImage: "27.jpg",
    prodDesc:
      "Trinity Hearts Cascade earrings are a symphony of elegance, emotion, and timeless beauty. These exquisite earrings feature a delicate ring hoop that gracefully holds three hearts in a harmonious dance. Each heart carries its own unique symbolism, creating a tapestry of affection. The upper heart, adorned with a radiant diamond stud, represents the spark that ignites love's journey. Below, a larger heart shimmers with a lavish display of diamonds, reflecting the brilliance of your affection. The lower heart, the grandest of them all, is a pure, luminous white, embodying the purity of enduring love. With every graceful sway, the hearts cascade like poetry in motion, captivating onlookers with their enchanting allure.",
    prodSlug: "trinity-hearts-cascade-earrings",
    prodImages: {
      gold: ["27-gold-1.jpg", "27-gold-2.jpg", "27-gold-3.jpg"],
      silver: ["27.jpg", "27-silver-2.jpg", "27-silver-3.jpg"],
      copper: ["27-copper-1.jpg", "27-copper-2.jpg", "27-copper-3.jpg"],
    },
  },
];

const videoData = {
  "sparkling-hearts-finesse-earrings": {
    videos: ["gold.mp4", "white.mp4", "rose.mp4"],
  },
  "blooming-pink-panache-earrings": {
    videos: ["gold.mp4", "white.mp4", "rose.mp4"],
  },
  "nonagon-enchante": { videos: ["gold.mp4", "white.mp4", "rose.mp4"] },
  "hamsa-heart-harmony-pendant": {
    videos: ["gold.mp4", "white.mp4", "rose.mp4"],
  },
  "sparkling-hearts-cascade-earrings": {
    videos: ["gold.mp4", "white.mp4", "rose.mp4"],
  },
  "floral-trinity-royale-ring": {
    videos: ["gold.mp4", "white.mp4", "rose.mp4"],
  },
  "pink-panache-trinity": { videos: ["gold.mp4", "white.mp4", "rose.mp4"] },
  "butterfly-cascade-charms": { videos: ["gold.mp4"] },
  "aura-fusion-drops": { videos: ["gold.mp4", "white.mp4", "rose.mp4"] },
  "winged-rosy-radiance": { videos: ["gold.mp4", "white.mp4", "rose.mp4"] },
  "classic-halo-pendant": { videos: ["gold.mp4", "white.mp4", "rose.mp4"] },
  "charming-doll-delight": { videos: ["gold.mp4", "white.mp4", "rose.mp4"] },
  "dazzling-halo-pendant": { videos: ["gold.mp4", "rose.mp4"] },
  "dazzling-drops-hourglass": { videos: ["gold.mp4", "white.mp4", "rose.mp4"] },
  "binate-fusion-drops-earrings": {
    videos: ["white.mp4", "rose_1.mp4", "rose.mp4"],
  },
  "the-spiral-serenity": { videos: ["gold.mp4", "white.mp4", "rose.mp4"] },
  "trinity-hearts-cascade-earrings": {
    videos: ["gold.mp4", "white.mp4", "rose.mp4"],
  },
};

// Iterate over the product data array.
for (const product of productData) {
  // Search for the matching slug in the video data object.
  const matchingVideoData = videoData[product.prodSlug];

  // If the slug is found, add the video array to the product object.
  if (matchingVideoData) {
    product.videos = matchingVideoData.videos;
  }
}

// Stringify the updated product data array back to JSON.
const updatedProductDataJson = JSON.stringify(productData);

// Write the JSON string to a new file.
fs.writeFileSync("./updated_product_data.json", updatedProductDataJson);
