import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    return <div classname="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar 
                    key={dataPint.label}
                    value={dataPoint.value} 
                    maxValue={null}
                    label={dataPoint.label}
                />
            ))}
    </div>
};

export default Chart;