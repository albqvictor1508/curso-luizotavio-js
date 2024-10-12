import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";

//react router
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/task",
		element: <TaskPage />,
	},
]);
//igual as routes do backend

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
