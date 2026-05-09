import { BookingFormSection } from "@/components/sections/BookingFormSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHeader } from "@/components/ui/PageHeader";

export function BookPage() {
	return (
		<>
			<PageHeader
				badge="Book a Ride"
				title="Request Your Ride"
				subtitle="Fill in the form below and we'll confirm your booking via WhatsApp within 15 minutes."
			/>
			<BookingFormSection compact={false} />
			<FAQSection />
		</>
	);
}
