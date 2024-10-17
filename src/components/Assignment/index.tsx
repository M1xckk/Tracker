import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircle, BsCircle } from "react-icons/bs";

export function Assignment({
  //id,             
  title,
  completed,
  onDelete,
  onToggleCompleted,
}: {
  id: number; 
  title: string;
  completed: boolean;
  onDelete: () => void;
  onToggleCompleted: () => void;
}) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={onToggleCompleted}>
        {completed ? <BsCheckCircle className={styles.completedIcon} /> : <BsCircle className={styles.incompleteIcon} />}
      </button>

      <p className={completed ? styles.textCompleted : ""}>{title}</p>

      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
