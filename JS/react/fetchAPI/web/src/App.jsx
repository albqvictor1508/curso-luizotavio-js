import Header from "./components/Header";
import Routes from "./routes";
import { Router } from "react-router-dom";
import { history } from "./services/history";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import store from "./store/index";
import { Provider } from "react-redux";

export default function App() {
	return (
		<div>
			<Provider store={store}>
				<Router history={history}>
					<Header />
					<Routes />
					<ToastContainer autoClose={5000} closeOnClick />
				</Router>
			</Provider>
		</div>
	);
}
