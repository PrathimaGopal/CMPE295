import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { Box } from "@mui/material";
import { useJumboApp } from "@jumbo/hooks";
import { Card } from "@mui/material";
import { LAYOUT_NAMES } from "app/layouts/layouts";
import axios from "axios";


const defaultValues = {
  email: "",
};

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  width: "40vw",
  height: "45vw",
  alignItems: "center",
  margin: "0px auto",
};

const RemoveUser = () => {
  const { setActiveLayout } = useJumboApp();

  React.useEffect(() => {
    setActiveLayout(LAYOUT_NAMES.VERTICAL_ADMIN);
  });

  const [formValues, setFormValues] = useState(defaultValues);
  const [open, setOpen] = React.useState(false);
  const [openMessage, setOpenMessage] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    try{
      const response = await axios.delete('https://j4ltvhdp18.execute-api.us-west-1.amazonaws.com/prod/user',{data : formValues});
      setMessage(response?.data?.Message);
      setOpen(false);
      setOpenMessage(true);
    }catch(error){
      setMessage('Unknown error happened.');
      setOpen(false);
      setOpenMessage(true);
    };
  };

  // const Transition = React.forwardRef((props, ref) => {
  //   return <Slide direction="down" ref={ref} {...props} />;
  // });

  return (
    <Card style={cardStyle}>
        <Grid container>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
              marginLeft: "100px",
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography variant={"h3"} mb={0.5}>
              <br />
              Delete a Resident.
            </Typography>
            <Typography variant={"h6"} mb={0.5}>
              <i>Please use residents email id to delete.</i>
            </Typography>
            <br />
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <br />
            <Button variant="contained" onClick={() => setOpen(true)}>
              Delete
            </Button>
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>
                {"Are you sture to delete the account?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Once you click Submit, the resident will no longer be allowed
                  to enter the apartment.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => handleSubmit()}>Submit</Button>
              </DialogActions>
            </Dialog>
            <Dialog
              open={openMessage}
              onClose={() => setOpenMessage(false)}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  {message}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenMessage(false)}>Ok</Button>
              </DialogActions>
            </Dialog>
          </Box>
          <br />
        </Grid>
    </Card>
  );
};
export default RemoveUser;