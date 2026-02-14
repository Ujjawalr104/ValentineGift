import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ValentineSection from "./ValentineSection";



const images = [
  { src: "src/assets/her13.jpg", caption: "loving moments 💕" },
  { src: "src/assets/her2.jpg", caption: "Your Cute Smile 😍" },
  { src: "src/assets/her3.jpg", caption: "Meri Hot Hot Madam ji 🫣" },
  { src: "src/assets/her4.jpg", caption: "Crazy Moments 😂" },
  { src: "src/assets/her11.jpg", caption: "Forever Us 💜" },
  { src: "src/assets/her6.jpg", caption: "Sweetest Hug 🤗" },
  { src: "src/assets/her7.jpg", caption: "My Happiness 💖" },
  { src: "src/assets/her8.jpg", caption: "You & Me 💑" },
  { src: "src/assets/her9.jpg", caption: "Mera Bacha 😘 " },
  { src: "src/assets/her12.jpg", caption: "My Sweetest Memory 🥰" },
  { src: "src/assets/her10.jpg", caption: "My Pyaari Ghadi😁" },
  { src: "src/assets/her1.jpg", caption: "My Whole World 🌍" },
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
