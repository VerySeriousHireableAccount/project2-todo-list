import React from "react";
import "./App.css";
import TodoList from "./Components/Todo-list";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box>
      <AppBar position="static">
        <TodoList />
      </AppBar>
    </Box>
  );
}

export default App;
