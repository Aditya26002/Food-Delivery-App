import React, { useState } from "react";
import list from "../data/data";

const Menu = ({ id }) => {
  const item = list.find((item) => item.id === id);

  const [counts, setCounts] = useState(Array(item.dishes.length).fill(0));

  const handleDecrement = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index && count > 0 ? count - 1 : count
      )
    );
  };

  const handleIncrement = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index && count < 10 ? count + 1 : count
      )
    );
  };

  return (
    <div className="">
      <div className="sticky top-3 z-10 mx-4 my-4">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-6 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {/*RESTAURANT DETAILS*/}
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <div className="text-sm opacity-70 flex items-center gap-2">
            {item.cuisines.map((cuisine) => (
              <p key={cuisine}>{cuisine}</p>
            ))}
          </div>
          <p className="text-sm opacity-90 w-2/3 text-center">
            {item.description}
          </p>
          {/*RATING*/}
          <div className="flex items-center gap-1 bg-green-600 px-1 rounded-md">
            <p className="text-white text-sm font-medium">{item.rating}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="white"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
          {/*DELIVERY TIME AND DISTANCE*/}
          <div className="flex items-center text-sm bg-gray-100 px-2 rounded-lg mt-1">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-stopwatch"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
              </svg>
              <p>{item.delivery_time} mins</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-dot m-0 p-0"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
            <p>{item.distance} km</p>
          </div>
        </div>
      </div>

      <div className="my-5 w-full h-4 bg-gray-200"></div>

      {/*MENU*/}
      <div className="">
        {item.dishes.map((dish, index) => (
          <div key={dish.id} className="my-5">
            {/* CARD */}
            <div className="mx-3 flex gap-3">
              {/* LEFT */}
              <div className=" w-3/5">
                <div className="flex items-center gap-3">
                  <p className="text-lg font-semibold">{dish.name}</p>
                  {dish.is_veg === true ? (
                    <div className="border border-green-600 p-1 rounded-md">
                      <div className="bg-green-600 w-[6px] h-[6px] rounded-full"></div>
                    </div>
                  ) : (
                    <div className="border border-red-700 p-1 rounded-md">
                      <div className="bg-red-700 w-[6px] h-[6px] rounded-full"></div>
                    </div>
                  )}

                  {/*  */}
                </div>
                <p className="text-sm opacity-80 w-2/3">{dish.description}</p>
                <p className="text-sm font-semibold">₹{dish.price}</p>
                {/*ADD TO CART */}
                <div className="mt-4">
                  <div className="flex items-center gap-3 w-fit bg-gray-200 rounded-xl px-2">
                    <button
                      className="pb-1 text-xl font-semibold"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </button>
                    <p className="text-sm">{counts[index]}</p>{" "}
                    <button
                      className="pb-1 text-xl font-semibold"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className=" w-2/5">
                <img
                  src={dish.image_url}
                  alt=""
                  className="w-full object-cover rounded-lg aspect-square"
                />
              </div>
            </div>
            <div className="h-1 bg-gray-200 mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
