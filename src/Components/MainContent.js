import React , {useState , useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PostItem from '../Components/PostItem'
import AddIdea from '../Components/AddIdea'
import axios from 'axios';
import * as actionCreatore from "../store/actions/actions"
import {connect} from 'react-redux'
import { useTranslation } from 'react-i18next';

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


const  MainContent = (props) =>{
    const classes = useStyles();
    const [refrech, setRefrech] = useState(0);

    // fetch data from API
        useEffect( () =>  {
		 props.loadIdea();
        }, [refrech]);

    const { t, i18n } = useTranslation();
    

    

    return (
        <div className="container" direction="row" justify="center" alignItems="center" style={{ marginTop: 20 , marginLeft:20}}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                 <Typography variant="h4" component="h3" gutterBottom align="center" >
                    {t('IDEA BOX')}
                </Typography>
                <Typography variant="subtitle1" component="h3" gutterBottom align="center" >
                subtitle1
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} >
                <AddIdea/>
                <Button variant="outlined" color="primary"  hidden>
                    {t('Your Idea')}
                </Button>
            </Grid>
        </Grid>

		<Button onClick={props.loadIdea}>
			{t('click to change')}

		</Button>

		<Grid container justify="center" style={{marginLeft: 30}} >
                   {/* <Link to={'/detail/'+ option.id}></Link> */}
               {
				   props.idea != undefined ?
			   props.idea.map((option) => (
                     <PostItem id={option.id} img={option.files} title={option.title} description={option.description} tags={option.tags} />
                )) : ""}
        </Grid>
		

        
     </div>
    )
}

const mapStateToProps=(state)=>{
	return state
};

export default connect(mapStateToProps, actionCreatore) (MainContent);
// export default MainContent;