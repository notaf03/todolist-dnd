import React, { createContext, useContext, useEffect, useState } from "react";

// Buat context
const TaskContext = createContext();

// Buat provider
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    // Cek apakah data tersedia di localStorage
    const storedTasks = localStorage.getItem("tasks");
    // Jika data tersedia, kembalikan data tersebut
    if (storedTasks) {
      try {
        return JSON.parse(storedTasks);
      } catch (error) {
        console.error("Error parsing tasks from localStorage:", error);
      }
    }
    // Jika tidak, kembalikan array kosong
    return [];
  });

  // Simpan tasks ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

// Buat custom hook untuk menggunakan context
export const useTaskContext = () => useContext(TaskContext);
