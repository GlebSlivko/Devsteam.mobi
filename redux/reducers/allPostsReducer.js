export const initialState = {
    allPosts: [],
};

export default function allPostReducer(state = initialState, action) {
    switch (action.type) {
        case "RECEIVE_POSTS": {
            return {
                ...state,
                allPosts: action.payload,
            };
        }
        case "ALL_POSTS_TO_STORE_FAIL": {
            return {...state};
        }
        default: {
            return state;
        }
    }
}
