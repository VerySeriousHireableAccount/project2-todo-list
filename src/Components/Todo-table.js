import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import ButtonCollection from "./Commons/Button-group";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormDialog from "./Todo-form";

function createData(
  title,
  description,
  deadline,
  priority,
  isComplete,
  action
) {
  return { title, description, deadline, priority };
}

const rows = [createData("title01", "description01", "02/03/2022", "low")];

export default function AccessibleTable() {
  return (
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.deadline}</TableCell>
              <TableCell align="center">{row.priority}</TableCell>
              <TableCell align="center">
                <Checkbox />
              </TableCell>
              <TableCell align="center">
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="contained"
                >
                  <ButtonCollection />
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
          <FormDialog />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
