import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loadable from 'react-loadable';
// import StackedBarChart from './components/StackedBarChart';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const StackedBarChart = Loadable({
  loader: () => import('./components/StackedBarChart.js'),
  loading
});

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }


  
  getChartData(){
    // Ajax calls here
    this.setState({
      // chartData:{
      //   labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      //   // yAxisID: "bar-stacked",
      //   datasets:[
      //     {
      //       label:'Population',
      //       data:[
      //         617594,
      //         181045,
      //         153060,
      //         106519,
      //         105162,
      //         95072
      //       ],
      //       backgroundColor:[
      //         'rgba(255, 99, 132, 0.6)',
      //         'rgba(54, 162, 235, 0.6)',
      //         'rgba(255, 206, 86, 0.6)',
      //         'rgba(75, 192, 192, 0.6)',
      //         'rgba(153, 102, 255, 0.6)',
      //         'rgba(255, 159, 64, 0.6)',
      //         'rgba(255, 99, 132, 0.6)'
      //       ]
      //     }
      //   ]
      // }
      chartData: {
        labels: ['Product_1','Product_2', 'Product_3', 'Product_4', 'Product_5'],
        datasets: [
          
            {
            label: 'Low',
            data: [60, 40, 78, 10,44],
            backgroundColor: '#D6E9C6' // green
          },
          {
            label: 'Moderate',
            data: [20, 5, 23, 43, 9],
            backgroundColor: '#FAEBCC' // yellow
          },
          {
            label: 'High',
            data: [10, 12, 12, 43, 32],
            backgroundColor: '#EBCCD1' // red
          }
      ]
    }
    });
  }

  state = {
    showComponent: false
  };

  handleClick = () => {
    this.setState({
      showComponent: true
    });
  };

  
  render() {
    if (this.state.showComponent) {
      return (
        <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <StackedBarChart chartData={this.state.chartData}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello!</h1>
          <button onClick={this.handleClick}>StackedBarChart</button>
          </div>
        </div>
      );
    }
  }
  //   return (
  //     <div className="App">
  //       <header className="App-header">
        
  //         <button onClick={ Charts }>Chart</button>
          
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
