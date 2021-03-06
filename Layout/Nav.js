import React, { useEffect, useState } from "react";
import Contact from "../components/widgets/Contact";

const Nav = ({
	contact,
	isStaticNav = false,
	selectedNavItem = "",
	openContact,
	closeContact,
	commingSoon,
	setCommingSoon,
}) => {
	const [location, setLocation] = useState("");

	useEffect(() => {
		let doc = document.documentElement;
		let w = window;

		let prevScroll = w.scrollY || doc.scrollTop;
		let curScroll;
		let direction = 0;
		let prevDirection = 0;

		let header = document.getElementById("main-nav");
		// header.classList.remove('bg-color');

		if (w.scrollY <= 150 || doc.scrollTop) {
			header.classList.remove("bg-color");
		}

		let checkScroll = function () {
			curScroll = w.scrollY || doc.scrollTop;
			/*
			 ** Find the direction of scroll
			 ** 0 - initial, 1 - up, 2 - down
			 */

			if (curScroll <= 150) {
				header.classList.remove("bg-color");
			}

			if (curScroll > prevScroll) {
				direction = 2;
			} else if (curScroll < prevScroll) {
				direction = 1;
			}

			if (direction !== prevDirection) {
				toggleHeader(direction, curScroll);
			}

			prevScroll = curScroll;
		};

		let toggleHeader = function (direction, curScroll) {
			if (direction === 2 && curScroll > 150) {
				header.classList.add("hide");
				prevDirection = direction;
			} else if (direction === 1) {
				header.classList.remove("hide");
				header.classList.add("bg-color");
				prevDirection = direction;
			}
		};

		window.addEventListener("scroll", checkScroll);
	}, []);

	useEffect(() => {
		setLocation(window.location.pathname);
	}, []);

	return (
		<>
			<nav id='main-nav'>
				<div className='container grid-3'>
					<div>
						<a className='nav-link' href='/#home'>
							Home
						</a>
						<a
							className='nav-link'
							href='/explore'
							style={{
								color: (location.includes("/explore") || selectedNavItem === "explore") && "#000",
							}}>
							Explore
						</a>
						<a className='nav-link' href='/workshops' style={{ color: location.includes("/workshops") && "#000" }}>
							Workshops
						</a>
						<a
							className='nav-link'
							href='/artists'
							style={{
								color: (location.includes("/artists") || selectedNavItem === "artists") && "#000",
							}}>
							Artists
						</a>
						<a className='nav-link' onClick={openContact}>
							Contact
						</a>
					</div>
					<div style={{ textAlign: "center" }}>
						<a href='/#home' style={{ marginRight: 0 }}>
							<img
								id='logo'
								src='/img/logo-white.svg'
								alt='Jam'
								style={{ width: 157, height: 76, objectFit: "contain" }}
							/>
						</a>
					</div>
					<div id='stores' style={{ textAlign: "end" }}>
						<a
							href='https://play.google.com/store/apps/details?id=land.arty.app'
							target='_blank'
							rel='noopener noreferrer'>
							<img src='/img/nav-google.png' alt='Google Play' style={{ marginRight: 10 }} />
						</a>
						<a
							href='https://apps.apple.com/us/app/arty-where-everything-is-art/id1606378093'
							target='_blank'
							rel='noopener noreferrer'>
							<img src='/img/nav-apple.png' alt='App store' />
						</a>
					</div>
				</div>
			</nav>

			<Contact show={contact} handleClose={closeContact} commingSoon={commingSoon} />

			<style jsx>{`
				#main-nav {
					top: 0;
					width: 100%;
					transition: all 0.5s ease;
					z-index: 99;
					background-color: ${isStaticNav ? "#ED1E46" : "transparent"};
					position: ${isStaticNav ? "relative" : "fixed"};
				}

				#main-nav.hide {
					top: -143px;
				}

				#main-nav.bg-color {
					background-color: #ed1e46;
				}

				.grid-3 {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					align-items: center;
				}

				.nav-link {
					font-size: 18px;
					color: #fff;
					cursor: pointer;
					margin-right: 20px;
				}

				#logo {
					width: 180px;
					height: 57px;
					object-fit: contain;
				}

				#stores img {
					width: 70px;
					height: 46px;
					object-fit: contain;
					cursor: pointer;
				}

				@media only screen and (max-width: 1439px) {
					.nav-link {
						margin-right: 20px;
						font-size: 17px;
					}

					#logo {
						width: 142px;
						height: 45px;
						object-fit: contain;
					}

					#stores img {
						width: 65px;
						height: 43px;
						object-fit: contain;
					}
				}
			`}</style>
		</>
	);
};

export default Nav;
