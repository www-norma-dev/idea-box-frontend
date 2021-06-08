import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Grid,
  CardActionArea
 } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import bootstrap from 'bootstrap';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 380,
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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary,
  },
  production: {
    backgroundColor: '#cef57a',
    color: '#315c2a',
    padding: '5px 25px 5px',
    fontSize: 12,
    }
}))

export default function PostItem(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const history = useHistory();

  const [like, setLike] = React.useState(false)

  const likeButton = () => {
    setLike(!like)
  }

  const showDetail = () => {
    history.push("/detail/"+ props.id);

  }

  return (
    <Grid item sm={6} xs={12} md={4}>
      <Card className={classes.root}>

        <CardActionArea onClick={showDetail}>
          <CardMedia
            className={classes.media}
            image={props.img ==null ?  "https://source.unsplash.com/random" : props.img }
            title={props.title}
          />
          <CardContent>
            <Typography variant="h5">{props.title}</Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              align="left"
              component="p"
			        style={{overflow: "hidden", textOverflow: "ellipsis",height: '100px' ,  whiteSpace: "pre-line" }}
            >
              {props.description}
            </Typography>
        
            <div className=" mt-5 d-flex justify-content-between align-items-end m-auto">
            <Box component="span"  className={classes.production}>
              <b>{props.status}</b>
            </Box>
            <Typography color="textSecondary">{props.date}</Typography>
        </div>
          </CardContent>
        </CardActionArea>    
      </Card>
      
    </Grid>
  )
}
