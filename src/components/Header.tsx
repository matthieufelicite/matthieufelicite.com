import Image from "next/image";

interface Props {

	name: string;
	position: string;
	description: string;
	picture: string;
}

export default function Header({ name, position, description, picture }: Props) {

	return (

		<div className="flex justify-between items-stretch">

			<div className="mx-auto max-w-2xl lg:mx-0">

				<p className="text-base font-semibold leading-7 text-indigo-600">{position}</p>

				<h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">{name}</h2>

				<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">{description}</p>
			</div>

			<div className="sm:flex items-center hidden">

				<div className="relative w-44 h-44">

					<Image className="rounded-full object-cover" src={ picture } alt="Photo de profil" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
				</div>
			</div>
		</div>
	);
}