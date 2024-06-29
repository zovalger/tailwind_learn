import React from "react";
import WhiteButton from "./buttons/WhiteButton";
import SectionContainerWithImage from "./SectionContainerWithImage";

const Hero = () => {
	return (
		<SectionContainerWithImage className="pt-36  md:pt-64 flex flex-col">
			<div>
			<p className="text-4xl md:text-7xl ">
				Escuela virtual de asesoría empresarial
			</p>

			<p className="text-xl mt-7 ">
				Un lugar para líderes que quieren cambiar el mundo
			</p>

			<WhiteButton>Inscribete</WhiteButton>

			</div>
			

			<div className="flex flex-col md:flex-row md:mt-10">
				<div className="flex-1 order-1 md:order-2 md:border-l md:border-l-gray-500 md:px-16">
					<p className="text-xl mt-8">Suscríbete a nuestra lista de correo</p>

					<div className="mt-5 flex flex-col md:flex-row md:flex-wrap">
						<label htmlFor="email" className="w-full md:mb-3">
							Ingresa tu email aquí *
						</label>
						<input
							type="text"
							placeholder="Email"
							id="email"
							className="border-2 border-purple-500 bg-transparent p-3  md:mt-0 w-full  mt-3 md:flex-1 "
						/>
						<button className="bg-purple-500 p-3 w-full rounded-b md:rounded-bl-none md:rounded-r  md:flex-1">
							Suscribirse
						</button>
					</div>
				</div>

				<div className="mt-5 flex-1 order-2 md:order-1 flex items-center">
					<svg
						className="h-20 w-20 text-slate-200"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="0.5"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</div>
		</SectionContainerWithImage>
	);
};

export default Hero;
