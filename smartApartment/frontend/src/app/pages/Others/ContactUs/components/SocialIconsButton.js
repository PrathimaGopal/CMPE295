import React from 'react';
import {IconButton, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Div from "@jumbo/shared/Div";

const SocialIconsButton = () => {
    return (
        <Div sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5}}>
            <Typography variant="h1" mb={2}>Follow Us</Typography>
            <Stack direction={"row"} spacing={1} mb={1}>
                <IconButton
                    sx={{
                        borderRadius: 1,
                        color: 'common.white',
                        background: 'linear-gradient(135deg, #91a9f1, #575fd8)',

                        '&:hover': {
                            background: 'linear-gradient(135deg, #575fd8, #91a9f1)',
                        }
                    }}
                    aria-label="facebook"
                >
                    <FacebookIcon/>
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: 1,
                        color: 'common.white',
                        background: 'linear-gradient(135deg, #36bae0, #5a80e8)',

                        '&:hover': {
                            background: 'linear-gradient(135deg, #5a80e8, #36bae0)',
                        }
                    }}
                    aria-label="Twitter"
                >
                    <TwitterIcon/>
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: 1,
                        color: 'common.white',
                        background: 'linear-gradient(135deg, #a436af, #cc4d82)',

                        '&:hover': {
                            background: 'linear-gradient(135deg, #cc4d82, #a436af)',
                        }
                    }}
                    aria-label="Instagram"
                >
                    <InstagramIcon/>
                </IconButton>
            </Stack>
        </Div>
    );
};

export default SocialIconsButton;
