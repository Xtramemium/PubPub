import { useEffect, useLayoutEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_MENU_DATA, loadMenuAsync } from '../../actions';
import { selectMenuPos } from '../../selectors';
import { MenuForm } from './components/menu-form/MenuForm';
import { MenuContent } from './components/content-menu/MenuContent';
import { Error } from '../../components';
import { Private } from '../../components/Private/private';
import { ROLES } from '../../constants';

export const CreateOrEditProduct = () => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const isCreating = !!useMatch('/add-new-pos');
	const isEditing = !!useMatch('/menu/:id/edit');
	const menu = useSelector(selectMenuPos);

	useLayoutEffect(() => {
		dispatch(RESET_MENU_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		dispatch(loadMenuAsync(params.id)).then((menuData) => {
			setError(menuData.error);
			setIsLoading(false);
		});
	}, [dispatch, params.id, isCreating]);

	if (isLoading) {
		return (
			<div className="">
				<span className="loading loading-infinity loading-lg"></span>
			</div>
		);
	}
	const MenuPage =
		isCreating || isEditing ? (
			<Private access={[ROLES.ADMIN]} serverError={error}>
				<div className="">
					<MenuForm menu={menu} />
				</div>
			</Private>
		) : (
			<div className="">
				<MenuContent menu={menu} />
			</div>
		);

	return error ? <Error error={error} /> : MenuPage;
};
