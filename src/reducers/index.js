const initialState = {
    menu: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUEST':
            return {
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_ERROR':
            return {
                menu: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
}

export default reducer;
