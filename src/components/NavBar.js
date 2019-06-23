import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles({
  container: {
      display: "flex",

  },
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
      alignItems: "flex-end",
  },
    btn : {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 5,
        borderRadius: 0,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        margin: 20
    }
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title">MAJOR PROJECT</Typography>
          <div>
            <Button color="inherit" style={styles}>Home</Button>
            <Button color="inherit" className={classes.btn}>About</Button>
            <Button color="inherit" className={classes.btn}>Demo</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
