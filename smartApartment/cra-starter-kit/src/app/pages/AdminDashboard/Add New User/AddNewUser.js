import React, { useState } from "react";
import { Grid, TextField, FormControlLabel, FormControl, RadioGroup, Radio, Select, MenuItem, Slider, Button, FormLabel } from "@mui/material";
import {Box} from "@mui/material"; 
import { useJumboApp } from "@jumbo/hooks";
import { LAYOUT_NAMES } from "app/layouts/layouts";

const defaultValues = {
  name: "",
  age: 0,
  gender: "",
  os: "",
  favoriteNumber: 0,
};

const AddNewUser = () => {
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
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            type="text"
            value={formValues.firstname}
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            type="text"
            value={formValues.lastname}
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="age"
            name="age"
            label="Age"
            type="number"
            value={formValues.age}
            onChange={handleInputChange}
          />
          <br />
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
              row
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
          <br />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
        <br />
      </Grid>
    </form>
  );
};
export default AddNewUser;
