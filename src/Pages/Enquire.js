import React, { useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import SearchIcon from '@mui/icons-material/Search';
import $ from 'jquery'; // Import jQuery

export default function Enquire() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const tools = [
    { id: 1, name: 'Invoice creator' },
    { id: 2, name: 'lzutf8 Compression/Decompression' },
    { id: 3, name: 'lz77 Compression/Decompression' },
    // Add more tools as needed
  ];

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = () => {
    handleOpen()
    const name = $('#outlined-basic-fullname').val();
    const email = $('#outlined-basic-email').val();
    const enquiry = $('#outlined-basic-message').val();

    // Perform the post request
    $.get(
      'https://v1.donotes.app/labsenquiry.php', // Replace with your API URL
      { name, email, enquiry },
      (data) => {
        // Check the response f
        handleClose()
          setOpenDialog(true);
          setDialogMessage(data);
        
      }
    );
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
    
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Card
        sx={{
          padding: 2,
          borderRadius: 5,
          display: 'flex',
          width: '60%',
          minWidth: 333,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        elevation={2}
      >
        <h1>Enquire</h1>
        <Grid container spacing={2} sx={{ justifyContent: 'center', width: '100%' }}>
          <Grid xs={10} sm={5} sx={{ margin: 1 }}>
            <TextField
              id="outlined-basic-fullname"
              label="Full name"
              variant="outlined"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid xs={10} sm={5} sx={{ margin: 1 }}>
            <TextField
              id="outlined-basic-email"
              label="E-mail address"
              variant="outlined"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid xs={10} sm={10.2} sx={{ margin: 1 }}>
            <TextField
              id="outlined-basic-message"
              label="Message"
              variant="outlined"
              style={{ width: '100%' }}
              multiline
              minRows={4}
            />
          </Grid>
          <Grid xs={10} sm={10.2} sx={{ margin: 1 , justifyContent: 'left'}}>
            
          <md-filled-tonal-button onClick={handleSubmit}>
  Submit Enquiry
  
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
</md-filled-tonal-button>
          </Grid>
        </Grid>
      </Card>

      {/* Error Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Enquiry</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
