import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { WHATSAPP_MESSAGE, WHATSAPP_URL } from "@/constants";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function RootLayout() {
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname) {
			window.scrollTo({ top: 0, behavior: "instant" });
		}
	}, [pathname]);

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />

			{/* WhatsApp FAB */}
			<a
				href={`${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Chat on WhatsApp"
				className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-(--color-whatsapp) hover:bg-green-500 text-white flex items-center justify-center shadow-elevated transition-all duration-200 hover:scale-110 hover:-translate-y-1"
			>
				<MessageCircle size={26} fill="currentColor" />
			</a>

			{/* Mobile sticky CTA */}
			<div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-(--color-border) p-3 flex gap-3 shadow-elevated">
				<a
					href={`${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`}
					target="_blank"
					rel="noopener noreferrer"
					className="flex-1 bg-(--color-whatsapp) text-white text-sm font-semibold font-body rounded-xl py-3 text-center transition-opacity hover:opacity-90"
				>
					WhatsApp
				</a>
				<a
					href="/book"
					className="flex-1 bg-(--color-navy) text-white text-sm font-semibold font-body rounded-xl py-3 text-center transition-opacity hover:opacity-90"
				>
					Book Now
				</a>
			</div>
			<div className="lg:hidden h-16" aria-hidden="true" />
		</div>
	);
}
