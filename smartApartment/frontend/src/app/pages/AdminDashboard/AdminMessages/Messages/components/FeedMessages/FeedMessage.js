import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Span from "@jumbo/shared/Span";
import { ASSET_AVATARS } from "app/utils/constants/paths";
import { getAssetPath } from "app/utils/appHelpers";

const FeedMessage = ({feed}) => {
    let read = feed.status;
    let button;

    if (read === 'true') {
      button = ' ';
    } else {
      button = (
        <Button variant={"contained"} size={"small"}>
          Mark as Read
        </Button>
      );
    }

    return (
      <ListItem alignItems={"flex-start"} sx={{ px: 3 }}>
        <ListItemAvatar sx={{ minWidth: 65 }}>
          <Avatar
            sx={{ width: 52, height: 52, boxShadow: 1 }}
            src={getAssetPath(`${ASSET_AVATARS}/avatar.png`, "52x52")}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant={"h6"} color={"text.secondary"}>
              {feed.time}
            </Typography>
          }
          secondary={
            <Typography component={"div"}>
              <Typography color={"text.primary"} mb={2}>
                <Span sx={{ color: "primary.main" }}>{feed.name}</Span>
                <br />
                <Span sx={{ color: "primary.main" }}> {feed.item} :  </Span>
                <Span sx={{ color: "primary.main" }}> {feed.complaint}</Span>
              </Typography>
              <Stack direction={"row"} spacing={1}>
                {button}
              </Stack>
            </Typography>
          }
        />
      </ListItem>
    );
};

export default FeedMessage;
