import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

import fashion from "../assets/images/fashion.jpg";
import cosmetic from "../assets/images/cosmetic.jpg";
import furniture from "../assets/images/furniture.jpg";
import groceries from "../assets/images/grocerios.jpg";

import clothing from "../assets/display/clothing.jpg";
import beauty from "../assets/display/beauty.jpg";
import sofa from "../assets/display/sofa.jpg";

const categories = [
  { name: "Fashion", image: clothing },
  { name: "Cosmetics", image: beauty },
  { name: "Furniture", image: sofa },
];

const images = [fashion, cosmetic, furniture, groceries];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleContactClick = () => {
    navigate("/contact"); // Redirect to the contact page
  };
  
  return (
    <div className="flex flex-col items-center -mt-4 w-full flex-grow">
      <div className="relative w-screen h-[250px] lg:h-[500px] overflow-hidden shadow-xl">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 text-2xl lg:text-6xl font-bold text-white
         bg-opacity-80 z-10 text-center">
          Welcome <br /> to <br /> ShoppyGlobe
        </h1>
        
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div key={index} className="w-full flex-none">
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="absolute m-0 h-full p-6 top-1/2 transform -translate-y-1/2 hover:bg-gray-700 hover:opacity-75 text-white">
          <i className="fas fa-chevron-left text-3xl lg:text-5xl"></i>
        </button>

        <button onClick={nextSlide} className="absolute m-0 h-full right-0 p-6 top-1/2 
        transform -translate-y-1/2 hover:bg-gray-700 hover:opacity-75 text-white">
          <i className="fas fa-chevron-right text-3xl lg:text-5xl"></i>
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-200"}`} onClick={() => setCurrentIndex(index)}></div>
          ))}
        </div>
      </div>
      <button
        onClick={handleContactClick}
        className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full 
        shadow-lg hover:bg-gray-800 transition-all"
       >
        <i className="fas fa-envelope text-2xl"></i>
      </button>
      <div className="relative p-6 w-full mt-12">
        <h1 className="text-2xl font-bold text-center mb-6">Shop by Category</h1>
        <CategoryCard categories={categories} />
      </div>
    </div>
  );
};

export default Home;
