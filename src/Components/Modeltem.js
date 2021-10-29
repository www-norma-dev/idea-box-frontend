import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Chip,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Grid,
  IconButton,
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
      <div className="row bg-white m-3 rounded p-2" onClick={showDetail} style={{ cursor: "pointer" }} >
        <div className="col-md-1">
          <Typography color="textSecondary">{props.date}</Typography>
        </div>
        <div className="col-md-8">
          <Typography variant="h2">{props.title}</Typography>
          {
								props.tags && props.tags.split(";").map((tag, index) =>
									<Chip key={index} label={tag} 
										style={{ marginRight: 5 , marginBottom: 5 }} />)
					}	
          <Typography
              variant="body"
              align="left"
              component="p"
			        style={{overflow: "hidden", height: '150px' ,  whiteSpace: "pre-line", marginTop: "20px" }}
            >
              {props.description}
            </Typography>
        
            <div className=" mt-5 d-flex justify-content-between align-items-end m-auto">
            <Typography color="textSecondary">{props.date}</Typography>
        </div>
        </div>
        <div  className="col-md-3">
          <CardMedia
            className="h-100"
            style={{ objectFit: "contain" }}
            image={props.img ==null ?  "https://source.unsplash.com/random" : props.img }
            title={props.title}
          />
        </div>
      </div>
    </Grid>
  )
}
