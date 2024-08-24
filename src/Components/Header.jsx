import React from "react";
import DeliveryAdd from "./DeliveryAdd";
import HeroImg from "./HeroImg";

const Header = () => {
  return (
    <>
      {/* ADDRESS BAR */}
      <div className="flex items-center justify-between mx-4 my-2">
        <div className="flex items-center gap-2">
          {/* LOCATION ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt-fill w-7 h-7"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>

          {/* LOCATION DETAILS */}
          <div className="flex flex-col cursor-pointer">
            {/* LOCATION TITLE */}
            <div className="flex items-center gap-2">
              <p className="font-bold text-xl ">Home</p>
              {/* DOWN ARROW */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down hover:scale-150 transition-all duration-200 ease-in-out"
                viewBox="0 0 16 16"
              >
                <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </div>

            {/* LOCATION ADDRESS */}
            <p className="">xyz, xxxxxxxxx, yyyyyyyyyyyyyyy, zzzzzzzzzzz</p>
          </div>
        </div>

        {/* PROFILE ICON */}
        <div className="w-[35px] h-[35px] text-center flex justify-center items-center bg-black rounded-full mx-2 px-4">
          <p className="text-white">A</p>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="mx-5 sticky top-3 z-10">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Name of Restraunt or Dish ...."
          />
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

      {/* HERO IMAGES */}
      <HeroImg />
    </>
  );
};

export default Header;
