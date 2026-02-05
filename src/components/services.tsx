import { useState } from "react";
import serverly from "../img/severly.png";
import buyinsurance from "../img/buyinsurance.png";
import solarsurvey from "../img/solarsurvey.png";
import blog from "../img/blog.png";

const projects = [
	{
		id: 1,
		name: "Severly",
		description: "Modern hosting platform",
		link: "https://getserverly.com",
		image: serverly,
		tags: ["React", "Node.js", "Stripe"],
	},
	{
		id: 2,
		name: "Sanlam Buy Insurance",
		description: "Insurance purchase platform",
		link: "https://buyinsurance.sanlamallianz.com.ng/",
		image: buyinsurance,
		tags: ["React", "Tailwind", "Node.js"],
	},
	{
		id: 3,
		name: "Solar Survey",
		description: "Interactive orthomosaic platform",
		link: "https://solarsurvey.ai/",
		image: solarsurvey,
		tags: ["React", "Nodejs", "AWS"],
	},
	// {
	// 	id: 4,
	// 	name: "Social Media App",
	// 	description: "Connect and share",
	// 	link: "https://example-social.com",
	// 	image: "https://via.placeholder.com/400x300/2E7D9A/ffffff?text=Social+App",
	// 	tags: ["React Native", "Firebase"],
	// },
	{
		id: 6,
		name: "Solar Survey Blog",
		description: "Tech insights and updates",
		link: "https://blog.solarsurvey.ai/blog",
		image: blog,
		tags: ["React"],
	},
];

const Services = () => {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);

	return (
		<figcaption className="sm:mt-[5rem]" id="Project">
			<div className="max-w-[75.875rem] line h-[0.0625rem] bg-[#E3E8EF] mx-auto my-0"></div>

			{/* Header Section */}
			<div className="mx-6 lg:mx-[7.44rem] my-[3rem] sm:my-[5rem]">
				<h1 className="text-[#202939] font-DMSans text-[2rem] font-bold sm:text-[3.5rem] text-center">Projects I've Built</h1>
				<p className="text-[#697586] font-DMSans text-base sm:text-[1.25rem] leading-[1.875rem] text-center mt-[1rem] max-w-[50rem] mx-auto">
					A collection of web applications and digital experiences I've crafted with modern technologies
				</p>
			</div>

			{/* Projects Grid */}
			<div className="mx-6 lg:mx-[7.44rem] pb-[5rem]">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] lg:gap-[2.5rem]">
					{projects.map((project) => (
						<a
							key={project.id}
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="group block"
							onMouseEnter={() => setHoveredCard(project.id)}
							onMouseLeave={() => setHoveredCard(null)}
						>
							<article className="relative overflow-hidden border-[1px] border-[#E3E8EF] bg-white transition-all duration-300 ease-in-out hover:border-[#202939] hover:shadow-lg h-full flex flex-col">
								{/* Image Container */}
								<div className="relative h-[12.5rem] sm:h-[15rem] overflow-hidden bg-[#F5F7FA]">
									<img
										src={project.image}
										alt={project.name}
										className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
									/>
									{/* Overlay on hover */}
									<div
										className={`absolute inset-0 bg-black transition-opacity duration-300 ${
											hoveredCard === project.id ? "opacity-20" : "opacity-0"
										}`}
									></div>

									{/* Visit Icon */}
									<div
										className={`absolute top-4 right-4 bg-white rounded-full p-2 transition-all duration-300 ${
											hoveredCard === project.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
										}`}
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
											<path
												d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16667M15.8333 10L9.99996 15.8333"
												stroke="black"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								</div>

								{/* Content */}
								<div className="p-[1.5rem] flex-1 flex flex-col">
									<h2 className="text-[#202939] font-DMSans text-[1.25rem] sm:text-[1.5rem] font-bold mb-[0.75rem] group-hover:text-[#61DAFB] transition-colors duration-300">
										{project.name}
									</h2>
									<p className="text-[#697586] font-DMSans text-base leading-[1.5rem] mb-[1rem] flex-1">{project.description}</p>

									{/* Tags */}
									<div className="flex flex-wrap gap-[0.5rem] mt-auto">
										{project.tags.map((tag, index) => (
											<span
												key={index}
												className="text-[#697586] font-DMSans text-[0.875rem] px-[0.75rem] py-[0.25rem] bg-[#F5F7FA] border-[1px] border-[#E3E8EF] transition-all duration-300 group-hover:bg-[#202939] group-hover:text-white group-hover:border-[#202939]"
											>
												{tag}
											</span>
										))}
									</div>
								</div>

								{/* Bottom Border Animation */}
								<div className={`h-[0.25rem] bg-[#61DAFB] transition-all duration-300 ${hoveredCard === project.id ? "w-full" : "w-0"}`}></div>
							</article>
						</a>
					))}
				</div>

				{/* View All Projects Button */}
				{/* <div className="text-center mt-[3rem] sm:mt-[5rem]">
					<a href={behancelink}>
						<button className="btn font-DMSans text-base font-normal leading-[normal] p-[0.75rem] sm:py-[1rem] sm:px-[2rem] inline-flex justify-center items-center gap-[1rem] border-[1px] border-black border-solid text-black hover:text-white hover:bg-black transition-all duration-300">
							View All Projects
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								className="transition-transform duration-300 group-hover:translate-x-1"
							>
								<path
									d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16667M15.8333 10L9.99996 15.8333"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</a>
				</div> */}
			</div>

			<div className="max-w-[75.875rem] line h-[0.0625rem] bg-[#E3E8EF] mx-auto my-0"></div>
		</figcaption>
	);
};

