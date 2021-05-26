import React , { useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Copyright from '../Components/Copyright'
import ErrorMessage from '../Components/ErrorMessage'




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
}))

export default function ChangePassword() {
  const classes = useStyles()

  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  //Input Password
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
   //Input confirm Password
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);


   // Value onChange in password and Confirm Password 
   const passwordValue = (e) => {
    setPassword(e.target.value);
  }
  const confirmPasswordValue = (e) => {
    setConfirmPassword(e.target.value);
  }


   // Validate form
    function validateForm(){
      if(password == ''){
        setErrorPassword(true);
        setShowErrorMessage(true);
        setErrorMessage('Enter Your Password');
        return false;
      }else if(confirmPassword !=  password ){
          setErrorPassword(false);
  
          setErrorConfirmPassword(true);
          setShowErrorMessage(true);
          setErrorMessage('Password not the same');
          return false;
        } else{
          setErrorConfirmPassword(false);
          setShowErrorMessage(false);
          return true;
        }
      
    }


   const sendForm = () => {

    if(validateForm() == true){
      alert('Send data From APi');

    }

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Password change
        </Typography>
        <TextField
              onChange={passwordValue}
              error={errorPassword}
              helperText=""
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
              onChange={confirmPasswordValue}
              error={errorConfirmPassword}
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

            {showErrorMessage ? <ErrorMessage text={errorMessage}/> : null }

          

          <Button
            onClick={sendForm}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save new password
          </Button>
          <Grid container>
            <Grid item xs>

            </Grid>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                {("Don't have an account? Sign Up")}
              </Link>
            </Grid>
          </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}