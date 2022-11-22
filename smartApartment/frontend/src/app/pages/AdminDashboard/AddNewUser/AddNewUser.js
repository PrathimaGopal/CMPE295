import React, { useState, useEffect, Fragment, useRef } from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  Button,
  FormLabel,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Box } from "@mui/material";
import { useJumboApp } from "@jumbo/hooks";
import { Card } from "@mui/material";
import { LAYOUT_NAMES } from "app/layouts/layouts";
import axios from "axios";
import UserPool from "app/UserPool";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const defaultValues = {
  firstname: "",
  lastname: "",
  dob: "",
  gender: "",
  email: "",
  ssn: "",
  mobile: "",
  aptno: "",
  rent: "",
  leaseexpiry: "",
  accesslevel: "RESIDENT",
};

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  width: "40vw",
  height: "63vw",
  alignItems: "center",
  margin: "0px auto",
};

const attributeGenerator = (formValue) => {
  const attributeList = new Array();

  const attributeKeys = Object.keys(formValue);

  for (let i = 0; i < attributeKeys.length; i++) {
    let attributeData = {
      Name:
        attributeKeys[i] != "email"
          ? `custom:${attributeKeys[i]}`
          : attributeKeys[i],
      Value: formValue[attributeKeys[i]].toString(),
    };

    let attributeField = new CognitoUserAttribute(attributeData);

    attributeList.push(attributeField);
  }

  return attributeList;
};

const AddNewUser = () => {
  const [openMessage, setOpenMessage] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const { setActiveLayout } = useJumboApp();

  React.useEffect(() => {
    setActiveLayout(LAYOUT_NAMES.VERTICAL_ADMIN);
  });

  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const emailInput = formValues?.email;
    const passwordInput = formValues?.ssn;

    const attributeList = attributeGenerator(formValues);

    UserPool.signUp(
      emailInput,
      passwordInput,
      attributeList,
      null,
      function (err, result) {
        if (err) {
          setMessage(`${err.message}`);
          setOpenMessage(true);
        } else{
          setFormValues(defaultValues);
          setMessage(`User creation successful. Please use email & SSN as your login credentials.`)
          setOpenMessage(true);
        }
      }
    );
  };

  return (
    <Fragment>
      <Card style={cardStyle}>
        <form onSubmit={handleSubmit} >
          <Grid container>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "45ch" },
                marginLeft: "100px",
              }}
              noValidate
              autoComplete="off"
            >
              <Typography variant={"h3"} mb={0.5}>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enter details for New
                Resident
              </Typography>
              <br />
              <TextField
                id="outlined1"
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
                id="outlined"
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
                id="date"
                label="Birthday"
                name="dob"
                type="date"
                defaultValue="YYYY-MM-DD"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={formValues.dob}
                onChange={handleInputChange}
                required
              />
              <br />
              <Grid item>
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup
                    name="gender"
                    value={formValues.gender}
                    onChange={handleInputChange}
                    row
                    required
                  >
                    <FormControlLabel
                      key="male"
                      value="male"
                      control={<Radio size="small" />}
                      label="Male"
                    />
                    <FormControlLabel
                      key="female"
                      value="female"
                      control={<Radio size="small" />}
                      label="Female"
                    />
                    <FormControlLabel
                      key="other"
                      value="other"
                      control={<Radio size="small" />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
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
                id="mob number"
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
                id="rent"
                name="rent"
                label="Rent"
                type="text"
                placeholder="000$"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={formValues.rent}
                onChange={handleInputChange}
                required
              />
              <br />
              <TextField
                id="ssn"
                label="SSN"
                variant="outlined"
                type="text"
                name="ssn"
                placeholder="1234567890"
                value={formValues.ssn}
                onChange={handleInputChange}
                required
              />
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
                id="leaseExpiryDate"
                name="leaseexpiry"
                label="Lease Expiry"
                type="date"
                placeholder="YYYY-MM-DD"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={formValues.leaseexpiry}
                onChange={handleInputChange}
                required
              />
              <br /> <br />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
            <br />
          </Grid>
        </form>
      </Card>
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
    </Fragment>
  );
};
export default AddNewUser;