export default Services;

// const Services = () => {
//   return (
//     <figcaption className="sm:mt-[5rem]" id="Project">
//       <div className="max-w-[75.875rem] line h-[0.0625rem] bg-[#E3E8EF]  mx-auto my-0"></div>

//       <figure className="services  mx-6 sm:flex md:flex-row lg:mx-[7.44rem] sm:gap-[2rem] md:gap-[5rem] lg:gap-[5rem] xl:gap-[8rem]">
//         <section className="mt-[3rem] sm:mt-[0rem] sm:my-[3rem] md:my-[2rem] sm:ml-[40px] ">
//           <div>
//             <h1 className="text-[#202939] font-DMSans text-[1.5rem] font-bold sm:text-[3rem] ">
//               I design <br />
//               stuff
//             </h1>

//             <p className="text-[#697586] lg:h-[9.4375rem]  font-DMSans text-base font-normal leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.875rem] pt-[1.25rem] sm:pt-[1.5rem] sm:mb-[5rem]  ">
//               {" "}
//               {designstuff}
//             </p>
//             <a href={behancelink}>
//                           <button className=" btn md:h-[ 9.4375rem] mt-[2.5rem] sm:mt-[0rem] font-DMSans text-base font-normal leading-[normal] p-[0.75rem] sm:py-[0.75rem] sm:px-[1rem] flex justify-center items-center gap-[1rem] border-[1px] border-black border-solid text-black hover:text-white hover:bg-black">
//               {mywork}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//               >
//                 <path
//                   d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16667M15.8333 10L9.99996 15.8333"
//                   stroke="black"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </button>
//             </a>
//           </div>
//         </section>
//         <Divider orientation="vertical" flexItem></Divider>
//         <section className=" max-[640px]:mt-[4rem] md:my-[2rem]">
//           <h1 className="text-[#202939] font-DMSans text-[1.5rem] font-bold sm:text-[3rem] ">
//             I write, <br />
//             sometimes
//           </h1>
//           <p className="text-[#697586] lg:h-[9.4375rem] font-DMSans text-base font-normal leading-[1.3125rem] md:text-[1.25rem] md:leading-[1.875rem] pt-[1.25rem] sm:pt-[1.5rem] sm:mb-[5rem]  ">
//             {writestuff}
//           </p>
// <a href={mediumlink}>
//           <button className=" mt-[2.5rem] sm:mt-[0rem] btn font-DMSans text-base font-normal leading-[normal]  p-[0.75rem] sm:py-[0.75rem] sm:px-[1rem] flex justify-center items-center gap-[1rem] border-[1px] border-black border-solid text-black hover:text-white hover:bg-black">
//             {myarticles}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//             >
//               <path
//                 d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16667M15.8333 10L9.99996 15.8333"
//                 stroke="black"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </button>
//           </a>
//         </section>
//       </figure>
//       <div className="max-w-[75.875rem] line h-[0.0625rem] bg-[#E3E8EF]  mx-auto my-0"></div>
//     </figcaption>
//   );
// };

// export default Services;
