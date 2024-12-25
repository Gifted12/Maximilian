const myGallery = [
  { id: 1, img: "files/1.jpg" },
  { id: 2, img: "files/2.jpg" },
  { id: 3, img: "files/3.jpg" },
  { id: 4, img: "files/4.jpg" },
  { id: 5, img: "files/5.jpg" },
  { id: 6, img: "files/6.jpg" },
  { id: 7, img: "files/7.jpg" },
  { id: 8, img: "files/8.jpg" },
  { id: 9, img: "files/9.jpg" },
  { id: 10, img: "files/10.jpg" },
  { id: 11, img: "files/11.jpg" },
  { id: 12, img: "files/12.jpg" },
  { id: 13, img: "files/13.jpg" },
  { id: 14, img: "files/14.jpg" },
];


const imageData = [
  {
    id: 11,
    title: "Copa Airlines",
    imageUrl: "maxip/Copa.jpg",
    description:
      "We’ve teamed up with Copa Airlines to highlight their exciting Panama Stopover Program! Now, you can explore the vibrant beauty of Panama on your way to your final destination—at no additional cost. It’s the perfect chance to turn a layover into an unforgettable adventure!\
                  As part of our partnership, we created stunning photos and videos for Copa Airlines, showcasing our flight experience, the luxurious Copa Club airport lounge, and the vibrant food, hotels, and must-see attractions in Panama City.",
    relatedImages: [
      "maxip/Copa 1.jpg",
      "maxip/Copa 2.jpg",
      "maxip/Copa 3.jpg",
    ],
  },
  {
    id: 22,
    title: "Rancho Santana",
    imageUrl: "maxip/Rancho.jpg",
    description:
      "Rancho Santana, a world-class boutique resort on Nicaragua’s stunning southwest coast, has earned a spot among Travel & Leisure’s top hotels in the world. I had the incredible opportunity to visit and create content showcasing the resort’s endless adventurous activities and unique charm.",
    relatedImages: [
      "maxip/Rancho.jpg",
      "maxip/Rancho 1.jpg",
      "maxip/Ranch 2.jpg",
      "maxip/Rancho 3.jpg",
      "maxip/Rancho 4.jpg",
    ],
  },
  {
    id: 33,
    title: "Michelob ULTRA",
    imageUrl: "maxip/Ultra.jpg",
    description:
      "I partnered with Michelob ULTRA Pure Gold on their large scale Board Your Gear Campaign. I created high quality photo and video content to promote on Instagram, to showcase how our favorite outdoor gear helped us get outside - with a chilled beer, of course!",
    relatedImages: [
      "maxip/Ultra 1.jpg",
      "maxip/Ultra 2.jpg",
      "maxip/Ultra 3.jpg",
      "maxip/Ultra 4.jpg",
    ],
  },
  {
    id: 44,
    title: "Bite Toothpaste",
    imageUrl: "maxip/Bite.jpg",
    description:
      "I had the exciting opportunity to partner with Bite Toothpaste Bits, a brand revolutionizing oral care with their innovative plastic-free toothpaste and mouthwash bits. These small but mighty bits are not only convenient and travel-friendly but also a step toward reducing single-use plastic waste. It’s a game-changer for anyone looking to keep their smile fresh while making a positive impact on the planet!",
    relatedImages: [
      "maxip/Bite 1.jpg",
      "maxip/Bite 2.jpg",
      "maxip/Bite 3.jpg",
      "maxip/Bite 4.jpg",
      
    ],
  },
  {
    id: 55,
    title: " Vessi",
    imageUrl: "maxip/Vessi 1.jpg",
    description:
      "In the fall of 2021, I teamed up with Vessi, a Vancouver-based brand known for their innovative, multi-purpose sneakers, to create content for the launch of their Everyday Move collection. These sneakers aren’t just stylish—they’re waterproof and perfect for any adventure! I produced high-quality visuals for Vessi’s social channels and shared Instagram promotions to showcase how these versatile sneakers keep up with an active lifestyle, rain or shine. \
      “We had an amazing experience working with Joy as a content creator! She was the perfect fit for our current strategies and goes above and beyond in her deliverables. We’re excited to work with her again and hopefully create a long term relationship” \
    - Madison Low, Partnerships Coordinator, Vessi",
    relatedImages: [
      "maxip/Vessi 2.jpg",
      "maxip/Vessi 3.jpg",
    ],
  },
  {
    id: 66,
    title: "1MORE",
    imageUrl: "maxip/Ear.jpg",
    description:
      "I collaborated with 1MORE to celebrate the launch of their cutting-edge EVO Earbuds. Combining sleek design with premium sound quality, these earbuds are a game-changer for music lovers and audiophiles alike. Stay tuned as I share how they elevate the listening experience!",
    relatedImages: [
      "maxip/Ear 1.jpg",
      "maxip/Ear 2.jpg",
      "maxip/Ear 3.jpg",
      "maxip/Ear 4.jpg",
    ],
  },
  {
    id: 77,
    title: "PAKT",
    imageUrl: "maxip/Bag.jpg",
    description:
      "Since 2019, I’ve had the privilege of partnering with PAKT, an eco-conscious travel gear brand, on multiple Instagram and product launch campaigns. Over the years, I’ve captured stunning photos of their gear in breathtaking locations like Belize, the Pacific Northwest, and the Adirondack Mountains. From high-quality content for their social channels to Instagram promotions for Earth Day, highlighting their environmental initiatives, and featuring the launches of the PAKT Backpack and Anywhere Collection, this collaboration has been all about celebrating sustainability and adventure in style.\
      “Jackie is great to work with! She is always thorough, professional, and comes up with great content/copy. She’s always makes sure the brand is happy with the process and the outcome, which really makes her stand out, because many other influencers aren’t so careful! I would recommend her to anyone looking for a content creator” \
      - Emma Abbott, Marketing Lead, Pakt",
    relatedImages: [
      "maxip/Bag 1.jpg",
      "maxip/Bag 2.jpg",
      "maxip/Bag 3.jpg",
    ],
  },
  {
    id: 88,
    title: "Gran Reserva",
    imageUrl: "maxip/Gran.jpg",
    description: "In the fall of 2021, Gran Reserva invited me to showcase their sustainably-produced wine and spotlight their commitment to reducing water usage and protecting biodiversity. To align with their brand vision, I created content inspired by their mood board, delivering marketing visuals that were perfectly on point. To further promote their wine, I also hosted an engaging giveaway, sharing their eco-conscious story with my audience while celebrating their exceptional vintages.",
    relatedImages: [
      "maxip/Gran 1.jpg",
      "maxip/Gran 2.jpg",
      "maxip/Gran 4.jpg",
    ],
  },


];
const sharedExperience = [
  {
    id: 1,
    img: "exp/mountain-6253669_1920.jpg",
    content: "Explore the wild beauty of the Adirondack Mountains in upstate New York, where rugged peaks, sparkling lakes, and endless trails await every adventurer.",
  },
  {
    id: 2,
    img: "exp/volcanic-landscape-7929716_1920.jpg",
    content: "Discover the adventure of Madeira, a lush Portuguese island where dramatic cliffs, volcanic landscapes, and winding levada trails lead you to breathtaking views and endless exploration.",
  },
  {
    id: 3,
    img: "exp/bridge-2124896_1920.jpg",
    content: "Venture into the Azores, a remote archipelago in the Atlantic, where volcanic craters, steaming hot springs, and emerald-green valley’s create a playground for explorers and nature lovers.",
  },
  {
    id: 4,
    img: "exp/boat-8105949_1920.jpg",
    content: "Explore the wild heart of West Virginia, where rugged mountains, rushing rivers, and hidden caves invite adventurers to hike, raft, and uncover the state's untamed beauty.",
  },
  {
    id: 5,
    img: "exp/caribbean-291012_1280.jpg",
    content: "Embark on an adventure in Colombia, a land of vibrant contrasts—from lush rainforests and soaring Andes peaks to pristine Caribbean beaches and colorful colonial towns.",
  },
  {
    id: 6,
    img: "exp/panama-80761_1920.jpg",
    content: "Dive into the adventure of Panama, where lush rainforests, pristine beaches, and the iconic Panama Canal converge to create a vibrant mix of nature and history.",
  },
  {
    id: 7,
    img: "exp/sunset-2983614_1920.jpg",
    content: "Discover the thrill of Costa Rica, where tropical rainforests, volcanic landscapes, and stunning beaches offer endless adventures for nature lovers and adrenaline seekers alike.",
  },
  {
    id: 8,
    img: "exp/volcano-4987433_1920.jpg",
    content: "Uncover the natural wonders of Dominica, an island paradise filled with lush rainforests, cascading waterfalls, and volcanic hot springs—perfect for those seeking adventure and serenity.",
  },
  {
    id: 9,
    img: "exp/sea-2030919_1920.jpg",
    content: "Explore Bonaire, a Caribbean gem known for its crystal-clear waters, vibrant coral reefs, and abundant marine life—an underwater paradise for divers and nature enthusiasts.",
  },
  {
    id: 10,
    img: "exp/clay-banks-QmlRmu62v6A-unsplash.jpg",
    content: "Venture into Nicaragua, where volcanic landscapes, pristine lakes, and lush jungles offer endless opportunities for adventure, from hiking active volcanoes to exploring vibrant colonial cities.",
  },
  {
    id: 11,
    img: "exp/balazs-busznyak-bp-BOwApCkc-unsplash.jpg",
    content: "Embark on an epic journey through New Zealand, where dramatic landscapes—from rugged mountains and rolling hills to pristine beaches and crystal-clear lakes—set the stage for thrilling outdoor adventures.",
  },
  {
    id: 12,
    img: "exp/temple-4807321_1920.jpg",
    content: "Experience the blend of tradition and modernity in Japan, where ancient temples, serene gardens, and vibrant cities create a captivating adventure through culture, history, and natural beauty.",
  },
  {
    id: 13,
    img: "exp/iceland-5217702_1920.jpg",
    content: "Explore Iceland, a land of otherworldly beauty, where volcanic landscapes, geysers, glaciers, and waterfalls create an adventurous playground for nature lovers and thrill-seekers.",
  },
  {
    id: 14,
    img: "exp/lighthouse-2964656_1920.jpg",
    content: "Discover Vancouver, where the beauty of the Pacific coastline meets stunning mountain backdrops, offering endless opportunities for outdoor adventures, from hiking and skiing to vibrant city explorations.",
  },
  {
    id: 15,
    img: "exp/wellington-2144119_1920.jpg",
    content: "Uncover the beauty of Honduras, where ancient Mayan ruins, lush jungles, and pristine beaches invite explorers to immerse themselves in rich history and natural wonders.",
  },
]
export { myGallery,sharedExperience, imageData };
