import React , {useState} from 'react';
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


const AddIdea = () => {
    
    const [open , setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true)
    };

    const handleClose = async() => {
        setOpen(false);
        console.log(open);

    };


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
            id="name"
            label="Title"
            type="text"
            fullWidth
            />
             <TextField
            autoFocus
            multiline="true"
            margin="dense"
            id="name"
            label="Description"
            type="email"
            fullWidth
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
            <Button onClick={handleClose} color="primary" variant="contained">
                Save
            </Button>
        </DialogActions>
    </Dialog>
</Grid>
  )
}

export default AddIdea
