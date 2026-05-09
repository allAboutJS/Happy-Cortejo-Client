import { Quote, Star } from "lucide-react";
import {
	Container,
	Section,
	SectionHeader,
} from "@/components/ui/SectionHeader";
import { REVIEWS } from "@/constants";

function StarRating({ rating }) {
	return (
		<div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
			{[1, 2, 3, 4, 5].map((i) => (
				<Star
					key={i}
					size={14}
					className={
						i <= rating
							? "text-(--color-gold) fill-current"
							: "text-gray-200 fill-current"
					}
				/>
			))}
		</div>
	);
}

function ReviewCard({ review }) {
	return (
		<div className="bg-white rounded-(--radius-card) p-7 shadow-card border border-(--color-border) flex flex-col">
			{/* Quote icon */}
			<div className="mb-5">
				<Quote size={24} className="text-(--color-gold-light)" />
			</div>

			{/* Stars */}
			<StarRating rating={review.rating} />

			{/* Text */}
			<p className="text-(--color-charcoal) font-body leading-relaxed mt-4 mb-6 flex-1 text-sm md:text-base">
				"{review.text}"
			</p>

			{/* Author */}
			<div className="flex items-center gap-4 pt-5 border-t border-(--color-border)">
				<div className="w-10 h-10 rounded-full bg-(--color-navy) flex items-center justify-center shrink-0">
					<span className="text-white text-sm font-display font-bold">
						{review.avatar}
					</span>
				</div>
				<div className="min-w-0">
					<p className="font-semibold font-body text-(--color-navy) text-sm truncate">
						{review.name}
					</p>
					<p className="text-(--color-muted) text-xs font-body truncate">
						{review.location}
					</p>
				</div>
				<div className="ml-auto text-right shrink-0">
					<p className="text-(--color-gold) text-xs font-semibold font-body">
						{review.route}
					</p>
					<p className="text-gray-400 text-xs font-body">{review.date}</p>
				</div>
			</div>
		</div>
	);
}

export function ReviewsSection() {
	return (
		<Section className="bg-(--color-cream)">
			<Container>
				<SectionHeader
					badge="Customer Reviews"
					title="What Travelers Say About Us"
					subtitle="Real stories from real guests. No scripts, no filler — just honest feedback from people who trusted us with their journey."
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
					{REVIEWS.map((review) => (
						<ReviewCard key={review.id} review={review} />
					))}
				</div>
				<div className="mt-10 text-center">
					<p className="text-(--color-muted) text-sm font-body">
						⭐️ Rated 4.9/5 based on verified customer reviews ·{" "}
						<span className="text-(--color-gold) font-semibold">
							Google Reviews integration coming soon
						</span>
					</p>
				</div>
			</Container>
		</Section>
	);
}
