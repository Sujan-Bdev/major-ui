import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "flex-start",
        justifyContent: " flex-end",
        width: 'auto',
        height: 'auto',
        border: '2px solid black',

    },
    child: {
        border: '2px solid black',
        width: 50,
        height: 50,
        padding: 10,
        margin: 10

    }
});

const Demo = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <button className={classes.child}>hi</button>
            <button className={classes.child}>Sujan</button>
        </div>
    );
};

export default Demo;