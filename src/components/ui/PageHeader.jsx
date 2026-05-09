import { cn } from "@/lib/cn";

export function PageHeader({ badge, title, subtitle, image, className }) {
	return (
		<section
			className={cn(
				"relative py-20 md:py-28 bg-(--color-navy) overflow-hidden",
				className,
			)}
		>
			{image && (
				<>
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{ backgroundImage: `url('${image}')` }}
						aria-hidden="true"
					/>
					<div
						className="absolute inset-0 bg-(--color-navy)/85"
						aria-hidden="true"
					/>
				</>
			)}
			<div
				className="absolute top-0 right-0 w-96 h-96 rounded-full bg-(--color-gold)/8 -translate-y-1/2 translate-x-1/3"
				aria-hidden="true"
			/>

			<div className="container-base relative z-10">
				{badge && (
					<span className="text-xs font-semibold tracking-widest uppercase font-body text-(--color-gold) mb-4 block">
						{badge}
					</span>
				)}
				<h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-2xl">
					{title}
				</h1>
				{subtitle && (
					<p className="text-gray-300 font-body text-lg md:text-xl max-w-xl leading-relaxed">
						{subtitle}
					</p>
				)}
			</div>
		</section>
	);
}
