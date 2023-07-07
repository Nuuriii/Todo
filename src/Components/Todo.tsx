import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task }: { task: any }) => {
   return (
      <div className='Todo'>
         <p>{task.task}</p>
         {/* Dibawah ini untuk menyimpan Icon */}
         <div>
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrash} />
         </div>
      </div>
   );
};
