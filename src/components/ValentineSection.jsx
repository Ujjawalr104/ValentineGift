import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const ValentineSection = () => {
  const [show, setShow] = useState(false);
  const [burst, setBurst] = useState(false);
  const [noPos, setNoPos] = useState({ top: "0px", left: "0px" });
  const [noMessage, setNoMessage] = useState("");
  const [showLetter, setShowLetter] = useState(false);

  const noMessages = [
    "Soch lo meri jaan 💜",
    "Itna bhi kya sochna 😌",
    "Dil tod dogi kya? 😢",
    "Mujhe akela chhod dogi? 🥺",
    "Ek baar phir se try karo na 💖",
    "Main sirf tumhara hoon ❤️",
    "Sach mein mana karogi? 😔",
    "Mera dil tumhare paas hai 💕",
    "Itni jaldi haar maan li? 😏",
    "Please haan bol do na 😍"
  ];

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  const moveNoButton = () => {
    const top = Math.random() * 120 - 60;
    const left = Math.random() * 120 - 60;
    setNoPos({ top: `${top}px`, left: `${left}px` });

    const randomMsg = noMessages[Math.floor(Math.random() * noMessages.length)];
    setNoMessage(randomMsg);
  };

  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden transition-opacity duration-1000 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "#F8F0FB" }}
    >
      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-300 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 12}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        >
          💜
        </span>
      ))}

      {/* Question */}
      {!showLetter && (
  <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-8">

        <Typewriter
          options={{
            strings: ["Will you be my Valentine? 💜"],
            autoStart: true,
            delay: 75,
          }}
        />
      </h2> 
    )}

      {/* Buttons */}
      {!showLetter && (
  <div className="flex items-center justify-center gap-6 mt-8 relative animate-fadeIn">
    
    <button
      onClick={() => {
        console.log("YES CLICKED");
        setShowLetter(true);
        setBurst(true);
        setTimeout(() => setBurst(false), 2000);
      }}
      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg"
    >
      Yes 💖
    </button>

    <button
      onClick={moveNoButton}
      style={{ position: "relative", top: noPos.top, left: noPos.left }}
      className="px-8 py-3 bg-white text-gray-700 font-medium rounded-full border border-gray-300 shadow-sm"
    >
      No 😅
    </button>

  </div>
)}

      {/* Heart Burst */}
      {burst && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="absolute text-pink-400 animate-burst"
              style={{
                top: "50%",
                left: "50%",
                fontSize: `${Math.random() * 50 + 16}px`,
                transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
              }}
            >
              💖
            </span>
          ))}
        </div>
      )}

{showLetter && (
 <div className="mt-12 max-w-xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl animate-fadeIn text-center">

    <h2 className="text-3xl font-bold text-purple-700 mb-4">
      My Dearest 💜
    </h2>

    <p className="text-purple-800 leading-relaxed">
      From the moment you came into my life, everything became more beautiful.
      Your smile is my favorite sunrise, and your love is my greatest gift.
      <br /><br />
      Every day with you feels like a dream I never want to wake up from.
      You are my peace, my happiness, and my forever.
      <br /><br />
      <span className="font-semibold text-xl text-purple-700">
        I love you ❤️
      </span>
    </p>
  </div>
)}


      {/* NO message */}
      {noMessage && !showLetter && (
        <p className="mt-6 text-purple-700 font-medium animate-fadeIn">
          {noMessage}
        </p>
      )}


    </section>
  );
};

export default ValentineSection;
