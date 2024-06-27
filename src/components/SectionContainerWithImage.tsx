import React, { ReactNode } from "react";

interface props {
	imgURL?: string;
	children: ReactNode;
}

const SectionContainerWithImage = ({ imgURL, children }: props) => {
	return (
		<div className="relative min-h-screen h-fit min-w-screen  bg-red-500">
			<div className="absolute top-0 bottom-0 left-0 right-0 inline-block ">
				<img
					src={imgURL || "https://picsum.photos/1200/1200"}
					alt="sdsd"
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="sticky bg-black bg-opacity-60 top-0 bottom-0 left-0 right-0 text-white px-5 py-14 text-balance">
				{children}
			</div>
		</div>
	);
};

export default SectionContainerWithImage;
