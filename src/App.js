import React, { useState, useEffect } from "react";
import queryString from "querystring";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFiltersForm from "./components/PostFIltersForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";

function App() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: "I love you!" },
        { id: 2, title: "I love you babe!" },
        { id: 3, title: "I love u!" },
    ]);

    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });

    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        title_like: "",
    });

    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();

                const { data, pagination } = responseJSON;
                setPagination(pagination);
                setPostList(data);
                console.log(pagination);
            } catch (err) {
                console.log("Err: ", err);
            }
        }

        fetchPostList();
    }, [filters]);

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

    const handlePageChange = (newPage) => {
        console.log("newPage: ", newPage);
        setFilters({
            ...filters,
            _page: newPage,
        });
    };

    const handleFiltersChange = (newFilters) => {
        console.log();
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm,
        });
    };

    const [showClock, setShowClock] = useState(true);

    return (
        <div className="app">
            <h1>
                Welcome to React Hooks!
                {/* <ColorBox />
                <TodoForm onSubmit={handleTodoFormSubmit} />
                <TodoList todos={todoList} onTodoClick={onTodoClick} /> */}
                {showClock && <Clock />}
                <BetterClock />
                <button onClick={() => setShowClock(!showClock)}>
                    {showClock ? "Hide Clock" : "Display Clock"}
                </button>
                {/* <PostFiltersForm onSubmit={handleFiltersChange} />
                <PostList posts={postList} />
                <Pagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                /> */}
            </h1>
        </div>
    );
}

export default App;
