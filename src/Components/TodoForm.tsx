import { useState } from "react";

export const TodoForm = () => {
   const [value, setValue] = useState("");

   const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();

      console.log(value);
   };
   return (
      <form onSubmit={handleSubmit}>
         <input
            type='text'
            className='todo-input'
            placeholder='What is the task today'
            onChange={(e) => setValue(e.target.value)}
         />
         <button type='submit' className='todo-btn'>
            Task
         </button>
      </form>
   );
};
