import Image from "next/image";

export interface Experience {

	id: number;
	company: string;
	position: string;
	start: string;
	end: string;
	image: string;
}

interface Props {

	title: string;
	experiences: Experience[];
}

export default function Section({title, experiences}: Props) {

	return (

		<div>

			<div className="border-b border-gray-200 pb-5">

				<h3 className="text-base font-semibold leading-6 text-gray-900">{ title }</h3>
			</div>

			<ul role="list" className="divide-y divide-gray-100">

				{experiences.map((experience) => (

					<li key={experience.id} className="flex justify-between gap-x-6 py-5">

						<div className="flex min-w-0 gap-x-4">

							<Image alt="" src={experience.image} className="flex-none" width={42} height={42} />

							<div className="min-w-0 flex-auto">

								<p className="text-sm font-semibold leading-6 text-gray-900">{experience.company}</p>

								<p className="mt-1 truncate text-xs leading-5 text-gray-500">{experience.position}</p>
							</div>
						</div>

						<div className="shrink-0 flex flex-col sm:items-end justify-center">

							<p className="text-sm leading-6 text-gray-900">{experience.start} - {experience.end}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
