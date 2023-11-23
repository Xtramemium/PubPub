import { useEffect, useMemo, useState } from 'react';
import { Search } from '../../components';
import { checkAccess, request } from '../../utils';
import { ROLES } from '../../constants';
import { debounce } from '../../utils';
import { SingleMenuPos } from './components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';

export const AllMenuPositions = () => {
	const [menu, setMenu] = useState([]);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	const userRole = useSelector(selectUserRole);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		request(`/menu?search=${searchPhrase}`).then(({ data: { menu } }) => {
			setMenu(menu);
			setIsLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [shouldSearch]);
	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	const isAdmin = checkAccess([ROLES.ADMIN], userRole);
	if (isLoading) {
		return (
			<div className="">
				<span className="loading loading-infinity loading-lg"></span>
			</div>
		);
	}
	return (
		<div className="flex justify-center items-center">
			<div>
				{isAdmin && (
					<Link to="/add-new-pos">
						<div className="flex justify-center ">
							<button className="transition duration-700 ease-in-out border-solid border p-2 rounded-2xl hover:scale-110 bg-amber-700/50">
								Добавить блюдо
							</button>
						</div>
					</Link>
				)}
				<div className="flex justify-center items-center">
					<Search searchPhrase={searchPhrase} onChange={onSearch} />
				</div>
				{menu.length > 0 ? (
					<div className="mt-16 justify-center grid grid-cols-3 gap-8">
						{menu.map(({ id, title, imageUrl, weight }) => (
							<SingleMenuPos
								key={id}
								id={id}
								weight={weight}
								title={title}
								imageUrl={imageUrl}
							/>
						))}
					</div>
				) : (
					<div className="items-center flex justify-center">
						Блюда не найдены
					</div>
				)}
			</div>
		</div>
	);
};
