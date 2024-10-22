import Competence from "@/components/Competence";

export default function Competences() {

	return (

		<div className="">

			<div className="border-b border-gray-200 pb-5 mb-5">

				<h3 className="text-base font-semibold leading-6 text-gray-900">Compétences</h3>
			</div>

			<div className="flex gap-2 flex-wrap">

				<Competence text="HTML" />

				<Competence text="CSS" />

				<Competence text="Javascript" />

				<Competence text="Typescript" />

				<Competence text="C" />

				<Competence text="C++" />

				<Competence text="Python" />

				<Competence text="Git" />

				<Competence text="Docker" />

				<Competence text="SQL" />

				<Competence text="Travail d'équipe" />

				<Competence text="Autonomie" />

				<Competence text="Rigueur" />
			</div>
		</div>
	)
}