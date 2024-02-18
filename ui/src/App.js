import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AddTaskForm } from "./components/AddTaskForm";
import { Task } from "./components/Task";
import axios from "axios";
import { API_URL } from "./utils";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export default function App() {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL);
      console.log(data);
      setTasks(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Error fetching tasks. Please try again.");
      setTasks([]);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm fetchTasks={fetchTasks} />
      {error ? (
        <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
          {error}
        </div>
      ) : tasks === null ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>Loading...</div>
      ) : tasks.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          No tasks available.
        </div>
      ) : (
        tasks.map((task) => (
          <Task task={task} key={task.id} fetchTasks={fetchTasks} />
        ))
      )}
    </ThemeProvider>
  );
}
