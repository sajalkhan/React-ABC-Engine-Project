import React, { useState, createContext } from 'react'
import StepOne from './Components/firstStepComponent/step1';
import StepTwo from './Components/secondStepComponent/step2';
import StepThree from './Components/thirdStepComponent/step3';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export const Context = createContext();

const App = () => {

  const [state, setState] = useState({
    name: '',
    description: '',
    client: '',
    constructor: '',
    max_x: '',
    min_x: '',
    max_y: '',
    min_y: '',
    max_z: '',
    min_z: '',
    chart: []
  });

  const updateValue = (event) => {
    if ((event.target.name === 'max_x') || (event.target.name === 'min_x') || (event.target.name === 'max_y') || (event.target.name === 'min_y') || (event.target.name === 'max_z') || (event.target.name === 'min_z'))
    {
      if(typeof event.target.name !== 'number') return;
    }
    setState({ ...state, [event.target.name]: event.target.value });
  }

  const handleOnFileLoad = (data) => {

    var max_x = -999999999999;
    var min_x = 9999999999999;
    var max_y = -999999999999;
    var min_y = 99999999999999;
    var max_z = -999999999999;
    var min_z = 99999999999999;
    var chartData = [];

    for (var i = 1; i < data.length; i++) {
      chartData.push({x_axis:data[i].data[0], y_axis:data[i].data[1], x: data[i].data[1], y: data[i].data[2], z: data[i].data[3]});
      if (parseFloat(max_x) < parseFloat(data[i].data[1])) max_x = data[i].data[1];
      if (parseFloat(max_y) < parseFloat(data[i].data[2])) max_y = data[i].data[2];
      if (parseFloat(max_z) < parseFloat(data[i].data[3])) max_z = data[i].data[3];
      if (parseFloat(min_x) > parseFloat(data[i].data[1])) min_x = data[i].data[1];
      if (parseFloat(min_y) > parseFloat(data[i].data[2])) min_y = data[i].data[2];
      if (parseFloat(min_z) > parseFloat(data[i].data[3])) min_z = data[i].data[3];
    }

    if (data.length) {
      setState({ ...state, max_x: max_x, min_x: min_x, max_y: max_y, min_y: min_y, max_z: max_z, min_z: min_z, chart: {chartData} });
    }
    
    // console.log('mx_x ', max_x, ' mx_y ', max_y, ' mx_z ', max_z, ' mi_x ', min_x, ' mi_y ', min_y, ' mi_z ', min_z);

  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  return (

    <Context.Provider value={{ ...state, updateValue: updateValue, handleOnFileLoad: handleOnFileLoad, handleOnError: handleOnError }}>
      <Router>
        <Switch>
          <Route exact path="/" component={StepOne} />
          <Route exact path="/step2" component={StepTwo} />
          <Route exact path="/step3" component={StepThree} />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
