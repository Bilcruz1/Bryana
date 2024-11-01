import React from 'react';
import FooterContact from '../footerContact';
import location from '../../assets/icons/location-contact-icon.svg';
import phone from '../../assets/icons/phone-contact-icon.svg';
import mail from '../../assets/icons/mail-contact-icon.svg';

export default function ContactUs() {
	return (
		<div>
			<div className="font-outfit">
				<div className=" bg-[#00050F]  bg-cover bg-bottom lg:mt-[155px] mt-[70px]  pb-[40px]">
					<h6 className="text-center text-[#FF9500] font-medium text-[14px]  lg:pt-[120px] pt-[80px]  ">
						Get in Touch with Bryana Resort & Apartment
					</h6>
					<p className="text-center font-light lg:px-[20%] px-[16px] pt-[8px] lg:text-[24px] text-[16px] leading-[36px]  text-[#ffffff] ">
						We’d love to hear from you! Whether you have a question, want to
						make a reservation, or need assistance, our team is here to help.
						Contact us through any of the following methods
					</p>
					<div className="flex lg:flex-row flex-col-reverse gap-5 lg:mt-[120px] mt-[80px]">
						<div className="lg:w-[33%] w-full flex flex-col justify-center  lg:pl-[120px] lg:px-[0px] px-[16px]">
							<div>
								<div className="flex gap-[16px] mt-[38px]">
									<div>
										<img
											src={location}
											alt=""
										/>
									</div>
									<div className="">
										<h1 className="text-[16px] text-[#FF9500]">Adddress</h1>
										<div className="mt-[16px]">
											<p className="text-[16px] text-white leading-[26px] font-light">
												Plot 978, 979, Beside Magistrate Court,{' '}
											</p>
											<p className="text-[16px] text-white leading-[26px] font-light">
												Kuchiyako, Kuje, FCT-Abuja.
											</p>
										</div>
									</div>
								</div>
								<div className="flex gap-[16px] mt-[38px]">
									<div>
										<img
											src={phone}
											alt=""
										/>
									</div>
									<div className="">
										<h1 className="text-[16px] text-[#FF9500]">
											Phone Numbers{' '}
											<span className="font-light">
												(Available on whatsApp)
											</span>
										</h1>
										<div className="mt-[16px]">
											<p className="text-[16px] text-white leading-[26px] font-light">
												+234 803 747 2400
											</p>
											<p className="text-[16px] text-white leading-[26px] font-light">
												+234 902 071 7574
											</p>
										</div>
									</div>
								</div>
								<div className="flex gap-[16px] mt-[38px]">
									<div>
										<img
											src={mail}
											alt=""
										/>
									</div>
									<div className="">
										<h1 className="text-[16px] text-[#FF9500]">Gmail</h1>
										<div className="mt-[16px]">
											<p className="text-[16px] text-white leading-[26px] font-light">
												bryanaresort@gmail.com
											</p>
										</div>
									</div>
								</div>
								<div className="flex gap-[16px] mt-[38px]">
									<div>
										<img
											src={mail}
											alt=""
										/>
									</div>
									<div className="">
										<h1 className="text-[16px] text-[#FF9500]">Social Media</h1>
										<div className="mt-[16px]">
											<p className="text-[16px] text-white leading-[26px] font-light">
												Follow us on Instagram & Twitter:
											</p>
											<p className="text-[16px] text-white leading-[26px] font-medium">
												@bryanaresort_apartment
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:w-[67%] w-full">
							<div className="w-[100%] lg:h-[857px] h-[478px]  ">
								<iframe
									width="100%"
									height="100%"
									frameBorder="0"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
									src="https://maps.google.com/maps?q=Johnwood%20Hotel%20by%20Bolton,Plot%20978,979,Beside%20Magistrate%20Court,Kuchiyako,Kuje,FCT-Abuja&output=embed&zoom=disable&scrollwheel=0"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
				<FooterContact />
			</div>
		</div>
	);
}
