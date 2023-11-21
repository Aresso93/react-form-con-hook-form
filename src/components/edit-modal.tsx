import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function EditModal({ children }) {
  const {handleSubmit} = useFormContext();
  const onSubmit = (data) => console.log("AAAAAAAA", data);
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
          <DialogContent>{children}</DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleSubmit(onSubmit);
                handleClose();
              }}
            >
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
