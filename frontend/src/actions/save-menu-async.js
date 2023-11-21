import { request } from '../utils';
import { setMenuData } from './set-menu-data';

export const saveMenuAsync = (id, newMenuData) => (dispatch) => {
	const saveRequest = id
		? request(`/menu/${id}`, 'PATCH', newMenuData)
		: request('/menu', 'POST', newMenuData);

	return saveRequest.then((updatedMenu) => {
		dispatch(setMenuData(updatedMenu.data));

		return updatedMenu.data;
	});
};
