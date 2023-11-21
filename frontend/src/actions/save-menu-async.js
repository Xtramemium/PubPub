import { request } from '../utils';
import { setMenuData } from './set-menu-data';

export const saveMenuAsync = (id, newPostData) => (dispatch) => {
    const saveRequest = id ?
        request(`/menu/${id}`, 'PATCH', newPostData) :
        request('/menu', 'POST', newPostData);

    return saveRequest.then((updatedPost) => {
        dispatch(setMenuData(updatedPost.data));

        return updatedPost.data;
    })
};
