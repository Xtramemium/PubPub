import { ACTION_TYPE } from '../actions';

const initialPostState = {
	id: '',
	title: '',
	weight: '',
	imageUrl: '',
	content: '',
};

export const menuReducer = (state = initialPostState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_MENU_DATA:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.RESET_MENU_DATA:
			return initialPostState;
		default:
			return state;
	}
};
