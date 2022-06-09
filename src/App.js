import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import StyleSheet from './Components/StyleSheet';

class App extends Component{
  render(){
    return(
      <div className='App'>
        {/* <Counter/> */}
        {/* <Greet/> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        <StyleSheet primary={true}/>
      </div>
    )
  }
}

export default App;
