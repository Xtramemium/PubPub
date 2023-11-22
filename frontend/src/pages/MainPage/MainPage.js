import { Link } from 'react-router-dom';
import { images } from '../../constants';

export const MainPage = () => {
	return (
		<div>
			<section>
				<div>
					<h1 className="flex text-9xl font-Yeseva mt-10 justify-center">
						Бар "Щука"{' '}
					</h1>
				</div>
				<div className="font-Yeseva text-3xl flex justify-center mt-20">
					<h2>Отдыхайте. Смотрите. Общайтесь. </h2>
				</div>
			</section>
			<section>
				<div className=" text-3xl flex justify-center mt-20 ">
					<Link to={'/translations'}>
						<h2 className="transition duration-700 ease-in-out hover:bg-black hover:scale-110 p-2 rounded-md">
							Трансляции всех видов спорта
						</h2>
					</Link>
				</div>
			</section>
			<section className="mt-20">
				<div className="flex justify-center flex-wrap gap-10 scale-75">
					<div>
						<img
							className="transition duration-700 ease-in-out hover:hover:-translate-y-1 hover:scale-75 "
							src={images.Pra4ka}
							alt="Prachechnaya"
						/>
					</div>
					<div>
						<img
							className=" object-fill transition duration-700 ease-in-out hover:scale-75 "
							src={images.chesh}
							alt="Cheshskoe"
						/>
					</div>

					<div>
						<img
							className="transition duration-700 ease-in-out   hover:scale-75 "
							src={images.neipa}
							alt="neipazza"
						/>
					</div>
					<div>
						<img
							className="transition duration-700 ease-in-out hover:hover:-translate-y-1 hover:scale-75 "
							src={images.Shneider}
							alt="Shneider"
						/>
					</div>
				</div>
			</section>
			<section className="mt-20">
				<div className="grid-block grid grid-cols-3">
					<div>
						<img src="https://i.imgur.com/Wv8O3G5.jpg" alt="iamge" />
					</div>
				</div>
			</section>
			<Menu.Button className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
				<span>John</span>
				<svg
					className="hi-mini hi-chevron-down inline-block h-5 w-5 opacity-40"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clipRule="evenodd"
					/>
				</svg>
			</Menu.Button>
		</div>
	);
};
