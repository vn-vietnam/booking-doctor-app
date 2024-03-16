import React from "react";

function Dashboard() {
	return (
		<div className="border-[1px] w-full max-h-[300px] p-4 rounded-lg">
			<div className="mb-4 text-3xl font-bold">Thông tin Liên lạc</div>
			<div className="flex flex-col gap-4">
				<span>Địa chỉ: Thạnh Xuân Quận 12 Thành phố HCM</span>
				<span>SDT: +844732874334</span>
				<span>Email: kient2005@gmail.com</span>
			</div>
		</div>
	);
}

export default Dashboard;
