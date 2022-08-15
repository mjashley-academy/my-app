import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parent from './Parent-to-Child/Parent';
import DisplayUsers from './Examples/DisplayUsers';
import CounterApp from './Examples/CounterApp'
import Sum2Num from './Examples/Sum2Num'
import DisplayUsersCls from './Examples/DisplayUsersCls';
import HeighlightMax from './Examples/HeighlightMax';
import RenderCondBased from './Examples/RenderCondBased';
import TwoWayDataBinding from './Examples/TwoWayDataBinding';
import ComponentLifecycle from './Examples/ComponentLifecycle';
import GetFetchAPI from './Examples/GetFetchAPI';
import RefclassComponent from './Examples/RefclassComponent';
import ReffnComponent from './Examples/ReffnComponent';
import ReffwdComponents from './Examples/ReffwdComponents';
import RefcreateRef from './Examples/RefcreateRef';
import RefuseRef from './Examples/RefuseRef';
import PureComponentExample from "./Examples/ReactDesignPattern/PureComponent";
import Compwithstyles from './Examples/Compwithstyles';
import Hoc from './Examples/ReactDesignPattern/HOC/Hoc';
import ButtonOne from './Examples/ReactDesignPattern/HOC/ButtonOne';
import ControlledComponent from './Examples/ControlledAndUncontrolled/ControlledComponent';
import UncontrolledComponent from './Examples/ControlledAndUncontrolled/UncontrolledComponent';
import ContainerAndPresentationalComp from './Examples/ReactDesignPattern/ContainerAndPresentationalComp';
import StyledComp from './Examples/ReactDesignPattern/StyledComp';
import ErrorBoundary from './Examples/ErrorBoundary';
import PropsDrilling from './Examples/PropsDrilling';
import Reactlazy from './Examples/Reactlazy';

class App extends React.Component{
  state = {
    name:"Michael"
  }
changeName = (newName) =>{
  this.setState({
    name:newName
  });
}
changeNameFromInput = (event) =>{
  this.setState({
    name:event.target.value
  })
}
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React</h1>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Reactlazy/>} />
              <Route path="/users" element={<DisplayUsers />} />
              <Route path="/max" element={<HeighlightMax />} />
              <Route path='*' element ={<h2>Page Not Found</h2>} />
            </Routes>
          </BrowserRouter>
          {
            <>
              {/*
                <GetFetchAPI />
              <ComponentLifecycle />
              <TwoWayDataBinding />
            <RenderCondBased/>
              <HeighlightMax />
              <DisplayUsersCls />
              <Sum2Num />
              <CounterApp />
              <DisplayUsers /> */}
            </>
          }
          {/*<Players /> }

          <br />
          <Parent title="Click Me" mjaa = {this.changeName.bind(this, 'Jack')}/>
          <br />
          <button onClick={() => this.changeName("Mike")}>
            Change state Annonumous Fn
          </button>
          <br />
          <button onClick={this.changeName.bind(this, "Mike")}>
            Change state Using Bind Fn
          </button>
          <br />
          <input type="text" onChange={this.changeNameFromInput} value={this.state.name} />

          <div>{this.state.name}</div>
    { */}
        </header>
      </div>
    );
  }
  
}


export default App;
