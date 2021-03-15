import React ,{useState , useEffect} from 'react'
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import Box from '@material-ui/core/Box';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { AirplanemodeInactiveOutlined } from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
      // maxWidth: 345,
      margin: 10,
      border: 40,
      borderWidth: 10,
      borderBlockColor: 'black',
      borderColor: '#000000',
      textAlign: 'start',

    },
    card:{
      borderRadius:15,
    },
    media: {
      height: 140,
    },
    text:{
      fontFamily: 'slab',
    },
    divider :{
      width: '100px',
      height: 10,
      color: '#000000',
    }
  });
  
function Item(props) {
    const classes = useStyles();
    
    const [like , setLike] = useState(props.like);

    function likeFun(){
        setLike(!like);
    }
    return (
        <Grid sm={6} xs={12} md={3} >
              <Box border={1} className={classes.root} >

      <Card variant="outlined" raised="true" className={classes.card}>

        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/random"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'start'}}>
                {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider flexItem />
        <CardActions >

        <Grid container  justify="space-between">
        <Grid item >
            <Button size="small" color="primary" startIcon={like ? <ThumbUpAltRoundedIcon/> : <ThumbUpAltOutlinedIcon/>}  onClick={likeFun}>
                lIKE
             </Button>
          </Grid>

          <Grid item >
              <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'end'}}>
                {props.vu}  <VisibilityOutlinedIcon />
             </Typography>
          </Grid>

        </Grid>
        
          
          

            
          
        </CardActions>
      </Card>
      </Box>
      </Grid>
    );
  }


const Idea = () => {
  const classes = useStyles();

  const [allData , setAllData] = useState([]);

  // fetch data from API
  useEffect(() => {

      async function fetchData() {
        const request = await axios.get("http://127.0.0.1:8000/ideas/");
        console.log(request.data);
        setAllData(request.data);
        return request;
      }      
       fetchData();

    }, []);

  //   const persons = allData.map((item, i) => {
  //     return 
  //        (<div>
  //           <h1> {item.id} </h1> 
  //        </div>);
  // });


    return (
        <div>
            <br/>

            <Typography className={classes.text} align="left" variant="h3" gutterBottom style={{marginLeft:10}}>ALL IDEA</Typography>
            <Grid container>
                <Grid item > 
                </Grid>

                {allData.map((option) => (
                  <Item title={option.title} description={"description : " + option.description + "  --   id : " +option.id} vu="10K" like="true"/>
                ))}
            </Grid>
        </div>


    )
}

export default Idea;