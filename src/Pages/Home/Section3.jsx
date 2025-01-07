import React from 'react'
import { Link, NavLink } from "react-router-dom";
import tours from "../../App";

const Section3 = () => {
  return (
    
    
    <div className=" container">
      <div className="flex justify-center  items-center py-[60px] ">
        <div className="text-white text-center flex flex-col  justify-center items-center gap-[100px]">
          
          <div className=" flex flex-col items-center gap-[50px]">
            {tours.map((el) => {
              return (
                <div className="relative w-[400px] xl:w-[850px] h-[300px] bg-slate-50 rounded-3xl p-[30px]">
                  <div className="text-start text-black flex flex-col items-start gap-[30px]">
                    <h1 className="text-[30px]">{el.name}</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, <br /> adipisicing
                      elit. Velit, nobis?
                    </p>

                    <div className="flex items-center gap-4">
                      <Link to={`/Cards/${el.id}`}>
                        <button className=" absolute bottom-[30px] px-4 py-1 bg-transparent border-[3px] rounded-xl border-black">
                          More
                        </button>
                      </Link>
                      <Link to={`/Cards/${el.id}`}>
                        <button className=" absolute left-[120px] bottom-[30px] px-5 py-1 bg-lime-700 text-white border-[3px] border-[#4d7c0f] rounded-xl ">
                          About
                        </button>
                      </Link>
                    </div>
                  </div>
                  <i class="absolute right-[30px] bottom-[30px] text-black text-[35px] fa-solid fa-plane"></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
   
  
}

export default Section3
