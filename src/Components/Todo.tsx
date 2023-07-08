import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoProps {
   task: any;
   toggleComplete: (id: string) => void;
   deleteTodo: (id: string) => void;
   editTodo: (id: string) => void;
}

export const Todo: React.FC<TodoProps> = ({
   task,
   toggleComplete,
   deleteTodo,
   editTodo,
}) => {
   return (
      <div className='Todo'>
         <p
            onClick={() => toggleComplete(task.id)}
            className={`${task.completed ? "completed" : ""}`}
         >
            {task.task}
         </p>
         {/* Dibawah ini untuk menyimpan Icon */}
         <div>
            <FontAwesomeIcon
               icon={faPenToSquare}
               onClick={() => editTodo(task.id)}
            />
            <FontAwesomeIcon
               icon={faTrash}
               onClick={() => deleteTodo(task.id)}
            />
         </div>
      </div>
   );
};
