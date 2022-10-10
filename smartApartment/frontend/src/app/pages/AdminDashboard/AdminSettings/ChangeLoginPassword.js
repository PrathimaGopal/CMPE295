import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button
} from "@mui/material";
import { Box } from "@mui/material";

const defaultValues = {
  currentpassword: "",
  newpassword1: "",
  newpassword2: "",
};


const ChangeLoginPassword = () => {
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
    console.log(formValues);
  };

  return (
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
            <br />
            <TextField
              id="current"
              label="Current Password"
              name="currentpassword"
              variant="outlined"
              type="password"
              value={formValues.currentpassword}
              onChange={handleInputChange}
              required
            />
            <br />
            <TextField
              id="new1"
              label="New Password"
              name="newpassword1"
              variant="outlined"
              type="password"
              value={formValues.newpassword1}
              onChange={handleInputChange}
              required
            />
            <br />
            <TextField
              id="new2"
              label="Confirm New Password"
              name="newpassword2"
              variant="outlined"
              type="password"
              value={formValues.newpassword2}
              onChange={handleInputChange}
              required
            />
            <br /> <br />
            <Button variant="contained" color="primary" type="submit">
              Confirm changes
            </Button>
          </Box>
          <br />
        </Grid>
  );
};
export default ChangeLoginPassword;
