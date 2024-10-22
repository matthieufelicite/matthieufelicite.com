import {Linkedin, Mail, MapPinHouse, Phone} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {

	return (

		<div>

			<div className="border-b border-gray-200 pb-4 mb-4">

				<h3 className="text-base font-semibold leading-6 text-gray-900">Informations de contact</h3>
			</div>

			<div className="flex gap-4 flex-col sm:flex-row">

				<Link href={"mailto:contact@matthieufelicite.com"} className={buttonVariants({variant: "outline"})}>

					<Mail className="w-4 h-4" />

					contact@matthieufelicite.com
				</Link>

				<Link href="https://www.linkedin.com/in/matthieufelicite/" className={buttonVariants({variant: "outline"})}>

					<Linkedin className="w-4 h-4" />

					Linkedin
				</Link>

				<Link href="tel:+33612796987" className={buttonVariants({variant: "outline"})}>

					<Phone className="w-4 h-4" />

					06 12 79 69 87
				</Link>

				<Link href="https://maps.app.goo.gl/TK17GVYzenE6PpVz6" className={buttonVariants({variant: "outline"})}>

					<MapPinHouse className="w-4 h-4" />

					92500 Rueil-Malmaison
				</Link>
			</div>
		</div>
	)
}