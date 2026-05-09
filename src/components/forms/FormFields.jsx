import { forwardRef } from "react";
import { cn } from "@/lib/cn";

const baseInput = cn(
	"w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white",
	"text-[var(--color-charcoal)] font-body text-base",
	"transition-all duration-150",
	"placeholder:text-gray-400",
	"focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20",
	"disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed",
);

export const Input = forwardRef(function Input(
	{ label, error, className, hint, required, ...props },
	ref,
) {
	return (
		<FieldWrapper
			label={label}
			error={error}
			hint={hint}
			required={required}
			htmlFor={props.id || props.name}
		>
			<input
				ref={ref}
				className={cn(
					baseInput,
					error && "border-red-400 focus:border-red-400 focus:ring-red-200",
					className,
				)}
				{...props}
			/>
		</FieldWrapper>
	);
});

export const Textarea = forwardRef(function Textarea(
	{ label, error, className, hint, required, rows = 4, ...props },
	ref,
) {
	return (
		<FieldWrapper
			label={label}
			error={error}
			hint={hint}
			required={required}
			htmlFor={props.id || props.name}
		>
			<textarea
				ref={ref}
				rows={rows}
				className={cn(
					baseInput,
					"resize-none",
					error && "border-red-400 focus:border-red-400 focus:ring-red-200",
					className,
				)}
				{...props}
			/>
		</FieldWrapper>
	);
});

export const Select = forwardRef(function Select(
	{
		label,
		error,
		className,
		hint,
		required,
		options = [],
		placeholder,
		...props
	},
	ref,
) {
	return (
		<FieldWrapper
			label={label}
			error={error}
			hint={hint}
			required={required}
			htmlFor={props.id || props.name}
		>
			<select
				ref={ref}
				className={cn(
					baseInput,
					"cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 fill%3D%22none%22 viewBox%3D%220 0 20 20%22%3E%3Cpath stroke%3D%22%236b7280%22 stroke-linecap%3D%22round%22 stroke-linejoin%3D%22round%22 stroke-width%3D%221.5%22 d%3D%22m6 8 4 4 4-4%22%2F%3E%3C%2Fsvg%3E')] bg-size-[20px_20px] bg-position-[right_12px_center] bg-no-repeat pr-10",
					error && "border-red-400",
					className,
				)}
				{...props}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{options.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
		</FieldWrapper>
	);
});

function FieldWrapper({ label, error, hint, required, htmlFor, children }) {
	return (
		<div className="flex flex-col gap-1.5">
			{label && (
				<label
					htmlFor={htmlFor}
					className="text-sm font-semibold text-(--color-charcoal) font-body"
				>
					{label}
					{required && <span className="text-(--color-gold) ml-1">*</span>}
				</label>
			)}
			{children}
			{hint && !error && <p className="text-xs text-(--color-muted)">{hint}</p>}
			{error && <p className="text-xs text-red-500 font-medium">{error}</p>}
		</div>
	);
}
