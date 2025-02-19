import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ categories }) => {
  const navigate = useNavigate();

  // Navigate
  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${categoryName}`);
  };

  return (
    // Grid
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
      {categories.map((category, index) => {
        // Position
        const positionClass =
          index === 0
            ? "lg:top-[200px] lg:translate-x-4"
            : index === 1
            ? "lg:top-[-10px] lg:translate-x-120"
            : index === 2
            ? "lg:top-[200px] lg:translate-x-225"
            : "";

        return (
          // Card
          <div
            key={index}
            onClick={() => handleCategoryClick(category.name)}
            className={`relative lg:absolute flex flex-col items-center bg-transparent shadow-lg rounded-lg p-3 transition-transform transform hover:scale-105 cursor-pointer ${positionClass}`}
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-[250px] h-[300px] object-cover rounded-lg border-2 border-gray-200"
            />
            {/* Details */}
            <div className="flex justify-between items-center w-full mt-2">
              {/* Name */}
              <h2 className="text-lg font-semibold text-gray-700">{category.name}</h2>
              {/* Arrow */}
              <span className="text-gray-600 text-xl">➜</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Props
CategoryCard.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoryCard;
