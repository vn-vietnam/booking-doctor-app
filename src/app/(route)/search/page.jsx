"use client";
import DoctorSection from "@/app/_components/DoctorSection";
import api from "@/app/_utils/api";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
	const param = useParams();
	// console.log(param);
	const [getCategory, setCategory] = useState();
	useEffect(() => {
		getCategoriesList();
	}, []);

	const getCategoriesList = () => {
		api.getDoctors().then((res) => {
			// console.log(res.data.data);
			setCategory(res?.data?.data);
		});
	};
	return (
		<div className="border-[1px]  ml-3 rounded-lg p-4">
			<DoctorSection dataDoctor={getCategory} heading="Bác sĩ" />
		</div>
	);
}

export default page;
