import { useState } from "react";
import { TodoForm } from "./TodoForm";
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
   return (
      <div className='TodoWrapper'>
         <TodoForm addTodo={addTodo} />
      </div>
   );
};
