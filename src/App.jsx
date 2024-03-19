import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTask from "./components/ListTask";
import toast, { Toaster } from "react-hot-toast";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [tasks, setTasks] = useState([]);

  console.log("tasks", tasks);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className="flex h-screen w-screen flex-col items-center gap-16 bg-slate-200 p-3 pt-32">
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTask tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
