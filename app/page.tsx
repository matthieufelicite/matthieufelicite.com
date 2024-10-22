import Header from "@/components/Header";
import Section from "@/components/Section";
import { Experience } from "@/components/Section";
import Competences from "@/components/Competences";
import Contact from "@/components/Contact";

export default function Home() {

	const experiences: Experience[] = [

		{
			id: 1,
			company: "Harmonie Mutuelle",
			position: "Développeur web",
			start: "Octobre 2024",
			end: "Aout 2027",
			image: "/harmonie.svg"
		},

		{
			id: 2,
			company: "SNCF Voyageurs",
			position: "Développeur IoT",
			start: "Septembre 2023",
			end: "Aout 2024",
			image: "/sncf.svg"
		},

		{
			id: 3,
			company: "SNCF Voyageurs",
			position: "Développeur web",
			start: "Septembre 2022",
			end: "Aout 2023",
			image: "/sncf.svg"
		}
	]

	const formation: Experience[] = [

		{
			id: 1,
			company: "EFREI Paris",
			position: "Diplôme d'ingénieur",
			start: "Septembre 2024",
			end: "Aout 2027",
			image: "/efrei.svg"
		},

		{
			id: 2,
			company: "IUT d'Orsay",
			position: "BUT Informatique",
			start: "Septembre 2021",
			end: "Aout 2024",
			image: "/iut.svg"
		},

		{
			id: 3,
			company: "Lycée Richelieu",
			position: "Baccalauréat général",
			start: "Septembre 2018",
			end: "Juin 2021",
				image: "/lycee.svg"
		}
	]

	return (

		<div className="py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-24">

			<Header name="Matthieu FELICITE" position="Développeur web" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla auctor dolor, sit amet auctor ante lacinia id. Praesent non." picture="/profilepicture.jpg" />

			<Contact/>

			<Section title="Expériences professionnelles" experiences={experiences}/>

			<Section title="Formation" experiences={formation}/>

			<Competences />
		</div>
	);
}
