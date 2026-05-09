import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "https://api.happycortejo.com";

export const apiClient = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

apiClient.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("hc_token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			localStorage.removeItem("hc_token");
		}
		return Promise.reject(error);
	},
);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
	submitBooking: async (data) => {
		await delay(1400);
		if (Math.random() < 0.02)
			throw new Error("Network error. Please try again.");
		return {
			success: true,
			bookingId: `HC-${Date.now().toString(36).toUpperCase()}`,
			message:
				"Booking received! We will confirm within 15 minutes via WhatsApp.",
			data,
		};
	},

	submitContactForm: async (data) => {
		await delay(900);
		return {
			success: true,
			message: "Message received. We will respond within 2 hours.",
			data,
		};
	},

	getQuote: async () => {
		await delay(800);
		return {
			success: true,
			estimate: {
				minPrice: 35 + Math.floor(Math.random() * 50),
				maxPrice: 85 + Math.floor(Math.random() * 80),
				currency: "EUR",
				duration: `${30 + Math.floor(Math.random() * 60)} min`,
				vehicle: "Sedan / SUV",
			},
		};
	},

	subscribeNewsletter: async () => {
		await delay(600);
		return { success: true, message: "Subscribed successfully." };
	},
};
