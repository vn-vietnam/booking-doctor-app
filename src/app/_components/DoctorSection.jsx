import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DoctorSection({ dataDoctor, heading }) {
	// console.log(dataDoctor);
	return (
		<div className="mb-10 p-4 bg-white">
			<h2 className="text-2xl font-bold text-gray-900 md:text-3xl my-5">
				{heading }
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 ">
				{dataDoctor?.length > 0 ? (
					dataDoctor?.map((doctor, index) => (
						<div
							key={index}
							className=" border-[1px] rounded-lg flex flex-col gap-2 p-2 shadow-md  cursor-pointer"
						>
							<Image
								src={doctor?.attributes?.image?.data?.attributes?.url}
								alt=""
								width={200}
								height={200}
								className="object-cover rounded-tr-lg rounded-tl-lg h-auto w-auto "
							/>
							<div className="text-lg font-bold">
								{doctor?.attributes?.Name}
							</div>
							<div className="text-blue-600 font-bold">
								{doctor?.attributes?.Address}
							</div>
							<Link href={"http://localhost:3000/"&&"https://booking-doctor-app.vercel.app/details/" + doctor?.id}>
								<Button className="w-full bg-transparent text-blue-600 rounded-lg border-blue-700 border-[1px] hover:bg-blue-500 hover:text-white">
									Hẹn lịch
								</Button>
							</Link>
						</div>
					))
				) : (
					<>
						{[1, 2, 3, 4, 5, 6].map((item, index) => (
							<div
								key={index}
								className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse "
							></div>
						))}
					</>
				)}
			</div>
		</div>
	);
}

export default DoctorSection;
