import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class TimeScaleChart extends Component{
    constructor(props){
      super(props);
      this.state = {
        timeScaleChartData:props.timeScaleChartData
      }
    }
  
    // static defaultProps = {
    //   displayTitle:true,
    //   displayLegend: true,
    //   legendPosition:'right',
    //   location:'City'
    // }
  
    render(){
      return (
        <div className="chart">
          <Line
            data={this.state.timeScaleChartData}
     
          options = {{
            fill: false,
            responsive: true,
          scales: {
            xAxes: [{
                type: 'time',
                display: true,
                time:{
                    unit:'month',
                    displayFormats:{
                        month:'MMM YYYY'
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: "Month",
                }
            }]
            ,
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Trend",
                }
            }]
            }
        }}
        width={600} height={350}
        />
        </div>
      )
    }
  }
export default TimeScaleChart