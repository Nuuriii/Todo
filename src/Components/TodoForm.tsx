import { useState } from "react";

export const TodoForm = () => {
   const [value, setValue] = useState("");
   return (
      <form>
         <input
            type='text'
            className='todo-input'
            placeholder='What is the task today'
            onChange={(e) => console.log(e.target.value)}
         />
         <button type='submit' className='todo-btn'>
            Task
         </button>
      </form>
   );
};
