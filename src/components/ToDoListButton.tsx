import type { Task } from "../types";

type ToDoListButtonProps = {
  id: number;
  tasks: Task[];
  move: (currentIndex: number, updateIndex: number) => void;
  remove: (id: number) => void;
};

function ToDoListButton(props: ToDoListButtonProps) {
  return (
    <>
      
      <span>
        <button className="delete" onClick={() => props.remove(props.id)}>
          🗑️
        </button>
      </span>
    </>
  );
}

export default ToDoListButton;
