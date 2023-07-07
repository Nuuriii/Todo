import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoProps {
   task: any;
   toggleComplete: (id: string) => void;
}

export const Todo: React.FC<TodoProps> = ({ task, toggleComplete }) => {
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
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrash} />
         </div>
      </div>
   );
};
