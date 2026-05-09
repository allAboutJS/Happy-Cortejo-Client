import { BookingFormSection } from "@/components/sections/BookingFormSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { RoutesSection } from "@/components/sections/RoutesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";

export function HomePage() {
	return (
		<>
			<HeroSection />
			<ServicesSection />
			<WhyUsSection />
			<RoutesSection />
			<BookingFormSection />
			<ReviewsSection />
			<FAQSection />
			<CTASection />
		</>
	);
}
