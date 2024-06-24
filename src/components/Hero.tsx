import React from "react";

const Hero = () => {
	return (
		<div className="relative">
			<div className="absolute bg-black bg-opacity-60 top-0 bottom-0 left-0 right-0 text-white px-5 py-14 text-balance">
				<p className="text-4xl ">Escuela virtual de asesoría empresarial</p>

				<p className="text-xl mt-7">
					Un lugar para líderes que quieren cambiar el mundo
				</p>

				<button className="border-2 border-white px-10 py-4 mt-5">
					Inscribete
				</button>

				<p className="text-xl mt-5">Suscríbete a nuestra lista de correo</p>

				<div className="mt-5">
					<label htmlFor="email" className="">
						Ingresa tu email aquí *
					</label>
					<input
						type="text"
						placeholder="Email"
						id="email"
						className="border-2 border-purple-500 bg-transparent p-3 w-full mt-3 "
					/>
					<button className="bg-purple-500 p-3 w-full rounded-b">
						Suscribirse
					</button>
				</div>
			</div>

			<div className="h-screen w-screen">
				<img
					src="https://picsum.photos/1200/1200"
					alt="sdsd"
					className="object-cover w-full h-full"
				/>
			</div>
		</div>
	);
};

export default Hero;
