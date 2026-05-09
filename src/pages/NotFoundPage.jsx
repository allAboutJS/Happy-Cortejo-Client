import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
	return (
		<div className="min-h-[70vh] flex items-center justify-center text-center px-4">
			<div>
				<div className="text-8xl font-display text-(--color-gold-light) font-bold mb-4">
					404
				</div>
				<h1 className="font-display text-3xl text-(--color-navy) mb-4">
					Page Not Found
				</h1>
				<p className="text-(--color-muted) font-body mb-8 max-w-md mx-auto">
					Looks like this route doesn't exist. Let's get you back on the road.
				</p>
				<Button as={Link} to="/" size="lg">
					<ArrowLeft size={18} />
					Back to Home
				</Button>
			</div>
		</div>
	);
}
