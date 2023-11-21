import { contactUs } from '../../constants';

export const Footer = () => {

	return (
		<footer className='z-1 w-full flex justify-between'>
			<div className='w-full flex justify-between '>
				<div>
					Забронировать стол: {contactUs.NUMBER}
				</div>
				<div>
					Написать нам на почту: {contactUs.EMAIL}
				</div>
			</div>
		</footer>
	);
};