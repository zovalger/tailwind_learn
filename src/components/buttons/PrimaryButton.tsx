import { ReactNode } from "react";

interface props {
	children: ReactNode;
}

const PrimaryButton = ({ children }: props) => {
	return (
		<button className="w-full  bg-purple-500 px-10 py-4 mt-8 ">
			{children}
		</button>
	);
};

export default PrimaryButton;
