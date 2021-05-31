import React from 'react';
import bootstrap from 'bootstrap';
import heroImp from "../static/img/hero-img.png";
import values1 from "../static/img/values-1.png";
import values2 from "../static/img/values-2.png";
import values3 from "../static/img/values-3.png";
import heroBg from "../static/img/hero-bg.png";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
    ArrowRightAlt,
    HeadsetMic,
 } from '@material-ui/icons';
import {
    Button,
    Icon,
    Paper,
  } from '@material-ui/core';

const styles = {
    paperContainer: {
        backgroundImage: `url(${heroBg})`,
        minHeight: 800,
    }
};

const useStyles = makeStyles((theme) => ({
    button: {
      color: "white",
    },
    section: {
        marginTop: "50px",
    },
}));

const Count = ({name, number, color, icon }) => {
    return (
    <Paper elevation={12} className="px-4" square>
        <div className="d-flex flex-row">
            <div className="my-auto">
                <Icon style={{ color: color, fontSize: "50px" }}>{icon}</Icon>
            </div>
            <div className="p-3">
                <h1>{number}</h1>
                <p>{name}</p>
            </div>
        </div>
    </Paper>
    );

}

const Hero = () => {

    const classes = useStyles();
    return(
            <div id="hero" className="container">
                <div className="row" style={styles.paperContainer}>
                    <div className="container"></div>
                        <div className="ps-5 col-6 d-flex flex-column justify-content-center text-start"> 
                            <h1><b>Be part of the Innovation</b></h1>
                            <br/>
                            <h5>By launching your innovation, 
                                you're joining a community of innovators who can help bring it to life, 
                                by combining your expertise and their skills.</h5>
                            <div className="mt-4">
                                <Button
                                    href="/list"
                                    size="large" 
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<ArrowRightAlt />}
                                >
                                    <b>{"Get Started"}</b>
                                </Button>
                            </div>
                        </div>
                        <div className="col-6 m-auto">
                            <img  src={heroImp} className="img-fluid" alt="" />
                        </div>
                </div>
                <div id="HowitWork" className="row py-5 text-center">
                    <Typography component="h1" variant="h1" color="primary">
                      How it works
                    </Typography>
                    <h1><b>Browse and Submit Ideas</b></h1>
                </div>
                <div className="d-flex justify-content-between">
                    <Paper className="p-5"  variant="outlined" style={{marginRight: 15}} square>
                        <img src={values1} class="img-fluid" alt=""/>
                        <h3>Submit Idea</h3>
                        <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                    </Paper>
                    <Paper className="p-5"  variant="outlined"  style={{marginRight: 15}} square>
                        <img src={values2} class="img-fluid" alt=""/>
                        <h3>Peer validation</h3>
                        <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
                    </Paper>
                    <Paper className="p-5" variant="outlined"style={{marginRight: 15}} square>
                        <img src={values3} class="img-fluid" alt=""/>
                        <h3>Navigate</h3>
                        <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
                    </Paper>
                </div>
                <div className="row" style={{ marginTop: 150, paddingBottom: 400}}>
                    <div className="col-3">
                        <Count number="15" name ="Ideas" color="#ee6c20" icon="book-open"/>
                    </div>
                    <div className="col-3">
                        <Count number="63" name ="Ideas" color="#15be56" icon="headset"/>
                    </div>
                    <div className="col-3">
                        <Count number="6" name ="Teams" color="#bb0852" icon="group"/>
                    </div>
                    <div className="col-3">
                        <Count number="7" name ="Happy Clients" color="#FCCE01" icon="mood"/>
                    </div>
                </div>
            </div>
  )
  }

  export default Hero;