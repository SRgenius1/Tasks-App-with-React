import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';
import './z.css';

function TodoCounter() {
    const { completedTodos, totalTodos} = React.useContext(TodoContext);
    return (
    <h1 className="TodoCounter">Has completado <em>{completedTodos}</em> de <em>{totalTodos} </em>  TODOs</h1>
    );
};

export {TodoCounter};