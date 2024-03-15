"use client";

import CategoryList from "./search/_components/CategoryList";

function layout({ children }) {

	return (
		<div className="grid grid-cols-4">
			<div className="lg:col-span-1 md:col-span-1 sm:col-span-1 sm:block hidden">
				<CategoryList />
			</div>
			<div className="col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-3">{children}</div>
		</div>
	);
}

export default layout;
