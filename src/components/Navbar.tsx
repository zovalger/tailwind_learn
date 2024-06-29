"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [modalNav, setModalNav] = useState(false);
	const [scrolling, setScrolling] = useState(true);

	const openModal = () => {
		setModalNav(true);
	};
	const closeModal = () => {
		setModalNav(false);
	};

	// const onScrollViewport = () => {
	// 	if (window.scrollY <= 50 && scrolling) {

	// 		console.log("no");
	// 		return setScrolling(false);}

	// 		if (window.scrollY >= 60 && !scrolling)  {
	// 		console.log("si");

	// 		setScrolling(true);
	// 		return
	// 	}
	// };

	// useEffect(() => {
	// 	document.addEventListener("scroll", onScrollViewport);

	// 	return () => document.removeEventListener("scroll", onScrollViewport);
	// }, []);

	return (
		<nav
			className={`block static md:absolute top-0 md:flex md:w-full text-white`}
		>
			<div className="bg-black  p-4 flex fixed w-full top-0 md:static  md:bg-transparent md:w-1/3 md:pl-10 ">
				<div>
					<div className="text-3xl">
						Davon
						<span className="text-purple-600">.</span>
					</div>
					<div>Escuela de Asesoría Empresarial</div>
				</div>
				<button className="ml-auto block p-2 md:hidden" onClick={openModal}>
					<svg
						className="h-10 w-10 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			{/* full navbar */}
			<div
				className={`${
					!modalNav ? "hidden" : "block"
				}  bg-black top-0 bottom-0 left-0 right-0  text-xl fixed md:static md:flex md:flex-1 md:bg-transparent md:flex-wrap md:justify-end md:w-full md:pr-10`}
			>
				<div className="flex justify-between p-8 md:items-center  order-1">
					<button>Entrar</button>
					<button onClick={closeModal} className="block md:hidden">
						<svg
							className="h-8 w-8 text-gray-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<div className="flex flex-col order-2 text-center mt-9 md:flex-row md:order-3 md:mt-0 md:text-sm md:justify-evenly md:w-10/12 ">
					<a href="" className="py-4 md:py-1">
						Nosotros
					</a>
					<a href="" className="py-4 md:py-1">
						Modulos de aprendizaje
					</a>
					<a href="" className="py-4 md:py-1">
						Recursos
					</a>
					<a href="" className="py-4 md:py-1">
						El equipo
					</a>
					<a href="" className="py-4 md:py-1">
						Contacto
					</a>
				</div>
				<div className="mt-5 order-3 md:order-2 grid justify-center md:block">
					<button className="bg-violet-500 px-9 py-4 rounded">
						Inscribete
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
