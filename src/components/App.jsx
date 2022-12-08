import React, { useState } from "react";

function App() {
    let [backgroundColor, setbackgroundColor] = useState("white");

    function handleClick() {
        backgroundColor === "white"
            ? setbackgroundColor("black")
            : setbackgroundColor("white");
    }

    return (
        <div className="container">
            <h1>Hello</h1>
            <input type="text" placeholder="What's your name?" />
            <button
                style={{ backgroundColor: backgroundColor }}
                onMouseOver={handleClick}
                onMouseOut={handleClick}
            >
                Submit
            </button>
        </div>
    );
}

export default App;
