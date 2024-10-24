import {Linkedin, Mail, MapPinHouse, Phone} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";

interface Props {

	email: string;
	telephone: string;
	tel: string;
	linkedin: string;
	adress: string;
	adressLink: string;
}

export default function Contact({email, telephone, tel, linkedin, adress, adressLink}: Props) {

	return (

		<div>

			<div className="border-b border-gray-200 pb-4 mb-4">

				<h3 className="text-base font-semibold leading-6 text-gray-900">Informations de contact</h3>
			</div>

			<div className="flex gap-4 flex-col sm:flex-row">

				<Link href={"mailto:" + email} className={buttonVariants({variant: "outline", className: "flex-1"})}>

					<Mail className="w-4 h-4" />

					{email}
				</Link>

				<Link href={linkedin} className={buttonVariants({variant: "outline", className: "flex-1"})}>

					<Linkedin className="w-4 h-4" />

					Linkedin
				</Link>

				<Link href={"tel:" + tel} className={buttonVariants({variant: "outline", className: "flex-1"})}>

					<Phone className="w-4 h-4" />

					{telephone}
				</Link>

				<Link href={adressLink} className={buttonVariants({variant: "outline", className: "flex-1"})}>

					<MapPinHouse className="w-4 h-4" />

					{adress}
				</Link>
			</div>
		</div>
	)
}