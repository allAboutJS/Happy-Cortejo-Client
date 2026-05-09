import {
	ArrowRight,
	Briefcase,
	Home,
	Key,
	MapPin,
	Moon,
	Plane,
	RefreshCw,
	UserCheck,
	Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
	Container,
	Section,
	SectionHeader,
} from "@/components/ui/SectionHeader";
import { SERVICES } from "@/constants";
import { cn } from "@/lib/cn";

const iconMap = {
	Plane,
	MapPin,
	UserCheck,
	Home,
	Key,
	Moon,
	Briefcase,
	Zap,
	RefreshCw,
};

function ServiceCard({ service }) {
	const Icon = iconMap[service.icon] || MapPin;
	const isGold = service.color === "gold";

	return (
		<Link
			to={service.href}
			className="group block bg-white rounded-(--radius-card) p-6 shadow-card hover-lift border border-(--color-border) hover:border-(--color-gold)/40 transition-all duration-200"
		>
			{/* Icon */}
			<div
				className={cn(
					"w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200",
					isGold
						? "bg-(--color-gold-light) group-hover:bg-(--color-gold)"
						: "bg-(--color-navy)/8 group-hover:bg-(--color-navy)",
				)}
			>
				<Icon
					size={22}
					className={cn(
						"transition-colors duration-200",
						isGold
							? "text-(--color-gold-dark) group-hover:text-white"
							: "text-(--color-navy) group-hover:text-white",
					)}
				/>
			</div>

			{/* Content */}
			<h3 className="font-display text-lg text-(--color-navy) mb-2 group-hover:text-(--color-gold) transition-colors duration-200">
				{service.title}
			</h3>
			<p className="text-(--color-muted) text-sm font-body leading-relaxed mb-5">
				{service.description}
			</p>

			{/* CTA */}
			<span className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-(--color-gold) group-hover:gap-2.5 transition-all duration-200">
				Learn more <ArrowRight size={14} />
			</span>
		</Link>
	);
}

export function ServicesSection() {
	return (
		<Section id="services" className="bg-(--color-cream)">
			<Container>
				<SectionHeader
					badge="Our Services"
					title="Everything You Need to Move Through Portugal"
					subtitle="From a quick airport transfer to a cross-country chauffeur experience — we handle every journey with care."
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
					{SERVICES.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
			</Container>
		</Section>
	);
}
