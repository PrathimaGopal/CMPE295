import React from 'react';
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import FeedInvitation from 'app/shared/widgets/DailyFeed/FeedTypes/FeedInvitation';
import FeedPhotoUpload from 'app/shared/widgets/DailyFeed/FeedTypes/FeedPhotoUpload';
import FeedSharedPost from 'app/shared/widgets/DailyFeed/FeedTypes/FeedSharedPost';
import ListHeader from "./ListHeader";

const feedTypes = {
    PROJECT_INVITATION: FeedInvitation,
    PHOTOS_UPLOADED: FeedPhotoUpload,
    SHARED_POST: FeedSharedPost,
};

const FeedsList = ({count, notifications, noHeader}) => {
    return (
        <React.Fragment>
            {
                !noHeader &&
                <ListHeader
                    title="FEEDS"
                    count={count}
                    action={<Button variant="link">SEE ALL</Button>}
                />
            }
            <List disablePadding>
                {

                    notifications.map(item => {
                        const FeedItemComponent = feedTypes[item.type];
                        return <FeedItemComponent key={`feed-${item.id}`} feed={item} />
                    })
                }
            </List>
        </React.Fragment>
    );
};

export default FeedsList;
