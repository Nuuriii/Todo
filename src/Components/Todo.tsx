import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = () => {
   return (
      <div className='Todo'>
         <p>Go to school</p>
         {/* Dibawah ini untuk menyimpan Icon */}
         <div>
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrash} />
         </div>
      </div>
   );
};
