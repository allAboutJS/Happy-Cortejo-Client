import { ChevronRight, Clock, Phone, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MESSAGE, WHATSAPP_URL } from "@/constants";
import backgroundImage from "/images/photo-1558618666-fcd25c85cd64.jpg";

export function HeroSection() {
	return (
		<section className="relative min-h-[92vh] flex items-center overflow-hidden bg-(--color-navy)">
			{/* Background image overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}
				aria-hidden="true"
			/>
			<div
				className="absolute inset-0 bg-linear-to-r from-(--color-navy)/95 via-(--color-navy)/80 to-(--color-navy)/30"
				aria-hidden="true"
			/>
			<div
				className="absolute inset-0 bg-linear-to-t from-(--color-navy)/60 via-transparent to-transparent"
				aria-hidden="true"
			/>

			{/* Decorative gold line */}
			<div
				className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-(--color-gold) to-transparent"
				aria-hidden="true"
			/>

			<div className="container-base relative z-10 py-20">
				<div className="max-w-2xl">
					{/* Trust badge */}
					<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
						<Star size={13} className="text-(--color-gold) fill-current" />
						<span className="text-white text-xs font-body font-medium tracking-wide">
							Premium Private Transport · Lisbon, Portugal
						</span>
					</div>

					{/* Headline */}
					<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-[1.1]">
						Your Happy Ride
						<span className="block text-(--color-gold)">Across Portugal</span>
					</h1>

					{/* Subtext */}
					<p className="text-gray-300 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-lg">
						Private airport transfers, city rides, day trips, business travel,
						and relocation support in Lisbon and beyond.
					</p>

					{/* CTAs */}
					<div className="flex flex-wrap gap-4 mb-14">
						<Button
							as="a"
							href={`${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`}
							target="_blank"
							rel="noopener noreferrer"
							variant="whatsapp"
							size="lg"
						>
							<Phone size={18} />
							Book on WhatsApp
						</Button>
						<Button as={Link} to="/#services" variant="white" size="lg">
							View Services
							<ChevronRight size={18} />
						</Button>
					</div>

					{/* Trust indicators */}
					<div className="flex flex-wrap gap-6">
						{[
							{ icon: Shield, text: "Licensed & Insured" },
							{ icon: Clock, text: "24/7 Available" },
							{ icon: Star, text: "5-Star Rated" },
						].map(({ icon: Icon, text }) => (
							<div key={text} className="flex items-center gap-2 text-gray-300">
								<Icon size={15} className="text-(--color-gold)" />
								<span className="text-sm font-body font-medium">{text}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Scroll hint */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
				<div className="w-px h-8 bg-white/40" />
				<span className="text-white/60 text-xs font-body tracking-widest uppercase">
					Scroll
				</span>
			</div>
		</section>
	);
}
