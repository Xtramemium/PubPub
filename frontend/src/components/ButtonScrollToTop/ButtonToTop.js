import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export const ButtonToTop = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 450) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};
	return (
		<div>
			{showButton && (
				<button
					className="btn btn-outline btn-warning fixed right-9 bottom-[340px]"
					onClick={scrollToTop}
				>
					<FaArrowUp />
				</button>
			)}
		</div>
	);
};
