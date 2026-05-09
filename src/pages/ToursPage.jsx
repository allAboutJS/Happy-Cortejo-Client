import { Camera, Clock, MapPin, Users } from "lucide-react";
import { BookingFormSection } from "@/components/sections/BookingFormSection";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import {
	Container,
	Section,
	SectionHeader,
} from "@/components/ui/SectionHeader";

const tours = [
	{
		name: "Sintra Palace Day",
		description:
			"Explore the fairy-tale palaces and lush gardens of UNESCO-listed Sintra. We wait, you explore.",
		duration: "Full day",
		distance: "40 min from Lisbon",
		image:
			"https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=75",
		popular: true,
	},
	{
		name: "Cascais Coastal Tour",
		description:
			"Discover charming fishing villages, dramatic sea cliffs, and the beautiful Cascais waterfront.",
		duration: "Half or full day",
		distance: "45 min from Lisbon",
		image:
			"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=75",
		popular: false,
	},
	{
		name: "Alentejo Wine Country",
		description:
			"Roll through golden plains and visit world-class wineries in Portugal's finest wine region.",
		duration: "Full day",
		distance: "1h 30 min from Lisbon",
		image:
			"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75",
		popular: false,
	},
	{
		name: "Óbidos Medieval Town",
		description:
			"Step inside the perfectly preserved medieval walls of Óbidos and enjoy ginjinha in a chocolate cup.",
		duration: "Half day",
		distance: "1h from Lisbon",
		image:
			"https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=600&q=75",
		popular: true,
	},
];

export function ToursPage() {
	return (
		<>
			<PageHeader
				badge="Tours & Day Trips"
				title="Discover Portugal at Your Own Pace"
				subtitle="Private day excursions from Lisbon with a dedicated driver. No groups, no rush — just you and the road."
				image="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80"
			/>

			<Section className="bg-(--color-cream)">
				<Container>
					<SectionHeader
						badge="Day Trips"
						title="Curated Destinations"
						subtitle="Every destination is paired with a knowledgeable driver who respects your rhythm."
					/>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
						{tours.map((tour) => (
							<Card key={tour.name} hover className="overflow-hidden">
								<div className="relative aspect-4/3 overflow-hidden">
									<img
										src={tour.image}
										alt={tour.name}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
										loading="lazy"
									/>
									{tour.popular && (
										<div className="absolute top-3 left-3">
											<Badge variant="gold">Popular</Badge>
										</div>
									)}
								</div>
								<CardBody>
									<h3 className="font-display text-lg text-(--color-navy) mb-2">
										{tour.name}
									</h3>
									<p className="text-(--color-muted) text-sm font-body leading-relaxed mb-4">
										{tour.description}
									</p>
									<div className="flex flex-wrap gap-3 text-xs font-body text-(--color-muted)">
										<span className="flex items-center gap-1">
											<Clock size={12} />
											{tour.duration}
										</span>
										<span className="flex items-center gap-1">
											<MapPin size={12} />
											{tour.distance}
										</span>
									</div>
								</CardBody>
							</Card>
						))}
					</div>
				</Container>
			</Section>

			<Section className="bg-white">
				<Container>
					<div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
						{[
							{
								icon: Users,
								title: "Private Only",
								desc: "Just your group. Never shared with strangers.",
							},
							{
								icon: Clock,
								title: "Your Schedule",
								desc: "Depart and return on your timeline.",
							},
							{
								icon: Camera,
								title: "Local Knowledge",
								desc: "Drivers who know the best spots and hidden gems.",
							},
						].map(({ icon: Icon, title, desc }) => (
							<div key={title}>
								<div className="w-12 h-12 rounded-xl bg-(--color-gold-light) flex items-center justify-center mx-auto mb-4">
									<Icon size={20} className="text-(--color-gold-dark)" />
								</div>
								<h3 className="font-display text-lg text-(--color-navy) mb-2">
									{title}
								</h3>
								<p className="text-(--color-muted) text-sm font-body">{desc}</p>
							</div>
						))}
					</div>
				</Container>
			</Section>

			<BookingFormSection />
			<CTASection />
		</>
	);
}
