import React from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { 
  AppBar,
  Toolbar,
  Button,
  Link,
  Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MainContent from '../Components/MainContent';
import logo from "../static/img/logo.png";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    button: {
      color: "white",
    },
    title: {
      flexGrow: 1,
    },
  }));

	const Home = props => {
		const classes = useStyles();

		return (
        <div className={classes.root} style={{ background: 'white'}} >
          <AppBar  style={{ background: 'transparent'}} class="container">
            <Toolbar>
              <img src={logo} class="d-inline-block align-top" alt=""/>
              <Typography variant="h1" className={classes.title}>

              </Typography>
              <Link href="#" variant="h4" className="mx-3">
                  <b>Home</b>
              </Link>
              <Link href="#HowitWork" variant="h5" className="mx-3" color="inherit">
                  How it Work
              </Link>
              <Link href="#" variant="h5" className="mx-3"  color="inherit">
                  FAQ
              </Link>
              <Button
                href="/list/"
                size="medium" 
                variant="contained"
                color="primary"
                className={classes.button}
                >
                  <b>{"Get Started"}</b>
                </Button>
            </Toolbar>
          </AppBar>
          <Container maxWidth={false} style={{paddingLeft: 0}}>
            <Typography>
              <MainContent/>
            </Typography>
          </Container>
         </div>

    )
}

export default Home
