import React from "react";
import WhiteButton from "./buttons/WhiteButton";
import SectionContainerWithImage from "./SectionContainerWithImage";
import PrimaryButton from "./buttons/PrimaryButton";

const Card = () => {
	return (
		<div className="border p-7 mt-8">
			<h3 className="text-3xl">Lorem, ipsum dolor.</h3>

			<PrimaryButton hover>Únete</PrimaryButton>
		</div>
	);
};

const ThePrograms = () => {
	return (
		<SectionContainerWithImage>
			<h2 className="text-3xl ">Los programas</h2>
			<p className="my-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi
				ex dolores voluptatum inventore et? Repudiandae a quasi animi
				voluptatem. Molestiae voluptatum nesciunt nobis nisi, veniam reiciendis
				alias similique suscipit!
			</p>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</SectionContainerWithImage>
	);
};

export default ThePrograms;
