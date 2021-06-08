import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainAppbar from "../Components/MainAppbar";
import { Typography, Grid, MenuList, MenuItem, Link } from '@material-ui/core';
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

		let { ideaNumber } = useParams();
		const classes = useStyles();
		const [like, setLike] = useState(false);
		const [idea, setIdea] = useState({});
		const [ideaStatus, setIdeaStatus] = useState("Proposition");
	
		const updateIdea = (data) => {
			setIdea({ ...idea, ...data})
		}
		
		useEffect (  () =>  {
			const request =  axios.get(process.env.REACT_APP_URL_API+'idea/'+ideaNumber+"/", {
				headers: {
				  'Content-Type': 'application/json',
				},
			  }).then(res => {
				setIdea(res.data);
				res.data.status_name != undefined && setIdeaStatus(res.data.status_name);
			  })
			  .catch(err => console.log(err))
		},[ideaNumber])

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
				alt=""
				height="400"
				image= { (idea.files == "" || idea.files== null)  ? "https://source.unsplash.com/random" : idea.files}
				/>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item xs={9}>
							<Typography gutterBottom variant="h5" component="h2">
								{idea.title}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p" style={{  textAlign: "left", whiteSpace: "pre-line"}} >
								{idea.description}
							</Typography>
						</Grid>
						<Grid item xs={3} style={{ minWith: 200}}>
						<MenuList>
							{
								idea.app_url != null && 
								<Link href={idea.app_url }>
									<MenuItem className="text-white bg-dark">  
										<b>Open App</b>
									</MenuItem>
								</Link>
							}
							<MenuItem>
								<Typography variant="body2" color="textSecondary" component="p" style={{  textAlign: "left", whiteSpace: "pre-line"}} >
									<b>Email: </b>{idea.email}
								</Typography>
							</MenuItem>
							<MenuItem>
								<Typography variant="body2" color="textSecondary" component="p" style={{  textAlign: "left", whiteSpace: "pre-line"}} >
									<b>Status: </b>{ideaStatus}
								</Typography>
							</MenuItem>
						</MenuList>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites" onClick={likeButton}>
						{like ? (
						<FavoriteIcon style={{ color: '#ff0505' }} />
						) : (
						<FavoriteIcon />
						)}
					</IconButton>
					{ idea.title != null && 
					<ModifieIdea title={idea.title}
						description={idea.description} 
						img={idea.files} 
						email={idea.email}  
						id={ideaNumber}
						updateIdea={updateIdea}/>}
				</CardActions>
    		</Card>
         </div>
	) }

	export default IdeaDetail
