import React from "react";
import './TodoCounter.css';
import './z.css';

function TodoCounter({completedTodos, totalTodos}) {
    return (
    <h1 className="TodoCounter">Has completado <em>{completedTodos}</em> de <em>{totalTodos} </em>  TODOs</h1>
    );
};

export {TodoCounter};