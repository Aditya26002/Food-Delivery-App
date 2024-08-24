import React, { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const HeroImg = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="relative flex flex-col items-center justify-center mt-4">
      <img
        src={images[current]}
        alt="carousel"
        className="w-[95vw] h-[55vw] object-cover rounded-xl"
      />

      <div className=" absolute bottom-4 flex gap-4">
        {images.map((slide, index) => (
          <div
            className={`w-2 h-2 rounded-full ring-1 ring-gray-200 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            <div className="w-[4px] h-[4px] bg-gray-200 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroImg;
