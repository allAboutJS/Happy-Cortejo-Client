import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
	Container,
	Section,
	SectionHeader,
} from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/constants";
import { cn } from "@/lib/cn";

function FAQItem({ item }) {
	const [open, setOpen] = useState(false);

	return (
		<div className="border border-(--color-border) rounded-xl overflow-hidden bg-white">
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-(--color-cream) transition-colors"
				aria-expanded={open}
			>
				<span className="font-semibold font-body text-(--color-navy) pr-4">
					{item.question}
				</span>
				<ChevronDown
					size={18}
					className={cn(
						"text-(--color-gold) shrink-0 transition-transform duration-200",
						open && "rotate-180",
					)}
				/>
			</button>
			<div
				className={cn(
					"overflow-hidden transition-all duration-300",
					open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
				)}
			>
				<p className="px-5 md:px-6 pb-5 text-(--color-muted) font-body leading-relaxed text-sm md:text-base">
					{item.answer}
				</p>
			</div>
		</div>
	);
}

export function FAQSection() {
	return (
		<Section className="bg-white">
			<Container>
				<div className="max-w-2xl mx-auto">
					<SectionHeader
						badge="FAQ"
						title="Common Questions"
						subtitle="Everything you need to know before your ride."
					/>
					<div className="space-y-3">
						{FAQ_ITEMS.map((item) => (
							<FAQItem key={item.question} item={item} />
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
}
