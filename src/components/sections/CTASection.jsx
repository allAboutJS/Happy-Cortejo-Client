import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/SectionHeader";
import { WHATSAPP_MESSAGE, WHATSAPP_URL } from "@/constants";

export function CTASection() {
	return (
		<section className="bg-(--color-navy) py-20 md:py-28 relative overflow-hidden">
			{/* Decorative */}
			<div
				className="absolute top-0 right-0 w-72 h-72 rounded-full bg-(--color-gold)/8 -translate-y-1/2 translate-x-1/2"
				aria-hidden="true"
			/>
			<div
				className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2"
				aria-hidden="true"
			/>

			<Container className="relative z-10 text-center">
				<span className="text-xs font-semibold tracking-widest uppercase font-body text-(--color-gold) mb-5 block">
					Ready to Travel?
				</span>
				<h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight">
					Need a ride today?
					<span className="block text-(--color-gold)">Message us now.</span>
				</h2>
				<p className="text-gray-300 font-body text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
					Whether it is a scheduled transfer or a last-minute request, we
					respond fast and deliver a premium experience every time.
				</p>
				<div className="flex flex-wrap gap-4 justify-center">
					<Button
						as="a"
						href={`${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`}
						target="_blank"
						rel="noopener noreferrer"
						variant="whatsapp"
						size="lg"
					>
						<Phone size={18} />
						Chat on WhatsApp
					</Button>
					<Button as={Link} to="/book" variant="white" size="lg">
						Book Online
						<ArrowRight size={18} />
					</Button>
				</div>
			</Container>
		</section>
	);
}
