import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CmtCard from '../../../@coremat/CmtCard';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
}));

const RequestItem = ({ item }) => {
  const [option, setOption] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleChange = e => {
    setOption(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [complaint, setComplaint] = React.useState('');

  return (
    <CmtCard>
      <div id="MenuItem" style={{ flex: 1, marginLeft: '60px', lineHeight: '100px' }}>
        <h3>File your Complain:</h3>
        <FormControl style={{ minWidth: 400 }}>
          <InputLabel id="demo-controlled-open-select-label">Choose an Option:</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={option}
            label="option"
            onChange={handleChange}>
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
      <div id="Textfield" style={{ flex: 1, marginLeft: '60px', lineHeight: '100px' }}>
        <TextField
          id="standard-multiline-static"
          label="Write to us"
          multiline
          minRows={8}
          onChange={(e, newValue) => setComplaint(newValue)}
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
        style={{ flex: 1, marginLeft: '200px' }}>
        Submit
      </Button>
      <br /> <br />
    </CmtCard>
  );
};

export default RequestItem;
