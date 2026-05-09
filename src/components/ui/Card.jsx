import { cn } from "@/lib/cn";

export function Card({ className, children, hover = false, ...props }) {
	return (
		<div
			className={cn(
				"bg-white rounded-(--radius-card) shadow-card",
				hover && "hover-lift cursor-pointer",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}

export function CardHeader({ className, children, ...props }) {
	return (
		<div className={cn("p-6 pb-0", className)} {...props}>
			{children}
		</div>
	);
}

export function CardBody({ className, children, ...props }) {
	return (
		<div className={cn("p-6", className)} {...props}>
			{children}
		</div>
	);
}

export function CardFooter({ className, children, ...props }) {
	return (
		<div className={cn("px-6 pb-6 pt-0", className)} {...props}>
			{children}
		</div>
	);
}
