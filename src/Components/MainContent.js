import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import PostItem from '../Components/PostItem'
import AddIdea from '../Components/AddIdea'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  },

}));

const  MainContent = () =>{
    const classes = useStyles();

    return (
        <div className="container" direction="row" justify="center" alignItems="center" style={{ marginTop: 20 , marginLeft:20}}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                 <Typography variant="h4" component="h3" gutterBottom align="center" >
                    IDEA BOX
                </Typography>
                <Typography variant="subtitle1" component="h3" gutterBottom align="center" >
                subtitle1
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} >
                <AddIdea />
                <Button variant="outlined" color="primary"  >
                    Your Idea
                </Button>
            </Grid>
        </Grid>

        <Grid container justify="center" >
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            
        </Grid>
     </div>
    )
}

export default MainContent;