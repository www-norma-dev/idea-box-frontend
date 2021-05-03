import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import BackupIcon from '@material-ui/icons/Backup'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'
import {
  Box,
  Button,
  Breadcrumbs,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
  // InputAdornment,
  IconButton,
  TextField,
  makeStyles
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {},
  hidden: {
    display: 'none',
  },
  cadre: {
    display: 'flex',
    border: '1px solid #555555',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  uploadIcon: {
    height: 46,
    width: 46,
  },
}));





const ModifieIdea = (props) => {
    const classes = useStyles();

  const [open, setOpen] = useState(false)

  const [values, setValues] = useState({
	isNull: props.name == null ? true : false,
    name:'',
    state: 'Envoyé',
    img: "",
    imgFile:'',
  });

  const [img, setimg] = useState(props.img);



  const getFileName = (e) => {


    if(e.target.files[0])
    {
      values.imgFile = e.target.files[0];
      setimg(e.target.files[0]);
      setimg(URL.createObjectURL(e.target.files[0]));
      values.img = e.target.files[0].name;
    }
 }


  const openDialog = () => {setOpen(true)  }

  const handleClose = async () => { setOpen(false) }

  //declare the form variables

  const [title, setTitle] = useState({
    title: props.title,
    error: false,
  })

  const titleChange = (e) => {
    setTitle((title) => {
      return { ...title, title: e.target.value }
    })
  }

  const [description, setDescription] = useState({
    description: props.description,
    error: false,
  })

  const descriptionChange = (e) => {
    setDescription((description) => {
      return { ...description, description: e.target.value }
    })
  }

  const validateFrom = () => {
    if (title['title'] == '') {
      setTitle((title) => {
        return { ...title, error: true }
      })
      return true
    } else {
      setTitle((title) => {
        return { ...title, error: false }
      })
      return false
    }
  }

  const sendForm = async () =>  {
    


    if (validateFrom() != true) {

    const form_data = new FormData();
    form_data.append('title', title['title']);
    form_data.append('description', description['description']);
	console.log(values.isNull);
	if(values.name !== ''){
		form_data.append('files', values.imgFile , values.imgFile.name );
	}
  

     const request = await axios.put(process.env.REACT_APP_URL_API+'idea/'+props.id+"/", form_data, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => {
        console.log(res.data.results);
      })
      .catch(err => console.log(err))


    //   props.onCalculateDistance(true)
      // returnDistance();
      handleClose()
    }
  }

  function returnDistance() {
    const dist = 'example'
    props.onCalculateDistance(dist)
    return dist
  }

  return (
    <Grid item>
		
		<IconButton
			onClick={openDialog}
          >
            <EditIcon />
          </IconButton>	

      <Dialog
	  	   maxWidth="lg"
        fullWidth="true"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Modify the idea</DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText></DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="text"
            fullWidth
            value={title['title']}
            error={title['error']}
            onChange={titleChange}
          />
          <TextField
            autoFocus
            multiline="true"
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={description['description']}
            onChange={descriptionChange}
          />

          <Grid item md={12} xs={12} >
              <Card className={classes.cadre}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {values.img}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Selectionner une image 
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    <input accept="image/*" className={classes.hidden} onChange={getFileName} id="upload_cin" type="file" />
                    <label htmlFor="upload_cin">
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera className={classes.uploadIcon}/>
                      </IconButton>
                    </label>
                  </div>
                </div>
                <CardMedia
                  className={classes.cover} image={img} title="Selectionner une image"
                />
              </Card>
            </Grid>


        </DialogContent>
        <Divider style={{ width: '100%' }} />

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={sendForm} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default ModifieIdea
