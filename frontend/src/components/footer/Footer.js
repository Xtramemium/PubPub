import { contactUs, images } from '../../constants';

export const Footer = () => {
	return (
		<footer className="w-full z-1 mt-0 pr-0 pl-0 xl:z-1 xl:w-full xl:mt-20 xl:pr-8 xl:pl-8">
			<div className="xl:border-t xl:border-t-orange-600 xl:w-full xl:flex xl:justify-around xl:p-10 xl:gap-32 xl:items-center ">
				<div className="text-sm justify-center items-center xl:flex xl:flex-col xl:text-info xl:text-2xl">
					<div>Забронировать стол: {contactUs.NUMBER}</div>
					<div>Написать нам на почту: {contactUs.EMAIL}</div>
				</div>
				<div>
					<img
						src={images.PikeLogo}
						className="hidden xl:w-52 xl:flex"
						alt="Pike Logo"
					/>
				</div>
				<div>
					<iframe
						className="hidden xl:w-[350px] xl:h-[250px] xl:rounded-box "
						title={'map'}
						src="https://yandex.com/map-widget/v1/?um=constructor%3Ab1d56c0faefc782e1568cb8f93ca62fb814a5f2c49173ec4346940683b3b0e2e&amp;source=constructor"
					></iframe>
				</div>
			</div>
		</footer>
	);
};
