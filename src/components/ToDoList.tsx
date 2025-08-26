import ToDoListButton from "./ToDoListButton";
import type { Task } from "../types"; 

type ToDoListProps = {
  tasks: Task[];
  setCompleted: (id: number) => void;
  move: (currentIndex: number, updateIndex: number) => void;
  remove: (id: number) => void;
};

function ToDoList(props: ToDoListProps) {
  // urutkan dari terbaru ke lama
  const sortedTasks = [...props.tasks].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedTasks.map((item) => {
        const classCompleted = item.completed ? "strike" : "";

        return (
          <li key={item.id}>
            <div className="left">
              <button
                className={item.completed ? "completed" : ""}
                onClick={() => props.setCompleted(item.id)}
              ></button>
            </div>
            <div className={`center ${classCompleted}`}>{item.task}</div>
            <div className="right">
              <ToDoListButton
                id={item.id}
                tasks={props.tasks}
                move={props.move}
                remove={props.remove}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ToDoList;
