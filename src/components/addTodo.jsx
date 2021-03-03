import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("todo")
@observer
class AddTodo extends Component {
	render() {
		return (
			<div>
				<header className="header">
					<h1>苹果篮子</h1>
				</header>
			</div>
		);
	}
}

export default AddTodo;
