import { cn } from "@/lib/cn";

export function SectionHeader({
	badge,
	title,
	subtitle,
	centered = true,
	light = false,
	className,
}) {
	return (
		<div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
			{badge && (
				<span
					className={cn(
						"inline-block mb-4 text-xs font-semibold tracking-widest uppercase font-body",
						light ? "text-(--color-gold-light)" : "text-(--color-gold)",
					)}
				>
					{badge}
				</span>
			)}
			<h2
				className={cn(
					"font-display text-3xl md:text-4xl lg:text-5xl mb-4",
					light ? "text-white" : "text-(--color-navy)",
				)}
			>
				{title}
			</h2>
			{subtitle && (
				<p
					className={cn(
						"text-lg md:text-xl max-w-2xl font-body leading-relaxed",
						centered && "mx-auto",
						light ? "text-gray-300" : "text-(--color-muted)",
					)}
				>
					{subtitle}
				</p>
			)}
		</div>
	);
}

export function Container({ className, children, ...props }) {
	return (
		<div className={cn("container-base", className)} {...props}>
			{children}
		</div>
	);
}

export function Section({ className, children, id, ...props }) {
	return (
		<section id={id} className={cn("section-padding", className)} {...props}>
			{children}
		</section>
	);
}
