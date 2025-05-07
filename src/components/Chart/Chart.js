import React from "react";
import ChartBar from "./ChartBar";

function Chart(porps){
    return <div className="chart"></div>
    {porps.datapoints.map(datapoint => <ChartBar key = {datapoint.label} value = {datapoint.value} maxValue = {null} label = {datapoint.label}/>)}
}