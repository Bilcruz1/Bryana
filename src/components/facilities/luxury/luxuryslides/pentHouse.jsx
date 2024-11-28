import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Your images here
import img1 from '../../../../assets/slides/luxuryslides/delux/slide3.jpg';
import img2 from '../../../../assets/slides/luxuryslides/delux/slide4.jpg';
import img3 from '../../../../assets/slides/luxuryslides/delux/slide5.jpg';
import img4 from '../../../../assets/slides/luxuryslides/delux/slide6.jpg';

import arrowNext from '../../../../assets/icons/arrowNext.svg';
import arrowBack from '../../../../assets/icons/arrowBack.svg';

export default function PentHouse({ currentSlide, setCurrentSlide }) {
	const images = [img1, img2, img3, img4];

	const handleSlideChange = swiper => {
		setCurrentSlide(swiper.realIndex + 1); // Correctly update the current slide number
	};

	return (
		<div className="relative w-full">
			<Swiper
				modules={[Navigation, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				navigation={{
					nextEl: '.custom-next',
					prevEl: '.custom-prev',
				}}
				loop={true}
				autoplay={{ delay: 5000 }}
				className="swiper-container"
				onSlideChange={handleSlideChange}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<div className="relative">
							<img
								src={image}
								alt={`Slide ${index + 1}`}
								className="w-full lg:h-[800px] h-[393px] object-cover rounded-b-2xl"
							/>
							<div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
								<div className="custom-prev bg-black bg-opacity-50 text-white lg:px-[16px] px-[6px] lg:py-[21px] py-[9px] rounded-full cursor-pointer hover:bg-opacity-70">
									<img
										src={arrowBack}
										alt="Previous"
										className="lg:w-[36px] w-[22px] h-[16px] lg:h-[25px]"
									/>
								</div>
							</div>
							<div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2">
								<div className="custom-next bg-black bg-opacity-50 text-white lg:px-[16px] px-[6px] lg:py-[21px] py-[9px] rounded-full cursor-pointer hover:bg-opacity-70">
									<img
										src={arrowNext}
										alt="Next"
										className="lg:w-[36px] w-[22px] h-[16px] lg:h-[25px]"
									/>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
