import type { Metadata } from "next";
import "./globals.css";
import {PropsWithChildren} from "react";

export const metadata: Metadata = {

	title: "Matthieu FELICITE",
	description: "CV de Matthieu FELICITE",
};

export default function RootLayout({ children }: PropsWithChildren) {

	return (

		<html lang="fr">

			<body>

				{children}
			</body>
		</html>
	);
}
