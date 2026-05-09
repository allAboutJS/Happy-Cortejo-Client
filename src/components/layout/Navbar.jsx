import { Menu, Phone, X } from "lucide-react";
import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, WHATSAPP_MESSAGE, WHATSAPP_URL } from "@/constants";
import { cn } from "@/lib/cn";
import { useUIStore } from "@/state/store";

export function Navbar() {
	const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname) {
			closeMobileMenu();
		}
	}, [location.pathname, closeMobileMenu]);

	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileMenuOpen]);

	return (
		<>
			<header
				className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-(--color-border)"
				style={{ boxShadow: "var(--shadow-soft)" }}
			>
				<div className="container-base">
					<div className="flex items-center justify-between h-16 md:h-20">
						{/* Logo */}
						<Link
							to="/"
							className="flex items-center gap-3 group"
							aria-label="Happy Cortejo Home"
						>
							<div className="w-9 h-9 rounded-xl bg-(--color-navy) flex items-center justify-center shrink-0 group-hover:bg-(--color-gold) transition-colors duration-200">
								<span className="text-white font-display font-bold text-sm">
									HC
								</span>
							</div>
							<div className="hidden sm:block">
								<span className="font-display text-lg font-bold text-(--color-navy) leading-tight block">
									Happy Cortejo
								</span>
								<span className="text-[10px] text-(--color-muted) font-body tracking-wider uppercase leading-none">
									Portugal Travel
								</span>
							</div>
						</Link>

						{/* Desktop Nav */}
						<nav
							className="hidden lg:flex items-center gap-1"
							aria-label="Main navigation"
						>
							{NAV_LINKS.map((link) => (
								<NavLink
									key={link.href}
									to={link.href}
									className={({ isActive }) =>
										cn(
											"px-4 py-2 rounded-lg text-sm font-semibold font-body transition-all duration-150",
											isActive
												? "text-(--color-gold) bg-(--color-gold-light)/40"
												: "text-(--color-charcoal) hover:text-(--color-navy) hover:bg-(--color-cream)",
										)
									}
								>
									{link.label}
								</NavLink>
							))}
						</nav>

						{/* Desktop CTA */}
						<Button as={Link} to="/book" variant="primary" size="sm">
							Book a Ride
						</Button>

						{/* Mobile toggle */}
						<button
							type="button"
							onClick={toggleMobileMenu}
							className="lg:hidden p-2 rounded-lg text-(--color-navy) hover:bg-(--color-cream) transition-colors"
							aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={mobileMenuOpen}
						>
							{mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu */}
			<div
				className={cn(
					"fixed inset-0 z-40 lg:hidden transition-all duration-300",
					mobileMenuOpen
						? "visible opacity-100"
						: "invisible opacity-0 pointer-events-none",
				)}
			>
				<div
					className="absolute inset-0 bg-black/40 backdrop-blur-sm"
					onClick={closeMobileMenu}
					aria-hidden="true"
				/>
				<nav
					className={cn(
						"absolute top-16 right-0 bottom-0 w-72 bg-white shadow-elevated",
						"flex flex-col transition-transform duration-300",
						mobileMenuOpen ? "translate-x-0" : "translate-x-full",
					)}
					aria-label="Mobile navigation"
				>
					<div className="flex-1 overflow-y-auto py-6 px-5 space-y-1">
						{NAV_LINKS.map((link) => (
							<NavLink
								key={link.href}
								to={link.href}
								className={({ isActive }) =>
									cn(
										"flex items-center px-4 py-3 rounded-xl text-base font-semibold font-body transition-all",
										isActive
											? "text-(--color-gold) bg-(--color-gold-light)/40"
											: "text-(--color-charcoal) hover:bg-(--color-cream)",
									)
								}
							>
								{link.label}
							</NavLink>
						))}
					</div>
					<div className="p-5 border-t border-(--color-border) space-y-3">
						<Button
							as="a"
							href={`${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`}
							target="_blank"
							rel="noopener noreferrer"
							variant="whatsapp"
							className="w-full"
						>
							<Phone size={16} />
							Message on WhatsApp
						</Button>
						<Button as={Link} to="/book" variant="primary" className="w-full">
							Book a Ride
						</Button>
					</div>
				</nav>
			</div>

			{/* Spacer */}
			<div className="h-16 md:h-20" aria-hidden="true" />
		</>
	);
}
