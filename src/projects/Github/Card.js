import React from "react";
// import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

export default function MediaCard(props) {
  // const classes = useStyles();
  // console.log(props, "HTML_URL");
  return (
    <Card
        // className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          // className={classes.media}
          image={props.person.avatar_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.person.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button>
          <a href={props.html_url} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"black"}}>
            More info
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
