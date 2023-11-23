import { images } from '../../constants';
import { ControlPanel } from './control-panel/Control-panel';
import { Link } from 'react-router-dom';

export const Header = () => {
	const scrollToContacts = () => {
		window.scrollTo({
			top: 2500,
		});
	};
	return (
		<header className="flex justify-between my-auto mx-1 top-0 h-52 border-b border-b-orange-600 font-Cormorant z-1  ">
			<div className="flex ml-11 ">
				<ul className="flex-1 flex text-3xl justify-center items-center">
					<div className="dropdown ">
						<label tabIndex={0} className="btn m-1 text-3xl">
							Меню PDF
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li className="text-2xl">
								<Link
									to="https://drive.google.com/file/d/1u2EBk7rRWDRb_s52tWsPYvow6WNhfzpD/view?usp=sharing"
									target="__blank"
								>
									Пивное меню
								</Link>
							</li>
							<li className="text-2xl">
								<Link
									to="https://drive.google.com/file/d/1KUUuCPWfNbbNlFDvCv-rTJXN6NLA5u-6/view?usp=sharing"
									target="__blank"
								>
									Европейское меню
								</Link>
							</li>
							<li className="text-2xl">
								<Link
									to="https://drive.google.com/file/d/1G-LNT7s5Z5a_7G1GUqqaQX7pJ3HPxlLr/view?usp=sharing"
									target="__blank"
								>
									Азиатское меню
								</Link>
							</li>
						</ul>
					</div>
					<Link to={'/menu'}>
						<li className="transition duration-700 text-3xl ease-in-out  my-0 mx-4 hover:underline hover:scale-125">
							{' '}
							Меню
						</li>
					</Link>
					<li className="transition duration-700 text-3xl ease-in-out  my-0 mx-4 hover:underline hover:scale-125">
						<button onClick={scrollToContacts}>Контакты</button>
					</li>
				</ul>
			</div>
			<div className="my-0 mx-auto items-center flex pl-10">
				<Link to={'/'}>
					<img
						className="transition duration-700 ease-in-out w-32 h-32 ml-[20px] hover:"
						src={images.PikeLogo}
						alt="Check this"
					/>
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
