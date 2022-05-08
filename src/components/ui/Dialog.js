import { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const MyDialog = ({
  children,
  outsideOpen,
  closeDialog,
}) => { 
  const [open, setOpen] = useState(outsideOpen);

  useEffect(()=> {
    setOpen(outsideOpen);
  }, [outsideOpen]);

  return (
    <Dialog open={open}>
      <DialogContent>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Confirm Message
            </Typography>
            {children}
            <Button color="primary" onClick={() => {setOpen(false); closeDialog(false); }}>Cancel</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
};

export default MyDialog;
