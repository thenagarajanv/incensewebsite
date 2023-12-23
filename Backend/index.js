const Cart = require("./Models/Cart");
const Incense = require("./Models/Incense");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://thenagarajanv:Nagarajan24@cluster0.ngfrvsi.mongodb.net/IncenseSticks"
  )
  .then(console.log("connected db"));

app.get("/", (req, res) => {
  Incense.find({})
    .then((x) => res.json(x))
    .catch((err) => res.json(err));
});

app.get("/Cart", (req, res) => {
    Cart.find({})
      .then((x) => res.json(x))
      .catch((err) => res.json(err));
  });

  app.post('/deleteCart', async (req, res) => {
    const { cartId } = req.body;
    await Cart.deleteOne({id:cartId});
  });

app.listen(3001, () => {
  console.log("server is running");
});

app.post("/Cart", async (req, res) => {
  const { id } = req.body;
  await Cart.create({ id });
});

// app.post("/productId", async (req, res) => {
//   const { id } = req.body;
//   await Incense.find({ id });
// });

// Cart.deleteMany().then(function(){
//     console.log("Data Inserted");
// });

// Incense.insertMany([
//             {
//             "id": 1,
//             "name": "OUDH INCENSE STICKS",
//             "price": 199,
//             "description": "Oudh Incense Sticks exude a dominant oriental-woody fragrance accompanied by soft floral notes of vanilla and musk. This rich aroma is born of a unique ecological process in the Aquilaria trees native to Southeast Asia. These trees secrete a protective resinous substance against a rare parasitic fungus, which after extraction, comes to be known as Oudh. Phool Oudh Natural Incense Sticks are an exquisite amalgamation of Oudh extractions, temple flowers, and natural essential oils. With a rich, earthy scent that has the power to soothe and de-stress. Handcrafted by our women flowercyclers with love and care.Phool Natural Incense Sticks pack consists of 40 units. Each stick is 25.4 cm in length with a long burning time of 40-45 minutes. Ideal for your daily meditation and spiritual rituals. Did you know, the Oudh fragrance was a favorite of even the European Royalty, especially King Louis The XIV, who loved it so dearly that he preferred to wash his clothes in it! Bring home the magic of this aristocratic scent with Phool Oudh Natural Incense Sticks.",
//             "mainImage": "https://phool.co/cdn/shop/products/IMG_4690.jpg?v=1603096120" ,
//             "fsImage": "https://phool.co/cdn/shop/products/IMG_4690.jpg?v=1603096120",
//             "ssImage": "https://phool.co/cdn/shop/products/FRAGRANCECARD-01.jpg?v=1610697119" ,
//             "inCart": false,
//             "count": 1
//         },
// {
//     "id": 2,
//     "name": "LAVEANDER INCENSE STICKS",
//     "price": 169,
//     "description": "Lavender Incense Sticks carry a distinctly sweet and mossy scent, accompanied with delicate hints of camphor and a touch of spice. This popular fragrance is harvested from the lavender flower plants that originated in Mediterranean Europe, through a long & tedious process of steam distillation. ",
//     "mainImage": "https://phool.co/cdn/shop/products/IMG_5517.jpg?v=1610699394" ,
//     "fsImage": "https://phool.co/cdn/shop/products/IMG_4690.jpg?v=1603096120",
//     "ssImage": "https://phool.co/cdn/shop/products/FRAGRANCECARD-01.jpg?v=1610697119" ,
//     "inCart": false,
//             "count": 1
// },
// {
//     "id": 3,
//     "name": "ORANGE INCENSE STICKS",
//     "price": 179,
//     "description": "Orange Incense Sticks possess a delightful and uplifting fragrance that is reminiscent of fresh, juicy oranges. The vibrant and citrus fragrance is a byproduct of the essential oil derived from the orange fruit peel, native to Southeast Asia. It is the ideal fragrance for anyone who loves the fruit in any form. Phool Orange Natural Incense Sticks are a fresh amalgamation of sacred temple flowers, pure essential oil and organic orange peels.",
//     "mainImage": "https://phool.co/cdn/shop/products/IMG_5354.jpg?v=1660635311" ,
//     "fsImage": "https://phool.co/cdn/shop/products/IMG_4690.jpg?v=1603096120",
//     "ssImage": "https://phool.co/cdn/shop/products/FRAGRANCECARD-01.jpg?v=1610697119" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 4,
//     "name": "TEA-TREE INCENSE STICKS ",
//     "price": 149.00,
//     "description": "Tea Tree Incense Sticks have a distinctive and powerful aroma with a hint of camphor. This magical aroma is created by harvesting the leaves of the Tea Tree, scientifically known as Melaleuca alternifolia, and native to Australia. It is one of the most popular naturally occurring substances globally, due to its antimicrobial and antifungal qualities.",
//     "mainImage": "https://phool.co/cdn/shop/products/IMG_4621.jpg?v=1660635216" ,
//     "fsImage": "https://phool.co/cdn/shop/products/IMG_4690.jpg?v=1603096120",
//     "ssImage": "https://phool.co/cdn/shop/products/FRAGRANCECARD-01.jpg?v=1610697119" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 5,
//     "name": "EUCALYPTUS INCENSE STICKS ",
//     "price": 149.00,
//     "description": "Eucalyptus Incense Sticks carry a distinctive and robust aroma that is often identified as cool and invigorating. The core contributor to this fragrance is the Eucalyptus essential oil, extracted from the leaves of the Eucalyptus tree, primarily the species known as Eucalyptus globulus, endemic to Australia. The freshness of this aroma is a positive and powerful mood uplifter.",
//     "mainImage": "https://phool.co/cdn/shop/products/IMG_5201.jpg?v=1660635283" ,
//     "fsImage": "https://phool.co/cdn/shop/products/IMG_4690.jpg?v=1603096120",
//     "ssImage": "https://phool.co/cdn/shop/products/FRAGRANCECARD-01.jpg?v=1610697119" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 6,
//     "name": "SANDALWOOD INCENSE STICKS",
//     "price": 149.00,
//     "description": "Sandalwood Incense Sticks emanate an exquisite creamy and woody aroma that can make any space an olfactory delight. The origin of this enchanting fragrance lies in the heart of the Sandalwood trees, popular to the Indian subcontinent. Sandalwood oil is meticulously extracted from the depths of the trees and blended in fragrances.",
//     "mainImage": "https://phool.co/cdn/shop/files/006A2080copy2.webp?v=1685951352" ,
//     "fsImage": "https://phool.co/cdn/shop/products/IMG_4690.jpg?v=1603096120",
//     "ssImage": "https://phool.co/cdn/shop/products/FRAGRANCECARD-01.jpg?v=1610697119" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 7,
//     "name": "BAMBOOLESS INCENSE STICKS - TULSI",
//     "price": 49.00,
//     "description": "Phool presents the world’s first certified natural bambooless incense collection. Revisiting age-old incense-making techniques, these incenses are handcrafted from temple flowers and enriched with the purity of 100% natural essential oils. Indian Rose incense has a rich & gentle aroma that caresses the body & soul and is timeless. It is ideal for a slow, spiritual evening with your loved ones. ",
//     "mainImage": "https://phool.co/cdn/shop/files/Indianros_4.webp?v=1685016180" ,
//     "fsImage": "https://phool.co/cdn/shop/products/IMG_4690.jpg?v=1603096120",
//     "ssImage": "https://phool.co/cdn/shop/products/FRAGRANCECARD-01.jpg?v=1610697119" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 8,
//     "name": "BAMBOOLESS INCENSE STICKS - OUDH",
//     "price":59,
//     "description": "Phool presents the world’s first certified natural bambooless incense collection. Revisiting age-old incense-making techniques, these incenses are handcrafted from temple flowers and enriched with the purity of 100% natural essential oils. Cedar Wood incense has a grounding, earthy fragrance that is reminiscent of evergreen trees. Its calming nature makes it ideal for any time of the day.",
//     "mainImage": "https://phool.co/cdn/shop/files/CedarWood_1.webp?v=1685015955",
//     "fsImage": "https://phool.co/cdn/shop/products/IMG_4690.jpg?v=1603096120",
//     "ssImage": "https://phool.co/cdn/shop/products/FRAGRANCECARD-01.jpg?v=1610697119" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 9,
//     "name": "BAMBOOLESS INCENSE STICKS - LEMONGRASS",
//     "price": 69,
//     "description": "Phool presents the world’s first certified natural bambooless incense collection. Revisiting age-old incense-making techniques, these incenses are handcrafted from temple flowers and enriched with the purity of 100% natural essential oils. Lemongrass incense has a crisp yet soothing fragrance that makes one revitalized & full of energy. It makes for an amazing air purifier, room freshener and natural insect repellent.",
//     "mainImage": "https://phool.co/cdn/shop/files/lemongrass_2.webp?v=1685016064" ,
//     "fsImage": "https://phool.co/cdn/shop/products/IMG_4690.jpg?v=1603096120",
//     "ssImage": "https://phool.co/cdn/shop/products/FRAGRANCECARD-01.jpg?v=1610697119" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 10,
//     "name": "BAMBOOLESS INCENSE STICKS - LEMONGRASS",
//     "price": 69,
//     "description": "Lemongrass essential oil is ideal for: Aromatherapy It creates a calming environment, relieves exhaustion and rejuvenates the body & mind. Add a few drops of the essential oil in a diffuser to disperse the fragrance.Skin & Hair It is beneficial for oily skin & prevents acne. On the scalp, it strengthens the hair roots, prevents dandruff and reduces hair fall. Mix a few drops of the essential oil with your carrier oil and blend the two. Massage your skin & scalp to relieve tension & soothe sore muscles. Keep away from your eyes.",
//     "mainImage": "https://phool.co/cdn/shop/files/Lemongrass_01.webp?v=1689244249",
//     "fsImage": "https://phool.co/cdn/shop/files/Lemongrass_02.webp?v=1689244249",
//     "ssImage": "https://phool.co/cdn/shop/files/Lemongrass_03.webp?v=1689244249" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 11,
//     "name": "LAVENDER ESSENTIAL OIL (10ML)",
//     "price": 69,
//     "description": "Lavender essential oil is ideal for: Aromatherapy & Sleep Its relaxing fragrance helps deal with sleep issues, daily tension and stress. Add a few drops of the essential oil in a diffuser to disperse the fragrance & create a calming environment.Baths Its invigorating properties help the body recover & deal with pain. Add a few drops of the essential oil to your bathtub or bucket and gently mix with water to prepare the most relaxing bath.",
//     "mainImage": "https://phool.co/cdn/shop/files/Lavender_01copy.webp?v=1689230117" ,
//     "fsImage": "https://phool.co/cdn/shop/files/Lavender_02.webp?v=1689230116",
//     "ssImage": "https://phool.co/cdn/shop/files/Lavender_03.webp?v=1689230117" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 12,
//     "name": "TEA TREE ESSENTIAL OIL (10ML)",
//     "price": 69,
//     "description": "Tea tree essential oil is ideal for: Skin Famous for its healing properties, it can make pimples, acne and pigmentation disappear like magic. Mix a few drops of the essential oil with your carrier oil, blend the two and massage onto your face. Keep away from your eyes. Baths Apart from refreshing the air, the oil soothes inflammation and relieves pain. Add a few drops of the essential oil to your bathtub or bucket and gently mix with water to prepare the most relaxing bath.",
//     "mainImage": "https://phool.co/cdn/shop/files/TeaTree_01.webp?v=1689244124" ,
//     "fsImage": "https://phool.co/cdn/shop/files/TeaTree_03.webp?v=1689244124",
//     "ssImage": "https://phool.co/cdn/shop/files/TeaTree_02.webp?v=1689244124" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 13,
//     "name": "HONEYCOMB GOLD VOTIVES( SET OF 2)",
//     "price": 199,
//     "description": "Embodying the concepts of Hamsa & Evil Eye, Phool Marble Hamsa Gift Box is designed to bring well-wishes & good fortune. The box design illustrates the lunar cycle and other auspicious elements in Indian culture.",
//     "mainImage": "https://phool.co/cdn/shop/products/2_1.webp?v=1669968160" ,
//     "fsImage": "https://phool.co/cdn/shop/products/3_1.webp?v=1669962870",
//     "ssImage": "https://phool.co/cdn/shop/products/4_1.webp?v=1669962870" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 14,
//     "name": "MARBLE HAMSA GIFT BOX WITH CONES",
//     "price": 499,
//     "description": "Embodying the concepts of Hamsa & Evil Eye, Phool Marble Hamsa Gift Box is designed to bring well-wishes & good fortune. The box design illustrates the lunar cycle and other auspicious elements in Indian culture.",
//     "mainImage": "https://phool.co/cdn/shop/files/product-07.jpg?v=1697094503" ,
//     "fsImage": "https://phool.co/cdn/shop/files/HAMSA.webp?v=1698576469",
//     "ssImage": "https://phool.co/cdn/shop/files/006A5192copy.webp?v=1697094503" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 15,
//     "name": "INCENSE CONES NAGCHAMPA & PATCHOULI",
//     "price": 49,
//     "description": "With the transcending flow of Nagchampa in the air enhancing your focus, and the captivating aroma of Patchouli gently gathering you, this perfect pack for deep meditation reaches for the universe in you.",
//     "mainImage": "https://phool.co/cdn/shop/products/IMG_5143.jpg?v=1660633758" ,
//     "fsImage": "https://phool.co/cdn/shop/products/IMG_5145.jpg?v=1606132441",
//     "ssImage": "https://phool.co/cdn/shop/products/IMG_5145.jpg?v=1606132441" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 16,
//     "name": "PHOOL SANDALWOOD HAVAN CUPS",
//     "price": 249,
//     "description": "Uplift your home with the enriching fragrance of Phool Sandalwood Havan cups.One of the earliest used fragrances, sandalwood has long been celebrated for its rich woody fragrance notes and is known world over for its deeply calming and healing properties. Unlike the cheap sandalwood havan cups flooding the market mixed with synthetic oil and sawdust,Phool Sandalwood Havan cups are certified by Fairtrade Fair for Life standard and approved by Ecocert Greenlife Home Fragrance Standard.You can be rest assured of the purity of it’s fragrance.",
//     "mainImage": "https://phool.co/cdn/shop/files/006A2148copy2.jpg?v=1685794571" ,
//     "fsImage": "https://phool.co/cdn/shop/files/006A2164copy2.jpg?v=1685794571",
//     "ssImage": "https://phool.co/cdn/shop/files/4D2A5615copy2.jpg?v=1685794470" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 17,
//     "name": "PHOOL JUMBO WINTER GIFTBOX",
//     "price": 1499,
//     "description": "Winter weaves a quiet magic, painting the world in cold dew and soft white and bringing promises of hopeful dreams and new beginnings. It is a time to sit back, relax and introspect on the year gone by. The Phool Jumbo Winter Gift Box has all the winter essentials you need to do just that. ",
//     "mainImage": "https://phool.co/cdn/shop/files/006A0391copy.webp?v=1701176100" ,
//     "fsImage": "https://phool.co/cdn/shop/files/006A0505copy.webp?v=1701176100",
//     "ssImage": "https://phool.co/cdn/shop/files/006A0526copy_01copy.webp?v=1701866373" ,
//     "inCart": false,
//     "count": 1
// },
// {
//     "id": 18,
//     "name": "PHOOL NATURAL INCENSE CONES - VETIVER",
//     "price": 159,
//     "description": "Vetiver Incense Cones are deeply aromatic and have an earthy lingering scent that promotes balance and emotional well-being. The fragrance is harvested from the roots of the vetiver grass, known as Vetiveria zizanioides, native to the Indian subcontinent. The extracted roots of the grass create this beautiful fragrance when mixed with natural resins and wood powders. ",
//     "mainImage": "https://phool.co/cdn/shop/products/IMG_5487.jpg?v=1660634616" ,
//     "fsImage": "https://phool.co/cdn/shop/products/IMG_5484.jpg?v=1660634616",
//     "ssImage": "https://phool.co/cdn/shop/products/IMG_5486.jpg?v=1610693354" ,
//     "inCart": false,
//     "count": 1
// }]);
