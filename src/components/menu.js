"use client";
import React, { useEffect, useRef, useState } from "react";
import "./menu.css";
import Link from "next/link";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
const menuLinks = [
	{ path: "/", label: "Home" },
	{ path: "/work", label: "Work" },
	{ path: "/about", label: "About" },
	{ path: "/contact", label: "Contact" },
	{ path: "/lab", label: "Lab" },
];

function Menu() {
	const container = useRef();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const tl = useRef();

	const tonggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useGSAP(
		() => {
			gsap.set(".menu-item-hodlder", { y: 75 });
			tl.current = gsap
				.timeline({ paused: true })
				.to(".menu-overlay", {
					duration: 1.25,
					clipPath: "polygon(0 0, 100% 0, 100% 100%,0 100%)",
					ease: "power4.inOut",
				})
				.to(".menu-item-hodlder", {
					y: 0,
					duration: 1,
					stagger: 0.1,
					ease: "power4.inOut",
					delay: -0.75,
				});
		},
		{
			scope: container,
		}
	);

	useEffect(() => {
		if (isMenuOpen) {
			tl.current.play();
		} else {
			tl.current.reverse();
		}
	}, [isMenuOpen]);

	return (
		<div className="menu-container" ref={container}>
			<div className="menu-bar">
				<div className="menu-logo">
					<Link href={"/"}>Hello</Link>
				</div>
				<div className="menu-open" onClick={tonggleMenu}>
					Menu
				</div>
			</div>

			<div className="menu-overlay">
				<div className="menu-overlay-bar">
					<div className="menu-logos">
						<Link href={"/"}>Logo</Link>
					</div>
					<div className="menu-close" onClick={tonggleMenu}>
						<p className="text-lg">Close</p>
					</div>
				</div>
				<div className="menu-close-icon">
					<p>Icon</p>
				</div>
				<div className="menu-copy">
					<div className="menu-links">
						{menuLinks.map((link, index) => (
							<div className="menu-link-item" key={index}>
								<div className="menu-item-hodlder" onClick={tonggleMenu}>
									<Link href={link.path} className="menu-link">
										{link.label}
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Menu;
