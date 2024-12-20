import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    image: "/images/dp.jpg",
    description:
      "It all started here, when I told you that I liked this photo and you put it as your dp",
  },
  {
    image: "/images/cap.jpg",
    description:
      "The online days with you and this cap. Our daily meets with each other, you being goofy and me falling in love",
  },
  {
    image: "/images/saraee.jpg",
    description:
      "First time Seeing you in Saaree❤️. Realizing again how good you look",
  },
  {
    image: "/images/mall.jpg",
    description:
      "We still talk about this day and how this sweater still has only your name written on it",
  },
  {
    image: "/images/library.jpg",
    description:
      "Sorry for including this one lol but idk why... I love this picture of yours",
  },
  {
    image: "/images/mba-garden-ii.jpg",
    description:
      "And finally here we are with our glow-ups (both physical and mental). I love you Abhishri and will keep loving you forever ❤️",
  },
];

// Set image size here
const imageSizeClass = "w-60 h-39";

const Gallery = () => {
  return (
    <div className="py-10 px-5 flex justify-center">
      <div className="w-full max-w-4xl relative border-l-4 border-pink-500">
        <h2 className="text-4xl underline font-semibold font-sans text-center mb-10">
          Our Beautiful Journey
        </h2>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-10 flex items-center ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-2"></div>

            {/* Image */}
            <div
              className={`flex-shrink-0 ${imageSizeClass} mx-5 ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
            >
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square bg-white p-1 rounded-lg shadow-lg"
              >
                <img
                  src={item.image}
                  alt={`Moment ${index + 1}`}
                  className="rounded-lg shadow-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>

            {/* Description */}
            <div
              className={`w-1/2 px-5 text-center ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
            >
              <p className="text-2xl font-semibold font-sans text-gray-700">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
