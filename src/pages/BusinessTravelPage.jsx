import { Briefcase, FileText, Star, UserCheck } from "lucide-react";
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
		icon: Briefcase,
		title: "Corporate Accounts",
		desc: "Monthly invoicing, multiple traveler profiles, and a dedicated account manager.",
	},
	{
		icon: UserCheck,
		title: "Meet & Greet",
		desc: "Professional driver in the arrivals hall with a name sign. First impressions matter.",
	},
	{
		icon: FileText,
		title: "Clean Invoicing",
		desc: "VAT-compliant invoices for every ride. Expense reporting made simple.",
	},
	{
		icon: Star,
		title: "Priority Booking",
		desc: "Corporate clients jump the queue. Your ride is always confirmed first.",
	},
];

const packages = [
	{
		name: "Day Package",
		price: "From €280",
		duration: "Per day",
		features: [
			"Dedicated driver for 8 hours",
			"Premium sedan or SUV",
			"Airport pickups included",
			"Unlimited stops",
		],
	},
	{
		name: "Conference Package",
		price: "Custom",
		duration: "Multi-day",
		features: [
			"Dedicated driver team",
			"Multiple vehicles available",
			"Event coordination",
			"Priority support line",
		],
		featured: true,
	},
	{
		name: "Executive Transfer",
		price: "From €85",
		duration: "Per transfer",
		features: [
			"Point-to-point transfer",
			"Premium vehicle",
			"Flight monitoring",
			"Complimentary wait time",
		],
	},
];

export function BusinessTravelPage() {
	return (
		<>
			<PageHeader
				badge="Business Travel"
				title="Professional Transport for Corporate Clients"
				subtitle="Reliable, discreet, and fully coordinated business travel services across Portugal."
				image="/images/photo-1521791136064-7986c2920216.jpg"
			/>

			<Section className="bg-(--color-cream)">
				<Container>
					<SectionHeader
						badge="Corporate Services"
						title="Built for Business Travelers"
						subtitle="We understand that your time is valuable and your image matters."
					/>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{features.map(({ icon: Icon, title, desc }) => (
							<Card key={title}>
								<CardBody>
									<div className="w-11 h-11 rounded-xl bg-(--color-navy)/8 flex items-center justify-center mb-4">
										<Icon size={20} className="text-(--color-navy)" />
									</div>
									<h3 className="font-display text-base text-(--color-navy) mb-2">
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
					<SectionHeader badge="Packages" title="Choose Your Business Plan" />
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						{packages.map((pkg) => (
							<div
								key={pkg.name}
								className={`rounded-2xl p-8 border-2 transition-all ${
									pkg.featured
										? "border-(--color-gold) bg-(--color-navy) text-white shadow-elevated scale-105"
										: "border-(--color-border) bg-white shadow-card"
								}`}
							>
								<h3
									className={`font-display text-xl mb-1 ${pkg.featured ? "text-white" : "text-(--color-navy)"}`}
								>
									{pkg.name}
								</h3>
								<div
									className={`text-3xl font-display font-bold mb-1 ${pkg.featured ? "text-(--color-gold)" : "text-(--color-navy)"}`}
								>
									{pkg.price}
								</div>
								<div
									className={`text-sm mb-6 font-body ${pkg.featured ? "text-gray-400" : "text-(--color-muted)"}`}
								>
									{pkg.duration}
								</div>
								<ul className="space-y-3 mb-8">
									{pkg.features.map((f) => (
										<li
											key={f}
											className={`flex items-center gap-2 text-sm font-body ${pkg.featured ? "text-gray-300" : "text-(--color-muted)"}`}
										>
											<span className="text-(--color-gold)">✓</span> {f}
										</li>
									))}
								</ul>
								<a
									href="/contact"
									className={`block text-center py-3 rounded-xl font-semibold font-body text-sm transition-all ${
										pkg.featured
											? "bg-(--color-gold) text-white hover:bg-(--color-gold-dark)"
											: "border-2 border-(--color-navy) text-(--color-navy) hover:bg-(--color-navy) hover:text-white"
									}`}
								>
									Get a Quote
								</a>
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
