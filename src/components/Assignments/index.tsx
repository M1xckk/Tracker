import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({
  assignments,
  deleteAssignment,
  toggleCompleted,
}: {
  assignments: { id: number; title: string; completed: boolean }[];
  deleteAssignment: (id: number) => void;
  toggleCompleted: (id: number) => void;
}) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {assignments.filter((a) => a.completed).length} of {assignments.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment) => (
          <Assignment
            key={assignment.id}
            id={assignment.id}
            title={assignment.title}
            completed={assignment.completed}
            onDelete={() => deleteAssignment(assignment.id)} 
            onToggleCompleted={() => toggleCompleted(assignment.id)} 
          />
        ))}
      </div>
    </section>
  );
}
