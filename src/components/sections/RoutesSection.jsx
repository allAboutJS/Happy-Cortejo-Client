import { ArrowRight, Car, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import {
	Container,
	Section,
	SectionHeader,
} from "@/components/ui/SectionHeader";
import { ROUTES_DATA } from "@/constants";
import { cn } from "@/lib/cn";

function RouteCard({ route }) {
	return (
		<div
			className={cn(
				"group bg-white rounded-(--radius-card) p-6 shadow-card border border-(--color-border)",
				"hover:border-(--color-gold)/40 hover:shadow-elevated transition-all duration-200 hover:-translate-y-1",
			)}
		>
			{/* Route header */}
			<div className="flex items-start justify-between mb-5">
				<div className="flex-1">
					<div className="flex items-center gap-2 mb-1">
						<MapPin size={13} className="text-(--color-gold)" />
						<span className="text-xs font-body text-(--color-muted) font-medium">
							{route.from}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-3 h-px bg-(--color-gold)" />
						<ArrowRight size={12} className="text-(--color-gold)" />
					</div>
					<h3 className="font-display text-xl text-(--color-navy) mt-1 group-hover:text-(--color-gold) transition-colors">
						{route.to}
					</h3>
				</div>
				{route.popular && <Badge variant="gold">Popular</Badge>}
			</div>

			{/* Meta */}
			<div className="flex items-center gap-4 mb-5 pb-5 border-b border-(--color-border)">
				<div className="flex items-center gap-1.5 text-sm text-(--color-muted) font-body">
					<Clock size={13} />
					{route.duration}
				</div>
				<div className="flex items-center gap-1.5 text-sm text-(--color-muted) font-body">
					<Car size={13} />
					{route.vehicle}
				</div>
			</div>

			{/* Price + CTA */}
			<div className="flex items-center justify-between">
				<div>
					<p className="text-xs text-(--color-muted) font-body">Starts at</p>
					<p className="font-display text-2xl text-(--color-navy) font-bold">
						{route.price}
					</p>
				</div>
				<Link
					to="/book"
					className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-(--color-gold) bg-(--color-gold-light)/60 hover:bg-(--color-gold) hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
				>
					Book
					<ArrowRight size={13} />
				</Link>
			</div>
		</div>
	);
}

export function RoutesSection() {
	return (
		<Section className="bg-(--color-cream)">
			<Container>
				<SectionHeader
					badge="Popular Routes"
					title="The Journeys We Love to Do"
					subtitle="Set prices, fixed departure points, and zero surprises. Your ride is confirmed the moment you book."
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
					{ROUTES_DATA.map((route) => (
						<RouteCard key={route.id} route={route} />
					))}
				</div>
			</Container>
		</Section>
	);
}
