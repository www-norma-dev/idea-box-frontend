import React , {useState , useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PostItem from '../Components/PostItem'
import AddIdea from '../Components/AddIdea'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  },

}));

const  MainContent = () =>{
    const classes = useStyles();

    const [allData , setAllData] = useState([]);
    const [refrech, setRefrech] = useState(0);

    // fetch data from API
        useEffect(() => {
    
            async function fetchData() {
            const request = await axios.get("http://127.0.0.1:8000/idea/");
            console.log(request.data);
            setAllData(request.data.results);
            return request;
            }      
            fetchData();
  
        }, [refrech]);
    



        async function distanceChange(dist) {
             await setRefrech(refrech +1);
        };

    return (
        <div className="container" direction="row" justify="center" alignItems="center" style={{ marginTop: 20 , marginLeft:20}}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                 <Typography variant="h4" component="h3" gutterBottom align="center" >
                    IDEA BOX
                </Typography>
                <Typography variant="subtitle1" component="h3" gutterBottom align="center" >
                subtitle1
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} >
                <AddIdea  onCalculateDistance={distanceChange}/>
                <Button variant="outlined" color="primary"  >
                    Your Idea
                </Button>
            </Grid>
        </Grid>

        <Grid container justify="center" >

                   {/* <Link to={'/detail/'+ option.id}></Link> */}

               {allData.map((option) => (
                     <PostItem key={option.id} img={option.files} title={option.title} description={"Description : " + option.description + " Id : " + option.id} />
                 
                ))}
            
        </Grid>
     </div>
    )
}

export default MainContent;