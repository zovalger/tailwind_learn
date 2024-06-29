import { ReactNode } from "react";

interface props {
	children: ReactNode;
	border?: "black" | "white";
	hover?: boolean;
	className?:string
}

const WhiteButton = ({ children, border = "white", hover, className }: props) => {
	return (
		<button
			className={`${border == "black" ? "border-black" : "border-white"}
			${hover && "hover:bg-purple-500"} 
			border  px-10 py-4 mt-5 mb-5 ${className}`}
		>
			{children}
		</button>
	);
};

export default WhiteButton;
