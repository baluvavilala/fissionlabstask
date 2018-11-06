import React from 'react';
import {Line} from 'react-chartjs-2';
const ShowData = (props) => {
    console.log(props.data.labels.length)
    if(props.data.labels.length) {
        return(
            <div className="chart">
            <Line
              data={props.data}
              options={{
                title:{
                  display:props.displayTitle,
                  text:props.title,
                  fontSize:25
                },
                legend:{
                  display:props.displayLegend,
                  position:props.legendPosition
                }
              }}
            />
          </div>
        )
    } else {
        return(
            <h2> Please select file...</h2>
        )
    }
}
 
export default ShowData;