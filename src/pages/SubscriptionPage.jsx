import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/ui/PageHeader";
import {
	Container,
	Section,
	SectionHeader,
} from "@/components/ui/SectionHeader";

const plans = [
	{
		name: "Starter",
		price: "€299",
		period: "/month",
		rides: "10 rides",
		features: [
			"Up to 10 rides per month",
			"Sedan vehicle",
			"Lisbon area only",
			"Standard scheduling",
			"WhatsApp support",
		],
	},
	{
		name: "Professional",
		price: "€599",
		period: "/month",
		rides: "25 rides",
		featured: true,
		features: [
			"Up to 25 rides per month",
			"Sedan or SUV",
			"Greater Lisbon region",
			"Priority scheduling",
			"Dedicated driver",
			"Priority WhatsApp line",
		],
	},
	{
		name: "Executive",
		price: "Custom",
		period: "",
		rides: "Unlimited",
		features: [
			"Unlimited rides",
			"Premium fleet",
			"Nationwide coverage",
			"Personal account manager",
			"Dedicated driver team",
			"24/7 concierge line",
		],
	},
];

export function SubscriptionPage() {
	return (
		<>
			<PageHeader
				badge="Subscription Chauffeur"
				title="Your Personal Driver. Every Month."
				subtitle="Stop booking one-off rides. Get a monthly plan with a consistent driver, predictable pricing, and zero friction."
				image="/images/photo-1590362891991-f776e747a588.jpg"
			/>

			<Section className="bg-(--color-cream)">
				<Container>
					<SectionHeader
						badge="Monthly Plans"
						title="Simple, Transparent Subscription Pricing"
						subtitle="No hidden fees, no meters, no surprises. One monthly price for consistent premium transport."
					/>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{plans.map((plan) => (
							<div
								key={plan.name}
								className={`rounded-2xl p-8 border-2 ${
									plan.featured
										? "border-(--color-gold) bg-(--color-navy) shadow-elevated md:scale-105"
										: "border-(--color-border) bg-white shadow-card"
								}`}
							>
								{plan.featured && (
									<div className="inline-block bg-(--color-gold) text-white text-xs font-semibold font-body px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
										Most Popular
									</div>
								)}
								<h3
									className={`font-display text-xl mb-1 ${plan.featured ? "text-white" : "text-(--color-navy)"}`}
								>
									{plan.name}
								</h3>
								<div
									className={`font-display font-bold mb-4 ${plan.featured ? "text-(--color-gold)" : "text-(--color-navy)"}`}
								>
									<span className="text-4xl">{plan.price}</span>
									<span
										className={`text-base font-body font-normal ml-1 ${plan.featured ? "text-gray-400" : "text-(--color-muted)"}`}
									>
										{plan.period}
									</span>
								</div>
								<div
									className={`text-sm font-body mb-6 pb-6 border-b ${plan.featured ? "text-(--color-gold-light) border-white/10" : "text-(--color-muted) border-(--color-border)"}`}
								>
									{plan.rides} included
								</div>
								<ul className="space-y-3 mb-8">
									{plan.features.map((f) => (
										<li
											key={f}
											className={`flex items-start gap-2 text-sm font-body ${plan.featured ? "text-gray-300" : "text-(--color-muted)"}`}
										>
											<span className="text-(--color-gold) mt-0.5">✓</span> {f}
										</li>
									))}
								</ul>
								<a
									href="/contact"
									className={`block text-center py-3 rounded-xl font-semibold font-body text-sm transition-all ${
										plan.featured
											? "bg-(--color-gold) text-white hover:bg-(--color-gold-dark)"
											: "border-2 border-(--color-navy) text-(--color-navy) hover:bg-(--color-navy) hover:text-white"
									}`}
								>
									Get Started
								</a>
							</div>
						))}
					</div>
					<p className="text-center text-(--color-muted) text-sm font-body mt-8">
						All plans include a free onboarding call. Cancel anytime with 30
						days notice.
					</p>
				</Container>
			</Section>

			<CTASection />
		</>
	);
}
