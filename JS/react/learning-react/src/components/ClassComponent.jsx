import React from "react";

class ClassComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state.message = "bom dia";
	}

	render() {
		return <h1>{this.state.message}</h1>;
	}
}
