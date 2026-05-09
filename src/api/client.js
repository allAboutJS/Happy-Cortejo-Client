import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL || "https://happycortejo.com";
const FORMSPREE_BOOKING_URL = import.meta.env.VITE_FORMSPREE_BOOKING_URL || "/";
const FORMSPREE_CONTACT_URL = import.meta.env.VITE_FORMSPREE_CONTACT_URL || "/";

// apiClient.interceptors.request.use(
// 	(config) => {
// 		const token = localStorage.getItem("hc_token");
// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`;
// 		}
// 		return config;
// 	},
// 	(error) => Promise.reject(error),
// );

// apiClient.interceptors.response.use(
// 	(response) => response,
// 	(error) => {
// 		if (error.response?.status === 401) {
// 			localStorage.removeItem("hc_token");
// 		}
// 		return Promise.reject(error);
// 	},
// );

export const mockApi = {
	submitBooking: async (data) => {
		const response = await axios.post(FORMSPREE_BOOKING_URL, data);

		if (response.status !== 200) {
			throw new Error("Network error. Please try again.");
		}

		return {
			success: true,
			bookingId: `HC-${Date.now().toString(36).toUpperCase()}`,
			message:
				"Booking received! We will confirm within 15 minutes via WhatsApp.",
			data,
		};
	},

	submitContactForm: async (data) => {
		const response = await axios.post(FORMSPREE_CONTACT_URL, data);

		if (response.status !== 200) {
			throw new Error("Network error. Please try again.");
		}

		return {
			success: true,
			message: "Message received. We will respond within 2 hours.",
			data,
		};
	},
};
