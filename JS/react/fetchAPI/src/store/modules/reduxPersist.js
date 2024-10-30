import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
	key: "AUTHENTICATION",
	storage,
	whitelist: ["auth"],
};

export default (reducers) => persistReducer(persistConfig, reducers);
