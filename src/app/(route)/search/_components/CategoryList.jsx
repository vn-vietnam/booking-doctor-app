"use client";
import React, { useEffect, useState } from "react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";
import api from "@/app/_utils/api";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

function CategoryList() {
	const param = useParams();
	// console.log(param);
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
		<div className="w-full  border-[1px] rounded-lg flex flex-col gap-4 p-4">
			{getCategory ? (
				getCategory?.map((item, index) => (
					<Link
						href={"/search/" + item?.attributes?.Name}
						key={index}
						className={` ${item?.attributes?.Name===param.nameSearch? 'bg-blue-300': 'bg-[#d1d1d199]'}  hover:bg-slate-200 cursor-pointer flex gap-3 items-center p-2 rounded-lg`}
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
						<div
							key={index}
							className="w-[100px] h-[100px] bg-slate-200 rounded-lg animate-pulse"
						></div>
					))}
				</>
			)}
		</div>
	);
}

export default CategoryList;
