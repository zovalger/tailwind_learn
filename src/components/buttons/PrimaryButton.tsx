import { ReactNode } from "react";

interface props {
	children: ReactNode;
	hover?: boolean;
}

const PrimaryButton = ({ children, hover }: props) => {
	return (
		<button
			className={`w-full bg-purple-500 px-10 py-4 mt-8 border border-transparent transition-colors ease-in duration-100 ${
				hover && "hover:bg-transparent hover:border-white"
			}`}
		>
			{children}
		</button>
	);
};

export default PrimaryButton;
