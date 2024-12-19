import React, { useState, useEffect } from 'react';
import menuData from '../components/menuData.json';
import menuHeader from '../assets/images/bryanLogo.svg';
import menuFooter from '../assets/images/bryanLogo.svg';

const MenuPage = () => {
	const [menuCategories, setMenuCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [text, setText] = useState('Copy link');
	const [activeTab, setActiveTab] = useState('food'); // Tracks the active tab

	useEffect(() => {
		// Simulate a fetch delay for loading
		setTimeout(() => {
			const categories = Object.entries(menuData);
			setMenuCategories(categories);
			setLoading(false);
		}, 1000);
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	const copyToClipboard = () => {
		const link = 'https://bryanaresort.com/menuPage';
		navigator.clipboard
			.writeText(link)
			.then(() => {
				setText('Copied');
				setTimeout(() => setText('Copy link'), 2000);
			})
			.catch(error => {
				console.error('Failed to copy text: ', error);
			});
	};

	return (
		<>
			<div className="lg:px-[120px] bg-[url('/src/assets/images/menuHeader.png')] font-outfit bg-cover bg-bottom flex lg:flex-row flex-col gap-[16px] justify-between items-center lg:py-[69px] py-[40px]">
				<img
					src={menuHeader}
					alt="menuHeader"
				/>
				<div className="text-[#ffff]">
					<p className="lg:text-[64px] text-[32px] font-extrabold">
						SEE OUR MENU
					</p>
					{/* <p className="lg:text-[40px] text-[20px] font-medium text-[#EFBD4C]">
						All Meals Attract 7.5% VAT
					</p> */}
				</div>
				<p
					onClick={copyToClipboard}
					style={{ cursor: 'pointer' }}
					className="bg-[#ffff] text-[#1B1F26] px-[16px] py-[8px] rounded-md"
				>
					{text}
				</p>
			</div>

			<div className="bg-[#000000] font-outfit flex justify-center text-[#ffff]">
				<div className="lg:w-[70%] w-full lg:py-[120px] py-[40px]">
					{/* Tabs */}
					<div className="flex lg:px-[0] px-[16px] gap-2 mb-8 w-full">
						<button
							className={`lg:py-[24px] py-[12px] text-[16px] font-extrabold rounded-md w-full ${
								activeTab === 'food'
									? 'bg-[#EFBD4C] text-[#1B1F26] border-2 border-[#ffff]'
									: 'bg-[#1B1F26]'
							}`}
							onClick={() => setActiveTab('food')}
						>
							Food
						</button>
						<button
							className={`lg:py-[24px] py-[12px] text-[16px] font-extrabold  rounded-md w-full ${
								activeTab === 'drinks'
									? 'bg-[#EFBD4C] text-[#1B1F26] border-2 border-[#ffff]'
									: 'bg-[#1B1F26]'
							}`}
							onClick={() => setActiveTab('drinks')}
						>
							Drinks
						</button>
					</div>

					{/* Display categories based on activeTab */}
					{menuCategories
						.filter(([categoryName]) =>
							activeTab === 'food'
								? categoryName !== 'drinks'
								: categoryName === 'drinks'
						)
						.map(([categoryName, items]) => (
							<div
								key={categoryName}
								className="mb-12"
							>
								<h2 className="lg:text-[32px] text-[20px] lg:px-0 px-[16px] font-extrabold text-[#EFBD4C]">
									{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
								</h2>
								<ol className="mt-[24px]">
									{items.length > 0 ? (
										items.map((item, index) => (
											<li
												key={item.id}
												className={`flex justify-between py-[12px] px-[16px] lg:text-[20px] text-[12px] font-semibold ${
													index % 2 === 0 ? 'bg-[#292929]' : 'bg-[#1B1F26]'
												}`}
											>
												<span>
													{index + 1}. {item.name}
												</span>
												<span>₦{item.price}</span>
											</li>
										))
									) : (
										<p>No items available</p>
									)}
								</ol>
							</div>
						))}
				</div>
			</div>
			<div className="flex font-outfit justify-center items-center bg-[#1B1F26] lg:py-[32px] py-[16px]">
				<img
					src={menuFooter}
					alt=""
					className="h-[58px] w-[72px]"
				/>
			</div>
		</>
	);
};

export default MenuPage;
