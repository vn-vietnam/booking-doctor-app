"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import api from "@/app/_utils/api";
import { toast } from "sonner";
const dataTime = [
	{
		id: 1,
		time: "7:00 AM",
	},
	{
		id: 2,
		time: "8:00 AM",
	},
	{
		id: 3,
		time: "9:00 AM",
	},
	{
		id: 4,
		time: "10:00 AM",
	},
	{
		id: 5,
		time: "11:00 AM",
	},
	{
		id: 6,
		time: "12:00 AM",
	},
	{
		id: 7,
		time: "1:00 PM",
	},
	{
		id: 8,
		time: "2:00 PM",
	},
	{
		id: 9,
		time: "3:00 PM",
	},
	{
		id: 10,
		time: "4:00 PM",
	},
	{
		id: 11,
		time: "5:00 PM",
	},
	{
		id: 12,
		time: "6:00 PM",
	},
	{
		id: 13,
		time: "7:00 PM",
	},
	{
		id: 14,
		time: "8:00 PM",
	},
	{
		id: 15,
		time: "9:00 PM",
	},
];
function BookingSection({ doctor }) {
	// console.log(doctor);
	const [date, setDate] = useState(new Date());
	const [clock, setClock] = useState("7:00 AM");
	const [note, setNote] = useState("");
	const { user } = useKindeBrowserClient();
	const handleForm = (e) => {
		e.preventDefault();
		const data = {
			data: {
				UserName: user.given_name + " " + user.family_name,
				Email: user.email,
				Time: clock,
				Date: date,
				doctor: doctor.id,
				Note: note,
			},
		};
		api.postBooking(data).then((e) => {
			if (e) {
				toast("Booking has been created.");
			} else {
				toast("Some thing wrong. Please try again!");
			}
		});
	};
	useEffect(() => {
		// console.log(clock, date);
	}, [date, clock]);
	const handleTimeChange = (event) => {
		// console.log(event.target.value);
		setClock(event.target.value);
	};

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline">Booking Now</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[455px] ">
					<DialogHeader>
						<DialogTitle>From Booking</DialogTitle>
						<DialogDescription>Please select all information</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="flex gap-4 flex-col md:flex-row">
							<Calendar
								mode="single"
								selected={date}
								onSelect={setDate}
								className="rounded-md border"
							/>
							<select
								name="cars"
								id="cars"
								onChange={handleTimeChange}
								className="border-[1px] h-[50px] rounded-lg"
							>
								{/* <option >Volvo</option> */}

								{dataTime.map((t, index) => (
									<option defaultValue="7:00 AM" key={index} value={t.time}>
										{t.time}
									</option>
								))}
							</select>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							{/* <Label htmlFor="name" className="text-right">
								Note
							</Label> */}
							<textarea
								onChange={(e) => setNote(e.target.value)}
								id="note"
								className="col-span-4 p-2 min-h-[200px] border-[1px] rounded-lg"
								placeholder="Note ..."
							/>
						</div>
						{/* <div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="username" className="text-right">
								Username
							</Label>
							<Input id="username" value="@peduarte" className="col-span-3" />
						</div> */}
					</div>
					<DialogFooter>
						<Button
							type="button"
							className="hover:bg-blue-300 hover:text-black"
							onClick={handleForm}
						>
							Booking Now
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}

export default BookingSection;
