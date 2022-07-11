import { combineReducers } from "redux";
import commemtsReducer from './comments';

export default combineReducers({
    comments: commemtsReducer
});