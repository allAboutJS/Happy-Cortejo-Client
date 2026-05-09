import { CheckCircle, Clock, Plane, Shield } from "lucide-react";
import { BookingFormSection } from "@/components/sections/BookingFormSection";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardBody } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import {
	Container,
	Section,
	SectionHeader,
} from "@/components/ui/SectionHeader";

const features = [
	{
		icon: Plane,
		title: "Flight Monitoring",
		desc: "We track your flight in real time. Delays? We adjust automatically at no extra cost.",
	},
	{
		icon: Clock,
		title: "Always On Time",
		desc: "Our drivers arrive 15 minutes early. You should never wait at the airport.",
	},
	{
		icon: Shield,
		title: "Meet & Greet",
		desc: "Your driver waits in the arrivals hall with a name sign. Relax — we have you covered.",
	},
	{
		icon: CheckCircle,
		title: "Fixed Prices",
		desc: "No meters, no surprises. The price you see is the price you pay.",
	},
];

const airports = [
	{
		name: "Lisbon Humberto Delgado Airport",
		code: "LIS",
		note: "Our primary hub",
	},
	{
		name: "Porto Francisco Sá Carneiro",
		code: "OPO",
		note: "Available on request",
	},
	{ name: "Faro Airport", code: "FAO", note: "Algarve transfers" },
];

export function AirportTransfersPage() {
	return (
		<>
			<PageHeader
				badge="Airport Transfers"
				title="Stress-Free Airport Rides Across Portugal"
				subtitle="Private transfers to and from all major Portuguese airports. Flight tracked, driver waiting, bags handled."
				image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
			/>

			<Section className="bg-(--color-cream)">
				<Container>
					<SectionHeader
						badge="How It Works"
						title="Seamless from Terminal to Doorstep"
						subtitle="Book once and we handle everything. From flight monitoring to door-to-door delivery."
					/>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{features.map(({ icon: Icon, title, desc }) => (
							<Card key={title} className="p-6">
								<CardBody className="p-0">
									<div className="w-11 h-11 rounded-xl bg-(--color-gold-light) flex items-center justify-center mb-4">
										<Icon size={20} className="text-(--color-gold-dark)" />
									</div>
									<h3 className="font-display text-lg text-(--color-navy) mb-2">
										{title}
									</h3>
									<p className="text-(--color-muted) text-sm font-body leading-relaxed">
										{desc}
									</p>
								</CardBody>
							</Card>
						))}
					</div>
				</Container>
			</Section>

			<Section className="bg-white">
				<Container>
					<SectionHeader
						badge="Airports We Serve"
						title="Available Across Portugal"
					/>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
						{airports.map((airport) => (
							<div
								key={airport.code}
								className="text-center p-8 bg-(--color-cream) rounded-2xl border border-(--color-border)"
							>
								<div className="text-3xl font-display text-(--color-gold) font-bold mb-2">
									{airport.code}
								</div>
								<h3 className="font-semibold font-body text-(--color-navy) mb-1 text-sm">
									{airport.name}
								</h3>
								<p className="text-xs text-(--color-muted) font-body">
									{airport.note}
								</p>
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
