import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class StackedBarChart extends Component{
    constructor(props){
      super(props);
      this.state = {
        stackChartData:props.stackChartData
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
          <Bar
            data={this.state.stackChartData}
          
          options = {{
          scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
            }
        }}
        width={600} height={350}
        />
        </div>
      )
    }
  }
export default StackedBarChart