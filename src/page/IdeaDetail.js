import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainAppbar from "../Components/MainAppbar";
import { Typography, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';
import ModifieIdea from '../Components/ModfieIdea';



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
			const request =  axios.get(process.env.REACT_APP_URL_API+'idea/'+ideaNumber+"/", {
				headers: {
				  'Content-Type': 'application/json',
				},
			  }).then(res => {
				setIdea(res.data);
				localStorage.setItem('title' ,res.data.title);
				localStorage.setItem('description' ,res.data.description);
				localStorage.setItem('email' ,res.data.email);
				localStorage.setItem('img' ,res.data.files);
			  })
			  .catch(err => console.log(err))
		},[])

		


	

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
				<Typography variant="body2" color="textSecondary" component="p" style={{  textAlign: "left", whiteSpace: "pre-line"}} >
				{idea.description}
				{idea.email}

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

		  <ModifieIdea title={localStorage.getItem('title')} description={localStorage.getItem('description')} img={localStorage.getItem('img')} email={localStorage.getItem('email')} id={idea.id}/>
		  </CardActions>

    </Card>
         </div>
	) }

	export default IdeaDetail
