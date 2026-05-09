import { cn } from '@/lib/cn'

const variants = {
  gold: 'bg-[var(--color-gold-light)] text-[var(--color-gold-dark)]',
  navy: 'bg-blue-50 text-[var(--color-navy)]',
  green: 'bg-emerald-50 text-emerald-700',
  gray: 'bg-gray-100 text-gray-600',
}

export function Badge({ variant = 'gold', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase font-body',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
