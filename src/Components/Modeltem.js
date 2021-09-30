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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 350,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 27,
    textAlign: 'start',
  },
  media: {
    height: 0,
    paddingTop: '20%', // 16:9
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
    },
  suggestion: {
    backgroundColor: '#7abaf5',
    color: 'white',
    padding: '5px 25px 5px',
    fontSize: 12,
  }
}))

export default function ModelItem(props) {
  const classes = useStyles()
  const history = useHistory();

  const showDetail = () => {
    history.push("/model/"+ props.id);

  }

  return (
    <Grid item md={12}>
      <Card className={classes.root}>
        <CardActionArea onClick={showDetail}>
          <CardMedia
            className={classes.media}
            image={props.img ==null ?  "https://source.unsplash.com/random" : props.img }
            title={props.title}
          />
          <CardContent>
            <Typography variant="h2">{props.title}</Typography>
            <Typography
              variant="body"
              align="left"
              component="h6"
			        style={{overflow: "hidden", textOverflow: "ellipsis",height: '100px' ,  whiteSpace: "pre-line", marginTop: "20px" }}
            >
              {props.description}
            </Typography>
        
            <div className=" mt-5 d-flex justify-content-between align-items-end m-auto">
            <Typography color="textSecondary">{props.date}</Typography>
        </div>
          </CardContent>
        </CardActionArea>    
      </Card>
    </Grid>
  )
}
