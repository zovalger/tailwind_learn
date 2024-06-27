import { ReactNode } from "react";

interface props {
	children: ReactNode;
	border?: "black" | "white";
}

const WhiteButton = ({ children, border = "white" }: props) => {
	return (
		<button
			className={`${
				border == "black" ? "border-black" : "border-white"
			} border  px-10 py-4 mt-5 mb-5`}
		>
			{children}
		</button>
	);
};

export default WhiteButton;
