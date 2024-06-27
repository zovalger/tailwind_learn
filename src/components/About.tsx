import React from "react";
import WhiteButton from "./buttons/WhiteButton";
import SectionContainerWithImage from "./SectionContainerWithImage";

const About = () => {
	return (
		<SectionContainerWithImage>
			<h2 className="text-3xl ">
				Acerca de Escuela virtual de asesoría empresarial Davon
			</h2>
			<p className="text-xl mt-7">
				Empoderamos estudiantes para cambiar el mundo
			</p>
			<p className="my-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia
				voluptatum ducimus consectetur, nulla autem quidem assumenda aliquid,
				cum inventore modi ab nihil? Impedit, fugiat voluptatem soluta pariatur
				placeat dolorem!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia
				voluptatum ducimus consectetur, nulla autem quidem assumenda aliquid,
				cum inventore modi ab nihil? Impedit, fugiat voluptatem soluta pariatur
				placeat dolorem!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia
				voluptatum ducimus consectetur, nulla autem quidem assumenda aliquid,
				cum inventore modi ab nihil? Impedit, fugiat voluptatem soluta pariatur
				placeat dolorem!
			</p>

			<WhiteButton>Leer más</WhiteButton>
		</SectionContainerWithImage>
	);
};

export default About;
