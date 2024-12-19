import React, { useEffect, useState } from 'react';
import { HiX } from 'react-icons/hi';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/icons/bryana-logo-nav.svg';
import close from '../assets/icons/menu-close-icon.svg';
import { Link as ScrollLink, scroller } from 'react-scroll';
import locations from '../assets/icons/location-nav-icon.svg';
import phone from '../assets/icons/phone-nav-icon.svg';
import mail from '../assets/icons/mail-nav-icon.svg';
import youtube from '../assets/icons/youtube-icon-footer.svg';
import instagram from '../assets/icons/instagram-icon-footer.svg';
import twitter from '../assets/icons/twitter-icon-footer.svg';
import facebook from '../assets/icons/facebook-icon-footer.svg';
import WhatsAppButton from './whatsapp';

function Hamburger({ setIsOpen }) {
	const [animation, setAnimation] = useState('');
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setAnimation('slide-in'); // Trigger slide-in animation
		document.body.style.overflow = 'hidden'; // Prevent body scroll

		return () => {
			document.body.style.overflow = 'auto'; // Restore body scroll on unmount
		};
	}, []);

	const handleClose = () => {
		setAnimation('slide-out'); // Trigger slide-out animation
		setTimeout(() => {
			setIsOpen(false);
			document.body.style.overflow = 'auto'; // Restore scroll after closing
		}, 500); // Adjust timeout to match animation duration
	};

	const handleNavigation = (path, sectionId = null) => {
		if (path === '/') {
			if (location.pathname === '/') {
				if (sectionId) {
					scroller.scrollTo(sectionId, {
						smooth: true,
						offset: -150,
						duration: 500,
					});
				}
			} else {
				navigate('/');
				setTimeout(() => {
					if (sectionId) {
						scroller.scrollTo(sectionId, {
							smooth: true,
							offset: -150,
							duration: 500,
						});
					}
				}, 500);
			}
		} else {
			navigate(path);
		}
		handleClose();
	};

	const getSlideStyles = () => ({
		transform: animation === 'slide-in' ? 'translateX(0)' : 'translateX(-100%)',
		transition: 'transform 0.5s ease-in-out',
	});

	// Function to apply active styles
	const getLinkStyles = path => ({
		color: location.pathname === path ? '#FF9500' : '#ffff',
		fontWeight: location.pathname === path ? 'bold' : 'normal',
	});

	return (
		<div className="fixed top-0 left-0 font-outfit w-full h-full z-50">
			<div
				className="fixed inset-0 bg-black opacity-50"
				onClick={handleClose}
			></div>
			<div
				className="relative w-full pt-[24px] text-center"
				style={getSlideStyles()}
			>
				<div className="bg-[#00050F] lg:w-full w-[95%] h-screen absolute top-0 left-0 font-medium flex flex-col justify-between px-[20px] pb-[24px]">
					<div className="flex flex-col gap-[32px]">
						<div className="flex justify-between pt-[24px]">
							<img
								src={logo}
								alt=""
								onClick={() => handleNavigation('/', 'home')}
							/>
							<button
								className="rounded-md text-[#3a5791]"
								onClick={handleClose}
							>
								<img
									src={close}
									alt=""
									className="w-[30px] h-[30px]"
								/>
							</button>
						</div>

						<ScrollLink
							to="home"
							duration={500}
							smooth={true}
							offset={-70}
							onClick={() => handleNavigation('/', 'home')}
							style={getLinkStyles('/')}
							className="text-[24px] text-left cursor-pointer mt-[0px]"
						>
							Home
						</ScrollLink>

						<RouterLink
							to="/facilities"
							style={getLinkStyles('/facilities')}
							className="text-[24px] text-left cursor-pointer"
							onClick={() => handleNavigation('/facilities')}
						>
							Our Facilities
						</RouterLink>

						<RouterLink
							to="/contact-us"
							style={getLinkStyles('/contact-us')}
							className="text-[24px] text-left cursor-pointer"
							onClick={() => handleNavigation('/contact-us')}
						>
							Contact us
						</RouterLink>
					</div>

					<div className=" text-[#ffff] pt-[16px]">
						<div className="flex flex-col gap-[16px] text-[16px] font-light">
							<div className="flex gap-[20px] items-center">
								<a href="#">
									<img
										src={locations}
										alt="location-icon-header"
										className="h-[32px] w-[32px]"
										onClick={() =>
											window.scrollTo({ top: 0, behavior: 'smooth' })
										}
									/>
								</a>
								<p className="text-left text-[14px] font-light leading-[24px] ">
									Plot 978, 979, Beside Magistrate Court, Kuchiyako, Kuje,
									FCT-Abuja.
								</p>
							</div>
							<div className="flex gap-[16px] items-center">
								<a href="#">
									<img
										src={phone}
										alt="phone-icon-header"
										className=" "
										onClick={() =>
											window.scrollTo({ top: 0, behavior: 'smooth' })
										}
									/>
								</a>
								<div className="text-left  text-[14px] font-light leading-[24px]  ">
									<p>+234 803 747 2400</p>
									<p>+234 902 293 4089</p>
								</div>
							</div>

							<div className="flex gap-[16px] items-center">
								<a href="#">
									<img
										src={mail}
										alt="mail-icon-header"
										className=""
										onClick={() =>
											window.scrollTo({ top: 0, behavior: 'smooth' })
										}
									/>
								</a>
								<p className="text-left  text-[14px] font-light leading-[24px] ">
									bryanaresort@gmail.com
								</p>
							</div>
						</div>
						<div className="flex gap-[16px] mt-[24px]">
							<div className="flex items-center">
								<a href="https://www.youtube.com/@BryanaResort">
									<img
										src={youtube}
										alt="mail-icon-header"
										className=""
										onClick={() =>
											window.scrollTo({ top: 0, behavior: 'smooth' })
										}
									/>
								</a>
							</div>
							<div className="flex items-center">
								<a href="https://www.instagram.com/bryanaresort_apartment/">
									<img
										src={instagram}
										alt="mail-icon-header"
										className=""
										onClick={() =>
											window.scrollTo({ top: 0, behavior: 'smooth' })
										}
									/>
								</a>
							</div>
							<div className="flex  items-center">
								<a href="https://x.com/bryanaresort">
									<img
										src={twitter}
										alt="mail-icon-header"
										className=""
										onClick={() =>
											window.scrollTo({ top: 0, behavior: 'smooth' })
										}
									/>
								</a>
							</div>
							<div className="flex items-center">
								<a href="https://www.facebook.com/people/Bryana-Resort-Apartment/61567517363921/?mibextid=LQQJ4d">
									<img
										src={facebook}
										alt="mail-icon-header"
										className=""
										onClick={() =>
											window.scrollTo({ top: 0, behavior: 'smooth' })
										}
									/>
								</a>
							</div>
						</div>
						<a>
							<button className="rounded-md text-center cursor-pointer  text-[#000000] bg-[#FF9500] w-full p-1 h-[45px]   text-[16px] font-medium flex justify-center items-center mt-[24px]">
								<WhatsAppButton />
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
