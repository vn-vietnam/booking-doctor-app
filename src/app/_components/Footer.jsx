import Image from "next/image";
import React from "react";

function Footer() {
	return (
		<footer className="">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-4">
				<div className="sm:flex sm:items-center sm:justify-between">
					<div className="flex justify-center text-teal-600 sm:justify-start">
						<Image
							src="/logo.svg"
							alt="logo"
							width="0"
							height="0"
							sizes="100vw"
							className="w-full h-[50px]"
						/>
					</div>

					<p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
						Copyright &copy; 2024 ~ NTK.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
