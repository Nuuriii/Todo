import { useState } from "react";

//sekarang masalahnya adalah kita memiliki nilai ini di sini, dan kita harus menerukan nilai ini ke status to do, dan kita bisa simpan status disini karena komponen lain perlu mengakses status juga jadi yang perlu kita lakukan sebenarnya adalah membuat status di komponen induk yang merupakan pembungkus tugas

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
