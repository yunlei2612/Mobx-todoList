import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("todo")
@observer
class TodoList extends Component {
	addTodo() {
		const { todoAdd } = this.props.todo;
		todoAdd(Math.floor(Math.random() * 500));
	}
	render() {
		const { filterTodos, todoSatusChange ,isLoading} = this.props.todo;
		return (
			<div>
				<section className="main">
					<input className="toggle-all" type="checkbox" />
					{
						filterTodos.length===0 && <div className='empty'>苹果篮子空空如也</div>
					}
					{filterTodos.length > 0 && <ul className="todo-list" >
						{filterTodos.map((todo, i) => {
							return (
								<li
									className={todo.isCompleted ? "completed" : ""}
									key={todo.index}
								>
									<div className="view">
										<label>红苹果-{todo.index}号 :{todo.weight}克</label>
										<button
											onClick={() => todoSatusChange(todo.index, true)}
											className="destroy"
										>吃掉</button>
									</div>
								</li>
							);
						})}
					</ul>}
					<div
						style={{
              textAlign: "center",
              color: '#fff',
							marginBottom: '15px'
						}}
					>
						<button
							style={{
								width: 150,
								height: 40,
								backgroundColor: isLoading ? "#dddfe4":"#057ab8",
                borderRadius: 20,
                cursor: 'pointer'
							}}
							onClick={this.addTodo.bind(this)}
						>
							{isLoading ? '正在采摘...': '摘苹果'}
						</button>
					</div>
				</section>
			</div>
		);
	}
}

export default TodoList;
