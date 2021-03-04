import React ,{useState} from 'react'
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


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
function Item() {
    const classes = useStyles();
    
    const [like , setLike] = useState(false);

    function likeFun(){
        setLike(!like);
    }
  
    return (
        <Grid sm={6} xs={12} md={4} >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/random"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" startIcon={like ? <ThumbUpAltRoundedIcon/> : <ThumbUpAltOutlinedIcon/>}  onClick={likeFun}>
            lIKE
          </Button>
          
        </CardActions>
      </Card>
  
      </Grid>
    );
  }


const Idea = () => {
    return (
        <div>
            <h1>ALL IDEA</h1><br/>

            <Grid container>
                <Grid item > 
                </Grid>
                    <Item />
                    <Item />
                    <Item />
            </Grid>
        </div>


    )
}

export default Idea;