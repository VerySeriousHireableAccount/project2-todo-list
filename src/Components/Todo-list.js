import React, { useState } from "react";
import Todo from "./Todo-table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SubmitButton from "./Commons/Submit-button";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const defaultTask = {
    id: "",
    task: "",
    description: "",
    deadline: "",
    priority: "",
    isComplete: false,
  };

  const handleTaskComplete = (task) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      newTasks[index] = { ...task, isComplete: !task.isComplete };
      setTasks(newTasks);
    }
  };

  const handleEditTask = () => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.id === currentTask.id);
    if (index !== -1) {
      newTasks[index] = { ...currentTask };
      setTasks(newTasks);
    }
    setCurrentTask(defaultTask);
    setOpenEditDialog(false);
    setShowSuccessSnackbar(true);
    setSuccessMessage("Task updated successfully!");
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setShowSuccessSnackbar(true);
    setSuccessMessage("Task deleted successfully!");
  };

  const handleOpenEditDialog = (task) => {
    setCurrentTask(task);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleOpenAddDialog = () => {
    setCurrentTask({});
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleDescriptionChange = (event) => {
    setCurrentTask({ ...currentTask, description: event.target.value });
  };

  const handleDeadlineChange = (event) => {
    setCurrentTask({ ...currentTask, deadline: event.target.value });
  };

  const handlePriorityChange = (event) => {
    setCurrentTask({ ...currentTask, priority: event.target.value });
  };

  const handleSubmit = () => {
    if (!currentTask.task || !currentTask.deadline || !currentTask.priority) {
      return;
    }

    if (
      tasks.some(
        (task) =>
          task.task.toLowerCase() === currentTask.task.toLowerCase() &&
          task.id !== currentTask.id
      )
    ) {
      setCurrentTask((prevTask) => ({
        ...prevTask,
        taskError: true,
        taskErrorMessage: "Task already exists",
      }));
      return;
    }

    const newTasks = [...tasks];
    if (!currentTask.id) {
      currentTask.id = Date.now();
      newTasks.push(currentTask);
    }
    setTasks(newTasks);
    setCurrentTask(defaultTask);
    setOpenAddDialog(false);
    setShowSuccessSnackbar(true);
    setSuccessMessage("Task added successfully!");
  };

  return (
    <div>
      <Toolbar sx={{ display: "flex", backgroundColor: "#1666bf" }}>
        <Box sx={{ width: "45%" }} />
        <MenuIcon />
        <Typography variant="h6" component="div" sx={{ width: "45%" }}>
          FRAMEWORKS
        </Typography>
        <SubmitButton
          currentTask={currentTask}
          handleOpenEditDialog={handleOpenEditDialog}
          handleCloseEditDialog={handleCloseEditDialog}
          handleOpenAddDialog={handleOpenAddDialog}
          handleCloseAddDialog={handleCloseAddDialog}
          openAddDialog={openAddDialog}
          openEditDialog={openEditDialog}
          handleEditTask={handleEditTask}
          handleSubmit={handleSubmit}
          setCurrentTask={setCurrentTask}
          handleDescriptionChange={handleDescriptionChange}
          handleDeadlineChange={handleDeadlineChange}
          handlePriorityChange={handlePriorityChange}
          isUpdate={false}
        />
      </Toolbar>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Deadline</TableCell>
              <TableCell align="center">Priority</TableCell>
              <TableCell align="center">Is Complete</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Todo
              tasks={tasks}
              handleDeleteTask={handleDeleteTask}
              handleOpenEditDialog={handleOpenEditDialog}
              handleTaskComplete={handleTaskComplete}
            />
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={showSuccessSnackbar}
        autoHideDuration={1000}
        onClose={() => setShowSuccessSnackbar(false)}
      >
        <Alert onClose={() => setShowSuccessSnackbar(false)} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TodoList;
