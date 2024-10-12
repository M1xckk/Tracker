import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

interface Assignment {
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const addAssignment = (title: string) => {
    const newAssignment = { title, completed: false };
    setAssignments([...assignments, newAssignment]);
  };

  const deleteAssignment = (index: number) => {
    const updatedAssignments = assignments.filter((_, i) => i !== index);
    setAssignments(updatedAssignments);
  };

  const toggleCompleted = (index: number) => {
    const updatedAssignments = assignments.map((assignment, i) =>
      i === index ? { ...assignment, completed: !assignment.completed } : assignment
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
