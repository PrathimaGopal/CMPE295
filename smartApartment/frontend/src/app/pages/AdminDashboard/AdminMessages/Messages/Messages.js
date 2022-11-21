import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
//import { latestNotifications } from "./data";
import { TabContext, TabPanel } from "@mui/lab";
import Divider from "@mui/material/Divider";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import MessagesList from "./components/FeedMessages/MessagesList";
import axios from "axios";

const NotificationListComponents = {
  MESSAGES: MessagesList,
};

const LatestAlerts = ({ scrollHeight }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    // Make API Call
    axios({
      url: `https://hnsf6qoxn7.execute-api.us-west-1.amazonaws.com/ServiceRequest_Test/servicerequestfunction`,
      method: "get",
    })
      .then((res) => {
        console.log("API Success");
        if (res.status === 200) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("API error:", err);
      });
  }, []);

  const [value, setValue] = React.useState("notification");
  const GroupTypeComponent = NotificationListComponents["MESSAGES"];

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <JumboCardQuick noWrapper>
      <Typography variant={"h3"} mb={1.5}>
        <br />
        &nbsp; &nbsp; Service Request Messages
      </Typography>
      <TabContext value={value}>
        <TabPanel value="notification" sx={{ p: 0 }}>
          <JumboScrollbar
            autoHeight
            autoHeightMin={scrollHeight ? scrollHeight : 448}
            autoHide
            autoHideDuration={200}
            autoHideTimeout={500}
          >
            <GroupTypeComponent
              key={0}
              notifications={data.Items}
              count={data.Count}
              noHeader={true}
            />
          </JumboScrollbar>
        </TabPanel>
      </TabContext>
      <Divider />
    </JumboCardQuick>
  );
};

export default LatestAlerts;
