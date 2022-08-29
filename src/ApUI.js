import React from "react";
import { TodoCounter } from "./TodoCouter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import {TodoContext} from './TodoContext';
import {Modal} from './Modal';
import { TodoForm } from "./TodoForm";

function AppUI () {
    const {
      error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <>
        <TodoCounter/>
    
        <TodoSearch/>
        
            <TodoList>
              {error && <p>Ups! hubo un error</p>}
              {loading && <p>Estamos cargando, no desesperes!</p>}
              {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo!</p>}
            
              {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
              ))}
          </TodoList>

          {openModal && (
              <Modal>
                <TodoForm/>
            </Modal>
          )}
    
        <CreateTodoButton 
        setOpenModal={setOpenModal}
        />
        </>
    );
};

export {AppUI};