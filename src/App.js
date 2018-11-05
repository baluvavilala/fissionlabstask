import React, { Component } from 'react';
import CSVReader from "react-csv-reader";
import './App.css';
import Chart from './components/linechart';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartdata : {},
      data : []
    }
  }
  // handleFileUpload = data => {
  //   this.getChartData(data)
  // }

  componentWillMount() {
    this.getChartData()
  }
  getChartData(){
    // let chartdata = data.reduce((accumulator, currentValue ) => accumulator.concat(currentValue),[]);
    // let strdata = chartdata.join(' ')
    // let remSer = strdata.split('|')
    // console.log(data)
    // for(let i=0; i< data.length; i++) {
    //   data[i].shift()
    // }
    // for(let j=0; j< data.length; j++) {
    //   let strdata = data[j].join(" ")
    //   // let strarr = strdata.split(" ")
    //   // for(let k=0;k< strdata.length;k++) {
    //   //   console.log(strdata[k].split("|"))
    //   // }
    // }
    /*
      ["1990|20", "1991|21", "1992|31", "1993|49", "1995|21", "1996|50", "1997|52", "1998|53", "1999|54", "1999|62", "2000|63"]
      ["1991|10", "1992|12", "1994|16", "1993|37", "1995|18", "1996|24", "1997|21", "1998|23", "1999|31", "1999|32", "2000|22"]
      ["1999|62", "1991|21", "1992|11", "1993|23", "1995|11", "1996|30", "1997|42", "1998|23", "1991|34", "2000|63", "2003|12"]
      ["1993|23", "1991|11", "1992|31", "1994|11", "1996|60", "1997|72", "1998|23", "1999|44", "2001|21", "2000|63", "2001|21"]
    */
    this.setState({
      chartData:{
        labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '2000'],
        datasets:[
          {
            label:'Score',
            data:[20, 21, 31, 49, 21, 50, 52, 53, 54, 62, 63]
          }
        ]
      }
    });
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
        </div>      
        <div className='showdata'> 
          <Chart chartData={this.state.chartData} 
                 title="FissionLabs CSV Data" legendPosition="bottom"/>
        </div>
      </div>
    );
  }
}

export default App;