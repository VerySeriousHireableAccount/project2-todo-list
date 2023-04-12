import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Toolbar from "@mui/material/Toolbar";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
const SubmitButton = ({
  currentTask,
  handleOpenEditDialog,
  handleCloseEditDialog,
  handleOpenAddDialog,
  handleCloseAddDialog,
  openAddDialog,
  openEditDialog,
  handleEditTask,
  handleSubmit,
  setCurrentTask,
  handleDescriptionChange,
  handleDeadlineChange,
  handlePriorityChange,
  isUpdate,
}) => {
  return (
    <div>
      <Button
        variant="contained"
        startIcon={isUpdate ? <EditIcon /> : <AddCircleIcon />}
        onClick={openEditDialog ? handleOpenEditDialog : handleOpenAddDialog}
      >
        {isUpdate ? "UPDATE" : "ADD"}
      </Button>
      <Dialog
        open={openEditDialog ? openEditDialog : openAddDialog}
        onClose={openEditDialog ? handleCloseEditDialog : handleCloseAddDialog}
      >
        <Toolbar sx={{ display: "flex", backgroundColor: "#1666bf" }}>
          {isUpdate ? <EditIcon /> : <AddCircleIcon />}
          <DialogTitle>{openEditDialog ? "Edit" : "Add"} Task</DialogTitle>
        </Toolbar>
        <DialogContent>
          {openEditDialog ? (
            <></>
          ) : (
            <TextField
              margin="dense"
              label="Task"
              type="text"
              fullWidth
              value={currentTask.task || ""}
              onChange={(event) =>
                setCurrentTask({
                  ...currentTask,
                  task: event.target.value,
                  taskError: false,
                  taskErrorMessage: "",
                })
              }
              error={!currentTask.task || currentTask.taskError}
              helperText={
                (!currentTask.description && "Please enter a description") ||
                currentTask.taskErrorMessage
              }
            />
          )}

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
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" color="error">
              Priority
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              margin="dense"
              label="Priority"
              type="text"
              fullWidth
              value={currentTask.priority || ""}
              onChange={handlePriorityChange}
              error={!currentTask.priority}
              helperText={!currentTask.priority && "Please enter a priority"}
            >
              <FormControlLabel value="low" control={<Radio />} label="low" />
              <FormControlLabel value="med" control={<Radio />} label="med" />
              <FormControlLabel value="high" control={<Radio />} label="high" />
            </RadioGroup>
          </FormControl>
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
