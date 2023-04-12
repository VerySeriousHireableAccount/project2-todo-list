import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const SubmitButton = ({
  currentTask,
  handleCloseEditDialog,
  handleOpenAddDialog,
  handleCloseAddDialog,
  openAddDialog,
  handleEditTask,
  handleTaskChange,
  handleDescriptionChange,
  handleDeadlineChange,
  handlePriorityChange,
  handleSubmit,
  openEditDialog,
  isUpdate,
}) => {
  return (
    <div>
      <Button
        variant="contained"
        startIcon={isUpdate ? <EditIcon /> : <AddCircleIcon />}
        onClick={handleOpenAddDialog}
      >
        {isUpdate ? "UPDATE" : "ADD"}
      </Button>
      <Dialog
        open={openEditDialog ? openEditDialog : openAddDialog}
        onClose={openEditDialog ? handleCloseEditDialog : handleCloseAddDialog}
      >
        <DialogTitle>{openEditDialog ? "Edit" : "Add"} Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task"
            type="text"
            fullWidth
            value={currentTask.task || ""}
            onChange={handleTaskChange}
            error={!currentTask.task}
            helperText={!currentTask.task && "Please enter a task"}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={currentTask.description || ""}
            onChange={handleDescriptionChange}
            error={!currentTask.description}
            helperText={
              !currentTask.description && "Please enter a description"
            }
          />
          <TextField
            margin="dense"
            label="Deadline"
            type="text"
            fullWidth
            value={currentTask.deadline || ""}
            onChange={handleDeadlineChange}
            error={!currentTask.deadline}
            helperText={!currentTask.deadline && "Please enter a deadline"}
          />
          <TextField
            margin="dense"
            label="Priority"
            type="text"
            fullWidth
            value={currentTask.priority || ""}
            onChange={handlePriorityChange}
            error={!currentTask.priority}
            helperText={!currentTask.priority && "Please enter a priority"}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={
              openEditDialog ? handleCloseEditDialog : handleCloseAddDialog
            }
          >
            Cancel
          </Button>
          <Button onClick={openEditDialog ? handleEditTask : handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default SubmitButton;
