import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

interface Assignment {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const addAssignment = (title: string) => {
    const newAssignment = { id: Date.now(), title, completed: false }; 
    setAssignments([...assignments, newAssignment]);
  };

  const deleteAssignment = (id: number) => {
    const updatedAssignments = assignments.filter(assignment => assignment.id !== id);
    setAssignments(updatedAssignments);
  };

  const toggleCompleted = (id: number) => {
    const updatedAssignments = assignments.map(assignment =>
      assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
    );
    setAssignments(updatedAssignments);
  };

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments
        assignments={assignments}
        deleteAssignment={deleteAssignment}
        toggleCompleted={toggleCompleted}
      />
    </>
  );
}

export default App;
