import React from 'react';
import { Typography } from '@mui/material';
import {latestNotifications} from "./data";
import {TabContext, TabPanel} from "@mui/lab";
import Divider from "@mui/material/Divider";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import MessagesList from "./components/FeedMessages/MessagesList";

const NotificationListComponents = {
    "MESSAGES": MessagesList,
};

const LatestAlerts = ({scrollHeight}) => {
    const [value, setValue] = React.useState("notification");
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
              {latestNotifications.map((notificationGroupType, index) => {
                const GroupTypeComponent =
                  NotificationListComponents[`${notificationGroupType.type}`];
                return (
                  <GroupTypeComponent
                    key={index}
                    notifications={notificationGroupType.records}
                    count={notificationGroupType.total}
                    noHeader={true}
                  />
                );
              })}
            </JumboScrollbar>
          </TabPanel>
        </TabContext>
        <Divider />
      </JumboCardQuick>
    );
};

export default LatestAlerts;
