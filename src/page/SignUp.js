import React , {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import './SignUp.css';
import { FcGoogle } from 'react-icons/fc';
import Copyright from '../Components/Copyright'
import ErrorMessage from '../Components/ErrorMessage'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  facebookButton:{
    borderRadius: 0,
    borderRadius: 20,
    marginTop: 10,
    width: '80%',
 },
 googleButton:{
    borderRadius: 20,
    marginTop: 10,
    backgroundColor : '#f9fafb',
    width: '80%',
 },

}))

export default function SignUp() {
  const classes = useStyles()

  // First And Last Name
  const [fullName , setFullName] = useState({
    firstName: '' ,
    lastName : '',
    errorFirstName : false,
    errorLastName : false,
    showErrorMessage : false,
    errorMessage :'',
  })

  const firstNameChange = (e) => { 
    setFullName(fullName => {return {...fullName , firstName : e.target.value }})
  }
  
  const lastNameChange = (e) => { 
    setFullName(fullName => {return {...fullName , lastName : e.target.value }})
  }
  // Validate First ans last  Name
  const validateFullName =() => {
    if(fullName['firstName'] === ''){
      setFullName(fullName => {return {...fullName , errorFirstName : true , showErrorMessage : true , errorMessage : "enter Your first Name"}})

    }else {
      setFullName(fullName => {return {...fullName ,errorFirstName : false , showErrorMessage : false }})
    }
  }


  // Email 
  const [email , setEmail] = useState({
    email : '' ,
    errorEmail : false,
    showErrorMessage : false,
    errorMessage :'',
  })

  const emailChange = (e) => { setEmail(email => {return {...email ,email : e.target.value }}) }

  const validateEmail = () => {
    if(email['email'] == ''){
      setEmail(email => {return {...email , errorEmail : true , showErrorMessage : true , errorMessage : "enter Your Email"}})
    }else {
      setEmail(email => {return {...email ,errorEmail : false , showErrorMessage : false }})

    }
  }

  // Password 
  const [password , setPassword] = useState({
    password : '',
    confirmPassword : '',
    errorPassword : false,
    errorConfirmPassword : false,
    showErrorMessage : false,
    errorMessage : '',
  })

  const passwordChange = (e) => { setPassword(password => {return {...password ,password : e.target.value }}) }
  const confirmPasswordChange = (e) => { setPassword(password => {return {...password , confirmPassword : e.target.value }}) }

  const validatePassword = () => {
      if(password['password'] == '')
      {
        setPassword(password => {return {...password , errorPassword : true , showErrorMessage : true , errorMessage : "enter Your password"}})
      }else if (password['password'] != password['confirmPassword']){

        setPassword(password => {return {...password ,errorPassword : false, errorConfirmPassword : true , showErrorMessage : true , errorMessage : "confirm your password"}})
      }
      else{
        setPassword(password => {return {...password ,errorPassword : false, errorConfirmPassword : false , showErrorMessage : false}});
      }
  }

  //Check box 
  const [agreeTerms , setAgreeTerms] = useState(false);
  
  const agreeChange = () => { setAgreeTerms(!agreeTerms) }



  const sendForm =() =>{ 
    validateFullName();
    validateEmail();
    validatePassword();
  }


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign UP
          </Typography> 
          
          <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                            <TextField
                    onChange={firstNameChange}
                    error={fullName['errorFirstName']}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="First Name"
                    name="text"
                    autoComplete="text"
                    autoFocus
                    />

                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField
                        onChange={lastNameChange}
                        error={fullName['errorLastName']}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Last Name"
                        name="text"
                        autoComplete="text"
                        autoFocus
                        />
                    </Grid>
            </Grid>
           { fullName['showErrorMessage'] ?  <ErrorMessage text={fullName['errorMessage']}/>  : null}
            <TextField
              onChange={emailChange}
              error={email['errorEmail']}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
           { email['showErrorMessage'] ?  <ErrorMessage text={email['errorMessage']}/>  : null}
            <TextField
              onChange={passwordChange}
              error={password['errorPassword']}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"              
            />
            
            <TextField
              onChange={confirmPasswordChange}
              error={password['errorConfirmPassword']}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            { password['showErrorMessage']  ? <ErrorMessage text={password['errorMessage'] } /> : null }

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" onChange={agreeChange} />}
              label="I agree to the terms of use and privacy policy"
            />
            <Button
              disabled={!agreeTerms}
              onClick={sendForm}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
              
              </Grid>
              <Grid item>
                <Link href="/Login" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>

            
           
          </form>

          <Grid container spacing={0}>
          <Grid xs={5}><hr /></Grid>
          <Grid xs={2}><p>OR</p></Grid>
          <Grid xs={5}><hr /></Grid>
          

          </Grid>


            <Button
            boxShadow={3}
            className={classes.googleButton}

                fullWidth
                variant="contained"
                startIcon={<FcGoogle/>}
                color="white">Google
            </Button>

    
            <Button
            boxShadow={3}
            fullWidth
                className={classes.facebookButton}
                variant="contained"
                startIcon={<FacebookIcon/>}
                color="primary">Facebook
            </Button>

      

            <Box mt={5}>
              <Copyright />
            </Box>
          
        </div>
      </Grid>
    </Grid>
  
    
  )
}
