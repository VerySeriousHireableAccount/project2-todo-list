import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import ButtonGroup from "@mui/material/ButtonGroup";

const Todo = ({
  tasks,
  handleDeleteTask,
  handleOpenEditDialog,
  handleCompleteChange,
  isComplete,
}) => {
  return tasks.map((task) => (
    <TableRow key={task.id}>
      <TableCell align="center">{task.task}</TableCell>
      <TableCell align="center">{task.description}</TableCell>
      <TableCell align="center">{task.deadline}</TableCell>
      <TableCell align="center">{task.priority}</TableCell>
      <TableCell align="center">
        <Checkbox checked={task.isDone} onChange={handleCompleteChange} />
      </TableCell>
      <TableCell align="center">
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="contained"
          className="icons"
        >
          {task.isDone ? (
            <></>
          ) : (
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={() => handleOpenEditDialog(task)}
              className="edit-icon"
            >
              UPDATE
            </Button>
          )}
          <Button
            variant="contained"
            startIcon={<CancelIcon />}
            color="error"
            onClick={() => handleDeleteTask(task.id)}
            className="delete-icon"
          >
            DELETE
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  ));
};

export default Todo;
