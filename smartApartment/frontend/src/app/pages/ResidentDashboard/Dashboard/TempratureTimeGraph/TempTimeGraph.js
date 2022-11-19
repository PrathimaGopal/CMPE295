import React, { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import axios from "axios";
import {timetempdata} from "./data"
const TempTimeGraph = ({ activeChart }) => {
 const topChart = activeChart;
 const bottomChart = activeChart === "time" ? "temperature" : "time";
 const topChartColor = activeChart === "time" ? "#F43B86" : "#2D46B9";
 const bottomChartColor = activeChart === "time" ? "#2D46B9" : "#F43B86";
 const [timetemp, setTimetemp] = useState(timetempdata);
 
 function fetchFromAws() {
   axios
     .get(
       "https://wtxngldocf.execute-api.us-west-1.amazonaws.com/prod/temp_graph"
     )
     .then((res) => {
       let holdaws = res.data;
       var final = {};
       var result = [];
       holdaws.data.forEach((el) => {
         for (var key in el) {
           final[key] = {
             temperature: el["temperature"],
             time: el["time"]
           };
         }
         result.push(final.time);
       });
        var sanitizedData = {};
       sanitizedData["dataSummary"] = result;
       setTimetemp(sanitizedData);
     })
     .catch((err) => {
       console.log(err);
     });
   }
   useEffect(() => {
       fetchFromAws();
   },[])
 
 return (
   <ResponsiveContainer height={152}>
     <AreaChart
       data={timetemp.dataSummary}
       margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
     >
       <Tooltip
         content={({ active, label, payload }) => {
           return active ? (
             <div style={{ color: "#fff" }}>
               {payload.map((row, index) => {
                 return (
                   <div key={index} className={"mb-1"}>
                     <div
                       style={{
                         color: row.color,
                         fontSize: 8,
                         letterSpacing: 2,
                         textTransform: "uppercase",
                       }}
                     >
                       {row.name}
                     </div>
                     <div
                       style={{
                         color: row.color,
                       }}
                     >
                       {row.value}
                     </div>
                   </div>
                 );
               })}
             </div>
           ) : null;
         }}
         wrapperStyle={{
           background: "rgba(255,255,255,0.9)",
           borderRadius: 4,
           padding: "5px 8px",
           fontWeight: 500,
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
         }}
       />
       <XAxis tickLine={false} dataKey="temperature" axisLine={false} />
       <Area
         dataKey={bottomChart}
         stackId="2"
         stroke={bottomChartColor}
         fillOpacity={0.5}
         strokeOpacity={0.3}
         fill={bottomChartColor}
       />
       <Area
         dataKey={topChart}
         stackId="1"
         stroke={topChartColor}
         fillOpacity={0.8}
         strokeOpacity={0.3}
         fill={topChartColor}
       />
     </AreaChart>
   </ResponsiveContainer>
 );
};
 
export default TempTimeGraph;

