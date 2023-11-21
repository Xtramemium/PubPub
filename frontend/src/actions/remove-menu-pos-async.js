import { request } from "../utils";

export const removeMenuPosAsync = (id) => () =>
    request(`/posts/${id}`, 'DELETE');
