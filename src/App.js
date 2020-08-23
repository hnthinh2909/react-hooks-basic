import React, { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: "I love you!" },
        { id: 2, title: "I love you babe!" },
        { id: 3, title: "I love u!" },
    ]);

    const onTodoClick = (todo) => {
        console.log(todo);
        const index = todoList.findIndex((x) => x.id === todo.id);
        if (index < 0) return;
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    };

    const handleTodoFormSubmit = (formValue) => {
        console.log(formValue);
        const newTodoList = [...todoList];
        const newTodo = {
            id: todoList.length + 1,
            ...formValue,
        };
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    };

    return (
        <div className="app">
            <h1>
                Welcome to React Hooks!
                <ColorBox />
                <TodoForm onSubmit={handleTodoFormSubmit} />
                <TodoList todos={todoList} onTodoClick={onTodoClick} />
            </h1>
        </div>
    );
}

export default App;
