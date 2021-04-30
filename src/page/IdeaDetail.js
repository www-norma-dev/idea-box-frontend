import {React, useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MainAppbar from "../Components/MainAppbar"
import { Typography, Box } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import MainContent from '../Components/MainContent'
import Image from 'material-ui-image'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import axios from 'axios'

import {
	BrowserRouter as Router,

	useParams
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
  }));


const IdeaDetail = (props) => {

		const classes = useStyles();
		const [like, setLike] = useState(false);
		// const {id } = useParams();
		let { ideaNumber } = useParams();
		
		const [idea, setIdea] = useState({});
		

		useEffect (  () =>  {
			const request =  axios.get('http://127.0.0.1:8000/idea/'+ideaNumber+"/", {
				headers: {
				  'Content-Type': 'application/json',
				},
			  }).then(res => {
				setIdea(res.data);

			  })
			  .catch(err => console.log(err))
		})

		


	

		const likeButton = () => {
		  setLike(!like);
		}

    return (
        <div className={classes.root}>
            <MainAppbar/>
			<center></center>
			<Card className={classes.root} style={{marginLeft:250, marginRight: 200, marginTop:100}}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image= { (idea.files == "" || idea.files== null)  ? "https://source.unsplash.com/random" : idea.files}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {idea.title}
          </Typography>
				<Typography variant="body2" color="textSecondary" component="p" style={{  textAlign: "left"}} >
				{idea.description}
			</Typography>
        </CardContent>

	  <CardActions disableSpacing>
	   <IconButton aria-label="add to favorites" onClick={likeButton}>
            {like ? (
              <FavoriteIcon style={{ color: '#ff0505' }} />
            ) : (
              <FavoriteIcon />
            )}
          </IconButton>
		  </CardActions>

    </Card>
         </div>
	) }

	export default IdeaDetail
