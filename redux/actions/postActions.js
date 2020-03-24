export function fetchPost(id) {
    return function (dispatch) {
        dispatch(requestPost())
        return fetch("https://api.unsplash.com/photos/" + id + "/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0")
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receivePost(json))
            )
    }
}

export const REQUEST_POST = 'REQUEST_POST';

function requestPost() {
    return {
        type: REQUEST_POST,
    }
}

export const RECEIVE_POST = 'RECEIVE_POST';

function receivePost(json) {
    return {
        type: RECEIVE_POST,
        payload: json,
    }
}
