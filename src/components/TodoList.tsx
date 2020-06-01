import  React, {Component} from 'react';
import Todo from "../services/Todo";
import {getTodos} from "../services/todoService";
import TodoItem from "./TodoItem";
import {Space} from "antd";


interface TodoListState {
    todos: Todo[];
    loading: boolean;
}
class TodoList extends Component<any, TodoListState> {
    state = {
        todos: [],
        loading: true
    }

    async componentDidMount() {
        let todos = await getTodos();
        this.setState({todos, loading: false});
    }

    render() {
        return (
            <div>
                <h2>This is a todo List</h2>
                {this.state.loading ?(
                    <h2> Loading...</h2>
                    ) : (
                    <>
                        <Space direction="vertical" style={{width: 300}}>
                            {this.state.todos.map((todo: Todo) =>
                                <TodoItem key={todo.id} todo={todo} />
                    )}
                        </Space>
                    </>
                )}
            </div>
        );
    }
}

export default TodoList;
