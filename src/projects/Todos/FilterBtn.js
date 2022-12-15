import React from "react";

import { FormControl, Select, MenuItem, InputLabel } from "@mui/material/";


export default function FilterBtn({ filterChange, filterValueChange }) {
  // const classes = useStyles();

  return (
    <div className="filterBy">
      {" "}
      <FormControl
          // className={classes.formControl}
      >
        <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterChange}
          onChange={filterValueChange}
        >
          <MenuItem value="important"> important </MenuItem>
          <MenuItem value="not important">not important </MenuItem>
          <MenuItem value="checked"> checked </MenuItem>
          <MenuItem value="not checked"> not checked </MenuItem>
          <MenuItem value=""> all </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
