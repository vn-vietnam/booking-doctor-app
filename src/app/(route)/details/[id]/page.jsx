"use client";
import api from "@/app/_utils/api";
import { Button } from "@/components/ui/button";
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPinned,
	Phone,
	Twitter,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import BookingSection from "../_components/BookingSection";

function page() {
	const param = useParams();
	// console.log(param)
	const [getCategory, setCategory] = useState();
	useEffect(() => {
		getCategoriesList();
	}, []);

	const getCategoriesList = () => {
		api.getDetailsDoctor(Number(param?.id)).then((res) => {
			// console.log(res.data.data);
			setCategory(res?.data?.data);
		});
	};

	return (
		<div className="border-[1px]  ml-3 rounded-lg p-4">
			{getCategory ? (
				<>
					<div className="flex gap-4 lg:flex-row flex-col">
						<Image
							src={getCategory?.attributes?.image?.data?.attributes?.url}
							alt="img_user"
							height={500}
							width={300}
							className="object-cover h-[400px] lg:w-[300px] w-full rounded-lg"
						/>
						<div className="flex flex-col text-xl gap-[20px]">
							<div className="text-3xl font-bold">
								{getCategory?.attributes?.Name}
							</div>
							<div className="flex gap-2 ">
								<MapPinned />
								<div>{getCategory?.attributes?.Address}</div>
							</div>
							<div className="flex gap-2">
								<Phone />
								<div>{getCategory?.attributes?.Phone}</div>
							</div>
							<div className="flex gap-2">
								<Mail />
								<div>{getCategory?.attributes?.email}</div>
							</div>
							<div className="flex gap-2">
								<div className="p-2 rounded-full border-[1px] border-blue-500 hover:bg-blue-300 cursor-pointer">
									<Facebook className="w-[30px] h-[30px]  " />
								</div>
								<div className="p-2 rounded-full border-[1px] border-blue-500 hover:bg-blue-300 cursor-pointer">
									<Instagram className="w-[30px] h-[30px]  " />
								</div>
								<div className="p-2 rounded-full border-[1px] border-blue-500 hover:bg-blue-300 cursor-pointer">
									<Twitter className="w-[30px] h-[30px]  " />
								</div>
								<div className="p-2 rounded-full border-[1px] border-blue-500 hover:bg-blue-300 cursor-pointer">
									<Linkedin className="w-[30px] h-[30px]  " />
								</div>
							</div>
							<div>
								{/* Booking Now */}
								<BookingSection
									className="hover:bg-blue-300 hover:text-black"
									doctor={getCategory}
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full my-4">
						<div className="text-3xl font-bold">About me</div>
						<div>{getCategory?.attributes?.About}</div>
					</div>
				</>
			) : (
				<>
					<div className="">
						<div className="h-[400px] lg:w-[300px] bg-slate-300 animate-pulse  rounded-lg "></div>
						<div className="w-full h-[200px] bg-slate-300 animate-pulse  rounded-lg  my-4"></div>
					</div>
				</>
			)}
		</div>
	);
}

export default page;
