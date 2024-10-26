import React from "react";
import { Switch } from "react-router-dom";
import MyRoute from "./MyRoute";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import Home from "../pages/Home";

export default function Routes() {
	return (
		<Switch>
			<MyRoute exact path="/" component={Home} />
			<MyRoute exact path="/login" component={Login} />

			<MyRoute path="*" component={Page404} />
		</Switch>
	);
}
