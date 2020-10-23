import React from 'react';
import './Modal.scss';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IModal {
  title: string;
  titleDialog: string;
  children?: any;
  type: string;
  submitForm?: any; 
  ButtonStyle?: string;
  dialogSizeBtn?: string;
}

export const Modal = ({
  title,
  titleDialog,
  children,
  type,
  submitForm,
  ButtonStyle
}: IModal) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{width: "93%"}}>
          {title}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{titleDialog}</DialogTitle>
        {type === "form" ?
            <form onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); submitForm() ;handleClose() }}>
                {children}
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary" type="submit">
                        Create
                    </Button>
                </DialogActions>
            </form>
            :
            {children}
        }
      </Dialog>
    </>
  );
}