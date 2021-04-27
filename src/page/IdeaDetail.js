import {React, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MainAppbar from "../Components/MainAppbar"
import { Typography } from '@material-ui/core';
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
          image="https://source.unsplash.com/random"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
