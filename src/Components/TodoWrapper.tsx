import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export const TodoWrapper = () => {
   return (
      <div className='TodoWrapper'>
         <TodoForm />
         <Todo />
      </div>
   );
};
