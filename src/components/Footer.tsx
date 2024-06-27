"use client";
import { useState } from "react";
import WhiteButton from "./buttons/WhiteButton";

const Footer = () => {
	return (
		<div className="bg-black text-white ">
			<div className="px-4 py-10 flex">
				<div>
					<div className="text-3xl">
						Davon
						<span className="text-purple-600">.</span>
					</div>
					<div>Escuela de Asesoría Empresarial</div>
				</div>
			</div>
			<div className="p-4">
				<h3 className="text-3xl">¡Únete al éxito!</h3>
				<WhiteButton>Inscríbete</WhiteButton>
			</div>
			<hr className="my-8" />

			<div className="p-4">
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
		</div>
	);
};

export default Footer;
