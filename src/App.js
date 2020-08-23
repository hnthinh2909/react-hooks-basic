import React from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";

function App() {
    return (
        <div className="app">
            <h1>
                Welcome to React Hooks!
                <ColorBox />
            </h1>
        </div>
    );
}

export default App;
