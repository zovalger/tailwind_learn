"use client";
import { useState } from "react";

const Navbar = () => {
	const [modalNav, setModalNav] = useState(false);

	const openModal = () => {
		setModalNav(true);
	};
	const closeModal = () => {
		setModalNav(false);
	};

	return (
		<nav className=" block static md:fixed top-0 md:flex text-white">
			<div className="bg-black  p-4 flex fixed w-full top-0 md:static  md:bg-transparent">
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
				}  bg-black top-0 bottom-0 left-0 right-0  text-xl fixed md:static md:block md:bg-transparent`}
			>
				<div className="flex justify-between p-8">
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

				<div className="flex flex-col text-center mt-9">
					<a href="" className="py-4">
						Nosotros
					</a>
					<a href="" className="py-4">
						Modulos de aprendizaje
					</a>
					<a href="" className="py-4">
						Recursos
					</a>
					<a href="" className="py-4">
						El equipo
					</a>
					<a href="" className="py-4">
						Contacto
					</a>

					<div className="mt-5">
						<button className="bg-violet-500 px-9 py-4 rounded">
							Inscribete
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
