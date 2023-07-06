export const TodoForm = () => {
   return (
      <form>
         <input
            type='text'
            className='todo-input'
            placeholder='What is the task today'
         />
         <button type='submit' className='todo-btn'>
            Task
         </button>
      </form>
   );
};
