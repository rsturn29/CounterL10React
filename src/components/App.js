import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, numberInput, numberChange, } from '../actions/index';

class App extends React.Component {

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement}
         onDecrement={this.props.onDecrement } onNumberInput={this.props.onNumberInput}
         onNumberChange={this.props.onNumberChange} buttonClicked={this.props.buttonClicked} />
      
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onNumberInput: ()=> dispatch(numberInput()),
    onNumberChange: (number)=> dispatch(numberChange(number)),
    
   
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      inputNumber: state.inputNumber,
      buttonClicked: state.buttonClicked
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);