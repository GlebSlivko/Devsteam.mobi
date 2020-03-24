export const initialState = {
    post: null,
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_POST': {
            return {...state, post: action.payload};
        }
        case 'FETCH_POST_FAIL': {
            return {...state};
        }

        default: {
            return state
        }
    }
}
