import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Typography,
  IconButton,
  TextField,
  makeStyles
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import * as actionCreatore from "../store/actions/actions";
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';



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

  const [imgValues, setImgValues] = useState({
    imgFile: '',
    url: props.img,
    name: '',
  });

  const getFileName = (event) => {
    if(event.target.files[0])
    {
      setImgValues({ 
        ...imgValues, 
        imgFile: event.target.files[0],
        url: URL.createObjectURL(event.target.files[0]),
        name: event.target.name});
    }
  }

  const openDialog = () => {setOpen(true)  }

  const handleClose = async () => { setOpen(false) }

  //declare the form variables

  const [title, setTitle] = useState({
    title: props.title,
    error: false,
  })

  const titleChange = (event) => {
    setTitle({ ...title, title: event.target.value })
  }

  const [description, setDescription] = useState({
    description: props.description,
    error: false,
  })

  const descriptionChange = (event) => {
    setDescription({ ...description, description: event.target.value })
  }

  const [email, setEmail] = useState({
    email: props.email,
    error: false,
  })

  const emailChange = (event) => {
    setEmail({ ...email, email: event.target.value })
  }

  const validateFrom = () => {
    if (title['title'] == '') {
      setTitle({ ...title, error: true })
      return true
    } else {
      setTitle({ ...title, error: false })
      return false
    }
  }

  const sendForm = async () =>  {
    if (validateFrom() != true) {
      const form_data = new FormData();
      form_data.append('title', title['title']);
      form_data.append('description', description['description']);
      form_data.append('email', email['email']);
      if(imgValues.imgFile !== ''){
        form_data.append('files', imgValues.imgFile , imgValues.imgFile.name);
      }

      // Call the callback function to update parent idea values
      if (props.updateIdea) {
        props.updateIdea({title: title['title'], 
        description: description['description'],
        email: email['email'],
        files: imgValues.url})
      }
      // Call the API from Redux
      if (props.id){
        props.ModifeIdea(form_data, props.id).then(res =>{
          props.loadIdea();
        });
      }
      else {
        props.AddIdea(form_data).then(res => {
          props.loadIdea();
        });
      }
     	handleClose()
    }
  }
  const { t, i18n } = useTranslation();


  return (
    <Grid item>
      {
        props.id ?
          <IconButton
            onClick={openDialog}>
            <EditIcon />
          </IconButton>
        :      
          <Button
            onClick={openDialog}
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            style={{ margin: 20 }}>
              {t('New Idea')}
          </Button>
      }	
      <Dialog
	  	   maxWidth="lg"
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{t('Modify the idea')}</DialogTitle>
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
            multiline={true}
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={description['description']}
            error={description['error']}
            onChange={descriptionChange}
          />

          <TextField
            required
            multiline={true}
            margin="dense"
            id="email"
            name="email"
            label={t('email')}
            type="text"
            fullWidth
            value={email['email']}
            error={email['error']}
            onChange={emailChange}
          />

          <Grid item md={12} xs={12} >
              <Card className={classes.cadre}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {imgValues.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {t('Select an image')}
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
                  className={classes.cover} image={imgValues.url} title={t('Select an image')}
                />
              </Card>
            </Grid>


        </DialogContent>
        <Divider style={{ width: '100%' }} />

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t('Cancel')}
          </Button>
          <Button onClick={sendForm} color="primary" variant="contained">
            {t('Save')}
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}



const mapStateToProps=(state)=>{
	return state
};

export default connect(mapStateToProps, actionCreatore) (ModifieIdea);