import React from "react";
import WhiteButton from "./buttons/WhiteButton";
import SectionContainerWithImage from "./SectionContainerWithImage";
import PrimaryButton from "./buttons/PrimaryButton";

const Card = () => {
	return (
		<div className="border p-7 mt-8 md:border-none md:text-center">
			<h3 className="text-3xl">Lorem, ipsum dolor.</h3>

			<PrimaryButton hover>Únete</PrimaryButton>
		</div>
	);
};

const ThePrograms = () => {
	return (
		<SectionContainerWithImage>
			<div className="md:text-center md:pt-20 md:mx-auto max-w-md">
				<h2 className="text-3xl md:text-5xl">Los programas</h2>
				<p className="my-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi
					ex dolores voluptatum inventore et? Repudiandae a quasi animi
					
				</p>
			</div>

			<div className="md:grid md:grid-cols-3 md:grid-rows-3 md:gap-8 md:mx-20">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</SectionContainerWithImage>
	);
};

export default ThePrograms;
