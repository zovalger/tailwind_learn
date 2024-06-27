import React from "react";
import WhiteButton from "./buttons/WhiteButton";
import SectionContainerWithImage from "./SectionContainerWithImage";

const Hero = () => {
	return (
		<SectionContainerWithImage>
			<p className="text-4xl ">Escuela virtual de asesoría empresarial</p>

			<p className="text-xl mt-7">
				Un lugar para líderes que quieren cambiar el mundo
			</p>

			<WhiteButton>Inscribete</WhiteButton>

			<p className="text-xl mt-5">Suscríbete a nuestra lista de correo</p>

			<div className="mt-5">
				<label htmlFor="email" className="">
					Ingresa tu email aquí *
				</label>
				<input
					type="text"
					placeholder="Email"
					id="email"
					className="border-2 border-purple-500 bg-transparent p-3 w-full mt-3 "
				/>
				<button className="bg-purple-500 p-3 w-full rounded-b">
					Suscribirse
				</button>
			</div>
		</SectionContainerWithImage>
	);
};

export default Hero;
