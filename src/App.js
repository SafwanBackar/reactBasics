import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';


class App extends Component{
  render(){
    return(
      <div className='App'>
        {/* <Counter/> */}
        {/* <Greet/> */}
        <FunctionClick/>
        <ClassClick/>
      </div>
    )
  }
}

export default App;
