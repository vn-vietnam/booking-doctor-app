import Image from "next/image";
import React from "react";

function Hero() {
	return (
		// bg-[url('/bg-stats.svg')] bg-no-repeat  bg-top bg-contain
		<section className="bg-white bg-[url('/bg-stats.svg')] bg-no-repeat  bg-top bg-contain text-black">
			<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
			{/* <Image src="/bg-stats.svg" alt="bg-start" width={100} height={100}/> */}
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
						Nhanh chóng và tiện lợi
						<span className="sm:block"> Hoàn toàn miễn phí </span>
					</h1>

					<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
						Ứng dụng vì cộng đồng cập nhật liên tục và nhanh chóng
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<a
							className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
							href="#"
						>
							Bắt đầu
						</a>

						<a
							className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-black hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
							href="#"
						>
							Tìm hiểu thêm
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
