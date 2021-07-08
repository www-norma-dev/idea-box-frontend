import React , {useState , useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PostItem from '../Components/PostItem';
import ModifieIdea from '../Components/ModfieIdea';

import { useTranslation } from 'react-i18next';
import MainAppbar from '../Components/MainAppbar';
import * as actionCreatore from "../store/actions/actions";
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(),
      textAlign: 'start',
      color: theme.palette.text.secondary,
    },
  
  }));

const  IdeasList = (props) =>{
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    // fetch data from API
    useEffect( () =>  props.loadIdea(), []);

    return (
        <div>
            <MainAppbar/>
            <div className="container" style={{ marginTop: 200 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="h4" component="h3" gutterBottom align="center" >
                            {t('IDEA BOX')}
                        </Typography>
                        <Typography variant="subtitle1" component="h3" gutterBottom align="center" hidden>
                        subtitle1
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}  align="center">
                        <ModifieIdea />
                        <Button variant="outlined" color="primary"  hidden>
                            {t('Your Idea')}
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{marginLeft: 30}} >
                    {
                        props.ideas != undefined ?
                        props.ideas.map((option) => (
                            <PostItem id={option.id} 
                            key={option.id} 
                            img={option.files} 
                            title={option.title} 
                            description={option.description} 
                            email={option.email}
                            date={option.date}
                            avatar={option.avatar_name} 
                            status={option.status_name != undefined ? option.status_name : "Proposition"} />
                        )) : ""}
                </Grid>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
	return state
};

export default connect(mapStateToProps, actionCreatore) (IdeasList);