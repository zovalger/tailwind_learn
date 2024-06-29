import React from "react";
import WhiteButton from "./buttons/WhiteButton";
import SectionContainerWithImage from "./SectionContainerWithImage";

const Motivation = () => {
	return (
		<SectionContainerWithImage hFull={false}>
			<div
				className={`grid content-center text-center md:min-h-screen`}
			>
				<div className="md:w-[80%] mx-auto">
					<h2 className="text-3xl md:text-6xl  ">
						&quot;El éxito no es total, el fracaso no es fatal: lo importante es
						siempre continuar&quot;.
					</h2>
					<p className="text-xl mt-7">Winston Churchill</p>
					<p className="text-4xl">.</p>
				</div>
			</div>
		</SectionContainerWithImage>
	);
};

export default Motivation;
