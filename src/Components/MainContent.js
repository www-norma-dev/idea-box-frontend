import React , {useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hero from '../Components/Hero';
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

const  MainContent = (props) =>{
    const classes = useStyles();
    const [refrech, setRefrech] = useState(0);

    // fetch data from API
    useEffect( () =>  props.loadIdea(), [refrech]);

    return (
        <div  style={{ marginTop: 20}}>
            <Hero/>               
     </div>
    )
}

const mapStateToProps=(state)=>{
	return state
};

export default connect(mapStateToProps, actionCreatore) (MainContent);