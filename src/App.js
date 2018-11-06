import React, { Component } from 'react';
import CSVReader from "react-csv-reader";
import './App.css';
import ShowData from "./components/ShowData"
import Chart from './components/linechart';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData : {
        labels : [],
        datasets :[{
          label : "",
          data :[]
        }]
      },
    }
  }
  handleFileUpload = data => {
    this.getChartData(data)
  }
  getChartData(data){
    let years = []
    let score = []
    for(let p=0; p<data.length; p++) {
      for(let i=0; i< data[p].length; i++) {
        let arr1 = data[p][i].split(" ")
        for(let j=0;j< arr1.length; j++) {
          let arr2 = arr1[j].split("|")
          for(let k=0; k<arr2.length; k++) {
            if(arr2[k].length === 4) {
              years.push(arr2[k])
            } else {
              score.push(arr2[k])
            }
          }
        }
      }
    }
    var scorearr = score.filter( element => !element.includes("SER"))  
    this.setState({
      chartData : {
        labels : years,
        datasets : [
          {
            label : "Score",
            data : scorearr
          }
        ]
      }
    });
  //  console.log(this.state.chartData)
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <CSVReader
            cssClass="react-csv-input"
            label="Upload CSV from your computer"
            onFileLoaded={this.handleFileUpload}
          />  
          <ShowData data = {this.state.chartData}
            location = "fisson labs"
            displayTitle = "Hello"
            title = "Line Chart Data"
            displayLegend = "Legend"
            legendPosition = "Position"
          />
        </div>      
      </div>
    );
  }
}

export default App;