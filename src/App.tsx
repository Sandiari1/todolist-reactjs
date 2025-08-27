import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

type Task = {
  id: number;
  task: string;
  completed: boolean;
};

function App() {
  const newTask = useRef<HTMLInputElement>(null);
  const STORAGE = "TODOLIST_APP";

  const [tasks, setTasks] = useState<Task[]>(() => {
    return JSON.parse(localStorage.getItem(STORAGE) || "[]") as Task[];
  });

  const [taskCompleted, setTaskCompleted] = useState(0);

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(tasks));
    const complete = tasks.filter((item) => item.completed === true).length;
    setTaskCompleted(complete);
  }, [tasks]);

  function setId() {
    if (tasks.length === 0) {
      return 1;
    } else {
      return tasks[0].id + 1;
    }
  }

  function addTask(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!newTask.current || newTask.current.value === "") {
      alert("Silakan masukkan hal yang akan kamu kerjakan");
      return;
    }
    const data: Task = {
      id: setId(),
      task: newTask.current.value,
      completed: false,
    };
    newTask.current.value = "";
    setTasks([...tasks, data]);
  }

  function setCompleted(id: number) {
    const taskItem = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasks(taskItem);
  }

  function move(currentIndex: number, updateIndex: number) {
    if (updateIndex < 0 || updateIndex >= tasks.length) return;

    const currentData = tasks[currentIndex];
    const updateData = tasks[updateIndex];

    tasks[currentIndex] = { ...currentData, id: updateData.id };
    tasks[updateIndex] = { ...updateData, id: currentData.id };

    const newData = [...tasks];
    setTasks(newData);
  }

  function remove(id: number) {
    if (window.confirm("Yakin akan hapus data ini?")) {
      setTasks(tasks.filter((item) => item.id !== id));
    }
  }

  return (
    <div className="app-container">
      <header>
        <h3>TODOLIST</h3>
        <span>
          {taskCompleted} / {tasks.length}
        </span>
      </header>

      <div className="input-box">
        <input ref={newTask} type="text" placeholder="Add Your Task" />
        <button onClick={addTask}>Add Todo</button>
      </div>

      <ToDoList
        tasks={tasks}
        setCompleted={setCompleted}
        move={move}
        remove={remove}
      />
    </div>
  );
}

export default App;
