import React , {useState , useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import BackupIcon from '@material-ui/icons/Backup';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';


const AddIdea = (props) => {
    
    const [open , setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true)
    };

    const handleClose = async() => {
        setOpen(false);
        console.log(open);

    };

    //declare the form variables 

    const [title, setTitle] = useState({
        title : '',
        error : false,
    })

    const titleChange = (e) => {
        setTitle(title => { return {...title , title: e.target.value}})

        console.log(e.target.value);
    } 
  
    const [description , setDescription] = useState({
        description : '',
        error : false,
    })

    const descriptionChange = (e) => {
        setDescription(description => { return {...description , description: e.target.value}})

        console.log(e.target.value);
    }

    const validateFrom = () => {
        if(title['title'] == ""){
            setTitle(title => { return {...title , error: true}})
            return true;
        }else
        {
            setTitle(title => { return {...title , error: false}})
            return false;
        }
    }

    const sendForm =  () =>{

        if(validateFrom() != true){
            
            const idea = { title: title['title'], description : description['description']};

            axios.post('http://127.0.0.1:8000/ideas/', idea , {
                headers: {
                    'Content-Type': 'application/json'
                }
            });            

            props.onCalculateDistance(true);
            // returnDistance();
            handleClose();
        }

    }

    function returnDistance() {
        const dist = "example";
        props.onCalculateDistance(dist);
        return dist;
    }

    

  return (
      <Grid item> 
    <Button onClick={openDialog} variant="contained" color="primary" startIcon={<AddIcon />} style={{margin:20}} >
        New Idea
    </Button>
    <Dialog 
      fullWidth='true'
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">New Idea</DialogTitle>
        <DialogContent>
            <DialogContentText>
          
            </DialogContentText>

            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select style={{ width: '100%' }} defaultValue="-1">
                <MenuItem value={-1}>Make your choice</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>

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

            <center>
                <Button
                style={{marginTop: 20}}
                variant="contained"
                component="label"
                color="primary"
                startIcon={<BackupIcon/>}
                >
                Upload File
                <input
                    type="file"
                    hidden
                />
                </Button>
            </center>
            
        </DialogContent>
        <Divider style={{width: '100%'}}/>

        <DialogActions>
            <Button onClick={handleClose} color="primary" >
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

export default AddIdea
