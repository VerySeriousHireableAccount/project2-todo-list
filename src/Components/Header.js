import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <Toolbar sx={{ display: "flex", backgroundColor: "#1666bf" }}>
      <Box sx={{ width: "45%" }} />
      <MenuIcon />
      <Typography variant="h6" component="div" sx={{ width: "45%" }}>
        FRAMEWORKS
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddCircleIcon />}
        sx={{ width: "10%", backgroundColor: "#1a77d4" }}
      >
        Add
      </Button>
    </Toolbar>
  );
}
