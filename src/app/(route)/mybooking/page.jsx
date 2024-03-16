"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingList from "./_components/BookingList";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import api from "@/app/_utils/api";

function page() {
	const { user } = useKindeBrowserClient();

	// console.log(user);
	const [getBooking, setGetBooking] = useState();

	const getBookingUser = () => {
		api.getBookingByEmail(user?.email).then((res) => {
			console.log(res?.data?.data);
			setGetBooking(res?.data?.data);
		});
	};
	let dateNow = new Date();
	console.log(dateNow);
	const filterBooking = (type) => {
		const result = getBooking?.filter((e) =>
			type === "upcoming"
				? new Date(e.attributes.Date) >= new Date()
				: new Date(e.attributes.Date) < new Date()
		);
		// console.log(result);
		return result;
	};
	filterBooking("repair");
	useEffect(() => {
		getBookingUser();
	}, [user]);

	return (
		<div className="border-[1px]  ml-3 rounded-lg p-4">
			<Tabs defaultValue="account" className="w-full">
				<TabsList className="">
					<TabsTrigger value="upcoming">Mới đăng kí</TabsTrigger>
					<TabsTrigger value="expired">Hết hạn</TabsTrigger>
				</TabsList>
				<TabsContent value="upcoming" >
					<BookingList
						type="upcoming"
						dataBooking={filterBooking("upcoming")}
						updateBooking={() => getBookingUser()}
					/>
				</TabsContent>
				<TabsContent value="expired">
					<BookingList
						type="expired"
						dataBooking={filterBooking("expired")}
						updateBooking={() => getBookingUser()}
					/>
				</TabsContent>
				
			</Tabs>
		</div>
	);
}

export default page;
