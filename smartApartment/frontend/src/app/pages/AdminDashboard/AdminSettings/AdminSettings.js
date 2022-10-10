import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import { useJumboApp } from "@jumbo/hooks";
import { Card } from "@mui/material";
import { LAYOUT_NAMES } from "app/layouts/layouts";

const defaultValues = {
  currentpassword: "",
  newpassword1: "",
  newpassword2: "",
};

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  width: "40vw",
  height: "29vw",
  alignItems: "center",
  margin: "0px auto",
};

const AdminSettings = () => {
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
              &nbsp;&nbsp;&nbsp; Enter details to change security key
            </Typography>
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
              label="New Password"
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
    </Card>
  );
};
export default AdminSettings;
