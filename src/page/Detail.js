import React  from 'react'
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MainAppbar from "../Components/MainAppbar"
import { Paper , Container } from '@material-ui/core';
import {  BrowserRouter as useParams} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
  }));

function Detail(props) {
    const classes = useStyles();

    // const { id } = useParams();
    // const { match: { params } } = this.props;


  return (
  <div className={classes.root}>
            <MainAppbar/>

            <Paper>
              <div className={classes.toolbar} />
            </Paper>
            <Container>
              <Typography>
              </Typography>
            </Container>
   </div>)
}

export default Detail;