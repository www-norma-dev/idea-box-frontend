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

    return (
        <div className={classes.root}>
            <MainAppbar/>
            <Paper>
              <div className={classes.toolbar} />
            </Paper>
            <Container>
              <Typography>
                Main content here
              </Typography>
            </Container>
         </div>

    )
}

export default Home
