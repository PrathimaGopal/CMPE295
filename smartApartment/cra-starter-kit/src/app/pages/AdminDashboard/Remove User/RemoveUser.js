import React, { useState } from "react";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
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

const defaultValues = {
  firstname: "",
  lastname: "",
  email: "",
  ssn: "",
  mobile: "",
  aptno: "",
  leaseExpiry: "",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const Transition = React.forwardRef((props, ref) => {
    return <Slide direction="down" ref={ref} {...props} />;
  });

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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enter details to remove a resident
            </Typography>
            <br />
            <InputLabel id="aptnumber">Apartment Number</InputLabel>
            <Select
              name="aptno"
              id="aptnumber"
              value={formValues.aptno}
              label="Apartment Number"
              onChange={handleInputChange}
              required
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
            <br />
            <TextField
              id="firstname"
              label="First Name"
              name="firstname"
              variant="outlined"
              type="text"
              value={formValues.firstname}
              onChange={handleInputChange}
              required
            />
            <br />
            <TextField
              id="lastname"
              label="Last Name"
              name="lastname"
              variant="outlined"
              type="text"
              value={formValues.lastname}
              onChange={handleInputChange}
              required
            />
            <br />
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              type="text"
              name="email"
              placeholder="abc@abc.com"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <br />
            <TextField
              id="mobile"
              label="Mobile Number"
              variant="outlined"
              type="text"
              name="mobile"
              placeholder="1234567890"
              value={formValues.mobile}
              onChange={handleInputChange}
              required
            />
            <br />
            <TextField
              id="date"
              name="leaseExpiry"
              label="Lease Expiry"
              type="date"
              placeholder="YYYY-MM-DD"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br /> <br />
            <Button variant="contained" onClick={() => setOpen(true)}>
              Confirm
            </Button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
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
                <Button onClick={() => setOpen(false)}>Submit</Button>
              </DialogActions>
            </Dialog>
          </Box>
          <br />
        </Grid>
    </Card>
  );
};
export default RemoveUser;
