import { combineReducers } from "redux";
import auth from "./auth/reducer";

export default combineReducers({
	reducers: auth,
});
