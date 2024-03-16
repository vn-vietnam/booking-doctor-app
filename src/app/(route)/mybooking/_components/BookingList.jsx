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
			<div className="uppercase text-3xl my-5 font-bold">{type==='upcoming' ? "Mới đăng kí" : "Hết hạn"}</div>
			<Table>
				<TableCaption>Danh sách đăng kí lịch hẹn</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">ID</TableHead>
						<TableHead>Ngày</TableHead>
						<TableHead>Thời gian</TableHead>
						<TableHead className="">Bác sĩ</TableHead>
						<TableHead className="text-right">Tính năng</TableHead>
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
											Hủy
										</AlertDialogTrigger>
										<AlertDialogContent>
											<AlertDialogHeader>
												<AlertDialogTitle>
													Bạn có chắc là hủy lịch hẹn này?
												</AlertDialogTitle>
												<AlertDialogDescription>
													Cảnh báo hành động này sẽ không được thực hiện lại. 
												</AlertDialogDescription>
											</AlertDialogHeader>
											<AlertDialogFooter>
												<AlertDialogCancel>Quay lại</AlertDialogCancel>
												<AlertDialogAction
													onClick={() => onContinueClick(e.id)}
													className="border-[1px] p-2 rounded-lg bg-red-500 hover:bg-red-400"
												>
													Tiếp tục
												</AlertDialogAction>
											</AlertDialogFooter>
										</AlertDialogContent>
									</AlertDialog>
								) : (
									<Button>Hết hạn</Button>
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
