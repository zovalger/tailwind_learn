import React, { ReactNode } from "react";

interface props {
	imgURL?: string;
	hFull?: boolean;
	children: ReactNode;
	classNameBackground?: string;
	className?: string;
}

const SectionContainerWithImage = ({
	imgURL,
	hFull = true,
	children,
	classNameBackground = "",
	className = "",
}: props) => {
	return (
		<div
			className={`${
				hFull ? "min-h-screen" : ""
			} h-fit min-w-screen flex flex-col  bg-[url(https://picsum.photos/1200/1200)] bg-cover bg-no-repeat ${classNameBackground}`}
		>
			<div
				className={`bg-black bg-opacity-60 text-white px-5 py-14 text-balance h-full w-full inline-block flex-1 ${className}`}
			>
				{children}
			</div>
		</div>
	);
};

export default SectionContainerWithImage;
