import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea'
import { useHistory } from "react-router-dom";
import { BrowserRouter as Redirect } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit';
// import ModifieIdea from '.. Components/ModifieIdea'
import ModifieIdea from '../Components/ModfieIdea'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 27,
    textAlign: 'start',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[300],
  },
}))

export default function PostItem(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const history = useHistory();

  const handleEditClick = () => {

  }

  const [like, setLike] = React.useState(false)

  const likeButton = () => {
    setLike(!like)
  }

  const showDetail = () => {
    history.push("/detail");

	<Redirect
            to={{
            pathname: "/detail",
            state: { property_id: "1" }
          }}
        />
  }

  return (
    <Grid sm={6} xs={12} md={4}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2021"
        />
        <CardActionArea onClick={showDetail}>
          <CardMedia
            className={classes.media}
            image={props.img ==null ?  "https://source.unsplash.com/random" : props.img }
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="h5">{props.title}</Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              align="left"
              component="p"
            >
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={likeButton}>
            {like ? (
              <FavoriteIcon style={{ color: '#ff0505' }} />
            ) : (
              <FavoriteIcon />
            )}
          </IconButton>
		  {/* <ModifieIdea /> */}
		  <ModifieIdea title={props.title} description={props.description} img={props.img} id={props.id}/>
    
   
        </CardActions>
      </Card>
    </Grid>
  )
}
