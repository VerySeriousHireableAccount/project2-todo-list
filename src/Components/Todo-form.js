import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ButtonCollection from "./Commons/Button-group";
// import BasicDatePicker from "./Commons/Date-picker";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Toolbar sx={{ display: "flex", backgroundColor: "#1666bf" }}>
          <EditIcon />
          <Typography variant="h6">Edit Task</Typography>
        </Toolbar>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              display: "",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined"
              label="Description"
              defaultValue="Description"
            />
            <TextField id="outlined" label="Deadline" defaultValue="Deadline">
              {/* <BasicDatePicker /> */}
            </TextField>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Priority
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Low" control={<Radio />} label="Low" />
                <FormControlLabel value="Med" control={<Radio />} label="Med" />
                <FormControlLabel
                  value="High"
                  control={<Radio />}
                  label="High"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <ButtonCollection />
        </DialogActions>
      </Dialog>
    </div>
  );
}
