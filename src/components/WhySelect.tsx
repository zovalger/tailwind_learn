import React from "react";

const Reason = () => {
	return (
		<div className="">
			<div className="pb-6">
				<svg
					preserveAspectRatio="xMidYMid meet"
					data-bbox="20.63 20.63 158.74 158.74"
					viewBox="20.63 20.63 158.74 158.74"
					height="50"
					width="50"
					xmlns="http://www.w3.org/2000/svg"
					data-type="color"
					role="presentation"
					aria-hidden="true"
					aria-label=""
				>
					<g>
						<path
							fill="#7E55F6"
							d="M178.233 101v77h-77v-77h77z"
							data-color="1"
						></path>
						<path
							d="M20.63 20.63v158.74h158.74V20.63H20.63zm156.26 156.26h-74.41v-74.41h74.409v74.41zM100 100v76.89H23.11V23.11h153.78V100H100z"
							fill="#1D1D1B"
							data-color="2"
						></path>
					</g>
				</svg>
			</div>

			<h3 className="text-xl mb-2">Programa autodidacta</h3>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
				consectetur. Mollitia sapiente incidunt porro nesciunt id, laudantium
				beatae maiores nihil. Aspernatur at, porro autem neque illum
				perspiciatis quae dignissimos amet?
			</p>
		</div>
	);
};

const WhySelect = () => {
	return (
		<div className="block md:grid md:grid-cols-2 md:grid-rows-2">
			<div className="px-4 py-12 border md:py-28 md:px-16 md:grid md:content-center">
				<h2 className="text-3xl md:text-6xl">
					¿Por qué elegir nuestros cursos?
				</h2>
			</div>

			<div className="px-4 py-12 border md:py-28 md:px-16">
				<Reason />
			</div>

			<div className="px-4 py-12 border md:py-28 md:px-16" >
				<Reason />
			</div>

			<div className="px-4 py-12 border md:py-28 md:px-16">
				<Reason />
			</div>
		</div>
	);
};

export default WhySelect;
