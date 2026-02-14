import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ValentineSection from "./ValentineSection";
import her1 from "../assets/her1.jpg";
import her2 from "../assets/her2.jpg";
import her3 from "../assets/her3.jpg";
import her4 from "../assets/her4.jpg";
import her6 from "../assets/her6.jpg";
import her7 from "../assets/her7.jpg";
import her8 from "../assets/her8.jpg";
import her9 from "../assets/her9.jpg";
import her10 from "../assets/her10.jpg";
import her11 from "../assets/her11.jpg";
import her12 from "../assets/her12.jpg";
import her13 from "../assets/her13.jpg";


const images = [
  { src: her13, caption: "loving moments 💕" },
  { src: her2, caption: "Your Cute Smile 😍" },
  { src: her3, caption: "Meri Hot Hot Madam ji 🫣" },
  { src: her4, caption: "Crazy Moments 😂" },
  { src: her11, caption: "Forever Us 💜" },
  { src: her6, caption: "Sweetest Hug 🤗" },
  { src: her7, caption: "My Happiness 💖" },
  { src: her8, caption: "You & Me 💑" },
  { src: her9, caption: "Mera Bacha 😘 " },
  { src: her12, caption: "My Sweetest Memory 🥰" },
  { src: her10, caption: "My Pyaari Ghadi😁" },
  { src: her1, caption: "My Whole World 🌍" },
];


const Gallery = () => {
  const [showValentine, setShowValentine] = useState(false);
const galleryRef = useRef(null);

  const rotations = ["rotate-[-2deg]", "rotate-[2deg]", "rotate-[-1deg]", "rotate-[1deg]"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowValentine(true);
          }, 10000); // 10 seconds
        }
      },
      { threshold: 0.4 }
    );
  
    if (galleryRef.current) observer.observe(galleryRef.current);
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <section ref={galleryRef} className="min-h-screen flex flex-col justify-center bg-[#F8F0FB] text-center py-16 px-6
    bg-[radial-gradient(circle_at_top_left,_#ffffff60,_transparent_40%),radial-gradient(circle_at_bottom_right,_#e9d5ff60,_transparent_40%)]">
    
      <h2 className="text-5xl font-bold text-purple-900 mb-12 mt-4
">
        Our Memories 💜
      </h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 px-8 py-6 max-w-6xl mx-auto">


        {images.map((item, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: false}}
        whileHover={{ scale: 1.05, rotate: 0 }}
      
            className="bg-white p-4 rounded-xl shadow-md shadow-purple-200/60 w-[240px] m-2
            rotate-[-2deg]
            hover:shadow-2xl hover:shadow-pink-300/70 hover:scale-105
            transition-all duration-300"
            
          >
            {/* Image */}
            <div className="flip-card h-[200px]">
              <div className="flip-inner">
                {/* Front (Image) */}
                <div className="flip-front overflow-hidden">
                  <img
                    src={item.src}
                    alt="memory"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back (Message) */}
                <div className="flip-back bg-purple-100 flex items-center justify-center p-4 text-purple-800 text-sm font-semibold">
                  {item.caption}
                </div>
              </div>
            </div>

            {/* Caption */}
            {/* <p className="mt-3 text-sm text-purple-700 font-medium">
              {item.caption}
            </p> */}
          </motion.div>
        ))}
      </div>
{showValentine && (
  <div className="animate-fadeIn">
    <ValentineSection />
  </div>
)}


    </section>
    
  );
};

export default Gallery;
