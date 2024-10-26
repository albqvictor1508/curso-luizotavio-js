import Header from "./components/Header";
import Routes from "./routes";
import { Router } from "react-router-dom";
import { history } from "./services/history";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import store, { persistor } from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
	return (
		<div>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Router history={history}>
						<Header />
						<Routes />
						<ToastContainer autoClose={5000} closeOnClick />
					</Router>
				</PersistGate>
			</Provider>
		</div>
	);
}
