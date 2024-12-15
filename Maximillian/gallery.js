const myGallery = [
  { id: 1, img: "./media/files/1.jpg" },
  { id: 2, img: "./media/files/2.jpg" },
  { id: 3, img: "./media/files/3.jpg" },
  { id: 4, img: "./media/files/4.jpg" },
  { id: 5, img: "./media/files/5.jpg" },
  { id: 6, img: "./media/files/6.jpg" },
  { id: 7, img: "./media/files/7.jpg" },
  { id: 8, img: "./media/files/8.jpg" },
  { id: 9, img: "./media/files/9.jpg" },
  { id: 10, img: "./media/files/10.jpg" },
  { id: 11, img: "./media/files/11.jpg" },
  { id: 12, img: "./media/files/12.jpg" },
  { id: 13, img: "./media/files/13.jpg" },
  { id: 14, img: "./media/files/14.jpg" },
];

// const sharedExperience = [
//   {
//     id: 1,
//     img: "",
//     content: "",
//   },
//   {
//     id: 2,
//     img: "",
//     content: "",
//   },
//   {
//     id: 3,
//     img: "",
//     content: "",
//   },

const imageData = [
  {
    id: 11,
    title: "Copa Airlines",
    imageUrl: "/media/Maxip/Copa.jpg",
    description:
      "We’ve teamed up with Copa Airlines to highlight their exciting Panama Stopover Program! Now, you can explore the vibrant beauty of Panama on your way to your final destination—at no additional cost. It’s the perfect chance to turn a layover into an unforgettable adventure!\
                  As part of our partnership, we created stunning photos and videos for Copa Airlines, showcasing our flight experience, the luxurious Copa Club airport lounge, and the vibrant food, hotels, and must-see attractions in Panama City.",
    relatedImages: [
      "./media/Maxip/Copa 1.jpg",
      "./media/Maxip/Copa 2.jpg",
      "./media/Maxip/Copa 3.jpg",
    ],
  },
  {
    id: 22,
    title: "Rancho Santana",
    imageUrl: "/media/Maxip/Rancho.jpg",
    description:
      "Rancho Santana, a world-class boutique resort on Nicaragua’s stunning southwest coast, has earned a spot among Travel & Leisure’s top hotels in the world. I had the incredible opportunity to visit and create content showcasing the resort’s endless adventurous activities and unique charm.",
    relatedImages: [
      "./media/Maxip/Rancho.jpg",
      "./media/Maxip/Rancho 1.jpg",
      "./media/Maxip/Ranch 2.jpg",
      "./media/Maxip/Rancho 3.jpg",
      "./media/Maxip/Rancho 4.jpg",
    ],
  },
  {
    id: 33,
    title: "Michelob ULTRA",
    imageUrl: "/media/Maxip/Ultra.jpg",
    description:
      "I partnered with Michelob ULTRA Pure Gold on their large scale Board Your Gear Campaign. I created high quality photo and video content to promote on Instagram, to showcase how our favorite outdoor gear helped us get outside - with a chilled beer, of course!",
    relatedImages: [
      "./media/Maxip/Ultra 1.jpg",
      "./media/Maxip/Ultra 2.jpg",
      "./media/Maxip/Ultra 3.jpg",
      "./media/Maxip/Ultra 4.jpg",
    ],
  },
  {
    id: 44,
    title: "Bite Toothpaste",
    imageUrl: "/media/Maxip/Bite.jpg",
    description:
      "I had the exciting opportunity to partner with Bite Toothpaste Bits, a brand revolutionizing oral care with their innovative plastic-free toothpaste and mouthwash bits. These small but mighty bits are not only convenient and travel-friendly but also a step toward reducing single-use plastic waste. It’s a game-changer for anyone looking to keep their smile fresh while making a positive impact on the planet!",
    relatedImages: [
      "./media/Maxip/Bite 1.jpg",
      "./media/Maxip/Bite 2.jpg",
      "./media/Maxip/Bite 3.jpg",
      "./media/Maxip/Bite 4.jpg",
      
    ],
  },
  {
    id: 55,
    title: " Vessi",
    imageUrl: "/media/Maxip/Vessi 1.jpg",
    description:
      "In the fall of 2021, I teamed up with Vessi, a Vancouver-based brand known for their innovative, multi-purpose sneakers, to create content for the launch of their Everyday Move collection. These sneakers aren’t just stylish—they’re waterproof and perfect for any adventure! I produced high-quality visuals for Vessi’s social channels and shared Instagram promotions to showcase how these versatile sneakers keep up with an active lifestyle, rain or shine. \
      “We had an amazing experience working with Joy as a content creator! She was the perfect fit for our current strategies and goes above and beyond in her deliverables. We’re excited to work with her again and hopefully create a long term relationship” \
    - Madison Low, Partnerships Coordinator, Vessi",
    relatedImages: [
      "./media/Maxip/Vessi 2.jpg",
      "./media/Maxip/Vessi 3.jpg",
    ],
  },
  {
    id: 66,
    title: "1MORE",
    imageUrl: "/media/Maxip/Ear.jpg",
    description:
      "I collaborated with 1MORE to celebrate the launch of their cutting-edge EVO Earbuds. Combining sleek design with premium sound quality, these earbuds are a game-changer for music lovers and audiophiles alike. Stay tuned as I share how they elevate the listening experience!",
    relatedImages: [
      "./media/Maxip/Ear 1.jpg",
      "./media/Maxip/Ear 2.jpg",
      "./media/Maxip/Ear 3.jpg",
      "./media/Maxip/Ear 4.jpg",
    ],
  },
  {
    id: 77,
    title: "PAKT",
    imageUrl: "/media/Maxip/Bag.jpg",
    description:
      "Since 2019, I’ve had the privilege of partnering with PAKT, an eco-conscious travel gear brand, on multiple Instagram and product launch campaigns. Over the years, I’ve captured stunning photos of their gear in breathtaking locations like Belize, the Pacific Northwest, and the Adirondack Mountains. From high-quality content for their social channels to Instagram promotions for Earth Day, highlighting their environmental initiatives, and featuring the launches of the PAKT Backpack and Anywhere Collection, this collaboration has been all about celebrating sustainability and adventure in style.\
      “Jackie is great to work with! She is always thorough, professional, and comes up with great content/copy. She’s always makes sure the brand is happy with the process and the outcome, which really makes her stand out, because many other influencers aren’t so careful! I would recommend her to anyone looking for a content creator” \
      - Emma Abbott, Marketing Lead, Pakt",
    relatedImages: [
      "./media/Maxip/Bag 1.jpg",
      "./media/Maxip/Bag 2.jpg",
      "./media/Maxip/Bag 3.jpg",
    ],
  },
  {
    id: 8,
    title: "Gran Reserva",
    imageUrl: "/media/Maxip/Gran.jpg",
    description: "In the fall of 2021, Gran Reserva invited me to showcase their sustainably-produced wine and spotlight their commitment to reducing water usage and protecting biodiversity. To align with their brand vision, I created content inspired by their mood board, delivering marketing visuals that were perfectly on point. To further promote their wine, I also hosted an engaging giveaway, sharing their eco-conscious story with my audience while celebrating their exceptional vintages.",
    relatedImages: [
      "./media/Maxip/Gran 1.jpg",
      "./media/Maxip/Gran 2.jpg",
      "./media/Maxip/Gran 4.jpg",
    ],
  },

  // Add more objects as needed
];

export { myGallery, imageData };
