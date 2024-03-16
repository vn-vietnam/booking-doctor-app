"use client";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorSection from "./_components/DoctorSection";
import { useEffect, useState } from "react";
import api from "./_utils/api";

export default function Home() {
	const [doctorList, setDoctorList] = useState();

	useEffect(() => {
		getListDoctors();
	}, []);

	const getListDoctors = () => {
		api.getDoctors().then((res) => {
			// console.log(res.data.data);
			setDoctorList(res.data.data);
		});
	};

	return (
		<>
			<div className="">
				<Hero />
				<CategorySearch />
				<DoctorSection dataDoctor={doctorList} heading="Bác sĩ đầu ngành"/>
				{/* <p>hello world</p> */}
			</div>
		</>
	);
}
