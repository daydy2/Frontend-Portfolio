import React from "react";
// import tobi from "../img/image 2.svg";
import img90 from "../img/img90.jpg";
import { about, wanna } from "../constants";
const Knowme = () => {
  return (
    <main
      className="
      main
    
 sm:py-[2rem] 

 min-[1100px]:px-[10.0625rem] 
 min-[800px]:px-[5.0625rem] 
 
 px-[1.3rem]
 mt-[2rem]
bg-[#F6FAFE]

   "
   id="About"
    >
      <div className="grid sm:grid-cols-2 gap-[2.25rem] sm:gap-[2rem] md:gap-[3.5rem]  ">
        <figure className="sm:order-last sm:flex sm:justify-center  sm:flex-col">
          <h1 className="headtext text-[#202939] font-DMSans text-center sm:text-left text-[1.5rem] pb-[1.5rem] md:text-[3rem] font-bold leading-[normal]">
            {wanna}
          </h1>
          <p className="paragraph text-[#697586]  text-center sm:text-left text-base sm:text-[0.8rem]  md:text-[1.2rem] font-normal leading-[normal]  md:leading-[2.25rem]">
            {about}
          </p>
        </figure>
        <aside>
          <div className=" border-[3px] border-[#FFB0DE] w-fit sm:py-[2.62rem] py-[1.49rem] sm:my-[2.3rem] mx-[2rem] sm:mx-[0rem]">
            <img
              className="  sm:translate-x-[-3rem] translate-x-[-1.5rem]"
              src={img90}
              alt=""
            />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Knowme;
