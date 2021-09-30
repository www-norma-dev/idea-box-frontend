import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainAppbar from "../Components/MainAppbar";
import { Typography, Grid, MenuList, MenuItem, Chip } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as actionCreatore from "../store/actions/actions";
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ReactHtmlParser from 'react-html-parser';

import {
	BrowserRouter as Router,

	useParams
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));


const ModelDetail = (props) => {
		const { t, i18n } = useTranslation();
		let { modelNumber } = useParams();
		const classes = useStyles();
		const [model, setModel] = useState({});
		const [iframe, setIframe] = useState({});
	  
	  	const [email, setEmail] = useState({
			email: props.email,
			error: false,
		})

		function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 20)];
            }
            return color;
                }

		
		useEffect (() =>  {
			axios.get(process.env.REACT_APP_URL_API+'blog/'+modelNumber+"/", {
				headers: {
				  'Content-Type': 'application/json',
				},
			  }).then(res => {
				setModel(res.data);
			  })
			  .catch(err => console.log(err));
		},[modelNumber])
		
		useEffect (() =>  setIframe(`<iframe src="../../widget.html?apiUrl=${model.api_url}" width="500" height="500"></iframe>`)
		,[model])

    return (
        <div className={classes.root}>
            <MainAppbar/>
			<Card className={classes.root} style={{marginLeft:200, marginRight: 200, marginTop:100}}>
				<CardMedia
				component="img"
				alt=""
				height="400"
				image= { (model.files == "" || model.files== null)  ? "https://source.unsplash.com/random" : model.files}
				/>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item xs={7}>
							<Typography gutterBottom variant="h1" component="h1">
								{model.title}
							</Typography>

							{
								model.tags && model.tags.split(";").map((tag, index) =>
									<Chip key={index} label={tag} 
										style={{ marginRight: 10 , marginBottom: 15, backgroundColor: getRandomColor()}} />)
								}	
							<Typography gutterBottom variant="h3" component="h3">
								{model.description}
							</Typography>
							 <div style={{  textAlign: "left"}}> { ReactHtmlParser(model.content) }</div>
						</Grid>
						<Grid item xs={5} style={{ minWidth: 200}}>
						<MenuList>
							{
								model.api_url != null && 
								<MenuItem>
									<div dangerouslySetInnerHTML={{__html: iframe}}></div>
								</MenuItem>
							}
						</MenuList>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
         </div>
	) }

	const mapStateToProps=(state)=>{
		return state
	};
	
	export default connect(mapStateToProps, actionCreatore) (ModelDetail);