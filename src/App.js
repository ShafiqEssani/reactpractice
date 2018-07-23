import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Parent />

      </div>
    );
  }
}

// <h2>Finally</h2>
// <p>prop number is : {this.props.propNumber}</p>
// <p>prop number is : {this.props.propString}</p>
// <p>prop number is : {this.props.propObject.obj1}</p>
// App.propTypes = {
//   // propObject: React.PropTypes.object,
//   propString: React.PropTypes.string,
//   propNumber: React.PropTypes.number
// }

App.defaultProps = {
  propNumber: 3,
  propString: "THis is prop string",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3"
  }
}


class Parent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars: ['s-BMW', 's-MERC', 's-City', 's-Audi']
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log("in clck");
    this.setState( { cars: this.state.cars.reverse()})
  }
  render(){
    return(
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2 onClick={this.handleClick}>some text</h2>
        <Cars myMsg="cars are cool" anotherProp="1234" coolCars={this.state.cars}/>
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'City', 'Audi']
}

class Cars extends Component {
  render(){
    console.log(this.props);
    return(
      <div>
        <h2>Im from cars {this.props.myMsg}</h2>
        <p>Checking number {this.props.anotherProp}</p>
        <div>taking car inside {this.props.coolCars.map( (item,i) => {
            return <p key={i}>{item}</p>
          })} </div>
        <Body/>
      </div>
    );
  }
}

class Body extends Component {

  constructor(props){
    super(props);

    this.state = {
      r: 0
    };
    this.genRandom = this.genRandom.bind(this);
  }

  genRandom() {
      this.setState({r:  Math.floor(Math.random()*10)})
  }

  render(){
    return(
      <div>
        <button onClick={this.genRandom}>Random Number</button>
        <Numbers myPropWhichisNumber={this.state.r}/>
      </div>
    );
  }
}

class Numbers extends Component {

  componentDidMount(){
    console.log("componentDidMount called here");
  }

  componentWillMount(){
    console.log("componentWillMount called here");
  }

  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps called");
  }

  shouldComponentUpdate(newProps, nextState){
    console.log('Called should component Update');
    return true;
  }
  componentWillUpdate(newProps, nextState){
    console.log('Called component Will Update');
  }
  componentDidUpdate(newProps, nextState){
    console.log('Called component Did Update');
  }
  componentWillUnmount(){
    console.log('Called componentWill un mount');
  }
  render(){
    return(

      <div>
         <br />
        {this.props.myPropWhichisNumber}
      </div>
    );
  }
}

export default App;
