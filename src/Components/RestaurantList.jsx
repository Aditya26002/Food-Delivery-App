import React from "react";
import list from "../data/data";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  return (
    <div className="flex flex-col items-center mx-4 my-4 gap-5">
      {/* CARD */}
      {list.map((item) => (
        <Link
          to={`/restaurant/${item.id}`}
          id={item.id}
          className="shadow-lg rounded-b-2xl"
        >
          {/* IMAGE */}
          <div className="">
            <img
              src={item.image_url}
              alt=""
              className="rounded-t-2xl w-[100vw] h-[45vw] object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="bg-white px-3 py-2 rounded-b-2xl">
            {/* DELIVERY DETAILS */}
            <div className=" flex items-center text-xs text-gray-500">
              {/* DELIVERY TIME */}
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
              {/* DELIVERY DISTANCE */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-dot m-0 p-0"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              </svg>
              <p>{item.distance} km</p>
            </div>
            {/* TITLE AND RATING */}
            <div className="flex items-start justify-between gap-16">
              {/* TITLE */}
              <p className="font-bold text-xl text-wrap">{item.title}</p>
              {/* RATING */}
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
            </div>
            {/* POINTS */}
            <div className="divide-y divide-dashed">
              <div className="flex items-center text-sm text-gray-600 pb-1">
                <p>{item.veg_non_veg.toUpperCase()}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-dot m-0 p-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <p>{item.cuisines[0]}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-dot m-0 p-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <p>{item.cuisines[1]}</p>
              </div>
              {item.discounts.exist ? (
                <div className="text-sky-600 flex items-center pt-1 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height={15}
                  >
                    <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                  </svg>
                  <p className="text-sm font-semibold">
                    {item.discounts.offers[0]}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
