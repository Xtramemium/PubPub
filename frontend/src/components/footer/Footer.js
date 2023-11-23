import { contactUs, images } from '../../constants';

export const Footer = () => {
	return (
		<footer className="z-1 w-full mt-20 pr-8 pl-8">
			<div className="border-t border-t-orange-600 w-full flex justify-around p-10 gap-32 items-center ">
				<div className=" flex flex-col text-info text-2xl">
					<div>Забронировать стол: {contactUs.NUMBER}</div>
					<div>Написать нам на почту: {contactUs.EMAIL}</div>
				</div>
				<div>
					<img src={images.PikeLogo} className="w-52" alt="Pike Logo" />
				</div>
				<div>
					<iframe
						className="w-[350px] h-[250px] rounded-box "
						title={'map'}
						src="https://yandex.com/map-widget/v1/?um=constructor%3Ab1d56c0faefc782e1568cb8f93ca62fb814a5f2c49173ec4346940683b3b0e2e&amp;source=constructor"
					></iframe>
				</div>
			</div>
		</footer>
	);
};
