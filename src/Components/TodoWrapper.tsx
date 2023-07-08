import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

//Sebelum ini ada error yang berhubungan dengan tipe data

interface Todo {
   id: string;
   task: string;
   completed: boolean;
   isEditing: boolean;
}

export const TodoWrapper = () => {
   //Sebelum
   /* const [todos, setTodos] = useState([]); */
   // Sesudah
   const [todos, setTodos] = useState<Todo[]>([]);

   //Sebelum
   /* const addTodo = (todo: any) => {
   setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
   ]); */
   //Sesudah
   const addTodo = (todo: any) => {
      const newTodo: Todo = {
         id: uuidv4(),
         task: todo,
         completed: false,
         isEditing: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      console.log(todos);
   };
   const toggleComplete = (id: string) => {
      setTodos((prevTodos) =>
         prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
         )
      );
   };
   const deleteTodo = (id: string) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };
   return (
      <div className='TodoWrapper'>
         <h1>Get Things Done!</h1>
         <TodoForm addTodo={addTodo} />
         {todos.map((todo, index) => (
            <Todo
               task={todo}
               key={index}
               toggleComplete={toggleComplete}
               deleteTodo={deleteTodo}
            />
         ))}
      </div>
   );
};
