import React, { Component } from 'react';
import logo from './logo.svg';
import Chart from './components/Chart';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
	}

	getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          'English',
          'Maths',
          'Physics',
          'Chemistry',
          'Biology',
          'History'
        ],
        datasets: [
          {
            label: 'Student A',
            backgroundColor: 'rgba(200,0,0,0.2)',
            data: [65, 75, 70, 80, 60, 80]
          },
          {
            label: 'Student B',
            backgroundColor: 'rgba(0,0,200,0.2)',
            data: [54, 65, 60, 70, 70, 75]
          }
        ]
      }
    });
  }
	
	componentWillMount() {
    this.getChartData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chart
          chartData={this.state.chartData}
          location="Massachusetts"
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default App;
