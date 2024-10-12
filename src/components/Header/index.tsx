import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

export function Header({ addAssignment }: { addAssignment: (title: string) => void }) {
  const [assignmentTitle, setAssignmentTitle] = useState("");

  const handleCreateAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    if (assignmentTitle.trim() !== "") {
      addAssignment(assignmentTitle);
      setAssignmentTitle(""); 
    }
  };

  return (
    <header className={styles.header}>
      <h1>BCIT Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleCreateAssignment}>
        <input
          value={assignmentTitle}
          onChange={(e) => setAssignmentTitle(e.target.value)}
          placeholder="Add a new assignment"
          type="text"
        />
        <button type="submit" disabled={assignmentTitle.trim() === ""}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
