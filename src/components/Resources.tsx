import React from "react";
import WhiteButton from "./buttons/WhiteButton";

const Reason = () => {
	return (
		<div className="border mb-5">
			<div className="aspect-video ">
				<img
					src={"https://picsum.photos/500"}
					alt="sdsd"
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="px-5 py-5">
				<div className="mb-5">29 jul 2022 1 min.</div>

				<h3 className="text-2xl mb-2">Programa autodidacta</h3>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
					consectetur. Mollitia sapiente incidunt porro nesciunt id, laudantium
				</p>
				<hr className="my-3" />

				<div className="flex justify-between">
					<div className="flex">
						<div className="flex items-center">
							<svg
								className="h-5 w-5 text-gray-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
								/>
							</svg>

							<span>3</span>
						</div>
						<div className="flex items-center">
							<svg
								className="h-5 w-5 text-gray-500"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								{" "}
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
							</svg>

							<span>3</span>
						</div>
					</div>
					<div>
						<svg
							className="h-5 w-5 text-red-500"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							{" "}
							<path stroke="none" d="M0 0h24v24H0z" />{" "}
							<path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

const Resources = () => {
	return (
		<div className="py-14">
			<div className="px-4">
				<h2 className="text-3xl">Recursos</h2>
				<p className="text-xl my-3">
					Amplía tus conocimientos leyendo a los expertos más destacados
				</p>
				<WhiteButton border="black">Ver más</WhiteButton>
			</div>

			<Reason />
			<Reason />
			<Reason />
		</div>
	);
};

export default Resources;
