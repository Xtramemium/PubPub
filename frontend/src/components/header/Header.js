import { images } from '../../constants';
import { ControlPanel } from './control-panel/Control-panel';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="flex justify-between my-auto mx-1 top-0 h-52 border-b border-b-orange-600 font-Cormorant z-1  ">
			<div className="flex ml-11 ">
				<ul className="flex-1 flex text-3xl justify-center items-center">
					<Link
						target="_blank"
						to={
							'https://drive.google.com/file/d/1u2EBk7rRWDRb_s52tWsPYvow6WNhfzpD/view?usp=sharing'
						}
					>
						<li className="transition duration-700 text-3xl ease-in-out  my-0 mx-4 hover:underline hover:scale-125">
							{' '}
							Пивное меню
						</li>
					</Link>
					<Link to={'/menu'}>
						<li className="transition duration-700 text-3xl ease-in-out  my-0 mx-4 hover:underline hover:scale-125">
							{' '}
							Меню
						</li>
					</Link>
					<Link to={'/contacts'}>
						<li className="transition duration-700 text-3xl ease-in-out  my-0 mx-4 hover:underline hover:scale-125">
							{' '}
							Контакты
						</li>
					</Link>
				</ul>
			</div>
			<div className="my-0 mx-auto items-center flex pl-10">
				<Link to={'/'}>
					<img
						className="w-32 h-32 ml-[20px]"
						src={images.PikeLogo}
						alt="Check this"
					/>
					<div className="transition duration-700 text-3xl ease-in-out  my-0 mx-4 hover:underline hover:scale-125">
						{' '}
						На главную
					</div>
				</Link>
			</div>
			<div className="flex mr-11">
				<ul className="flex-1 flex justify-center items-center">
					<Link to={'/ourteam'}>
						<li className="transition duration-700 text-3xl ease-in-out  my-0 mx-4 hover:underline hover:scale-125">
							{' '}
							Наша команда
						</li>
					</Link>
					<Link to={'/photowall'}>
						<li className="transition duration-700 text-3xl ease-in-out  my-0 mx-4 hover:underline hover:scale-125">
							{' '}
							Фотостена
						</li>
					</Link>
				</ul>
			</div>
			<div className="flex justify-center items-center">
				<ControlPanel />
			</div>
		</header>
	);
};
