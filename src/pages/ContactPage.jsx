import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { mockApi } from "@/api/client";
import { Input, Select, Textarea } from "@/components/forms/FormFields";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container, Section } from "@/components/ui/SectionHeader";
import {
	APP_EMAIL,
	WHATSAPP_MESSAGE,
	WHATSAPP_NUMBER,
	WHATSAPP_URL,
} from "@/constants";

const contactInfo = [
	{
		icon: Phone,
		label: "WhatsApp",
		value: WHATSAPP_NUMBER,
		href: `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`,
	},
	{
		icon: Mail,
		label: "Email",
		value: APP_EMAIL,
		href: `mailto:${APP_EMAIL}`,
	},
	{
		icon: MapPin,
		label: "Base",
		value: "Lisbon, Portugal",
		href: null,
	},
	{
		icon: Clock,
		label: "Availability",
		value: "24 hours, 7 days a week",
		href: null,
	},
];

const subjectOptions = [
	{ value: "booking", label: "Book a ride" },
	{ value: "quote", label: "Request a quote" },
	{ value: "corporate", label: "Corporate account" },
	{ value: "subscription", label: "Subscription plan" },
	{ value: "other", label: "Other" },
];

export function ContactPage() {
	const [status, setStatus] = useState("idle");
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: "onBlur" });

	async function onSubmit(data) {
		setStatus("loading");
		try {
			await mockApi.submitContactForm(data);
			setStatus("success");
			reset();
		} catch {
			setStatus("error");
		}
	}

	return (
		<>
			<PageHeader
				badge="Contact Us"
				title="Let's Talk About Your Journey"
				subtitle="We respond fast. Message us on WhatsApp for the quickest reply."
				image="/images/receptionists-5975962_1280.jpg"
			/>

			<Section className="bg-(--color-cream)">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
						{/* Left — info */}
						<div className="lg:col-span-2 space-y-8">
							<div>
								<h2 className="font-display text-2xl text-(--color-navy) mb-3">
									Get in Touch
								</h2>
								<p className="text-(--color-muted) font-body leading-relaxed">
									Whether you need a quick airport pickup or want to discuss a
									corporate account, we are here. Always human, always
									responsive.
								</p>
							</div>

							<div className="space-y-5">
								{contactInfo.map(({ icon: Icon, label, value, href }) => (
									<div key={label} className="flex items-start gap-4">
										<div className="w-10 h-10 rounded-xl bg-(--color-gold-light) flex items-center justify-center shrink-0">
											<Icon size={18} className="text-(--color-gold-dark)" />
										</div>
										<div>
											<p className="text-xs text-(--color-muted) font-body font-semibold uppercase tracking-wide mb-0.5">
												{label}
											</p>
											{href ? (
												<a
													href={href}
													className="text-(--color-navy) font-body font-medium hover:text-(--color-gold) transition-colors"
												>
													{value}
												</a>
											) : (
												<p className="text-(--color-navy) font-body font-medium">
													{value}
												</p>
											)}
										</div>
									</div>
								))}
							</div>

							<div className="bg-(--color-navy) rounded-2xl p-6 text-white">
								<p className="font-display text-lg mb-2">Need it faster?</p>
								<p className="text-gray-300 text-sm font-body mb-4">
									WhatsApp is the quickest way to reach us. We usually respond
									in under 5 minutes.
								</p>
								<a
									href={`${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block bg-(--color-whatsapp) text-white font-semibold font-body text-sm px-5 py-2.5 rounded-xl hover:bg-green-500 transition-colors"
								>
									Open WhatsApp
								</a>
							</div>
						</div>

						{/* Right — form */}
						<div className="lg:col-span-3">
							<div className="bg-white rounded-2xl p-8 shadow-card">
								{status === "success" ? (
									<div className="text-center py-10">
										<div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
											<CheckCircle size={28} className="text-emerald-500" />
										</div>
										<h3 className="font-display text-xl text-(--color-navy) mb-2">
											Message Sent!
										</h3>
										<p className="text-(--color-muted) font-body">
											We'll reply within 2 hours. Check your email or WhatsApp.
										</p>
										<button
											type="button"
											onClick={() => setStatus("idle")}
											className="mt-6 text-sm text-(--color-gold) font-body font-semibold hover:underline"
										>
											Send another message
										</button>
									</div>
								) : (
									<form
										onSubmit={handleSubmit(onSubmit)}
										noValidate
										className="space-y-5"
									>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
											<Input
												label="Your Name"
												id="contact-name"
												placeholder="Full name"
												required
												error={errors.name?.message}
												{...register("name", { required: "Name is required" })}
											/>
											<Input
												label="Email Address"
												id="contact-email"
												type="email"
												placeholder="you@example.com"
												required
												error={errors.email?.message}
												{...register("email", {
													required: "Email is required",
													pattern: {
														value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
														message: "Enter a valid email",
													},
												})}
											/>
										</div>
										<Select
											label="Subject"
											id="subject"
											options={subjectOptions}
											placeholder="Select a topic"
											{...register("subject")}
										/>
										<Textarea
											label="Message"
											id="message"
											placeholder="Tell us about your travel needs..."
											rows={5}
											required
											error={errors.message?.message}
											{...register("message", {
												required: "Please write a message",
											})}
										/>
										<Button
											type="submit"
											size="lg"
											loading={status === "loading"}
											className="w-full"
										>
											Send Message
										</Button>
									</form>
								)}
							</div>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
