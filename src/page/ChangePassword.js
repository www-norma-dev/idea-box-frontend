import React , { useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Idea Box
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

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


  //Input Password
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const passwordChange = (event) => {
    setPassword(event.target.value);  
    if(event.target.value.length > 0)
        setErrorPassword(false);
    else
        setErrorPassword(true);
  }

   //Input confirm Password
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
   const [confirmHPasswordHint , setConfirmHPasswordHint] = useState('');

   const confirmPasswordChange = (event) => {
     setConfirmPassword(event.target.value);  
     if(event.target.value.length > 0)
        setErrorConfirmPassword(false);
     else
        setErrorConfirmPassword(true);

        console.log('pass ' + password);
        console.log('conf ' + event.target.value);
    
     if(password != event.target.value){
        setConfirmHPasswordHint('Password not the same');
        setErrorConfirmPassword(true);
     }
     else{
        setConfirmHPasswordHint('');
        setErrorConfirmPassword(false);
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
              onChange={passwordChange}
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
              helperText={confirmHPasswordHint}
              onChange={confirmPasswordChange}
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


          <Button
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
                {"Don't have an account? Sign Up"}
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