import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@mui/material";
import { useState } from "react";

export default function EditModal({children}){

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
        <div className="form-dialog">
        <Button variant="outlined" onClick={handleClickOpen}>
        Edit this section
        </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit the information</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Done</Button>
        </DialogActions>
      </Dialog>
        </div>
      </>
    )

}