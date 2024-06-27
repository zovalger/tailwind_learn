import React, { ReactNode } from "react";

interface props {
	imgURL?: string;
	children: ReactNode;
}

const SectionContainerWithImage = ({ imgURL, children }: props) => {
	return (
		<div className="relative min-h-screen h-fit min-w-screen flex flex-col  bg-[url(https://picsum.photos/1200/1200)] bg-cover bg-no-repeat">
			<div className="bg-black bg-opacity-60 text-white px-5 py-14 text-balance h-full w-full inline-block flex-1">
				{children}
			</div>
		</div>
	);
};

export default SectionContainerWithImage;
