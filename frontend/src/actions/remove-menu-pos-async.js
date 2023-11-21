import { request } from '../utils';

export const removeMenuPosAsync = (id) => () => request(`/menu/${id}`, 'DELETE');
