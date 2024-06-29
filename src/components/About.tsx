import React from "react";
import WhiteButton from "./buttons/WhiteButton";
import SectionContainerWithImage from "./SectionContainerWithImage";

const About = () => {
	return (
		<SectionContainerWithImage>
			<div className="block md:grid md:grid-cols-2 md:grid-rows-2 md:pt-20">
				<div className="col-start-1 md:px-8">
					<h2 className="text-3xl md:text-5xl">
						Acerca de Escuela virtual de asesoría empresarial Davon
					</h2>
					<p className="text-xl mt-7">
						Empoderamos estudiantes para cambiar el mundo
					</p>
				</div>

				<div className="col-end-3 row-end-3 md:px-8">
					<p className="my-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
						officia voluptatum ducimus consectetur, nulla autem quidem assumenda
						aliquid, cum inventore modi ab nihil? Impedit, fugiat voluptatem
						soluta pariatur placeat dolorem!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
						officia voluptatum ducimus consectetur, nulla autem quidem assumenda
						aliquid, cum inventore modi ab nihil? Impedit, fugiat voluptatem
						soluta pariatur placeat dolorem!
					</p>

					<WhiteButton>Leer más</WhiteButton>
				</div>
			</div>
		</SectionContainerWithImage>
	);
};

export default About;
