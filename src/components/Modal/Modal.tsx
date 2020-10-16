import React from 'react';
import './Modal.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const STYLES = ["modal--primary"];
const SIZES = ["modal--medium"];
const COLORS = ["modal--primary-color"];

interface IModal {
    children?: any;
    title?: string;
    modalStyles?: string;
    modalSizes?: string;
    modalColors?: string;
    show: boolean;
}

export const Modal = ({
    children,
    title,
    modalColors,
    modalSizes,
    modalStyles,
    show
}: IModal) => {
    modalColors = modalColors === undefined ? "modal--primary-color" : modalColors;
    modalSizes = modalSizes === undefined ? "modal--medium" : modalSizes;
    modalStyles = modalStyles === undefined ? "modal--primary" : modalStyles;

    const checkModalStyles = STYLES.includes(modalStyles) ? modalStyles : "modal--primary";
    const chekcModalSizes = SIZES.includes(modalSizes) ? modalSizes : "modal--medium";
    const checkModalColors = COLORS.includes(modalColors) ? modalColors : "modal--primary-color";

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    if (show == true) {
        return (
            <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To subscribe to this website, please enter your email address here. We will send updates
                  occasionally.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Subscribe
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        )
    } else {
        return null;
    }
}