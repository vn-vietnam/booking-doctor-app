import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import moment from "moment";
import { Button } from "@/components/ui/button";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import api from "@/app/_utils/api";
import { toast } from "sonner";
function BookingList({ type, dataBooking, updateBooking }) {
	const onContinueClick = (e) => {
		console.log(e);
		api.deleteBooking(e).then((e) => {
			if (e) {
				toast("Delete successfully");
				updateBooking();
			}
		});
	};

	return (
		<div>
			<div className="uppercase text-3xl font-bold">{type}</div>
			<Table>
				<TableCaption>A list of your recent booking.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">ID</TableHead>
						<TableHead>Date</TableHead>
						<TableHead>Time</TableHead>
						<TableHead className="">Doctor</TableHead>
						<TableHead className="text-right">Cancel</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{dataBooking?.map((e, index) => (
						<TableRow key={index}>
							<TableCell className="font-medium">{e.id}</TableCell>
							<TableCell>
								{moment(e?.attributes?.Date).format("DD MMMM YYYY")}
							</TableCell>
							<TableCell>{e?.attributes?.Time}</TableCell>
							<TableCell>
								{e?.attributes?.doctor?.data?.attributes?.Name}
							</TableCell>
							<TableCell className="text-right">
								{/* alert */}
								{type === "upcoming" ? (
									<AlertDialog>
										<AlertDialogTrigger className="border-[1px] p-2 rounded-lg hover:bg-slate-400">
											Cancel
										</AlertDialogTrigger>
										<AlertDialogContent>
											<AlertDialogHeader>
												<AlertDialogTitle>
													Are you want to delete your booking?
												</AlertDialogTitle>
												<AlertDialogDescription>
													This action cannot be undone. This will permanently
													delete your account and remove your data from our
													servers.
												</AlertDialogDescription>
											</AlertDialogHeader>
											<AlertDialogFooter>
												<AlertDialogCancel>Cancel</AlertDialogCancel>
												<AlertDialogAction
													onClick={() => onContinueClick(e.id)}
													className="border-[1px] p-2 rounded-lg bg-red-500 hover:bg-red-400"
												>
													Continue
												</AlertDialogAction>
											</AlertDialogFooter>
										</AlertDialogContent>
									</AlertDialog>
								) : (
									<Button>Expired</Button>
								)}

								{/* alert */}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

export default BookingList;
