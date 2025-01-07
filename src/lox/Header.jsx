import React, { useState } from "react";

const Header = () => {
  const [burger, setBurger] = useState(false);

  return (
    <div>
      <div className="container bg-emerald-900 flex items-center justify-between h-[70px]">
        <h1 className="text-white text-[25px] font-semibold">GoTrip_Bro!</h1>
        <div className="flex gap-3 items-center">
          <button className="px-4 py-[5px] rounded-lg bg-white">About</button>
          <i
            onClick={() => setBurger(true)}
            class="cursor-pointer fa-solid fa-bars-staggered text-white text-[23px]"
          ></i>
        </div>
      </div>
      {burger && (
        <div className="relative ">
          <div className=" text-white bg-emerald-900 w-[350px] duration-300 fixed right-0 top-0 flex flex-col items-center justify-center p-[40px] z-20  h-[100vh]">
            <ul className="flex items-center flex-col gap-7">
              <li>Contact</li>
              <li>Nmadir</li>
              <li>Eshmat</li>
              <li>Toshmat</li>
            </ul>
            <div className="flex items-center gap-2">
              

              <button
                onClick={() => setBurger(false)}
                className="absolute text-[20px] top-0 right-1 px-7 py-3 flex items-center justify-center"
              >
                x
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
