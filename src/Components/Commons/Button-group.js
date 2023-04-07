import * as React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

export default function ButtonCollection() {
  return (
    <div>
      <Button variant="contained" startIcon={<EditIcon />}>
        UPDATE
      </Button>
      <Button variant="contained" startIcon={<CancelIcon />} color="error">
        DELETE
      </Button>
    </div>
  );
}
