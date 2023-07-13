import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

const montserrat = Montserrat({
	weight: ["500", "700"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "Image Uploader",
	description: "DevChallenges Image Upload Challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.className} suppressHydrationWarning={true}>
				{children}
				<footer className={montserrat.variable}>
					created by{" "}
					<a
						href="https://www.linkedin.com/in/lazar-stojanovi%C4%87-9ba1a5238/"
						target="_blank">
						Lazar Stojanović
					</a>{" "}
					- design by devChallenges
				</footer>
			</body>
		</html>
	);
}
