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
		<nav className="">
			<div className="bg-black text-white p-4 flex">
				<div>
					<div className="text-3xl">
						Davon
						<span className="text-purple-600">.</span>
					</div>
					<div>Escuela de Asesoría Empresarial</div>
				</div>
				<button className="ml-auto p-5" onClick={openModal}>
					-
				</button>
			</div>

			{/* full navbar */}
			<div
				className={`${
					!modalNav ? "hidden" : "block"
				}  bg-black top-0 bottom-0 left-0 right-0 text-white text-xl absolute`}
			>
				<div className="flex justify-between p-8">
					<button>Entrar</button>
					<button onClick={closeModal}>X</button>
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