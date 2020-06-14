export const initialState = {
    posts: null,
    filters:"Ordinary_Drink",
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_CATEGORY': {
            return {...state,
                posts: action.payload};
        }
        case 'FETCH_CATEGORY_FAIL': {
            return {...state};
        }
        case 'SEND_FILTER': {
            return {...state,
                filters: action.payload};
        }

        default: {
            return state
        }
    }
}
