import type React from "react";
import { TextWriter } from "../components/TextWriter";

const offices: string[] = ['Software', 'Web', 'Frontend', 'Backend', 'Fullstack'];

export const Welcome: React.FC = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen w-full" id="home">
			<h2 className="text-5xl/tight font-semibold text-center text-gray-900">
				Hola, <br />
				Mi nombre es Sergio Martín <br />
			</h2>
			<h2 className="text-5xl/tight font-semibold text-gray-900">
				Soy <span className="text-terracotta-600">Desarrollador de <TextWriter texts={offices} /></span>
			</h2>
		</div>
	);
}