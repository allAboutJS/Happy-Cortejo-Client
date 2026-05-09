import { Car, Clock, Globe, Heart, ShieldCheck, Tags } from "lucide-react";
import { Container, Section } from "@/components/ui/SectionHeader";
import { APP_NAME, WHY_US } from "@/constants";

const iconMap = { ShieldCheck, Heart, Tags, Clock, Car, Globe };

function TrustCard({ item }) {
	const Icon = iconMap[item.icon] || ShieldCheck;

	return (
		<div className="flex gap-5">
			<div className="shrink-0 w-12 h-12 rounded-xl bg-(--color-gold-light) flex items-center justify-center mt-0.5">
				<Icon size={22} className="text-(--color-gold-dark)" />
			</div>
			<div>
				<h3 className="font-display text-lg text-(--color-navy) mb-2">
					{item.title}
				</h3>
				<p className="text-(--color-muted) text-sm font-body leading-relaxed">
					{item.description}
				</p>
			</div>
		</div>
	);
}

export function WhyUsSection() {
	return (
		<Section className="bg-white">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
					{/* Left — image */}
					<div className="relative order-2 lg:order-1">
						<div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-elevated">
							<img
								src="/images/photo-1449965408869-eaa3f722e40d.jpg"
								alt="Professional chauffeur with premium vehicle in Lisbon"
								className="w-full h-full object-cover"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-(--color-navy)/30 to-transparent" />
						</div>
						{/* Floating stat card */}
						<div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl p-5 shadow-elevated">
							<div className="text-3xl font-display text-(--color-gold) font-bold">
								500+
							</div>
							<div className="text-sm text-(--color-muted) font-body">
								Happy journeys
							</div>
						</div>
						<div className="absolute -top-4 -left-4 md:-left-8 bg-(--color-navy) rounded-2xl p-4 shadow-elevated">
							<div className="text-2xl font-display text-white font-bold">
								4.9
							</div>
							<div className="flex gap-0.5 my-1">
								{[1, 2, 3, 4, 5].map((i) => (
									<span key={i} className="text-(--color-gold) text-xs">
										★
									</span>
								))}
							</div>
							<div className="text-gray-300 text-xs font-body">
								Average rating
							</div>
						</div>
					</div>

					{/* Right — content */}
					<div className="order-1 lg:order-2">
						<span className="text-xs font-semibold tracking-widest uppercase font-body text-(--color-gold) mb-4 block">
							Why Choose Us
						</span>
						<h2 className="font-display text-3xl md:text-4xl text-(--color-navy) mb-4">
							More Than a Ride.
							<span className="block text-(--color-gold)">An Experience.</span>
						</h2>
						<p className="text-(--color-muted) font-body text-lg leading-relaxed mb-10">
							{APP_NAME} was built for travelers who value their time, comfort,
							and peace of mind. We don't cut corners.
						</p>
						<div className="grid grid-cols-1 gap-8">
							{WHY_US.map((item) => (
								<TrustCard key={item.title} item={item} />
							))}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}
