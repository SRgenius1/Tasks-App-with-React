import React from "react";
import {useTodos} from './useTodos';
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import {Modal} from './Modal';
import { TodoForm } from "./TodoForm";
import {TodoHeader} from "./TodoHeader";
import {TodoCounter} from "./TodoCouter";
import {TodoSearch} from "./TodoSearch";

function App() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos, 
    totalTodos,
    searchValue, 
    setSearchValue,
    addTodo, 
  } = useTodos();

  return (
    <>
        <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

          <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
        </TodoHeader>
    
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
            <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            />
        </Modal>
      )}

    <CreateTodoButton 
    setOpenModal={setOpenModal}
    />
    </>
);
};

export default App;
