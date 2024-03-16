"use client";

import React, { useEffect, useState } from "react";
import api from "../_utils/api";
import Image from "next/image";
import Link from "next/link";

function CategorySearch() {
	const [getCategory, setCategory] = useState();
	useEffect(() => {
		getCategoriesList();
	}, []);

	const getCategoriesList = () => {
		api.getCategories().then((res) => {
			// console.log(res.data.data);
			setCategory(res?.data?.data);
		});
	};

	return (
		<section className="bg-gray-50 md:mx-5">
			<div className="p-4 md:p-12 lg:px-16 lg:pt-24">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
						Ứng dụng được cập nhật liên tục, tiện lợi và nhanh chóng
					</h2>

					<p className="hidden text-gray-500 sm:mt-4 sm:block">
						Nhắm cung cấp dịch vụ tốt nhất cho người bệnh, mọi người có thể đăng kí Email để được cập nhật thêm những thông tin bệnh lí, các bác sĩ tham gia ứng dụng
					</p>
				</div>

				<div className="mx-auto mt-8 max-w-xl">
					<form action="#" className="sm:flex sm:gap-4">
						<div className="sm:flex-1">
							<label htmlFor="email" className="sr-only">
								Email
							</label>

							<input
								type="email"
								placeholder="Địa chỉ Email "
								className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
							/>
						</div>

						<button
							type="submit"
							className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
						>
							<span className="text-sm font-medium"> Đăng kí </span>

							<svg
								className="size-5 rtl:rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</button>
					</form>
				</div>
				<div className="flex flex-wrap gap-4 justify-center items-center my-10">
					{getCategory ? (
						getCategory?.map((item, index) => (
							<Link
							href={'/search/'+ item?.attributes?.Name}
								key={index}
								className="bg-[#d1d1d199] hover:bg-slate-200 cursor-pointer hover:zoom-in-75 transition-all shadow-sm ease-in-out hover:scale-110 flex flex-col w-28 h-28 gap-3 justify-center items-center rounded-lg"
							>
								<Image
									width={40}
									height={40}
									src={item?.attributes?.Icon?.data?.attributes?.url}
									alt={item?.attributes?.Name}
								/>
								<label>{item?.attributes?.Name}</label>
							</Link>
						))
					) : (
						<>
							{[1, 2, 3, 4, 5, 6].map((item, index) => (
								<div key={index} className="w-[100px] h-[100px] bg-slate-200 rounded-lg animate-pulse"></div>
							))}
						</>
					)}
				</div>
			</div>
		</section>
	);
}

export default CategorySearch;
