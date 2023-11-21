import {request} from '../utils';
import {setMenuData} from './set-menu-data';

export const loadMenuAsync = (menuId) => (dispatch) =>
    request(`/menu/${menuId}`).then((menuData) => {
        if (menuData.data) {
            dispatch(setMenuData(menuData.data));
        }

        return menuData;
    });
