import Competence from "@/components/Competence";
import CompetenceType from "@/lib/interfaces/CompetenceType";

interface Props {

	competences: CompetenceType[];
}

export default function Competences({competences}: Props) {

	return (

		<div className="">

			<div className="border-b border-gray-200 pb-5 mb-5">

				<h3 className="text-base font-semibold leading-6 text-gray-900">Compétences</h3>
			</div>

			<div className="flex gap-2 flex-wrap">

				{competences.map((competence: CompetenceType) => (

					<Competence key={competence.id} text={competence.label}/>
				))}
			</div>
		</div>
	)
}