import React from 'react';
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {tempdata} from "./data";

const TempHumidityGraph = ({activeChart}) => {

    const topChart = activeChart;
    const bottomChart = activeChart === "temperature" ? "humidity" : "temperature";
    const topChartColor = activeChart === "temperature" ? "#F43B86" : "#2D46B9";
    const bottomChartColor = activeChart === "temperature" ? "#2D46B9" : "#F43B86";

    return (
        <ResponsiveContainer height={152}>
            <AreaChart data={tempdata.dataSummary} margin={{top: 0, right: 20, left: 20, bottom: 0}}>
                <Tooltip
                    content={({active, label, payload}) => {
                        return active ? (
                            <div style={{color: "#fff"}}>
                                {payload.map((row, index) => {
                                    return (
                                        <div key={index} className={"mb-1"}>
                                            <div style={{
                                                color: row.color,
                                                fontSize: 8,
                                                letterSpacing: 2,
                                                textTransform: 'uppercase'
                                            }}>
                                                {(row.name)}
                                            </div>
                                            <div style={{
                                                color: row.color
                                            }}
                                            >{row.value}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : null;
                    }}
                    wrapperStyle={{
                        background: 'rgba(255,255,255,0.9)',
                        borderRadius: 4,
                        padding: '5px 8px',
                        fontWeight: 500,
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                />
                <XAxis tickLine={false} dataKey="month" axisLine={false}/>
                <Area dataKey={bottomChart} stackId="2" stroke={bottomChartColor} fillOpacity={.5} strokeOpacity={.3}
                      fill={bottomChartColor}/>
                <Area dataKey={topChart} stackId="1" stroke={topChartColor} fillOpacity={.8} strokeOpacity={.3}
                      fill={topChartColor}/>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default TempHumidityGraph;
