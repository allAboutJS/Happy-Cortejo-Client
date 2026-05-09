import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/components/layout/RootLayout";
import { AirportTransfersPage } from "@/pages/AirportTransfersPage";
import { BookPage } from "@/pages/BookPage";
import { BusinessTravelPage } from "@/pages/BusinessTravelPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RelocationPage } from "@/pages/RelocationPage";
import { SubscriptionPage } from "@/pages/SubscriptionPage";
import { ToursPage } from "@/pages/ToursPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "airport-transfers", element: <AirportTransfersPage /> },
			{ path: "tours", element: <ToursPage /> },
			{ path: "business-travel", element: <BusinessTravelPage /> },
			{ path: "relocation", element: <RelocationPage /> },
			{ path: "subscription", element: <SubscriptionPage /> },
			{ path: "book", element: <BookPage /> },
			{ path: "contact", element: <ContactPage /> },
			{ path: "*", element: <NotFoundPage /> },
		],
	},
]);
