import React from 'react'
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
// import SignInSide from "./SignInSide";
import MainAppbar from "../Components/MainAppbar"
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
  }));

const Home = props => {
    const classes = useStyles();

    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

    if (this.state.drawerOpen) {
      contentStyle.marginLeft = 256;
    }

    return (
        <div className={classes.root}>
            <MainAppbar/>
            <Paper>
              <div className={classes.toolbar} />
            </Paper>
            <div style={contentStyle}>
              main content here
            </div>
         </div>

    )
}

export default Home
