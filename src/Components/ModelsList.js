import React , {useState , useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ModelItem from '../Components/Modeltem';

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

const  ModelsList = (props) =>{
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    // fetch data from API
    useEffect( () =>  {props.loadModel();}, []);

    return (
        <div>
            <MainAppbar/>
            <div className="container" style={{ marginTop: 200 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="h4" component="h3" gutterBottom align="center" >
                            {t('Production Models')}
                        </Typography>
                        <Typography variant="subtitle1" component="h3" gutterBottom align="center" hidden>
                        subtitle1
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{marginLeft: 30}} >
                    {
                        props.models &&
                        props.models.map((option) => (
                            <ModelItem id={option.id} 
                            key={option.id} 
                            img={option.files} 
                            title={option.title} 
                            description={option.description} 
                            date={option.date} 
                            tags={option.tags}
                            api_url={option.api_url} />
                        ))}
                </Grid>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
	return state
};

export default connect(mapStateToProps, actionCreatore) (ModelsList);