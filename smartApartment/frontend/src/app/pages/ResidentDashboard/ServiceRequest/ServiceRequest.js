import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
}));

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  width: "35vw",
  height: "40vw",
  alignContent: "center",
  margin: "0px auto",
};

const ServiceRequest = ({ item }) => {
  const [isLoading, setLoading] = React.useState(false);
  const [option, setOption] = React.useState("");
  const [complaint, setComplaint] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    setLoading(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSnackBarClose = () => {
    setLoading(false);
  };

  const apt = sessionStorage.getItem("apt");

  const _onClick = () => {
    console.log("Complaint is: ", complaint);
    axios({
      url: `https://hnsf6qoxn7.execute-api.us-west-1.amazonaws.com/ServiceRequest_Test/servicerequestfunction`,
      method: "put",
      data: {
        id: window.crypto.randomUUID(),
        apt: apt,
        category: option,
        message: complaint,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setLoading(true);
          console.log("Submission Success", res.data);
        }
      })
      .catch((err) => {
        console.log("Submission Error:", err);
      });
  };

  return (
    <Card style={cardStyle}>
      <Snackbar
        open={isLoading}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Service request submitted!
        </Alert>
      </Snackbar>
      <div
        id="MenuItem"
        style={{ flex: 1, marginLeft: "60px", lineHeight: "100px" }}
      >
        <h3>File your Complain:</h3>
        <FormControl style={{ minWidth: 400 }}>
          <InputLabel id="demo-controlled-open-select-label">
            Choose an Option:
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={option}
            label="option"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="BakingOven">BakingOven</MenuItem>
            <MenuItem value="Fridge">Fridge</MenuItem>
            <MenuItem value="Lights">Lights</MenuItem>
            <MenuItem value="IoT device">IoT device</MenuItem>
            <MenuItem value="Microwave">Microwave</MenuItem>
            <MenuItem value="Refrigerator">Refrigerator</MenuItem>
            <MenuItem value="IoT device">IoT device</MenuItem>
            <MenuItem value="Washer-Dryer">Washer-Dryer</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div
        id="Textfield"
        style={{ flex: 1, marginLeft: "60px", lineHeight: "100px" }}
      >
        <TextField
          id="standard-multiline-static"
          label="Write to us"
          multiline
          minRows={8}
          onChange={(e) => setComplaint(e.target.value)}
          variant="standard"
          style={{ width: 400 }}
        />
      </div>
      <br /> <br />
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.margin}
        onClick={_onClick}
        style={{ flex: 1, marginLeft: "200px" }}
      >
        Submit
      </Button>
      <br /> <br />
    </Card>
  );
};

export default ServiceRequest;
