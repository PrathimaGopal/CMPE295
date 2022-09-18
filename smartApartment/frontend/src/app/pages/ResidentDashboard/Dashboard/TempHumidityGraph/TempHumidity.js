import React from 'react';
import TempHumidityGraph from "./TempHumidityGraph";
import {Card, CardContent, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Div from "@jumbo/shared/Div";

const TempHumidity = () => {
    const [activeChart, setActiveChart] = React.useState("expense");
    return (
        <Card>
            <CardContent sx={{
                display: 'flex',
                minWidth: 0,
                alignItems: 'flex-start',
                justifyContent: 'space-between'
            }}
            >
                <Stack direction={"row"} spacing={3}>
                    <Div>
                        <Typography variant={"h4"} mb={5}>Temperature - Humidity Graph</Typography>
                    </Div>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                    <Button variant={activeChart === "temperature" ? "contained" : "outlined"}
                            size={"small"}
                            onClick={() => setActiveChart("temperature")}
                    >Temperature</Button>
                    <Button variant={activeChart === "humidity" ? "contained" : "outlined"}
                            disableElevation
                            color={"secondary"}
                            size={"small"}
                            onClick={() => setActiveChart("humidity")}
                    >Humidity</Button>
                </Stack>
            </CardContent>
            <TempHumidityGraph activeChart={activeChart}/>
        </Card>
    );
};

export default TempHumidity;
