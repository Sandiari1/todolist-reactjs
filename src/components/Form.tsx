import { useRef } from "react";
import type { RefObject } from "react";
import type { Task } from "../types";


type FormProps = {
  addTask: (event: React.FormEvent<HTMLButtonElement>) => void;
  newTask: React.RefObject<HTMLInputElement | null>;
  taskCompleted: number;
  tasks: Task[];
};

function Form({ addTask, newTask, taskCompleted, tasks }: FormProps) {
  return (
    <form>
      <input ref={newTask} type="text" placeholder="Tambah tugas..." />
      <button onClick={addTask}>Tambah</button>
      <p>
        Selesai: {taskCompleted} / {tasks.length}
      </p>
    </form>
  );
}

export default Form;