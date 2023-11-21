import { images } from '../../constants';
import { ControlPanel } from './control-panel/Control-panel';
import { Link } from 'react-router-dom';

export const Header = () => {

	return (
		<div className='w-1600 my-0 mx-auto font-Cormorant z-1 '>
			<header className='flex justify-between  my-auto mx-1 top-0 z-20 h-40 border-b border-b-orange-600 '>
				<div className='flex ml-11 '>
					<ul className='flex-1 flex justify-center items-center'>
						<Link to={'/menu'}>
							<li className='transition duration-700 ease-in-out  my-0 mx-4 hover:underline hover:scale-125'> Меню</li>
						</Link>
						<Link to={'/contacts'}>
							<li className='transition duration-700 ease-in-out  my-0 mx-4 hover:underline hover:scale-125'> Контакты</li>
						</Link>

						<Link to={'/'}>
							<li className='transition duration-700 ease-in-out  my-0 mx-4 hover:underline hover:scale-125'> На главную</li>
						</Link>

					</ul>
				</div>
				<div className='my-0 mx-auto items-center flex pl-10'>
					<Link to={'/'}>
						<img className='w-32 h-32' src={images.PikeLogo} alt='Check this' />
					</Link>
				</div>
				<div className='flex mr-11'>
					<ul className='flex-1 flex justify-center items-center'>
						<Link to={'/ourteam'}>
							<li className='transition duration-700 ease-in-out  my-0 mx-4 hover:underline hover:scale-125'> Наша команда</li>
						</Link>
						<Link to={'/photowall'}>
							<li className='transition duration-700 ease-in-out  my-0 mx-4 hover:underline hover:scale-125'> Фотостена</li>
						</Link>
					</ul>
				</div>
				<div className='justify-center'>
					<ControlPanel />
				</div>
			</header>
		</div>

	);
};
