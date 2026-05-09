import { AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { mockApi } from "@/api/client";
import { Input, Select, Textarea } from "@/components/forms/FormFields";
import { Button } from "@/components/ui/Button";
import {
	Container,
	Section,
	SectionHeader,
} from "@/components/ui/SectionHeader";
import { LUGGAGE_OPTIONS, PASSENGER_OPTIONS } from "@/constants";
import { useBookingStore } from "@/state/store";

export function BookingFormSection({ compact = false }) {
	const [status, setStatus] = useState("idle");
	const [bookingId, setBookingId] = useState(null);
	const { startBooking, bookingSuccess, bookingFailed } = useBookingStore();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: "onBlur" });

	async function onSubmit(data) {
		setStatus("loading");
		startBooking();
		try {
			const result = await mockApi.submitBooking(data);
			setBookingId(result.bookingId);
			setStatus("success");
			bookingSuccess(result.bookingId);
			reset();
		} catch (err) {
			setStatus("error");
			bookingFailed(err.message);
		}
	}

	if (status === "success") {
		return (
			<Section className={compact ? "py-12" : ""}>
				<Container>
					<div className="max-w-xl mx-auto text-center py-16">
						<div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
							<CheckCircle size={32} className="text-emerald-500" />
						</div>
						<h3 className="font-display text-2xl text-(--color-navy) mb-3">
							Booking Received!
						</h3>
						<p className="text-(--color-muted) font-body mb-2">
							Your booking reference is{" "}
							<strong className="text-(--color-navy)">{bookingId}</strong>
						</p>
						<p className="text-(--color-muted) font-body text-sm mb-8">
							We will confirm your ride within 15 minutes via WhatsApp.
						</p>
						<Button onClick={() => setStatus("idle")} variant="outline">
							Make Another Booking
						</Button>
					</div>
				</Container>
			</Section>
		);
	}

	return (
		<Section id="book" className="bg-(--color-navy)">
			<Container>
				{!compact && (
					<SectionHeader
						badge="Book a Ride"
						title="Ready When You Are"
						subtitle="Fill in the details below and we will confirm your booking within 15 minutes."
						light
					/>
				)}

				<div className="max-w-2xl mx-auto">
					<div className="bg-white rounded-2xl p-6 md:p-10 shadow-elevated">
						{status === "error" && (
							<div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
								<AlertCircle size={18} className="text-red-500 shrink-0" />
								<p className="text-red-600 text-sm font-body">
									Something went wrong. Please try again or message us on
									WhatsApp.
								</p>
							</div>
						)}

						<form onSubmit={handleSubmit(onSubmit)} noValidate>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
								<div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-5">
									<Input
										label="Full Name"
										id="name"
										placeholder="Your name"
										required
										error={errors.name?.message}
										{...register("name", { required: "Name is required" })}
									/>
									<Input
										label="WhatsApp Number"
										id="whatsapp"
										type="tel"
										placeholder="+351 ..."
										required
										error={errors.whatsapp?.message}
										hint="We will confirm via WhatsApp"
										{...register("whatsapp", {
											required: "WhatsApp number is required",
											pattern: {
												value: /^\+?[\d\s-]{8,}$/,
												message: "Enter a valid phone number",
											},
										})}
									/>
								</div>

								<Input
									label="Pickup Location"
									id="pickup"
									placeholder="Address, hotel, or airport"
									required
									error={errors.pickup?.message}
									{...register("pickup", {
										required: "Pickup location is required",
									})}
								/>
								<Input
									label="Drop-off Location"
									id="dropoff"
									placeholder="Destination"
									required
									error={errors.dropoff?.message}
									{...register("dropoff", {
										required: "Drop-off location is required",
									})}
								/>

								<Input
									label="Date & Time"
									id="datetime"
									type="datetime-local"
									required
									error={errors.datetime?.message}
									{...register("datetime", {
										required: "Date and time are required",
									})}
								/>

								<Select
									label="Passengers"
									id="passengers"
									required
									options={PASSENGER_OPTIONS}
									placeholder="Select passengers"
									error={errors.passengers?.message}
									{...register("passengers", {
										required: "Select number of passengers",
									})}
								/>

								<Select
									label="Luggage"
									id="luggage"
									options={LUGGAGE_OPTIONS}
									placeholder="Select luggage"
									{...register("luggage")}
								/>

								<div className="sm:col-span-2">
									<Textarea
										label="Special Requests"
										id="notes"
										placeholder="Child seat, meet & greet, extra stops, accessibility needs..."
										rows={3}
										{...register("notes")}
									/>
								</div>

								<div className="sm:col-span-2">
									<Button
										type="submit"
										size="lg"
										loading={status === "loading"}
										className="w-full"
									>
										{status === "loading" ? "Submitting..." : "Request My Ride"}
									</Button>
									<p className="text-center text-xs text-(--color-muted) font-body mt-3">
										We'll confirm within 15 minutes · No payment required
										upfront
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</Section>
	);
}
