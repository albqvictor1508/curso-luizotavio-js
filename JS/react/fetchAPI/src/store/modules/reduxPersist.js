import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
	key: "REACT_SCHOOL",
	storage,
	whitelist: ["reducers"],
};

export default (reducers) => persistReducer(persistConfig, reducers);
