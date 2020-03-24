import {combineReducers} from "redux";
import postReducer from "./postReduser";
import allPostsReducer from "./allPostsReducer";

export default combineReducers({
    postReducer,
    allPostsReducer,
});
