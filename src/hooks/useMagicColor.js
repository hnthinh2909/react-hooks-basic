import React, { useEffect, useState, useRef } from "react";

function randomColor(currentColor) {
    const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];

    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;

    while (newIndex === currentIndex) {
        newIndex = Math.trunc(Math.random() * 5);
    }

    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState("transparent");
    const colorRef = useRef("transparent");

    useEffect(() => {
        const colorInterval = setInterval(() => {
            console.log("Change color: ", colorRef.current);

            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1500);

        return () => {
            clearInterval(colorInterval);
        };
    }, []);

    return color;
}

export default useMagicColor;
