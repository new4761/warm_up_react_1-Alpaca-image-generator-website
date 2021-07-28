import React from "react"
export const Buttons = ({ part, value, changePart }) => {
    return (
        <button
            onClick={() => changePart(part, value)}>{value}</button>
    );

}