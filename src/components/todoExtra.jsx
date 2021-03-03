import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("todo")
@observer
class TodoExtra extends Component {
	render() {
		const { unfinishedTodo, filterTodos, unEatUpsWeight, eatUpCount, eatUpWeight } = this.props.todo;
		return (
			<div>
				<footer className="footer">
					<div className="todo-count">
					  <div className='title'>当前</div>
					  <strong>{filterTodos.length}个苹果， 共{unEatUpsWeight}克</strong>
					</div>
					<div className="todo-count">
						<div className='title'>已吃</div>
						<strong>{eatUpCount.length}个苹果， 共{eatUpWeight}克</strong>
					</div>
				</footer>
			</div> 
		);
	}
}

export default TodoExtra;
