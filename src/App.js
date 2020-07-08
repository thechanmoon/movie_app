import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component
{
  state = {
    number: 0
  }
  
  addNumber = () =>
  {
    // this.setState({number: this.state.number+1})
    this.setState(prevState=>({number: prevState.number+1}))
  }

  subtractNumber = () =>
  {
    // this.setState({number: this.state.number-1})
    this.setState(prevState=>({number: prevState.number-1}))
  }

  render()
  {
    return (<div>
      
      <h1> The Number is: {this.state.number} </h1>
      {/* <button onClick = {()=>this.setState( {number: this.state.number+1})}>Add</button>
      <button onClick = {()=>this.setState( {number: this.state.number-1})}>Subtract</button> */}
      <button onClick = {this.addNumber}>Add</button>
      <button onClick = {this.subtractNumber}>Subtract</button>
      
    </div>)
  }
}
export default App;
 