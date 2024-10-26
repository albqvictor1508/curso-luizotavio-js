import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./modules/rootSaga";
import rootReducers from "./modules/rootReducers";

import persistedReducers from "./modules/reduxPersist";
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	persistedReducers(rootReducers),
	applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
