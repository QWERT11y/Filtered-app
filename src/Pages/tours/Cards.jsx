import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import tours from "../../App";

const Cards = () => {
  const id = useParams().CardId;
  const card = tours.find((el) => el.id == id);
  console.log(card);
  const [modal , setModal] = useState(false)

  return (
    <div className="relative">
      <div className="container py-[50px] bg-yellow-50 flex items-start justify-between gap-20 ">
        <div className="w-[500px] h-[300px] bg-slate-400 rounded-xl p-[30px] ">
          <div className="relative flex flex-col items-start gap-[30px]">
            <h1 className="text-[30px] text-white ">{card.name}</h1>
            <p className=" text-white text-[15px]">{card.description}</p>
            <p className=" absolute bottom-[-120px] text-[24px] text-white font-bold ">
              {card.price}
            </p>
            <i class="absolute right-[-10px] text-white bottom-[-120px]  text-[35px] fa-solid fa-train"></i>
          </div>
        </div>
        <div className="w-[400px] flex items-start flex-col gap-5">
          <h1 className="text-[33px] text-gray-600">Want More? go Home</h1>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            veniam illo, voluptatibus minus reiciendis ea natus assumenda quia
            in inventore.
          </p>
          <div className="flex flex-row items-center gap-5">

          <Link to={`/`}>
            <button className="  px-4 py-1 text-gray-600 bg-transparent border-[3px] rounded-xl border-[#4b5563]">
              Back
            </button>
          </Link>
          <button onClick={() => setModal(true)}   className="px-6 py-[7px]  bg-slate-700 rounded-xl text-white">Buy</button>
          </div>
        </div>
      </div>
      {modal &&     <div className="fixed top-[40px] right-[60px] w-[400px] h-[230px] rounded-2xl text-center flex flex-col text-white gap-4 justify-center items-center bg-lime-800 ">
        <h1 className="text-white text-[33px]">ALL TICKETS SOLD OUT</h1>
        <p>we so sorry</p>
        <button onClick={() => setModal(false)} className="absolute top-[20px] right-[40px] text-[30px]">x</button>
      </div>}
   
    </div>
  );
};

export default Cards;
