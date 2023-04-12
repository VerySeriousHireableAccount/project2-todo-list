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

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const defaultTask = {
    id: "",
    task: "",
    description: "",
    deadline: "",
    priority: "",
    isDone: false,
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setOpenAddDialog(false);
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
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
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

  const handleTaskChange = (event) => {
    setCurrentTask({ ...currentTask, task: event.target.value });
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

  const handleCompleteChange = () => {
    setIsComplete(!isComplete);

    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.id === currentTask.id);
    if (index !== -1) {
      newTasks[index] = { ...currentTask };
      newTasks[index].isDone = isComplete;
      setTasks(newTasks);
    }
    setCurrentTask(defaultTask);
  };

  const handleSubmit = () => {
    if (
      currentTask.task &&
      currentTask.description &&
      currentTask.deadline &&
      currentTask.priority
    ) {
      if (currentTask.id) {
        handleEditTask(currentTask);
      } else {
        handleAddTask({ ...currentTask, id: Date.now() });
      }
    }
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
          isUpdate={false}
          currentTask={currentTask}
          handleCloseEditDialog={handleCloseEditDialog}
          handleOpenAddDialog={handleOpenAddDialog}
          openAddDialog={openAddDialog}
          handleEditTask={handleEditTask}
          handleTaskChange={handleTaskChange}
          handleDescriptionChange={handleDescriptionChange}
          handleDeadlineChange={handleDeadlineChange}
          handlePriorityChange={handlePriorityChange}
          handleSubmit={handleSubmit}
          openEditDialog={openEditDialog}
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
              <TableCell align="center">IsComplete</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Todo
              tasks={tasks}
              handleDeleteTask={handleDeleteTask}
              handleOpenEditDialog={handleOpenEditDialog}
              handleCompleteChange={handleCompleteChange}
              isComplete={isComplete}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TodoList;
