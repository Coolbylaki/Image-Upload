import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Image Uploader",
	description: "DevChallenges Image Upload Challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
}
