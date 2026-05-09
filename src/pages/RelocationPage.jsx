import { BookingFormSection } from "@/components/sections/BookingFormSection";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardBody } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import {
	Container,
	Section,
	SectionHeader,
} from "@/components/ui/SectionHeader";

const steps = [
	{
		step: "01",
		title: "Airport Arrival Transfer",
		desc: "First impression of your new home country starts right. We pick you up and make it feel easy.",
	},
	{
		step: "02",
		title: "Property Viewings",
		desc: "Scheduled rides to multiple property viewings across the city on your terms.",
	},
	{
		step: "03",
		title: "Admin & Services",
		desc: "Transport to the tax office, immigration centers, and other administrative locations.",
	},
	{
		step: "04",
		title: "Ongoing Support",
		desc: "A trusted driver for your first weeks and months in Portugal as you settle in.",
	},
];

export function RelocationPage() {
	return (
		<>
			<PageHeader
				badge="Relocation Concierge"
				title="Moving to Portugal? We Make It Smoother."
				subtitle="Expats trust us to handle the transport side of relocation — from arrival day to settled life."
				image="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1200&q=80"
			/>

			<Section className="bg-(--color-cream)">
				<Container>
					<SectionHeader
						badge="The Process"
						title="Your Relocation Journey, Supported"
						subtitle="We cover every transport moment of your move to Portugal."
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{steps.map((step) => (
							<Card key={step.step}>
								<CardBody>
									<div className="text-4xl font-display text-(--color-gold-light) font-bold mb-4">
										{step.step}
									</div>
									<h3 className="font-display text-base text-(--color-navy) mb-2">
										{step.title}
									</h3>
									<p className="text-(--color-muted) text-sm font-body leading-relaxed">
										{step.desc}
									</p>
								</CardBody>
							</Card>
						))}
					</div>
				</Container>
			</Section>

			<Section className="bg-white">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
						<div>
							<span className="text-xs font-semibold tracking-widest uppercase font-body text-(--color-gold) mb-4 block">
								Why Expats Choose Us
							</span>
							<h2 className="font-display text-3xl md:text-4xl text-(--color-navy) mb-6">
								Transport is the First Thing You Need
							</h2>
							<p className="text-(--color-muted) font-body leading-relaxed mb-8">
								When you land in a new country, everything is overwhelming. We
								remove the transport complexity entirely so you can focus on
								building your new life in Portugal.
							</p>
							<div className="space-y-4">
								{[
									"English-speaking, patient drivers",
									"Flexible scheduling around your pace",
									"Single point of contact throughout",
									"Package pricing for multiple rides",
								].map((item) => (
									<div
										key={item}
										className="flex items-center gap-3 text-(--color-charcoal) font-body"
									>
										<span className="w-5 h-5 rounded-full bg-(--color-gold-light) text-(--color-gold-dark) text-xs flex items-center justify-center font-bold shrink-0">
											✓
										</span>
										{item}
									</div>
								))}
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden aspect-square shadow-card">
							<img
								src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&q=75"
								alt="Moving to Lisbon, Portugal"
								className="w-full h-full object-cover"
								loading="lazy"
							/>
						</div>
					</div>
				</Container>
			</Section>

			<BookingFormSection />
			<CTASection />
		</>
	);
}
