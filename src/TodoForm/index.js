import React from "react";
import './TodoForm.css';

function TodoForm ({addTodo, setOpenModal}) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };


    return (
        <form onSubmit={onSubmit}>
            <label>Añade una nueva tarea!</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Cortar la papa para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                onClick={onCancel} 
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                >Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" type="submit">Añadir</button>
            </div>
        </form>
    );
};

export {TodoForm};