import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import ChangeLoginPassword from './ChangeLoginPassword';
import ChangeSecurityKey from './ChangeSecurityKey';
import { LAYOUT_NAMES } from "app/layouts/layouts";
import Div from "@jumbo/shared/Div";
import { useJumboApp } from "@jumbo/hooks";

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  alignItems: "center",
  margin: "0px auto",
};

const TabPanel = (props) => {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Div sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Div>
            )}
        </div>
    );
};

const a11yProps = (index) => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
};

const AdminSettings = () => {
    const { setActiveLayout } = useJumboApp();

    React.useEffect(() => {
      setActiveLayout(LAYOUT_NAMES.VERTICAL_ADMIN);
    });

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
      <JumboCardQuick style={cardStyle}>
        <Typography variant={"h3"} mb={0.5}>
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; Select tab to change Security
          Key or Login Password
        </Typography>
        <br /> <br />
        <Div
          sx={{
            width: 650,
            maxWidth: "100%",
            alignItems: "center",
          }}
        >
          <AppBar position="static">
            <Tabs 
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Security Key" {...a11yProps(0)} />
              <Tab label="Login Password" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <ChangeSecurityKey />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <ChangeLoginPassword />
            </TabPanel>
          </SwipeableViews>
        </Div>
      </JumboCardQuick>
    );
};

export default AdminSettings;
