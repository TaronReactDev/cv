import React from 'react'
import "./gymStyle.scss";
import Button from '@mui/material/Button';
//import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@mui/icons-material/Send';
// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));


export default function ContactSection() {
    //const classes = useStyles();
    return (
        <div className="mainDivContactSection">
        <div className="contactSection">
           <h3>Want to work with us?</h3> 
           <p>Complete this form and we will get back to you in 24 hours</p> 
           <label for="name">Full Name</label>
           <input placeholder="Full Name" id="name" type="text"></input>
           <label for="Email">Email</label>
           <input placeholder="Email"  id="Email"  type="text"></input>
           <label for="Message"> Message</label>
           <input placeholder="Type a message"  id="Message"  type="text"></input>
           <div
              // className={classes.root}
           >
           <Button
        variant="contained"
        color="primary"
       // className={classes.button}
        endIcon={<SendIcon/>}
      >
        Send
      </Button></div>
        </div></div>
    )
}
