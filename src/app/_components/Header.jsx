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

function Header() {
	const { user } = useKindeBrowserClient();

	useEffect(() => {
		// console.log(user);
	}, [user]);
	const Menu = [
		{ id: 1, name: "Home", path: "/" },
		{ id: 2, name: "Doctors", path: "/search" },
		{ id: 3, name: "Contact", path: "/contact" },
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
							<li className="hover:text-red-400 cursor-pointer hover:ease-in-out transition-all hover:scale-110">
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
								<li className="hover:bg-slate-200 p-2 rounded-md">Profile</li>
								<Link href={"/mybooking"}>
									<li className="hover:bg-slate-200 p-2 rounded-md">
										My booking
									</li>
								</Link>
								<li className="hover:bg-slate-200 p-2 rounded-md">
									<LogoutLink>Log out</LogoutLink>
								</li>
							</ul>
						</PopoverContent>
					</Popover>
				</>
			) : (
				<>
					<LoginLink>
						<Button>Sign in</Button>
					</LoginLink>
				</>
			)}
		</div>
	);
}

export default Header;
