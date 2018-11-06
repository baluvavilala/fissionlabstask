import React, { Component } from 'react';
import CSVReader from "react-csv-reader";
import './App.css';
import ShowData from "./components/ShowData"

class App extends Component {
  /** 
   Initialize the chart data with default values to set chart data
  */
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
  /** 
   Below function will responsible to parse the data from CSV 
   which we have we have uploaded from the local computer and
   It is in the form of array of arrays
  */
  handleFileUpload = data => {
    this.getChartData(data)
  }
  /** 
   Below function will handling the logic to iterate over data
   which is getting from CSV and will split this data in the form 
   X- axis as Years
   Y- axis as Score
  */
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
    /** Logic to remove "SERIES1, SERIES2, SERIES3 and SERIES4" */
    let scorearr = score.filter( element => !element.includes("SER"))  
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
            label="Fission Labs"
            onFileLoaded={this.handleFileUpload}
          />  
          <ShowData data = {this.state.chartData}
            location = "fisson labs"
            displayTitle = "Hello"
            title = "CSV Data in the form of Line Chart"
            displayLegend = "Legend"
            legendPosition = "Position"
          />
        </div>      
      </div>
    );
  }
}

export default App;