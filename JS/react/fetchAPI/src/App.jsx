import Header from "./components/Header";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import store, { persistor } from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

export default function App() {
	return (
		<div className="bg-primary-dark-color w-screen h-screen">
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<BrowserRouter>
						<Header />
						<Routes />
						<ToastContainer
							autoClose={5000}
							closeOnClick
							className={"text-sm"}
						/>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</div>
	);
}
