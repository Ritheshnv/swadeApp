import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export default function Contact() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" color="inherit" onClick={handleClickOpen}>
        Contact Us
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Contact Details</DialogTitle>
        <Divider variant="inset"/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Hi, There! Hope you are doing good.
            If you have any suggestions, please get in touch on
            <List>
            <ListItem>
                <ListItemText>
                Email - rithesh.mys@gmail.com
                </ListItemText>
        </ListItem>
        <ListItem>
        <ListItemText>
                Contact num - +91 9632108718
                </ListItemText>
        </ListItem>
      </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
