import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainAppbar from "../Components/MainAppbar";
import { Typography, Grid, MenuList, MenuItem, Link, TextField, Button, DialogActions, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';
import ModifieIdea from '../Components/ModfieIdea';
import { useTranslation } from 'react-i18next';
import * as actionCreatore from "../store/actions/actions";
import {connect} from 'react-redux';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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


const Comment = (props) => {

	const classes = useStyles();
	return(
		<Card className={classes.root} style={{marginLeft:250, marginRight: 200, marginTop:10}}>
			<CardContent>
                <Typography component="h5" variant="h5">
                    {props.email} 
                </Typography>
				<Typography variant="body" 
					color="textSecondary" 
					component="p" 
					style={{  textAlign: "left", whiteSpace: "pre-line"}} >
					{props.message}
				</Typography>
                <Typography 
					variant="body"
					color="textSecondary"
					component="p"
					style={{  textAlign: "left", whiteSpace: "pre-line"}} >
					<Moment format="YYYY/MM/DD">{props.date}</Moment>
                </Typography>
			</CardContent>
		</Card>
	)
}

const IdeaDetail = (props) => {

		const { t, i18n } = useTranslation();
		let { ideaNumber } = useParams();
		const classes = useStyles();
		const [like, setLike] = useState(false);
		const [idea, setIdea] = useState({});
		const [comments, setComments] = useState([]);
		const [ideaStatus, setIdeaStatus] = useState("Proposition");

		const [commentMessage, setCommentMessage] = useState({
			commentMessage: props.commentMessage,
		  	error: false,
		})
	  
		const commentMessageChange = (event) => {
			setCommentMessage({ ...commentMessage, commentMessage: event.target.value })
		}
	  
	  	const [email, setEmail] = useState({
			email: props.email,
			error: false,
		})

		const emailChange = (event) => {
			setEmail({ ...email, email: event.target.value })
		}
		const updateIdea = (data) => {
			setIdea({ ...idea, ...data})
		}
		const updateLikes = () => {
			setLike(true);
			const form_data = new FormData();
			form_data.append('likes', idea.likes + 1);
			console.log("like :", idea.likes, "id :", idea.id, "form_data :", form_data  )
			setIdea({ ...idea, 'likes': idea.likes + 1})

			if (idea.id){
				props.ModifeIdea(form_data, idea.id)
			  }
		}

		const validateFrom = () => {
			if (email['email'] == '') {
			  	setEmail({ ...email, error: true })
			} else {
				setEmail({ ...email, error: false })
			}
			if (commentMessage['commentMessage'] == '') {
				setCommentMessage({ ...commentMessage, error: true })
			} else {
				setCommentMessage({ ...commentMessage, error: false })
			}
			
			return !(commentMessage['error'] || email['error'])
		  }

		const updateComments = async () => {
			axios.get(process.env.REACT_APP_URL_API+'comments/'+ideaNumber+"/", {
				headers: {
				  'Content-Type': 'application/json',
				},
			  }).then(res => {
				setComments(res.data.results);
			  })
			  .catch(err => console.log(err));
		}
		const sendComment = async () =>  {
			if (validateFrom() != true) {
				const form_data = new FormData();
				form_data.append('email', email['email']);
				form_data.append('message', commentMessage['commentMessage']);
			  	form_data.append('idea', ideaNumber);
		
			  	// Call the API from Redux
				props.AddComment(form_data).then(res => {
					setCommentMessage({ ...commentMessage, commentMessage: '' });
					updateComments();
				});
			}
		  }
		
		useEffect (() =>  {
			axios.get(process.env.REACT_APP_URL_API+'idea/'+ideaNumber+"/", {
				headers: {
				  'Content-Type': 'application/json',
				},
			  }).then(res => {
				setIdea(res.data);
				res.data.status_name != undefined && setIdeaStatus(res.data.status_name);
			  })
			  .catch(err => console.log(err));

			  updateComments();
		},[ideaNumber])


		useEffect( () =>  props.loadIdea(), [like, idea]);
		
    return (
        <div className={classes.root}>
            <MainAppbar/>
			<Card className={classes.root} style={{marginLeft:250, marginRight: 200, marginTop:100}}>
				<CardMedia
				component="img"
				alt=""
				height="400"
				image= { (idea.files == "" || idea.files== null)  ? "https://source.unsplash.com/random" : idea.files}
				/>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item xs={7}>
							<Typography gutterBottom variant="h2" component="h2">
								{idea.title}
							</Typography>
							<ReactMarkdown children={idea.description} remarkPlugins={[remarkGfm]}  style={{  textAlign: "left"}}/>
						</Grid>
						<Grid item xs={5} style={{ minWidth: 200}}>
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
					<Box>
						<IconButton aria-label="add to favorites" onClick={updateLikes} disabled={like}>
							{like ? (
							<FavoriteIcon style={{ color: '#ff0505' }} />
							) : (
							<FavoriteIcon />
							)}
						</IconButton>
						{ idea.likes }
					</Box>
					{ idea.title != null && 
					<ModifieIdea title={idea.title}
						description={idea.description} 
						img={idea.files} 
						email={idea.email}  
						id={ideaNumber}
						updateIdea={updateIdea}/>}
				</CardActions>
			</Card>
			{ comments && comments.map((comment, index) => (
                            <Comment 
								message={comment.message} 
								email={comment.email} 
								date={comment.created_at}
								key={index}/>))}
			<Card className={classes.root} style={{marginLeft:250, marginRight: 200, marginTop:10}}>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item xs={2}>
							<TextField
								required
								multiline={true}
								margin="dense"
								id="email"
								name="email"
								label={t('email')}
								type="text"
								fullWidth
								value={email['email']}
								error={email['error']}
								onChange={emailChange}/>
						</Grid>
						<Grid item xs={10}>
							<TextField
								multiline={true}
								margin="dense"
								id="commentMessage"
								name="commentMessage"
								label="Comment"
								type="text"
								fullWidth
								value={commentMessage['commentMessage']}
								error={commentMessage['error']}
								onChange={commentMessageChange}/>
						</Grid>
					</Grid>
				</CardContent>
				<DialogActions>
					<Button color="primary" variant="contained" onClick={sendComment}>
						{t('Sent')}
					</Button>
				</DialogActions>
			</Card>
         </div>
	) }

	const mapStateToProps=(state)=>{
		return state
	};
	
	export default connect(mapStateToProps, actionCreatore) (IdeaDetail);