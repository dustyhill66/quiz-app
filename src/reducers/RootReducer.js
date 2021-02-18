const initialState = {
	gallery: [],
	loading: true,
	items: []
}
const RootReducer = (state = initialState, action) => {
	switch (action.type) {
			case 'MENU_LOADED': 
					return {
							...state,
							gallery: action.payload,
							loading: false
					};
			case 'MENU_REQUESTED': 
					return {
							...state,
							gallery: state.menu,
							loading: true,
					}
	default: 
			return state
	}
}

export default RootReducer