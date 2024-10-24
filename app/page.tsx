import Header from "@/components/Header";
import Section from "@/components/Section";
import { Experience } from "@/components/Section";
import Competences from "@/components/Competences";
import Contact from "@/components/Contact";
import CompetenceType from "@/lib/interfaces/CompetenceType";

export default function Home() {

	const name: string = "Matthieu FELICITE"
	const position: string = "Développeur web"
	const description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla auctor dolor, sit amet auctor ante lacinia id. Praesent non."
	const picture: string = "/profilepicture.jpg"

	const email: string = "contact@matthieufelicite.com"
	const telephone: string = "06 12 79 69 87"
	const tel: string = "+33612796987"
	const linkedin: string = "https://www.linkedin.com/in/matthieufelicite/"
	const adress: string = "92500 Rueil-Malmaison"
	const adressLink: string = "https://maps.app.goo.gl/TK17GVYzenE6PpVz6"


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
		
		const competences: CompetenceType[] = [

			{id: 1, label: "HTML"},
			{id: 2, label: "CSS"},
			{id: 3, label: "Javascript"},
			{id: 4, label: "Typescript"},
			{id: 5, label: "C"},
			{id: 6, label: "C++"},
			{id: 7, label: "Python"},
			{id: 8, label: "Git"},
			{id: 9, label: "Docker"},
			{id: 10, label: "SQL"},
			{id: 11, label: "Travail d'équipe"},
			{id: 12, label: "Autonomie"},
			{id: 13, label: "Rigueur"}
		]

	return (

		<div className="py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-24">

			<Header name={name} position={position} description={description} picture={picture} />

			<Contact email={email} telephone={telephone} tel={tel} linkedin={linkedin} adress={adress} adressLink={adressLink} />

			<Section title="Expériences professionnelles" experiences={experiences}/>

			<Section title="Formation" experiences={formation}/>

			<Competences competences={competences} />
		</div>
	);
}
