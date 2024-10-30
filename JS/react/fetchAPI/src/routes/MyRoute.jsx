import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function MyRoute({ component: Component, isClosed, ...rest }) {
	const isLoggedIn = false;
	const { pathname } = useLocation();

	if (!pathname) {
		console.log("pathname its undefined");
		return null;
	}

	console.log("PATH:", pathname);

	if (isClosed && !isLoggedIn) {
		return (
			<Redirect
				to={{
					pathname: "/login",
					state: {
						prevPath: pathname,
					},
				}}
			/>
		);
	}

	return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
	isClosed: false,
};

MyRoute.propTypes = {
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
		.isRequired,
	isClosed: PropTypes.bool,
};
