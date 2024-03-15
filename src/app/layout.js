import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
	title: "Booking App",
	description: "Booking next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={outfit.className} suppressHydrationWarning={true}>
				<div className="md:px-20">
					{/* <Menu /> */}
					<Header />
					{children}
					<Toaster />
					<Footer />
				</div>
			</body>
		</html>
	);
}
