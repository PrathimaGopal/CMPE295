import React from "react";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Div sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Div>
            )}
        </div>
    );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TemperatureController = () => {
  const [value, setValue] = React.useState(0);
  return (
    <JumboCardQuick title={"Temperature Controller"}>
            <Tabs
              value={value}
              onChange={(event, newValue) => setValue(newValue)}
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
            </Tabs>
          <TabPanel value="one" index={0}>
            Item Onemn nm
          </TabPanel>
          <TabPanel value="two" index={1}>
            Item Two
          </TabPanel>
    </JumboCardQuick>
  );
};

export default TemperatureController;
