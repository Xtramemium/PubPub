import { Link } from 'react-router-dom';
import { images } from '../../constants';

export const MainPage = () => {
	return (
		<div className="pr-14 pl-14">
			<section className="columns-1">
				<div className="text-5xl">
					<h1 className="text-5xl justify-center xl:transition duration-700 ease-in-out xl:flex xl:text-9xl xl:font-Yeseva mt-10 xl:justify-center">
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
			<div className="mt-20">
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
			</div>
			<section className="mt-20 ">
				<div className="grid-block grid grid-cols-3 grid-rows-[30rem min-content] gap-4">
					<div>
						<img
							className="rounded-md object-cover"
							src="https://i.imgur.com/Wv8O3G5.jpg"
							alt="iamge"
						/>
					</div>

					<div>
						<Link
							to={
								'https://yandex.ru/web-maps/org/13044241757/reviews?reviews[publicId]=97qd975v2zudkqe1fj4gdfqzw8&utm_source=review'
							}
							target="_blank"
						>
							<h2 className="uppercase font-Oswald mb-6">
								"{' '}
								<span className="transition duration-300 ease-in-out hover:alert-warning hover:text-blue-500">
									Любимое{' '}
								</span>
								<span className="transition duration-300 ease-in-out hover:alert-warning hover:text-blue-500">
									место
								</span>
								<span className="transition duration-300 ease-in-out hover:alert-warning hover:text-blue-500">
									{' '}
									для{' '}
								</span>
								<span className="transition duration-300 ease-in-out hover:alert-warning hover:text-blue-500">
									хорошего{' '}
								</span>
								<span className="transition duration-300 ease-in-out hover:alert-warning hover:text-blue-500">
									отдыха
								</span>{' '}
								"
							</h2>
						</Link>
						<Link
							to="https://yandex.ru/web-maps/org/13044241757/reviews?reviews[publicId]=nffbtdjv9unacnkr6ngwux4m98&utm_source=review"
							target="_blank"
						>
							<h2 className="font-Oswald uppercase mb-6">
								"{' '}
								<span className="transition duration-300 ease-in-out hover:text-amber-400">
									Уютно,{' '}
								</span>{' '}
								<span className="transition duration-300 ease-in-out hover:text-amber-400">
									хорошие{' '}
								</span>{' '}
								<span className="transition duration-300 ease-in-out hover:text-amber-400">
									напитки,{' '}
								</span>{' '}
								<span className="transition duration-300 ease-in-out hover:text-amber-400">
									{' '}
									вкусная еда."
								</span>
							</h2>
						</Link>
						<Link
							to="https://yandex.ru/web-maps/org/13044241757/reviews?reviews[publicId]=k657grzc5dn434wzzcxmtr93qc&utm_source=review"
							target="_blank"
						>
							<h2 className="font-Oswald uppercase">
								"{' '}
								<span className="transition duration-300 ease-in-out hover:text-emerald-400">
									Теплая
								</span>{' '}
								<span className="transition duration-300 ease-in-out hover:text-emerald-400">
									атмосфера
								</span>{' '}
								.{' '}
								<span className="transition duration-300 ease-in-out hover:text-emerald-400">
									Вкусное{' '}
								</span>
								<span className="transition duration-300 ease-in-out hover:text-emerald-400">
									пиво{' '}
								</span>
								<span className="transition duration-300 ease-in-out hover:text-emerald-400">
									на{' '}
								</span>{' '}
								<span className="transition duration-300 ease-in-out hover:text-emerald-400">
									любой{' '}
								</span>
								<span className="transition duration-300 ease-in-out hover:text-emerald-400">
									вкус
								</span>{' '}
								.{' '}
								<span className="transition duration-300 ease-in-out hover:text-emerald-400">
									Закуска{' '}
								</span>
								<span className="transition duration-300 ease-in-out hover:text-emerald-400">
									шах{' '}
								</span>
								<span className="transition duration-300 ease-in-out hover:text-emerald-400">
									и{' '}
								</span>
								<span className="transition duration-300 ease-in-out hover:text-emerald-400">
									мат
								</span>{' '}
								"
							</h2>
						</Link>
					</div>
					<div>
						<img
							className="rounded-md object-cover"
							src="https://i.imgur.com/hLMSPWE.jpg"
							alt="https://i.imgur.com/hLMSPWE.jpg"
						/>
					</div>
					<div>
						<p>
							<span className="text-amber-600 font-Oswald">
								"Щука" — это не просто бар
							</span>{' '}
							- это настоящая история, где в каждом уголке встречаются
							предметы из разных временных эпох, создавая уют и ностальгию.
						</p>
					</div>
					<div>
						<img
							className="rounded-md object-cover"
							src="https://i.imgur.com/vM92Mui.jpg"
							alt="https://i.imgur.com/vM92Mui.jpg"
						/>
					</div>
					<div>
						{' '}
						<div>
							<p>
								<span className="text-blue-500">
									Здесь не только о пиве
								</span>{' '}
								— вас поразит разнообразие вкусов европейской и китайской
								кухни, приготовленных с особым мастерством. В "Щуке"
								каждый визит становится уникальным путешествием в прошлое
								и пивным открытием.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
