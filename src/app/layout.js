import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner";

const be_Vietnam_Pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: "400" });

export const metadata = {
	title: "Ứng dụng Đặt lịch khám bệnh",
	description: "Ứng dụng Thuê bác sĩ tiện lợi, nhanh chóng và miễn phí",
	icons: {
		icon: "/logo.svg", // /public path
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={be_Vietnam_Pro.className}
				suppressHydrationWarning={true}
			>
				<div className="w-full bg-red-500 p-2 text-center">Sever free nên vui lòng đợi 5-10p trang sẽ được cập nhật</div>
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
