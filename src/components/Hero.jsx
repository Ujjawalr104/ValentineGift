import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import bgPic from "../assets/bg-pic.jpg";

const Hero = () => {
  const hearts = Array.from({ length: 15 });

  // Music autoplay
  useEffect(() => {
    const audio = document.getElementById("bg-music");
    const playMusic = () => {
      audio.play().catch(() => {
        document.addEventListener("click", () => audio.play(), { once: true });
      });
    };
    playMusic();
  }, []);

  // Parallax
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <img
        src={bgPic}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-center "
        style={{ transform: `translateY(${offset * 0.2}px)` }} // smoother parallax
      />

      {/* Light overlay for BLACK text visibility */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Floating Hearts */}
      {hearts.map((_, i) => (
        <FaHeart
          key={i}
          className="heart text-purple-600 opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animationDuration: `${Math.random() * 7 + 7}s`,
          }}
        />
      ))}

      {/* Background Music */}
      <audio id="bg-music" src="/music.mp3" loop />

      {/* Text */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
  <h1 className="hero-title text-5xl md:text-7xl tracking-wide">
    Hey My Love 💜
  </h1>

  <p className="hero-text mt-8 max-w-xl text-lg">
    Every moment with you feels like a beautiful dream.
  </p>

  <p className="hero-text mt-10 animate-bounce font-semibold">
    ↓ Scroll Down ↓
  </p>
</div>

    </section>
  );
};

export default Hero;
