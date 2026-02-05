import React from "react";
import { innovative, resume } from "../constants";
import { motion } from "framer-motion";
// import ux from "../img/ux.svg";
// import ux from "../img/Clip path group.svg";
// import ux from "../img/Group.svg";
import ux from "../img/Group 449.svg";
import fdev from "../img/fdev.svg";
import bdev from "../img/bdev.svg";
import interfaceimg from "../img/Group 450.svg";
import lcd from "../img/Group 451.svg";
const Hero = () => {
	return (
		<div>
			<section>
				<div
					// variants={{
					//   disappear:{opacity: 0, y: -75},
					//   appear:{opacity: 1, y: 0},
					// }}
					// initial="disappear"
					// animate="appear"
					// transition={{duration: 0.5, delay: 0.25}}
					className="px-[2.19rem] flex flex-col justify-center items-center mt-[0.75rem] sm:mt-[2rem] mb-[4.3rem] "
				>
					<h1 className="text-[#202939] text-center font-DMSans text-[2.5rem] sm:text-[5.25rem] font-bold leading-[3rem] sm:leading-[6rem] tracking-wider">
						Daniel Olumide
						<br />
						Ige is...
					</h1>
					<p className="text-[#697586] sm:w-[50%] text-center font-normal font-DMSans text-base sm:text-[1.7rem] leading-[normal]">{innovative}</p>
					<a href="https://drive.google.com/file/d/1eFQEAbVoXHasHWqvk1xUxRHxGsIVN-2h/view?usp=sharing">
						<button className=" sm:mt-[2.5rem] mt-[2.5rem] bg-black py-[0.875rem] px-[1rem] flex justify-center items-center text-white text-[0.875rem] font-bold leading-[normal] sm:text-base sm:leading-[1.75rem] ">
							{" "}
							{resume}
						</button>
					</a>
					{/* 2.19
1.25 */}
				</div>
				{/* width: 18.89219rem;
height: 23.30969rem; */}

				<aside className="flex flex-wrap  justify-around">
					<img className=" bounce sm:w-[20.89219rem]" src={bdev} alt="" />
					<img className=" bounce sm:w-[20.89219rem]" src={fdev} alt="" />
					<img className="bounce sm:w-[20.89219rem] max-[480px]:mt-[1.8rem] max-[480px]:mb-[1.8rem]" src={interfaceimg} alt="" />
				</aside>
			</section>
		</div>
	);
};

export default Hero;
