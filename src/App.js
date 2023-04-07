import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import AccessibleTable from "./Components/Todo-table";
import Header from "./Components/Header";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Header />
        <AccessibleTable />
      </AppBar>
    </Box>
  );
}
