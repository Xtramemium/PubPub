import { ACTION_TYPE } from './action-types';

export const setMenuData = (menuData) => ({
    type: ACTION_TYPE.SET_MENU_DATA,
    payload: menuData,
});
