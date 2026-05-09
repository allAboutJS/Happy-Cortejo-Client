import {
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
	APP_NAME,
	APP_TAGLINE,
	NAV_LINKS,
	WHATSAPP_MESSAGE,
	WHATSAPP_URL,
} from "@/constants";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-(--color-navy) text-white">
			<div className="container-base py-16 md:py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
					{/* Brand */}
					<div className="lg:col-span-1">
						<div className="flex items-center gap-3 mb-5">
							<div className="w-9 h-9 rounded-xl bg-(--color-gold) flex items-center justify-center">
								<span className="text-white font-display font-bold text-sm">
									HC
								</span>
							</div>
							<div>
								<span className="font-display text-lg font-bold block">
									{APP_NAME}
								</span>
								<span className="text-[10px] text-gray-400 tracking-wider uppercase">
									{APP_TAGLINE}
								</span>
							</div>
						</div>
						<p className="text-gray-400 text-sm leading-relaxed font-body mb-6">
							Premium private transportation across Portugal. Reliable,
							professional, and genuinely human.
						</p>
						<div className="flex gap-3">
							{[
								{ icon: Instagram, href: "#", label: "Instagram" },
								{ icon: Twitter, href: "#", label: "Twitter" },
								{ icon: Linkedin, href: "#", label: "LinkedIn" },
							].map(({ icon: Icon, href, label }) => (
								<a
									key={label}
									href={href}
									aria-label={label}
									className="w-9 h-9 rounded-lg bg-white/10 hover:bg-(--color-gold) flex items-center justify-center transition-colors duration-200"
								>
									<Icon size={16} />
								</a>
							))}
						</div>
					</div>

					{/* Services */}
					<div>
						<h3 className="font-display text-base font-semibold mb-5">
							Services
						</h3>
						<ul className="space-y-3">
							{NAV_LINKS.slice(0, 5).map((link) => (
								<li key={link.href}>
									<Link
										to={link.href}
										className="text-gray-400 hover:text-(--color-gold) text-sm font-body transition-colors duration-150"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Popular Routes */}
					<div>
						<h3 className="font-display text-base font-semibold mb-5">
							Popular Routes
						</h3>
						<ul className="space-y-3">
							{[
								"Lisbon Airport → City",
								"Lisbon → Sintra",
								"Lisbon → Cascais",
								"Lisbon → Algarve",
								"Lisbon → Porto",
							].map((route) => (
								<li key={route}>
									<Link
										to="/book"
										className="text-gray-400 hover:text-(--color-gold) text-sm font-body transition-colors duration-150"
									>
										{route}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="font-display text-base font-semibold mb-5">
							Get In Touch
						</h3>
						<ul className="space-y-4">
							<li>
								<a
									href={`${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-start gap-3 text-gray-400 hover:text-(--color-gold) transition-colors group"
								>
									<Phone
										size={16}
										className="mt-0.5 shrink-0 group-hover:text-(--color-gold)"
									/>
									<span className="text-sm font-body">+351 912 345 678</span>
								</a>
							</li>
							<li>
								<a
									href="mailto:hello@happycortejo.com"
									className="flex items-start gap-3 text-gray-400 hover:text-(--color-gold) transition-colors group"
								>
									<Mail size={16} className="mt-0.5 shrink-0" />
									<span className="text-sm font-body">
										hello@happycortejo.com
									</span>
								</a>
							</li>
							<li>
								<div className="flex items-start gap-3 text-gray-400">
									<MapPin size={16} className="mt-0.5 shrink-0" />
									<span className="text-sm font-body">
										Lisbon, Portugal
										<br />
										Operating nationwide
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-gray-500 text-sm font-body">
						© {year} {APP_NAME}. All rights reserved.
					</p>
					{/* <div className="flex gap-6">
						{["Privacy Policy", "Terms of Service"].map((item) => (
							<a
								key={item}
								href="/#"
								className="text-gray-500 hover:text-gray-300 text-sm font-body transition-colors"
							>
								{item}
							</a>
						))}
					</div>*/}
				</div>
			</div>
		</footer>
	);
}
