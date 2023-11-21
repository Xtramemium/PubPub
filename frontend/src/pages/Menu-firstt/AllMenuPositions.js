import { useEffect, useMemo, useState } from 'react';
import { Search } from '../../components';
import { checkAccess, request } from '../../utils';
import { PAGINATION_LIMIT, ROLES } from '../../constants';
import { debounce } from '../../utils';
import { SingleMenuPos } from './components';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMenuPos, selectUserRole } from '../../selectors';

export const AllMenuPositions = () => {
	const [menu, setMenu] = useState([]);
	const [page, setPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	const userRole = useSelector(selectUserRole);

	useEffect(() => {
		request(
			`/menu?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`,
		).then(({ data: { menu } }) => {
			console.log(menu);
			setMenu(menu);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, shouldSearch]);
	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	const isAdmin = checkAccess([ROLES.ADMIN], userRole);

	return (
		<div className="flex justify-center items-center">
			<div>
				{isAdmin && (
					<div>
						<button>Добавить меню</button>
					</div>
				)}
				<div className="flex justify-center items-center">
					<Search searchPhrase={searchPhrase} onChange={onSearch} />
				</div>
				{menu.length > 0 ? (
					<div className="mt-16 flex justify-center grid-cols-2 gap-8">
						{menu.map(({ id, title, imageUrl }) => (
							<SingleMenuPos
								key={id}
								id={id}
								title={title}
								imageUrl={imageUrl}
							/>
						))}
					</div>
				) : (
					<div className="no-posts-found">Статьи не найдены</div>
				)}
			</div>
		</div>
	);
};
