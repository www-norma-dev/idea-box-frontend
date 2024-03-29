import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainAppbar from "../Components/MainAppbar";
import { Typography, Grid, MenuList, MenuItem, Chip, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as actionCreatore from "../store/actions/actions";
import {connect} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
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
		
		useEffect (() =>  setIframe(`<iframe src="../../widget.html?apiUrl=${model.api_url}" width="500" height="600"></iframe>`)
		,[model])

    return (
        <div className={classes.root}>
            <MainAppbar/>
			<Card className={classes.root} style={{marginLeft:20, marginRight: 20, marginTop:100}}>

				<CardContent>
					<Grid container spacing={3}>
						<Grid item xs={7}>
							<Typography gutterBottom variant="h1" component="h1">
								{model.title}
							</Typography>

							{
								model.tags && model.tags.split(";").map((tag, index) =>
									<Chip key={index} label={tag} 
										style={{ marginRight: 10 , marginBottom: 15 }} />)
								}	
							<Typography gutterBottom variant="h3" component="h3">
								{model.description}
							</Typography>
							<ReactMarkdown children={model.content} remarkPlugins={[remarkGfm]}  style={{  textAlign: "left"}}/>
						</Grid>
						<Grid item xs={5} style={{ minWidth: 200}}>
						<MenuList>
							{
								model.api_url != null && 
								<MenuItem justify="flex-end">
									<Grid container justify="flex-end">
										<div dangerouslySetInnerHTML={{__html: iframe}}></div>
									</Grid>
								</MenuItem>
							}
							{
								model.html_rapport != null && 
								<MenuItem >
									<Grid >
										<a href={model.html_rapport} target="_blank">Consultez le rapport</a>
									</Grid>
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