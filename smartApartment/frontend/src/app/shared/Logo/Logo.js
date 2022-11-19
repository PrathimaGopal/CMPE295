
import React from 'react';
import Div from "@jumbo/shared/Div";
import Link from "@mui/material/Link";
import {ASSET_IMAGES} from "../../utils/constants/paths";
import { useDispatch, useSelector } from 'react-redux';


const Logo = ({mini, mode, sx}) => {
    const userName = useSelector((state) => { console.log(state) ; return (state.contactsApp.userName) });
    return (
        <Div sx={{display: "inline-flex", ...sx}}>
            <Link href={'/dashboards/misc'}>
                {
                    !mini ?
                        (!userName ? <img src={ mode === "light" ? `${ASSET_IMAGES}/logo.png` : `${ASSET_IMAGES}/logo-white.png`} alt="Jumbo React" /> : <h3>{userName}</h3>)
                        :
                        <img src={mode === "light" ? `${ASSET_IMAGES}/logo-short.png` : `${ASSET_IMAGES}/logo-short-white.png`} alt="Jumbo React" />
                }
            </Link>
        </Div>
    );
};

Logo.defaultProps = {
    mode: "light"
};

export default Logo;