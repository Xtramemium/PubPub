import { Link } from 'react-router-dom';
import { images } from '../../constants';

export const MainPage = () => {
	return (
		<div className="pr-14 pl-14">
			<section>
				<div>
					<h1 className="transition duration-700 ease-in-out flex text-9xl font-Yeseva mt-10 justify-center">
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
						<h2 className="font-Oswald uppercase">
							" Теплая атмосфера. Вкусное пиво на любой вкус. Закуска шах и
							мат "
						</h2>
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
							</span>
							, это настоящая история, где в каждом уголке встречаются
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
