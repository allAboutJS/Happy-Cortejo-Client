import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useBookingStore = create(
	devtools(
		(set) => ({
			bookingData: null,
			bookingStatus: "idle",
			bookingId: null,
			bookingError: null,
			selectedRoute: null,
			selectedService: null,

			setBookingData: (data) => set({ bookingData: data }),
			setSelectedRoute: (route) => set({ selectedRoute: route }),
			setSelectedService: (service) => set({ selectedService: service }),

			startBooking: () => set({ bookingStatus: "loading", bookingError: null }),
			bookingSuccess: (id) => set({ bookingStatus: "success", bookingId: id }),
			bookingFailed: (err) =>
				set({ bookingStatus: "error", bookingError: err }),
			resetBooking: () =>
				set({
					bookingData: null,
					bookingStatus: "idle",
					bookingId: null,
					bookingError: null,
				}),
		}),
		{ name: "booking-store" },
	),
);

export const useUIStore = create(
	devtools(
		(set) => ({
			mobileMenuOpen: false,
			activeModal: null,
			toasts: [],

			toggleMobileMenu: () =>
				set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
			closeMobileMenu: () => set({ mobileMenuOpen: false }),

			openModal: (modalId) => set({ activeModal: modalId }),
			closeModal: () => set({ activeModal: null }),

			addToast: (toast) =>
				set((state) => ({
					toasts: [...state.toasts, { id: Date.now(), ...toast }],
				})),
			removeToast: (id) =>
				set((state) => ({
					toasts: state.toasts.filter((t) => t.id !== id),
				})),
		}),
		{ name: "ui-store" },
	),
);
