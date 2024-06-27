import React from "react";
import WhiteButton from "./buttons/WhiteButton";
import SectionContainerWithImage from "./SectionContainerWithImage";

const Motivation = () => {
	return (
		<SectionContainerWithImage hFull={false}>
			<div
				className={`h-full inline-flex items-center justify-center text-center flex-col`}
			>
				<h2 className="text-3xl ">
					"El éxito no es total, el fracaso no es fatal: lo importante es
					siempre continuar".
				</h2>
				<p className="text-xl mt-7">Winston Churchill</p>
				<p className="text-4xl">.</p>
			</div>
		</SectionContainerWithImage>
	);
};

export default Motivation;
