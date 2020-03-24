export function fetchPosts() {

    return function (dispatch) {
        dispatch(requestPosts());
        return fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0")
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receivePosts(json))
            )
    }
}

export const REQUEST_POSTS = 'REQUEST_POSTS';

function requestPosts() {
    return {
        type: REQUEST_POSTS,
    }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function receivePosts(json) {
    return {
        type: RECEIVE_POSTS,
        payload: json,
    }
}
