"use client";
import { Button } from "@/components/ui/button";
import {
	LoginLink,
	LogoutLink,
	useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {  usePathname } from "next/navigation";

function Header() {
	const { user } = useKindeBrowserClient();
	const param = usePathname();
	// console.log(param);
	useEffect(() => {}, [user]);
	const Menu = [
		{ id: 1, name: "Trang chủ", path: "/" },
		{ id: 2, name: "Bác sĩ", path: "/search" },
		{ id: 3, name: "Liên lạc", path: "/contact" },
	];
	return (
		<div className="flex items-center justify-between p-4">
			<div className="flex items-center gap-10">
				<Link href={"/"}>
					<Image
						src="/logo.svg"
						alt="logo"
						width="0"
						height="0"
						sizes="100vw"
						className="w-full h-auto"
					/>
				</Link>
				<ul className="gap-8 hidden md:flex">
					{Menu.map((item, index) => (
						<Link href={item.path} key={index}>
							<li
								className={`hover:text-red-400 cursor-pointer hover:ease-in-out transition-all  underline-offset-4 ${
									param === item.path ? "underline" : "no-underline"
								} `}
							>
								{item.name}
							</li>
						</Link>
					))}
				</ul>
			</div>
			{user && user ? (
				<>
					{/* <LogoutLink>
						<Button>Log out</Button>
					</LogoutLink> */}
					<Popover className>
						<PopoverTrigger>
							<Image
								src={user?.picture}
								alt="user_logo"
								width={40}
								height={40}
								className="rounded-full"
							/>
						</PopoverTrigger>
						<PopoverContent className="w-[44]">
							<ul className="flex flex-col gap-2">
								<li className="hover:bg-slate-200 p-2 rounded-md cursor-pointer">Hồ sơ</li>
								<Link href={"/mybooking"}>
									<li className="hover:bg-slate-200 p-2 rounded-md">
										Lịch sử đặt chỗ
									</li>
								</Link>
								<li className="hover:bg-slate-200 p-2 rounded-md">
									<LogoutLink>Đăng xuất</LogoutLink>
								</li>
							</ul>
						</PopoverContent>
					</Popover>
				</>
			) : (
				<>
					<LoginLink>
						<Button>Đăng nhập</Button>
					</LoginLink>
				</>
			)}
		</div>
	);
}

export default Header;
