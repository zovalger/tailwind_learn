"use client";
import { useState } from "react";
import WhiteButton from "./buttons/WhiteButton";

const Footer = () => {
	return (
		<footer>
			<div className="bg-black text-white md:pt-20 ">
				<div className="md:grid md:grid-cols-2">
					<div className="md:px-20 md:border-r md:pb-20 ">
						<div className="px-4 py-10 flex md:py-20  ">
							<div>
								<div className="text-3xl">
									Davon
									<span className="text-purple-600">.</span>
								</div>
								<div>Escuela de Asesoría Empresarial</div>
							</div>
						</div>

						<div className="p-4">
							<h3 className="text-3xl md:text-5xl">¡Únete al éxito!</h3>
							<WhiteButton>Inscríbete</WhiteButton>
						</div>
					</div>

					<hr className="my-8 md:hidden" />

					<div className="md:relative md:px-20">
						<div className="p-4 md:pb-20">
							<h4 className="text-xl mb-3 mt-5">Info</h4>
							<p>+52-1-33-12345678</p>
							<p>Info@misitio.com</p>

							<h4 className="text-xl mb-3 mt-5">Dirección</h4>
							<p>Av. Fray Antonio Alcalde 10</p>
							<p>44100 Guadalajara, Jal., México</p>

							<h4 className="text-xl mb-3 mt-5">Síguenos</h4>

							<ul>
								<li className="mb-1">
									<a href="#" className="border-b">
										LinkedIn
									</a>
								</li>
								<li className="mb-1">
									<a href="#" className="border-b">
										Facebook
									</a>
								</li>
								<li className="mb-1">
									<a href="#" className="border-b">
										Instagram
									</a>
								</li>
							</ul>
						</div>

						<a
							href="#"
							className="fixed hidden md:absolute right-4 bottom-64 bg-white md:right-4 md:bottom-4 md:bg-transparent"
						>
							<svg
								className="h-14 w-14 md:h-20 md:w-20 text-black md:text-slate-200"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="0.5"
									d="M5 10l7-7m0 0l7 7m-7-7v18"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<div className="grid grid-rows-2 p-4  text-xs md:grid-rows-1 md:grid-cols-2">
				<p className="order-2 md:order-1">
					© 2035 Creado por Escuela virtual de asesoría empresarial Davon con
					Wix.com
				</p>

				<div className="order-1 flex justify-between md:order-2 md:pl-24 md:justify-start">
					<a href="#" className="md:mr-8">
						Términos y Condiciones{" "}
					</a>
					<a href="#">Política de privacidad</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
