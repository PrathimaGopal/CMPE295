import React from 'react';
import List from "@mui/material/List";
import Div from '@jumbo/shared/Div';
import { Typography } from '@mui/material';
import FeedMessage from "./FeedMessage";

const MessagesList = ({title, count, notifications, noHeader}) => {
    return (
        <React.Fragment>
            {
                !noHeader &&
                <Div className={"d-flex align-items-center justify-content-between px-4 pt-4"}>
                    <Typography variant={"h4"} color={"text.secondary"}>{count} {title}</Typography>
                </Div>               
            }
            <List disablePadding>
                {
                    notifications.map(item => {
                        return <FeedMessage key={`message-${item.id}`} feed={item}/>
                    })
                }
            </List>
        </React.Fragment>
    );
};

export default MessagesList;

/*
<ListHeader
                    title="MESSAGES"
                    count={count}
                    action={<Button variant="link">SEE ALL</Button>}
                /> */
