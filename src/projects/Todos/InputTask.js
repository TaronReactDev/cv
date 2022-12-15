import React from 'react'
import TextField from '@mui/material/TextField';


export default function InputTask({value, handleChange, submit}) {
    return (
        <form
       // className={classes.root}
        onSubmit={submit}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="enter your task"
            rowsMax={4}
            value={value}
            onChange={handleChange}
          />{" "}
        </div>{" "}
      </form>
    )
}
