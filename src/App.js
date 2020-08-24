import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import "./App.scss";
import Hero from "./components/Hero";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <h1>React hooks</h1>

            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <Hero name="Ngoc Thinh" />
        </div>
    );
}

export default App;
