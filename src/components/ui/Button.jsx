import { cn } from '@/lib/cn'

const variants = {
  primary: 'bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white shadow-soft hover:shadow-card',
  secondary: 'bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)] text-white shadow-soft hover:shadow-card',
  outline: 'border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-white',
  ghost: 'text-[var(--color-navy)] hover:bg-[var(--color-cream)]',
  white: 'bg-white text-[var(--color-navy)] hover:bg-[var(--color-cream)] shadow-soft',
  whatsapp: 'bg-[var(--color-whatsapp)] hover:bg-green-600 text-white shadow-soft hover:shadow-card',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  loading = false,
  disabled,
  as: Tag = 'button',
  href,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-[var(--radius-btn)]',
    'transition-all duration-200 cursor-pointer select-none',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {loading ? <Spinner /> : children}
      </a>
    )
  }

  return (
    <Tag className={classes} disabled={disabled || loading} {...props}>
      {loading ? <Spinner /> : children}
    </Tag>
  )
}

function Spinner() {
  return (
    <svg
      className="animate-spin w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}
